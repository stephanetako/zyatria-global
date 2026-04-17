# 🎨 GUIDE VISUEL : À QUOI ÇA RESSEMBLE

Ce guide vous montre visuellement où et comment vos liens Stripe apparaissent sur le site.

---

## 📍 1. SECTION PRICING (Page d'accueil et /pricing)

### Vue d'ensemble

```
┌────────────────────────────────────────────────────────────────────────┐
│                        💶 Nos Forfaits                                 │
│              Des Solutions Adaptées à Chaque Entreprise                │
│                    Disponibles en EUR, USD et CAD                      │
│                                                                        │
│        [EUR €]  [USD $]  [CAD $]  |  [Mensuel]  [Annuel -20%]        │
└────────────────────────────────────────────────────────────────────────┘

┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│   ✨ STARTER     │  │   ⚡ BUSINESS    │  │   🚀 ENTERPRISE  │
│                  │  │  [PLUS POPULAIRE]│  │                  │
│  €49 /mois       │  │  €149 /mois      │  │  Sur mesure      │
│                  │  │                  │  │                  │
│  ✓ 1 micro-agent │  │  ✓ 3 micro-agents│  │  ✓ Agents custom │
│  ✓ Réponses 24/7 │  │  ✓ Automations   │  │  ✓ Automatisation│
│  ✓ Support email │  │  ✓ Intégrations  │  │  ✓ Support dédié │
│                  │  │  ✓ Support prio  │  │                  │
│                  │  │                  │  │                  │
│  ┌─────────────┐ │  │  ┌─────────────┐ │  │  ┌─────────────┐ │
│  │ Démarrer    │ │  │  │ Démarrer    │ │  │  │ Réserver    │ │
│  └─────────────┘ │  │  └─────────────┘ │  │  └─────────────┘ │
│                  │  │                  │  │                  │
│  Déjà décidé ?   │  │  Déjà décidé ?   │  │                  │
│  Payer maintenant│  │  Payer maintenant│  │                  │
│       ↑          │  │       ↑          │  │                  │
│   LIEN STRIPE    │  │   LIEN STRIPE    │  │                  │
└──────────────────┘  └──────────────────┘  └──────────────────┘
```

### Comportement

Quand l'utilisateur clique sur **"Payer maintenant"** :

```
1. Clic sur "Payer maintenant" (Starter EUR)
   ↓
2. JavaScript appelle : getStripeLink('starter', 'eur')
   ↓
3. Récupère : 'https://buy.stripe.com/test_XXXXX'
   ↓
4. Ouvre ce lien dans un nouvel onglet
   ↓
5. L'utilisateur arrive sur la page de paiement Stripe
```

---

## 📍 2. CTA FINAL (Bas de la page d'accueil)

### Vue d'ensemble

```
┌────────────────────────────────────────────────────────────────────────┐
│                                                                        │
│       🌟                                                               │
│                                                                        │
│          Vos Concurrents Utilisent Déjà l'Automatisation IA           │
│                                                                        │
│  Ne restez pas en arrière. Rejoignez 500+ entreprises qui automatisent│
│  leur croissance avec des agents intelligents. Déployez en 7-15 jours │
│                et voyez des résultats mesurables.                     │
│                                                                        │
│       ┌──────────────────────────┐  ┌──────────────────────────┐     │
│       │ Démarrez Votre Démo      │  │ ✓ Consultation gratuite  │     │
│       │ Gratuite            →    │  │ ✓ Sans engagement        │     │
│       └──────────────────────────┘  └──────────────────────────┘     │
│                                                                        │
│                 ✓ Demo gratuite   ✓ Sans engagement                   │
│                 ✓ Réponse 24h     ✓ 4 langues                        │
│                                                                        │
│                  Déjà décidé ? S'abonner maintenant →                 │
│                              ↑                                         │
│                         LIEN STRIPE                                    │
│                      (Plan Business EUR)                              │
└────────────────────────────────────────────────────────────────────────┘
```

### Comportement

Quand l'utilisateur clique sur **"S'abonner maintenant"** :

```
1. Clic sur "S'abonner maintenant"
   ↓
2. JavaScript utilise : DEFAULT_STRIPE_LINK
   ↓
3. Récupère automatiquement : getStripeLink('business', 'eur')
   ↓
4. Ouvre le lien Stripe du plan Business
```

---

## 📍 3. PAGE STRIPE CHECKOUT

### Ce que voit l'utilisateur après avoir cliqué

