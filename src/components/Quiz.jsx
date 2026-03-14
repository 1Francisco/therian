import React, { useState } from 'react';
import { questions } from '../data/questions';

export default function Quiz({ onComplete }) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [scores, setScores] = useState({
        wolf: 0,
        fox: 0,
        cat: 0,
        dragon: 0,
        dog: 0,
        deer: 0
    });

    const handleOptionClick = (optionScores) => {
        // Add scores for the selected option
        const newScores = { ...scores };
        Object.keys(optionScores).forEach(key => {
            newScores[key] += optionScores[key];
        });
        setScores(newScores);

        // Next question or complete
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            onComplete(newScores);
        }
    };

    const currentQ = questions[currentQuestion];
    const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;

    return (
        <div className="quiz-container animate-fade-in" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '2rem' }}>
            <div className="glass-panel" style={{ maxWidth: '700px', width: '100%' }}>

                {/* Progress bar */}
                <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', marginBottom: '2rem', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${progressPercentage}%`, background: 'var(--primary-accent)', transition: 'width 0.5s ease' }}></div>
                </div>

                <h2 style={{ fontSize: '1.8rem', marginBottom: '2rem', fontWeight: 600 }}>
                    {currentQ.text}
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {currentQ.options.map((option, index) => (
                        <button
                            key={index}
                            className="quiz-option delay-1"
                            onClick={() => handleOptionClick(option.scores)}
                            style={{
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                padding: '1.2rem',
                                borderRadius: '16px',
                                color: 'var(--text-main)',
                                textAlign: 'left',
                                fontSize: '1.1rem',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                fontFamily: 'Outfit, sans-serif'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.borderColor = 'var(--primary-accent)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                                e.currentTarget.style.transform = 'none';
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                            }}
                        >
                            {option.text}
                        </button>
                    ))}
                </div>

                <div style={{ marginTop: '1.5rem', textAlign: 'right', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    Pregunta {currentQuestion + 1} de {questions.length}
                </div>
            </div>
        </div>
    );
}
