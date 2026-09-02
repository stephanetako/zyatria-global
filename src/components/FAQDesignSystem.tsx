import React, { useState } from 'react';

const FAQDesignSystem: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Combien de temps prend le déploiement ?',
      answer: 'Le déploiement complet prend entre 7 et 15 jours selon la complexité de votre projet.',
    },
    {
      question: 'Quels langages sont supportés ?',
      answer: 'Nous supportons le français, l\'anglais, l\'espagnol et le portugais nativement.',
    },
    {
      question: 'Puis-je personnaliser les agents IA ?',
      answer: 'Absolument ! Tous nos agents sont entièrement personnalisables selon vos besoins spécifiques.',
    },
    {
      question: 'Quel est le support disponible ?',
      answer: 'Nous offrons un support email pour le plan Starter, prioritaire pour Business, et 24/7 pour Enterprise.',
    },
  ];

  return (
    <section id="faq" className="py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Questions Fréquentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-card border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 flex justify-between items-center hover:bg-muted/50 transition-colors"
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <span className="text-2xl">{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-muted-foreground">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQDesignSystem;
