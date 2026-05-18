# 🎨 ZyatrIA Global - Logos & Branding

## 📁 Fichiers de Logo Disponibles

### 1. **logo.svg** - Logo Principal
- **Emplacement:** `/public/logo.svg`
- **Dimensions:** 200x200px
- **Usage:** Logo principal pour les grandes tailles, réseaux sociaux, documents
- **Caractéristiques:**
  - Lettre "Z" stylisée avec dégradé bleu-violet-cyan
  - Motifs de circuits IA (points et lignes)
  - Effet de lueur (glow)
  - Réseau neuronal symbolique

### 2. **favicon.svg** - Favicon
- **Emplacement:** `/public/favicon.svg`
- **Dimensions:** 64x64px
- **Usage:** Icône du navigateur, onglets, favoris
- **Caractéristiques:**
  - Version simplifiée du logo
  - Fond avec dégradé
  - Lettre "Z" blanche
  - Coins arrondis (12px)

### 3. **logo-with-text.svg** - Logo avec Texte
- **Emplacement:** `/public/logo-with-text.svg`
- **Dimensions:** 240x60px
- **Usage:** Navigation, en-têtes, signatures
- **Caractéristiques:**
  - Logo + texte "ZyatrIA GLOBAL"
  - Ligne d'accent en bas
  - Optimisé pour la navigation

## 🎨 Palette de Couleurs

### Dégradé Principal
```css
Bleu: #3B82F6
Violet: #8B5CF6
Cyan: #06B6D4
```

### Utilisation
- **Primaire:** Dégradé bleu → violet → cyan
- **Accent:** Cyan → bleu
- **Texte:** Gris (#6B7280) pour "GLOBAL"

## 📐 Spécifications Techniques

### Format SVG
- Vectoriel, scalable sans perte de qualité
- Léger (< 5KB par fichier)
- Compatible tous navigateurs modernes
- Support du dark mode

### Effets Visuels
- **Glow Effect:** Lueur douce autour du "Z"
- **Gradient:** Dégradé multi-couleurs
- **Opacity:** Éléments semi-transparents pour profondeur
- **Neural Network:** Points connectés symbolisant l'IA

## 🔧 Intégration dans le Projet

### Navigation (Navigation.tsx)
```tsx
<img 
  src="/logo-with-text.svg" 
  alt="ZyatrIA Global Logo" 
  className="h-8 w-auto"
/>
```

### Footer (Footer.tsx)
```tsx
<img 
  src="/logo.svg" 
  alt="ZyatrIA Global Logo" 
  className="w-12 h-12"
/>
```

### Favicon (main.astro)
```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
```

## 🎯 Recommandations d'Usage

### ✅ À Faire
- Utiliser `logo-with-text.svg` dans la navigation
- Utiliser `logo.svg` pour les grandes tailles (footer, hero)
- Utiliser `favicon.svg` comme icône du site
- Maintenir les proportions originales
- Garder un espace blanc autour du logo

### ❌ À Éviter
- Ne pas déformer ou étirer le logo
- Ne pas changer les couleurs du dégradé
- Ne pas ajouter d'ombre ou d'effets supplémentaires
- Ne pas utiliser sur fond trop chargé

## 📱 Versions Futures (Optionnel)

Si besoin, vous pouvez créer:
- **logo-dark.svg** - Version pour fond sombre
- **logo-mono.svg** - Version monochrome
- **logo-square.svg** - Version carrée pour apps
- **logo.png** - Version PNG pour compatibilité

## 🚀 Export pour Réseaux Sociaux

Pour créer des versions PNG optimisées:

```bash
# Avec Inkscape (si installé)
inkscape logo.svg --export-filename=logo-1200x1200.png --export-width=1200

# Ou utiliser un convertisseur en ligne:
# - CloudConvert.com
# - Convertio.co
# - SVG2PNG.com
```

### Tailles Recommandées
- **Facebook:** 1200x1200px
- **Twitter:** 400x400px
- **LinkedIn:** 300x300px
- **Instagram:** 1080x1080px

## 💡 Philosophie du Design

Le logo ZyatrIA Global représente:
- **"Z"** - Nom de la marque, forme dynamique
- **Dégradé** - Innovation, technologie moderne
- **Circuits IA** - Intelligence artificielle, connexions
- **Points Neuronaux** - Réseau, apprentissage machine
- **Effet Glow** - Énergie, puissance, futur

---

**Créé avec ❤️ pour ZyatrIA Global**
*Design moderne, tech-forward, international*
