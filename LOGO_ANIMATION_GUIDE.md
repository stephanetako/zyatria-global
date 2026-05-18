# 🎬 Guide du Logo Animé - ZyatrIA Global

## 🌟 Nouveau : Logo Animé !

Un logo animé a été créé pour ajouter une touche dynamique et moderne à votre site.

**Fichier :** `public/logo-animated.svg`

## 🎨 Animations Incluses

### 1. Dégradé Rotatif
- Les couleurs du dégradé changent en continu
- Cycle : Bleu → Violet → Cyan → Bleu
- Durée : 4 secondes
- Effet : Fluide et hypnotique

### 2. Pulsation du Glow
- L'effet de lueur pulse doucement
- Intensité variable : 3px → 5px → 3px
- Durée : 2 secondes
- Effet : Vivant et énergique

### 3. Circuits IA Animés
- Les points connectés pulsent
- Taille variable : petit → grand → petit
- Opacité variable : visible → subtil → visible
- Durées variées : 2-3 secondes (asynchrone)

### 4. Échelle Subtile
- Le "Z" principal pulse légèrement
- Échelle : 1.0 → 1.02 → 1.0
- Durée : 2 secondes
- Effet : Respiration naturelle

### 5. Anneau Rotatif
- Un anneau subtil tourne autour du logo
- Rotation complète : 20 secondes
- Opacité : 20%
- Effet : Technologique et futuriste

## 🚀 Comment Utiliser

### Option 1 : Remplacer le Logo Principal

**Dans Navigation.tsx :**
```tsx
<img 
  src="/logo-animated.svg" 
  alt="ZyatrIA Global Logo" 
  className="h-8 w-auto"
/>
```

**Dans Footer.tsx :**
```tsx
<img 
  src="/logo-animated.svg" 
  alt="ZyatrIA Global Logo" 
  className="w-12 h-12"
/>
```

### Option 2 : Utiliser sur la Page d'Accueil Uniquement

**Dans Hero.tsx :**
```tsx
<div className="flex justify-center mb-8">
  <img 
    src="/logo-animated.svg" 
    alt="ZyatrIA Global" 
    className="w-32 h-32 md:w-40 md:h-40"
  />
</div>
```

### Option 3 : Page de Chargement (Loading)

Créer un composant `Loading.tsx` :
```tsx
export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background">
      <img 
        src="/logo-animated.svg" 
        alt="Loading..." 
        className="w-24 h-24"
      />
    </div>
  );
}
```

## 📱 Considérations d'Usage

### ✅ Bon Usage
- **Page d'accueil** (Hero section)
- **Page de chargement** (Loading screen)
- **Section "À propos"** (About page)
- **Modal de bienvenue**
- **Splash screen**

### ⚠️ Usage Modéré
- **Navigation** (peut distraire)
- **Footer** (peut être trop)
- **Favicon** (animations non supportées)

