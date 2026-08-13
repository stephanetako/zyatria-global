# 👉 TESTER LA VERSION DU 5 AOÛT MAINTENANT

## 🚀 LANCER LE SERVEUR

```bash
npm run dev
```

Puis ouvre : **http://localhost:4321**

---

## ✅ CHECKLIST DE VÉRIFICATION

### 1. Section "Nos Micro-Agents IA" 🤖

**Scroll jusqu'à la section "Nos Micro-Agents IA"**

Tu dois voir :
- ✅ Titre : "Nos Micro-Agents IA"
- ✅ Badge bleu : "Micro-Agents Digitaux"
- ✅ 6 cartes de micro-agents en grille (3 colonnes)

**Les 6 micro-agents** :
1. ✅ Qualification Automatique des Leads - **69 $/mois**
2. ✅ Réponses Clients 24/7 - **69 $/mois**
3. ✅ Gestion des Rendez-vous - **68 $/mois**
4. ✅ Suivi des Prospects - **180 $/mois**
5. ✅ Micro-Agent Immobilier - **208 $/mois**
6. ✅ Micro-Agent E-commerce - **195 $/mois**

**Chaque carte doit avoir** :
- ✅ Icône colorée (bleu/violet/cyan)
- ✅ Nom du micro-agent
- ✅ Description
- ✅ Liste de 4 fonctionnalités avec ✓
- ✅ Prix affiché
- ✅ Bouton "Acheter maintenant"
- ✅ Bouton "Demander une démo"

---

### 2. Section Pricing (APRÈS Micro-Agents) 💰

**Scroll jusqu'à la section "Tarification"**

Tu dois voir :
- ✅ Bannière orange : "🎁 Offre Pré-Lancement: -30% sur tous les plans"
- ✅ Toggle "Paiement Unique" / "Abonnement Mensuel"
- ✅ 3 cartes de plans

**Plan Starter** :
- ✅ Badge "-30% 🎁" en haut à droite
- ✅ Prix barré : ~~97 $~~
- ✅ Nouveau prix : **68 $/mois**
- ✅ Message : "💰 Économisez 29 $ avec l'offre pré-lancement"

**Plan Professional** (Recommandé) :
- ✅ Badge "Recommandé" en haut à gauche
- ✅ Badge "-30% 🎁" en haut à droite
- ✅ Prix barré : ~~297 $~~
- ✅ Nouveau prix : **208 $/mois**
- ✅ Message : "💰 Économisez 89 $ avec l'offre pré-lancement"
- ✅ Carte légèrement plus grande (scale-105)

**Plan Enterprise** (Premium) :
- ✅ Badge "Premium" en haut à gauche
- ✅ Badge "-30% 🎁" en haut à droite
- ✅ Prix barré : ~~997 $~~
- ✅ Nouveau prix : **698 $/mois**
- ✅ Message : "💰 Économisez 299 $ avec l'offre pré-lancement"

---

### 3. Ordre des sections ✅

**Vérifie que l'ordre est correct** :

1. ✅ Navigation (fixe en haut)
2. ✅ Hero Simple
3. ✅ Trust Stats Simple
4. ✅ Roadmap
5. ✅ Services Available
6. ✅ Solutions
7. ✅ **Micro-Agents** ← AVANT Pricing
8. ✅ How It Works
9. ✅ **Pricing** ← APRÈS Micro-Agents
10. ✅ Advanced Testimonials
11. ✅ FAQ
12. ✅ Contact Section
13. ✅ Footer
14. ✅ Chatbot (flottant en bas à droite)

---

### 4. Logo et Couleurs 🎨

**Logo** :
- ✅ Logo violet/orange dans la navigation
- ✅ Réseau d'agents IA avec nœuds connectés

