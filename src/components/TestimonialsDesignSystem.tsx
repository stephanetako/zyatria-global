import React from 'react';

const TestimonialsDesignSystem: React.FC = () => {
  const testimonials = [
    {
      name: 'Marie Dubois',
      role: 'CEO, TechStart',
      content: 'ZyatrIA a transformé notre service client. Nos agents IA répondent 24/7 avec une précision incroyable.',
      rating: 5,
    },
    {
      name: 'Carlos Rodriguez',
      role: 'Directeur Marketing, GlobalCorp',
      content: 'Déploiement en 10 jours, ROI positif dès le premier mois. Une équipe exceptionnelle !',
      rating: 5,
    },
    {
      name: 'Sophie Martin',
      role: 'Fondatrice, E-Shop Pro',
      content: 'L\'automatisation a libéré 40% du temps de mon équipe. Nous pouvons enfin nous concentrer sur la croissance.',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Ce que disent nos clients</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-6">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">★</span>
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">&ldquo;{testimonial.content}&rdquo;</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsDesignSystem;
