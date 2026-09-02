import React from 'react';

const CTAFinal: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-primary text-primary-foreground">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Prêt à transformer votre entreprise ?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Rejoignez plus de 500 entreprises qui ont déjà automatisé leurs processus avec ZyatrIA Global.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:contact@zyatria.global"
            className="bg-background text-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Contactez-nous
          </a>
          <a
            href="#pricing"
            className="border-2 border-background text-background px-8 py-4 rounded-lg text-lg font-semibold hover:bg-background hover:text-foreground transition-colors"
          >
            Voir les tarifs
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTAFinal;
