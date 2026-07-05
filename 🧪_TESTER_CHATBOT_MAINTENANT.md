# 🧪 TESTER LE CHATBOT - GUIDE RAPIDE (2 MINUTES)

## 🚀 ÉTAPE 1 : Lancer le site

```bash
npm run dev
```

**Attends ce message :**
```
🚀 astro v5.x.x started in XXms

  ┃ Local    http://localhost:4321/
  ┃ Network  use --host to expose
```

---

## 🌐 ÉTAPE 2 : Ouvrir le site

Ouvre ton navigateur et va sur :

```
http://localhost:4321
```

---

## 🤖 ÉTAPE 3 : Trouver le bouton

Regarde **en bas à droite** de la page.

Tu devrais voir un **bouton vert rond** avec 🤖

---

## 🖱️ ÉTAPE 4 : Ouvrir le chat

**Clique sur le bouton 🤖**

Une fenêtre devrait s'ouvrir avec :
- 3 onglets en haut : **Chat | Email | Appel**
- Un message de bienvenue du bot
- Un champ de texte en bas

---

## 💬 ÉTAPE 5 : Tester le Chat

1. **Clique sur l'onglet "Chat"** (normalement déjà sélectionné)

2. **Tape ce message :**
   ```
   Quels sont vos services ?
   ```

3. **Appuie sur "Envoyer"** (ou touche Entrée)

4. **Attends 2-3 secondes**

5. ✅ **Tu devrais voir une réponse intelligente** du bot !

---

## 📧 ÉTAPE 6 : Tester l'Email

1. **Clique sur l'onglet "Email"**

2. Tu devrais voir : *"Mode Email activé. Posez votre question !"*

3. **Tape ce message :**
   ```
   Je voudrais un devis pour automatiser mon CRM
   ```

4. **Appuie sur "Envoyer"**

5. ✅ **Tu devrais recevoir une réponse formelle** style email professionnel

---

## 📞 ÉTAPE 7 : Tester l'Appel

1. **Clique sur l'onglet "Appel"**

2. Tu devrais voir : *"Mode Appel activé. Posez votre question !"*

3. **Tape ce message :**
   ```
   Bonjour, je cherche des informations sur vos tarifs
   ```

4. **Appuie sur "Envoyer"**

5. ✅ **Tu devrais recevoir une réponse concise** (style conversation téléphonique)

---

## ✅ CHECKLIST DE VÉRIFICATION

Coche chaque élément :

- [ ] Le bouton 🤖 est visible en bas à droite
- [ ] Le bouton est vert et rond
- [ ] Cliquer sur le bouton ouvre la fenêtre
- [ ] La fenêtre a 3 onglets (Chat, Email, Appel)
- [ ] L'onglet "Chat" fonctionne
- [ ] L'onglet "Email" fonctionne
- [ ] L'onglet "Appel" fonctionne
- [ ] Les réponses sont intelligentes et pertinentes
- [ ] Les messages s'affichent correctement (utilisateur à droite, bot à gauche)
- [ ] Le scroll automatique fonctionne
- [ ] Le bouton "Envoyer" fonctionne
- [ ] La touche "Entrée" envoie le message
- [ ] Recliquer sur 🤖 ferme la fenêtre

---

## 🎨 TEST VISUEL

### **Le bouton devrait ressembler à ça :**

```
┌─────────────────────────────────────┐
│                                     │
│                                     │
│                                     │
│                                     │
│                              ┌───┐  │
│                              │🤖 │  │
│                              └───┘  │
└─────────────────────────────────────┘
```

### **La fenêtre de chat devrait ressembler à ça :**

```
┌─────────────────────────────────────┐
│  Chat  │  Email  │  Appel           │ ← Onglets
├─────────────────────────────────────┤
│                                     │
│  ┌─────────────────────────────┐   │
│  │ Bonjour ! Je suis votre     │   │ ← Message bot
│  │ assistant...                │   │
│  └─────────────────────────────┘   │
│                                     │
│              ┌──────────────────┐   │
│              │ Quels services ? │   │ ← Message utilisateur
│              └──────────────────┘   │
│                                     │
├─────────────────────────────────────┤
│ [Écrivez ici...        ] [Envoyer]  │ ← Input
└─────────────────────────────────────┘
```

