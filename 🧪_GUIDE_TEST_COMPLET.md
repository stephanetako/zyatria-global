# 🧪 GUIDE DE TEST COMPLET - VÉRIFIER QUE TOUT FONCTIONNE

## 🎯 OBJECTIF

Tester **chaque fonctionnalité** après le déploiement pour s'assurer que tout fonctionne parfaitement.

---

## 📋 CHECKLIST DE TEST

### ✅ Tests à effectuer :
- [ ] 1. Site accessible
- [ ] 2. Chatbot Mistral
- [ ] 3. Formulaires de contact
- [ ] 4. Liens de paiement Stripe
- [ ] 5. Micro-agents
- [ ] 6. Navigation
- [ ] 7. Responsive design
- [ ] 8. Performance

---

## 🌐 1. TEST DU SITE (2 minutes)

### A. Vérifier que le site est en ligne

```bash
# Ouvrir le site dans le navigateur
open https://zyatria-global.workers.dev

# Ou sur Windows
start https://zyatria-global.workers.dev
```

### ✅ Vérifications :
- [ ] La page d'accueil se charge
- [ ] Les images s'affichent
- [ ] Les couleurs sont correctes
- [ ] Pas d'erreur dans la console (F12)

### 🐛 Si ça ne fonctionne pas :
```bash
# Vérifier les logs
wrangler tail

# Vérifier le déploiement
wrangler deployments list
```

---

## 🤖 2. TEST DU CHATBOT MISTRAL (5 minutes)

### A. Test via l'interface utilisateur

#### Étape 1 : Ouvrir le chatbot
1. Allez sur https://zyatria-global.workers.dev
2. Cherchez l'icône du chatbot (généralement en bas à droite)
3. Cliquez pour ouvrir

#### Étape 2 : Tester les questions en français
```
Vous: Bonjour
Bot: 👋 Bonjour ! Je suis l'assistant virtuel de ZyatrIA Global...

Vous: Quels sont vos prix ?
Bot: 💰 **Nos Plans Tarifaires :**
     🚀 Starter - 297$/mois
     💼 Business - 697$/mois
     🏢 Enterprise - 1497$/mois

Vous: Comment ça fonctionne ?
Bot: 🔧 **Comment ça fonctionne ?**
     Nos agents IA utilisent l'intelligence artificielle...

Vous: Je veux une démo
Bot: 🎯 **Réservez votre Démo Gratuite !**
     Découvrez comment nos agents IA...
```

#### Étape 3 : Tester en anglais
```
You: Hello
Bot: 👋 Hello! I'm the virtual assistant of ZyatrIA Global...

You: What are your prices?
Bot: 💰 **Our Pricing Plans:**
     🚀 Starter - $297/month
     💼 Business - $697/month
     🏢 Enterprise - $1497/month
```

#### Étape 4 : Tester en espagnol
```
Tú: Hola
Bot: 👋 ¡Hola! Soy el asistente virtual de ZyatrIA Global...

Tú: ¿Cuáles son sus precios?
Bot: 💰 **Nuestros Planes de Precios:**
     🚀 Starter - $297/mes
     💼 Business - $697/mes
     🏢 Enterprise - $1497/mes
```

### ✅ Vérifications :
- [ ] Le chatbot s'ouvre correctement
- [ ] Les réponses arrivent rapidement (< 3 secondes)
- [ ] Les réponses sont pertinentes
- [ ] Le bot répond dans la langue de la question
- [ ] Les emojis s'affichent correctement
- [ ] Le formatage est correct (gras, listes, etc.)

---

### B. Test via l'API (pour les développeurs)

#### Test 1 : Question simple
```bash
curl https://zyatria-global.workers.dev/api/mistral-chat \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"message":"Bonjour"}'
```

**Réponse attendue :**
```json
{
  "response": "👋 Bonjour ! Je suis l'assistant virtuel de ZyatrIA Global...",
  "cached": false
}
```

#### Test 2 : Question sur les prix
```bash
curl https://zyatria-global.workers.dev/api/mistral-chat \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"message":"Quels sont vos prix ?"}'
```

