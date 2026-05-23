# ✅ CHECKLIST DE DÉPLOIEMENT

## 📋 AVANT DE COMMENCER

- [ ] Compte Cloudflare créé (gratuit)
- [ ] Projet sur GitHub (✅ Fait !)
- [ ] Clé API Mistral disponible
- [ ] Email Formspree confirmé

---

## 🔧 CONFIGURATION CLOUDFLARE

### Connexion
- [ ] Connecté à https://dash.cloudflare.com/
- [ ] Cliqué sur "Workers & Pages"
- [ ] Cliqué sur "Create application"
- [ ] Sélectionné l'onglet "Pages"

### GitHub
- [ ] Cliqué sur "Connect to Git"
- [ ] Autorisé Cloudflare sur GitHub
- [ ] Sélectionné le repo "zyatria-global"
- [ ] Cliqué sur "Begin setup"

### Paramètres de build
- [ ] Project name: `zyatria-global`
- [ ] Production branch: `main`
- [ ] Framework preset: `Astro`
- [ ] Build command: `npm run build`
- [ ] Build output directory: `dist`

### Variables d'environnement
- [ ] `MISTRAL_API_KEY` ajoutée
- [ ] `FORMSPREE_ENDPOINT` ajoutée
- [ ] `FORMSPREE_EMAIL` ajoutée

### Déploiement
- [ ] Cliqué sur "Save and Deploy"
- [ ] Build réussi (3-5 minutes)
- [ ] URL de production reçue

---

## 🧪 TESTS POST-DÉPLOIEMENT

### Navigation
- [ ] Page d'accueil charge correctement
- [ ] Menu de navigation fonctionne
- [ ] Toutes les pages sont accessibles
- [ ] Footer s'affiche correctement

### Chatbot Mistral
- [ ] Icône du chatbot visible
- [ ] Chatbot s'ouvre au clic
- [ ] Peut envoyer un message
- [ ] Reçoit une réponse de l'IA
- [ ] Pas d'erreurs dans la console (F12)

### Formulaires
- [ ] Formulaire de contact visible
- [ ] Peut remplir les champs
- [ ] Soumission réussie
- [ ] Message de confirmation affiché
- [ ] Email reçu sur Formspree

### Responsive Design
- [ ] Testé sur mobile (ou mode responsive F12)
- [ ] Testé sur tablette
- [ ] Testé sur desktop
- [ ] Tous les éléments s'affichent correctement

### Performance
- [ ] Page charge en moins de 3 secondes
- [ ] Images chargent correctement
- [ ] Pas d'erreurs 404
- [ ] Animations fluides

---

## 🎨 OPTIMISATIONS (Optionnel)

### SEO
- [ ] Titre de page correct
- [ ] Meta descriptions présentes
- [ ] Images ont des attributs alt
- [ ] Sitemap.xml accessible

### Analytics
- [ ] Cloudflare Analytics activé
- [ ] Formspree Dashboard vérifié
- [ ] Trafic visible

### Domaine personnalisé
- [ ] Domaine acheté (si souhaité)
- [ ] DNS configurés
- [ ] SSL/HTTPS actif

---

## 🚀 DÉPLOIEMENTS FUTURS

### Workflow
- [ ] Modifications locales testées
- [ ] Commit sur Git
- [ ] Push vers GitHub avec `.\push-manuel.ps1`
- [ ] Cloudflare détecte et redéploie automatiquement
- [ ] Vérification du nouveau déploiement

---

## 📊 MONITORING CONTINU

### Hebdomadaire
- [ ] Vérifier Cloudflare Analytics
- [ ] Vérifier soumissions Formspree
- [ ] Tester le chatbot
- [ ] Vérifier les erreurs

### Mensuel
- [ ] Mettre à jour les dépendances npm
- [ ] Vérifier les performances
- [ ] Optimiser si nécessaire
- [ ] Backup du code

---

## 🎉 FÉLICITATIONS !

Une fois toutes ces cases cochées, votre site est :
- ✅ En ligne
- ✅ Fonctionnel
- ✅ Optimisé
- ✅ Prêt pour la production

---

## 📞 SUPPORT

**Problème ?** Notez :
1. À quelle étape vous êtes bloqué
2. Le message d'erreur exact
3. Ce que vous avez déjà essayé

Et demandez de l'aide ! 😊

---

**Date de création :** 2026-05-23
**Statut :** Prêt pour le déploiement
