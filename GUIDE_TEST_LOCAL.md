# 🧪 GUIDE TEST LOCAL - VÉRIFICATION COMPLÈTE

## 🎯 OBJECTIF
Tester le site en local avant le déploiement pour s'assurer que tout fonctionne parfaitement.

---

## 🚀 ÉTAPE 1 : DÉMARRER LE SERVEUR DE DÉVELOPPEMENT

### Ouvrir PowerShell dans le dossier du projet
```powershell
cd C:\Users\VOTRE_NOM\zyatria-global
```

### Démarrer le serveur
```powershell
npm run dev
```

### Résultat attendu :
```
  🚀  astro  v5.13.5 started in 234ms

  ┃ Local    http://localhost:3000/
  ┃ Network  use --host to expose

  watching for file changes...
```

### Ouvrir dans le navigateur
```
http://localhost:3000
```

---

## ✅ CHECKLIST DE VÉRIFICATION

### 1. NAVIGATION (5 min)

#### Tester tous les liens du menu :
- [ ] **Home** (`/`) → Page d'accueil
- [ ] **Services** (`/services`) → Page services
- [ ] **Micro-agents** (`/micro-agents`) → Page micro-agents
- [ ] **Pricing** (`/pricing`) → Page tarifs
- [ ] **Demo** (`/demo`) → Page contact/démo
- [ ] **About** (`/about`) → Page à propos
- [ ] **Technology** (`/technology`) → Page technologie
- [ ] **Docs** (`/docs`) → Documentation
- [ ] **Knowledge Base** (`/knowledge-base`) → Base de connaissances

#### Vérifier le menu mobile :
- [ ] Cliquer sur l'icône hamburger (☰)
- [ ] Le menu s'ouvre correctement
- [ ] Tous les liens fonctionnent
- [ ] Le menu se ferme après un clic

---

### 2. PAGE D'ACCUEIL (10 min)

#### Sections à vérifier :
- [ ] **Hero** : Titre, sous-titre, CTA visible
- [ ] **Live Stats** : Compteurs animés fonctionnent
- [ ] **Intro** : Texte et images chargent
- [ ] **Trusted By Logos** : Logos visibles
- [ ] **As Seen In** : Badges médias affichés
- [ ] **Trust Stats** : Statistiques visibles
- [ ] **Trust Badges** : Badges de confiance
- [ ] **Micro-agents** : Cards des micro-agents
- [ ] **How It Works** : Étapes du processus
- [ ] **Configure Micro Agent** : Configurateur interactif
- [ ] **Services** : Liste des services
- [ ] **Pricing** : 3 plans tarifaires
- [ ] **Competitor Comparison** : Tableau comparatif
- [ ] **Case Studies** : Études de cas
- [ ] **Testimonials** : Témoignages clients
- [ ] **Solutions** : Solutions par industrie
- [ ] **ROI Calculator** : Calculateur interactif
- [ ] **FAQ** : Questions/réponses
- [ ] **Contact** : Formulaire de contact
- [ ] **CTA Final** : Appel à l'action final
- [ ] **Footer** : Liens et informations

#### Interactions à tester :
- [ ] Cliquer sur les boutons CTA
- [ ] Hover sur les cards (effet de survol)
- [ ] Scroll fluide entre les sections
- [ ] Animations au scroll

---

### 3. FORMULAIRE DE CONTACT (5 min)

#### Aller sur `/demo` ou section Contact

#### Tester la validation :
- [ ] Essayer de soumettre vide → Erreurs affichées
- [ ] Entrer un email invalide → Erreur
- [ ] Remplir tous les champs requis → Validation OK

#### Tester la soumission :
```
Nom : Test User
Email : test@example.com
Entreprise : Test Company
Service : Intelligent AI Agents
Message : Ceci est un test
```

- [ ] Cliquer "Send Message"
- [ ] Message de chargement affiché
- [ ] Message de succès affiché
- [ ] Email reçu sur `ZyatrIA.contact@gmail.com`

---

### 4. RESPONSIVE DESIGN (10 min)

#### Ouvrir les DevTools (F12)
```
Cliquer sur l'icône mobile/tablet (Ctrl+Shift+M)
```

#### Tester sur différentes tailles :

**Mobile (375px - iPhone SE)**
- [ ] Navigation hamburger fonctionne
- [ ] Textes lisibles sans zoom
- [ ] Boutons cliquables (min 44x44px)
- [ ] Images ne débordent pas
- [ ] Pas de scroll horizontal

**Tablet (768px - iPad)**
- [ ] Layout adapté (2 colonnes)
- [ ] Navigation visible
- [ ] Cards bien espacées
- [ ] Formulaire utilisable

**Desktop (1440px)**
- [ ] Layout complet (3-4 colonnes)
- [ ] Espacement optimal
- [ ] Toutes les sections visibles
- [ ] Animations fluides

**Large Desktop (1920px+)**
- [ ] Contenu centré (max-width)
- [ ] Pas d'étirement excessif
- [ ] Images haute qualité

---

### 5. PERFORMANCE (5 min)

#### Ouvrir les DevTools → Lighthouse
```
1. F12 → Onglet "Lighthouse"
2. Sélectionner "Desktop"
3. Cocher : Performance, Accessibility, Best Practices, SEO
4. Cliquer "Analyze page load"
```

#### Scores attendus :
- [ ] **Performance :** > 90/100
- [ ] **Accessibility :** > 95/100
- [ ] **Best Practices :** > 95/100
- [ ] **SEO :** > 95/100

#### Si scores faibles :
- Vérifier les images (taille, format)
- Vérifier les animations (trop lourdes ?)
- Vérifier les scripts (trop de JS ?)

---

