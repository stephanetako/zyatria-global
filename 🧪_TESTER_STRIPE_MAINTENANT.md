# 🧪 TESTER L'INTÉGRATION STRIPE MAINTENANT

## ✅ TOUS LES LIENS SONT VALIDES !

**14/14 produits Stripe configurés et prêts** 🎉

---

## 🚀 ÉTAPE 1: DÉMARRER LE SERVEUR

```bash
npm run dev
```

Attendez que le serveur démarre, puis ouvrez:
```
http://localhost:4321
```

---

## 🧪 ÉTAPE 2: TESTER LES PLANS PRINCIPAUX

### 1. Aller sur la page Pricing
```
http://localhost:4321/pricing
```

### 2. Tester chaque bouton

#### 🟢 STARTER (997 CAD / 97 CAD/mois)
- [ ] Cliquer sur "Commencer" (Paiement unique)
  - ✅ Doit ouvrir: `https://buy.stripe.com/test_5kQ9ALeT4eyB3FmbL93VC0w`
  - ✅ Prix affiché: 997 CAD
  
- [ ] Basculer sur "Mensuel" puis cliquer sur "Commencer"
  - ✅ Doit ouvrir: `https://buy.stripe.com/test_28E14fcKWaildfW8yX3VC0x`
  - ✅ Prix affiché: 97 CAD/mois

#### 🔵 PROFESSIONAL (2997 CAD / 297 CAD/mois)
- [ ] Cliquer sur "Commencer" (Paiement unique)
  - ✅ Doit ouvrir: `https://buy.stripe.com/test_eVqbITfX84Y15Nu16v3VC0s`
  - ✅ Prix affiché: 2997 CAD
  
- [ ] Basculer sur "Mensuel" puis cliquer sur "Commencer"
  - ✅ Doit ouvrir: `https://buy.stripe.com/test_5kQ5kv4eq1LP5Nug1p3VC0t`
  - ✅ Prix affiché: 297 CAD/mois

#### 🟣 ENTERPRISE (9997 CAD / 997 CAD/mois)
- [ ] Cliquer sur "Commencer" (Paiement unique)
  - ✅ Doit ouvrir: `https://buy.stripe.com/test_fZu7sD3am4Y1gs8aH53VC0u`
  - ✅ Prix affiché: 9997 CAD
  
- [ ] Basculer sur "Mensuel" puis cliquer sur "Commencer"
  - ✅ Doit ouvrir: `https://buy.stripe.com/test_cNi28jaCOeyB5Nu4iH3VC0v`
  - ✅ Prix affiché: 997 CAD/mois

---

## 🤖 ÉTAPE 3: TESTER LES MICRO-AGENTS

### 1. Aller sur la page Micro-Agents
```
http://localhost:4321/micro-agents
```

### 2. Tester chaque bouton "Acheter maintenant"

- [ ] **Lead Qualification** (197 CAD/mois)
  - ✅ Doit ouvrir: `https://buy.stripe.com/test_cNi00b8uGgGJ5NuaH53VC0i`

- [ ] **Customer Support** (147 CAD/mois)
  - ✅ Doit ouvrir: `https://buy.stripe.com/test_9B6aEPeT4eyBb7OeXl3VC0j`

- [ ] **Appointments** (127 CAD/mois)
  - ✅ Doit ouvrir: `https://buy.stripe.com/test_bJe9AL6mydux8ZGcPd3VC0k`

- [ ] **Prospect Followup** (177 CAD/mois)
  - ✅ Doit ouvrir: `https://buy.stripe.com/test_4gMfZ93am2PT5Nu4iH3VC0l`

- [ ] **Real Estate** (247 CAD/mois)
  - ✅ Doit ouvrir: `https://buy.stripe.com/test_bJebIT5iu2PTgs8cPd3VC0m`

- [ ] **E-commerce** (197 CAD/mois)
  - ✅ Doit ouvrir: `https://buy.stripe.com/test_bJe8wHeT42PTfo4dTh3VC0n`