```
┌────────────────────────────────────────────────────────────────────────┐
│  stripe.com                                            🔒 Sécurisé     │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  ← ZyatrIA Global                                                      │
│                                                                        │
│  ───────────────────────────────────────────────────────────────────  │
│                                                                        │
│  Starter Plan                                             €49.00      │
│  1 micro-agent IA, Réponses 24/7, Support email                       │
│                                                                        │
│  ───────────────────────────────────────────────────────────────────  │
│                                                                        │
│  Email                                                                 │
│  ┌──────────────────────────────────────────────────────────────────┐ │
│  │ client@example.com                                               │ │
│  └──────────────────────────────────────────────────────────────────┘ │
│                                                                        │
│  Informations de carte                                                 │
│  ┌──────────────────────────────────────────────────────────────────┐ │
│  │ 4242 4242 4242 4242                                              │ │
│  └──────────────────────────────────────────────────────────────────┘ │
│                                                                        │
│  ┌──────────┐  ┌──────┐                                               │
│  │ 12 / 25  │  │ 123  │                                               │
│  └──────────┘  └──────┘                                               │
│                                                                        │
│  Nom du titulaire                                                      │
│  ┌──────────────────────────────────────────────────────────────────┐ │
│  │ Jean Dupont                                                      │ │
│  └──────────────────────────────────────────────────────────────────┘ │
│                                                                        │
│  Code promo (optionnel)                                               │
│  ┌──────────────────────────────────────────────────────────────────┐ │
│  │                                                  [Appliquer]     │ │
│  └──────────────────────────────────────────────────────────────────┘ │
│                                                                        │
│  ┌────────────────────────────────────────────────────────────────┐   │
│  │              S'abonner                                         │   │
│  └────────────────────────────────────────────────────────────────┘   │
│                                                                        │
│  🔒 Paiements sécurisés par Stripe                                     │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 📍 4. PAGE SUCCESS (/success)

### Après un paiement réussi

```
┌────────────────────────────────────────────────────────────────────────┐
│                              votre-site.com/success                    │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│                              ✅                                        │
│                         [Cercle vert]                                  │
│                                                                        │
│                     🎉 Paiement Réussi !                               │
│                                                                        │
│               Bienvenue dans la famille ZyatrIA Global                │
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐ │
│  │ ✓ Votre abonnement a été activé avec succès !                   │ │
│  │                                                                  │ │
│  │ Un email de confirmation vous a été envoyé avec tous les détails.│ │
│  └──────────────────────────────────────────────────────────────────┘ │
│                                                                        │
│                        📋 Prochaines Étapes                            │
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐ │
│  │ 📧  1. Vérifiez votre email                                      │ │
│  │     Nous vous avons envoyé un email de bienvenue avec vos        │ │
│  │     identifiants de connexion et les prochaines étapes.          │ │
│  └──────────────────────────────────────────────────────────────────┘ │
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐ │
│  │ 📅  2. Réservez votre appel de lancement                         │ │
│  │     Notre équipe vous contactera dans les 24h pour programmer    │ │
│  │     votre session d'onboarding personnalisée.                    │ │
│  └──────────────────────────────────────────────────────────────────┘ │
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐ │
│  │ ✨  3. Configuration de votre micro-agent                        │ │
│  │     Nous déployons votre solution IA en 7-15 jours.              │ │
│  └──────────────────────────────────────────────────────────────────┘ │
│                                                                        │
│     ✓ Paiement sécurisé  ✓ Support 24/7  ✓ Annulation facile        │
│                                                                        │
│       ┌──────────────────────┐    ┌──────────────────────┐           │
│       │ Retour à l'accueil → │    │ Nous contacter       │           │
│       └──────────────────────┘    └──────────────────────┘           │
│                                                                        │
│                Besoin d'aide ? Notre équipe est là pour vous.         │
│          support@zyatria.global  •  Planifier un appel                │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 🔄 FLUX COMPLET UTILISATEUR

### Scénario : Client achète le plan Business

