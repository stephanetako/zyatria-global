# 🔑 GUIDE : Obtenir votre Clé API Mistral AI

## 🎯 ÉTAPES SIMPLES (5 MINUTES)

### **Étape 1 : Créer un compte Mistral**

1. Allez sur : **https://console.mistral.ai/**
2. Cliquez sur **"Sign Up"** (en haut à droite)
3. Inscrivez-vous avec :
   - Votre email professionnel
   - Ou connectez-vous avec Google/GitHub

### **Étape 2 : Vérifier votre email**

1. Ouvrez votre boîte email
2. Cliquez sur le lien de vérification
3. Retournez sur https://console.mistral.ai/

### **Étape 3 : Créer une clé API**

1. Une fois connecté, allez dans **"API Keys"** (menu de gauche)
2. Cliquez sur **"Create new key"**
3. Donnez un nom à votre clé : `ZyatrIA-Production`
4. Cliquez sur **"Create"**
5. **COPIEZ LA CLÉ IMMÉDIATEMENT** (vous ne pourrez plus la voir après !)

### **Étape 4 : Ajouter la clé dans votre projet**

1. Ouvrez le fichier `.env` à la racine de votre projet
2. Ajoutez cette ligne :

```env
MISTRAL_API_KEY=votre_clé_copiée_ici
```

**Exemple :**
```env
MISTRAL_API_KEY=sk-abc123def456ghi789jkl012mno345pqr678stu901vwx234yz
```

3. Sauvegardez le fichier

### **Étape 5 : Redémarrer le serveur**

```bash
# Arrêtez le serveur (Ctrl+C)
# Puis relancez :
npm run dev
```

---

## ✅ VÉRIFIER QUE ÇA FONCTIONNE

### **Test 1 : Ouvrir le site**

```
http://localhost:4321
```

### **Test 2 : Cliquer sur le chatbot**

- Bouton 💬 en bas à droite
- Tapez : "Bonjour"
- Vous devriez recevoir une réponse en quelques secondes !

### **Test 3 : Vérifier la console**

Si ça ne fonctionne pas :
1. Ouvrez la console du navigateur (F12)
2. Regardez s'il y a des erreurs
3. Vérifiez les logs du serveur

---

## 💰 CRÉDIT GRATUIT

### **Mistral offre 5€ de crédit gratuit !**

Ça représente environ :
- **12,500 conversations** avec Mistral Small
- **1,850 conversations** avec Mistral Medium
- **625 conversations** avec Mistral Large

**C'est largement suffisant pour tester et lancer ! 🎉**

---

## 🔒 SÉCURITÉ

### **⚠️ NE PARTAGEZ JAMAIS VOTRE CLÉ API !**

- ❌ Ne la commitez pas sur GitHub
- ❌ Ne la partagez pas par email
- ❌ Ne la mettez pas dans le code source
- ✅ Gardez-la dans `.env` (qui est dans `.gitignore`)

### **Si vous exposez votre clé par accident :**

1. Allez sur https://console.mistral.ai/api-keys/
2. Supprimez la clé compromise
3. Créez une nouvelle clé
4. Mettez à jour `.env`

---

## 📊 SURVEILLER VOTRE USAGE

### **Dashboard Mistral**

1. Allez sur : https://console.mistral.ai/usage/
2. Vous verrez :
   - Nombre de requêtes
   - Tokens utilisés
   - Coût estimé
   - Crédit restant

### **Alertes**

Configurez des alertes pour être prévenu quand :
- Vous atteignez 80% de votre crédit
- Vous dépassez un certain nombre de requêtes/jour

---

## 🎯 PROCHAINES ÉTAPES

Une fois la clé configurée :

1. ✅ Testez le chatbot
2. ✅ Personnalisez les réponses
3. ✅ Ajoutez des réponses FAQ
4. ✅ Déployez sur Cloudflare
5. ✅ Promouvez votre chatbot IA !

---

## 🐛 PROBLÈMES COURANTS

### **Erreur : "MISTRAL_API_KEY not found"**

**Solution :**
```bash
# Vérifiez que .env contient bien :
MISTRAL_API_KEY=sk-...

# Redémarrez le serveur :
npm run dev
```

### **Erreur : "401 Unauthorized"**

**Solution :**
- Votre clé est invalide
- Vérifiez qu'elle est bien copiée (pas d'espace avant/après)
- Créez une nouvelle clé si nécessaire

### **Erreur : "429 Too Many Requests"**

**Solution :**
- Vous avez dépassé le quota gratuit
- Ajoutez un moyen de paiement sur Mistral
- Ou attendez le reset mensuel

---

## 💳 AJOUTER UN MOYEN DE PAIEMENT (Optionnel)

Si vous dépassez le crédit gratuit :

1. Allez sur : https://console.mistral.ai/billing/
2. Cliquez sur **"Add payment method"**
3. Ajoutez votre carte bancaire
4. Configurez un budget mensuel (ex: 20€/mois)

**Rassurez-vous :** Mistral est très abordable !
- 1000 conversations = ~0.40€
- 10,000 conversations = ~4€

---

## 🎉 C'EST TOUT !

Vous avez maintenant :
- ✅ Un compte Mistral AI
- ✅ Une clé API fonctionnelle
- ✅ 5€ de crédit gratuit
- ✅ Un chatbot IA opérationnel

**Testez-le maintenant ! 🚀**

---

## 📞 LIENS UTILES

- **Console Mistral :** https://console.mistral.ai/
- **Documentation :** https://docs.mistral.ai/
- **Tarification :** https://mistral.ai/technology/#pricing
- **Support :** https://discord.gg/mistralai

---

**Besoin d'aide ? Demandez-moi ! 💬**
