# 🌐 GUIDE COMPLET DE MISE EN LIGNE

**Site** : ZyatrIA Global  
**Objectif** : Mettre le site en ligne avec un nom de domaine professionnel

---

## 📋 VUE D'ENSEMBLE

Ce guide vous accompagne de **A à Z** pour mettre votre site en ligne, du choix du domaine jusqu'à la publication finale.

**Temps estimé** : 1-2 heures  
**Niveau technique** : Débutant  
**Coût** : 10-30€/an (domaine uniquement, hébergement gratuit)

---

## 🎯 ÉTAPE 1 : CHOISIR ET ACHETER UN DOMAINE

### **1.1 Suggestions de noms de domaine**

Voici des suggestions pour ZyatrIA Global :

| Domaine | Disponibilité | Prix annuel | Recommandation |
|---------|---------------|-------------|----------------|
| `zyatria.com` | ✅ Probablement libre | ~12€/an | ⭐ **Meilleur choix** |
| `zyatria.ai` | ✅ Probablement libre | ~60€/an | Premium AI focus |
| `zyatria.io` | ✅ Probablement libre | ~30€/an | Tech moderne |
| `zyatria-global.com` | ✅ Probablement libre | ~12€/an | Descriptif |
| `zyatr.ai` | ✅ Version courte | ~60€/an | Mémorable |

**Ma recommandation** : `zyatria.com` — Court, professionnel, abordable.

### **1.2 Où acheter votre domaine ?**

#### **Option 1 : Cloudflare Registrar** ⭐ **RECOMMANDÉ**

**Pourquoi ?**
- ✅ Prix au coût (le moins cher du marché)
- ✅ Protection WHOIS gratuite
- ✅ Intégration directe avec l'hébergement
- ✅ DNS ultra-rapides

**Prix** : ~8-10€/an pour un .com

