import React from 'react';

export default function LandingPage({ onStart, onViewGallery }) {
    return (
        <div className="landing-container animate-fade-in" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', textAlign: 'center', padding: '2rem' }}>
            <div className="glass-panel" style={{ maxWidth: '600px' }}>
                <h1 className="title-glow" style={{ fontSize: '4rem' }}>¿Qué Therian Eres?</h1>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: '1.6' }}>
                    Basado en ciencia (es broma, basado en 100% vibras). Responde este test y descubre qué animal espiritual te representa en tus peores momentos.
                </p>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <button className="btn-primary" onClick={onStart}>
                        Comenzar el Despertar 🐾
                    </button>

                    <button
                        onClick={onViewGallery}
                        style={{
                            background: 'transparent',
                            border: '2px solid rgba(255,255,255,0.2)',
                            color: 'var(--text-main)',
                            padding: '1rem 2.5rem',
                            borderRadius: '50px',
                            fontSize: '1.1rem',
                            fontWeight: 600,
                            fontFamily: 'Outfit, sans-serif',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                        }}
                    >
                        Ver la Therian Wiki 📖
                    </button>
                </div>
            </div>
        </div>
    );
}
