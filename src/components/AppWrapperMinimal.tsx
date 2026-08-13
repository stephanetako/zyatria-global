import React from 'react';

const AppWrapperMinimal: React.FC = () => {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '60px 40px',
        maxWidth: '600px',
        width: '100%',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        textAlign: 'center'
      }}>
        <div style={{
          fontSize: '4em',
          marginBottom: '20px'
        }}>
          ✅
        </div>
        
        <h1 style={{
          color: '#667eea',
          fontSize: '2.5em',
          marginBottom: '20px',
          fontWeight: '700'
        }}>
          React Fonctionne !
        </h1>
        
        <p style={{
          color: '#6b7280',
          fontSize: '1.2em',
          lineHeight: '1.6',
          marginBottom: '30px'
        }}>
          Si vous voyez ce message, cela signifie que :
        </p>
        
        <div style={{
          background: '#f0f9ff',
          borderRadius: '12px',
          padding: '20px',
          marginBottom: '30px',
          textAlign: 'left'
        }}>
          <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ color: '#22c55e', fontSize: '1.5em' }}>✓</span>
            <span style={{ color: '#374151' }}>Astro compile correctement</span>
          </div>
          <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ color: '#22c55e', fontSize: '1.5em' }}>✓</span>
            <span style={{ color: '#374151' }}>React se charge sans erreur</span>
          </div>
          <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ color: '#22c55e', fontSize: '1.5em' }}>✓</span>
            <span style={{ color: '#374151' }}>Cloudflare Workers répond</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ color: '#22c55e', fontSize: '1.5em' }}>✓</span>
            <span style={{ color: '#374151' }}>Le CSS s'applique correctement</span>
          </div>
        </div>
        
        <div style={{
          background: '#fffbeb',
          border: '2px solid #fbbf24',
          borderRadius: '12px',
          padding: '20px',
          marginBottom: '30px',
          textAlign: 'left'
        }}>
          <h3 style={{ color: '#92400e', marginBottom: '10px', fontSize: '1.1em' }}>
            🔍 Prochaines étapes
          </h3>
          <p style={{ color: '#78350f', lineHeight: '1.6', fontSize: '0.95em' }}>
            Le problème vient probablement d'un composant spécifique. 
            Utilisez la page de diagnostic pour identifier lequel.
          </p>
        </div>
        
        <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
          <button
            onClick={() => window.location.href = '/diagnostic'}
            style={{
              background: '#667eea',
              color: 'white',
              border: 'none',
              padding: '15px 30px',
              borderRadius: '10px',
              fontSize: '1.1em',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = '#5568d3';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = '#667eea';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            🔍 Lancer le diagnostic
          </button>
          
          <button
            onClick={() => window.location.href = '/test-page-blanche.html'}
            style={{
              background: '#6b7280',
              color: 'white',
              border: 'none',
              padding: '15px 30px',
              borderRadius: '10px',
              fontSize: '1.1em',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = '#4b5563';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = '#6b7280';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            📋 Test HTML simple
          </button>
        </div>
        
        <div style={{
          marginTop: '30px',
          padding: '15px',
          background: '#f9fafb',
          borderRadius: '8px',
          fontSize: '0.9em',
          color: '#6b7280'
        }}>
          <strong>Heure du test:</strong> {new Date().toLocaleString('fr-FR')}
        </div>
      </div>
    </div>
  );
};

export default AppWrapperMinimal;
