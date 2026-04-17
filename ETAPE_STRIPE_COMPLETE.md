# 💳 STRIPE : Guide Complet d'Intégration

## 📋 Vue d'ensemble

Stripe va vous permettre d'accepter les paiements pour vos forfaits ZyatrIA Global :
- **Starter** : 49 CAD$/mois
- **Business** : 149 CAD$/mois  
- **Enterprise** : Sur mesure

---

## 🎯 Deux Options d'Intégration

### ✅ OPTION 1 : Payment Links (RECOMMANDÉE - LA PLUS SIMPLE)
- ⏱️ Configuration : **5-10 minutes**
- 💰 Coût : **0$** (juste les frais Stripe)
- 🛠️ Complexité : **Facile**
- ✨ Avantages : Aucun code, tout géré par Stripe

### ⚙️ OPTION 2 : API Checkout (Plus avancée)
- ⏱️ Configuration : **30-60 minutes**
- 💰 Coût : **0$** (juste les frais Stripe)
- 🛠️ Complexité : **Moyenne**
- ✨ Avantages : Plus de contrôle, page de succès personnalisée

---

## 🚀 OPTION 1 : Payment Links (START HERE)

C'est la solution la plus rapide et facile pour commencer !

### Étape 1 : Créer un compte Stripe

1. **Aller sur** : [stripe.com](https://stripe.com)
2. Cliquer sur **"Démarrer maintenant"**
3. Créer votre compte avec :
   - Email professionnel
   - Nom de l'entreprise : **ZyatrIA Global**
   - Pays : **Canada** 🇨🇦

### Étape 2 : Activer votre compte

Stripe va demander :
- ✅ Informations sur votre entreprise
- ✅ Numéro d'entreprise (si vous en avez un)
- ✅ Informations bancaires (pour recevoir les paiements)

**💡 Note** : Vous pouvez commencer en mode TEST sans tout compléter

---

### Étape 3 : Créer vos produits

#### A. Accéder au catalogue de produits

1. Dans le dashboard Stripe, cliquez sur **"Produits"**
2. Cliquez sur **"+ Ajouter un produit"**

#### B. Créer le forfait STARTER

```
Nom du produit : Starter Plan - ZyatrIA
Description : 1 micro-agent IA, Réponses 24/7, Support email

Prix :
├─ Récurrent : Mensuel
├─ Montant : 49.00 CAD
├─ Devise : CAD
└─ Nom de prix : Starter Monthly

Options de facturation :
└─ Facturation récurrente : Tous les mois
```

#### C. Créer le forfait BUSINESS

```
Nom du produit : Business Plan - ZyatrIA
Description : 3 micro-agents IA, Automatisations avancées, Intégrations CRM, Support prioritaire

Prix :
├─ Récurrent : Mensuel
├─ Montant : 149.00 CAD
├─ Devise : CAD
└─ Nom de prix : Business Monthly

Options de facturation :
└─ Facturation récurrente : Tous les mois
```

#### D. Créer le forfait ENTERPRISE

```
Nom du produit : Enterprise Plan - ZyatrIA
Description : Agents IA personnalisés, Automatisation complète, Support dédié, Onboarding premium

Prix :
├─ Type : Personnalisé
└─ Note : "Contactez-nous pour un devis personnalisé"
```

---

### Étape 4 : Créer les Payment Links

Pour chaque produit (Starter et Business) :

#### A. Dans la page du produit
1. Cliquez sur **"Créer un lien de paiement"**

#### B. Configuration du lien
```
Options recommandées :

✅ Collecter les adresses de facturation
✅ Autoriser les codes promotionnels
✅ Autoriser l'ajustement des quantités : NON
✅ Période d'essai gratuite : 14 jours (optionnel)

Page de succès :
└─ URL personnalisée : https://votre-site.com/success
   (ou laisser la page Stripe par défaut)
```

#### C. Copier le lien
Stripe va générer un lien du type :
```
https://buy.stripe.com/test_xxxxxxxxxxxxxx
```

**💾 IMPORTANT** : Sauvegardez ces liens quelque part !

---

### Étape 5 : Intégrer les liens dans votre site

Maintenant, on va mettre à jour le fichier de configuration :

#### Ouvrir le fichier de configuration
Le fichier se trouve ici : `src/config/stripe-links.ts`

#### Remplacer les liens de test

```typescript
// Avant (liens de test)
const STRIPE_LINKS = {
  starter: {
    cad: 'https://buy.stripe.com/test_starter_cad',
    // ...
  }
}

// Après (vos vrais liens)
const STRIPE_LINKS = {
  starter: {
    cad: 'https://buy.stripe.com/VOTRE_LIEN_STARTER_CAD',
    usd: 'https://buy.stripe.com/VOTRE_LIEN_STARTER_USD',
    eur: 'https://buy.stripe.com/VOTRE_LIEN_STARTER_EUR',
  },
  business: {
    cad: 'https://buy.stripe.com/VOTRE_LIEN_BUSINESS_CAD',
    usd: 'https://buy.stripe.com/VOTRE_LIEN_BUSINESS_USD',
    eur: 'https://buy.stripe.com/VOTRE_LIEN_BUSINESS_EUR',
  },
  enterprise: {
    cad: '/demo', // Redirige vers formulaire de contact
    usd: '/demo',
    eur: '/demo',
  }
}
```

---

### Étape 6 : Créer les produits pour USD et EUR

Si vous voulez offrir les paiements en USD et EUR :

#### Pour chaque forfait
1. Créer une **nouvelle variante de prix**
2. Sélectionner la devise (USD ou EUR)
3. Ajuster le montant selon le taux de change

**Exemple pour Business** :
```
CAD : 149$ → USD : 109$ → EUR : 99€
```

#### Créer un Payment Link pour chaque devise
Répétez l'étape 4 pour chaque variante

---

## 📊 Configuration de la page de succès

### Option A : Page de succès Stripe (par défaut)
Rien à faire, Stripe affiche automatiquement une confirmation.

### Option B : Page personnalisée (recommandée)

#### 1. Créer la page de succès
Le fichier existe déjà : `src/pages/success.astro`

#### 2. Configurer l'URL dans Stripe
Pour chaque Payment Link :
```
URL de la page de succès personnalisée :
https://votre-domaine.com/success
```

#### 3. Personnaliser le message
La page affiche déjà :
- ✅ Message de confirmation
- ✅ Prochaines étapes
- ✅ Informations de contact
- ✅ Lien vers le dashboard (à venir)

---

## 🧪 Mode Test vs Mode Production

### Mode Test (pour développement)
```
✅ Utilisez les clés de test
✅ Cartes bancaires de test :
   - 4242 4242 4242 4242 (Visa)
   - 5555 5555 5555 4444 (Mastercard)
   - Date : N'importe quelle date future
   - CVC : N'importe quel 3 chiffres
```

### Mode Production (pour lancer)
```
1. Activer votre compte Stripe complètement
2. Basculer en mode "Production" dans le dashboard
3. Créer de nouveaux Payment Links en mode production
4. Remplacer les liens dans le code
```

---

## 💰 Frais Stripe (Canada)

```
Transactions par carte :
├─ 2.9% + 0.30 CAD par transaction réussie
├─ Cartes internationales : +1.5%
└─ Devises étrangères : +1%

Abonnements :
└─ Mêmes frais que les transactions
```

---

## 🔒 Sécurité et Conformité

### Stripe s'occupe de :
- ✅ PCI Compliance (sécurité des cartes)
- ✅ Gestion des données sensibles
- ✅ Prévention de la fraude
- ✅ 3D Secure (authentification forte)

### Vous n'avez RIEN à gérer côté sécurité ! 🎉

---

## 📧 Emails automatiques

Stripe envoie automatiquement :
- ✅ Confirmation de paiement
- ✅ Reçus
- ✅ Factures
- ✅ Rappels de paiement
- ✅ Notifications d'échec

### Personnaliser les emails
1. Dashboard Stripe → **Paramètres**
2. **Emails**
3. Personnaliser les templates

---

## 📱 Dashboard Stripe : Que surveiller ?

### Métriques importantes
```
📊 Revenus mensuels récurrents (MRR)
💳 Taux de réussite des paiements
🔄 Taux de churn (annulations)
📈 Nouveaux abonnements
```

### Accéder au dashboard
👉 [dashboard.stripe.com](https://dashboard.stripe.com)

---

## 🛠️ OPTION 2 : Stripe Checkout API (Avancée)

Si vous voulez plus de contrôle, vous pouvez utiliser l'API.

### Avantages
- Page de paiement intégrée à votre site
- Plus de personnalisation
- Analytics plus précis
- Webhooks pour automatisation

### Configuration requise

#### 1. Variables d'environnement
Créer un fichier `.env` :

```env
# Clés Stripe (à récupérer dans le dashboard)
STRIPE_PUBLIC_KEY=pk_test_xxxxxxxxxxxx
STRIPE_SECRET_KEY=sk_test_xxxxxxxxxxxx

# IDs des produits
STRIPE_STARTER_PRICE_ID=price_xxxxxxxxxxxx
STRIPE_BUSINESS_PRICE_ID=price_xxxxxxxxxxxx
```

#### 2. L'API route existe déjà
Le fichier `src/pages/api/create-checkout-session.ts` est déjà prêt.

#### 3. Récupérer vos clés

```
Dashboard Stripe → Développeurs → Clés API

📋 Clé publique : pk_test_xxx (pour le frontend)
🔐 Clé secrète : sk_test_xxx (pour le backend)
```

#### 4. Récupérer les Price IDs

```
Dans chaque produit Stripe :
Prix → Cliquer sur le prix → Copier l'ID du prix

Exemple : price_1234567890abcdef
```

---

## 🎯 Checklist de configuration

### Payment Links (Option 1)
- [ ] Compte Stripe créé
- [ ] Produits créés (Starter, Business, Enterprise)
- [ ] Payment Links créés pour CAD
- [ ] Payment Links créés pour USD (optionnel)
- [ ] Payment Links créés pour EUR (optionnel)
- [ ] Liens mis à jour dans `src/config/stripe-links.ts`
- [ ] Test en mode Test avec carte de test
- [ ] Activation du compte pour production

### API Checkout (Option 2)
- [ ] Variables d'environnement configurées
- [ ] Clés API récupérées
- [ ] Price IDs récupérés
- [ ] Tests avec API de test
- [ ] Webhooks configurés (optionnel)

---

## 🧪 Tester vos paiements

### Mode Test
1. Cliquer sur "S'abonner" sur votre site
2. Utiliser la carte de test : **4242 4242 4242 4242**
3. Vérifier que la redirection fonctionne
4. Vérifier l'email de confirmation

### Mode Production
1. Faire un vrai test avec une vraie carte
2. Annuler immédiatement l'abonnement
3. Vérifier le remboursement

---

## 📞 Support

### Questions fréquentes

**Q: Combien de temps pour recevoir les paiements ?**
R: 7-10 jours pour le premier paiement, puis 2-3 jours ensuite.

**Q: Peut-on offrir des périodes d'essai ?**
R: Oui ! Configurable dans chaque Payment Link (ex: 14 jours gratuits).

**Q: Comment gérer les remboursements ?**
R: Directement dans le dashboard Stripe, section "Paiements".

**Q: Stripe est-il disponible au Canada ?**
R: Oui ! Pleinement supporté avec CAD.

---

## 🚀 Prochaines étapes après Stripe

Une fois Stripe configuré :

✅ **Étape Stripe terminée !**

➡️ **Prochaine étape** : Déploiement sur Cloudflare Pages

---

## 💡 Conseil Pro

### Commencez simple !
1. Utilisez Payment Links au début
2. Testez avec quelques clients
3. Migrez vers l'API plus tard si besoin

### Offrez une période d'essai
```
14 jours gratuits = Plus de conversions !
```

---

## 📊 Template de prix recommandé

```
STARTER (CAD)
├─ Mensuel : 49 CAD$/mois
├─ Annuel : 490 CAD$/an (économie de 2 mois)
└─ Essai : 14 jours gratuits

BUSINESS (CAD)
├─ Mensuel : 149 CAD$/mois
├─ Annuel : 1490 CAD$/an (économie de 2 mois)
└─ Essai : 14 jours gratuits

ENTERPRISE
└─ Sur mesure (contact pour devis)
```

---

**🎯 Temps estimé : 30-60 minutes**

**💰 Coût : Gratuit** (sauf frais de transaction Stripe)

**🆘 Besoin d'aide ?** Dites-moi où vous bloquez et je vous guide pas à pas !
