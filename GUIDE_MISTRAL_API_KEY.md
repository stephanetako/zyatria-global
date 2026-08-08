# 🔑 Guide : Obtenir et Configurer la Clé Mistral AI

## 🎯 Problème Actuel

Votre clé Mistral AI est **invalide** ou **révoquée**.

**Erreur détectée :**
```
Status HTTP: 401 Unauthorized
{"detail":"Unauthorized"}
```

---

## ✅ Solution : Obtenir une Nouvelle Clé

### **Étape 1 : Accéder à la Console Mistral AI**

1. Ouvrez votre navigateur
2. Allez sur : **https://console.mistral.ai/**
3. Connectez-vous ou créez un compte

---

### **Étape 2 : Créer une Nouvelle Clé API**

1. Dans le menu de gauche, cliquez sur **"API Keys"**
   - Ou allez directement sur : https://console.mistral.ai/api-keys/

2. Cliquez sur le bouton **"Create new key"**

3. Donnez un nom à votre clé :
   ```
   ZyatrIA-Production
   ```

4. **IMPORTANT** : Copiez immédiatement la clé générée
   - Elle commence généralement par : `Hy...` ou similaire
   - Elle ne sera plus visible après cette étape
   - Longueur typique : 90-100 caractères

---

### **Étape 3 : Remplacer la Clé dans `.env`**

1. Ouvrez le fichier `.env` à la racine de votre projet

2. Trouvez la ligne :
   ```env
   MISTRAL_API_KEY=votre_ancienne_cle
   ```

3. Remplacez par votre nouvelle clé :
   ```env
   MISTRAL_API_KEY=votre_nouvelle_cle_mistral
   ```

4. **Sauvegardez le fichier**

---

### **Étape 4 : Tester la Nouvelle Clé**

Exécutez cette commande pour vérifier :

```bash
bash /tmp/test-mistral.sh
```

Vous devriez voir :
```
✅ Clé valide - Test d'un message simple...
```

---

## 🔒 Sécurité

### **NE JAMAIS :**
- ❌ Partager votre clé API publiquement
- ❌ Commiter la clé dans Git
- ❌ L'envoyer par email non chiffré

### **TOUJOURS :**
- ✅ Garder la clé dans `.env` (déjà dans `.gitignore`)
- ✅ Utiliser des variables d'environnement
- ✅ Révoquer les clés compromises immédiatement

---

## 💰 Plans Mistral AI

### **Plan Gratuit (Expérimental)**
- ⚠️ Limité en requêtes
- ⚠️ Peut être révoqué sans préavis
- ⚠️ Pas recommandé pour la production

### **Plan Payant (Recommandé)**
- ✅ Quotas plus élevés
- ✅ Support prioritaire
- ✅ Clés stables
- 💰 À partir de ~7€/mois

**Voir les tarifs :** https://console.mistral.ai/billing/

---

## 🆘 Problèmes Courants

### **Erreur 401 Unauthorized**
- ❌ Clé invalide ou révoquée
- ✅ Solution : Créer une nouvelle clé

### **Erreur 429 Too Many Requests**
- ❌ Quota dépassé
- ✅ Solution : Attendre ou upgrader le plan

### **Erreur 500 Server Error**
- ❌ Problème côté Mistral
- ✅ Solution : Réessayer plus tard

---

## 📧 Support

Si vous avez des problèmes :
- 📚 Documentation : https://docs.mistral.ai/
- 💬 Discord : https://discord.gg/mistralai
- 📧 Email : support@mistral.ai

---

## 🚀 Après Configuration

Une fois la clé configurée :

1. **Tester localement :**
   ```bash
   npm run dev
   ```

2. **Tester le chatbot :**
   - Ouvrez http://localhost:4321
   - Cliquez sur l'icône du chatbot
   - Envoyez un message de test

3. **Déployer sur Cloudflare :**
   ```bash
   npm run build
   wrangler pages deploy dist
   ```

4. **Configurer sur Cloudflare Pages :**
   - Allez dans votre projet Cloudflare Pages
   - Settings → Environment variables
   - Ajoutez : `MISTRAL_API_KEY` = `votre_nouvelle_cle`

---

## ✅ Checklist

- [ ] Compte Mistral AI créé
- [ ] Nouvelle clé API générée
- [ ] Clé copiée et sauvegardée
- [ ] Fichier `.env` mis à jour
- [ ] Test local réussi
- [ ] Variable ajoutée sur Cloudflare Pages
- [ ] Déploiement effectué

---

**Dernière mise à jour :** 2025-01-XX
**Statut :** Clé actuelle invalide - Action requise
