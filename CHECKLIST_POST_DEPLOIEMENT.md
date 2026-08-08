# ✅ CHECKLIST POST-DÉPLOIEMENT

## 🎯 TESTS IMMÉDIATS (5 minutes)

### 1. Site Principal

- [ ] Ouvrir https://zyatria-global.pages.dev
- [ ] Page d'accueil charge correctement
- [ ] Logo ZyatrIA visible
- [ ] Navigation fonctionne (tous les liens)
- [ ] Couleurs correctes (beige/terracotta)
- [ ] Polices correctes (Instrument Sans)
- [ ] Images chargent
- [ ] Footer visible

---

### 2. Pages Principales

- [ ] `/about` - À propos
- [ ] `/services` - Services
- [ ] `/pricing` - Tarifs (boutons Stripe)
- [ ] `/micro-agents` - Micro-agents
- [ ] `/technology` - Technologie
- [ ] `/contact-simple` - Contact
- [ ] `/lead-qualification` - Qualification
- [ ] `/dashboard` - Dashboard (si accessible)

---

### 3. Chatbot IA (Mistral)

**Test via navigateur :**
- [ ] Ouvrir la page d'accueil
- [ ] Cliquer sur le bouton du chatbot
- [ ] Envoyer un message : "Bonjour"
- [ ] Recevoir une réponse

**Test via curl :**
```bash
curl -X POST https://zyatria-global.pages.dev/api/ai/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"Bonjour, comment ça va?"}'
```

**Résultat attendu :**
```json
{
  "response": "Bonjour ! Je vais bien, merci..."
}
```

- [ ] Réponse reçue
- [ ] Pas d'erreur 500
- [ ] Temps de réponse < 5 secondes

---

### 4. Stripe (Paiements)

**Test de connexion :**
```bash
curl https://zyatria-global.pages.dev/api/stripe/test
```

**Résultat attendu :**
```json
{
  "status": "ok",
  "stripe": "connected"
}
```

- [ ] Status OK
- [ ] Pas d'erreur

**Test des boutons de paiement :**
- [ ] Aller sur `/pricing`
- [ ] Cliquer sur "Commencer" (plan Starter)
- [ ] Vérifier que la page Stripe s'ouvre
- [ ] URL commence par `buy.stripe.com`
- [ ] Montant correct affiché
- [ ] **NE PAS PAYER** (sauf si vous voulez tester)

---

### 5. Formulaires (Formspree)

**Formulaire de contact :**
- [ ] Aller sur `/contact-simple`
- [ ] Remplir le formulaire :
  - Nom : Test
  - Email : votre@email.com
  - Message : Test de déploiement
- [ ] Soumettre
- [ ] Message de confirmation affiché
- [ ] Email reçu sur Formspree

**Formulaire de qualification :**
- [ ] Aller sur `/lead-qualification`
- [ ] Remplir le formulaire
- [ ] Soumettre
- [ ] Confirmation affichée

---

## 🔧 CONFIGURATION POST-DÉPLOIEMENT (10 minutes)

### 6. Webhook Stripe (CRITIQUE)

**⚠️ À FAIRE IMMÉDIATEMENT :**

1. **Aller sur Stripe Dashboard**
   - https://dashboard.stripe.com/webhooks

2. **Ajouter un endpoint**
   - Cliquer sur **Add endpoint**
   - URL : `https://zyatria-global.pages.dev/api/stripe/webhook`

3. **Sélectionner les événements**
   - [ ] `checkout.session.completed`
   - [ ] `payment_intent.succeeded`
   - [ ] `payment_intent.payment_failed`
   - [ ] `customer.subscription.created`
   - [ ] `customer.subscription.updated`
   - [ ] `customer.subscription.deleted`
   - [ ] `invoice.payment_succeeded`
   - [ ] `invoice.payment_failed`

4. **Copier le Signing Secret**
   - Format : `whsec_...`
   - [ ] Vérifier qu'il correspond à `STRIPE_WEBHOOK_SECRET` dans Cloudflare

5. **Tester le webhook**
   - Cliquer sur **Send test webhook**
   - [ ] Événement reçu avec succès

