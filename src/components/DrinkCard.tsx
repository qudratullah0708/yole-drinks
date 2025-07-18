import { Card } from "@/components/ui/card";

interface DrinkCardProps {
  title: string;
  description: string;
  image: string;
  price?: string;
  isNew?: boolean;
  animationDelay?: number;
}

export const DrinkCard = ({ 
  title, 
  description, 
  image, 
  price, 
  isNew = false,
  animationDelay = 0
}: DrinkCardProps) => {
  return (
    <Card 
      className="group relative overflow-hidden bg-card border-border hover:shadow-premium transition-all duration-700 hover:scale-105 animate-float-up"
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      {isNew && (
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
            NEW
          </span>
        </div>
      )}
      
      <div className="aspect-[4/5] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-elegant font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {description}
        </p>
        {price && (
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-primary">{price}</span>
            <button className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg hover:bg-secondary/80 transition-colors duration-300">
              Order Now
            </button>
          </div>
        )}
      </div>
    </Card>
  );
};