**Réponse attendue :**
```json
{
  "response": "💰 **Nos Plans Tarifaires :**\n\n🚀 **Starter** - 297$/mois...",
  "cached": false
}
```

#### Test 3 : Vérifier le cache
```bash
# Poser la même question deux fois
curl https://zyatria-global.workers.dev/api/mistral-chat \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"message":"Bonjour"}'

# La deuxième fois devrait être plus rapide et retourner "cached": true
```

#### Test 4 : Tester le fallback (sans clé API)
```bash
# Si la clé API n'est pas configurée, le bot devrait quand même répondre
curl https://zyatria-global.workers.dev/api/mistral-chat \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"message":"Bonjour"}'
```

**Réponse attendue :**
```json
{
  "response": "👋 Bonjour ! Je suis l'assistant virtuel...",
  "fallback": true
}
```

### ✅ Vérifications API :
- [ ] L'API répond (status 200)
- [ ] Les réponses sont en JSON
- [ ] Le cache fonctionne (cached: true la 2ème fois)
- [ ] Le fallback fonctionne si pas de clé API

---

### C. Test des statistiques du cache

```bash
curl https://zyatria-global.workers.dev/api/cache-stats
```

**Réponse attendue :**
```json
{
  "cache": {
    "size": 5,
    "maxSize": 100,
    "hits": 12,
    "misses": 8,
    "hitRate": 60.0
  },
  "rateLimiter": {
    "requestsLastMinute": 3,
    "requestsLastHour": 20,
    "successRate": 100.0
  }
}
```

### ✅ Vérifications :
- [ ] Les statistiques s'affichent
- [ ] Le hitRate augmente avec les questions répétées
- [ ] Le successRate est proche de 100%

---

## 📧 3. TEST DES FORMULAIRES (3 minutes)

### A. Formulaire de contact simple

#### Étape 1 : Accéder au formulaire
```
https://zyatria-global.workers.dev/contact-simple
```

#### Étape 2 : Remplir le formulaire
```
Nom: Test Utilisateur
Email: test@example.com
Message: Ceci est un test du formulaire de contact
```

#### Étape 3 : Envoyer
- Cliquez sur "Envoyer"
- Attendez la confirmation

### ✅ Vérifications :
- [ ] Le formulaire s'affiche correctement
- [ ] La validation fonctionne (champs requis)
- [ ] L'envoi fonctionne (message de succès)
- [ ] Email reçu à ZyatrIA.contact@gmail.com
- [ ] Les données sont correctes dans l'email

---

### B. Formulaire de qualification de leads

#### Étape 1 : Accéder au formulaire
```
https://zyatria-global.workers.dev/lead-qualification
```

#### Étape 2 : Remplir le formulaire multi-étapes
```
Étape 1 - Informations de base :
  Nom: Test Lead
  Email: lead@example.com
  Entreprise: Test Company
  Téléphone: +1 555 123 4567

Étape 2 - Besoins :
  Secteur: E-commerce
  Taille: 10-50 employés
  Budget: 500-1000$/mois

Étape 3 - Objectifs :
  Objectif principal: Automatisation du support client
  Délai: 1-3 mois
```

#### Étape 3 : Envoyer
- Complétez toutes les étapes
- Vérifiez le score de qualification
- Envoyez le formulaire

### ✅ Vérifications :
- [ ] Navigation entre les étapes fonctionne
- [ ] Validation à chaque étape
- [ ] Score de qualification calculé
- [ ] Email reçu avec toutes les informations
- [ ] Données structurées correctement

---

### C. Test de validation

#### Test 1 : Champs vides
1. Essayez d'envoyer le formulaire vide
2. Vérifiez que les messages d'erreur s'affichent

#### Test 2 : Email invalide
1. Entrez "test" dans le champ email
2. Vérifiez que l'erreur s'affiche

#### Test 3 : Protection anti-spam
1. Essayez d'envoyer 5 formulaires rapidement
2. Vérifiez que Formspree bloque après un certain nombre

### ✅ Vérifications :
- [ ] Validation côté client fonctionne
- [ ] Messages d'erreur clairs
- [ ] Protection anti-spam active

---