### 6. SEO & META TAGS (5 min)

#### Vérifier les meta tags :
```
1. Clic droit → "Afficher le code source"
2. Chercher dans <head>
```

**À vérifier :**
- [ ] `<title>` unique pour chaque page
- [ ] `<meta name="description">` présent
- [ ] `<meta property="og:image">` → `/og-image.svg`
- [ ] `<link rel="icon">` → `/favicon.svg`
- [ ] `<link rel="canonical">` présent

#### Tester l'image OG :
```
1. Aller sur http://localhost:3000/og-image.svg
2. L'image doit s'afficher (1200x630px)
```

---

### 7. ACCESSIBILITÉ (5 min)

#### Navigation au clavier :
- [ ] Appuyer sur **Tab** → Focus visible
- [ ] Naviguer dans le menu avec Tab
- [ ] Appuyer sur **Enter** → Lien activé
- [ ] Naviguer dans le formulaire avec Tab

#### Contraste des couleurs :
- [ ] Texte lisible sur fond clair
- [ ] Texte lisible sur fond foncé (mode sombre)
- [ ] Boutons bien visibles

#### Screen reader (optionnel) :
- [ ] Activer le narrateur Windows (Win+Ctrl+Enter)
- [ ] Naviguer sur le site
- [ ] Vérifier que le contenu est lu correctement

---

### 8. MULTILINGUE (5 min)

#### Tester le changement de langue :
- [ ] Cliquer sur le sélecteur de langue (si présent)
- [ ] Vérifier que le contenu change
- [ ] Tester EN, FR, ES, PT

**Note :** Si le sélecteur n'est pas visible, le contenu est en anglais par défaut.

---

### 9. LIENS EXTERNES (3 min)

#### Vérifier les liens dans le Footer :
- [ ] Email : `ZyatrIA.contact@gmail.com` → Ouvre le client email
- [ ] Téléphone : `+1 (438) 887-4507` → Ouvre l'app téléphone
- [ ] LinkedIn : Lien correct (même si compte pas créé)
- [ ] Twitter : Lien correct
- [ ] Facebook : Lien correct

---

### 10. CONSOLE JAVASCRIPT (2 min)

#### Ouvrir la console (F12 → Console)

**Vérifier qu'il n'y a pas :**
- [ ] ❌ Erreurs rouges
- [ ] ⚠️ Warnings importants
- [ ] 🔴 404 (fichiers manquants)

**Erreurs acceptables :**
- Warnings de développement Astro (normaux)
- Messages de React DevTools

---

## 🚨 PROBLÈMES COURANTS

### Problème : Page blanche
```powershell
# Vérifier la console pour les erreurs
# Rebuilder le projet
npm run build
npm run dev
```

### Problème : Styles cassés
```powershell
# Vider le cache du navigateur
Ctrl+Shift+R (hard refresh)

# Ou rebuilder
rm -rf .astro dist
npm run dev
```

### Problème : Formulaire ne fonctionne pas
- Vérifier l'ID Formspree : `xeelvrdl`
- Vérifier la connexion internet
- Tester sur https://formspree.io/forms/xeelvrdl/integration

### Problème : Images manquantes
- Vérifier que les fichiers sont dans `public/`
- Vérifier les chemins (commencent par `/`)

### Problème : Port 3000 déjà utilisé
```powershell
# Tuer le processus sur le port 3000
npx kill-port 3000

# Ou utiliser un autre port
npm run dev -- --port 3001
```

---

## 📊 RAPPORT DE TEST

### Template à remplir :

```
✅ TESTS RÉUSSIS
- Navigation : ✅
- Page d'accueil : ✅
- Formulaire : ✅
- Responsive : ✅
- Performance : ✅ (Score : 92/100)
- SEO : ✅
- Accessibilité : ✅
- Multilingue : ✅
- Liens externes : ✅
- Console : ✅ (0 erreurs)

❌ PROBLÈMES DÉTECTÉS
- Aucun

📝 NOTES
- Tout fonctionne parfaitement
- Prêt pour le déploiement
```

---

## 🎯 PROCHAINES ÉTAPES

### Si tous les tests passent :
✅ **Votre site est prêt pour le déploiement !**

**Options :**
1. Déployer sur Cloudflare Pages (GUIDE_CLOUDFLARE_DEPLOY.md)
2. Pousser sur GitHub (GUIDE_GITHUB_PUSH.md)
3. Les deux (recommandé)

### Si des problèmes sont détectés :
1. Noter les problèmes
2. Corriger dans le code
3. Retester
4. Répéter jusqu'à ce que tout fonctionne

---

## 🔧 COMMANDES UTILES

### Développement
```powershell
npm run dev          # Démarrer le serveur
npm run build        # Builder pour production
npm run preview      # Prévisualiser le build
```

### Nettoyage
```powershell
rm -rf .astro dist node_modules
npm install
npm run dev
```

### Vérification TypeScript
```powershell
npm run astro check
```

---

## 📞 SUPPORT

### Si vous rencontrez des problèmes :
1. Vérifier la console (F12)
2. Vérifier les guides de dépannage
3. Rebuilder le projet
4. Contacter le support

---

## 🎉 FÉLICITATIONS !

Si tous les tests passent, votre site est **100% fonctionnel** et prêt à être déployé ! 🚀

**Statistiques de votre site :**
- ✅ 9 pages complètes
- ✅ 14 sections homepage
- ✅ 30+ composants React
- ✅ 4 langues supportées
- ✅ SEO optimisé
- ✅ 100% responsive
- ✅ Performance maximale

**Il ne reste plus qu'à le mettre en ligne ! 🌍**

---

**Dernière mise à jour :** 11 Mai 2025