---

### 7. Vérifier les Variables Cloudflare

**Dashboard → Workers & Pages → zyatria-global → Settings → Environment Variables**

- [ ] `MISTRAL_API_KEY` présent
- [ ] `FORMSPREE_FORM_ID` présent
- [ ] `STRIPE_SECRET_KEY` présent (sk_live_...)
- [ ] `STRIPE_PUBLIC_KEY` présent (pk_live_...)
- [ ] `STRIPE_WEBHOOK_SECRET` présent (whsec_...)
- [ ] `CLAUDE_API_KEY` présent (optionnel)

**Total : 6 variables**

---

### 8. Logs et Monitoring

**Voir les logs en temps réel :**
```bash
wrangler pages deployment tail --project-name=zyatria-global
```

- [ ] Logs s'affichent
- [ ] Pas d'erreurs critiques
- [ ] Requêtes traitées correctement

**Vérifier les déploiements :**
```bash
wrangler pages deployment list --project-name=zyatria-global
```

- [ ] Déploiement actuel visible
- [ ] Status : Success
- [ ] URL de production active

---

## 📊 TESTS AVANCÉS (15 minutes)

### 9. Performance

**Test Lighthouse (Chrome DevTools) :**
- [ ] Ouvrir DevTools (F12)
- [ ] Onglet Lighthouse
- [ ] Lancer l'audit
- [ ] Performance > 90
- [ ] Accessibility > 90
- [ ] Best Practices > 90
- [ ] SEO > 90

**Test de vitesse :**
- [ ] https://pagespeed.web.dev/
- [ ] Entrer l'URL : https://zyatria-global.pages.dev
- [ ] Score mobile > 80
- [ ] Score desktop > 90

---

### 10. SEO

**Vérifications de base :**
- [ ] Titre de page correct
- [ ] Meta description présente
- [ ] Open Graph tags présents
- [ ] Favicon visible
- [ ] Sitemap accessible : `/sitemap.xml`
- [ ] Robots.txt accessible : `/robots.txt`

**Soumettre à Google :**
- [ ] Google Search Console
- [ ] Soumettre le sitemap
- [ ] Demander l'indexation

---

### 11. Sécurité

**Vérifications SSL :**
- [ ] HTTPS actif (cadenas vert)
- [ ] Certificat valide
- [ ] Pas d'avertissements de sécurité

**Vérifier les secrets :**
```bash
# Vérifier que .env n'est pas dans Git
git ls-files | grep .env
```
- [ ] Aucun résultat (bon signe)

**Headers de sécurité :**
```bash
curl -I https://zyatria-global.pages.dev
```
- [ ] `X-Content-Type-Options: nosniff`
- [ ] `X-Frame-Options: DENY`
- [ ] `Strict-Transport-Security` présent

---

### 12. Responsive Design

**Tester sur différents appareils :**
- [ ] Desktop (1920x1080)
- [ ] Laptop (1366x768)
- [ ] Tablet (768x1024)
- [ ] Mobile (375x667)

**Vérifier :**
- [ ] Navigation mobile fonctionne
- [ ] Texte lisible sur mobile
- [ ] Boutons cliquables (min 44x44px)
- [ ] Images s'adaptent
- [ ] Pas de scroll horizontal

---

## 🎯 OPTIMISATIONS RECOMMANDÉES (30 minutes)

### 13. Analytics

**Activer Cloudflare Analytics :**
- [ ] Dashboard → Analytics
- [ ] Enable Web Analytics
- [ ] Copier le code de tracking
- [ ] Ajouter dans `main.astro` (si souhaité)

**Configurer Google Analytics (optionnel) :**
- [ ] Créer une propriété GA4
- [ ] Ajouter le tracking code
- [ ] Vérifier que les événements sont trackés

---

### 14. Domaine Personnalisé (optionnel)

**Si vous avez un domaine :**
- [ ] Dashboard → Custom domains
- [ ] Add domain
- [ ] Suivre les instructions DNS
- [ ] Attendre la propagation (24-48h)
- [ ] Vérifier le SSL automatique

