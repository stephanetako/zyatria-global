# 🧪 Guide de Test Rapide

## ✅ Vérification Complète Effectuée

Toutes les erreurs ont été corrigées ! Voici comment tester :

---

## 🚀 Démarrage Rapide

### 1. Démarrer le serveur de développement
```bash
npm run dev
```

Le site sera accessible sur : **http://localhost:4321**

---

## 📋 Tests à Effectuer

### ✅ Test 1 : Page d'Accueil
1. Ouvrez http://localhost:4321
2. Vérifiez que la page se charge correctement
3. Vérifiez que le chatbot ✨ apparaît en bas à droite

**Résultat attendu** : Page complète avec navigation, hero, services, etc.

---

### ✅ Test 2 : Chatbot IA (MistralChatBot)

1. Cliquez sur l'icône ✨ en bas à droite
2. Ouvrez la console du navigateur (F12)
3. Tapez un message : "Bonjour, comment ça va ?"
4. Cliquez sur "Envoyer"

**Résultat attendu** :
- ✅ Message envoyé visible dans le chat
- ✅ Logs détaillés dans la console
- ✅ Réponse de l'assistant (ou message d'erreur si API non configurée)

**Logs attendus dans la console** :
```
[20:45:12] 📤 Envoi du message utilisateur
[20:45:12] 🌐 URL de l'API
[20:45:12] 📦 Corps de la requête
[20:45:13] 📡 Réponse reçue
[20:45:13] ✅ Données reçues
[20:45:13] ✅ Message ajouté avec succès
```

---

### ✅ Test 3 : Formulaire de Contact Simple

1. Allez sur http://localhost:4321/contact-simple
2. Remplissez le formulaire :
   - **Nom** : Jean Dupont
   - **Email** : jean@example.com
   - **Entreprise** : Ma Société
   - **Téléphone** : +33 6 12 34 56 78
   - **Message** : Je souhaite en savoir plus sur vos services
3. Cliquez sur "Envoyer le message"

**Résultat attendu** :
- ✅ Message "Message envoyé ! Nous vous répondrons dans les 24h."
- ✅ Email reçu sur votre compte Formspree
- ✅ Bouton "Envoyer un autre message" visible

---

### ✅ Test 4 : Formulaire de Qualification de Leads

1. Allez sur http://localhost:4321/lead-qualification
2. Remplissez le formulaire :
   - **Nom complet** : Marie Martin
   - **Email** : marie@example.com
   - **Entreprise** : Tech Corp
   - **Téléphone** : +33 6 98 76 54 32
   - **Secteur** : E-commerce
   - **Taille** : 11-50 employés
   - **Budget** : 10 000€ - 25 000€
   - **Délai** : 1-3 mois
   - **Besoins** : Automatisation des processus
3. Cliquez sur "Envoyer ma demande"

**Résultat attendu** :
- ✅ Message de succès avec score de qualification
- ✅ Email reçu sur votre compte Formspree
- ✅ Toutes les données structurées

---

### ✅ Test 5 : Formulaire Compact (Newsletter)

1. Allez sur la page d'accueil
2. Trouvez le formulaire compact (section newsletter)
3. Remplissez :
   - **Email** : test@example.com
   - **Message** : Je veux recevoir la newsletter
4. Cliquez sur "Envoyer"

**Résultat attendu** :
- ✅ Message "Message envoyé ! Nous vous répondrons rapidement."
- ✅ Email reçu sur votre compte Formspree

---

## 🔍 Vérification des Erreurs

### Console du Navigateur (F12)

**Aucune erreur ne devrait apparaître !**

Si vous voyez des erreurs :
1. Vérifiez que le serveur de développement est bien démarré
2. Vérifiez que toutes les dépendances sont installées : `npm install`
3. Vérifiez que le port 4321 n'est pas utilisé par un autre processus

---

## 🎨 Tests Visuels

### Navigation
- ✅ Menu responsive fonctionne
- ✅ Liens de navigation fonctionnent
- ✅ Logo visible

### Sections
- ✅ Hero avec titre et CTA
- ✅ Services avec cartes
- ✅ Pricing avec plans
- ✅ Témoignages
- ✅ FAQ
- ✅ Footer avec liens

### Responsive
- ✅ Mobile (< 640px)
- ✅ Tablet (640px - 1024px)
- ✅ Desktop (> 1024px)

---

## 🐛 Débogage

### Si le Chatbot ne fonctionne pas

1. Vérifiez que l'API Mistral est configurée dans `.env` :
```env
MISTRAL_API_KEY=votre_clé_api
```

2. Vérifiez que l'endpoint API existe :
```bash
ls src/pages/api/mistral-chat.ts
```

3. Vérifiez les logs dans la console (F12)

### Si les Formulaires ne fonctionnent pas

1. Vérifiez que l'ID Formspree est correct dans chaque formulaire :
```typescript
const [state, handleSubmit] = useForm('xeelvrdl');
```

2. Vérifiez que `@formspree/react` est installé :
```bash
npm list @formspree/react
```

3. Vérifiez que votre formulaire Formspree est activé sur https://formspree.io

---

## 📊 Résultats Attendus

### TypeScript Check
```bash
npx astro check
```
**Résultat** : ✅ 0 errors, 0 warnings

### Build Production
```bash
npm run build
```
**Résultat** : ✅ Build réussi

### Tests Manuels
- ✅ Page d'accueil charge
- ✅ Chatbot fonctionne
- ✅ Formulaires envoient
- ✅ Navigation fonctionne
- ✅ Responsive OK

---

## 🎯 Checklist Finale

Avant de déployer, vérifiez :

- [ ] Tous les tests ci-dessus passent
- [ ] Aucune erreur dans la console
- [ ] Build production réussi
- [ ] Formulaires Formspree testés
- [ ] Chatbot testé (si API configurée)
- [ ] Navigation testée
- [ ] Responsive testé
- [ ] SEO vérifié (meta tags, etc.)

---

## 🚀 Déploiement

Une fois tous les tests passés :

```bash
# Build production
npm run build

# Déployer sur Cloudflare
npx wrangler deploy
```

---

## 📝 Notes

### Formspree
- Endpoint : `https://formspree.io/f/xeelvrdl`
- Limite gratuite : 50 soumissions/mois
- Upgrade si besoin : https://formspree.io/plans

### Mistral AI
- API endpoint : `/api/mistral-chat`
- Nécessite une clé API Mistral
- Configuration dans `.env`

### Cloudflare
- Déploiement automatique
- CDN global
- SSL automatique

---

## ✅ Tout est Prêt !

Si tous les tests passent, votre site est **100% fonctionnel** et prêt à être déployé ! 🎉

**Bon test !** 🚀
