import { useState, useEffect } from 'react';
import { X, Clock, Gift, Zap } from 'lucide-react';
import { useLanguage } from '../lib/language-context';

/**
 * PreLaunchBanner - Bannière d'urgence pour l'offre de pré-lancement
 * 
 * Features:
 * - Compte à rebours jusqu'au 15/07/2025
 * - 30% de réduction + Formation gratuite (497$)
 * - Fermeture possible (stocké en localStorage)
 * - Animations d'urgence
 * - Multilingue
 */
export default function PreLaunchBanner() {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(true);
  const placesLeft = 47; // Places restantes (statique pour l'instant)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Calculer le temps restant jusqu'au 15/07/2025
  useEffect(() => {
    const targetDate = new Date('2025-07-15T23:59:59').getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setIsVisible(false);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  // Vérifier si la bannière a été fermée
  useEffect(() => {
    const bannerClosed = localStorage.getItem('prelaunch-banner-closed');
    if (bannerClosed === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('prelaunch-banner-closed', 'true');
  };

  const handleCTA = () => {
    // Scroll vers la section pricing
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  const content = {
    fr: {
      title: "🎉 Offre Pré-Lancement Exclusive",
      subtitle: "Il reste seulement",
      places: "places",
      discount: "30% de réduction",
      bonus: "Formation gratuite",
      bonusValue: "valeur 497$",
      validUntil: "Valable jusqu'au 15 juillet 2025",
      cta: "🔥 Réserver Ma Place Maintenant",
      countdown: "Offre expire dans"
    },
    en: {
      title: "🎉 Exclusive Pre-Launch Offer",
      subtitle: "Only",
      places: "spots left",
      discount: "30% discount",
      bonus: "Free training",
      bonusValue: "worth $497",
      validUntil: "Valid until July 15, 2025",
      cta: "🔥 Reserve My Spot Now",
      countdown: "Offer expires in"
    },
    es: {
      title: "🎉 Oferta Exclusiva de Pre-Lanzamiento",
      subtitle: "Solo quedan",
      places: "plazas",
      discount: "30% de descuento",
      bonus: "Formación gratuita",
      bonusValue: "valor $497",
      validUntil: "Válido hasta el 15 de julio de 2025",
      cta: "🔥 Reservar Mi Plaza Ahora",
      countdown: "La oferta expira en"
    },
    pt: {
      title: "🎉 Oferta Exclusiva de Pré-Lançamento",
      subtitle: "Restam apenas",
      places: "vagas",
      discount: "30% de desconto",
      bonus: "Treinamento gratuito",
      bonusValue: "valor $497",
      validUntil: "Válido até 15 de julho de 2025",
      cta: "🔥 Reservar Minha Vaga Agora",
      countdown: "Oferta expira em"
    }
  };

  const text = content[language] || content.fr;

  return (
    <div className="relative bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] animate-pulse"></div>
      </div>

      {/* Close button */}
      <button
        onClick={handleClose}
        className="absolute top-2 right-2 z-10 p-1 hover:bg-white/20 rounded-full transition-colors"
        aria-label="Fermer"
      >
        <X className="w-5 h-5" />
      </button>

      <div className="container-responsive py-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Left: Title & Places */}
          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-xl md:text-2xl font-bold mb-1 flex items-center justify-center lg:justify-start gap-2">
              <Zap className="w-6 h-6 animate-pulse" />
              {text.title}
            </h3>
            <p className="text-sm md:text-base opacity-90 flex items-center justify-center lg:justify-start gap-2">
              <Clock className="w-4 h-4" />
              {text.subtitle} <span className="font-bold text-xl mx-1 animate-bounce">{placesLeft}</span> {text.places}
            </p>
          </div>

          {/* Center: Countdown */}
          <div className="flex-shrink-0">
            <div className="text-center">
              <p className="text-xs opacity-80 mb-1">{text.countdown}</p>
              <div className="flex gap-2">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 min-w-[60px]">
                  <div className="text-2xl font-bold">{timeLeft.days}</div>
                  <div className="text-xs opacity-80">jours</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 min-w-[60px]">
                  <div className="text-2xl font-bold">{timeLeft.hours}</div>
                  <div className="text-xs opacity-80">h</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 min-w-[60px]">
                  <div className="text-2xl font-bold">{timeLeft.minutes}</div>
                  <div className="text-xs opacity-80">min</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 min-w-[60px]">
                  <div className="text-2xl font-bold">{timeLeft.seconds}</div>
                  <div className="text-xs opacity-80">sec</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Offer & CTA */}
          <div className="flex-1 text-center lg:text-right">
            <div className="mb-3">
              <p className="text-lg md:text-xl font-bold flex items-center justify-center lg:justify-end gap-2">
                <Gift className="w-5 h-5" />
                {text.discount} + {text.bonus}
              </p>
              <p className="text-sm opacity-90">({text.bonusValue})</p>
              <p className="text-xs opacity-75 mt-1">{text.validUntil}</p>
            </div>
            <button
              onClick={handleCTA}
              className="bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
            >
              {text.cta}
            </button>
          </div>
        </div>
      </div>

      {/* Animated pulse effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
    </div>
  );
}

