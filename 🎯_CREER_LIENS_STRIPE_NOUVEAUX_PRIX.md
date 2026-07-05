# 🎯 Guide : Créer les Liens Stripe avec les Nouveaux Prix

## 📋 Checklist Complète

### 🟢 STARTER (2 liens à créer)

#### ✅ 1. Starter - Paiement Unique
```
Nom du produit : ZyatrIA Starter - Déploiement Complet
Prix : 997.00 CAD
Type : One-time payment
Description : 1 agent IA intelligent, automatisation de base, déploiement en 7 jours
```

**Lien à remplacer dans le code :**
```typescript
starter.oneTime: 'VOTRE_NOUVEAU_LIEN_ICI'
```

---

#### ✅ 2. Starter - Abonnement Mensuel
```
Nom du produit : ZyatrIA Starter - Abonnement Mensuel
Prix : 97.00 CAD
Type : Recurring
Intervalle : Monthly
Description : Support continu, mises à jour mensuelles, maintenance incluse
```

**Lien à remplacer dans le code :**
```typescript
starter.monthly: 'VOTRE_NOUVEAU_LIEN_ICI'
```

---

### 🔵 PROFESSIONAL (2 liens à créer)

#### ✅ 3. Professional - Paiement Unique
```
Nom du produit : ZyatrIA Professional - Déploiement Complet
Prix : 2,997.00 CAD
Type : One-time payment
Description : 3 agents IA + 5 micro-agents, automatisation avancée, déploiement en 10 jours
```

**Lien à remplacer dans le code :**
```typescript
professional.oneTime: 'VOTRE_NOUVEAU_LIEN_ICI'
```

---

#### ✅ 4. Professional - Abonnement Mensuel
```
Nom du produit : ZyatrIA Professional - Abonnement Mensuel
Prix : 297.00 CAD
Type : Recurring
Intervalle : Monthly
Description : Support prioritaire, optimisations continues, analytics avancés
```

**Lien à remplacer dans le code :**
```typescript
professional.monthly: 'VOTRE_NOUVEAU_LIEN_ICI'
```

---

### 🟣 ENTERPRISE (2 liens à créer)

#### ✅ 5. Enterprise - Paiement Unique
```
Nom du produit : ZyatrIA Enterprise - Déploiement Complet
Prix : 9,997.00 CAD
Type : One-time payment
Description : Solution complète sur mesure, agents illimités, déploiement en 15 jours
```

**Lien à remplacer dans le code :**
```typescript
enterprise.oneTime: 'VOTRE_NOUVEAU_LIEN_ICI'
```

---

#### ✅ 6. Enterprise - Abonnement Mensuel
```
Nom du produit : ZyatrIA Enterprise - Abonnement Mensuel
Prix : 997.00 CAD
Type : Recurring
Intervalle : Monthly
Description : Support dédié 24/7, SLA garanti, développement continu
```

**Lien à remplacer dans le code :**
```typescript
enterprise.monthly: 'VOTRE_NOUVEAU_LIEN_ICI'
```

---

### 🎯 SERVICES (2 liens à créer)

#### ✅ 7. Audit IA Complet
```
Nom du produit : Audit IA Complet
Prix : 497.00 CAD
Type : One-time payment
Description : Analyse complète de vos processus, recommandations personnalisées
```

**Lien à remplacer dans le code :**
```typescript
services.audit: 'VOTRE_NOUVEAU_LIEN_ICI'
```

---

#### ✅ 8. Consultation Stratégique
```
Nom du produit : Consultation Stratégique
Prix : 147.00 CAD
Type : One-time payment
Description : Session de consultation avec nos experts IA
```

**Lien à remplacer dans le code :**
```typescript
services.consultation: 'VOTRE_NOUVEAU_LIEN_ICI'
```

---

## 🚀 Instructions Étape par Étape

### Étape 1 : Accéder à Stripe
1. Aller sur : https://dashboard.stripe.com/test/payment-links
2. Se connecter à ton compte Stripe

### Étape 2 : Créer un Payment Link
1. Cliquer sur le bouton **"+ New"** en haut à droite
2. Remplir les informations du produit (voir ci-dessus)
3. Cliquer sur **"Create link"**
4. Copier le lien généré

### Étape 3 : Répéter pour Chaque Produit
- Créer les 8 liens au total
- Bien noter chaque lien avec son nom

### Étape 4 : Remplacer dans le Code
Ouvrir `src/config/stripe-links.ts` et remplacer les anciens liens.

---

## 📝 Template pour Prendre des Notes

Copie ce template et remplis-le au fur et à mesure :

```
✅ STARTER
1. Paiement unique (997 $) : _______________________________
2. Mensuel (97 $/mois) : _______________________________

✅ PROFESSIONAL
3. Paiement unique (2,997 $) : _______________________________
4. Mensuel (297 $/mois) : _______________________________

✅ ENTERPRISE
5. Paiement unique (9,997 $) : _______________________________
6. Mensuel (997 $/mois) : _______________________________

✅ SERVICES
7. Audit (497 $) : _______________________________
8. Consultation (147 $) : _______________________________
```

---

## 🎨 Comparaison Visuelle des Prix

### Avant → Après

```
STARTER
Mensuel : 299 $ → 97 $ (-68%) 🔥
Unique : 2,499 $ → 997 $ (-60%) 🔥

PROFESSIONAL
Mensuel : 799 $ → 297 $ (-63%) 🔥
Unique : 7,999 $ → 2,997 $ (-63%) 🔥

ENTERPRISE
Mensuel : 3,999 $ → 997 $ (-75%) 🔥
Unique : 45,000 $ → 9,997 $ (-78%) 🔥

SERVICES
Audit : 2,500 $ → 497 $ (-80%) 🔥
Consultation : 500 $ → 147 $ (-71%) 🔥
```

---

## ⚠️ Points Importants

### ✅ À Faire
- Utiliser **CAD** comme devise
- Bien cocher **"Recurring"** pour les abonnements mensuels
- Copier les descriptions exactes
- Tester chaque lien après création

### ❌ À Éviter
- Ne pas mélanger les prix
- Ne pas oublier de choisir "Monthly" pour les récurrents
- Ne pas utiliser USD au lieu de CAD

---

## 🧪 Test des Liens

Après avoir créé tous les liens :

1. **Tester en mode test** :
   - Utiliser la carte de test : `4242 4242 4242 4242`
   - Date : N'importe quelle date future
   - CVC : N'importe quel 3 chiffres

2. **Vérifier** :
   - Le montant est correct
   - La devise est CAD
   - La description s'affiche bien
   - Le paiement fonctionne

---

## 📞 Besoin d'Aide ?

Si tu rencontres un problème :
1. Vérifie que tu es en mode **Test** sur Stripe
2. Vérifie que la devise est bien **CAD**
3. Vérifie que le type est correct (One-time vs Recurring)

**Dis-moi où tu bloques et je t'aide ! 🚀**

---

## ✅ Une Fois Terminé

Quand tu auras créé tous les liens :
1. Remplace-les dans `src/config/stripe-links.ts`
2. Teste sur ton site
3. Active le mode **Live** sur Stripe
4. Crée les mêmes liens en mode Live
5. Remplace à nouveau dans le code

**Tu es prêt à vendre ! 🎉**
