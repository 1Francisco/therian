import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import Quiz from './components/Quiz';
import Result from './components/Result';
import Gallery from './components/Gallery';

function App() {
  const [step, setStep] = useState('landing'); // 'landing', 'quiz', 'result', 'gallery'
  const [finalScores, setFinalScores] = useState(null);

  const startQuiz = () => {
    setStep('quiz');
  };

  const handleQuizComplete = (scores) => {
    setFinalScores(scores);
    setStep('result');
  };

  const restartQuiz = () => {
    setFinalScores(null);
    setStep('landing');
  };

  const openGallery = () => {
    setStep('gallery');
  };

  return (
    <div className="app">
      {step === 'landing' && <LandingPage onStart={startQuiz} onViewGallery={openGallery} />}
      {step === 'quiz' && <Quiz onComplete={handleQuizComplete} />}
      {step === 'result' && <Result scores={finalScores} onRestart={restartQuiz} />}
      {step === 'gallery' && <Gallery onBack={restartQuiz} />}

      {/* Background visual effects are already handled in index.css body pseudo-elements */}
    </div>
  );
}

export default App;
