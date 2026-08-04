# 🌐 GUIDE : CONFIGURER VOTRE DOMAINE PERSONNALISÉ

## 🎯 Objectif : Avoir votre site sur `zyatria.global`

Actuellement, après déploiement, votre site est sur :
```
https://zyatria-global.pages.dev
```

Objectif : Le rendre accessible sur :
```
https://zyatria.global
```

---

## 📋 ÉTAPES COMPLÈTES

### Étape 1 : Acheter le domaine (si pas déjà fait)

#### Option A : Cloudflare Registrar (Recommandé ⭐)

**Avantages :**
- Prix au coût (pas de marge)
- Configuration automatique
- Pas de frais cachés
- Protection WHOIS gratuite

**Comment faire :**
1. Aller sur https://dash.cloudflare.com
2. Menu "Domain Registration"
3. Rechercher `zyatria.global`
4. Vérifier la disponibilité
5. Acheter (prix : ~10-15€/an)

✅ **Si vous achetez chez Cloudflare, passez directement à l'Étape 3**

---

#### Option B : Autres registrars

**Namecheap** (Populaire)
- Site : https://www.namecheap.com
- Prix : ~12€/an
- Protection WHOIS : +5€/an

**Google Domains**
- Site : https://domains.google
- Prix : ~12€/an
- Protection WHOIS : Incluse

**OVH** (Français)
- Site : https://www.ovh.com
- Prix : ~10€/an
- Support en français

**GoDaddy** (Déconseillé - cher)
- Prix : ~15-20€/an
- Beaucoup d'upsells

---

### Étape 2 : Transférer le domaine vers Cloudflare (Si acheté ailleurs)

#### 2.1 Ajouter le site sur Cloudflare

1. Aller sur https://dash.cloudflare.com
2. Cliquer "Add a site"
3. Entrer : `zyatria.global`
4. Choisir le plan **Free** (gratuit)
5. Cliquer "Continue"

#### 2.2 Scanner les DNS existants

Cloudflare va scanner vos DNS actuels.
- Cliquer "Continue"

#### 2.3 Changer les nameservers

Cloudflare vous donnera 2 nameservers, par exemple :
```
ns1.cloudflare.com
ns2.cloudflare.com
```

**Aller chez votre registrar :**

##### Sur Namecheap :
1. Dashboard → Domain List
2. Cliquer "Manage" à côté de votre domaine
3. Section "Nameservers"
4. Sélectionner "Custom DNS"
5. Entrer les 2 nameservers de Cloudflare
6. Sauvegarder

##### Sur Google Domains :
1. My Domains → Sélectionner votre domaine
2. DNS → Name servers
3. Cliquer "Use custom name servers"
4. Entrer les 2 nameservers de Cloudflare
5. Sauvegarder

##### Sur OVH :
1. Espace client → Domaines
2. Sélectionner votre domaine
3. Onglet "Serveurs DNS"
4. Modifier les serveurs DNS
5. Entrer les 2 nameservers de Cloudflare
6. Valider

#### 2.4 Attendre la propagation

⏱️ **Temps d'attente : 2-48 heures**

Cloudflare vous enverra un email quand c'est prêt.

Vous pouvez vérifier sur :
- https://www.whatsmydns.net/#NS/zyatria.global

---

### Étape 3 : Connecter le domaine à Cloudflare Pages

#### 3.1 Aller dans votre projet Pages

1. https://dash.cloudflare.com
2. Menu "Workers & Pages"
3. Cliquer sur votre projet `zyatria-global`

#### 3.2 Ajouter le domaine personnalisé

1. Onglet "Custom domains"
2. Cliquer "Set up a custom domain"
3. Entrer : `zyatria.global`
4. Cliquer "Continue"

#### 3.3 Configuration automatique

Cloudflare va automatiquement :
- ✅ Créer les enregistrements DNS
- ✅ Générer un certificat SSL (HTTPS)
- ✅ Activer le CDN mondial
- ✅ Configurer les redirections

**Temps : 2-5 minutes**

#### 3.4 Ajouter www (optionnel)

Pour que `www.zyatria.global` fonctionne aussi :

1. Cliquer "Set up a custom domain" à nouveau
2. Entrer : `www.zyatria.global`
3. Cloudflare redirigera automatiquement vers `zyatria.global`

---

### Étape 4 : Vérifier que tout fonctionne

#### 4.1 Tester le domaine

Ouvrir dans le navigateur :
```
https://zyatria.global
```

✅ **Ça marche ?** Parfait !

❌ **Erreur ?** Voir la section Dépannage ci-dessous

#### 4.2 Vérifier HTTPS

Le cadenas 🔒 doit être vert dans la barre d'adresse.

Si ce n'est pas le cas :
1. Attendre 5-10 minutes
2. Vider le cache du navigateur (Ctrl+Shift+R)
3. Réessayer

#### 4.3 Tester les redirections

