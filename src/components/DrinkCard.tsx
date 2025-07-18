import { Card } from "@/components/ui/card";
import { useState } from "react";

interface DrinkCardProps {
  title: string;
  description: string;
  image: string;
  price?: string;
  isNew?: boolean;
  animationDelay?: number;
  flavor?: string;
  ingredients?: string[];
}

export const DrinkCard = ({ 
  title, 
  description, 
  image, 
  price, 
  isNew = false,
  animationDelay = 0,
  flavor,
  ingredients = []
}: DrinkCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="group relative overflow-hidden bg-card border-2 border-transparent hover:border-primary/30 hover-lift hover-glow transition-all duration-500 animate-slide-up-stagger cursor-pointer"
      style={{ animationDelay: `${animationDelay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isNew && (
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-gradient-drinks text-white px-4 py-2 rounded-full text-sm font-playful font-bold animate-bounce-fun shadow-vibrant">
            NEW!
          </span>
        </div>
      )}
      
      {/* Floating background elements on hover */}
      {isHovered && (
        <>
          <div className="absolute top-6 left-6 w-8 h-8 bg-vibrant-pink/30 rounded-full animate-float-gentle" />
          <div className="absolute bottom-8 right-8 w-6 h-6 bg-vibrant-blue/30 rounded-full animate-bounce-fun" />
          <div className="absolute top-1/2 left-8 w-4 h-4 bg-secondary/30 rounded-full animate-wiggle" />
        </>
      )}
      
      <div className="aspect-[4/5] overflow-hidden relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
        />
        
        {/* Gradient overlay on hover */}
        <div className={`absolute inset-0 bg-gradient-fun opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
        
        {flavor && (
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-modern font-semibold text-foreground shadow-card">
            {flavor}
          </div>
        )}
      </div>
      
      <div className="p-6 relative">
        <h3 className="text-xl font-playful font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm font-modern leading-relaxed mb-4">
          {description}
        </p>
        
        {ingredients.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {ingredients.map((ingredient, index) => (
              <span 
                key={index}
                className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full font-modern"
              >
                {ingredient}
              </span>
            ))}
          </div>
        )}
        
        {price && (
          <div className="flex items-center justify-between">
            <span className="text-2xl font-playful font-bold text-primary animate-pulse-glow">{price}</span>
            <button className="bg-gradient-drinks text-white px-6 py-3 rounded-xl font-modern font-semibold hover-bounce transition-all duration-300 shadow-vibrant hover:shadow-glow">
              Try Now! 🥤
            </button>
          </div>
        )}
      </div>
    </Card>
  );
};