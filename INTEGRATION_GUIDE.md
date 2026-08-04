# 🚀 Guide d'Intégration Backend - ZyatrIA Global

## 📋 Vue d'ensemble

Ce guide explique comment intégrer les API de ZyatrIA Global dans n'importe quelle page HTML statique, site WordPress, ou application externe.

---

## 🔗 URL du Backend

```javascript
const BACKEND_URL = "https://5748f1fc.zyatria-global-cve.pages.dev";
```

---

## 📦 Installation

### Option 1 : Script Direct (Recommandé)

Ajoutez simplement ce script dans votre HTML :

```html
<script src="https://5748f1fc.zyatria-global-cve.pages.dev/backend-integration.js"></script>
```

### Option 2 : Copier le Script

Téléchargez `backend-integration.js` et hébergez-le sur votre serveur :

```html
<script src="/js/backend-integration.js"></script>
```

---

## 🎯 API Disponibles

### 1. **Demande de Démo** (`/api/demo`)

#### Utilisation Simple

```javascript
const result = await requestDemo(
  "client@example.com",  // Email
  "Jean Dupont",         // Nom
  {
    company: "Entreprise XYZ",
    phone: "+33 6 12 34 56 78",
    message: "Je souhaite en savoir plus"
  }
);

if (result.success) {
  alert(result.message);
} else {
  alert("Erreur: " + result.error);
}
```

#### Exemple HTML Complet

```html
<form id="demo-form">
  <input type="text" id="demo-name" placeholder="Nom" required>
  <input type="email" id="demo-email" placeholder="Email" required>
  <input type="text" id="demo-company" placeholder="Entreprise">
  <button type="submit">Demander une démo</button>
</form>

<script src="/backend-integration.js"></script>
<script>
  document.getElementById('demo-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('demo-name').value;
    const email = document.getElementById('demo-email').value;
    const company = document.getElementById('demo-company').value;
    
    const result = await requestDemo(email, name, { company });
    
    if (result.success) {
      alert('✅ ' + result.message);
      document.getElementById('demo-form').reset();
    } else {
      alert('❌ ' + result.error);
    }
  });
</script>
```

---

### 2. **Chatbot IA** (`/api/ai/chat`)

#### Utilisation

```javascript
const result = await sendChatMessage(
  "Comment puis-je automatiser mon CRM ?",
  [] // Historique de conversation (optionnel)
);

if (result.success) {
  console.log("Réponse:", result.reply);
  console.log("Historique:", result.history);
}
```

#### Exemple d'Interface Chat

```html
<div id="chat-container">
  <div id="chat-messages"></div>
  <input type="text" id="chat-input" placeholder="Posez votre question...">
  <button id="chat-send">Envoyer</button>
</div>

<script src="/backend-integration.js"></script>
<script>
  let chatHistory = [];
  
  document.getElementById('chat-send').addEventListener('click', async () => {
    const input = document.getElementById('chat-input');
    const message = input.value;
    
    if (!message) return;
    
    // Afficher le message de l'utilisateur
    document.getElementById('chat-messages').innerHTML += 
      `<div class="user-message">${message}</div>`;
    
    // Envoyer au backend
    const result = await sendChatMessage(message, chatHistory);
    
    if (result.success) {
      // Afficher la réponse
      document.getElementById('chat-messages').innerHTML += 
        `<div class="bot-message">${result.reply}</div>`;
      
      // Mettre à jour l'historique
      chatHistory = result.history;
    }
    
    input.value = '';
  });
</script>
```

---

### 3. **Paiement Stripe** (`/api/stripe/create-checkout`)

#### Utilisation avec Boutons

```html
<!-- Bouton avec attributs data -->
<button 
  data-stripe-price-id="price_1234567890"
  data-success-url="https://monsite.com/success"
  data-cancel-url="https://monsite.com/pricing"
>
  Souscrire - 99€/mois
</button>

<script src="/backend-integration.js"></script>
<!-- Le script détecte automatiquement les boutons avec data-stripe-price-id -->
```

#### Utilisation Manuelle

```javascript
const result = await createCheckoutSession(
  "price_1234567890",                    // ID du prix Stripe
  "https://monsite.com/success",         // URL de succès
  "https://monsite.com/pricing"          // URL d'annulation
);

if (result.success) {
  window.location.href = result.url;  // Rediriger vers Stripe
}
```

---

### 4. **Réservations** (`/api/bookings/*`)

#### Récupérer les créneaux disponibles

```javascript
const result = await getAvailableSlots("2025-02-15");

if (result.success) {
  console.log("Créneaux disponibles:", result.slots);
  // Exemple: ["09:00", "10:00", "11:00", "14:00", "15:00"]
}
```

#### Créer une réservation

