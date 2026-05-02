# 💳 GUIDE TEST STRIPE - COMPLET

## ✅ **CONFIGURATION ACTUELLE**

### **8 Produits Stripe Configurés**

| Produit | Type | Prix | Lien |
|---------|------|------|------|
| **Bot IA Starter** | One-time | 5,000 CAD | `9oc00` |
| **Bot IA Starter** | Monthly | 299 CAD/mois | `9oc01` |
| **Bot IA Professional** | One-time | 15,000 CAD | `9oc02` |
| **Bot IA Professional** | Monthly | 799 CAD/mois | `9oc03` |
| **Audit IA Complet** | One-time | 2,500 CAD | `9oc04` |
| **Bot IA Enterprise** | One-time | 45,000 CAD | `9oc05` |
| **Bot IA Enterprise** | Monthly | 2,499 CAD/mois | `9oc06` |
| **Consultation Stratégique** | One-time | 500 CAD | `9oc07` |

---

## 🧪 **TESTS À EFFECTUER**

### **1. Test Page Pricing**

#### **Accéder à la page:**
```
http://localhost:3000/pricing
```

#### **Vérifier:**
- [ ] Les 3 plans s'affichent (Starter, Business, Enterprise)
- [ ] Toggle "One-time / Monthly" fonctionne
- [ ] Prix corrects affichés
- [ ] Boutons "Commencer" visibles

#### **Cliquer sur chaque bouton:**

**STARTER - One-time (5,000 CAD):**
1. Cliquer sur "Commencer" en mode "One-time"
2. Vérifier redirection vers Stripe
3. Vérifier montant: **5,000.00 CAD**
4. **NE PAS PAYER** (juste vérifier)

**STARTER - Monthly (299 CAD/mois):**
1. Toggle vers "Monthly"
2. Cliquer sur "Commencer"
3. Vérifier montant: **299.00 CAD/month**

**BUSINESS - One-time (15,000 CAD):**
1. Mode "One-time"
2. Vérifier montant: **15,000.00 CAD**

**BUSINESS - Monthly (799 CAD/mois):**
1. Mode "Monthly"
2. Vérifier montant: **799.00 CAD/month**

**ENTERPRISE - One-time (45,000 CAD):**
1. Mode "One-time"
2. Vérifier montant: **45,000.00 CAD**

**ENTERPRISE - Monthly (2,499 CAD/mois):**
1. Mode "Monthly"
2. Vérifier montant: **2,499.00 CAD/month**

---

### **2. Test Produits Additionnels**

#### **Audit IA Complet - 2,500 CAD**

**Où le trouver:**
- Section "Services" sur la page d'accueil
- Ou lien direct dans Hero/CTA

**Test:**
1. Cliquer sur le lien
2. Vérifier redirection Stripe
3. Vérifier montant: **2,500.00 CAD**

#### **Consultation Stratégique - 500 CAD**

**Où le trouver:**
- Section "Contact" ou "Services"

**Test:**
1. Cliquer sur le lien
2. Vérifier montant: **500.00 CAD**

---

### **3. Vérification Stripe Checkout**

#### **Sur la page de paiement Stripe:**

**Vérifier:**
- [ ] Logo/Nom: "ZyatrIA Global" ou ton nom de compte
- [ ] Montant correct en CAD
- [ ] Description du produit claire
- [ ] Mode TEST visible (si en test mode)
- [ ] Formulaire de paiement s'affiche

**Informations à checker:**
```
✓ Nom du produit
✓ Prix en CAD
✓ Récurrence (one-time ou /month)
✓ Taxes (si applicables)
✓ Total
```

---

### **4. Test Simulation Paiement (Mode Test)**

#### **Si Stripe est en MODE TEST:**

**Utiliser carte de test:**
```
Numéro: 4242 4242 4242 4242
Date: 12/34 (n'importe quelle date future)
CVC: 123
ZIP: 12345
```

**Tester le flow complet:**
1. Cliquer sur un bouton
2. Remplir les infos de test
3. Valider
4. Vérifier redirection vers `/success`

**Page de succès doit afficher:**
- ✅ Message "Paiement Réussi !"
- ✅ Instructions "Prochaines étapes"
- ✅ Email de confirmation mentionné

---

## 🔍 **VÉRIFICATION CONSOLE STRIPE**

### **Dashboard Stripe:**
https://dashboard.stripe.com

#### **Vérifier:**
1. **Produits:**
   - Aller dans "Products"
   - Vérifier que les 8 produits existent
   - Vérifier les prix

2. **Payment Links:**
   - Aller dans "Payment Links"
   - Vérifier que tous les liens sont actifs
   - Copier les vrais liens de production

3. **Mode:**
   - Vérifier si en "Test Mode" ou "Live Mode"
   - Toggle visible en haut à droite

---

## 🚨 **EN CAS DE PROBLÈME**

### **Erreur: "Invalid payment link"**

**Solution:**
1. Vérifier que les liens sont corrects dans `src/config/stripe-links.ts`
2. Copier les nouveaux liens depuis Stripe Dashboard
3. Rebuild le site

### **Erreur: "Payment not processed"**

**Solution:**
- Vérifier que Stripe est en Test Mode
- Utiliser une carte de test valide
- Vérifier la connexion Stripe

### **Redirection incorrecte**

**Solution:**
1. Vérifier `successUrl` et `cancelUrl` dans le payment link
2. Doit pointer vers ton domaine

---

## 📊 **CHECKLIST FINALE**

### **Page Pricing:**
- [ ] Page s'affiche correctement
- [ ] Toggle One-time/Monthly fonctionne
- [ ] 3 plans visibles (Starter, Business, Enterprise)
- [ ] Prix corrects affichés

### **Liens Stripe:**
- [ ] Starter One-time → 5,000 CAD ✓
- [ ] Starter Monthly → 299 CAD/mois ✓
- [ ] Business One-time → 15,000 CAD ✓
- [ ] Business Monthly → 799 CAD/mois ✓
- [ ] Enterprise One-time → 45,000 CAD ✓
- [ ] Enterprise Monthly → 2,499 CAD/mois ✓
- [ ] Audit IA → 2,500 CAD ✓
- [ ] Consultation → 500 CAD ✓

### **Checkout Stripe:**
- [ ] Redirection fonctionne
- [ ] Montants corrects
- [ ] Formulaire de paiement s'affiche
- [ ] Mode TEST/LIVE clairement visible

### **Page Success:**
- [ ] Redirection après paiement réussi
- [ ] Message de confirmation affiché
- [ ] Instructions "next steps" visibles

---

## 🎯 **COMMANDES RAPIDES**

### **Vérifier les liens (script Node):**
```bash
node TEST_STRIPE_FINAL.md
```

### **Ouvrir Stripe Dashboard:**
```bash
open https://dashboard.stripe.com/test/products
```

### **Tester un lien direct:**
```bash
# Remplacer XXX par le code du produit
open https://buy.stripe.com/XXXXXXX
```

---

## 💡 **NOTES IMPORTANTES**

### **Mode Test vs Live**

**Mode Test:**
- Utiliser cartes de test
- Aucun vrai paiement
- Parfait pour tester

**Mode Live:**
- Vrais paiements
- Vraies cartes bancaires
- Activer UNIQUEMENT quand prêt

### **Sécurité**

⚠️ **JAMAIS exposer:**
- Secret API keys
- Webhook secrets
- Identifiants Stripe

✅ **OK d'exposer:**
- Payment Links (publics par nature)
- Publishable keys
- Product IDs

---

**Date:** $(date)
**Status:** Prêt pour tests
**Mode recommandé:** TEST