## 💳 4. TEST DES PAIEMENTS STRIPE (5 minutes)

### A. Test des liens de paiement

#### Étape 1 : Accéder à la page de pricing
```
https://zyatria-global.workers.dev/pricing
```

#### Étape 2 : Tester chaque plan

##### Plan Starter (297$/mois)
1. Cliquez sur "Commencer" sous le plan Starter
2. Vérifiez la redirection vers Stripe
3. **NE PAS PAYER** (mode test)
4. Vérifiez les informations :
   - Montant : 297 CAD
   - Description : Plan Starter
   - Taxes automatiques activées

##### Plan Business (697$/mois)
1. Cliquez sur "Commencer" sous le plan Business
2. Vérifiez la redirection vers Stripe
3. Vérifiez les informations :
   - Montant : 697 CAD
   - Description : Plan Business

##### Plan Enterprise (1497$/mois)
1. Cliquez sur "Commencer" sous le plan Enterprise
2. Vérifiez la redirection vers Stripe
3. Vérifiez les informations :
   - Montant : 1497 CAD
   - Description : Plan Enterprise

### ✅ Vérifications :
- [ ] Tous les boutons fonctionnent
- [ ] Redirection vers Stripe correcte
- [ ] Montants corrects
- [ ] Taxes automatiques activées
- [ ] Mode test (pas de vrai paiement)

---

### B. Test du processus de paiement complet (mode test)

