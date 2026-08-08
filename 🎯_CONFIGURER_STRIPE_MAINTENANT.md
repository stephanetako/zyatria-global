# 🎯 CONFIGURER STRIPE - GUIDE COMPLET

## ✅ CE QUI EST DÉJÀ FAIT

- ✅ Liens Stripe Payment Links configurés
- ✅ Page de succès créée (`/success`)
- ✅ Tous les plans fonctionnels
- ✅ Build réussi

---

## 🎨 PERSONNALISER VOTRE PAGE STRIPE (5 MINUTES)

### **Étape 1: Accéder aux paramètres**

1. Allez sur https://dashboard.stripe.com
2. Cliquez sur **Settings** (⚙️ en haut à droite)
3. Cliquez sur **Branding** dans le menu de gauche

---

### **Étape 2: Ajouter votre logo**

1. Dans la section **Logo**:
   - Cliquez sur "Upload logo"
   - Choisissez votre logo (format PNG ou SVG recommandé)
   - Taille recommandée: 512x512px minimum

2. **Résultat:** Votre logo apparaîtra sur toutes les pages de paiement Stripe

---

### **Étape 3: Choisir vos couleurs**

1. Dans la section **Brand color**:
   - Cliquez sur le sélecteur de couleur
   - Entrez votre couleur principale: `#C98769` (votre couleur primary)
   - Ou choisissez une autre couleur de votre marque

2. Dans la section **Accent color**:
   - Choisissez une couleur d'accent (optionnel)
   - Recommandé: `#373D36` (votre couleur foreground)

3. **Résultat:** Les boutons et éléments Stripe utiliseront vos couleurs

---

### **Étape 4: Ajouter une icône**

1. Dans la section **Icon**:
   - Cliquez sur "Upload icon"
   - Choisissez votre favicon ou icône
   - Format: PNG ou ICO
   - Taille: 32x32px ou 64x64px

2. **Résultat:** Votre icône apparaîtra dans l'onglet du navigateur

---

### **Étape 5: Sauvegarder**

1. Cliquez sur **Save** en haut à droite
2. Testez en cliquant sur un de vos liens Stripe
3. Vérifiez que votre logo et couleurs apparaissent

---

## 🔗 CONFIGURER LA REDIRECTION APRÈS PAIEMENT

### **Pour chaque Payment Link:**

1. Allez sur https://dashboard.stripe.com/payment-links
2. Cliquez sur un de vos Payment Links
3. Cliquez sur **Edit** (ou les 3 points → Edit)
4. Descendez à la section **After payment**
5. Sélectionnez **Redirect to a page**
6. Entrez l'URL: `https://votre-site.pages.dev/success`
   - Remplacez `votre-site` par votre vrai domaine Cloudflare
7. Cliquez sur **Save**

**Répétez pour tous vos Payment Links:**
- Starter Monthly
- Professional One-time
- Professional Monthly
- Enterprise One-time
- Enterprise Monthly
- Audit
- Consultation
- Formation

---

## 📧 PERSONNALISER LES EMAILS STRIPE

### **Étape 1: Accéder aux paramètres d'emails**

1. Dashboard Stripe → **Settings** → **Emails**
2. Vous verrez tous les types d'emails que Stripe envoie

---

### **Étape 2: Personnaliser les emails**

1. **Receipt emails** (Reçus de paiement):
   - Cliquez sur **Customize**
   - Ajoutez votre logo
   - Modifiez le texte si nécessaire
   - Ajoutez un message personnalisé

2. **Invoice emails** (Factures):
   - Cliquez sur **Customize**
   - Personnalisez le message
   - Ajoutez des instructions

3. **Subscription emails** (Abonnements):
   - Personnalisez les emails de confirmation
   - Personnalisez les emails de renouvellement
   - Personnalisez les emails d'échec de paiement

---

### **Étape 3: Ajouter un message personnalisé**

Exemple de message pour les reçus:

```
Merci pour votre confiance ! 🎉

Votre paiement a été traité avec succès. Notre équipe vous contactera 
sous 24-48h pour planifier votre rendez-vous de lancement.

En attendant, n'hésitez pas à consulter notre documentation:
https://votre-site.pages.dev/docs

Besoin d'aide ? Contactez-nous:
support@zyatria.global

L'équipe ZyatrIA Global
```

---

## 🔔 CONFIGURER LES WEBHOOKS (OPTIONNEL)

