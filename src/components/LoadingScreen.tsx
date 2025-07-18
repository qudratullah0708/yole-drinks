import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + Math.random() * 12;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-fun">
      <div className="text-center relative">
        {/* Floating background elements */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-vibrant-pink/20 rounded-full animate-float-gentle" />
        <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-vibrant-blue/20 rounded-full animate-bounce-fun" />
        <div className="absolute top-10 -right-10 w-24 h-24 bg-secondary/20 rounded-full animate-wiggle" />
        
        <div className="relative mb-8">
          {/* Main logo container with liquid effect */}
          <div className="w-40 h-40 mx-auto bg-gradient-hero rounded-full animate-pulse-glow flex items-center justify-center relative overflow-hidden animate-liquid-flow">
            <div className="w-28 h-28 bg-card rounded-full flex items-center justify-center shadow-vibrant z-10">
              <span className="text-primary font-playful font-bold text-4xl animate-bounce-fun">Y</span>
            </div>
          </div>
        </div>
        
        <h2 className="font-playful text-5xl font-bold text-white mb-2 animate-bounce-fun" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
          Yolé
        </h2>
        <p className="font-modern text-xl text-white/90 mb-6 animate-wiggle">
          Drinks
        </p>
        
        {/* Fun progress bar */}
        <div className="w-80 mx-auto bg-white/20 rounded-full h-4 overflow-hidden backdrop-blur-sm border border-white/30">
          <div 
            className="h-full bg-gradient-drinks transition-all duration-500 ease-out rounded-full relative animate-pulse-glow"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-white/30 rounded-full animate-pulse" />
          </div>
        </div>
        
        <p className="text-white/80 mt-6 font-modern animate-bounce-gentle">
          🥤 Mixing up something delicious... {Math.round(progress)}%
        </p>
      </div>
    </div>
  );
};