import React from 'react';

export default function LandingPage({ onStart }) {
    return (
        <div className="landing-container animate-fade-in" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', textAlign: 'center', padding: '2rem' }}>
            <div className="glass-panel" style={{ maxWidth: '600px' }}>
                <h1 className="title-glow">Descubre tu Therian</h1>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: '1.6' }}>
                    ¿Sientes una conexión profunda e inexplicable con un animal? Responde a esta breve experiencia interactiva, basada en tus instintos, y descubre qué espíritu te acompaña.
                </p>

                <button className="btn-primary" onClick={onStart}>
                    Comenzar el Despertar
                </button>
            </div>
        </div>
    );
}
