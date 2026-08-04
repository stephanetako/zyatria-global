/**
 * ZyatrIA Global - Backend Integration Script
 * Ce script permet d'appeler les API routes depuis n'importe quelle page HTML statique
 */

// Configuration de l'URL du backend
const BACKEND_URL = "https://5748f1fc.zyatria-global-cve.pages.dev";

/**
 * Fonction générique pour appeler le backend
 * @param {string} endpoint - L'endpoint API (ex: "api/demo", "api/ai/chat")
 * @param {object} data - Les données à envoyer
 * @param {string} method - La méthode HTTP (POST, GET, etc.)
 * @returns {Promise<object>} - La réponse JSON du serveur
 */
async function callBackend(endpoint, data = {}, method = "POST") {
  try {
    const options = {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    // Ajouter le body seulement pour POST/PUT/PATCH
    if (method !== "GET" && method !== "HEAD") {
      options.body = JSON.stringify(data);
    }

    const response = await fetch(`${BACKEND_URL}/${endpoint}`, options);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message || `Erreur ${response.status}: ${response.statusText}`
      );
    }

    return await response.json();
  } catch (error) {
    console.error("Erreur lors de l'appel API:", error);
    return {
      success: false,
      error: error.message || "Une erreur est survenue. Veuillez réessayer.",
    };
  }
}

/**
 * Demander une démonstration
 * @param {string} email - Email du prospect
 * @param {string} name - Nom du prospect
 * @param {object} additionalData - Données supplémentaires (company, phone, message)
 */
async function requestDemo(email, name, additionalData = {}) {
  const response = await callBackend("api/demo", {
    email,
    name,
    ...additionalData,
  });

  if (response.success) {
    return {
      success: true,
      message: response.message || "Demande envoyée avec succès !",
      data: response.data,
    };
  } else {
    return {
      success: false,
      error: response.error || "Erreur lors de l'envoi de la demande",
    };
  }
}

/**
 * Envoyer un message au chatbot IA
 * @param {string} message - Le message de l'utilisateur
 * @param {array} history - L'historique de la conversation (optionnel)
 */
async function sendChatMessage(message, history = []) {
  const response = await callBackend("api/ai/chat", {
    message,
    history,
  });

  if (response.success) {
    return {
      success: true,
      reply: response.reply,
      history: response.history,
    };
  } else {
    return {
      success: false,
      error: response.error || "Erreur lors de l'envoi du message",
    };
  }
}

/**
 * Envoyer un email via l'API
 * @param {object} emailData - Les données de l'email (to, subject, body, etc.)
 */
async function sendEmail(emailData) {
  const response = await callBackend("api/ai/email", emailData);

  if (response.success) {
    return {
      success: true,
      message: response.message || "Email envoyé avec succès !",
    };
  } else {
    return {
      success: false,
      error: response.error || "Erreur lors de l'envoi de l'email",
    };
  }
}

/**
 * Créer une session de paiement Stripe
 * @param {string} priceId - L'ID du prix Stripe
 * @param {string} successUrl - URL de redirection après succès
 * @param {string} cancelUrl - URL de redirection après annulation
 */
async function createCheckoutSession(priceId, successUrl, cancelUrl) {
  const response = await callBackend("api/stripe/create-checkout", {
    priceId,
    successUrl,
    cancelUrl,
  });

  if (response.url) {
    return {
      success: true,
      url: response.url,
    };
  } else {
    return {
      success: false,
      error: response.error || "Erreur lors de la création de la session",
    };
  }
}

/**
 * Récupérer les créneaux disponibles pour une réservation
 * @param {string} date - La date au format YYYY-MM-DD
 */
async function getAvailableSlots(date) {
  const response = await callBackend(
    `api/bookings/available-slots?date=${date}`,
    {},
    "GET"
  );

  if (response.success) {
    return {
      success: true,
      slots: response.slots,
    };
  } else {
    return {
      success: false,
      error: response.error || "Erreur lors de la récupération des créneaux",
    };
  }
}

/**
 * Créer une réservation
 * @param {object} bookingData - Les données de la réservation
 */
async function createBooking(bookingData) {
  const response = await callBackend("api/bookings/create", bookingData);

  if (response.success) {
    return {
      success: true,
      booking: response.booking,
      message: response.message || "Réservation créée avec succès !",
    };
  } else {
    return {
      success: false,
      error: response.error || "Erreur lors de la création de la réservation",
    };
  }
}

// ============================================
// GESTION DES ÉVÉNEMENTS DOM
// ============================================

document.addEventListener("DOMContentLoaded", function () {
  // Bouton de demande de démo
  const demoButton = document.getElementById("demo-button");
  if (demoButton) {
    demoButton.addEventListener("click", async function (e) {
      e.preventDefault();

      // Récupérer les données du formulaire
      const email = document.getElementById("demo-email")?.value;
      const name = document.getElementById("demo-name")?.value;
      const company = document.getElementById("demo-company")?.value;
      const phone = document.getElementById("demo-phone")?.value;
      const message = document.getElementById("demo-message")?.value;

      if (!email || !name) {
        alert("Veuillez remplir tous les champs obligatoires");
        return;
      }

      // Désactiver le bouton pendant l'envoi
      demoButton.disabled = true;
      demoButton.textContent = "Envoi en cours...";

      const result = await requestDemo(email, name, {
        company,
        phone,
        message,
      });

      if (result.success) {
        alert(result.message);
        // Réinitialiser le formulaire
        document.getElementById("demo-form")?.reset();
      } else {
        alert("Erreur: " + result.error);
      }

      // Réactiver le bouton
      demoButton.disabled = false;
      demoButton.textContent = "Demander une démo";
    });
  }

  // Bouton de chat IA
  const chatButton = document.getElementById("chat-send-button");
  if (chatButton) {
    chatButton.addEventListener("click", async function (e) {
      e.preventDefault();

      const messageInput = document.getElementById("chat-message");
      const message = messageInput?.value;

      if (!message) {
        return;
      }

      // Désactiver le bouton pendant l'envoi
      chatButton.disabled = true;

      const result = await sendChatMessage(message);

      if (result.success) {
        // Afficher la réponse dans l'interface
        const chatContainer = document.getElementById("chat-messages");
        if (chatContainer) {
          chatContainer.innerHTML += `
            <div class="user-message">${message}</div>
            <div class="bot-message">${result.reply}</div>
          `;
        }
        messageInput.value = "";
      } else {
        alert("Erreur: " + result.error);
      }

      // Réactiver le bouton
      chatButton.disabled = false;
    });
  }

  // Boutons de paiement Stripe
  const stripeButtons = document.querySelectorAll("[data-stripe-price-id]");
  stripeButtons.forEach((button) => {
    button.addEventListener("click", async function (e) {
      e.preventDefault();

      const priceId = button.getAttribute("data-stripe-price-id");
      const successUrl =
        button.getAttribute("data-success-url") ||
        `${window.location.origin}/success`;
      const cancelUrl =
        button.getAttribute("data-cancel-url") ||
        `${window.location.origin}/pricing`;

      button.disabled = true;
      button.textContent = "Redirection...";

      const result = await createCheckoutSession(priceId, successUrl, cancelUrl);

      if (result.success) {
        window.location.href = result.url;
      } else {
        alert("Erreur: " + result.error);
        button.disabled = false;
        button.textContent = "Souscrire";
      }
    });
  });
});

// Exporter les fonctions pour utilisation externe
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    callBackend,
    requestDemo,
    sendChatMessage,
    sendEmail,
    createCheckoutSession,
    getAvailableSlots,
    createBooking,
  };
}