### **Pourquoi ?**
Pour recevoir des notifications automatiques quand:
- Un paiement est effectué
- Un abonnement est créé
- Un paiement échoue
- Un abonnement est annulé

### **Comment ?**

1. Dashboard Stripe → **Developers** → **Webhooks**
2. Cliquez sur **Add endpoint**
3. Entrez l'URL: `https://votre-site.pages.dev/api/stripe/webhook`
4. Sélectionnez les événements:
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
5. Cliquez sur **Add endpoint**
6. Copiez le **Signing secret** (commence par `whsec_...`)
7. Ajoutez-le dans Cloudflare:
   ```bash
   wrangler secret put STRIPE_WEBHOOK_SECRET
   # Collez le secret quand demandé
   ```

---

## 📊 TESTER VOS PAIEMENTS

### **Mode Test (Recommandé d'abord)**

1. Assurez-vous d'être en **Test mode** (toggle en haut à droite)
2. Utilisez une carte de test:
   - Numéro: `4242 4242 4242 4242`
   - Date: N'importe quelle date future (ex: 12/25)
   - CVC: N'importe quel 3 chiffres (ex: 123)
   - Code postal: N'importe lequel

3. Testez chaque Payment Link:
   - Starter Monthly
   - Professional One-time
   - Professional Monthly
   - Audit
   - Consultation

4. Vérifiez que:
   - Le paiement passe
   - Vous êtes redirigé vers `/success`
   - Vous recevez un email de confirmation

---

### **Mode Live (Production)**

1. Passez en **Live mode** (toggle en haut à droite)
2. Testez avec une vraie carte (petit montant)
3. Vérifiez tout fonctionne
4. Remboursez le test si nécessaire

---

## 🎯 CHECKLIST COMPLÈTE

### **Branding:**
- [ ] Logo uploadé
- [ ] Couleurs configurées
- [ ] Icône uploadée
- [ ] Testé sur un Payment Link

### **Redirections:**
- [ ] URL de succès configurée pour Starter
- [ ] URL de succès configurée pour Professional
- [ ] URL de succès configurée pour Enterprise
- [ ] URL de succès configurée pour Services

### **Emails:**
- [ ] Emails de reçu personnalisés
- [ ] Emails de facture personnalisés
- [ ] Emails d'abonnement personnalisés
- [ ] Message personnalisé ajouté

### **Tests:**
- [ ] Test en mode Test effectué
- [ ] Tous les liens testés
- [ ] Redirection vers /success vérifiée
- [ ] Emails reçus et vérifiés

### **Production:**
- [ ] Passé en mode Live
- [ ] Test avec vraie carte effectué
- [ ] Tout fonctionne correctement

---

## 📋 URLS À CONFIGURER

### **Votre site Cloudflare:**
```
https://votre-site.pages.dev
```

### **Page de succès:**
```
https://votre-site.pages.dev/success
```

### **Webhook (optionnel):**
```
https://votre-site.pages.dev/api/stripe/webhook
```

---

## 💡 CONSEILS IMPORTANTS

### **1. Testez TOUJOURS en mode Test d'abord**
- Évite les erreurs coûteuses
- Permet de vérifier tout fonctionne
- Pas de vrais paiements

### **2. Configurez les redirections**
- Améliore l'expérience client
- Confirme le paiement
- Explique les prochaines étapes

### **3. Personnalisez les emails**
- Renforce votre marque
- Rassure le client
- Donne des instructions claires

### **4. Surveillez vos paiements**
- Vérifiez le Dashboard régulièrement
- Configurez des alertes email
- Répondez rapidement aux problèmes

---

## 🚀 PROCHAINES ÉTAPES

1. **Maintenant:**
   - Personnalisez votre page Stripe (5 min)
   - Configurez les redirections (10 min)
   - Testez en mode Test (5 min)

2. **Avant le lancement:**
   - Personnalisez les emails (10 min)
   - Testez en mode Live (5 min)
   - Vérifiez tout fonctionne

3. **Après le lancement:**
   - Surveillez les paiements
   - Répondez aux clients rapidement
   - Optimisez selon les retours

---

## 💬 BESOIN D'AIDE ?

Si vous avez des questions:
1. Consultez la documentation Stripe: https://stripe.com/docs
2. Contactez le support Stripe (très réactif)
3. Demandez-moi et je vous aide ! 😊

---

## 🎉 TOUT EST PRÊT !

Vos Payment Links fonctionnent ! Maintenant personnalisez-les pour une meilleure expérience client ! 🚀

**Commencez par le branding (5 minutes) ! 👆**
