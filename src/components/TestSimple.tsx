import React from 'react';

const TestSimple: React.FC = () => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          ✅ React Fonctionne !
        </h1>
        <p style={{ fontSize: '1.5rem', opacity: 0.9 }}>
          Le problème vient d'un composant spécifique
        </p>
        <div style={{ 
          marginTop: '2rem', 
          padding: '1rem', 
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '0.5rem'
        }}>
          <p>Timestamp: {new Date().toLocaleTimeString()}</p>
        </div>
      </div>
    </div>
  );
};

export default TestSimple;
