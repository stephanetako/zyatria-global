
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';

interface ContactProps {
  lang?: string;
}

const Contact: React.FC<ContactProps> = ({ lang = 'en' }) => {
  const [state, handleSubmit] = useForm('xeelvrdl');

  const content: Record<string, any> = {
    en: {
      badge: 'Get in Touch',
      title: 'Let\'s Build Something ',
      titleHighlight: 'Amazing Together',
      description: 'Ready to transform your business with AI? Contact our team for a personalized consultation.',
      form: {
        name: 'Full Name *',
        namePlaceholder: 'John Doe',
        email: 'Professional Email *',
        emailPlaceholder: 'john@company.com',
        company: 'Company Name *',
        companyPlaceholder: 'Your Company',
        phone: 'Phone Number',
        phonePlaceholder: '+1 (555) 123-4567',
        service: 'Service Interested In *',
        servicePlaceholder: 'Select a service',
        serviceOptions: [
          { value: '', label: 'Select a service' },
          { value: 'intelligent-agents', label: 'Intelligent AI Agents' },
          { value: 'automation', label: 'Advanced Automation' },
          { value: 'micro-agents', label: 'Specialized Micro-agents' },
          { value: 'custom', label: 'Custom Solution' },
          { value: 'consultation', label: 'Consultation Only' },
        ],
        budget: 'Estimated Budget',
        budgetPlaceholder: 'Select budget range',
        budgetOptions: [
          { value: '', label: 'Select budget range' },
          { value: 'starter', label: '< $500/month (Starter)' },
          { value: 'business', label: '$500 - $2000/month (Business)' },
          { value: 'enterprise', label: '$2000+/month (Enterprise)' },
          { value: 'custom', label: 'Custom Project (One-time)' },
        ],
        timeline: 'When would you like to start?',
        timelinePlaceholder: 'Select timeline',
        timelineOptions: [
          { value: '', label: 'Select timeline' },
          { value: 'asap', label: 'As soon as possible' },
          { value: '1-month', label: 'Within 1 month' },
          { value: '3-months', label: 'Within 3 months' },
          { value: 'planning', label: 'Just planning / Exploring' },
        ],
        message: 'Tell us about your project *',
        messagePlaceholder: 'Describe your needs, challenges, and what you want to achieve with AI...',
        submit: 'Send Message',
        required: 'Required fields *',
      },
      info: [
        {
          icon: Mail,
          title: 'Email',
          value: 'ZyatrIA.contact@gmail.com',
          link: 'mailto:ZyatrIA.contact@gmail.com',
        },
        {
          icon: Phone,
          title: 'Phone',
          value: '+1 (438) 887-4507',
          link: 'tel:+14388874507',
        },
        {
          icon: MapPin,
          title: 'Global Offices',
          value: 'North America • Europe • Africa • Latin America',
          link: null,
        },
      ],
      successMessage: 'Thank you! We\'ll get back to you within 24 hours.',
      errorMessage: 'An error occurred. Please try again or email us directly.',
    },
    fr: {
      badge: 'Contactez-nous',
      title: 'Construisons Ensemble ',
      titleHighlight: 'Quelque Chose d\'Incroyable',
      description: 'Prêt à transformer votre entreprise avec l\'IA ? Contactez notre équipe pour une consultation personnalisée.',
      form: {
        name: 'Nom Complet *',
        namePlaceholder: 'Jean Dupont',
        email: 'Email Professionnel *',
        emailPlaceholder: 'jean@entreprise.com',
        company: 'Nom de l\'Entreprise *',
        companyPlaceholder: 'Votre Entreprise',
        phone: 'Numéro de Téléphone',
        phonePlaceholder: '+1 (438) 123-4567',
        service: 'Service Souhaité *',
        servicePlaceholder: 'Sélectionnez un service',
        serviceOptions: [
          { value: '', label: 'Sélectionnez un service' },
          { value: 'intelligent-agents', label: 'Agents IA Intelligents' },
          { value: 'automation', label: 'Automatisation Avancée' },
          { value: 'micro-agents', label: 'Micro-agents Spécialisés' },
          { value: 'custom', label: 'Solution Sur Mesure' },
          { value: 'consultation', label: 'Consultation Uniquement' },
        ],
        budget: 'Budget Estimé',
        budgetPlaceholder: 'Sélectionnez une fourchette',
        budgetOptions: [
          { value: '', label: 'Sélectionnez une fourchette' },
          { value: 'starter', label: '< 500$/mois (Starter)' },
          { value: 'business', label: '500$ - 2000$/mois (Business)' },
          { value: 'enterprise', label: '2000$+/mois (Enterprise)' },
          { value: 'custom', label: 'Projet Sur Mesure (Ponctuel)' },
        ],
        timeline: 'Quand souhaitez-vous démarrer ?',
        timelinePlaceholder: 'Sélectionnez un délai',
        timelineOptions: [
          { value: '', label: 'Sélectionnez un délai' },
          { value: 'asap', label: 'Dès que possible' },
          { value: '1-month', label: 'Dans 1 mois' },
          { value: '3-months', label: 'Dans 3 mois' },
          { value: 'planning', label: 'En phase de réflexion' },
        ],
        message: 'Parlez-nous de votre projet *',
        messagePlaceholder: 'Décrivez vos besoins, défis et ce que vous souhaitez accomplir avec l\'IA...',
        submit: 'Envoyer le Message',
        required: 'Champs obligatoires *',
      },
      info: [
        {
          icon: Mail,
          title: 'Email',
          value: 'ZyatrIA.contact@gmail.com',
          link: 'mailto:ZyatrIA.contact@gmail.com',
        },
        {
          icon: Phone,
          title: 'Téléphone',
          value: '+1 (438) 887-4507',
          link: 'tel:+14388874507',
        },
        {
          icon: MapPin,
          title: 'Bureaux Mondiaux',
          value: 'Amérique du Nord • Europe • Afrique • Amérique Latine',
          link: null,
        },
      ],
      successMessage: 'Merci ! Nous vous répondrons dans les 24 heures.',
      errorMessage: 'Une erreur est survenue. Veuillez réessayer ou nous contacter par email.',
    },
    es: {
      badge: 'Póngase en Contacto',
      title: 'Construyamos Juntos ',
      titleHighlight: 'Algo Increíble',
      description: '¿Listo para transformar su negocio con IA? Contacte a nuestro equipo para una consulta personalizada.',
      form: {
        name: 'Nombre Completo *',
        namePlaceholder: 'Juan Pérez',
        email: 'Email Profesional *',
        emailPlaceholder: 'juan@empresa.com',
        company: 'Nombre de la Empresa *',
        companyPlaceholder: 'Su Empresa',
        phone: 'Número de Teléfono',
        phonePlaceholder: '+34 612 345 678',
        service: 'Servicio de Interés *',
        servicePlaceholder: 'Seleccione un servicio',
        serviceOptions: [
          { value: '', label: 'Seleccione un servicio' },
          { value: 'intelligent-agents', label: 'Agentes IA Inteligentes' },
          { value: 'automation', label: 'Automatización Avanzada' },
          { value: 'micro-agents', label: 'Micro-agentes Especializados' },
          { value: 'custom', label: 'Solución Personalizada' },
          { value: 'consultation', label: 'Solo Consultoría' },
        ],
        budget: 'Presupuesto Estimado',
        budgetPlaceholder: 'Seleccione rango',
        budgetOptions: [
          { value: '', label: 'Seleccione rango' },
          { value: 'starter', label: '< $500/mes (Starter)' },
          { value: 'business', label: '$500 - $2000/mes (Business)' },
          { value: 'enterprise', label: '$2000+/mes (Enterprise)' },
          { value: 'custom', label: 'Proyecto Personalizado (Único)' },
        ],
        timeline: '¿Cuándo le gustaría comenzar?',
        timelinePlaceholder: 'Seleccione plazo',
        timelineOptions: [
          { value: '', label: 'Seleccione plazo' },
          { value: 'asap', label: 'Lo antes posible' },
          { value: '1-month', label: 'En 1 mes' },
          { value: '3-months', label: 'En 3 meses' },
          { value: 'planning', label: 'Solo explorando' },
        ],
        message: 'Cuéntenos sobre su proyecto *',
        messagePlaceholder: 'Describa sus necesidades, desafíos y qué desea lograr con IA...',
        submit: 'Enviar Mensaje',
        required: 'Campos obligatorios *',
      },
      info: [
        {
          icon: Mail,
          title: 'Email',
          value: 'ZyatrIA.contact@gmail.com',
          link: 'mailto:ZyatrIA.contact@gmail.com',
        },
        {
          icon: Phone,
          title: 'Teléfono',
          value: '+1 (438) 887-4507',
          link: 'tel:+14388874507',
        },
        {
          icon: MapPin,
          title: 'Oficinas Globales',
          value: 'América del Norte • Europa • África • América Latina',
          link: null,
        },
      ],
      successMessage: '¡Gracias! Nos pondremos en contacto en 24 horas.',
      errorMessage: 'Ocurrió un error. Inténtelo de nuevo o contáctenos por email.',
    },
    pt: {
      badge: 'Entre em Contato',
      title: 'Vamos Construir Juntos ',
      titleHighlight: 'Algo Incrível',
      description: 'Pronto para transformar seu negócio com IA? Entre em contato com nossa equipe para uma consulta personalizada.',
      form: {
        name: 'Nome Completo *',
        namePlaceholder: 'João Silva',
        email: 'Email Profissional *',
        emailPlaceholder: 'joao@empresa.com',
        company: 'Nome da Empresa *',
        companyPlaceholder: 'Sua Empresa',
        phone: 'Número de Telefone',
        phonePlaceholder: '+55 11 98765-4321',
        service: 'Serviço de Interesse *',
        servicePlaceholder: 'Selecione um serviço',
        serviceOptions: [
          { value: '', label: 'Selecione um serviço' },
          { value: 'intelligent-agents', label: 'Agentes IA Inteligentes' },
          { value: 'automation', label: 'Automação Avançada' },
          { value: 'micro-agents', label: 'Micro-agentes Especializados' },
          { value: 'custom', label: 'Solução Personalizada' },
          { value: 'consultation', label: 'Apenas Consultoria' },
        ],
        budget: 'Orçamento Estimado',
        budgetPlaceholder: 'Selecione a faixa',
        budgetOptions: [
          { value: '', label: 'Selecione a faixa' },
          { value: 'starter', label: '< R$2500/mês (Starter)' },
          { value: 'business', label: 'R$2500 - R$10000/mês (Business)' },
          { value: 'enterprise', label: 'R$10000+/mês (Enterprise)' },
          { value: 'custom', label: 'Projeto Personalizado (Único)' },
        ],
        timeline: 'Quando gostaria de começar?',
        timelinePlaceholder: 'Selecione o prazo',
        timelineOptions: [
          { value: '', label: 'Selecione o prazo' },
          { value: 'asap', label: 'O mais rápido possível' },
          { value: '1-month', label: 'Em 1 mês' },
          { value: '3-months', label: 'Em 3 meses' },
          { value: 'planning', label: 'Apenas explorando' },
        ],
        message: 'Conte-nos sobre seu projeto *',
        messagePlaceholder: 'Descreva suas necessidades, desafios e o que deseja alcançar com IA...',
        submit: 'Enviar Mensagem',
        required: 'Campos obrigatórios *',
      },
      info: [
        {
          icon: Mail,
          title: 'Email',
          value: 'ZyatrIA.contact@gmail.com',
          link: 'mailto:ZyatrIA.contact@gmail.com',
        },
        {
          icon: Phone,
          title: 'Telefone',
          value: '+1 (438) 887-4507',
          link: 'tel:+14388874507',
        },
        {
          icon: MapPin,
          title: 'Escritórios Globais',
          value: 'América do Norte • Europa • África • América Latina',
          link: null,
        },
      ],
      successMessage: 'Obrigado! Entraremos em contato em 24 horas.',
      errorMessage: 'Ocorreu um erro. Tente novamente ou entre em contato por email.',
    },
  };

  const t = content[lang];

  const gradients = [
    'from-blue-600 to-violet-600',
    'from-violet-600 to-cyan-600',
    'from-cyan-600 to-blue-600'
  ];

  // Success state
  if (state.succeeded) {
    return (
      <section id="contact" className="py-24 bg-gradient-to-b from-white via-violet-50/20 to-white dark:from-zinc-950 dark:via-violet-950/10 dark:to-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-400/10 border border-blue-400/30 rounded-full mb-4">
              <MessageSquare className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-blue-500">{t.badge}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              {t.title}
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                {t.titleHighlight}
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.description}
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="p-8 border-2">
              <div className="text-center py-12">
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">{t.successMessage}</h3>
                <p className="text-muted-foreground mb-6">
                  {lang === 'fr' ? 'Votre message a été envoyé avec succès.' :
                   lang === 'es' ? 'Su mensaje ha sido enviado con éxito.' :
                   lang === 'pt' ? 'Sua mensagem foi enviada com sucesso.' :
                   'Your message has been sent successfully.'}
                </p>
                <Button 
                  onClick={() => window.location.reload()} 
                  variant="outline"
                >
                  {lang === 'fr' ? 'Envoyer un autre message' :
                   lang === 'es' ? 'Enviar otro mensaje' :
                   lang === 'pt' ? 'Enviar outra mensagem' :
                   'Send another message'}
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white via-violet-50/20 to-white dark:from-zinc-950 dark:via-violet-950/10 dark:to-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-400/10 border border-blue-400/30 rounded-full mb-4">
            <MessageSquare className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500">{t.badge}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            {t.title}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              {t.titleHighlight}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 border-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Error Messages */}
              {state.errors && Array.isArray(state.errors) && state.errors.length > 0 && (
                <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                  <p className="text-sm text-red-800 dark:text-red-200">
                    {t.errorMessage}
                  </p>
                </div>
              )}

              {/* Name */}
              <div>
                <Label htmlFor="name">{t.form.name}</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder={t.form.namePlaceholder}
                  required
                  className="mt-2"
                  disabled={state.submitting}
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>

              {/* Email & Phone on same row for desktop */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">{t.form.email}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={t.form.emailPlaceholder}
                    required
                    className="mt-2"
                    disabled={state.submitting}
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                <div>
                  <Label htmlFor="phone">{t.form.phone}</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder={t.form.phonePlaceholder}
                    className="mt-2"
                    disabled={state.submitting}
                  />
                  <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                </div>
              </div>

              {/* Company */}
              <div>
                <Label htmlFor="company">{t.form.company}</Label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  placeholder={t.form.companyPlaceholder}
                  required
                  className="mt-2"
                  disabled={state.submitting}
                />
                <ValidationError prefix="Company" field="company" errors={state.errors} />
              </div>

              {/* Service Dropdown */}
              <div>
                <Label htmlFor="service">{t.form.service}</Label>
                <select
                  id="service"
                  name="service"
                  required
                  disabled={state.submitting}
                  className="mt-2 w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {t.form.serviceOptions.map((option: any) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ValidationError prefix="Service" field="service" errors={state.errors} />
              </div>

              {/* Budget & Timeline on same row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="budget">{t.form.budget}</Label>
                  <select
                    id="budget"
                    name="budget"
                    disabled={state.submitting}
                    className="mt-2 w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    {t.form.budgetOptions.map((option: any) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <Label htmlFor="timeline">{t.form.timeline}</Label>
                  <select
                    id="timeline"
                    name="timeline"
                    disabled={state.submitting}
                    className="mt-2 w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    {t.form.timelineOptions.map((option: any) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <Label htmlFor="message">{t.form.message}</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder={t.form.messagePlaceholder}
                  required
                  rows={5}
                  className="mt-2"
                  disabled={state.submitting}
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              {/* Hidden field for language */}
              <input type="hidden" name="zyatria.contact@gmail.com" value="zyatria.contact@gmail.com" />
              <input type="hidden" name="language" value={lang} />

              {/* Required fields note */}
              <p className="text-xs text-muted-foreground">{t.form.required}</p>

              <Button type="submit" size="lg" className="w-full group" disabled={state.submitting}>
                {state.submitting ? (
                  <>
                    <span className="mr-2">
                      {lang === 'fr' ? 'Envoi en cours...' :
                       lang === 'es' ? 'Enviando...' :
                       lang === 'pt' ? 'Enviando...' :
                       'Sending...'}
                    </span>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  </>
                ) : (
                  <>
                    {t.form.submit}
                    <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition" />
                  </>
                )}
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            {t.info.map((item: any, index: number) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className={`p-8 hover:shadow-xl hover:shadow-blue-600/10 transition-all duration-500 bg-gradient-to-br ${gradients[index]} bg-opacity-5 hover:scale-105 cursor-pointer border-2`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 text-lg">{item.title}</h3>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 transition break-all"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}

            {/* Map Placeholder */}
            <Card className="p-6 bg-gradient-to-br from-blue-500/5 to-violet-500/5 border-2 border-blue-500/30">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground font-medium">Global Presence</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {lang === 'fr' ? 'Présence mondiale' :
                     lang === 'es' ? 'Presencia global' :
                     lang === 'pt' ? 'Presença global' :
                     'Serving clients worldwide'}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


