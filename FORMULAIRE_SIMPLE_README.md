# 📧 Formulaire de Contact Simplifié - Documentation

## 🎯 Vue d'ensemble

Un formulaire de contact moderne et simplifié qui utilise directement l'API Formspree. Aucun backend nécessaire !

## 📦 Fichiers créés

```
src/
├── components/
│   ├── SimpleContactForm.tsx      # Composant principal du formulaire
│   └── ContactSection.tsx         # Section complète avec formulaire
├── pages/
│   └── contact-simple.astro       # Page de démonstration
└── config/
    └── formspree.ts               # Configuration Formspree
```

## 🚀 Démarrage rapide

### 1. Tester le formulaire

```bash
# Démarrer le serveur
npm run dev

# Ouvrir dans le navigateur
http://localhost:4321/contact-simple
```

### 2. Utiliser dans vos pages

#### Option A : Page complète
```astro
---
import MainLayout from '../layouts/main.astro';
import SimpleContactForm from '../components/SimpleContactForm';
---

<MainLayout title="Contact">
  <div class="container py-12">
    <SimpleContactForm client:load />
  </div>
</MainLayout>
```

#### Option B : Section dans une page
```astro
---
import ContactSection from '../components/ContactSection';
---

<ContactSection client:load />
```

#### Option C : Dans un composant React
```tsx
import SimpleContactForm from './SimpleContactForm';

export default function MyComponent() {
  return (
    <div>
      <h1>Contactez-nous</h1>
      <SimpleContactForm />
    </div>
  );
}
```

## ⚙️ Configuration

### Changer l'endpoint Formspree

Éditez `src/config/formspree.ts` :

```typescript
export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/VOTRE_ID_ICI';
```

### Obtenir votre ID Formspree

1. Allez sur [formspree.io](https://formspree.io)
2. Créez un compte gratuit (50 soumissions/mois)
3. Créez un nouveau formulaire
4. Copiez l'ID (format : `xeelvrdl`)
5. Remplacez dans la configuration

## 🎨 Personnalisation

### Modifier les champs

Dans `SimpleContactForm.tsx`, ajoutez ou modifiez les champs :

```tsx
// Ajouter un champ téléphone
<div className="space-y-2">
  <Label htmlFor="phone">Téléphone</Label>
  <Input
    id="phone"
    name="phone"
    type="tel"
    value={formData.phone}
    onChange={handleChange}
  />
</div>
```

### Personnaliser les messages

```tsx
// Message de succès
setStatus({
  type: 'success',
  message: 'Votre message personnalisé ici !'
});

// Message d'erreur
setStatus({
  type: 'error',
  message: 'Votre message d\'erreur personnalisé'
});
```

### Modifier le style

Le formulaire utilise les composants shadcn/ui. Pour personnaliser :

```tsx
// Changer la couleur du bouton
<Button className="bg-blue-600 hover:bg-blue-700">
  Envoyer
</Button>

// Modifier la taille de la carte
<Card className="max-w-4xl shadow-2xl">
  {/* contenu */}
</Card>
```

## 📋 Fonctionnalités incluses

### ✅ Validation
- Champs requis marqués avec `*`
- Validation HTML5 native
- Validation d'email
- Messages d'erreur clairs

### ✅ UX/UI
- Design moderne et épuré
- Animations fluides
- États de chargement
- Messages de succès/erreur
- Responsive (mobile, tablette, desktop)
- Mode sombre supporté

### ✅ Accessibilité
- Labels associés aux inputs
- ARIA attributes
- Navigation au clavier
- Focus visible
- Lecteurs d'écran compatibles

### ✅ Sécurité
- Protection CORS par Formspree
- Validation côté client et serveur
- Protection anti-spam intégrée
- Pas d'exposition de données sensibles

## 🔧 Fonctionnalités avancées

### Ajouter un champ caché

```tsx
// Dans le body de la requête fetch
body: JSON.stringify({
  ...formData,
  _subject: `Nouveau message de ${formData.name}`,
  _replyto: formData.email,
  _template: 'table'
})
```

### Redirection après succès

```tsx
if (response.ok) {
  setStatus({ type: 'success', message: '...' });
  // Rediriger après 2 secondes
  setTimeout(() => {
    window.location.href = '/merci';
  }, 2000);
}
```

### Ajouter Google Analytics

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  // Track l'événement
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_submit', {
      event_category: 'Contact',
      event_label: 'Simple Contact Form'
    });
  }
  
  // ... reste du code
};
```

### Intégration avec un CRM

```tsx
// Après l'envoi réussi à Formspree
if (response.ok) {
  // Envoyer aussi à votre CRM
  await fetch('/api/crm/add-contact', {
    method: 'POST',
    body: JSON.stringify(formData)
  });
}
```

## 📊 Gestion des soumissions

### Dans Formspree Dashboard

1. **Voir les soumissions** : Dashboard → Submissions
2. **Exporter les données** : CSV, JSON
3. **Configurer les notifications** : Email, Slack, Webhook
4. **Gérer le spam** : Activer reCAPTCHA

### Notifications email

Dans Formspree, configurez :
- Email de notification
- Destinataires multiples
- Format personnalisé
- Auto-réponse au client

## 🧪 Tests

### Test manuel

```bash
# 1. Démarrer le serveur
npm run dev

