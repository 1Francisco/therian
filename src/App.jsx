import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import Quiz from './components/Quiz';
import Result from './components/Result';

function App() {
  const [step, setStep] = useState('landing'); // 'landing', 'quiz', 'result'
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

  return (
    <div className="app">
      {step === 'landing' && <LandingPage onStart={startQuiz} />}
      {step === 'quiz' && <Quiz onComplete={handleQuizComplete} />}
      {step === 'result' && <Result scores={finalScores} onRestart={restartQuiz} />}

      {/* Background visual effects already handled in index.css */}
    </div>
  );
}

export default App;