### ❌ À Éviter
- Utiliser partout (trop d'animations)
- Sur mobile avec connexion lente
- Dans les emails (non supporté)
- Pour l'impression (animations perdues)

## 🎯 Recommandations

### Performance
- **Taille du fichier :** ~6KB (léger)
- **Impact CPU :** Minimal (animations CSS/SVG)
- **Compatibilité :** Tous navigateurs modernes

### Accessibilité
Ajouter une option pour désactiver les animations :

```tsx
// Respecter prefers-reduced-motion
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

<img 
  src={prefersReducedMotion ? "/logo.svg" : "/logo-animated.svg"} 
  alt="ZyatrIA Global Logo" 
/>
```

### SEO
- Les animations n'affectent pas le SEO
- Le fichier reste un SVG standard
- Alt text toujours important

## 🔧 Personnalisation

### Modifier la Vitesse

Ouvrir `logo-animated.svg` et changer les valeurs `dur` :

```xml
<!-- Plus rapide -->
<animate ... dur="2s" ... />

<!-- Plus lent -->
<animate ... dur="6s" ... />
```

### Désactiver Certaines Animations

Commenter les sections non désirées :

```xml
<!-- Désactiver l'anneau rotatif -->
<!--
<circle cx="100" cy="100" r="90" ...>
  <animateTransform ... />
</circle>
-->
```

### Changer les Couleurs

Modifier les valeurs dans les `<animate>` :

```xml
<animate 
  attributeName="stop-color" 
  values="#3B82F6;#8B5CF6;#06B6D4;#3B82F6" 
  dur="4s" 
  repeatCount="indefinite"
/>
```

## 🎬 Exemples d'Intégration

### Exemple 1 : Hero avec Logo Animé

```tsx
// src/components/Hero.tsx
export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <img 
          src="/logo-animated.svg" 
          alt="ZyatrIA Global" 
          className="w-40 h-40 mx-auto mb-8 animate-fade-in"
        />
        <h1 className="text-5xl font-bold">
          Bienvenue chez ZyatrIA Global
        </h1>
      </div>
    </section>
  );
}
```

### Exemple 2 : Loading Screen

```tsx
// src/components/LoadingScreen.tsx
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="text-center">
        <img 
          src="/logo-animated.svg" 
          alt="Loading..." 
          className="w-32 h-32 mx-auto mb-4"
        />
        <p className="text-muted-foreground">Chargement...</p>
      </div>
    </div>
  );
}
```

### Exemple 3 : Modal de Bienvenue

```tsx
// src/components/WelcomeModal.tsx
import { Dialog, DialogContent } from './ui/dialog';

export default function WelcomeModal({ open, onClose }) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="text-center">
        <img 
          src="/logo-animated.svg" 
          alt="ZyatrIA Global" 
          className="w-24 h-24 mx-auto mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">
          Bienvenue !
        </h2>
        <p className="text-muted-foreground">
          Découvrez nos solutions d'IA intelligente
        </p>
      </DialogContent>
    </Dialog>
  );
}
```

## 🧪 Test du Logo Animé

### Méthode 1 : Navigateur
1. Ouvrir `public/logo-animated.svg` dans le navigateur
2. Observer les animations
3. Vérifier la fluidité

### Méthode 2 : Sur le Site
1. Intégrer dans un composant
2. Lancer `npm run dev`
3. Vérifier l'affichage et les performances

### Méthode 3 : Page de Test
Ajouter à `test-logos.html` :
```html
<div class="card">
  <h2>Logo Animé</h2>
  <div class="logo-container">
    <img src="/logo-animated.svg" alt="Logo Animé" style="width: 200px;">
  </div>
</div>
```

## 📊 Comparaison

| Aspect | Logo Statique | Logo Animé |
|--------|---------------|------------|
| Taille | ~4KB | ~6KB |
| Animations | ❌ | ✅ |
| Performance | Excellent | Très bon |
| Attention | Neutre | Attire l'œil |
| Usage | Partout | Sélectif |
| Accessibilité | ✅ | ⚠️ (prefers-reduced-motion) |

## 🎯 Décision : Lequel Utiliser ?

### Utiliser le Logo Statique Si :
- Vous voulez un design sobre
- Performance maximale requise
- Usage dans navigation/footer
- Accessibilité prioritaire

### Utiliser le Logo Animé Si :
- Vous voulez un effet "wow"
- Page d'accueil/landing page
- Section hero importante
- Branding moderne et tech

### Compromis (Recommandé) :
- **Logo animé :** Hero section uniquement
- **Logo statique :** Navigation, footer, reste du site
- **Meilleur des deux mondes !**

## 🚀 Déploiement

Le logo animé est déjà prêt :
- ✅ Fichier créé : `public/logo-animated.svg`
- ✅ Optimisé et léger
- ✅ Compatible tous navigateurs
- ✅ Prêt à l'emploi

**Il suffit de l'intégrer où vous voulez !**

## 💡 Idées Créatives

### 1. Animation au Scroll
```tsx
const [scrollY, setScrollY] = useState(0);

useEffect(() => {
  const handleScroll = () => setScrollY(window.scrollY);
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

// Afficher logo animé seulement en haut de page
<img 
  src={scrollY < 100 ? "/logo-animated.svg" : "/logo.svg"} 
  alt="Logo" 
/>
```

### 2. Animation au Hover
```tsx
const [isHovered, setIsHovered] = useState(false);

<img 
  src={isHovered ? "/logo-animated.svg" : "/logo.svg"} 
  alt="Logo"
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
/>
```

### 3. Animation Conditionnelle
```tsx
// Animer seulement sur desktop
const isDesktop = window.innerWidth > 1024;

<img 
  src={isDesktop ? "/logo-animated.svg" : "/logo.svg"} 
  alt="Logo" 
/>
```

## 📚 Ressources

- **SVG Animations :** https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animate
- **SMIL Animations :** https://css-tricks.com/guide-svg-animations-smil/
- **Performance :** https://web.dev/animations/

---

**Amusez-vous avec le logo animé ! 🎬✨**

*Design moderne • Animations fluides • Performance optimale*