---

## 🎯 ÉTAPE 4: TESTER LES SERVICES ADDITIONNELS

### Retourner sur la page Pricing
```
http://localhost:4321/pricing
```

### Scroller vers le bas pour voir les services

- [ ] **Audit IA Complet** (497 CAD)
  - ✅ Doit ouvrir: `https://buy.stripe.com/test_5kQ00b6iy0HLb7O9Bd3VC0p`

- [ ] **Consultation Stratégique** (147 CAD)
  - ✅ Doit ouvrir: `https://buy.stripe.com/test_6oE5kv8uG1LP3Fm7tT3VC0o`

---

## ✅ CHECKLIST DE VÉRIFICATION

Pour chaque lien Stripe testé, vérifier:

### 1. Le lien s'ouvre correctement
- [ ] Nouvelle fenêtre/onglet s'ouvre
- [ ] Page Stripe se charge

### 2. Les informations sont correctes
- [ ] Nom du produit correspond
- [ ] Prix affiché correspond
- [ ] Description correspond
- [ ] Devise est CAD

### 3. Le formulaire de paiement fonctionne
- [ ] Champs de carte bancaire visibles
- [ ] Peut entrer des informations de test
- [ ] Bouton "Payer" est actif

---

## ���� CARTES DE TEST STRIPE

Pour tester les paiements en mode test:

### Carte qui fonctionne
```
Numéro: 4242 4242 4242 4242
Date: N'importe quelle date future (ex: 12/25)
CVC: N'importe quel 3 chiffres (ex: 123)
Code postal: N'importe quel code (ex: 12345)
```

### Carte qui échoue
```
Numéro: 4000 0000 0000 0002
Date: N'importe quelle date future
CVC: N'importe quel 3 chiffres
```

---

## 📊 RÉSULTATS ATTENDUS

### ✅ Tous les tests passent si:
1. Tous les liens s'ouvrent dans Stripe
2. Les prix correspondent
3. Les descriptions sont correctes
4. Les paiements de test fonctionnent

### ❌ Si un test échoue:
1. Vérifier le lien dans `src/config/stripe-links.ts`
2. Vérifier que le produit existe dans Stripe
3. Vérifier que le lien n'a pas expiré

---

## 🚀 APRÈS LES TESTS

### Si tout fonctionne:
```bash
# Commiter les changements
git add .
git commit -m "✅ Stripe integration tested and working"
git push origin master
```

### Puis déployer sur Cloudflare:
1. Les changements seront automatiquement déployés
2. Tester à nouveau en production
3. Vérifier que les webhooks fonctionnent (si configurés)

---

## 📝 NOTES IMPORTANTES

### Mode Test
- Vous êtes actuellement en **mode TEST**
- Les paiements ne sont pas réels
- Utilisez les cartes de test Stripe

### Passer en Production
Quand vous êtes prêt:
1. Créer les mêmes produits en mode LIVE dans Stripe
2. Remplacer les liens `test_` par les liens `live_`
3. Mettre à jour `STRIPE_PUBLISHABLE_KEY` et `STRIPE_SECRET_KEY`
4. Tester avec de vraies cartes (petits montants)

---

## 🎉 FÉLICITATIONS !

Si tous les tests passent, votre intégration Stripe est **100% fonctionnelle** !

Vous êtes prêt à accepter des paiements ! 💰

---

## 🆘 BESOIN D'AIDE ?

Si un test échoue:
1. Vérifier les logs de la console (F12)
2. Vérifier que le serveur est démarré
3. Vérifier les liens dans `stripe-links.ts`
4. Vérifier que les produits existent dans Stripe Dashboard

---

## 📞 SUPPORT

- Dashboard Stripe: https://dashboard.stripe.com/test/payments
- Documentation: https://stripe.com/docs
- Logs: Ouvrir la console (F12) pour voir les erreurs
