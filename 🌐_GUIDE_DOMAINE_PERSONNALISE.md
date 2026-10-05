# 🌐 Guide Domaine Personnalisé

## 🎯 Objectif

Configurer votre domaine personnalisé `zyatria.global` pour pointer vers votre site Cloudflare Pages.

---

## 📋 Prérequis

- ✅ Site déployé sur Cloudflare Pages
- ✅ Compte Cloudflare actif
- ⏳ Domaine `zyatria.global` (à acheter)

---

## 💰 Étape 1 : Acheter le Domaine

### Options Recommandées

#### Option 1 : Cloudflare Registrar (Recommandé)

**Avantages :**
- ✅ Prix au coût (pas de marge)
- ✅ Configuration automatique
- ✅ Protection WHOIS gratuite
- ✅ Pas de frais cachés

**Prix estimé :** ~10-15$/an

**Comment faire :**
1. Allez sur https://dash.cloudflare.com/
2. Cliquez sur "Domain Registration"
3. Recherchez `zyatria.global`
4. Suivez les instructions d'achat

---

#### Option 2 : Autres Registrars

**Alternatives :**
- Namecheap : https://www.namecheap.com/
- Google Domains : https://domains.google/
- GoDaddy : https://www.godaddy.com/

**Note :** Vous devrez configurer les DNS manuellement

---

## 🔧 Étape 2 : Ajouter le Domaine dans Cloudflare Pages

### 2.1 Accéder au Dashboard

1. Allez sur https://dash.cloudflare.com/
2. Cliquez sur "Pages"
3. Sélectionnez votre projet "zyatria-global"
4. Cliquez sur "Custom domains"

---

### 2.2 Ajouter le Domaine

1. Cliquez sur "Set up a custom domain"
2. Entrez `zyatria.global`
3. Cliquez sur "Continue"
4. Cloudflare va vérifier le domaine

---

### 2.3 Ajouter les Sous-domaines (Optionnel)

**Recommandé :**
- `www.zyatria.global` → Redirige vers `zyatria.global`
- `app.zyatria.global` → Pour une application séparée (futur)
- `blog.zyatria.global` → Pour un blog (futur)

---

## 🌐 Étape 3 : Configurer les DNS

### Si vous avez acheté sur Cloudflare

**Configuration automatique !** ✅

Cloudflare configure automatiquement :
- Enregistrement A pour `zyatria.global`
- Enregistrement CNAME pour `www.zyatria.global`
- SSL/TLS automatique

---

### Si vous avez acheté ailleurs

**Vous devez configurer les DNS manuellement :**

#### 3.1 Ajouter le Domaine à Cloudflare

1. Dans le dashboard Cloudflare
2. Cliquez sur "Add a Site"
3. Entrez `zyatria.global`
4. Choisissez le plan Free
5. Cloudflare va scanner vos DNS existants

---

#### 3.2 Configurer les Nameservers

Cloudflare vous donnera 2 nameservers, par exemple :
```
ns1.cloudflare.com
ns2.cloudflare.com
```

**Chez votre registrar :**
1. Allez dans les paramètres DNS
2. Remplacez les nameservers par ceux de Cloudflare
3. Sauvegardez

**Délai :** 24-48h pour la propagation

---

#### 3.3 Ajouter les Enregistrements DNS

Dans Cloudflare DNS :

**Enregistrement 1 : Domaine principal**
```
Type: CNAME
Name: @
Target: zyatria-global.pages.dev
Proxy: Activé (orange)
```

**Enregistrement 2 : Sous-domaine www**
```
Type: CNAME
Name: www
Target: zyatria-global.pages.dev
Proxy: Activé (orange)
```

---

## 🔒 Étape 4 : Configurer SSL/TLS

### 4.1 Activer SSL/TLS

1. Dans le dashboard Cloudflare
2. Allez dans "SSL/TLS"
3. Choisissez "Full (strict)"

**Résultat :** HTTPS automatique ✅

---

### 4.2 Forcer HTTPS

1. Dans "SSL/TLS"
2. Allez dans "Edge Certificates"
3. Activez "Always Use HTTPS"

**Résultat :** Redirection automatique HTTP → HTTPS ✅

---

### 4.3 Activer HSTS (Optionnel)

1. Dans "SSL/TLS"
2. Allez dans "Edge Certificates"
3. Activez "HTTP Strict Transport Security (HSTS)"

**Paramètres recommandés :**
- Max Age: 6 months
- Include subdomains: Oui
- Preload: Oui

---

## ⚡ Étape 5 : Optimisations (Optionnel)

### 5.1 Activer le Cache

1. Dans "Caching"
2. Choisissez "Standard"
3. Activez "Always Online"

---

### 5.2 Activer la Compression

1. Dans "Speed"
2. Activez "Auto Minify" pour HTML, CSS, JS
3. Activez "Brotli"

---

### 5.3 Configurer les Redirections

**Rediriger www vers apex :**

1. Dans "Rules" → "Page Rules"
2. Créez une règle :
   - URL: `www.zyatria.global/*`
   - Setting: Forwarding URL (301)
   - Destination: `https://zyatria.global/$1`

---

## ✅ Étape 6 : Vérification

