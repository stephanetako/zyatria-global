import React, { useState } from 'react';
import { Plus, Minus, Lock, Shield, Database, Ban, CheckCircle } from 'lucide-react';
import { useLanguage } from '../lib/language-context';

const translations = {
  fr: {
    title: 'Questions Fréquentes',
    subtitle: 'Tout ce que vous devez savoir sur nos agents IA et nos services.',
    faqs: [
      {
        question: 'Comment fonctionne la facturation ?',
        answer: 'Mensuelle ou annuelle selon votre choix. Vous pouvez changer de plan à tout moment sans pénalités.'
      },
      {
        question: 'Puis-je changer de plan ?',
        answer: 'Oui, vous pouvez changer de plan à tout moment. Il vous suffit de sélectionner le nouveau plan dans votre tableau de bord, et les ajustements de prix seront appliqués au prorata.'
      },
      {
        question: 'Combien de temps pour déployer un agent IA ?',
        answer: 'Nos agents IA sont déployés en **7 à 15 jours** après la validation de votre configuration. Pour les solutions sur mesure, le délai peut varier selon la complexité.'
      },
      {
        question: 'Qu\'est-ce qu\'un micro-agent ?',
        answer: 'Un micro-agent est un agent IA **spécialisé dans une tâche précise** (ex: support client, qualification de leads, gestion des rendez-vous). Contrairement à un chatbot classique, nos micro-agents comprennent le contexte, apprennent de vos interactions et s\'intègrent à vos outils existants.'
      },
      {
        question: 'Mes données sont-elles sécurisées ?',
        answer: '**Oui, la sécurité est notre priorité**. Voici comment nous protégeons vos données :',
        list: [
          { icon: <Lock size={16} />, text: 'Chiffrement SSL pour toutes les communications.' },
          { icon: <Shield size={16} />, text: 'Conformité RGPD pour les données européennes.' },
          { icon: <Database size={16} />, text: 'Stockage sécurisé sur des serveurs certifiés (AWS, Google Cloud).' },
          { icon: <Ban size={16} />, text: 'Pas de partage de vos données avec des tiers.' }
        ]
      },
      {
        question: 'Ai-je besoin de connaissances techniques ?',
        answer: 'Non ! Nos agents sont conçus pour être utilisés **sans aucune expertise technique**. Nous nous occupons de :',
        list: [
          { icon: <CheckCircle size={16} />, text: 'La configuration et le déploiement.' },
          { icon: <CheckCircle size={16} />, text: 'L\'intégration avec vos outils existants.' },
          { icon: <CheckCircle size={16} />, text: 'La formation de votre équipe.' }
        ],
        footer: 'Vous n\'avez qu\'à définir vos besoins, nous faisons le reste.'
      }
    ]
  },
  en: {
    title: 'Frequently Asked Questions',
    subtitle: 'Everything you need to know about our AI agents and services.',
    faqs: [
      {
        question: 'How does billing work?',
        answer: 'Monthly or annual billing according to your choice. You can change plans at any time without penalties.'
      },
      {
        question: 'Can I change my plan?',
        answer: 'Yes, you can change your plan at any time. Simply select the new plan in your dashboard, and price adjustments will be applied pro-rata.'
      },
      {
        question: 'How long does it take to deploy an AI agent?',
        answer: 'Our AI agents are deployed in **7 to 15 days** after validating your configuration. For custom solutions, the timeline may vary depending on complexity.'
      },
      {
        question: 'What is a micro-agent?',
        answer: 'A micro-agent is an AI agent **specialized in a specific task** (e.g., customer support, lead qualification, appointment management). Unlike a classic chatbot, our micro-agents understand context, learn from your interactions, and integrate with your existing tools.'
      },
      {
        question: 'Is my data secure?',
        answer: '**Yes, security is our priority**. Here\'s how we protect your data:',
        list: [
          { icon: <Lock size={16} />, text: 'SSL encryption for all communications.' },
          { icon: <Shield size={16} />, text: 'GDPR compliance for European data.' },
          { icon: <Database size={16} />, text: 'Secure storage on certified servers (AWS, Google Cloud).' },
          { icon: <Ban size={16} />, text: 'No sharing of your data with third parties.' }
        ]
      },
      {
        question: 'Do I need technical knowledge?',
        answer: 'No! Our agents are designed to be used **without any technical expertise**. We take care of:',
        list: [
          { icon: <CheckCircle size={16} />, text: 'Configuration and deployment.' },
          { icon: <CheckCircle size={16} />, text: 'Integration with your existing tools.' },
          { icon: <CheckCircle size={16} />, text: 'Training your team.' }
        ],
        footer: 'You just define your needs, we do the rest.'
      }
    ]
  }
};

interface FAQItemProps {
  question: string;
  answer: string;
  list?: Array<{ icon: React.ReactNode; text: string }>;
  footer?: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, list, footer, isOpen, onToggle }) => {
  const renderAnswer = (text: string) => {
    // Replace **text** with <strong>text</strong>
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className="faq-item">
      <button className="faq-question" onClick={onToggle}>
        {question}
        <span style={{ transition: 'transform 0.3s', display: 'inline-block' }}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>
      <div 
        className={`faq-answer ${isOpen ? 'open' : ''}`}
        style={{
          maxHeight: isOpen ? '1000px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease-in-out'
        }}
      >
        <p>{renderAnswer(answer)}</p>
        {list && (
          <ul style={{ 
            listStyle: 'none', 
            padding: 0, 
            marginTop: '15px',
            marginBottom: footer ? '15px' : 0
          }}>
            {list.map((item, index) => (
              <li 
                key={index} 
                style={{ 
                  marginBottom: '10px', 
                  display: 'flex', 
                  alignItems: 'flex-start',
                  gap: '10px',
                  color: '#374151'
                }}
              >
                <span style={{ color: '#10B981', marginTop: '2px', flexShrink: 0 }}>
                  {item.icon}
                </span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        )}
        {footer && (
          <p style={{ marginTop: '15px', fontStyle: 'italic', color: '#64748B' }}>
            {footer}
          </p>
        )}
      </div>
    </div>
  );
};

export default function FAQDesignSystem() {
  const { language } = useLanguage();
  const supportedLanguage = (language === 'en' || language === 'fr') ? language : 'en';
  const t = translations[supportedLanguage];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section" id="faq">
      <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>
        {t.title}
      </h2>
      <p style={{ textAlign: 'center', color: '#64748B', marginBottom: '40px' }}>
        {t.subtitle}
      </p>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {t.faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            list={faq.list}
            footer={faq.footer}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </section>
  );
};

