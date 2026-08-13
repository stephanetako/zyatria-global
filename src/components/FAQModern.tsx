import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { Badge } from './ui/badge';

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

const faqs: FAQItem[] = [
  {
    question: 'Combien de temps faut-il pour voir des résultats ?',
    answer: (
      <div className="text-gray-700 leading-relaxed">
        <p className="mb-3">
          Dès le premier jour ! Nos clients voient une <strong>réduction de 50% du temps de réponse</strong> dès la première semaine.
        </p>
        <p>
          Après 1 mois, la plupart atteignent une <strong>automatisation de 80% de leurs tâches répétitives</strong>.
        </p>
      </div>
    )
  },
  {
    question: 'Ai-je besoin de compétences techniques ?',
    answer: (
      <div className="text-gray-700 leading-relaxed">
        <p className="mb-3">
          Non ! Nos agents sont conçus pour être utilisés <strong>sans aucune expertise technique</strong>.
        </p>
        <p className="mb-2">Nous nous occupons de :</p>
        <ul className="list-none space-y-2 ml-0">
          <li className="flex items-start gap-2">
            <span className="text-green-500 mt-1">✅</span>
            <span>La configuration et le déploiement</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 mt-1">✅</span>
            <span>L'intégration avec vos outils existants</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 mt-1">✅</span>
            <span>La formation de votre équipe</span>
          </li>
        </ul>
        <p className="mt-3">
          Vous n'avez qu'à <strong>définir vos besoins</strong>, nous faisons le reste.
        </p>
      </div>
    )
  },
  {
    question: 'Comment vos agents s\'intègrent-ils à mes outils ?',
    answer: (
      <div className="text-gray-700 leading-relaxed">
        <p className="mb-3">
          Nos agents s'intègrent nativement avec <strong>plus de 50 outils</strong>, dont :
        </p>
        <ul className="list-none space-y-2 ml-0">
          <li className="flex items-start gap-2">
            <span className="mt-1">📧</span>
            <span><strong>Email :</strong> Gmail, Outlook, etc.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1">📞</span>
            <span><strong>Téléphonie :</strong> Twilio, Aircall</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1">🛠️</span>
            <span><strong>CRM :</strong> HubSpot, Salesforce, Zoho</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1">💬</span>
            <span><strong>Chat :</strong> Slack, WhatsApp, Messenger</span>
          </li>
        </ul>
        <p className="mt-3">
          Si votre outil n'est pas dans la liste, nous pouvons <strong>développer une intégration sur mesure</strong> en 7-10 jours.
        </p>
      </div>
    )
  },
  {
    question: 'Quelle est la différence entre les plans ?',
    answer: (
      <div className="text-gray-700 leading-relaxed">
        <p className="mb-3">Chaque plan est conçu pour un niveau de besoins différent :</p>
        <ul className="list-none space-y-3 ml-0">
          <li className="flex items-start gap-2">
            <span className="mt-1">🆕</span>
            <div>
              <strong>Essai Gratuit :</strong> Testez 1 bot pendant 7 jours sans engagement
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1">💡</span>
            <div>
              <strong>Starter :</strong> Parfait pour les petites entreprises (1 bot, 1000 interactions/mois)
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1">⭐</span>
            <div>
              <strong>Professional :</strong> Le plus populaire ! 3 bots, automatisation avancée, support prioritaire
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1">🏆</span>
            <div>
              <strong>Enterprise :</strong> Solution complète avec 7 bots, gestionnaire dédié, support 24/7
            </div>
          </li>
        </ul>
      </div>
    )
  },
  {
    question: 'Puis-je changer de plan à tout moment ?',
    answer: (
      <div className="text-gray-700 leading-relaxed">
        <p className="mb-3">
          Oui, absolument ! Vous pouvez <strong>upgrader ou downgrader votre plan à tout moment</strong>.
        </p>
        <ul className="list-none space-y-2 ml-0">
          <li className="flex items-start gap-2">
            <span className="text-green-500 mt-1">✅</span>
            <span>Changement instantané (upgrade)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 mt-1">✅</span>
            <span>Prorata automatique sur votre facture</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 mt-1">✅</span>
            <span>Aucun frais de changement</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 mt-1">✅</span>
            <span>Annulation possible à tout moment (downgrade effectif au prochain cycle)</span>
          </li>
        </ul>
      </div>
    )
  },
  {
    question: 'Mes données sont-elles sécurisées ?',
    answer: (
      <div className="text-gray-700 leading-relaxed">
        <p className="mb-3">
          La sécurité est notre <strong>priorité absolue</strong>. Nous utilisons :
        </p>
        <ul className="list-none space-y-2 ml-0">
          <li className="flex items-start gap-2">
            <span className="text-green-500 mt-1">🔒</span>
            <span><strong>Chiffrement SSL/TLS</strong> pour toutes les communications</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 mt-1">🔒</span>
            <span><strong>Conformité RGPD</strong> et respect de la vie privée</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 mt-1">🔒</span>
            <span><strong>Hébergement sécurisé</strong> avec backups quotidiens</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 mt-1">🔒</span>
            <span><strong>Audits de sécurité</strong> réguliers par des tiers</span>
          </li>
        </ul>
        <p className="mt-3">
          Vos données vous appartiennent et ne sont <strong>jamais partagées</strong> avec des tiers.
        </p>
      </div>
    )
  },
  {
    question: 'Offrez-vous une garantie satisfait ou remboursé ?',
    answer: (
      <div className="text-gray-700 leading-relaxed">
        <p className="mb-3">
          Oui ! Nous offrons une <strong>garantie satisfait ou remboursé de 30 jours</strong>.
        </p>
        <p className="mb-3">
          Si vous n'êtes pas satisfait pour quelque raison que ce soit, contactez-nous dans les 30 premiers jours et nous vous rembourserons intégralement.
        </p>
        <p>
          <strong>Aucune question posée.</strong> C'est notre engagement envers votre satisfaction.
        </p>
      </div>
    )
  },
  {
    question: 'Comment fonctionne le support client ?',
    answer: (
      <div className="text-gray-700 leading-relaxed">
        <p className="mb-3">Notre support varie selon votre plan :</p>
        <ul className="list-none space-y-3 ml-0">
          <li className="flex items-start gap-2">
            <span className="mt-1">💡</span>
            <div>
              <strong>Starter :</strong> Support email avec réponse sous 48h
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1">⭐</span>
            <div>
              <strong>Professional :</strong> Support prioritaire sous 24h + chat en direct
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1">🏆</span>
            <div>
              <strong>Enterprise :</strong> Support 24/7 + gestionnaire dédié + hotline directe
            </div>
          </li>
        </ul>
        <p className="mt-3">
          Tous les plans incluent également l'accès à notre <strong>base de connaissances</strong> et nos <strong>tutoriels vidéo</strong>.
        </p>
      </div>
    )
  }
];

export default function FAQModern() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-100">
            ❓ FAQ
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Questions Fréquentes
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Tout ce que vous devez savoir sur nos agents IA et nos services.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white border border-gray-200 rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600 py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 pt-2">
                {typeof faq.answer === 'string' ? (
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                ) : (
                  faq.answer
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Bottom CTA */}
        <div className="text-center mt-12 p-8 bg-white rounded-2xl border border-gray-200 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Vous avez d'autres questions ?
          </h3>
          <p className="text-gray-600 mb-6">
            Notre équipe est là pour vous aider. Contactez-nous et obtenez une réponse personnalisée.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all shadow-md"
          >
            Contacter le Support
          </a>
        </div>
      </div>
    </section>
  );
}
