import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Card } from './ui/card';
import { useLanguage } from '../lib/language-context';

const content: Record<'en' | 'fr', any> = {
  en: {
    badge: 'FAQ',
    title: 'Frequently Asked ',
    titleHighlight: 'Questions',
    description: 'Everything you need to know about our AI agents and services.',
    stillHaveQuestions: 'Still have questions?',
    contactTeam: 'Contact our team',
    faqs: [
      {
        question: 'How does billing work?',
        answer: 'Monthly or annual depending on your choice. You can switch between plans at any time with no penalties.'
      },
      {
        question: 'Can I change plans?',
        answer: 'Yes, at any time. Upgrade immediately or downgrade at your next billing cycle. No penalties, no hassle.'
      },
      {
        question: 'How long to deploy an AI agent?',
        answer: 'Between 3 and 7 days depending on complexity. Simple agents in 3 days, custom integrations in 5-7 days.'
      },
      {
        question: 'What is a micro-agent?',
        answer: 'A specialized AI assistant focused on one specific task: lead qualification, appointment scheduling, customer support, etc. It works 24/7 and integrates with your existing tools.'
      },
      {
        question: 'Is my data secure?',
        answer: 'Yes. Enterprise-grade encryption, GDPR compliant. Your data is hosted on secure servers and never shared with third parties.'
      },
      {
        question: 'Do I need technical knowledge?',
        answer: 'No. We handle all setup and configuration. You get a simple interface and complete training for your team.'
      }
    ]
  },
  fr: {
    badge: 'FAQ',
    title: 'Questions ',
    titleHighlight: 'Fréquentes',
    description: 'Tout ce que vous devez savoir sur nos agents IA et nos services.',
    stillHaveQuestions: 'Vous avez d\'autres questions ?',
    contactTeam: 'Contactez notre équipe',
    faqs: [
      {
        question: 'Comment fonctionne la facturation ?',
        answer: 'Mensuelle ou annuelle selon votre choix. Vous pouvez changer de plan à tout moment sans pénalités.'
      },
      {
        question: 'Puis-je changer de plan ?',
        answer: 'Oui, à tout moment. Montée en gamme immédiate ou rétrogradation au prochain cycle de facturation. Sans pénalités, sans tracas.'
      },
      {
        question: 'Combien de temps pour déployer un agent IA ?',
        answer: 'Entre 3 et 7 jours selon la complexité. Agents simples en 3 jours, intégrations personnalisées en 5-7 jours.'
      },
      {
        question: 'Qu\'est-ce qu\'un micro-agent ?',
        answer: 'Un assistant IA spécialisé sur une tâche précise : qualification de leads, prise de rendez-vous, support client, etc. Il fonctionne 24/7 et s\'intègre à vos outils existants.'
      },
      {
        question: 'Mes données sont-elles sécurisées ?',
        answer: 'Oui. Chiffrement de niveau entreprise, conforme RGPD. Vos données sont hébergées sur des serveurs sécurisés et jamais partagées avec des tiers.'
      },
      {
        question: 'Ai-je besoin de connaissances techniques ?',
        answer: 'Non. Nous gérons toute la configuration. Vous obtenez une interface simple et une formation complète pour votre équipe.'
      }
    ]
  },
};

const FAQ: React.FC = () => {
  const { language } = useLanguage();
  const t = content[language];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-4">
            <span className="text-sm font-semibold text-blue-600">{t.badge}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            {t.title}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">{t.titleHighlight}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.description}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {t.faqs.map((faq: any, index: number) => (
            <Card 
              key={index}
              className="overflow-hidden border-2 hover:border-sky-400/30 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 flex items-center justify-between gap-4 group"
              >
                <span className="font-semibold text-lg group-hover:text-blue-500 transition-colors">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-muted-foreground">
                  {faq.answer}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA at bottom */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            {t.stillHaveQuestions}
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center text-sky-600 hover:text-sky-700 font-semibold transition-colors"
          >
            {t.contactTeam}
            <ChevronDown className="ml-2 w-4 h-4 rotate-[-90deg]" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;






