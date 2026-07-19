import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { CheckCircle2 } from 'lucide-react';

export default function CompactContactForm() {
  const [state, handleSubmit] = useForm('xbdedonn');

  // Success state
  if (state.succeeded) {
    return (
      <div className="text-center space-y-4 p-6 bg-muted dark:bg-muted/20 rounded-lg">
        <div className="flex justify-center">
          <CheckCircle2 className="h-12 w-12 text-foreground" />
        </div>
        <h3 className="text-xl font-bold text-foreground">Message envoyé !</h3>
        <p className="text-sm text-muted-foreground">
          Nous vous répondrons sous 24h.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name */}
      <div>
        <Input
          name="name"
          type="text"
          placeholder="Votre nom *"
          required
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>

      {/* Email */}
      <div>
        <Input
          name="email"
          type="email"
          placeholder="Votre email *"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      {/* Message */}
      <div>
        <Textarea
          name="message"
          placeholder="Votre message *"
          rows={4}
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
  );
}



