import React, { useEffect, useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import { therianResults } from '../data/questions';

export default function Result({ scores, onRestart }) {
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(true);
    const [percentages, setPercentages] = useState([]);
    const [gifUrl, setGifUrl] = useState('');
    const cardRef = useRef(null);

    useEffect(() => {
        // 1. Calcular el total de puntos y porcentajes
        const totalPoints = Object.values(scores).reduce((acc, curr) => acc + curr, 0);
        const sortedScores = Object.entries(scores)
            .map(([animal, score]) => ({
                key: animal,
                data: therianResults[animal],
                percentage: totalPoints > 0 ? Math.round((score / totalPoints) * 100) : 0
            }))
            .sort((a, b) => b.percentage - a.percentage);

        setPercentages(sortedScores.slice(0, 3)); // Top 3 para mostrar en las barras

        // 2. Establecer el resultado principal (el más alto)
        const mainResult = sortedScores[0].data;
        setResult(mainResult);

        // 3. Seleccionar GIF aleatorio
        if (mainResult.gifs && mainResult.gifs.length > 0) {
            const randomGif = mainResult.gifs[Math.floor(Math.random() * mainResult.gifs.length)];
            setGifUrl(randomGif);
        }

        const timer = setTimeout(() => {
            setLoading(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, [scores]);

    const handleShare = async () => {
        const shareText = `Soy un ${result.name} en el Therian Test! ${result.emoji} \n\n${result.flags.green}\n\nConoce tu resultado aquí:`;

        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Mi Resultado Therian',
                    text: shareText,
                    url: window.location.href
                });
            } catch (err) {
                console.log('Error compartiendo:', err);
            }
        } else {
            try {
                await navigator.clipboard.writeText(shareText + ' ' + window.location.href);
                alert('¡Resultado copiado al portapapeles!');
            } catch (err) {
                alert('No se pudo copiar.');
            }
        }
    };

    const handleDownloadCard = async () => {
        if (!cardRef.current) return;
        try {
            // Configuraciones para una mejor resolución
            const canvas = await html2canvas(cardRef.current, { backgroundColor: '#0f111a', scale: 2, useCORS: true });
            const image = canvas.toDataURL('image/png', 1.0);
            const link = document.createElement('a');
            link.download = `therian-card-${result.name}.png`;
            link.href = image;
            link.click();
        } catch (err) {
            console.error('Error generando la carta', err);
            alert('Hubo un error al generar la imagen. Intenta otra vez.');
        }
    };

    if (loading) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
                <div className="glass-panel animate-fade-in" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Despertando a tu espíritu viral... 📱</h2>
                    <div className="spinner" style={{ margin: '0 auto', width: '50px', height: '50px', border: '5px solid rgba(255,255,255,0.1)', borderTopColor: 'var(--primary-accent)', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
                </div>
            </div>
        );
    }

    return (
        <div className="result-container animate-fade-in" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '2rem' }}>

            {/* Contenedor que será convertido a imagen (La Carta) */}
            <div
                ref={cardRef}
                className="glass-panel"
                style={{
                    maxWidth: '600px',
                    width: '100%',
                    textAlign: 'center',
                    borderTop: `6px solid ${result.color}`,
                    position: 'relative',
                    overflow: 'hidden',
                    marginBottom: '2rem'
                }}
            >
                <p style={{ fontSize: '1rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.5rem' }}>
                    Resultado Oficial
                </p>

                {gifUrl && (
                    <div style={{ width: '150px', height: '150px', margin: '0 auto', borderRadius: '50%', overflow: 'hidden', border: `4px solid ${result.color}`, marginBottom: '1rem', boxShadow: `0 0 20px ${result.color}88` }}>
                        <img src={gifUrl} alt="Therian Gif" style={{ width: '100%', height: '100%', objectFit: 'cover' }} crossOrigin="anonymous" />
                    </div>
                )}

                <h1 className="title-glow" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{result.name} {result.emoji}</h1>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-main)', lineHeight: '1.6', marginBottom: '2rem', fontStyle: 'italic' }}>
                    "{result.description}"
                </p>

                {/* Stats Grid: Flags & Compatibility */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem', textAlign: 'left' }}>
                    <div style={{ background: 'rgba(34, 197, 94, 0.1)', padding: '1rem', borderRadius: '12px', borderLeft: '4px solid #22c55e' }}>
                        <h4 style={{ color: '#22c55e', marginBottom: '0.5rem', fontSize: '0.9rem', textTransform: 'uppercase' }}>🟩 Green Flag</h4>
                        <p style={{ fontSize: '0.9rem', margin: 0 }}>{result.flags.green}</p>
                    </div>
                    <div style={{ background: 'rgba(239, 68, 68, 0.1)', padding: '1rem', borderRadius: '12px', borderLeft: '4px solid #ef4444' }}>
                        <h4 style={{ color: '#ef4444', marginBottom: '0.5rem', fontSize: '0.9rem', textTransform: 'uppercase' }}>🚩 Red Flag</h4>
                        <p style={{ fontSize: '0.9rem', margin: 0 }}>{result.flags.red}</p>
                    </div>
                </div>

                {/* Percentages Bar */}
                <div style={{ textAlign: 'left', marginBottom: '2rem' }}>
                    <h4 style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '0.9rem', textTransform: 'uppercase', textAlign: 'center' }}>Composición de tu Alma</h4>
                    {percentages.map((item, idx) => (
                        <div key={item.key} style={{ marginBottom: '0.8rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '0.3rem' }}>
                                <span>{item.data.emoji} {item.data.name.split(' ')[0]}</span>
                                <span>{item.percentage}%</span>
                            </div>
                            <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                                <div style={{ height: '100%', width: `${item.percentage}%`, background: item.data.color, transition: 'width 1s ease-out' }}></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Compatibility Footer */}
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    <div>🤝 <strong>BFF:</strong> {result.compatibilidad.best}</div>
                    <div style={{ marginTop: '0.3rem' }}>⚔️ <strong>Enemigo Mortal:</strong> {result.compatibilidad.worst}</div>
                </div>

                {/* Watermark for image */}
                <div style={{ position: 'absolute', bottom: '10px', right: '20px', fontSize: '0.7rem', opacity: 0.5 }}>
                    @TherianTestApp
                </div>
            </div>

            {/* Action Buttons (Not included in image capture) */}
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', width: '100%', maxWidth: '600px' }}>
                <button className="btn-primary" onClick={handleDownloadCard} style={{ background: 'linear-gradient(135deg, #10b981, #059669)', flex: '1 1 200px' }}>
                    Descargar Carta 📸
                </button>
                <button className="btn-primary" onClick={handleShare} style={{ flex: '1 1 200px' }}>
                    Enviar a amigxs 📤
                </button>
                <button
                    onClick={onRestart}
                    style={{
                        width: '100%',
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--text-muted)',
                        marginTop: '1rem',
                        cursor: 'pointer',
                        textDecoration: 'underline'
                    }}>
                    Volver a mentir en el test
                </button>
            </div>

        </div>
    );
}
