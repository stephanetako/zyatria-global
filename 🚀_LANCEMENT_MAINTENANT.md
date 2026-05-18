# 🚀 LANCEMENT IMMÉDIAT - OPTION A (1h)

## ✅ CHECKLIST RAPIDE

### ⏱️ ÉTAPE 1 : Vérifier Stripe (5 min)

**Ouvre ces liens dans ton navigateur pour vérifier qu'ils fonctionnent :**

1. **Starter - Paiement unique (5 000 $CA)**
   ```
   https://buy.stripe.com/8x26oz6mP7Hr689eMI9oc00
   ```

2. **Starter - Mensuel (299 $CA/mois)**
   ```
   https://buy.stripe.com/28EfZ9fXp2n7cwxeMI9oc01
   ```

3. **Professional - Paiement unique (1 500 $CA)**
   ```
   https://buy.stripe.com/28E4gr9z12n7gMN1ZW9oc02
   ```

4. **Professional - Mensuel (799 $CA/mois)**
   ```
   https://buy.stripe.com/14A4grbH9aTDaopaws9oc03
   ```

5. **Enterprise - Paiement unique (45 000 $CA)**
   ```
   https://buy.stripe.com/7sYfZ93aDbXHgMN5c89oc05
   ```

6. **Enterprise - Mensuel (2 499 $CA/mois)**
   ```
   https://buy.stripe.com/fZu5kv3aD5zjdABeMI9oc06
   ```

7. **Audit IA (2 500 $CA)**
   ```
   https://buy.stripe.com/eVqfZ99z14vf9kl9so9oc04
   ```

8. **Consultation (500 $CA)**
   ```
   https://buy.stripe.com/4gM00b7qT6DndAB9so9oc07
   ```

**✅ Si tous les liens fonctionnent → Passe à l'étape 2**
**❌ Si un lien ne fonctionne pas → Note-le, on le corrigera après le déploiement**

---

### ⏱️ ÉTAPE 2 : Tester Formspree (2 min)

**Ton Form ID actuel :** `xeelvrdl`

**Test rapide :**

1. Lance le serveur local :
   ```bash
   npm run dev
   ```

2. Ouvre http://localhost:4321

3. Va sur la page de contact (scroll vers le bas ou clique sur "Contact")

4. Remplis le formulaire et envoie

5. Vérifie ton email (celui associé à Formspree)

**✅ Email reçu → Parfait !**
**❌ Pas d'email → On vérifiera après le déploiement**

---

### ⏱️ ÉTAPE 3 : Déployer sur Cloudflare Pages (30 min)

#### Option 3A : Via GitHub (RECOMMANDÉ)

**Étape 3A.1 : Créer un repo GitHub**

```bash
# Dans le terminal, à la racine du projet

# Initialiser Git (si pas déjà fait)
git init

# Ajouter tous les fichiers
git add .

# Premier commit
git commit -m "ZyatrIA Global - Ready for launch 🚀"
```

**Étape 3A.2 : Créer le repo sur GitHub.com**

1. Va sur https://github.com/new
2. Nom du repo : `zyatria-global`
3. Description : `ZyatrIA Global - AI Agents & Automation Platform`
4. Visibilité : **Private** (recommandé) ou Public
5. **NE COCHE PAS** "Initialize with README"
6. Clique sur **Create repository**

**Étape 3A.3 : Pousser le code**

```bash
# Remplace TON_USERNAME par ton username GitHub
git remote add origin https://github.com/TON_USERNAME/zyatria-global.git
git branch -M main
git push -u origin main
```

**Étape 3A.4 : Connecter à Cloudflare Pages**

1. Va sur https://dash.cloudflare.com
2. Clique sur **Pages** dans le menu de gauche
3. Clique sur **Create a project**
4. Clique sur **Connect to Git**
5. Autorise Cloudflare à accéder à GitHub
6. Sélectionne le repo `zyatria-global`
7. Configure le build :
   ```
   Framework preset: Astro
   Build command: npm run build
   Build output directory: dist
   Root directory: /
   ```