**Comment faire** :
1. Créez un compte sur [Cloudflare](https://dash.cloudflare.com/sign-up)
2. Allez dans **"Registrar"** → **"Register Domains"**
3. Recherchez votre domaine (ex: `zyatria.com`)
4. Ajoutez au panier et payez
5. ✅ C'est fait ! Le domaine est automatiquement configuré

#### **Option 2 : Namecheap**

**Pourquoi ?**
- ✅ Interface simple
- ✅ Support en français
- ✅ Protection WHOIS gratuite la 1ère année

**Prix** : ~12-15€/an

**Lien** : [https://www.namecheap.com](https://www.namecheap.com)

#### **Option 3 : Google Domains / GoDaddy**

**Prix** : ~12-20€/an  
**Note** : Plus cher, mais interfaces connues.

### **1.3 Ce qu'il faut vérifier lors de l'achat**

- ✅ **Protection WHOIS** (cache vos informations personnelles)
- ✅ **Auto-renouvellement activé** (pour ne pas perdre le domaine)
- ✅ **Email de confirmation** configuré
- ⚠️ **Refusez** les extras inutiles (hosting, email, etc.) — Vous n'en avez pas besoin

---

## 🚀 ÉTAPE 2 : HÉBERGEMENT GRATUIT SUR CLOUDFLARE PAGES

Votre site est configuré pour **Cloudflare Workers**, ce qui signifie qu'il peut être hébergé **GRATUITEMENT** sur Cloudflare Pages.

### **2.1 Pourquoi Cloudflare Pages ?**

- ✅ **100% GRATUIT** (bande passante illimitée)
- ✅ **Ultra-rapide** (CDN mondial)
- ✅ **HTTPS automatique**
- ✅ **Déploiement automatique** depuis GitHub
- ✅ **Pas de limite de trafic**

### **2.2 Prérequis**

Vous devez avoir votre code sur **GitHub**. Si ce n'est pas le cas :

1. Créez un compte GitHub : [https://github.com/signup](https://github.com/signup)
2. Installez Git sur votre ordinateur
3. Créez un nouveau repo :
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/votre-username/zyatria-global.git
   git push -u origin main
   ```

### **2.3 Configuration de Cloudflare Pages**

#### **Étape A : Créer un compte Cloudflare**

1. Allez sur [https://dash.cloudflare.com/sign-up](https://dash.cloudflare.com/sign-up)
2. Inscrivez-vous avec votre email
3. Confirmez votre compte

#### **Étape B : Connecter GitHub**

1. Dans le dashboard Cloudflare, cliquez sur **"Workers & Pages"**
2. Cliquez sur **"Create application"** → **"Pages"**
3. Cliquez sur **"Connect to Git"**
4. Sélectionnez **GitHub**
5. Autorisez Cloudflare à accéder à vos repos
6. Sélectionnez le repo `zyatria-global`

#### **Étape C : Configurer le build**

```
Project name: zyatria-global
Production branch: main

Build settings:
  Framework preset: Astro
  Build command: npm run build
  Build output directory: dist
```

#### **Étape D : Variables d'environnement (si nécessaire)**

Si vous utilisez des API keys (pour le formulaire, etc.) :

```
FORMSPREE_API_KEY = votre_clé_ici
```

#### **Étape E : Déployer**

1. Cliquez sur **"Save and Deploy"**
2. Attendez 2-3 minutes (le build se lance automatiquement)
3. ✅ **C'est en ligne !** Vous aurez une URL temporaire : `zyatria-global.pages.dev`

---

## 🔗 ÉTAPE 3 : CONNECTER VOTRE DOMAINE

Maintenant que le site est en ligne, on va le relier à votre domaine personnalisé.

### **3.1 Si vous avez acheté le domaine chez Cloudflare**

**C'est automatique !** 🎉

1. Dans **Cloudflare Pages**, allez dans **"Custom domains"**
2. Cliquez sur **"Set up a custom domain"**
3. Entrez votre domaine : `zyatria.com`
4. Cloudflare détecte automatiquement que vous possédez le domaine
5. Cliquez sur **"Activate domain"**
6. ✅ **Terminé !** Votre site est accessible sur `https://zyatria.com`

### **3.2 Si vous avez acheté le domaine ailleurs (Namecheap, GoDaddy, etc.)**

Vous devez configurer les **DNS** manuellement.

#### **Option A : Utiliser Cloudflare comme DNS (RECOMMANDÉ)**

**Avantages** :
- ✅ DNS ultra-rapides
- ✅ Protection DDoS gratuite
- ✅ Configuration simplifiée
- ✅ HTTPS automatique

**Comment faire** :

1. **Dans Cloudflare** :
   - Allez dans **"Websites"** → **"Add a site"**
   - Entrez votre domaine : `zyatria.com`
   - Choisissez le plan **Free**
   - Cloudflare va scanner vos DNS existants

2. **Cloudflare vous donnera 2 nameservers**, par exemple :
   ```
   ns1.cloudflare.com
   ns2.cloudflare.com
   ```

3. **Chez votre registrar (Namecheap, GoDaddy, etc.)** :
   - Allez dans les paramètres de votre domaine
   - Trouvez **"Nameservers"** ou **"DNS Settings"**
   - Remplacez les nameservers existants par ceux de Cloudflare
   - Sauvegardez

4. **Attendez 2-24h** (généralement 30 minutes) pour que les DNS se propagent

5. **Dans Cloudflare Pages** :
   - Allez dans **"Custom domains"**
   - Ajoutez `zyatria.com`
   - ✅ Cloudflare configure automatiquement tout

#### **Option B : Pointer directement avec un CNAME**

Si vous ne voulez pas changer de DNS :

1. **Dans Cloudflare Pages**, copiez l'URL de votre site : `zyatria-global.pages.dev`

2. **Chez votre registrar** :
   - Allez dans **"DNS Management"**
   - Ajoutez un enregistrement **CNAME** :
     ```
     Type: CNAME
     Name: @ (ou www)
     Value: zyatria-global.pages.dev
     TTL: Auto ou 3600
     ```
   - Ajoutez aussi un enregistrement **CNAME** pour www :
     ```
     Type: CNAME
     Name: www
     Value: zyatria-global.pages.dev
     TTL: Auto ou 3600
     ```

3. **Attendez 1-2h** pour la propagation

---

## 📧 ÉTAPE 4 : CONFIGURER LES EMAILS (OPTIONNEL)

Si vous voulez des emails professionnels comme `contact@zyatria.com` :

### **Option 1 : Cloudflare Email Routing (GRATUIT)** ⭐

**Avantages** :
- ✅ 100% gratuit
- ✅ Redirection illimitée
- ✅ Protection anti-spam

**Comment faire** :

1. Dans **Cloudflare**, allez dans **"Email"** → **"Email Routing"**
2. Activez Email Routing
3. Ajoutez une adresse de destination : `contact@zyatria.com` → votre email personnel
4. Cloudflare configure automatiquement les enregistrements MX
5. ✅ Vous recevrez les emails envoyés à `contact@zyatria.com` sur votre Gmail/Outlook

**Limite** : Vous ne pouvez que **recevoir** des emails, pas en envoyer depuis `contact@zyatria.com`.

### **Option 2 : Google Workspace (Payant)**

**Prix** : 6€/mois/utilisateur  
**Avantages** :
- ✅ Envoyer ET recevoir des emails
- ✅ 30 Go de stockage
- ✅ Google Drive, Docs, etc.

**Lien** : [https://workspace.google.com](https://workspace.google.com)

### **Option 3 : Zoho Mail (Gratuit pour 1 utilisateur)**

**Prix** : GRATUIT (1 utilisateur, 5 Go)  
**Avantages** :
- ✅ Envoyer et recevoir
- ✅ Interface webmail
- ✅ Pas de publicité

**Lien** : [https://www.zoho.com/mail/](https://www.zoho.com/mail/)

---

## 🧪 ÉTAPE 5 : TESTS FINAUX

Avant d'annoncer le lancement, vérifiez ces éléments :

### **5.1 Tests techniques**

- [ ] Le site charge bien sur `https://zyatria.com`
- [ ] Toutes les pages sont accessibles (Services, Pricing, Demo, About)
- [ ] Les liens internes fonctionnent
- [ ] Le formulaire de contact fonctionne (envoyez un test)
- [ ] Le site est rapide (< 3 secondes)
- [ ] HTTPS est activé (cadenas vert dans le navigateur)

### **5.2 Tests responsive**

- [ ] Desktop (1920px, 1440px, 1280px)
- [ ] Tablette (768px, 1024px)
- [ ] Mobile (375px, 414px)
- [ ] Navigation mobile (hamburger menu)
- [ ] Formulaires tactiles fonctionnent

### **5.3 Tests navigateurs**

- [ ] Google Chrome
- [ ] Firefox
- [ ] Safari (Mac/iPhone)
- [ ] Edge

### **5.4 Tests SEO**

1. **Google PageSpeed Insights** : [https://pagespeed.web.dev/](https://pagespeed.web.dev/)
   - Entrez votre URL : `https://zyatria.com`
   - Score cible : > 90

2. **Google Search Console** :
   - Ajoutez votre site : [https://search.google.com/search-console](https://search.google.com/search-console)
   - Soumettez le sitemap : `https://zyatria.com/sitemap.xml`

---

## 🎉 ÉTAPE 6 : LANCEMENT !

Une fois tous les tests validés :

### **6.1 Annonces**

- [ ] Créer une page LinkedIn pour ZyatrIA Global
- [ ] Poster sur LinkedIn : "Nous sommes ravis d'annoncer le lancement de ZyatrIA Global..."
- [ ] Créer un compte Twitter/X
- [ ] Envoyer un email à vos contacts
- [ ] Mettre à jour vos signatures d'email avec le nouveau site

### **6.2 Suivi & Analytics**

#### **Ajouter Google Analytics (optionnel)**

1. Créez un compte : [https://analytics.google.com](https://analytics.google.com)
2. Créez une propriété pour `zyatria.com`
3. Copiez le code de tracking (GA4)
4. Ajoutez-le dans `src/layouts/main.astro` :

```astro
<head>
  <!-- ... autres balises ... -->
  
  <!-- Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  <script is:inline>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  </script>
</head>
```

---

## 📊 ÉTAPE 7 : MAINTENANCE & MISES À JOUR

### **7.1 Déploiement automatique**

Avec Cloudflare Pages connecté à GitHub :

1. **Modifier du code** sur votre ordinateur
2. **Commit et push** :
   ```bash
   git add .
   git commit -m "Update content"
   git push
   ```
3. **Cloudflare détecte automatiquement** et redéploie (2-3 minutes)
4. ✅ **Changements en ligne !**

### **7.2 Sauvegardes**

- ✅ GitHub = sauvegarde automatique de tout le code
- ✅ Cloudflare Pages = déploiements versionnés (rollback possible)

### **7.3 Mises à jour recommandées**

- **Contenu** : Ajoutez régulièrement des case studies, témoignages
- **Blog** : Créez une section blog pour le SEO
- **Intégrations** : Ajoutez un chatbot, CRM, etc.

---

## 💰 RÉCAPITULATIF DES COÛTS

| Service | Coût | Fréquence | Obligatoire |
|---------|------|-----------|-------------|
| **Domaine .com** | 8-15€ | Annuel | ✅ Oui |
| **Hébergement Cloudflare Pages** | 0€ | Gratuit | ✅ Oui |
| **SSL (HTTPS)** | 0€ | Gratuit | ✅ Inclus |
| **Email Routing** | 0€ | Gratuit | ⚠️ Optionnel |
| **Google Workspace** | 6€ | Mensuel | ⚠️ Optionnel |
| **Formspree** | 0€ | Gratuit | ✅ Recommandé |

**TOTAL MINIMUM** : **8-15€/an** (domaine uniquement, tout le reste est gratuit)

---

## 🆘 DÉPANNAGE

### **Le site ne charge pas**

1. **Vérifiez les DNS** : [https://dnschecker.org](https://dnschecker.org)
   - Entrez `zyatria.com`
   - Les serveurs DNS doivent pointer vers Cloudflare

2. **Attendez la propagation** : Peut prendre jusqu'à 24h (généralement 30min)

3. **Vérifiez le déploiement** : Dashboard Cloudflare Pages → "Deployments" → Status = "Success"

### **Erreur "Too many redirects"**

1. Dans Cloudflare, allez dans **"SSL/TLS"**
2. Changez le mode en **"Full (strict)"**

### **Le formulaire ne fonctionne pas**

1. Vérifiez que Formspree est configuré (voir `FORMULAIRE_CONFIGURATION.md`)
2. Ouvrez la console (F12) pour voir les erreurs
3. Testez l'endpoint directement

---

## 📞 BESOIN D'AIDE ?

Si vous rencontrez un problème :

1. **Consultez les logs** : Cloudflare Pages → Deployments → View details
2. **Vérifiez la documentation** : [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
3. **Demandez de l'aide** : Je suis là pour vous accompagner !

---

## 🎓 RESSOURCES SUPPLÉMENTAIRES

- [Documentation Astro](https://docs.astro.build)
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Guide DNS](https://www.cloudflare.com/learning/dns/what-is-dns/)
- [Guide SEO](https://developers.google.com/search/docs)

---

## ✅ CHECKLIST FINALE

- [ ] Domaine acheté et configuré
- [ ] Site déployé sur Cloudflare Pages
- [ ] DNS configurés (zyatria.com pointe vers le site)
- [ ] HTTPS activé (cadenas vert)
- [ ] Formulaire de contact testé et fonctionnel
- [ ] Email professionnel configuré (optionnel)
- [ ] Tests responsive validés
- [ ] Google Search Console configuré
- [ ] Analytics installé (optionnel)
- [ ] Annonce du lancement 🎉

---

**Félicitations ! 🎉 Votre site est maintenant en ligne et accessible au monde entier.**

---

**Document créé par** : ZyatrIA AI Assistant  
**Dernière mise à jour** : Février 2026
