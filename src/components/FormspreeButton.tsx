import React, { useEffect } from 'react';

interface FormspreeButtonProps {
  lang?: string;
}

export default function FormspreeButton({ 
  lang = 'en'
}: FormspreeButtonProps) {
  
  useEffect(() => {
    // Check if script is already loaded
    const existingScript = document.querySelector('script[src="https://formspree.io/js/formbutton-v1.min.js"]');
    
    if (existingScript) {
      // Script already exists, just initialize
      initializeFormbutton();
      return;
    }

    // Load Formspree Formbutton script
    const script = document.createElement('script');
    script.src = 'https://formspree.io/js/formbutton-v1.min.js';
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      initializeFormbutton();
    };

    function initializeFormbutton() {
      // Wait a bit for formbutton to be available
      setTimeout(() => {
        if (window.formbutton) {
          // Translations
          const translations: Record<string, any> = {
            en: {
              title: "Quick Contact 💬",
              nameLabel: "Name:",
              namePlaceholder: "Your name",
              emailLabel: "Email:",
              emailPlaceholder: "your@email.com",
              messageLabel: "Message:",
              messagePlaceholder: "How can we help you?",
              submitText: "Send"
            },
            fr: {
              title: "Contact Rapide 💬",
              nameLabel: "Nom :",
              namePlaceholder: "Votre nom",
              emailLabel: "Email :",
              emailPlaceholder: "votre@email.com",
              messageLabel: "Message :",
              messagePlaceholder: "Comment pouvons-nous vous aider ?",
              submitText: "Envoyer"
            },
            es: {
              title: "Contacto Rápido 💬",
              nameLabel: "Nombre:",
              namePlaceholder: "Su nombre",
              emailLabel: "Email:",
              emailPlaceholder: "su@email.com",
              messageLabel: "Mensaje:",
              messagePlaceholder: "¿Cómo podemos ayudarle?",
              submitText: "Enviar"
            },
            pt: {
              title: "Contato Rápido 💬",
              nameLabel: "Nome:",
              namePlaceholder: "Seu nome",
              emailLabel: "Email:",
              emailPlaceholder: "seu@email.com",
              messageLabel: "Mensagem:",
              messagePlaceholder: "Como podemos ajudá-lo?",
              submitText: "Enviar"
            }
          };

          const t = translations[lang] || translations.en;

          window.formbutton("create", {
            action: "https://formspree.io/f/xeelvrdl",
            title: t.title,
            fields: [
              { 
                type: "text",
                label: t.nameLabel,
                name: "name",
                required: true,
                placeholder: t.namePlaceholder
              },
              { 
                type: "email", 
                label: t.emailLabel, 
                name: "email",
                required: true,
                placeholder: t.emailPlaceholder
              },
              {
                type: "textarea",
                label: t.messageLabel,
                name: "message",
                required: true,
                placeholder: t.messagePlaceholder,
              },
              { 
                type: "submit",
                value: t.submitText
              }      
            ],
            styles: {
              title: {
                backgroundColor: "#C98769",
                color: "#FFFFFF"
              },
              button: {
                backgroundColor: "#C98769",
                color: "#FFFFFF"
              },
              submit: {
                backgroundColor: "#C98769",
                color: "#FFFFFF"
              }
            },
            initiallyVisible: false
          });
        }
      }, 100);
    }

    // Don't cleanup - let the button persist
  }, [lang]);

  return null; // This component doesn't render anything visible itself
}

// TypeScript declaration for window.formbutton
declare global {
  interface Window {
    formbutton: any;
  }
}
