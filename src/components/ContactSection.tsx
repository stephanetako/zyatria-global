
import SimpleContactForm from './SimpleContactForm';

export default function ContactSection() {
  return (
    <section id="contact" className="section-spacing bg-gradient-to-b from-background to-muted/20">
      <div className="container-responsive">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-responsive-3xl font-bold mb-4">
            Prêt à transformer votre entreprise ?
          </h2>
          <p className="text-responsive-lg text-muted-foreground">
            Discutons de votre projet et découvrez comment nos agents IA peuvent 
            révolutionner vos opérations en seulement 7-15 jours.
          </p>
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto">
          <SimpleContactForm />
        </div>

        {/* Trust indicators */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">24h</div>
            <div className="text-sm text-muted-foreground">Temps de réponse</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">100%</div>
            <div className="text-sm text-muted-foreground">Confidentialité</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">4.9/5</div>
            <div className="text-sm text-muted-foreground">Satisfaction client</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">127+</div>
            <div className="text-sm text-muted-foreground">Projets réussis</div>
          </div>
        </div>
      </div>
    </section>
  );
}
