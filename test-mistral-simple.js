// 🧪 Test Simple de l'API Mistral
// Usage: node test-mistral-simple.js

const MISTRAL_API_KEY = process.env.MISTRAL_API_KEY || 'sk-VOTRE_CLE_API_ICI';

async function testMistralAPI() {
  console.log('🧪 Test Simple de l\'API Mistral\n');
  console.log('================================\n');

  // Vérifier la clé API
  if (!MISTRAL_API_KEY || MISTRAL_API_KEY === 'sk-VOTRE_CLE_API_ICI') {
    console.error('❌ Erreur : Clé API non définie\n');
    console.log('📋 Pour définir la clé API :');
    console.log('   export MISTRAL_API_KEY="sk-VOTRE_CLE_API_ICI"\n');
    console.log('   Ou modifier directement dans ce fichier\n');
    process.exit(1);
  }

  const maskedKey = MISTRAL_API_KEY.substring(0, 10) + '...';
  console.log(`✅ Clé API trouvée : ${maskedKey}\n`);

  // Test 1 : Message simple
  console.log('📡 Test 1 : Message simple');
  console.log('-------------------------\n');

  try {
    const response1 = await fetch('https://api.mistral.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${MISTRAL_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'mistral-medium',
        messages: [
          { role: 'user', content: 'Bonjour !' }
        ],
        temperature: 0.7
      })
    });

    if (!response1.ok) {
      const error = await response1.json();
      console.error('❌ Erreur API:', response1.status);
      console.error('Détails:', JSON.stringify(error, null, 2));
      process.exit(1);
    }

    const data1 = await response1.json();
    console.log('✅ Succès !\n');
    console.log('📝 Réponse :');
    console.log(data1.choices[0].message.content);
    console.log('\n');

  } catch (error) {
    console.error('❌ Erreur:', error.message);
    process.exit(1);
  }

  // Test 2 : Question sur ZyatrIA
  console.log('📡 Test 2 : Question sur ZyatrIA');
  console.log('--------------------------------\n');

  try {
    const response2 = await fetch('https://api.mistral.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${MISTRAL_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'mistral-medium',
        messages: [
          {
            role: 'system',
            content: 'Tu es un assistant IA pour ZyatrIA Global, une entreprise canadienne spécialisée en agents IA et automatisation.'
          },
          {
            role: 'user',
            content: 'Quels sont vos services ?'
          }
        ],
        temperature: 0.7
      })
    });

    if (!response2.ok) {
      const error = await response2.json();
      console.error('❌ Erreur API:', response2.status);
      console.error('Détails:', JSON.stringify(error, null, 2));
      process.exit(1);
    }

    const data2 = await response2.json();
    console.log('✅ Succès !\n');
    console.log('📝 Réponse :');
    console.log(data2.choices[0].message.content);
    console.log('\n');

  } catch (error) {
    console.error('❌ Erreur:', error.message);
    process.exit(1);
  }

  // Test 3 : Conversation multi-tours
  console.log('📡 Test 3 : Conversation multi-tours');
  console.log('------------------------------------\n');

  try {
    const response3 = await fetch('https://api.mistral.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${MISTRAL_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'mistral-medium',
        messages: [
          { role: 'user', content: 'Quel est le prix du plan Business ?' },
          { role: 'assistant', content: 'Le plan Business de ZyatrIA Global coûte 697$/mois.' },
          { role: 'user', content: 'Et combien d\'agents IA sont inclus ?' }
        ],
        temperature: 0.7
      })
    });

    if (!response3.ok) {
      const error = await response3.json();
      console.error('❌ Erreur API:', response3.status);
      console.error('Détails:', JSON.stringify(error, null, 2));
      process.exit(1);
    }

    const data3 = await response3.json();
    console.log('✅ Succès !\n');
    console.log('📝 Réponse :');
    console.log(data3.choices[0].message.content);
    console.log('\n');

  } catch (error) {
    console.error('❌ Erreur:', error.message);
    process.exit(1);
  }

  // Résumé
  console.log('================================');
  console.log('📊 Résumé des tests');
  console.log('================================\n');
  console.log('✅ Tous les tests sont passés !\n');
  console.log('🎯 L\'API Mistral fonctionne correctement\n');
  console.log('🚀 Prochaines étapes :');
  console.log('   1. Tester le chatbot sur le site');
  console.log('   2. npm run dev');
  console.log('   3. Ouvrir http://localhost:4321');
  console.log('   4. Cliquer sur l\'icône ✨ en bas à droite\n');
}

// Lancer le test
testMistralAPI().catch(error => {
  console.error('❌ Erreur fatale:', error);
  process.exit(1);
});
