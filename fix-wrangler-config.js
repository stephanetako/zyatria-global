import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

const wranglerPath = join(process.cwd(), 'dist', 'server', 'wrangler.json');
const entryPath = join(process.cwd(), 'dist', 'server', 'entry.mjs');

try {
  // Vérifier que les fichiers existent
  if (!existsSync(wranglerPath)) {
    console.log('⚠️  wrangler.json non trouvé, skip');
    process.exit(0);
  }

  // 1. Corriger wrangler.json
  const config = JSON.parse(readFileSync(wranglerPath, 'utf-8'));
  let modified = false;
  
  // Supprimer le champ connect qui cause un warning
  if (config.connect) {
    delete config.connect;
    console.log('✅ Champ "connect" supprimé de wrangler.json');
    modified = true;
  }
  
  // Renommer le binding ASSETS en STATIC_ASSETS (ASSETS est réservé par Cloudflare)
  if (config.assets) {
    if (config.assets.binding === 'ASSETS') {
      config.assets.binding = 'STATIC_ASSETS';
      console.log('✅ Binding ASSETS renommé en STATIC_ASSETS dans wrangler.json');
      modified = true;
    } else if (config.assets.binding === 'STATIC_ASSETS') {
      console.log('✅ Configuration assets déjà correcte dans wrangler.json');
    }
  }
  
  // Vérifier les bindings dans le tableau
  if (config.bindings) {
    config.bindings = config.bindings.map(binding => {
      if (binding.name === 'ASSETS') {
        console.log('✅ Binding ASSETS renommé en STATIC_ASSETS dans bindings array');
        modified = true;
        return { ...binding, name: 'STATIC_ASSETS' };
      }
      return binding;
    });
  }
  
  // Écrire la configuration corrigée si modifiée
  if (modified) {
    writeFileSync(wranglerPath, JSON.stringify(config, null, 2));
    console.log('✅ wrangler.json mis à jour');
  }
  
  // 2. Corriger entry.mjs si existe
  if (existsSync(entryPath)) {
    let entryContent = readFileSync(entryPath, 'utf-8');
    const originalContent = entryContent;
    
    // Remplacer toutes les occurrences de env.ASSETS par env.STATIC_ASSETS
    entryContent = entryContent.replace(/env\.ASSETS\b/g, 'env.STATIC_ASSETS');
    entryContent = entryContent.replace(/env\["ASSETS"\]/g, 'env["STATIC_ASSETS"]');
    entryContent = entryContent.replace(/env\['ASSETS'\]/g, "env['STATIC_ASSETS']");
    
    if (entryContent !== originalContent) {
      writeFileSync(entryPath, entryContent);
      console.log('✅ Références env.ASSETS remplacées par env.STATIC_ASSETS dans entry.mjs');
    } else {
      console.log('✅ Aucune référence env.ASSETS trouvée dans entry.mjs');
    }
  }
  
  console.log('✅ Configuration complète mise à jour');
} catch (error) {
  console.error('❌ Erreur lors de la correction:', error.message);
  // Ne pas faire échouer le build
  console.log('⚠️  Continuant malgré l\'erreur...');
  process.exit(0);
}



