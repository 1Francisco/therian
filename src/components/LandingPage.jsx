import React, { useState } from 'react';

export default function LandingPage({ onStart, onViewGallery }) {
    const [clickCount, setClickCount] = useState(0);

    const handleTitleClick = () => {
        setClickCount((prev) => prev + 1);
    };

    const isEasterEggActive = clickCount >= 5;

    return (
        <div className={`landing-container animate-fade-in ${isEasterEggActive ? 'shake' : ''}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', textAlign: 'center', padding: '2rem' }}>

            {/* Easter Egg Style */}
            {isEasterEggActive && (
                <style>{`
          .shake {
            animation: shake 0.5s infinite;
          }
          @keyframes shake {
            0% { transform: translate(1px, 1px) rotate(0deg); }
            10% { transform: translate(-1px, -2px) rotate(-1deg); }
            20% { transform: translate(-3px, 0px) rotate(1deg); }
            30% { transform: translate(3px, 2px) rotate(0deg); }
            40% { transform: translate(1px, -1px) rotate(1deg); }
            50% { transform: translate(-1px, 2px) rotate(-1deg); }
            60% { transform: translate(-3px, 1px) rotate(0deg); }
            70% { transform: translate(3px, 1px) rotate(-1deg); }
            80% { transform: translate(-1px, -1px) rotate(1deg); }
            90% { transform: translate(1px, 2px) rotate(0deg); }
            100% { transform: translate(1px, -2px) rotate(-1deg); }
          }
        `}</style>
            )}

            <div className="glass-panel" style={{ maxWidth: '600px', transition: 'all 0.3s ease', transform: isEasterEggActive ? 'scale(1.05)' : 'none', borderColor: isEasterEggActive ? 'red' : 'rgba(255,255,255,0.1)' }}>

                <h1
                    className="title-glow"
                    onClick={handleTitleClick}
                    style={{
                        fontSize: '4rem',
                        cursor: 'pointer',
                        userSelect: 'none',
                        color: isEasterEggActive ? '#ef4444' : 'inherit'
                    }}>
                    {isEasterEggActive ? "¡DEJA DE TOCARME!" : "¿Qué Therian Eres?"}
                </h1>

                <p style={{ fontSize: '1.2rem', color: isEasterEggActive ? '#fca5a5' : 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: '1.6' }}>
                    {isEasterEggActive
                        ? "Me estás mareando. ¿Ya vas a hacer el test o solo vienes a molestar?"
                        : "Basado en ciencia (es broma, basado en 100% vibras). Responde este test y descubre qué animal espiritual te representa en tus peores momentos."
                    }
                </p>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <button className="btn-primary" onClick={onStart} style={{ background: isEasterEggActive ? 'red' : '' }}>
                        {isEasterEggActive ? "YA INICIA EL TEST 😡" : "Comenzar el Despertar 🐾"}
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
