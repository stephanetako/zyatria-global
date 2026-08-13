# 🔑 GUIDE COMPLET - CRÉER VOS LIENS STRIPE PAYMENT LINKS

## ⚠️ PROBLÈME ACTUEL

Les liens Stripe dans le site sont des **PLACEHOLDERS** et ne fonctionnent pas.
Vous devez créer vos propres Payment Links sur Stripe.

## 📋 PRIX À CONFIGURER

### Plans Principaux

#### 1. Starter Plan
- **Mensuel**: 297 CAD/mois
- **One-time**: 997 CAD

#### 2. Professional Plan  
- **Mensuel**: 697 CAD/mois
- **One-time**: 2997 CAD

#### 3. Enterprise Plan
- **Mensuel**: 1497 CAD/mois
- **One-time**: 9997 CAD

### Services Additionnels

- **Audit IA**: 497 CAD (one-time)
- **Consultation**: 147 CAD (one-time)
- **Formation**: 997 CAD (one-time)

### Micro-Agents (tous mensuels)

- **Lead Qualification**: 97 CAD/mois
- **Customer Support**: 97 CAD/mois
- **Appointments**: 97 CAD/mois
- **Prospect Followup**: 197 CAD/mois
- **Real Estate**: 297 CAD/mois
- **E-commerce**: 297 CAD/mois

## 🚀 ÉTAPES POUR CRÉER LES LIENS

### Étape 1: Aller sur Stripe Dashboard
```
https://dashboard.stripe.com/payment-links
```

### Étape 2: Créer un Payment Link

Pour chaque produit:

1. Cliquez sur **"+ New"** ou **"Créer un lien"**

2. **Remplissez les informations:**
   - **Nom**: Ex: "Bot IA Starter - Mensuel"
   - **Prix**: Ex: 297.00
   - **Devise**: CAD
   - **Type**: 
     - "Recurring" pour les abonnements mensuels
     - "One-time" pour les paiements uniques
   - **Intervalle**: "Monthly" pour les abonnements

3. **Options recommandées:**
   - ✅ Collect customer email
   - ✅ Collect billing address
   - ✅ Allow promotion codes
   - ✅ Require payment method

4. **Cliquez sur "Create link"**

5. **Copiez l'URL complète** qui ressemble à:
   ```
   https://buy.stripe.com/abc123xyz
   ```

### Étape 3: Répéter pour tous les produits

Vous devez créer **14 Payment Links** au total:

**Plans (6 liens):**
- [ ] Starter Monthly
- [ ] Starter One-time
- [ ] Professional Monthly
- [ ] Professional One-time
- [ ] Enterprise Monthly
- [ ] Enterprise One-time

**Services (3 liens):**
- [ ] Audit
- [ ] Consultation
- [ ] Formation

**Micro-agents (6 liens):**
- [ ] Lead Qualification
- [ ] Customer Support
- [ ] Appointments
- [ ] Prospect Followup
- [ ] Real Estate
- [ ] E-commerce

### Étape 4: Mettre à jour le fichier de configuration

Ouvrez `src/config/stripe-links.ts` et remplacez chaque `'https://buy.stripe.com/VOTRE_LIEN_ICI'` par votre vrai lien.

**Exemple:**
```typescript
export const stripeLinks = {
  plans: {
    starterMonthly: 'https://buy.stripe.com/abc123xyz',  // ← Votre lien ici
    starterOneTime: 'https://buy.stripe.com/def456uvw',  // ← Votre lien ici
    // ... etc
  },
  // ...
};
```

### Étape 5: Rebuild et redéployer

```bash
npm run build
wrangler pages deploy dist
```

## 📝 TEMPLATE POUR CRÉER LES PRODUITS

### Starter Monthly
```
Nom: Bot IA Starter - Abonnement Mensuel
Prix: 297.00 CAD
Type: Recurring
Intervalle: Monthly
Description: Support continu, mises à jour mensuelles, maintenance incluse
```

### Starter One-time
```
Nom: Bot IA Starter - Paiement Unique
Prix: 997.00 CAD
Type: One-time
Description: Déploiement complet, support inclus
```

