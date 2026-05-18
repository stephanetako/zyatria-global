


import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { getFormspreeUrl } from '../../config/formspree';
import { useLanguage } from '../../lib/language-context';

const translations = {
  en: {
    hero: {
      title: "Request Your Demo",
      subtitle: "We respond within 24 hours."
    },
    form: {
      name: "Name",
      email: "Email",
      sector: "Industry",
      message: "Message",
      submit: "Request a demo",
      success: "Thank you! We will contact you shortly."
    },
    contact: {
      title: "ZyatrIA Global",
      tagline: "Intelligent Automation for Modern Business.",
      location: "Available in North America, Europe, Francophone Africa, and Latin America."
    }
  },
  fr: {
    hero: {
      title: "Demandez votre démo",
      subtitle: "Nous vous répondons en moins de 24 heures."
    },
    form: {
      name: "Nom",
      email: "Email",
      sector: "Secteur",
      message: "Message",
      submit: "Request a demo",
      success: "Merci ! Nous vous contacterons rapidement."
    },
    contact: {
      title: "ZyatrIA Global",
      tagline: "L'IA sans frontières.",
      location: "Disponible en Amérique du Nord, Europe, Afrique francophone et Amérique latine."
    }
  },
  es: {
    hero: {
      title: "Solicite su demo",
      subtitle: "Respondemos en menos de 24 horas."
    },
    form: {
      name: "Nombre",
      email: "Email",
      sector: "Sector",
      message: "Mensaje",
      submit: "Request a demo",
      success: "¡Gracias! Nos pondremos en contacto con usted pronto."
    },
    contact: {
      title: "ZyatrIA Global",
      tagline: "IA sin fronteras.",
      location: "Disponible en América del Norte, Europa, África francófona y América Latina."
    }
  },
  pt: {
    hero: {
      title: "Solicite sua demo",
      subtitle: "Respondemos em menos de 24 horas."
    },
    form: {
      name: "Nome",
      email: "Email",
      sector: "Setor",
      message: "Mensagem",
      submit: "Request a demo",
      success: "Obrigado! Entraremos em contato em breve."
    },
    contact: {
      title: "ZyatrIA Global",
      tagline: "IA sem fronteiras.",
      location: "Disponível na América do Norte, Europa, África francófona e América Latina."
    }
  }
};

export default function DemoPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    sector: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch(getFormspreeUrl('demo'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          sector: formData.sector,
          message: formData.message,
          language: language,
          _subject: `[ZyatrIA Demo] Demande de ${formData.name}`,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        
        // Reset form after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ name: '', email: '', sector: '', message: '' });
        }, 5000);
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Language Switcher */}
      <div className="fixed top-24 right-6 z-50 flex gap-2 bg-card/80 backdrop-blur-sm border border-border rounded-full p-2 shadow-lg">
        {(['en', 'fr', 'es', 'pt'] as const).map((l) => (
          <button
            key={l}
            onClick={() => {
              localStorage.setItem('language', l);
              window.dispatchEvent(new CustomEvent('languageChange', { detail: l }));
            }}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              language === l
                ? 'bg-primary text-primary-foreground'
                : 'bg-transparent text-muted-foreground hover:bg-muted'
            }`}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in font-heading">
            {t.hero.title}
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in-up delay-200">
            {t.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-lg">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    {t.form.name}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    {t.form.email}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="sector" className="block text-sm font-medium mb-2">
                    {t.form.sector}
                  </label>
                  <Input
                    id="sector"
                    name="sector"
                    type="text"
                    required
                    value={formData.sector}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    {t.form.message}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-button"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {t.form.submit}
                </Button>
              </form>
            ) : (
              <div className="text-center py-12 animate-fade-in">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <p className="text-xl font-semibold text-green-500">
                  {t.form.success}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
            {t.contact.title}
          </h2>
          <p className="text-xl text-primary font-semibold mb-4">
            {t.contact.tagline}
          </p>
          <p className="text-muted-foreground">
            {t.contact.location}
          </p>
        </div>
      </section>
    </div>
  );
}

