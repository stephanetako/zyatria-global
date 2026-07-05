# 📞 GUIDE D'ACTIVATION TWILIO

## 🎯 QUAND ACTIVER ?

✅ **Après ta première vente** (pour valider le besoin)  
✅ **Quand tu veux offrir un support téléphonique premium**  
✅ **Pour te différencier de la concurrence**  

---

## 💰 COÛTS TWILIO

| Service | Prix |
|---------|------|
| **Numéro de téléphone** | ~1€/mois |
| **Appels entrants** | ~0.01€/minute |
| **Transcription** | ~0.05€/minute |
| **Total estimé** | ~15-30€/mois (50-100 appels) |

---

## 🚀 ÉTAPES D'ACTIVATION (30 minutes)

### **ÉTAPE 1 : Créer un compte Twilio**

1. Va sur : https://www.twilio.com/try-twilio
2. Inscris-toi (tu reçois **15$ de crédit gratuit**)
3. Vérifie ton email et ton numéro de téléphone

---

### **ÉTAPE 2 : Acheter un numéro de téléphone**

1. Dans le dashboard Twilio, va dans **Phone Numbers** → **Buy a Number**
2. Choisis un pays (France, Canada, etc.)
3. Filtre par **Voice** (capacité d'appel)
4. Achète le numéro (~1€/mois)

**Exemple de numéros :**
- 🇫🇷 France : +33 1 XX XX XX XX
- 🇨🇦 Canada : +1 514 XXX XXXX
- 🇺🇸 USA : +1 555 XXX XXXX

---

### **ÉTAPE 3 : Récupérer tes clés API**

1. Va dans **Account** → **API keys & tokens**
2. Copie :
   - **Account SID** (commence par `AC...`)
   - **Auth Token** (clique sur "Show" pour le voir)

---

### **ÉTAPE 4 : Ajouter les clés dans .env**

Ouvre ton fichier `.env` et ajoute :

```env
# Twilio Configuration
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_PHONE_NUMBER=+33123456789
```

---

### **ÉTAPE 5 : Déployer ton site**

Twilio a besoin d'une **URL publique** pour fonctionner.

**Option A : Cloudflare Workers (Recommandé)**
```bash
npm run build
npx wrangler deploy
```

**Option B : Autre hébergeur**
- Vercel
- Netlify
- Railway

**Note ton URL publique** : `https://ton-site.workers.dev`

---

### **ÉTAPE 6 : Configurer le webhook Twilio**

1. Retourne dans Twilio → **Phone Numbers** → **Manage** → **Active numbers**
2. Clique sur ton numéro
3. Dans **Voice Configuration** :
   - **A CALL COMES IN** → Webhook
   - URL : `https://ton-site.workers.dev/api/twilio/voice`
   - Method : **HTTP POST**
4. Clique **Save**

---

### **ÉTAPE 7 : Décommenter le code**

Ouvre ces 3 fichiers et **décommente tout le code** :

1. `src/pages/api/twilio/voice.ts`
2. `src/pages/api/twilio/voice-handler.ts`
3. `src/pages/api/twilio/transcription.ts`

**Comment décommenter :**
- Supprime les `/*` au début
- Supprime les `*/` à la fin
- Supprime le code "dormant" du haut

---

### **ÉTAPE 8 : Redéployer**

```bash
npm run build
npx wrangler deploy
```

---

### **ÉTAPE 9 : Tester !**

1. **Appelle ton numéro Twilio** depuis ton téléphone
2. Tu devrais entendre : *"Bonjour et bienvenue chez ZyatrIA Global..."*
3. **Parle** (ex: "Je veux des informations sur vos services")
4. L'IA répond avec Mistral AI ! 🎉

---

## 🧪 TESTS RECOMMANDÉS

### **Test 1 : Appel simple**
- Appelle le numéro
- Écoute le message d'accueil
- Raccroche

### **Test 2 : Conversation**
- Appelle le numéro
- Pose une question
- Vérifie que l'IA répond intelligemment

### **Test 3 : Transcription**
- Appelle et parle
- Vérifie les logs dans Twilio Console
- Vérifie que la transcription est correcte

---

## 📊 ANALYTICS TWILIO

Une fois activé, tu auras accès à :

✅ **Nombre d'appels** par jour/semaine/mois  
✅ **Durée moyenne** des appels  
✅ **Transcriptions** automatiques  
✅ **Enregistrements** audio  
✅ **Coûts** en temps réel  

---

## 🎨 PERSONNALISATION

### **Changer la voix**

Dans `voice.ts`, ligne avec `<Say>` :

```xml
<Say voice="Polly.Celine" language="fr-FR">
```

**Voix disponibles (français) :**
- `Polly.Celine` (Femme, France)
- `Polly.Mathieu` (Homme, France)
- `Polly.Chantal` (Femme, Canada)

**Autres langues :**
- `Polly.Joanna` (Anglais US)
- `Polly.Conchita` (Espagnol)
- `Polly.Vitoria` (Portugais)

---

### **Modifier le message d'accueil**

Dans `voice.ts`, change :

```typescript
responseText = "Bonjour et bienvenue chez ZyatrIA Global. Comment puis-je vous aider aujourd'hui ?";
```

Par :

```typescript
responseText = "Bienvenue chez ZyatrIA. Dites-moi comment je peux vous aider.";
```

---

## 🔧 DÉPANNAGE

### **Problème : "Webhook Error"**

✅ Vérifie que ton site est bien déployé  
✅ Vérifie l'URL du webhook (pas de faute de frappe)  
✅ Vérifie que le code est décommenté  

### **Problème : "Pas de réponse vocale"**

✅ Vérifie que `MISTRAL_API_KEY` est dans `.env`  
✅ Vérifie les logs Cloudflare  
✅ Teste l'endpoint manuellement : `curl -X POST https://ton-site.com/api/twilio/voice`  

### **Problème : "Transcription vide"**

✅ Parle clairement et lentement  
✅ Vérifie que `transcribe="true"` est dans le code  
✅ Attends 1-2 minutes (la transcription est asynchrone)  

---

## 💎 FONCTIONNALITÉS AVANCÉES (Plus tard)

Une fois que ça marche, tu peux ajouter :

1. **Menu vocal** (IVR)
   - "Appuyez sur 1 pour les ventes"
   - "Appuyez sur 2 pour le support"

2. **Transfert d'appel**
   - Transférer vers un humain si nécessaire

3. **SMS de confirmation**
   - Envoyer un SMS après l'appel

4. **Analyse de sentiment**
   - Détecter si le client est satisfait/frustré

5. **CRM Integration**
   - Créer automatiquement un contact dans ton CRM

---

## 📞 SUPPORT

**Besoin d'aide ?**
- Documentation Twilio : https://www.twilio.com/docs/voice
- Support Twilio : https://support.twilio.com
- Communauté : https://www.twilio.com/community

---

## ✅ CHECKLIST FINALE

Avant de lancer en production :

- [ ] Compte Twilio créé
- [ ] Numéro de téléphone acheté
- [ ] Clés API ajoutées dans `.env`
- [ ] Site déployé publiquement
- [ ] Webhook configuré dans Twilio
- [ ] Code décommenté
- [ ] Tests réussis (3 appels minimum)
- [ ] Message d'accueil personnalisé
- [ ] Voix choisie
- [ ] Budget Twilio surveillé

---

## 🎉 RÉSULTAT FINAL

Tes clients pourront :

📞 **Appeler un vrai numéro**  
🤖 **Parler avec une IA intelligente**  
📝 **Recevoir des réponses personnalisées**  
🎙️ **Être enregistrés et transcrits**  
📊 **Générer des analytics pour toi**  

**C'est un argument de vente ÉNORME ! 🚀**

---

**Note :** Pour l'instant, garde le chatbot en simulation. Active Twilio quand tu es prêt ! 😊