**Couleurs** :
- ✅ Bleu (#6366F1)
- ✅ Violet (#8B5CF6)
- ✅ Cyan (#06B6D4)
- ✅ PAS de brun/terracotta (#C98769)

---

### 5. Interactions 🖱️

**Teste les boutons** :

**Micro-Agents** :
- ✅ Clique sur "Acheter maintenant" → Doit ouvrir Stripe
- ✅ Clique sur "Demander une démo" → Doit scroller vers Contact

**Pricing** :
- ✅ Toggle "Paiement Unique" / "Mensuel" → Prix changent
- ✅ Clique sur "Démarrer Plan Mensuel" → Doit ouvrir Stripe
- ✅ Clique sur "Contacter les Ventes" (Enterprise) → Doit scroller vers Contact

**Chatbot** :
- ✅ Icône flottante en bas à droite
- ✅ Clique pour ouvrir le chatbot
- ✅ Peut fermer le chatbot

---

## 🎯 POINTS CLÉS À VÉRIFIER

### Section Micro-Agents
```
✅ Présente AVANT la section Pricing
✅ 6 cartes visibles
✅ Prix corrects (69, 69, 68, 180, 208, 195)
✅ Boutons fonctionnels
```

### Section Pricing
```
✅ Présente APRÈS la section Micro-Agents
✅ Promotion -30% visible
✅ Prix barrés visibles (97, 297, 997)
✅ Nouveaux prix visibles (68, 208, 698)
✅ Messages "Économisez X $" présents
```

---

## 📸 CAPTURES D'ÉCRAN ATTENDUES

### Micro-Agents
```
┌─────────────────────────────────────────────────────┐
│         🤖 Nos Micro-Agents IA                      │
│                                                     │
│  ┌──────┐  ┌──────┐  ┌──────┐                     │
│  │ Lead │  │Client│  │ RDV  │                     │
│  │ 69$  │  │ 69$  │  │ 68$  │                     │
│  └──────┘  └──────┘  └──────┘                     │
│                                                     │
│  ┌──────┐  ┌──────┐  ┌──────┐                     │
│  │Suivi │  │Immo  │  │E-com │                     │
│  │180$  │  │208$  │  │195$  │                     │
│  └──────┘  └──────┘  └──────┘                     │
└─────────────────────────────────────────────────────┘
```

### Pricing
```
┌─────────────────────────────────────────────────────┐
│    🎁 Offre Pré-Lancement: -30% sur tous les plans  │
│                                                     │
│  ┌──────┐  ┌──────────┐  ┌──────┐                 │
│  │Start │  │ PRO -30% │  │Enter │                 │
│  │-30%  │  │Recommandé│  │-30%  │                 │
│  │      │  │          │  │      │                 │
│  │~~97$ │  │ ~~297$   │  │~~997$│                 │
│  │ 68$  │  │  208$    │  │ 698$ │                 │
│  │      │  │          │  │      │                 │
│  │💰-29$│  │ 💰-89$   │  │💰-299│                 │
│  └──────┘  └──────────┘  └──────┘                 │
└─────────────────────────────────────────────────────┘
```

---

## ✅ SI TOUT EST CORRECT

**Tu devrais voir** :
1. ✅ Section Micro-Agents avec 6 agents
2. ✅ Section Pricing avec promotion -30%
3. ✅ Prix corrects : 68 $ / 208 $ / 698 $
4. ✅ Logo violet/orange
5. ✅ Couleurs bleues/violettes

**C'est exactement la version du 5 août !** 🎉

---

## 🚨 SI QUELQUE CHOSE NE VA PAS

### Micro-Agents manquants ?
```bash
# Vérifie que le composant est importé
grep "MicroAgents" src/components/AppWrapper.tsx
```

### Prix incorrects ?
```bash
# Vérifie les prix dans la config
grep -A 5 "monthly:" src/config/stripe-links.ts
```

### Ordre incorrect ?
```bash
# Vérifie l'ordre dans AppWrapper
cat src/components/AppWrapper.tsx | grep -E "^        <"
```

---

## 🎉 TOUT EST PRÊT !

Une fois que tu as vérifié que tout fonctionne :

```bash
git add .
git commit -m "Version 5 août restaurée - Micro-Agents + Pricing -30%"
git push origin main
```

**La version du 5 août est maintenant active !** 🚀
