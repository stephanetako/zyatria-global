# 🧾 Guide de Configuration Stripe Tax

## 📋 Vue d'ensemble

Stripe Tax calcule et collecte automatiquement les taxes de vente pour vos transactions. C'est essentiel pour être conforme aux réglementations fiscales internationales.

---

## 🎯 Étape 1 : Activer Stripe Tax

### Dans le Dashboard Stripe

1. **Allez sur** : https://dashboard.stripe.com/settings/tax
2. **Cliquez sur** : "Activate Stripe Tax"
3. **Suivez l'assistant** de configuration

### Configuration des juridictions

Configurez les régions où vous collectez des taxes :

- 🇨🇦 **Canada** : TPS/TVQ/TVH selon la province
- 🇺🇸 **États-Unis** : Sales tax par état
- 🇪🇺 **Union Européenne** : TVA
- 🇬🇧 **Royaume-Uni** : VAT
- Autres pays selon vos besoins

---

## 🔧 Étape 2 : Configurer vos Payment Links

### Pour chaque Payment Link existant :

1. **Allez sur** : https://dashboard.stripe.com/payment-links
2. **Cliquez sur un lien** de paiement
3. **Cliquez sur** : "Edit" (⚙️)
4. **Trouvez la section** : "Tax"
5. **Activez** : "Collect tax automatically"
6. **Sauvegardez**

### Vos Payment Links à configurer :

#### Plans principaux (6 liens)
- ✅ Starter - Paiement unique
- ✅ Starter - Mensuel
- ✅ Professional - Paiement unique
- ✅ Professional - Mensuel
- ✅ Enterprise - Paiement unique
- ✅ Enterprise - Mensuel

#### Micro-Agents (6 liens)
- ✅ Lead Qualification
- ✅ Customer Support
- ✅ Appointments
- ✅ Prospect Follow-up
- ✅ Real Estate
- ✅ E-commerce

#### Services (2 liens)
- ✅ Audit IA Complet
- ✅ Consultation Stratégique

**Total : 14 Payment Links à configurer**

---

## 📊 Étape 3 : Configurer les Tax Codes

### Codes de taxe recommandés pour vos produits :

| Produit | Tax Code | Description |
|---------|----------|-------------|
| Plans IA (Starter, Pro, Enterprise) | `txcd_10103001` | Software as a Service (SaaS) |
| Micro-Agents | `txcd_10103001` | Software as a Service (SaaS) |
| Audit IA | `txcd_10401400` | Professional services - Consulting |
| Consultation | `txcd_10401400` | Professional services - Consulting |

### Comment appliquer les Tax Codes :

1. **Allez sur** : https://dashboard.stripe.com/products
2. **Pour chaque produit** :
   - Cliquez sur le produit
   - Trouvez "Tax code"
   - Sélectionnez le code approprié
   - Sauvegardez

---

## 🚀 Étape 4 : Utiliser l'API avec automatic_tax

### Option A : Utiliser la nouvelle API route

J'ai créé une nouvelle route API : `/api/stripe/create-checkout`

**Exemple d'utilisation :**

```typescript
const response = await fetch('/api/stripe/create-checkout', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    planName: 'Professional',
    amount: 2997,
    currency: 'CAD',
    type: 'payment', // ou 'subscription'
    customerEmail: 'client@example.com',
    successUrl: window.location.origin + '/success',
    cancelUrl: window.location.origin + '/pricing',
  }),
});

const { url } = await response.json();
window.location.href = url; // Rediriger vers Stripe Checkout
```

### Option B : Continuer avec Payment Links

Vos Payment Links existants fonctionnent parfaitement ! Il suffit d'activer la taxation automatique sur chacun d'eux (voir Étape 2).

---

## 🧪 Étape 5 : Tester la taxation

### En mode Test

1. **Utilisez une adresse de test** :
   - Adresse : 123 Test Street
   - Ville : Toronto
   - Province : ON
   - Code postal : M5H 2N2
   - Pays : Canada

2. **Carte de test Stripe** :
   - Numéro : `4242 4242 4242 4242`
   - Date : N'importe quelle date future
   - CVC : N'importe quel 3 chiffres

3. **Vérifiez** que les taxes sont calculées automatiquement

### Exemples de calcul de taxes au Canada

| Province | TPS | TVP | Total |
|----------|-----|-----|-------|
| Ontario (ON) | 5% | 8% (TVH) | 13% |
| Québec (QC) | 5% | 9.975% | 14.975% |
| Alberta (AB) | 5% | 0% | 5% |
| Colombie-Britannique (BC) | 5% | 7% | 12% |

---

## 📈 Étape 6 : Surveiller les taxes collectées

### Dashboard Stripe Tax

1. **Allez sur** : https://dashboard.stripe.com/tax/registrations
2. **Consultez** :
   - Taxes collectées par juridiction
   - Rapports de taxes
   - Déclarations à faire

### Rapports automatiques

Stripe génère automatiquement :
- ✅ Rapports mensuels de taxes
- ✅ Fichiers pour déclarations fiscales
- ✅ Détails par transaction

---

## ⚙️ Configuration avancée

### Paramètres automatic_tax dans l'API

```typescript
automatic_tax: {
  enabled: true,
  // Optionnel : spécifier une juridiction
  liability: {
    type: 'self',
  },
}
```

### Comportement des taxes

```typescript
tax_behavior: 'exclusive', // Les taxes s'ajoutent au prix
// OU
tax_behavior: 'inclusive', // Les taxes sont incluses dans le prix
```

### Collecter l'adresse de facturation

```typescript
billing_address_collection: 'required', // Obligatoire pour calculer les taxes
```

---

## 🔍 Vérification de la configuration

### Checklist

- [ ] Stripe Tax activé dans le dashboard
- [ ] Juridictions fiscales configurées (Canada, USA, etc.)
- [ ] Tax codes appliqués aux produits
- [ ] Payment Links mis à jour avec taxation automatique
- [ ] Tests effectués en mode test
- [ ] Adresse de facturation collectée
- [ ] Rapports de taxes vérifiés

---

## 📞 Support

### Ressources Stripe

- **Documentation** : https://stripe.com/docs/tax
- **Dashboard Tax** : https://dashboard.stripe.com/settings/tax
- **Support Stripe** : https://support.stripe.com

### Ressources fiscales Canada

- **ARC (Agence du revenu du Canada)** : https://www.canada.ca/fr/agence-revenu.html
- **Revenu Québec** : https://www.revenuquebec.ca

---

## 🎯 Prochaines étapes

1. **Activez Stripe Tax** dans votre dashboard
2. **Configurez vos 14 Payment Links** avec taxation automatique
3. **Testez** avec une transaction de test
4. **Vérifiez** que les taxes sont correctement calculées
5. **Passez en production** quand tout fonctionne

---

## 💡 Conseils

- ✅ Activez la taxation automatique **avant** de lancer en production
- ✅ Testez avec différentes adresses (provinces/états différents)
- ✅ Vérifiez les rapports de taxes régulièrement
- ✅ Gardez vos juridictions fiscales à jour
- ✅ Consultez un comptable pour la conformité fiscale

---

**Besoin d'aide ?** Contactez le support Stripe ou consultez la documentation complète.