```
┌─────────────────────────────────────────────────────────────────────┐
│ ÉTAPE 1 : Visite du site                                           │
│                                                                     │
│ Client arrive sur zyatria.global                                    │
│ Scroll vers la section Pricing                                     │
└─────────────────────┬───────────────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────────────┐
│ ÉTAPE 2 : Sélection du plan                                        │
│                                                                     │
│ Voit les 3 plans : Starter, Business (⭐ Populaire), Enterprise    │
│ Choisit Business (149€/mois)                                       │
│ Sélectionne la devise : EUR                                        │
└─────────────────────┬───────────────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────────────┐
│ ÉTAPE 3 : Clic sur "Payer maintenant"                              │
│                                                                     │
│ Bouton sous le plan Business                                        │
│ OU lien "Déjà décidé ? Payer maintenant"                           │
└─────────────────────┬───────────────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────────────┐
│ ÉTAPE 4 : Redirection vers Stripe                                  │
│                                                                     │
│ Nouvel onglet s'ouvre                                               │
│ URL : https://buy.stripe.com/test_XXXXX                            │
│ Page sécurisée Stripe Checkout                                     │
└─────────────────────┬───────────────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────────────┐
│ ÉTAPE 5 : Remplissage du formulaire                                │
│                                                                     │
│ Client entre :                                                      │
│ - Email : client@example.com                                        │
│ - Carte : 4242 4242 4242 4242 (test)                              │
│ - Date : 12/25                                                      │
│ - CVC : 123                                                         │
│ - Nom : Jean Dupont                                                 │
└─────────────────────┬───────────────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────────────┐
│ ÉTAPE 6 : Validation du paiement                                   │
│                                                                     │
│ Clic sur "S'abonner"                                                │
│ Stripe traite le paiement (instant)                                 │
│ Paiement accepté ✅                                                 │
└─────────────────────┬───────────────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────────────┐
│ ÉTAPE 7 : Redirection vers /success                                │
│                                                                     │
│ Stripe redirige automatiquement                                     │
│ URL : https://zyatria.global/success?session_id=XXX                │
│ Client voit la page de confirmation                                 │
└─────────────────────┬───────────────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────────────┐
│ ÉTAPE 8 : Confirmation et prochaines étapes                        │
│                                                                     │
│ Client voit :                                                       │
│ - Message de succès                                                 │
│ - Prochaines étapes (vérifier email, call, déploiement)           │
│ - Boutons : Retour accueil / Nous contacter                        │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 📱 VERSION MOBILE

### Pricing sur mobile

```
┌──────────────────────┐
│  💶 Nos Forfaits     │
│  Des Solutions...    │
│                      │
│  [EUR] [USD] [CAD]   │
│  [Mensuel] [Annuel]  │
│                      │
│ ┌──────────────────┐ │
│ │ ✨ STARTER       │ │
│ │ €49 /mois        │ │
│ │                  │ │
│ │ ✓ 1 micro-agent  │ │
│ │ ✓ Réponses 24/7  │ │
│ │ ✓ Support email  │ │
│ │                  │ │
│ │ [Démarrer]       │ │
│ │                  │ │
│ │ Payer maintenant │ │
│ └──────────────────┘ │
│                      │
│ [Scroll vers bas]    │
│                      │
│ ┌──────────────────┐ │
│ │ ⚡ BUSINESS      │ │
│ │ [PLUS POPULAIRE] │ │
│ │ €149 /mois       │ │
│ │ ...              │ │
└──────────────────────┘
```

---

## 💻 CODE TECHNIQUE

### Comment les liens sont générés

```typescript
// Dans stripe-links.ts
export const STRIPE_TEST_LINKS = {
  starter: {
    eur: 'https://buy.stripe.com/test_ABC123',  // ← Votre lien
    usd: 'https://buy.stripe.com/test_ABC456',
    cad: 'https://buy.stripe.com/test_ABC789',
  },
  business: {
    eur: 'https://buy.stripe.com/test_DEF123',  // ← Votre lien
    usd: 'https://buy.stripe.com/test_DEF456',
    cad: 'https://buy.stripe.com/test_DEF789',
  },
};

// Fonction helper
export const getStripeLink = (
  plan: 'starter' | 'business',
  currency: 'eur' | 'usd' | 'cad'
): string => {
  const links = USE_TEST_MODE ? STRIPE_TEST_LINKS : STRIPE_LIVE_LINKS;
  return links[plan][currency];
};
```

### Dans le composant Pricing

```typescript
// Quand l'utilisateur clique sur "Payer maintenant"
const link = getStripeLink('starter', 'eur');
// Retourne : 'https://buy.stripe.com/test_ABC123'

window.open(link, '_blank');
// Ouvre le lien dans un nouvel onglet
```

---

## 🎨 PERSONNALISATION

### Vous pouvez modifier :

1. **Textes des boutons**
   - Dans `Pricing.tsx` : `cta: "Démarrer L'Essai Gratuit"`
   - Changez en : `cta: "Commencer Maintenant"`

2. **Texte du lien secondaire**
   - Dans `Pricing.tsx` : `"Déjà décidé ? Payer maintenant"`
   - Changez en : `"Paiement immédiat →"`

3. **Plan par défaut dans CTA Final**
   - Dans `stripe-links.ts` : 
   ```typescript
   // Change de 'business' à 'starter' si vous voulez
   export const DEFAULT_STRIPE_LINK = getStripeLink('business', 'eur');
   ```

---

## ✅ VÉRIFICATION VISUELLE

### Checklist avant déploiement

- [ ] Les boutons "Payer maintenant" sont visibles sous Starter et Business
- [ ] Le lien "Déjà décidé ?" est présent (petit texte sous le bouton)
- [ ] Le CTA Final affiche "S'abonner maintenant" en bas
- [ ] Les liens sont cliquables (pas griser out)
- [ ] Un clic ouvre un nouvel onglet avec Stripe
- [ ] La page Stripe affiche le bon produit et prix
- [ ] Après paiement test, redirection vers /success
- [ ] La page /success affiche le message de confirmation

---

## 🎉 RÉSULTAT FINAL

Votre site aura :

✅ **Professionnalisme**
- Paiements sécurisés via Stripe
- Design moderne et responsive
- Transitions fluides

✅ **Conversion**
- Boutons visibles et attractifs
- Plusieurs points d'entrée (Pricing, CTA)
- Urgence et clarté

✅ **Confiance**
- Badge "Paiement sécurisé"
- Page de succès rassurante
- Support visible

---

**🎨 Votre site est maintenant prêt à accepter des paiements professionnels !**
