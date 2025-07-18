import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-premium">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="font-script text-6xl md:text-8xl text-primary mb-4 animate-fade-in-scale">
            Yolé
          </h1>
          <p className="text-foreground/80 text-lg tracking-widest animate-float-up">
            PREMIUM DRINKS
          </p>
        </div>
        
        <div className="w-64 mx-auto">
          <div className="h-1 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-hero transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-muted-foreground text-sm mt-4 font-mono">
            {progress}%
          </p>
        </div>
      </div>
    </div>
  );
};