### 6.1 Vérifier le DNS

```bash
# Vérifier l'enregistrement A
nslookup zyatria.global

# Vérifier l'enregistrement CNAME
nslookup www.zyatria.global
```

---

### 6.2 Vérifier SSL

1. Allez sur https://zyatria.global
2. Cliquez sur le cadenas dans la barre d'adresse
3. Vérifiez que le certificat est valide

---

### 6.3 Tester les Redirections

```bash
# Tester HTTP → HTTPS
curl -I http://zyatria.global

# Tester www → apex
curl -I https://www.zyatria.global
```

---

## 📊 Récapitulatif

### Configuration Complète

| Élément | Statut | Temps |
|---------|--------|-------|
| Achat domaine | ⏳ À faire | 5 min |
| Ajout dans Pages | ⏳ À faire | 2 min |
| Configuration DNS | ⏳ À faire | 5 min |
| SSL/TLS | ⏳ Auto | - |
| Propagation DNS | ⏳ Attente | 24-48h |
| **Total** | **⏳** | **~12 min + attente** |

---

### URLs Finales

| Type | URL | Statut |
|------|-----|--------|
| Principal | `https://zyatria.global` | ⏳ À configurer |
| WWW | `https://www.zyatria.global` | ⏳ À configurer |
| Cloudflare | `https://zyatria-global.pages.dev` | ✅ Actif |
| Webflow | `https://8972843a648f35320d9efb62c844e9de.app.webflow.io` | ✅ Référence |

---

## 🚨 Problèmes Courants

### Le site ne s'affiche pas

**Causes possibles :**
1. DNS pas encore propagé (attendre 24-48h)
2. Enregistrements DNS incorrects
3. SSL pas encore activé

**Solution :**
1. Vérifier les enregistrements DNS dans Cloudflare
2. Attendre la propagation
3. Vider le cache du navigateur

---

### Erreur SSL

**Causes possibles :**
1. SSL/TLS pas configuré en "Full (strict)"
2. Certificat pas encore généré

**Solution :**
1. Aller dans SSL/TLS
2. Choisir "Full (strict)"
3. Attendre 5-10 minutes

---

### Redirection ne fonctionne pas

**Causes possibles :**
1. Page Rule mal configurée
2. Cache du navigateur

**Solution :**
1. Vérifier la Page Rule
2. Vider le cache
3. Tester en navigation privée

---

## 💡 Conseils

### 1. Acheter sur Cloudflare

**Avantages :**
- Configuration automatique
- Prix au coût
- Pas de frais cachés

### 2. Activer le Proxy

**Toujours activer le proxy (orange) pour :**
- Protection DDoS
- Cache CDN
- Optimisations automatiques

### 3. Configurer les Redirections

**Recommandé :**
- www → apex (sans www)
- HTTP → HTTPS
- Anciennes URLs → Nouvelles URLs

### 4. Surveiller les Analytics

**Dans Cloudflare :**
- Trafic
- Requêtes
- Bande passante
- Menaces bloquées

---

## 📚 Ressources

### Documentation Cloudflare

- **Pages Custom Domains :** https://developers.cloudflare.com/pages/platform/custom-domains/
- **DNS Records :** https://developers.cloudflare.com/dns/manage-dns-records/
- **SSL/TLS :** https://developers.cloudflare.com/ssl/

### Outils de Vérification

- **DNS Checker :** https://dnschecker.org/
- **SSL Checker :** https://www.ssllabs.com/ssltest/
- **Redirect Checker :** https://httpstatus.io/

---

## 🎯 Checklist Complète

### Avant de Commencer

- [ ] Site déployé sur Cloudflare Pages
- [ ] Compte Cloudflare actif
- [ ] Budget pour le domaine (~10-15$/an)

### Achat du Domaine

- [ ] Domaine acheté
- [ ] Accès au registrar
- [ ] Informations de contact à jour

### Configuration Cloudflare

- [ ] Domaine ajouté dans Pages
- [ ] DNS configurés
- [ ] SSL/TLS activé
- [ ] Redirections configurées

### Vérification

- [ ] DNS propagé
- [ ] Site accessible
- [ ] HTTPS fonctionne
- [ ] Redirections fonctionnent

### Optimisations

- [ ] Cache activé
- [ ] Compression activée
- [ ] Analytics configuré
- [ ] Page Rules créées

---

## 🎉 Résultat Final

Après avoir suivi ce guide :

- ✅ Domaine personnalisé configuré
- ✅ HTTPS automatique
- ✅ Redirections fonctionnelles
- ✅ Performance optimale
- ✅ Protection DDoS
- ✅ Analytics disponible

**Votre site sera accessible sur `https://zyatria.global` !** 🚀

---

**Date** : 4 octobre 2024  
**Statut** : ✅ GUIDE COMPLET  
**Temps estimé** : ~12 minutes + 24-48h propagation

---

## 🚀 Prochaines Étapes

1. **Acheter le domaine** `zyatria.global`
2. **Suivre ce guide** étape par étape
3. **Attendre la propagation** (24-48h)
4. **Vérifier** que tout fonctionne

**Votre site professionnel sera en ligne !** 🎉