#### Étape 1 : Choisir un plan
1. Cliquez sur "Commencer" (n'importe quel plan)

#### Étape 2 : Sur la page Stripe
1. Entrez les informations de test :
   ```
   Email: test@example.com
   Numéro de carte: 4242 4242 4242 4242
   Date d'expiration: 12/34
   CVC: 123
   Code postal: 12345
   ```

2. Cliquez sur "Payer"

#### Étape 3 : Vérifier la redirection
- Vous devriez être redirigé vers `/success`
- Un message de confirmation devrait s'afficher

### ✅ Vérifications :
- [ ] Formulaire Stripe s'affiche
- [ ] Carte de test acceptée
- [ ] Paiement traité (mode test)
- [ ] Redirection vers /success
- [ ] Message de confirmation affiché

---

### C. Test des webhooks Stripe

```bash
# Vérifier que le webhook est configuré
curl https://zyatria-global.workers.dev/api/stripe/webhook \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{}'
```

**Note :** Le webhook devrait retourner une erreur (normal sans signature Stripe)

### ✅ Vérifications :
- [ ] L'endpoint webhook existe
- [ ] Répond aux requêtes POST

---

### D. Test des services professionnels

#### Étape 1 : Accéder à la page de pricing
```
https://zyatria-global.workers.dev/pricing
```

#### Étape 2 : Tester les services

##### Audit IA (497$)
1. Cliquez sur "Réserver" sous Audit IA
2. Vérifiez la redirection vers Stripe
3. Vérifiez : Montant 497 CAD, paiement unique

##### Consultation Stratégique (997$)
1. Cliquez sur "Réserver" sous Consultation
2. Vérifiez : Montant 997 CAD, paiement unique

##### Formation Équipe (1497$)
1. Cliquez sur "Réserver" sous Formation
2. Vérifiez : Montant 1497 CAD, paiement unique

### ✅ Vérifications :
- [ ] Tous les liens fonctionnent
- [ ] Montants corrects
- [ ] Type de paiement correct (unique vs abonnement)

---

## 🎯 5. TEST DES MICRO-AGENTS (3 minutes)

### A. Agent Support Client 24/7

#### Test 1 : Questions fréquentes
```
Vous: Quels sont vos services ?
Agent: 🤖 **Nos Services :**
       1. Agents IA Intelligents
       2. Micro-agents Spécialisés
       3. Intégrations CRM
       4. Formation & Support

Vous: Comment ça fonctionne ?
Agent: 🔧 **Comment ça fonctionne ?**
       [Explication détaillée]

Vous: Je veux une démo
Agent: 🎯 **Réservez votre Démo Gratuite !**
       [Instructions pour réserver]
```

### ✅ Vérifications :
- [ ] Réponses rapides (< 3 secondes)
- [ ] Réponses pertinentes
- [ ] Formatage correct
- [ ] Liens fonctionnels

---

### B. Agent Qualification de Leads

#### Test 1 : Formulaire complet
1. Remplissez le formulaire de qualification
2. Vérifiez le score calculé
3. Envoyez le formulaire

#### Test 2 : Vérifier l'email reçu
```
Sujet: Nouveau lead qualifié - [Score]
Contenu:
  - Informations de contact
  - Besoins identifiés
  - Score de qualification
  - Recommandations
```

### ✅ Vérifications :
- [ ] Score calculé correctement
- [ ] Email reçu avec toutes les infos
- [ ] Recommandations pertinentes

---

### C. Agent Multilingue

#### Test 1 : Français
```
Vous: Bonjour, je cherche des informations
Agent: [Répond en français]
```

#### Test 2 : Anglais
```
You: Hello, I need information
Agent: [Responds in English]
```

#### Test 3 : Espagnol
```
Tú: Hola, necesito información
Agent: [Responde en español]
```

#### Test 4 : Portugais
```
Você: Olá, preciso de informações
Agent: [Responde em português]
```

### ✅ Vérifications :
- [ ] Détection automatique de la langue
- [ ] Réponses dans la bonne langue
- [ ] Qualité des traductions

---

## 🧭 6. TEST DE LA NAVIGATION (2 minutes)

### A. Menu principal

#### Tester chaque lien :
```
https://zyatria-global.workers.dev/
https://zyatria-global.workers.dev/services
https://zyatria-global.workers.dev/pricing
https://zyatria-global.workers.dev/about
https://zyatria-global.workers.dev/contact-simple
https://zyatria-global.workers.dev/micro-agents
https://zyatria-global.workers.dev/technology
https://zyatria-global.workers.dev/knowledge-base
```

### ✅ Vérifications :
- [ ] Tous les liens fonctionnent
- [ ] Pas d'erreur 404
- [ ] Navigation fluide
- [ ] Retour à l'accueil fonctionne

---

### B. Footer

#### Tester les liens du footer :
- [ ] Liens vers les réseaux sociaux
- [ ] Lien vers les conditions d'utilisation
- [ ] Lien vers la politique de confidentialité
- [ ] Email de contact cliquable

---

## 📱 7. TEST RESPONSIVE (3 minutes)

### A. Test sur mobile

#### Méthode 1 : Simulateur (Chrome DevTools)
1. Ouvrez le site dans Chrome
2. Appuyez sur F12
3. Cliquez sur l'icône mobile (Ctrl+Shift+M)
4. Testez différentes tailles :
   - iPhone SE (375px)
   - iPhone 12 Pro (390px)
   - iPad (768px)
   - iPad Pro (1024px)

### ✅ Vérifications :
- [ ] Le menu devient un hamburger
- [ ] Les textes sont lisibles
- [ ] Les boutons sont cliquables
- [ ] Les images s'adaptent
- [ ] Le chatbot est accessible
- [ ] Les formulaires sont utilisables

---

### B. Test sur tablette

#### Tailles à tester :
- iPad (768px)
- iPad Pro (1024px)

### ✅ Vérifications :
- [ ] Layout adapté
- [ ] Navigation fluide
- [ ] Chatbot fonctionnel

---

### C. Test sur desktop

#### Tailles à tester :
- 1280px (laptop)
- 1920px (desktop)
- 2560px (large desktop)

### ✅ Vérifications :
- [ ] Contenu centré
- [ ] Pas de débordement
- [ ] Images nettes

---

## ⚡ 8. TEST DE PERFORMANCE (2 minutes)

### A. Vitesse de chargement

#### Méthode 1 : Chrome DevTools
1. Ouvrez le site
2. F12 → Network
3. Rechargez la page (Ctrl+R)
4. Vérifiez :
   - Temps de chargement total
   - Taille totale des ressources
   - Nombre de requêtes

### ✅ Objectifs :
- [ ] Temps de chargement < 3 secondes
- [ ] Taille totale < 2 MB
- [ ] Nombre de requêtes < 50

---

#### Méthode 2 : Google PageSpeed Insights
1. Allez sur https://pagespeed.web.dev/
2. Entrez : https://zyatria-global.workers.dev
3. Cliquez sur "Analyser"

### ✅ Objectifs :
- [ ] Score mobile > 80
- [ ] Score desktop > 90
- [ ] Pas d'erreurs critiques

---

### B. Test de cache

#### Test 1 : Première visite
1. Ouvrez le site en navigation privée
2. Notez le temps de chargement

#### Test 2 : Deuxième visite
1. Rechargez la page
2. Le temps devrait être plus court (cache)

### ✅ Vérifications :
- [ ] Cache fonctionne
- [ ] Temps de chargement réduit

---

## 🐛 9. TEST DES ERREURS (2 minutes)

### A. Pages inexistantes

```
https://zyatria-global.workers.dev/page-qui-nexiste-pas
```

### ✅ Vérifications :
- [ ] Page 404 s'affiche
- [ ] Message d'erreur clair
- [ ] Lien de retour à l'accueil

---

### B. Erreurs de formulaire

#### Test 1 : Email invalide
1. Entrez "test" dans le champ email
2. Essayez d'envoyer

### ✅ Vérifications :
- [ ] Message d'erreur s'affiche
- [ ] Formulaire ne s'envoie pas
- [ ] Champ mis en évidence

---

### C. Erreurs de paiement

#### Test 1 : Carte refusée
1. Utilisez la carte de test : 4000 0000 0000 0002
2. Essayez de payer

### ✅ Vérifications :
- [ ] Message d'erreur Stripe
- [ ] Pas de paiement effectué
- [ ] Possibilité de réessayer

---

## 📊 10. VÉRIFICATION DES LOGS (2 minutes)

### A. Logs Cloudflare

```bash
# Voir les logs en temps réel
wrangler tail

# Tester une requête
curl https://zyatria-global.workers.dev/

# Vérifier les logs
```

### ✅ Vérifications :
- [ ] Logs s'affichent
- [ ] Pas d'erreurs critiques
- [ ] Requêtes traitées correctement

---

### B. Statistiques du cache

```bash
curl https://zyatria-global.workers.dev/api/cache-stats
```

### ✅ Vérifications :
- [ ] Hit rate > 50%
- [ ] Success rate > 95%
- [ ] Pas de fuites mémoire

---

## 📋 CHECKLIST FINALE

### ✅ Fonctionnalités principales
- [ ] Site accessible et rapide
- [ ] Chatbot répond correctement
- [ ] Formulaires fonctionnent
- [ ] Paiements Stripe opérationnels
- [ ] Navigation fluide
- [ ] Responsive sur tous les appareils

### ✅ Sécurité
- [ ] HTTPS activé
- [ ] Clés API sécurisées
- [ ] Validation des formulaires
- [ ] Protection anti-spam

### ✅ Performance
- [ ] Temps de chargement < 3s
- [ ] Cache fonctionne
- [ ] Images optimisées
- [ ] Score PageSpeed > 80

### ✅ Expérience utilisateur
- [ ] Design cohérent
- [ ] Messages clairs
- [ ] Pas d'erreurs visibles
- [ ] Accessibilité correcte

---

## 🎉 RÉSULTAT ATTENDU

Si tous les tests passent, vous avez :
- ✅ Un site **100% fonctionnel**
- ✅ Un chatbot **intelligent et fiable**
- ✅ Des formulaires **opérationnels**
- ✅ Des paiements **sécurisés**
- ✅ Une expérience **optimale**

---

## 🚀 PROCHAINES ÉTAPES

1. **Documenter les résultats** des tests
2. **Corriger** les éventuels problèmes
3. **Optimiser** les performances
4. **Activer** le mode production Stripe
5. **Configurer** un domaine personnalisé
6. **Partager** avec vos clients !

---

## 📞 BESOIN D'AIDE ?

Si un test échoue :
1. Vérifiez les logs : `wrangler tail`
2. Vérifiez les secrets : `wrangler secret list`
3. Consultez la documentation
4. Testez en local : `npm run dev`

---

**Bon testing ! 🧪**
