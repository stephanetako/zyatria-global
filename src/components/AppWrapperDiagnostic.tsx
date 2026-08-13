import React, { useState, useEffect } from 'react';
import { LanguageProvider } from '../lib/language-context';

const AppWrapperDiagnostic: React.FC = () => {
  const [loadedComponents, setLoadedComponents] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log('🔍 AppWrapperDiagnostic chargé');
    setLoadedComponents(['LanguageProvider']);
  }, []);

  const testComponent = async (name: string, loader: () => Promise<any>) => {
    try {
      console.log(`⏳ Chargement de ${name}...`);
      await loader();
      console.log(`✅ ${name} chargé avec succès`);
      setLoadedComponents(prev => [...prev, name]);
    } catch (err) {
      const errorMsg = `❌ Erreur lors du chargement de ${name}: ${err}`;
      console.error(errorMsg);
      setError(errorMsg);
    }
  };

  useEffect(() => {
    const loadComponents = async () => {
      await testComponent('NavigationDesignSystem', () => import('./NavigationDesignSystem'));
      await testComponent('HeroDesignSystem', () => import('./HeroDesignSystem'));
      await testComponent('TrustStatsSimple', () => import('./TrustStatsSimple'));
      await testComponent('Services', () => import('./Services'));
      await testComponent('MicroAgents', () => import('./MicroAgents'));
      await testComponent('RoadmapDesignSystem', () => import('./RoadmapDesignSystem'));
      await testComponent('Pricing', () => import('./Pricing'));
      await testComponent('TestimonialsDesignSystem', () => import('./TestimonialsDesignSystem'));
      await testComponent('FAQDesignSystem', () => import('./FAQDesignSystem'));
      await testComponent('CTAFinal', () => import('./CTAFinal'));
      await testComponent('FooterDesignSystem', () => import('./FooterDesignSystem'));
      await testComponent('MistralChatBot', () => import('./MistralChatBot'));
    };

    loadComponents();
  }, []);

  return (
    <LanguageProvider>
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '40px 20px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          background: 'white',
          borderRadius: '20px',
          padding: '40px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
        }}>
          <h1 style={{
            color: '#667eea',
            marginBottom: '30px',
            fontSize: '2.5em',
            textAlign: 'center'
          }}>
            🔍 Diagnostic des Composants
          </h1>

          {error && (
            <div style={{
              background: '#fef2f2',
              borderLeft: '4px solid #ef4444',
              padding: '20px',
              marginBottom: '20px',
              borderRadius: '8px',
              color: '#991b1b'
            }}>
              <h3>❌ Erreur détectée</h3>
              <p style={{ marginTop: '10px', fontFamily: 'monospace' }}>{error}</p>
            </div>
          )}

          <div style={{
            background: '#f0f9ff',
            borderLeft: '4px solid #3b82f6',
            padding: '20px',
            marginBottom: '20px',
            borderRadius: '8px'
          }}>
            <h3 style={{ color: '#1e40af', marginBottom: '10px' }}>
              ✅ Composants chargés: {loadedComponents.length}/13
            </h3>
            <div style={{ marginTop: '15px' }}>
              {loadedComponents.map((comp, index) => (
                <div key={index} style={{
                  padding: '10px',
                  margin: '5px 0',
                  background: '#dcfce7',
                  borderRadius: '6px',
                  color: '#166534',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <span style={{ fontSize: '1.2em' }}>✓</span>
                  <span style={{ fontWeight: '600' }}>{comp}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            background: '#fffbeb',
            border: '2px solid #fbbf24',
            padding: '20px',
            borderRadius: '10px',
            marginTop: '20px'
          }}>
            <h4 style={{ marginBottom: '10px', color: '#92400e' }}>📋 Informations</h4>
            <p style={{ color: '#78350f', lineHeight: '1.6' }}>
              Ce diagnostic charge chaque composant un par un pour identifier celui qui cause le problème.
              Vérifiez la console du navigateur pour plus de détails.
            </p>
          </div>

          <button
            onClick={() => window.location.href = '/'}
            style={{
              background: '#667eea',
              color: 'white',
              border: 'none',
              padding: '15px 30px',
              borderRadius: '10px',
              fontSize: '1.1em',
              fontWeight: '600',
              cursor: 'pointer',
              width: '100%',
              marginTop: '20px',
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
            🏠 Retour à l'accueil
          </button>
        </div>
      </div>
    </LanguageProvider>
  );
};

export default AppWrapperDiagnostic;