### Professional Monthly
```
Nom: Bot IA Professional - Abonnement Mensuel
Prix: 697.00 CAD
Type: Recurring
Intervalle: Monthly
Description: Support prioritaire, optimisations continues, analytics avancés
```

### Professional One-time
```
Nom: Bot IA Professional - Paiement Unique
Prix: 2997.00 CAD
Type: One-time
Description: 3 agents IA, automatisation avancée, déploiement rapide
```

### Enterprise Monthly
```
Nom: Bot IA Enterprise - Abonnement Mensuel
Prix: 1497.00 CAD
Type: Recurring
Intervalle: Monthly
Description: Support dédié 24/7, SLA garanti, développement continu
```

### Enterprise One-time
```
Nom: Bot IA Enterprise - Paiement Unique
Prix: 9997.00 CAD
Type: One-time
Description: Solution complète, 7 agents IA, déploiement rapide
```

### Audit
```
Nom: Audit IA Complet + Plan d'Action 90 jours
Prix: 497.00 CAD
Type: One-time
Description: Analyse complète de vos processus, recommandations personnalisées
```

### Consultation
```
Nom: Consultation Stratégique IA
Prix: 147.00 CAD
Type: One-time
Description: Session de consultation avec nos experts IA
```

### Formation
```
Nom: Formation IA pour Équipes
Prix: 997.00 CAD
Type: One-time
Description: Formation complète pour transformer vos équipes avec l'IA
```

### Micro-Agent Lead Qualification
```
Nom: Micro-Agent - Qualification Automatique des Leads
Prix: 97.00 CAD
Type: Recurring
Intervalle: Monthly
Description: Qualification intelligente 24/7, scoring automatique
```

### Micro-Agent Customer Support
```
Nom: Micro-Agent - Réponses Clients 24/7
Prix: 97.00 CAD
Type: Recurring
Intervalle: Monthly
Description: Réponses instantanées 24/7, support multilingue
```

### Micro-Agent Appointments
```
Nom: Micro-Agent - Gestion des Rendez-vous
Prix: 97.00 CAD
Type: Recurring
Intervalle: Monthly
Description: Réservation en ligne, rappels automatiques
```

### Micro-Agent Prospect Followup
```
Nom: Micro-Agent - Suivi des Prospects
Prix: 197.00 CAD
Type: Recurring
Intervalle: Monthly
Description: Séquences automatisées multi-canal
```

### Micro-Agent Real Estate
```
Nom: Micro-Agent - Immobilier
Prix: 297.00 CAD
Type: Recurring
Intervalle: Monthly
Description: Planification visites, qualification acheteurs
```

### Micro-Agent E-commerce
```
Nom: Micro-Agent - E-commerce
Prix: 297.00 CAD
Type: Recurring
Intervalle: Monthly
Description: Récupération paniers, suivi commandes
```

## ⏱️ TEMPS ESTIMÉ

- **Création d'un lien**: ~2 minutes
- **Total pour 14 liens**: ~30 minutes

## ✅ VÉRIFICATION

Après avoir créé tous les liens, vérifiez dans la console du navigateur:

```javascript
import { validatePaymentLinks } from './src/config/stripe-links';
const validation = validatePaymentLinks();
console.log(validation);
// Devrait afficher: { valid: true, missing: [] }
```

## 🎯 RÉSULTAT ATTENDU

Une fois tous les liens créés et configurés:
- ✅ Tous les boutons "Commencer" fonctionnent
- ✅ Redirection vers Stripe Checkout
- ✅ Paiements fonctionnels
- ✅ Webhooks reçus

## 💡 CONSEILS

1. **Mode Test d'abord**: Créez les liens en mode Test pour vérifier
2. **Mode Live ensuite**: Recréez en mode Live pour la production
3. **Sauvegardez les liens**: Gardez une copie de tous vos liens
4. **Testez chaque lien**: Cliquez sur chaque bouton pour vérifier

## 🆘 BESOIN D'AIDE?

Si vous avez des questions sur la création des Payment Links:
- Documentation Stripe: https://stripe.com/docs/payment-links
- Support Stripe: https://support.stripe.com/

---

**Temps total estimé: 30-45 minutes** ⏱️