# 2. Ouvrir le formulaire
http://localhost:4321/contact-simple

# 3. Remplir et soumettre
# 4. Vérifier l'email de notification
```

### Test de validation

- [ ] Soumettre formulaire vide → Erreur
- [ ] Email invalide → Erreur
- [ ] Tous les champs valides → Succès
- [ ] Vérifier le message de succès
- [ ] Vérifier la réinitialisation du formulaire

### Test responsive

- [ ] Mobile (< 640px)
- [ ] Tablette (640px - 1024px)
- [ ] Desktop (> 1024px)
- [ ] Orientation portrait/paysage

### Test accessibilité

- [ ] Navigation au clavier (Tab)
- [ ] Lecteur d'écran
- [ ] Contraste des couleurs
- [ ] Focus visible
- [ ] Labels présents

## 🐛 Dépannage

### Problème : Le formulaire ne s'envoie pas

**Solutions :**
1. Vérifiez l'ID Formspree dans `formspree.ts`
2. Ouvrez la console (F12) pour voir les erreurs
3. Vérifiez votre connexion internet
4. Testez avec un autre navigateur

### Problème : Erreur CORS

**Solutions :**
1. Formspree gère CORS automatiquement
2. Vérifiez que vous utilisez le bon endpoint
3. En production, utilisez HTTPS

### Problème : Les emails n'arrivent pas

**Solutions :**
1. Vérifiez vos spams
2. Confirmez votre email dans Formspree
3. Vérifiez les paramètres de notification
4. Testez avec un autre email

### Problème : Trop de spam

**Solutions :**
1. Activez reCAPTCHA dans Formspree
2. Ajoutez un champ honeypot
3. Limitez les soumissions par IP
4. Utilisez la validation stricte

## 📈 Optimisations

### Performance

```tsx
// Lazy loading du formulaire
import { lazy, Suspense } from 'react';

const SimpleContactForm = lazy(() => import('./SimpleContactForm'));

export default function Page() {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <SimpleContactForm />
    </Suspense>
  );
}
```

### SEO

```astro
---
// Dans votre page .astro
const schema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact",
  "description": "Contactez-nous via notre formulaire"
};
---

<script type="application/ld+json" set:html={JSON.stringify(schema)} />
```

## 🎯 Cas d'usage

### 1. Page de contact simple
```astro
<!-- pages/contact.astro -->
<SimpleContactForm client:load />
```

### 2. Section dans la page d'accueil
```astro
<!-- pages/index.astro -->
<ContactSection client:load />
```

### 3. Modal de contact
```tsx
import { Dialog, DialogContent } from './ui/dialog';
import SimpleContactForm from './SimpleContactForm';

export default function ContactModal({ open, onClose }) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <SimpleContactForm />
      </DialogContent>
    </Dialog>
  );
}
```

### 4. Formulaire de devis
Modifiez les champs pour un formulaire de devis :
- Budget estimé
- Type de projet
- Délai souhaité
- Fichiers joints (via Formspree Pro)

## 📚 Ressources

- [Documentation Formspree](https://help.formspree.io/)
- [shadcn/ui](https://ui.shadcn.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Tailwind CSS](https://tailwindcss.com/)

## 🎉 Prêt à utiliser !

Votre formulaire est maintenant configuré et prêt à recevoir des messages !

**Testez-le ici : http://localhost:4321/contact-simple**

---

*Pour toute question, consultez le guide de test ou la documentation Formspree.*
