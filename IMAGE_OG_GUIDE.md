# 🎨 GUIDE - Créer l'Image Open Graph

## 📐 Spécifications

**Dimensions :** 1200 x 630 pixels  
**Format :** JPG ou PNG  
**Poids :** < 1 MB (idéalement < 500 KB)  
**Ratio :** 1.91:1  

---

## 🎯 Contenu de l'Image

### Éléments à inclure :

1. **Logo ZyatrIA** (ou lettre "Z" stylisée)
2. **Nom de l'entreprise :** ZyatrIA Global
3. **Slogan :** AI Without Borders
4. **Gradient de fond :** Bleu → Violet (cohérent avec le site)
5. **Badge :** Canadian Company | Quebec 🇨🇦 (optionnel)

---

## 🛠️ Option 1 : Canva (Facile)

### Étapes :

1. **Aller sur Canva** : https://www.canva.com/
2. **Créer un design personnalisé** : 1200 x 630 px
3. **Appliquer un fond dégradé** :
   - Couleur 1 : `#3B82F6` (bleu)
   - Couleur 2 : `#8B5CF6` (violet)
   - Angle : 45°

4. **Ajouter le texte** :
   ```
   ZyatrIA Global
   Police : Instrument Sans (ou similaire)
   Taille : 80-100pt
   Couleur : Blanc
   Poids : Bold
   ```

5. **Ajouter le slogan** :
   ```
   AI Without Borders
   Police : Instrument Sans
   Taille : 40-50pt
   Couleur : Blanc (opacité 90%)
   Poids : Regular
   ```

6. **Ajouter des éléments visuels** :
   - Icônes d'IA (cerveau, robot, réseau)
   - Formes géométriques abstraites
   - Effet de grille (grid pattern)

7. **Exporter** :
   - Format : PNG
   - Qualité : Haute
   - Télécharger

---

## 🛠️ Option 2 : Figma (Professionnel)

### Template prêt :

```
Figma Community → Rechercher "Open Graph Template"
Ou créer depuis zéro :
```

### Structure du design :

```
┌─────────────────────────────────────────┐
│                                         │
│         Fond dégradé bleu → violet      │
│                                         │
│              ZyatrIA Global             │ (Centre, Bold)
│             AI Without Borders          │ (Sous-titre)
│                                         │
│   🤖  💡  🌐  (Icônes espacées)        │
│                                         │
│   Canadian Company | Quebec 🇨🇦         │ (Coin bas)
│                                         │
└─────────────────────────────────────────┘
     1200px width x 630px height
```

### Export Figma :
1. Sélectionner le frame
2. Export → PNG → 2x (pour haute résolution)
3. Télécharger

---

## 🛠️ Option 3 : Photoshop/Illustrator

### Nouveau document :
- Largeur : 1200 px
- Hauteur : 630 px
- Résolution : 72 ppi (web)
- Mode : RGB

### Calques :
1. **Fond** : Dégradé linéaire (bleu → violet)
2. **Texte principal** : "ZyatrIA Global"
3. **Sous-titre** : "AI Without Borders"
4. **Éléments graphiques** : Icônes, formes
5. **Badge** : "Canadian Company"

### Export :
- Fichier → Exporter → Enregistrer pour le Web
- Format : JPEG ou PNG-24
- Qualité : 80-90%

---

## 🛠️ Option 4 : Code HTML/CSS (Automatique)

Si tu veux générer l'image automatiquement avec du code :

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      margin: 0;
      width: 1200px;
      height: 630px;
      background: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-family: 'Arial', sans-serif;
      color: white;
    }
    h1 {
      font-size: 80px;
      font-weight: bold;
      margin: 0;
      text-align: center;
    }
    p {
      font-size: 40px;
      margin: 20px 0;
      opacity: 0.9;
    }
    .badge {
      position: absolute;
      bottom: 30px;
      right: 40px;
      font-size: 24px;
      opacity: 0.8;
    }
  </style>
</head>
<body>
  <h1>ZyatrIA Global</h1>
  <p>AI Without Borders</p>
  <div class="badge">🇨🇦 Canadian Company | Quebec</div>
</body>
</html>
```

**Ensuite :**
1. Ouvrir ce HTML dans le navigateur
2. Prendre un screenshot (1200x630px)
3. Ou utiliser un service comme **Puppeteer** / **Playwright** pour capturer

---

## 🎨 Palette de Couleurs (du site)

```css
/* Couleurs principales */
--primary: #C98769;      /* Terracotta */
--background: #F5F1EB;   /* Beige clair */
--foreground: #373D36;   /* Vert foncé */

