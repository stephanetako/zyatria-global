# 🌐 CONFIGURER LE DOMAINE ZYATRIA.GLOBAL

## ✅ ÉTAPE 1 : Vérifier le projet

```powershell
npx wrangler pages project list
```

Vous devriez voir seulement :
```
┌─────────┬──────────────────────┬──────────────┬───────────────┐
│ Project │ Project Domains      │ Git Provider │ Last Modified │
├─────────┼──────────────────────┼──────────────┼───────────────┤
│ zyatria │ zyatria.pages.dev    │ No           │ X minutes ago │
└─────────┴──────────────────────┴──────────────┴───────────────┘
```

---

## 🌐 ÉTAPE 2 : Ajouter le domaine personnalisé

### Option A : Via le Dashboard Cloudflare (RECOMMANDÉ ✅)

1. **Allez sur** : https://dash.cloudflare.com/
2. **Cliquez sur** : Workers & Pages
3. **Cliquez sur** : zyatria
4. **Allez dans** : Custom domains
5. **Cliquez sur** : Set up a custom domain
6. **Entrez** : `zyatria.global`
7. **Cliquez sur** : Continue
8. Cloudflare configure automatiquement le DNS ✅

### Option B : Via la ligne de commande

```powershell
npx wrangler pages domain add zyatria zyatria.global
```

---

## 📋 ÉTAPE 3 : Vérifier la configuration DNS

Cloudflare va automatiquement créer un enregistrement CNAME :

```
Type: CNAME
Name: zyatria.global (ou @)
Target: zyatria.pages.dev
Proxy: Activé (orange cloud)
```

---

## ⏱️ ÉTAPE 4 : Attendre la propagation DNS

- **Temps estimé** : 5-10 minutes
- **Maximum** : 24-48 heures

Vérifiez avec :
```powershell
nslookup zyatria.global
```

---

## ✅ ÉTAPE 5 : Tester le site

Une fois configuré, votre site sera accessible sur :

- 🌐 **https://zyatria.global** (domaine principal)
- 🔗 **https://zyatria.pages.dev** (URL Cloudflare)
- 🔗 **https://main.zyatria.pages.dev** (branche main)

---

## 🔒 BONUS : SSL/TLS automatique

Cloudflare active automatiquement :
- ✅ Certificat SSL gratuit
- ✅ HTTPS forcé
- ✅ HTTP/2 et HTTP/3
- ✅ Protection DDoS

---

## 🎯 PROCHAINES ÉTAPES

Après configuration du domaine :

1. **Configurer les variables d'environnement** (Stripe, Formspree, etc.)
2. **Tester les paiements Stripe**
3. **Tester les formulaires Formspree**
4. **Activer Google Analytics** (optionnel)

---

## 📞 BESOIN D'AIDE ?

Si vous rencontrez des problèmes :
- Vérifiez que le domaine est bien dans Cloudflare
- Vérifiez les enregistrements DNS
- Attendez la propagation DNS (5-10 minutes)

---

**🚀 Votre site sera bientôt en ligne sur zyatria.global !**