---

### 15. Monitoring et Alertes

**Configurer les alertes Cloudflare :**
- [ ] Dashboard → Notifications
- [ ] Activer les alertes pour :
  - Erreurs 5xx
  - Trafic inhabituel
  - Déploiements échoués

**Uptime monitoring (optionnel) :**
- [ ] UptimeRobot ou Pingdom
- [ ] Surveiller https://zyatria-global.pages.dev
- [ ] Alertes par email si down

---

## 🚨 TESTS DE PRODUCTION RÉELS

### 16. Test de Paiement Réel (ATTENTION)

**⚠️ VOUS ÊTES EN MODE LIVE - PAIEMENTS RÉELS**

**Test avec votre propre carte :**
1. [ ] Aller sur `/pricing`
2. [ ] Choisir le plan Starter (99€)
3. [ ] Cliquer sur "Commencer"
4. [ ] Remplir avec votre carte
5. [ ] **PAYER** (vous serez débité)
6. [ ] Vérifier dans Stripe Dashboard
7. [ ] Vérifier que le webhook a été reçu
8. [ ] **REMBOURSER** immédiatement si c'était un test

**Vérifications Stripe :**
- [ ] Paiement visible dans Dashboard
- [ ] Webhook reçu (Developers → Webhooks)
- [ ] Événement `checkout.session.completed`
- [ ] Pas d'erreurs

---

### 17. Test du Chatbot en Production

**Conversations de test :**
- [ ] "Quels sont vos services ?"
- [ ] "Combien coûte le plan Pro ?"
- [ ] "Comment fonctionne l'automatisation ?"
- [ ] "Puis-je avoir une démo ?"

**Vérifier :**
- [ ] Réponses cohérentes
- [ ] Temps de réponse < 5s
- [ ] Pas d'erreurs
- [ ] Contexte maintenu

---

### 18. Test des Formulaires en Production

**Envoyer un vrai formulaire :**
- [ ] Remplir avec de vraies infos
- [ ] Soumettre
- [ ] Vérifier l'email reçu sur Formspree
- [ ] Vérifier le format des données

---

## 📋 CHECKLIST FINALE

### Fonctionnalités Critiques

- [ ] ✅ Site accessible
- [ ] ✅ Chatbot fonctionne
- [ ] ✅ Paiements Stripe OK
- [ ] ✅ Webhooks configurés
- [ ] ✅ Formulaires fonctionnent
- [ ] ✅ Toutes les pages chargent
- [ ] ✅ Design correct
- [ ] ✅ Responsive OK
- [ ] ✅ SSL actif
- [ ] ✅ Performance > 80

### Configuration

- [ ] ✅ 6 variables configurées
- [ ] ✅ Webhook Stripe actif
- [ ] ✅ Logs accessibles
- [ ] ✅ Analytics activées (optionnel)
- [ ] ✅ Domaine configuré (optionnel)

### Sécurité

- [ ] ✅ .env non commité
- [ ] ✅ Secrets chiffrés
- [ ] ✅ HTTPS actif
- [ ] ✅ Headers de sécurité OK

---

## 🎉 FÉLICITATIONS !

Si toutes les cases sont cochées, votre site est **100% opérationnel** !

**Votre site est maintenant :**
- ✅ En ligne sur https://zyatria-global.pages.dev
- ✅ Sécurisé avec SSL
- ✅ Rapide avec CDN global
- ✅ Prêt à accepter des paiements
- ✅ Prêt à recevoir des leads

---

## 📞 PROCHAINES ÉTAPES

1. **Marketing**
   - Partager sur les réseaux sociaux
   - Envoyer à vos contacts
   - Campagnes publicitaires

2. **Contenu**
   - Ajouter des articles de blog
   - Créer des études de cas
   - Optimiser le SEO

3. **Monitoring**
   - Surveiller les analytics
   - Vérifier les paiements
   - Répondre aux leads

4. **Optimisation**
   - A/B testing
   - Améliorer les conversions
   - Optimiser les performances

---

**🚀 VOTRE SITE EST EN LIGNE ! BRAVO ! 🎉**
