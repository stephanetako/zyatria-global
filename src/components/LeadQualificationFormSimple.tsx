import React, { useState } from 'react';
import { useForm } from '@formspree/react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
}

export default function LeadQualificationFormSimple() {
  const [state, handleSubmit] = useForm('xbdedonn');
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const inputClass = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all";
  const labelClass = "block text-sm font-semibold text-gray-700 mb-2";
  const selectClass = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white";

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Section Contact */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-primary">
            📋 Informations de contact
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className={labelClass}>
                Nom complet <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Jean Dupont"
                value={formData.name}
                onChange={handleChange}
                disabled={status === 'submitting'}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="email" className={labelClass}>
                Email professionnel <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="jean@entreprise.com"
                value={formData.email}
                onChange={handleChange}
                disabled={status === 'submitting'}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="phone" className={labelClass}>
                Téléphone <span className="text-red-500">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="+1 438 123 4567"
                value={formData.phone}
                onChange={handleChange}
                disabled={status === 'submitting'}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="company" className={labelClass}>
                Entreprise <span className="text-red-500">*</span>
              </label>
              <input
                id="company"
                name="company"
                type="text"
                required
                placeholder="JD.INC ENTREPRISE"
                value={formData.company}
                onChange={handleChange}
                disabled={status === 'submitting'}
                className={inputClass}
              />
            </div>
          </div>
        </div>

        {/* Section Projet */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-primary">
            🎯 Détails du projet
          </h3>

          <div className="space-y-6">
            <div>
              <label htmlFor="service" className={labelClass}>
                Service souhaité <span className="text-red-500">*</span>
              </label>
              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                disabled={status === 'submitting'}
                className={selectClass}
              >
                <option value="">Sélectionnez un service</option>
                <option value="Agents IA Intelligents">Agents IA Intelligents</option>
                <option value="Automation Avancée">Automation Avancée</option>
                <option value="Micro-Agents Spécialisés">Micro-Agents Spécialisés</option>
                <option value="Intégration CRM">Intégration CRM</option>
                <option value="Chatbot IA">Chatbot IA</option>
                <option value="Workflow Automation">Workflow Automation</option>
                <option value="Solution Personnalisée">Solution Personnalisée</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="budget" className={labelClass}>
                  Budget mensuel <span className="text-red-500">*</span>
                </label>
                <select
                  id="budget"
                  name="budget"
                  required
                  value={formData.budget}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  className={selectClass}
                >
                  <option value="">Sélectionnez votre budget</option>
                  <option value="Starter (200$ - 500$/mois)">Starter (200$ - 500$/mois)</option>
                  <option value="Business (500$ - 2000$/mois)">Business (500$ - 2000$/mois)</option>
                  <option value="Enterprise (2000$ - 5000$/mois)">Enterprise (2000$ - 5000$/mois)</option>
                  <option value="Sur mesure (5000$+/mois)">Sur mesure (5000$+/mois)</option>
                </select>
              </div>

              <div>
                <label htmlFor="timeline" className={labelClass}>
                  Délai souhaité <span className="text-red-500">*</span>
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  required
                  value={formData.timeline}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  className={selectClass}
                >
                  <option value="">Quand souhaitez-vous démarrer ?</option>
                  <option value="Dès que possible">Dès que possible</option>
                  <option value="Dans 1 mois">Dans 1 mois</option>
                  <option value="Dans 2-3 mois">Dans 2-3 mois</option>
                  <option value="Dans 3-6 mois">Dans 3-6 mois</option>
                  <option value="En phase d'exploration">En phase d'exploration</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className={labelClass}>
                Décrivez votre projet <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Décrivez vos besoins, objectifs et défis actuels..."
                value={formData.message}
                onChange={handleChange}
                disabled={status === 'submitting'}
                rows={5}
                className={`${inputClass} resize-none`}
              />
              <p className="text-sm text-gray-500 mt-2">
                Plus vous nous donnez de détails, mieux nous pourrons vous aider.
              </p>
            </div>
          </div>
        </div>

        {/* Messages de statut */}
        {status === 'success' && (
          <div className="bg-muted border-2 border-border rounded-lg p-4 flex items-start gap-3">
            <svg className="w-6 h-6 text-foreground flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h4 className="font-bold text-foreground">Merci !</h4>
              <p className="text-foreground">Votre demande a été envoyée avec succès. Nous vous contacterons sous 24h.</p>
            </div>
          </div>
        )}

        {status === 'error' && (
          <div className="bg-red-50 border-2 border-red-500 rounded-lg p-4 flex items-start gap-3">
            <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h4 className="font-bold text-red-900">Erreur</h4>
              <p className="text-red-800">{errorMessage}</p>
            </div>
          </div>
        )}

        {/* Bouton d'envoi */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-6 border-t-2">
          <p className="text-sm text-gray-600">
            <span className="text-red-500">*</span> Champs obligatoires
          </p>
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105 active:scale-95 shadow-lg"
          >
            {status === 'submitting' ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Envoi en cours...
              </span>
            ) : (
              '🚀 Envoyer ma demande'
            )}
          </button>
        </div>

        {/* Indicateurs de confiance */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t">
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-3xl font-bold text-primary">24h</div>
            <div className="text-xs text-gray-600 mt-1">Réponse garantie</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-3xl font-bold text-primary">100%</div>
            <div className="text-xs text-gray-600 mt-1">Confidentiel</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-3xl font-bold text-primary">7-15j</div>
            <div className="text-xs text-gray-600 mt-1">Déploiement</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-3xl font-bold text-primary">4.9/5</div>
            <div className="text-xs text-gray-600 mt-1">Satisfaction</div>
          </div>
        </div>
      </form>
    </div>
  );
}



