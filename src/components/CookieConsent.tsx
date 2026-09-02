import React, { useState, useEffect } from 'react';

const CookieConsent: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShow(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 shadow-lg z-50">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          Nous utilisons des cookies pour améliorer votre expérience. En continuant, vous acceptez notre politique de confidentialité.
        </p>
        <div className="flex gap-3">
          <button
            onClick={acceptCookies}
            className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Accepter
          </button>
          <button
            onClick={() => setShow(false)}
            className="border border-border px-6 py-2 rounded-lg hover:bg-muted transition-colors whitespace-nowrap"
          >
            Refuser
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
