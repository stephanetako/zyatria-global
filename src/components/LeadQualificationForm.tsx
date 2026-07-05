import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { CheckCircle2 } from 'lucide-react';

export default function LeadQualificationForm() {
  const [state, handleSubmit] = useForm('xbdedonn');
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    message: ''
  });

  // Success state
  if (state.succeeded) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <CheckCircle2 className="h-16 w-16 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-green-600">Merci !</h3>
            <p className="text-muted-foreground">
              Votre demande a été envoyée avec succès. Nous vous contacterons sous 24h.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Qualifiez Votre Projet</CardTitle>
        <CardDescription>
          Remplissez ce formulaire pour obtenir une consultation gratuite
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name">Nom complet *</Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Jean Dupont"
              required
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email professionnel *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="jean@entreprise.com"
              required
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone">Téléphone *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+1 438 123 4567"
              required
            />
            <ValidationError prefix="Phone" field="phone" errors={state.errors} />
          </div>

          {/* Company */}
          <div className="space-y-2">
            <Label htmlFor="company">Entreprise *</Label>
            <Input
              id="company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Nom de votre entreprise"
              required
            />
            <ValidationError prefix="Company" field="company" errors={state.errors} />
          </div>

          {/* Service */}
          <div className="space-y-2">
            <Label htmlFor="service">Service recherché *</Label>
            <Select
              name="service"
              value={formData.service}
              onValueChange={(value) => handleSelectChange('service', value)}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Sélectionnez un service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="agents-ia">Agents IA Intelligents</SelectItem>
                <SelectItem value="automation">Automatisation Avancée</SelectItem>
                <SelectItem value="micro-agents">Micro-Agents Spécialisés</SelectItem>
                <SelectItem value="integration">Intégration Complète</SelectItem>
              </SelectContent>
            </Select>
            <input type="hidden" name="service" value={formData.service} />
            <ValidationError prefix="Service" field="service" errors={state.errors} />
          </div>

          {/* Budget */}
          <div className="space-y-2">
            <Label htmlFor="budget">Budget mensuel *</Label>
            <Select
              name="budget"
              value={formData.budget}
              onValueChange={(value) => handleSelectChange('budget', value)}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Sélectionnez votre budget" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="starter">Starter (100$ - 500$/mois)</SelectItem>
                <SelectItem value="business">Business (500$ - 2000$/mois)</SelectItem>
                <SelectItem value="enterprise">Enterprise (2000$+/mois)</SelectItem>
              </SelectContent>
            </Select>
            <input type="hidden" name="budget" value={formData.budget} />
            <ValidationError prefix="Budget" field="budget" errors={state.errors} />
          </div>

          {/* Timeline */}
          <div className="space-y-2">
            <Label htmlFor="timeline">Délai souhaité *</Label>
            <Select
              name="timeline"
              value={formData.timeline}
              onValueChange={(value) => handleSelectChange('timeline', value)}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Quand souhaitez-vous commencer ?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="asap">Dès que possible</SelectItem>
                <SelectItem value="1-month">Dans 1 mois</SelectItem>
                <SelectItem value="3-months">Dans 3 mois</SelectItem>
                <SelectItem value="exploring">En exploration</SelectItem>
              </SelectContent>
            </Select>
            <input type="hidden" name="timeline" value={formData.timeline} />
            <ValidationError prefix="Timeline" field="timeline" errors={state.errors} />
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message">Décrivez votre projet *</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Parlez-nous de vos besoins, défis et objectifs..."
              rows={5}
              required
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          {/* Global form errors */}
          <ValidationError errors={state.errors} />

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={state.submitting}
            className="w-full"
            size="lg"
          >
            {state.submitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}