```javascript
const result = await createBooking({
  date: "2025-02-15",
  time: "10:00",
  name: "Jean Dupont",
  email: "jean@example.com",
  phone: "+33 6 12 34 56 78",
  service: "Consultation IA"
});

if (result.success) {
  alert("✅ Réservation confirmée !");
}
```

---

### 5. **Envoi d'Email** (`/api/ai/email`)

```javascript
const result = await sendEmail({
  to: "contact@zyatria.com",
  subject: "Nouvelle demande de contact",
  body: "Message du client...",
  from: "client@example.com"
});

if (result.success) {
  alert("Email envoyé !");
}
```

---

## 🔧 Fonction Générique

Pour appeler n'importe quel endpoint :

```javascript
const result = await callBackend(
  "api/custom-endpoint",  // Endpoint
  { key: "value" },       // Données
  "POST"                  // Méthode HTTP
);
```

---

## 🎨 Exemples Complets

### Page de Contact Simple

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Contact - ZyatrIA</title>
</head>
<body>
  <h1>Contactez-nous</h1>
  
  <form id="contact-form">
    <input type="text" id="name" placeholder="Nom" required>
    <input type="email" id="email" placeholder="Email" required>
    <textarea id="message" placeholder="Message" required></textarea>
    <button type="submit">Envoyer</button>
  </form>
  
  <div id="result"></div>

  <script src="https://5748f1fc.zyatria-global-cve.pages.dev/backend-integration.js"></script>
  <script>
    document.getElementById('contact-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const result = await requestDemo(
        document.getElementById('email').value,
        document.getElementById('name').value,
        { message: document.getElementById('message').value }
      );
      
      const resultDiv = document.getElementById('result');
      if (result.success) {
        resultDiv.innerHTML = '<p style="color: green;">✅ Message envoyé !</p>';
        document.getElementById('contact-form').reset();
      } else {
        resultDiv.innerHTML = '<p style="color: red;">❌ ' + result.error + '</p>';
      }
    });
  </script>
</body>
</html>
```

---

### Intégration WordPress

Ajoutez ce code dans un widget HTML ou dans votre thème :

```html
<!-- Dans le header.php ou via un plugin -->
<script src="https://5748f1fc.zyatria-global-cve.pages.dev/backend-integration.js"></script>

<!-- Dans votre page/article -->
<div id="zyatria-demo-form">
  <input type="text" id="wp-name" placeholder="Nom">
  <input type="email" id="wp-email" placeholder="Email">
  <button onclick="submitWordPressForm()">Demander une démo</button>
</div>

<script>
async function submitWordPressForm() {
  const name = document.getElementById('wp-name').value;
  const email = document.getElementById('wp-email').value;
  
  const result = await requestDemo(email, name);
  
  if (result.success) {
    alert('✅ Demande envoyée !');
  } else {
    alert('❌ Erreur: ' + result.error);
  }
}
</script>
```

---

## 🔒 Sécurité

### CORS
Le backend est configuré pour accepter les requêtes depuis n'importe quel domaine. En production, vous pouvez restreindre cela.

### Validation
Toutes les API valident les données côté serveur. Assurez-vous également de valider côté client.

### Rate Limiting
Les API ont un rate limiting intégré pour éviter les abus.

---

## 🧪 Test Local

Pour tester localement avant déploiement :

```bash
# Démarrer le serveur de développement
npm run dev

# Ou avec Wrangler
npx wrangler pages dev dist --port 8788
```

Puis utilisez :
```javascript
const BACKEND_URL = "http://localhost:8788";
```

---

## 📊 Monitoring

### Vérifier le statut d'une API

```javascript
// Test GET sur /api/demo
const response = await fetch('https://5748f1fc.zyatria-global-cve.pages.dev/api/demo');
const info = await response.json();
console.log(info);
// Retourne: { endpoint: '/api/demo', method: 'POST', ... }
```

---

## 🆘 Support

### Erreurs Courantes

1. **CORS Error** : Vérifiez que l'URL du backend est correcte
2. **404 Not Found** : L'endpoint n'existe pas ou le chemin est incorrect
3. **500 Server Error** : Erreur côté serveur, vérifiez les logs Cloudflare

### Logs Cloudflare

Consultez les logs en temps réel :
```bash
npx wrangler tail --project-name=zyatria-global
```

---

## 📚 Ressources

- **Documentation API complète** : `/api/demo` (GET pour voir la doc)
- **Exemple d'intégration** : `https://5748f1fc.zyatria-global-cve.pages.dev/example-integration.html`
- **Script source** : `https://5748f1fc.zyatria-global-cve.pages.dev/backend-integration.js`

---

## 🎯 Prochaines Étapes

1. ✅ Téléchargez `backend-integration.js`
2. ✅ Testez avec `example-integration.html`
3. ✅ Intégrez dans votre site
4. ✅ Personnalisez selon vos besoins

---

**Besoin d'aide ?** Contactez-nous à support@zyatria.com
