import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { CheckCircle2 } from 'lucide-react';

export default function SimpleContactForm() {
  const [state, handleSubmit] = useForm('xbdedonn');

  // Success state
  if (state.succeeded) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <CheckCircle2 className="h-16 w-16 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-green-600">Message envoyé !</h3>
            <p className="text-muted-foreground">
              Merci pour votre message. Nous vous répondrons sous 24h.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Contactez-nous</CardTitle>
        <CardDescription>
          Envoyez-nous un message et nous vous répondrons rapidement
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name">Nom *</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Votre nom"
              required
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="votre@email.com"
              required
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Votre message..."
              rows={5}
              required
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          {/* Global errors */}
          <ValidationError errors={state.errors} />

          {/* Submit */}
          <Button
            type="submit"
            disabled={state.submitting}
            className="w-full"
          >
            {state.submitting ? 'Envoi...' : 'Envoyer'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}



