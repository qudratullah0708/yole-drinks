import { useState } from 'react';
import { LoadingScreen } from '@/components/LoadingScreen';
import { DrinkCard } from '@/components/DrinkCard';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/drinks-hero.jpg';
import smoothieImage from '@/assets/smoothie-drink.jpg';
import coldBrewImage from '@/assets/cold-brew.jpg';
import fruitJuiceImage from '@/assets/fruit-juice.jpg';

const Index = () => {
  const [loading, setLoading] = useState(true);

  const drinks = [
    {
      title: "Tropical Smoothie",
      description: "A refreshing blend of tropical fruits with zero sugar added, packed with natural vitamins and antioxidants.",
      image: smoothieImage,
      price: "$8.99",
      isNew: true
    },
    {
      title: "Cold Brew Coffee",
      description: "Premium cold brew coffee with a smooth, rich flavor profile. Perfect for coffee enthusiasts.",
      image: coldBrewImage,
      price: "$6.99"
    },
    {
      title: "Fresh Citrus Juice",
      description: "Freshly squeezed citrus blend bursting with vitamin C and natural energy.",
      image: fruitJuiceImage,
      price: "$7.99",
      isNew: true
    }
  ];

  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-background/60" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <ScrollReveal>
            <h1 className="font-script text-6xl md:text-8xl lg:text-9xl text-primary mb-6 animate-glow-pulse">
              Yolé Drinks
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-xl md:text-2xl text-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Experience the perfect blend of taste and wellness with our premium drink collection
            </p>
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <Button size="lg" className="bg-gradient-hero text-primary-foreground font-bold px-8 py-4 text-lg hover:shadow-glow transition-all duration-500">
              Explore Our Drinks
            </Button>
          </ScrollReveal>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-bounce-in" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 right-16 w-16 h-16 bg-secondary/30 rounded-full animate-bounce-in" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-20 w-12 h-12 bg-accent/25 rounded-full animate-bounce-in" style={{ animationDelay: '2s' }} />
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-elegant text-4xl md:text-5xl font-bold text-foreground mb-6">
                Crafted with Passion
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Our drinks are carefully crafted using the finest ingredients, with zero sugar added 
                and packed with natural goodness. Each sip delivers pure refreshment and nutritional value.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal animation="slide-left" delay={100}>
              <div className="text-center p-8 bg-card rounded-2xl border border-border hover:shadow-card transition-all duration-500">
                <div className="w-16 h-16 bg-gradient-hero rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl">🌿</span>
                </div>
                <h3 className="font-elegant text-xl font-bold text-foreground mb-4">Natural Ingredients</h3>
                <p className="text-muted-foreground">Only the finest natural ingredients, no artificial additives</p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <div className="text-center p-8 bg-card rounded-2xl border border-border hover:shadow-card transition-all duration-500">
                <div className="w-16 h-16 bg-gradient-drinks rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl">💪</span>
                </div>
                <h3 className="font-elegant text-xl font-bold text-foreground mb-4">Zero Sugar Added</h3>
                <p className="text-muted-foreground">Naturally sweetened, guilt-free indulgence</p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="slide-right" delay={300}>
              <div className="text-center p-8 bg-card rounded-2xl border border-border hover:shadow-card transition-all duration-500">
                <div className="w-16 h-16 bg-gradient-premium rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="font-elegant text-xl font-bold text-foreground mb-4">Premium Quality</h3>
                <p className="text-muted-foreground">Exceptional taste and nutritional value in every bottle</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Drinks Collection */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-elegant text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our Premium Collection
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover our handcrafted selection of healthy, delicious drinks
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {drinks.map((drink, index) => (
              <DrinkCard 
                key={drink.title}
                {...drink}
                animationDelay={index * 200}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-elegant text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Experience Yolé?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have made the healthy choice
            </p>
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="font-bold px-8 py-4">
                Find Store Near You
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary-foreground font-bold px-8 py-4">
                Order Online
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Index;
