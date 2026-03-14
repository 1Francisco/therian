import React, { useEffect, useState } from 'react';
import { therianResults } from '../data/questions';

export default function Result({ scores, onRestart }) {
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Calculamos el animal con el score más alto
        let maxAnimal = 'wolf';
        let maxScore = -1;

        for (const [animal, score] of Object.entries(scores)) {
            if (score > maxScore) {
                maxScore = score;
                maxAnimal = animal;
            }
        }

        setResult(therianResults[maxAnimal]);

        // Simulate thinking/calculating time for suspense
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, [scores]);

    if (loading) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
                <div className="glass-panel animate-fade-in" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Conectando con tu instinto...</h2>
                    <div className="spinner" style={{ margin: '0 auto', width: '50px', height: '50px', border: '5px solid rgba(255,255,255,0.1)', borderTopColor: 'var(--primary-accent)', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
                    <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
                </div>
            </div>
        );
    }

    return (
        <div className="result-container animate-fade-in" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '2rem' }}>
            <div className="glass-panel" style={{ maxWidth: '600px', textAlign: 'center', borderTop: `4px solid ${result.color}` }}>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.5rem' }}>
                    Tu lado salvaje es:
                </p>
                <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>{result.emoji}</div>
                <h1 className="title-glow" style={{ fontSize: '3rem' }}>{result.name}</h1>

                <p style={{ fontSize: '1.2rem', color: 'var(--text-main)', lineHeight: '1.6', marginBottom: '2.5rem' }}>
                    {result.description}
                </p>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <button className="btn-primary" onClick={onRestart} style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}>
                        Volver al inicio
                    </button>
                    <button className="btn-primary" onClick={() => alert('¡Función de compartir llegará pronto!')}>
                        Compartir Destino
                    </button>
                </div>
            </div>
        </div>
    );
}