Vérifier que ces URLs fonctionnent :
```
http://zyatria.global → https://zyatria.global ✅
www.zyatria.global → https://zyatria.global ✅
```

---

## 🔧 CONFIGURATION AVANCÉE (Optionnel)

### Activer le mode "Always Use HTTPS"

1. Cloudflare Dashboard → Votre domaine
2. SSL/TLS → Edge Certificates
3. Activer "Always Use HTTPS"

### Activer HSTS (Sécurité)

1. SSL/TLS → Edge Certificates
2. Activer "HTTP Strict Transport Security (HSTS)"
3. Configuration recommandée :
   - Max Age: 6 months
   - Include subdomains: Yes
   - Preload: Yes

### Optimiser la vitesse

1. Speed → Optimization
2. Activer :
   - Auto Minify (HTML, CSS, JS)
   - Brotli
   - Early Hints
   - Rocket Loader

### Configurer le cache

1. Caching → Configuration
2. Caching Level: Standard
3. Browser Cache TTL: 4 hours

---

## 🆘 DÉPANNAGE

### Problème : "DNS_PROBE_FINISHED_NXDOMAIN"

**Cause :** Les DNS ne sont pas encore propagés

**Solution :**
1. Attendre 2-48h
2. Vider le cache DNS :
   ```bash
   # Windows
   ipconfig /flushdns
   
   # Mac
   sudo dscacheutil -flushcache
   
   # Linux
   sudo systemd-resolve --flush-caches
   ```

### Problème : "ERR_SSL_VERSION_OR_CIPHER_MISMATCH"

**Cause :** Le certificat SSL n'est pas encore généré

**Solution :**
1. Attendre 5-10 minutes
2. Cloudflare Dashboard → SSL/TLS
3. Vérifier que le mode est "Full" ou "Full (strict)"

### Problème : "Too many redirects"

**Cause :** Conflit de redirection

**Solution :**
1. Cloudflare Dashboard → SSL/TLS
2. Changer le mode SSL/TLS en "Full"
3. Attendre 5 minutes

### Problème : Le site affiche l'ancienne version

**Cause :** Cache du navigateur ou CDN

**Solution :**
1. Vider le cache du navigateur (Ctrl+Shift+R)
2. Cloudflare Dashboard → Caching → Purge Everything
3. Attendre 2-3 minutes

---

## 📊 VÉRIFICATION COMPLÈTE

### Checklist DNS

Vérifier sur https://dnschecker.org :
- [ ] A record pointe vers Cloudflare
- [ ] AAAA record (IPv6) configuré
- [ ] CNAME www configuré
- [ ] Propagation mondiale (>80%)

### Checklist SSL

Vérifier sur https://www.ssllabs.com/ssltest/ :
- [ ] Grade A ou A+
- [ ] Certificat valide
- [ ] HSTS activé
- [ ] TLS 1.3 supporté

### Checklist Performance

Vérifier sur https://pagespeed.web.dev :
- [ ] Score mobile >90
- [ ] Score desktop >95
- [ ] First Contentful Paint <1.8s
- [ ] Largest Contentful Paint <2.5s

---

## 💰 COÛTS ANNUELS

### Domaine
- **Cloudflare Registrar** : ~10-12€/an
- **Namecheap** : ~12€/an + 5€ WHOIS
- **Google Domains** : ~12€/an
- **OVH** : ~10€/an

### Hébergement
- **Cloudflare Pages** : GRATUIT ✅
  - Bande passante illimitée
  - Builds illimités
  - SSL gratuit
  - CDN mondial

### Total
**~10-17€/an** (juste le domaine !)

---

## 🎯 RÉSUMÉ RAPIDE

### Si domaine chez Cloudflare :
1. Acheter le domaine
2. Pages → Custom domains → Add
3. Entrer `zyatria.global`
4. **Terminé !** (2 minutes)

### Si domaine ailleurs :
1. Acheter le domaine
2. Ajouter le site sur Cloudflare
3. Changer les nameservers
4. Attendre 2-48h
5. Pages → Custom domains → Add
6. **Terminé !**

---

## 📧 BONUS : Email professionnel

Pour avoir des emails `contact@zyatria.global` :

### Option 1 : Cloudflare Email Routing (Gratuit)
1. Cloudflare Dashboard → Email → Email Routing
2. Activer Email Routing
3. Créer une adresse : `contact@zyatria.global`
4. Rediriger vers votre email personnel

### Option 2 : Google Workspace (Payant)
- Prix : 6€/mois/utilisateur
- Gmail professionnel
- Drive, Calendar, Meet inclus

### Option 3 : Zoho Mail (Gratuit/Payant)
- Plan gratuit : 1 domaine, 5 utilisateurs
- Plan payant : 1€/mois/utilisateur

---

**Votre domaine sera configuré et votre site accessible sur `https://zyatria.global` !** 🎉

Des questions ? Consultez la documentation Cloudflare : https://developers.cloudflare.com/pages
