#!/usr/bin/env pwsh
# Script de déploiement Cloudflare - Correction complète
# Auteur: Assistant IA
# Date: 2025

Write-Host "🚀 DÉPLOIEMENT CLOUDFLARE - CORRECTION COMPLÈTE" -ForegroundColor Cyan
Write-Host "=================================================" -ForegroundColor Cyan
Write-Host ""

# Étape 1: Nettoyer les fichiers de build
Write-Host "🧹 Étape 1/5: Nettoyage des fichiers de build..." -ForegroundColor Yellow
Remove-Item -Recurse -Force dist, .astro, node_modules/.vite -ErrorAction SilentlyContinue
Write-Host "✅ Nettoyage terminé" -ForegroundColor Green
Write-Host ""

# Étape 2: Corriger le script postbuild
Write-Host "🔧 Étape 2/5: Vérification de fix-routes.js..." -ForegroundColor Yellow
if (Test-Path "fix-routes.js") {
    Write-Host "✅ fix-routes.js existe" -ForegroundColor Green
} else {
    Write-Host "⚠️  fix-routes.js manquant - création..." -ForegroundColor Yellow
    @"
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

const routesPath = join(process.cwd(), 'dist', '_routes.json');

if (!existsSync(routesPath)) {
  console.log('ℹ️  _routes.json not found (normal in server mode)');
  process.exit(0);
}

try {
  const routes = JSON.parse(readFileSync(routesPath, 'utf-8'));
  
  if (!routes.include) routes.include = [];
  if (!routes.exclude) routes.exclude = [];
  
  const apiRoutes = ['/api/*'];
  apiRoutes.forEach(route => {
    if (!routes.include.includes(route)) {
      routes.include.push(route);
    }
  });
  
  writeFileSync(routesPath, JSON.stringify(routes, null, 2));
  console.log('✅ _routes.json updated successfully');
} catch (error) {
  console.log('ℹ️  Could not update _routes.json:', error.message);
}
"@ | Out-File -FilePath "fix-routes.js" -Encoding UTF8 -NoNewline
    Write-Host "✅ fix-routes.js créé" -ForegroundColor Green
}
Write-Host ""

# Étape 3: Vérifier wrangler.toml
Write-Host "🔧 Étape 3/5: Vérification de wrangler.toml..." -ForegroundColor Yellow
if (Test-Path "wrangler.toml") {
    Write-Host "✅ wrangler.toml existe" -ForegroundColor Green
} else {
    Write-Host "⚠️  wrangler.toml manquant - création..." -ForegroundColor Yellow
    @"
# Configuration Cloudflare Pages pour zyatria-global
name = "zyatria-global"
compatibility_date = "2024-01-29"
compatibility_flags = ["nodejs_compat"]
pages_build_output_dir = "dist"

[observability]
enabled = true

[vars]
ENVIRONMENT = "production"
"@ | Out-File -FilePath "wrangler.toml" -Encoding UTF8 -NoNewline
    Write-Host "✅ wrangler.toml créé" -ForegroundColor Green
}
Write-Host ""

# Étape 4: Build du projet
Write-Host "🏗️  Étape 4/5: Build du projet..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "❌ ERREUR : Le build a échoué!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Solutions possibles:" -ForegroundColor Yellow
    Write-Host "1. Vérifier les erreurs ci-dessus" -ForegroundColor Yellow
    Write-Host "2. Nettoyer node_modules: Remove-Item -Recurse -Force node_modules" -ForegroundColor Yellow
    Write-Host "3. Réinstaller: npm install" -ForegroundColor Yellow
    Write-Host "4. Relancer ce script" -ForegroundColor Yellow
    Write-Host ""
    exit 1
}
Write-Host "✅ Build réussi" -ForegroundColor Green
Write-Host ""

# Étape 5: Vérifier la structure de dist
Write-Host "🔍 Étape 5/5: Vérification de la structure dist..." -ForegroundColor Yellow
if (Test-Path "dist/_worker.js") {
    Write-Host "✅ dist/_worker.js trouvé (mode server)" -ForegroundColor Green
    $deployPath = "dist"
} elseif (Test-Path "dist/client") {
    Write-Host "✅ dist/client trouvé (mode hybrid)" -ForegroundColor Green
    $deployPath = "dist/client"
} else {
    Write-Host "✅ dist trouvé (mode static)" -ForegroundColor Green
    $deployPath = "dist"
}
Write-Host ""

# Déploiement
Write-Host "🚀 DÉPLOIEMENT SUR CLOUDFLARE..." -ForegroundColor Cyan
Write-Host "Dossier de déploiement: $deployPath" -ForegroundColor Cyan
Write-Host ""

wrangler pages deploy $deployPath --project-name=zyatria-global-cve

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "🎉 DÉPLOIEMENT RÉUSSI !" -ForegroundColor Green
    Write-Host "=================================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "✅ Votre site est maintenant en ligne !" -ForegroundColor Green
    Write-Host ""
    Write-Host "🔗 URL de déploiement:" -ForegroundColor Cyan
    Write-Host "   https://zyatria-global-cve.pages.dev" -ForegroundColor White
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "❌ ERREUR LORS DU DÉPLOIEMENT" -ForegroundColor Red
    Write-Host "=================================================" -ForegroundColor Red
    Write-Host ""
    Write-Host "Vérifiez:" -ForegroundColor Yellow
    Write-Host "1. Que vous êtes connecté à Cloudflare (wrangler whoami)" -ForegroundColor Yellow
    Write-Host "2. Que le projet existe sur Cloudflare Pages" -ForegroundColor Yellow
    Write-Host "3. Les logs ci-dessus pour plus de détails" -ForegroundColor Yellow
    Write-Host ""
    exit 1
}