---

## 🐛 PROBLÈMES COURANTS

### **Problème 1 : Pas de bouton 🤖**

**Solution :**
1. Vérifie que le serveur tourne (`npm run dev`)
2. Rafraîchis la page (Ctrl+R ou Cmd+R)
3. Vide le cache (Ctrl+Shift+R ou Cmd+Shift+R)

---

### **Problème 2 : Erreur "MISTRAL_API_KEY not found"**

**Solution :**
1. Ouvre le fichier `.env`
2. Vérifie que cette ligne existe :
   ```
   MISTRAL_API_KEY=ta_clé_ici
   ```
3. Redémarre le serveur :
   ```bash
   Ctrl+C (pour arrêter)
   npm run dev (pour relancer)
   ```

---

### **Problème 3 : Pas de réponse du bot**

**Solution :**
1. Ouvre la console du navigateur (F12)
2. Regarde s'il y a des erreurs en rouge
3. Vérifie que tu as bien la clé Mistral dans `.env`
4. Vérifie ta connexion internet

---

### **Problème 4 : Design cassé**

**Solution :**
1. Vide le cache du navigateur
2. Redémarre le serveur
3. Vérifie qu'il n'y a pas d'erreurs dans la console

---

## 📱 TEST MOBILE

### **Sur ton téléphone :**

1. **Trouve l'adresse IP de ton ordinateur :**
   ```bash
   # Sur Mac/Linux
   ifconfig | grep "inet "
   
   # Sur Windows
   ipconfig
   ```

2. **Lance le serveur avec --host :**
   ```bash
   npm run dev -- --host
   ```

3. **Sur ton téléphone, ouvre :**
   ```
   http://[TON_IP]:4321
   ```
   Exemple : `http://192.168.1.100:4321`

4. **Teste le chatbot** (il devrait être responsive)

---

## 🎯 TESTS AVANCÉS

### **Test 1 : Conversation longue**

Envoie 5-10 messages pour vérifier que :
- Le scroll fonctionne
- Les messages s'empilent correctement
- Pas de ralentissement

---

### **Test 2 : Messages longs**

Envoie un message très long (200+ caractères) pour vérifier que :
- Le texte ne déborde pas
- Le message reste lisible
- Le design reste propre

---

### **Test 3 : Changement d'onglet rapide**

Change d'onglet plusieurs fois rapidement pour vérifier que :
- Pas de bug visuel
- Les messages de confirmation s'affichent
- Pas de crash

---

### **Test 4 : Fermer/Ouvrir**

Clique sur 🤖 pour fermer, puis rouvre plusieurs fois pour vérifier que :
- L'historique est conservé
- Pas de bug d'affichage
- L'animation est fluide

---

## ✅ RÉSULTAT ATTENDU

Si tout fonctionne, tu devrais avoir :

✅ **Bouton visible** et cliquable  
✅ **3 onglets** fonctionnels  
✅ **Réponses intelligentes** de Mistral AI  
✅ **Design propre** et professionnel  
✅ **Responsive** (mobile + desktop)  
✅ **Animations fluides**  
✅ **Pas d'erreurs** dans la console  

---

## 🎉 SI TOUT MARCHE

**Félicitations ! 🎉**

Ton chatbot multicanal est **100% fonctionnel** !

**Prochaines étapes :**

1. ✅ **Personnalise les couleurs** (si besoin)
2. ✅ **Déploie sur Cloudflare** (voir `🚀_DEPLOIEMENT_CLOUDFLARE_FINAL.md`)
3. ✅ **Montre-le à tes clients** !

---

## 🆘 SI ÇA NE MARCHE PAS

**Envoie-moi :**

1. **Capture d'écran** de l'erreur
2. **Console du navigateur** (F12 → onglet Console)
3. **Terminal** (où tu as lancé `npm run dev`)

**Je vais t'aider à corriger ! 😊**

---

## 🚀 COMMANDE RAPIDE

```bash
# Tester maintenant
npm run dev

# Puis ouvre
http://localhost:4321
```

**Bonne chance ! 🍀**
