import { useState } from 'react';
import { useForm } from '@formspree/react';
import { Mail, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useLanguage } from '../lib/language-context';

export default function Newsletter() {
  const { language } = useLanguage();
  const [email, setEmail] = useState('');
  const [state, handleSubmit] = useForm('newsletter-form');

  const content = {
    en: {
      title: 'Stay Updated',
      subtitle: 'Get the latest insights on AI agents, automation, and digital transformation',
      placeholder: 'Enter your email',
      button: 'Subscribe',
      success: 'Thank you for subscribing! Check your inbox.',
      error: 'Oops! Something went wrong. Please try again.',
      privacy: 'We respect your privacy. Unsubscribe anytime.',
      benefits: [
        '🚀 Exclusive AI insights',
        '💡 Industry best practices',
        '🎁 Special offers & early access',
        '📊 Case studies & success stories'
      ]
    },
    fr: {
      title: 'Restez Informé',
      subtitle: 'Recevez les dernières actualités sur les agents IA, l\'automatisation et la transformation digitale',
      placeholder: 'Entrez votre email',
      button: 'S\'abonner',
      success: 'Merci de votre inscription ! Consultez votre boîte mail.',
      error: 'Oups ! Une erreur s\'est produite. Veuillez réessayer.',
      privacy: 'Nous respectons votre vie privée. Désabonnement à tout moment.',
      benefits: [
        '🚀 Insights IA exclusifs',
        '💡 Meilleures pratiques du secteur',
        '🎁 Offres spéciales & accès anticipé',
        '📊 Études de cas & success stories'
      ]
    },
    es: {
      title: 'Mantente Actualizado',
      subtitle: 'Recibe las últimas novedades sobre agentes IA, automatización y transformación digital',
      placeholder: 'Ingresa tu email',
      button: 'Suscribirse',
      success: '¡Gracias por suscribirte! Revisa tu bandeja de entrada.',
      error: '¡Ups! Algo salió mal. Por favor, inténtalo de nuevo.',
      privacy: 'Respetamos tu privacidad. Cancela en cualquier momento.',
      benefits: [
        '🚀 Insights exclusivos de IA',
        '💡 Mejores prácticas del sector',
        '🎁 Ofertas especiales y acceso anticipado',
        '📊 Casos de estudio e historias de éxito'
      ]
    },
    pt: {
      title: 'Fique Atualizado',
      subtitle: 'Receba as últimas novidades sobre agentes IA, automação e transformação digital',
      placeholder: 'Digite seu email',
      button: 'Inscrever-se',
      success: 'Obrigado por se inscrever! Verifique sua caixa de entrada.',
      error: 'Ops! Algo deu errado. Por favor, tente novamente.',
      privacy: 'Respeitamos sua privacidade. Cancele a qualquer momento.',
      benefits: [
        '🚀 Insights exclusivos de IA',
        '💡 Melhores práticas do setor',
        '🎁 Ofertas especiais e acesso antecipado',
        '📊 Estudos de caso e histórias de sucesso'
      ]
    }
  };

  const t = content[language];

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleSubmit(e);
    if (!state.errors) {
      setEmail('');
    }
  };

  return (
    <section className="section-spacing bg-gradient-to-br from-primary/5 via-background to-primary/10">
      <div className="container-responsive max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <Mail className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Newsletter</span>
            </div>

            <h2 className="text-responsive-3xl font-heading font-bold text-foreground">
              {t.title}
            </h2>

            <p className="text-responsive-lg text-muted-foreground">
              {t.subtitle}
            </p>

            <div className="space-y-3">
              {t.benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-2xl">{benefit.split(' ')[0]}</span>
                  <span className="text-muted-foreground pt-1">
                    {benefit.substring(benefit.indexOf(' ') + 1)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-card border border-border rounded-2xl p-8 shadow-lg hover-lift">
            {state.succeeded ? (
              <div className="text-center space-y-4 py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground">
                  {t.success.split('!')[0]}!
                </h3>
                <p className="text-muted-foreground">
                  {t.success.split('!')[1]}
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t.placeholder}
                      required
                      className="pl-11 h-12 text-base"
                      disabled={state.submitting}
                    />
                  </div>

                  {state.errors && Array.isArray(state.errors) && state.errors.length > 0 && (
                    <div className="flex items-center gap-2 p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
                      <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0" />
                      <p className="text-sm text-destructive">{t.error}</p>
                    </div>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full h-12 text-base font-semibold"
                >
                  {state.submitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      {language === 'en' ? 'Subscribing...' : 
                       language === 'fr' ? 'Inscription...' :
                       language === 'es' ? 'Suscribiendo...' :
                       'Inscrevendo...'}
                    </>
                  ) : (
                    <>
                      <Mail className="w-5 h-5 mr-2" />
                      {t.button}
                    </>
                  )}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  🔒 {t.privacy}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

