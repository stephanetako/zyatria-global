╔══════════════════════════════════════════════════════════════════════════════╗
║                    🚀 GUIDE D'INTÉGRATION RAPIDE                             ║
║                         ZyatrIA Global Backend                               ║
╚══════════════════════════════════════════════════════════════════════════════╝

📍 URL DU BACKEND
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
https://5748f1fc.zyatria-global-cve.pages.dev


🔧 INSTALLATION EN 2 ÉTAPES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Ajoutez ce script dans votre HTML :

   <script src="https://5748f1fc.zyatria-global-cve.pages.dev/backend-integration.js"></script>

2. Utilisez les fonctions disponibles :

   <script>
     async function demanderDemo() {
       const result = await requestDemo(
         "client@example.com",
         "Jean Dupont"
       );
       
       if (result.success) {
         alert("✅ " + result.message);
       }
     }
   </script>


📦 FONCTIONS DISPONIBLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ requestDemo(email, name, additionalData)
   → Demander une démonstration

✅ sendChatMessage(message, history)
   → Envoyer un message au chatbot IA

✅ sendEmail(emailData)
   → Envoyer un email

✅ createCheckoutSession(priceId, successUrl, cancelUrl)
   → Créer une session de paiement Stripe

✅ getAvailableSlots(date)
   → Récupérer les créneaux de réservation disponibles

✅ createBooking(bookingData)
   → Créer une réservation

✅ callBackend(endpoint, data, method)
   → Fonction générique pour appeler n'importe quel endpoint


🎯 EXEMPLE COMPLET - FORMULAIRE DE CONTACT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<!DOCTYPE html>
<html>
<head>
  <title>Contact - ZyatrIA</title>
</head>
<body>
  <form id="contact-form">
    <input type="text" id="name" placeholder="Nom" required>
    <input type="email" id="email" placeholder="Email" required>
    <button type="submit">Envoyer</button>
  </form>

  <script src="https://5748f1fc.zyatria-global-cve.pages.dev/backend-integration.js"></script>
  <script>
    document.getElementById('contact-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const result = await requestDemo(
        document.getElementById('email').value,
        document.getElementById('name').value
      );
      
      if (result.success) {
        alert('✅ Message envoyé !');
      } else {
        alert('❌ ' + result.error);
      }
    });
  </script>
</body>
</html>


💳 EXEMPLE - BOUTON DE PAIEMENT STRIPE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<!-- Méthode automatique (recommandée) -->
<button 
  data-stripe-price-id="price_1234567890"
  data-success-url="https://monsite.com/success"
  data-cancel-url="https://monsite.com/pricing"
>
  Souscrire - 99€/mois
</button>

<script src="https://5748f1fc.zyatria-global-cve.pages.dev/backend-integration.js"></script>
<!-- Le script détecte automatiquement les boutons Stripe -->


💬 EXEMPLE - CHATBOT IA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<div id="chat-messages"></div>
<input type="text" id="chat-input" placeholder="Posez votre question...">
<button id="chat-send">Envoyer</button>

<script src="https://5748f1fc.zyatria-global-cve.pages.dev/backend-integration.js"></script>
<script>
  let chatHistory = [];
  
  document.getElementById('chat-send').addEventListener('click', async () => {
    const message = document.getElementById('chat-input').value;
    
    const result = await sendChatMessage(message, chatHistory);
    
    if (result.success) {
      document.getElementById('chat-messages').innerHTML += 
        `<div>${result.reply}</div>`;
      chatHistory = result.history;
    }
  });
</script>


📅 EXEMPLE - SYSTÈME DE RÉSERVATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<input type="date" id="booking-date">
<select id="booking-time"></select>
<button onclick="reserverCreneau()">Réserver</button>

<script src="https://5748f1fc.zyatria-global-cve.pages.dev/backend-integration.js"></script>
<script>
  // Charger les créneaux disponibles
  document.getElementById('booking-date').addEventListener('change', async (e) => {
    const result = await getAvailableSlots(e.target.value);
    
    if (result.success) {
      const select = document.getElementById('booking-time');
      select.innerHTML = result.slots.map(slot => 
        `<option value="${slot}">${slot}</option>`
      ).join('');
    }
  });
  
  // Créer la réservation
  async function reserverCreneau() {
    const result = await createBooking({
      date: document.getElementById('booking-date').value,
      time: document.getElementById('booking-time').value,
      name: "Jean Dupont",
      email: "jean@example.com"
    });
    
    if (result.success) {
      alert('✅ Réservation confirmée !');
    }
  }
</script>


🔗 ENDPOINTS API DISPONIBLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

POST /api/demo
     → Demande de démonstration

POST /api/ai/chat
     → Chatbot IA (Mistral)

POST /api/ai/email
     → Envoi d'email

POST /api/stripe/create-checkout
     → Créer une session de paiement Stripe

GET  /api/bookings/available-slots?date=YYYY-MM-DD
     → Récupérer les créneaux disponibles

POST /api/bookings/create
     → Créer une réservation

POST /api/analytics
     → Enregistrer des événements analytics


🧪 TESTER L'INTÉGRATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Ouvrez cette page de test :
   https://5748f1fc.zyatria-global-cve.pages.dev/example-integration.html

2. Testez le formulaire de démonstration

3. Vérifiez la console du navigateur pour voir les requêtes


📚 DOCUMENTATION COMPLÈTE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Consultez INTEGRATION_GUIDE.md pour :
- Exemples détaillés
- Gestion des erreurs
- Intégration WordPress
- Configuration avancée
- Monitoring et logs


🔒 SÉCURITÉ
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ CORS activé pour tous les domaines
✅ Validation des données côté serveur
✅ Rate limiting intégré
✅ HTTPS obligatoire en production


🆘 SUPPORT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Email : support@zyatria.com
Documentation : INTEGRATION_GUIDE.md
Exemple : /example-integration.html


╔══════════════════════════════════════════════════════════════════════════════╗
║  🎉 Prêt à intégrer ! Copiez le script et commencez à utiliser les API      ║
╚══════════════════════════════════════════════════════════════════════════════╝
