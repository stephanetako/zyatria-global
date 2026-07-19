// Test direct de la clé API Mistral
import 'dotenv/config';

const MISTRAL_API_KEY = process.env.MISTRAL_API_KEY;

console.log('═══════════════════════════════════════════════════════════════');
console.log('           🧪 TEST DIRECT API MISTRAL');
console.log('═══════════════════════════════════════════════════════════════');
console.log('');

if (!MISTRAL_API_KEY) {
  console.log('❌ MISTRAL_API_KEY non trouvée dans .env');
  process.exit(1);
}

console.log(`📋 Clé configurée : ${MISTRAL_API_KEY.substring(0, 10)}...${MISTRAL_API_KEY.slice(-4)}`);
console.log('');
console.log('🚀 Envoi d\'une requête de test à l\'API Mistral...');
console.log('');

const testMessage = {
  model: 'mistral-small-latest',
  messages: [
    {
      role: 'user',
      content: 'Réponds simplement "OK" si tu me reçois.'
    }
  ],
  max_tokens: 10
};

try {
  const response = await fetch('https://api.mistral.ai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${MISTRAL_API_KEY}`
    },
    body: JSON.stringify(testMessage)
  });

  console.log(`📡 Status HTTP : ${response.status} ${response.statusText}`);
  console.log('');

  if (!response.ok) {
    const errorText = await response.text();
    console.log('❌ ERREUR API :');
    console.log(errorText);
    console.log('');
    console.log('═══════════════════════════════════════════════════════════════');
    console.log('                    🔍 DIAGNOSTIC');
    console.log('═══════════════════════════════════════════════════════════════');
    console.log('');
    
    if (response.status === 401) {
      console.log('❌ Erreur 401 : Clé API invalide ou expirée');
      console.log('');
      console.log('Solutions :');
      console.log('1. Vérifier que vous avez copié la clé complète');
      console.log('2. Créer une nouvelle clé sur console.mistral.ai');
      console.log('3. Vérifier que votre compte Mistral est actif');
    } else if (response.status === 429) {
      console.log('⚠️  Erreur 429 : Limite de requêtes atteinte');
      console.log('');
      console.log('Solutions :');
      console.log('1. Attendre quelques minutes');
      console.log('2. Vérifier votre quota sur console.mistral.ai');
    } else {
      console.log(`⚠️  Erreur ${response.status} : Problème avec l'API`);
    }
    
    console.log('');
    console.log('═══════════════════════════════════════════════════════════════');
    process.exit(1);
  }

  const data = await response.json();
  
  console.log('✅ SUCCÈS ! Réponse reçue de Mistral :');
  console.log('');
  console.log(`💬 "${data.choices[0].message.content}"`);
  console.log('');
  console.log('══════════════════���════════════════════════════════════════════');
  console.log('                    ✅ CONFIGURATION VALIDÉE');
  console.log('═══════════════════════════════════════════════════════════════');
  console.log('');
  console.log('Votre clé API Mistral fonctionne parfaitement ! 🎉');
  console.log('');
  console.log('Prochaines étapes :');
  console.log('1. Ouvrir le preview du site');
  console.log('2. Cliquer sur l\'icône ✨ (chatbot)');
  console.log('3. Poser une question');
  console.log('4. Profiter de votre chatbot intelligent !');
  console.log('');
  console.log('═══════════════════════════════════════════════════════════════');

} catch (error) {
  console.log('❌ ERREUR RÉSEAU :');
  console.log(error.message);
  console.log('');
  console.log('Vérifiez votre connexion internet et réessayez.');
  console.log('');
  console.log('═══════════════════════════════════════════════════════════════');
  process.exit(1);
}