/* Gradients */
.gradient-hero {
  background: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%);
}

.gradient-primary {
  background: linear-gradient(135deg, #C98769 0%, #D9A88F 100%);
}

.gradient-accent {
  background: linear-gradient(135deg, #F59E0B 0%, #EC4899 100%);
}
```

**Recommandation :** Utiliser le **gradient-hero** (bleu → violet) pour l'image OG !

---

## 🖼️ Exemples d'inspiration

### Bon exemple d'OG Image :
```
┌───────────────────────────────────────────────┐
│                                               │
│                                               │
│                 LOGO + NOM                    │
│              Slogan accrocheur                │
│                                               │
│          [Icônes ou visuel simple]            │
│                                               │
│                                               │
└───────────────────────────────────────────────┘
```

### À éviter :
❌ Trop de texte (illisible)  
❌ Images trop complexes  
❌ Couleurs qui ne contrastent pas  
❌ Texte trop petit  
❌ Logo trop petit  

### Best practices :
✅ Texte gros et lisible  
✅ Contraste élevé  
✅ Hiérarchie visuelle claire  
✅ Maximum 2-3 couleurs  
✅ Design épuré et moderne  

---

## 📦 Services de génération automatique

### Outils en ligne (gratuits) :

1. **Bannerbear** : https://www.bannerbear.com/
   - Templates prêts
   - API disponible

2. **Placid** : https://placid.app/
   - Générateur visuel
   - Templates Open Graph

3. **OG Image Generator** : https://og-image.vercel.app/
   - Outil open-source de Vercel
   - Personnalisation via URL

4. **Cloudinary** : https://cloudinary.com/
   - Transformation d'images dynamiques
   - Overlay de texte

---

## 🚀 Une fois l'image créée

### 1. Renommer l'image :
```bash
og-image.jpg
# ou
og-image.png
```

### 2. Placer dans le dossier public :
```
public/
  └── og-image.jpg
```

### 3. Vérifier dans le code :
Le fichier `main.astro` doit avoir :
```html
<meta property="og:image" content="/og-image.jpg" />
<meta property="twitter:image" content="/og-image.jpg" />
```

### 4. Tester l'image OG :

**Facebook Debugger :**
```
https://developers.facebook.com/tools/debug/
```

**Twitter Card Validator :**
```
https://cards-dev.twitter.com/validator
```

**LinkedIn Post Inspector :**
```
https://www.linkedin.com/post-inspector/
```

---

## 📏 Images OG spécifiques (optionnel)

Tu peux créer des images différentes pour chaque page :

```
public/
  ├── og-image.jpg          (défaut)
  ├── og-services.jpg       (page services)
  ├── og-pricing.jpg        (page pricing)
  ├── og-technology.jpg     (page technology)
  └── og-docs.jpg          (page documentation)
```

Puis dans chaque fichier `.astro` :
```astro
---
import MainLayout from '../layouts/main.astro';
---

<MainLayout 
  ogImage="/og-services.jpg"
>
  ...
</MainLayout>
```

---

## 💡 Tips & Tricks

### Optimisation :
```bash
# Compresser l'image après création
# Utiliser TinyPNG : https://tinypng.com/
# Ou ImageOptim (macOS) : https://imageoptim.com/
```

### Responsive OG :
L'image OG doit être **belle sur tous les formats** :
- Facebook feed (large)
- Twitter card (medium)
- LinkedIn post (medium)
- WhatsApp preview (small)

### Tester sur mobile :
1. Envoyer le lien sur WhatsApp/Messenger
2. Vérifier que l'aperçu s'affiche correctement
3. Vérifier que le texte est lisible

---

## ✅ Checklist finale

- [ ] Image créée (1200x630px)
- [ ] Format JPG ou PNG
- [ ] Poids < 1 MB
- [ ] Texte lisible (même en petit)
- [ ] Couleurs cohérentes avec le site
- [ ] Logo/nom visible
- [ ] Placée dans `public/og-image.jpg`
- [ ] Testée sur Facebook Debugger
- [ ] Testée sur Twitter Card Validator
- [ ] Testée sur mobile (WhatsApp)

---

**Une fois l'image créée et testée → Ton site est prêt pour le lancement ! 🚀**
