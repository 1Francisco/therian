import React from 'react';
import { therianResults } from '../data/questions';

export default function Gallery({ onBack }) {
    return (
        <div className="gallery-container animate-fade-in" style={{ padding: '3rem 1rem', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

            <div style={{ width: '100%', maxWidth: '1000px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                <h2 className="title-glow" style={{ fontSize: '2.5rem', margin: 0 }}>Therian Wiki</h2>
                <button
                    onClick={onBack}
                    style={{
                        background: 'rgba(255,255,255,0.1)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        color: 'white',
                        padding: '0.8rem 1.5rem',
                        borderRadius: '50px',
                        cursor: 'pointer',
                        fontFamily: 'Outfit, sans-serif',
                        fontWeight: 600,
                        transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                >
                    &larr; Volver
                </button>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '2rem',
                width: '100%',
                maxWidth: '1000px'
            }}>
                {Object.entries(therianResults).map(([key, data], index) => (
                    <div key={key} className="glass-panel" style={{
                        padding: '2rem',
                        borderTop: `4px solid ${data.color}`,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        animationDelay: `${index * 0.1}s`,
                        animationName: 'fadeIn',
                        animationDuration: '0.8s',
                        animationFillMode: 'both'
                    }}>
                        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{data.emoji}</div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: data.color }}>{data.name}</h3>
                        <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                            {data.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