8. **Environment variables** (optionnel pour l'instant)
9. Clique sur **Save and Deploy**

**⏳ Attends 2-5 minutes...**

**✅ Déploiement réussi !**

Tu auras une URL comme : `https://zyatria-global.pages.dev`

---

#### Option 3B : Via Wrangler (CLI)

Si tu préfères déployer directement sans GitHub :

```bash
# Builder le site
npm run build

# Déployer
npx wrangler pages deploy dist --project-name=zyatria-global
```

---

### ⏱️ ÉTAPE 4 : Tests finaux (15 min)

**Ouvre ton site déployé et teste :**

#### Test 1 : Navigation (3 min)
```
□ Homepage (/)
□ Services (/services)
□ Micro-agents (/micro-agents)
□ Pricing (/pricing)
□ About (/about)
□ Demo (/demo)
□ Technology (/technology)
□ Knowledge Base (/knowledge-base)
□ Docs (/docs)
□ Privacy (/privacy)
□ Terms (/terms)
```

#### Test 2 : Formulaire (2 min)
```
□ Scroll vers le bas de la homepage
□ Remplis le formulaire de contact
□ Clique sur "Envoyer"
□ Vérifie que tu reçois l'email
```

#### Test 3 : Stripe (3 min)
```
□ Va sur /pricing
□ Clique sur "Commencer" (Starter)
□ Vérifie que la page Stripe s'ouvre
□ Clique sur "Retour" (ne paie pas !)
□ Teste les 2 autres plans
```

#### Test 4 : Responsive (3 min)
```
□ Ouvre les DevTools (F12)
□ Clique sur l'icône mobile (Ctrl+Shift+M)
□ Teste en mode iPhone
□ Teste en mode iPad
□ Teste en mode Desktop
□ Vérifie que le menu hamburger fonctionne
```

#### Test 5 : Performance (4 min)
```
□ Va sur https://pagespeed.web.dev/
□ Entre l'URL de ton site
□ Lance le test
□ Objectif : Score > 85 (mobile et desktop)
```

---

### 🎉 ÉTAPE 5 : LANCEMENT !

**Si tous les tests sont OK :**

✅ Ton site est LIVE !
✅ Les formulaires fonctionnent
✅ Les paiements Stripe fonctionnent
✅ Le site est rapide et responsive

---

## 📊 APRÈS LE LANCEMENT

### Actions immédiates (Jour 1)

1. **Partage ton site !**
   ```
   LinkedIn : "Fier d'annoncer le lancement de ZyatrIA Global 🚀"
   Twitter : "Launching ZyatrIA Global - AI Agents without borders 🌍"
   Facebook : "Notre nouvelle plateforme d'agents IA est en ligne !"
   ```

2. **Google Search Console**
   - Va sur https://search.google.com/search-console
   - Ajoute ton site
   - Soumets le sitemap : `https://ton-site.pages.dev/sitemap.xml`

3. **Surveille les emails**
   - Vérifie que Formspree envoie bien les emails
   - Réponds rapidement aux premières demandes

---

### Actions cette semaine (Jour 2-7)

1. **Créer les comptes sociaux**
   ```
   □ LinkedIn Company Page
   □ Twitter/X Account
   □ Facebook Page
   □ Instagram (optionnel)
   ```

2. **Ajouter Google Analytics**
   ```
   □ Créer un compte GA4
   □ Ajouter le tracking code
   □ Vérifier que les données arrivent
   ```

3. **Domaine personnalisé**
   ```
   □ Acheter zyatria.global (ou .com)
   □ Configurer les DNS sur Cloudflare
   □ Connecter à Cloudflare Pages
   ```

4. **Email professionnel**
   ```
   □ Configurer contact@zyatria.global
   □ Configurer sales@zyatria.global
   □ Configurer support@zyatria.global
   ```

---

## 🆘 DÉPANNAGE RAPIDE

### Problème : Le build échoue sur Cloudflare

**Solution :**
```bash
# Vérifie que le build fonctionne localement
npm run build

# Si ça marche localement, vérifie la version de Node
# Sur Cloudflare Pages, ajoute cette variable d'environnement :
NODE_VERSION=18
```

---

### Problème : Les liens Stripe ne fonctionnent pas

**Solution :**
1. Va sur https://dashboard.stripe.com/payment-links
2. Vérifie que les liens sont actifs
3. Copie les nouveaux liens
4. Mets à jour `src/config/stripe-links.ts`
5. Commit et push :
   ```bash
   git add .
   git commit -m "Update Stripe links"
   git push
   ```

---

### Problème : Formspree ne reçoit pas les emails

**Solution :**
1. Va sur https://formspree.io/forms
2. Vérifie que le formulaire `xeelvrdl` existe
3. Vérifie l'email associé
4. Vérifie les spams
5. Si besoin, crée un nouveau formulaire et mets à jour l'ID dans `src/config/formspree.ts`

---

### Problème : Le site est lent

**Solution :**
1. Vérifie sur PageSpeed Insights
2. Optimise les images (compresse-les)
3. Active le cache Cloudflare
4. Vérifie qu'il n'y a pas d'erreurs dans la console

---

## 📞 BESOIN D'AIDE ?

Si tu bloques sur une étape :

1. **Vérifie les logs** (Cloudflare Pages → Deployments → View logs)
2. **Teste localement** (`npm run build` puis `npm run preview`)
3. **Consulte les guides** (tous les fichiers .md dans le projet)

---

## 🎯 MÉTRIQUES DE SUCCÈS

### Semaine 1
```
□ 100+ visiteurs
□ 5+ demandes de contact
□ 1+ conversion Stripe
□ Score PageSpeed > 85
```

### Mois 1
```
□ 1,000+ visiteurs
□ 50+ demandes de contact
□ 5+ conversions Stripe
□ Top 50 Google pour 3 mots-clés
```

---

## 🚀 C'EST PARTI !

**Tu es prêt ! Suis les étapes dans l'ordre et dans 1h ton site sera en ligne ! 🎉**

**Temps estimé :**
- ✅ Étape 1 : 5 min
- ✅ Étape 2 : 2 min
- 🚀 Étape 3 : 30 min
- ✅ Étape 4 : 15 min
- 🎉 Étape 5 : LANCEMENT !

**TOTAL : ~1h**

---

**Bonne chance ! 🍀**

**N'oublie pas de célébrer quand c'est en ligne ! 🎊**
