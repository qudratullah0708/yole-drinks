import { useState, useEffect } from 'react';
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
  const [activeSection, setActiveSection] = useState(0);

  // Scroll effect for section highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPos = window.scrollY + window.innerHeight / 2;
      
      sections.forEach((section, index) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        
        if (scrollPos >= top && scrollPos < top + height) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const specialtyDrinks = [
    {
      title: "Mango Pineapple Raspberry",
      description: "An exotic fusion of tropical mango, sweet pineapple, and tangy raspberry for an unforgettable flavor journey.",
      image: smoothieImage,
      price: "$9.99",
      isNew: true,
      flavor: "ZERO DAIRY • ZERO SUGAR",
      ingredients: ["🥭 Mango", "🍍 Pineapple", "🫐 Raspberry", "🌿 Natural Extracts"]
    },
    {
      title: "Mango Blue Island",
      description: "Dive into paradise with this stunning blue and orange combination that tastes as amazing as it looks.",
      image: coldBrewImage,
      price: "$8.99",
      flavor: "ZERO SUGAR",
      ingredients: ["🥭 Mango", "🏝️ Blue Spirulina", "🍊 Orange Zest", "🥥 Coconut"]
    },
    {
      title: "Pina Colada Bliss",
      description: "Transport yourself to a tropical beach with this creamy, dreamy pina colada experience.",
      image: fruitJuiceImage,
      price: "$9.49",
      isNew: true,
      flavor: "ZERO SUGAR",
      ingredients: ["🥥 Coconut", "🍍 Pineapple", "🌴 Tropical Blend", "💫 Natural Sweeteners"]
    }
  ];

  const benefits = [
    {
      icon: "🌱",
      title: "100% Natural",
      description: "Only the finest natural ingredients, no artificial additives",
      gradient: "bg-gradient-drinks"
    },
    {
      icon: "💪",
      title: "Zero Sugar Added",
      description: "Naturally sweetened, guilt-free indulgence",
      gradient: "bg-gradient-premium"
    },
    {
      icon: "✨",
      title: "Premium Quality",
      description: "Exceptional taste and nutritional value in every bottle",
      gradient: "bg-gradient-fun"
    },
    {
      icon: "🥛",
      title: "Zero Dairy Options",
      description: "Smooth, creamy texture made with oat milk alternatives",
      gradient: "bg-gradient-hero"
    }
  ];

  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="floating-element floating-element-1 top-20 left-20" />
          <div className="floating-element floating-element-2 top-40 right-32" />
          <div className="floating-element floating-element-3 bottom-40 left-40" />
          <div className="floating-element floating-element-1 bottom-20 right-20" />
          <div className="floating-element floating-element-2 top-60 left-60" />
        </div>
        
        {/* Liquid Background Shapes */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-vibrant-pink/10 rounded-full animate-liquid-flow" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-vibrant-blue/10 rounded-full animate-liquid-flow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/10 rounded-full animate-liquid-flow" style={{ animationDelay: '4s' }} />
        
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="mb-8">
              <h1 className="font-playful text-7xl md:text-9xl lg:text-[12rem] font-bold text-white mb-4 animate-bounce-fun leading-none" style={{ textShadow: '4px 4px 8px rgba(0,0,0,0.3)' }}>
                ENJOY!!!
              </h1>
              <div className="flex justify-center items-center gap-6 flex-wrap">
                <div className="animate-wiggle">🥤</div>
                <p className="font-modern text-2xl md:text-4xl text-white/90 font-bold">
                  Yolé Specialty Drinks
                </p>
                <div className="animate-bounce-fun">✨</div>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed font-modern">
              <span className="font-bold text-secondary">INSANELY DELICIOUS FLAVORS</span> that create 
              <span className="font-bold text-accent"> UNFORGETTABLE SIPS</span> and prove we're 
              <span className="font-bold text-vibrant-pink"> EXTRA TO BE JUST DRINKS!</span>
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-card text-foreground font-playful font-bold px-8 py-4 text-lg hover-bounce shadow-vibrant animate-pulse-color">
                🌟 Discover Flavors
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-foreground font-modern font-bold px-8 py-4 text-lg hover-lift">
                📱 Order Now
              </Button>
            </div>
          </ScrollReveal>
        </div>
        
        {/* Floating Drink Elements */}
        <div className="absolute top-32 left-16 w-16 h-16 text-4xl animate-float-gentle">🥭</div>
        <div className="absolute bottom-40 right-20 w-16 h-16 text-4xl animate-bounce-fun">🍓</div>
        <div className="absolute top-1/2 left-8 w-12 h-12 text-3xl animate-wiggle">🍍</div>
        <div className="absolute top-20 right-40 w-12 h-12 text-3xl animate-float-gentle">🥥</div>
        <div className="absolute bottom-60 left-32 w-14 h-14 text-3xl animate-bounce-fun">🫐</div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 relative">
        {/* Floating background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-vibrant-pink/10 rounded-full animate-float-gentle" />
        <div className="absolute bottom-20 right-16 w-24 h-24 bg-vibrant-blue/10 rounded-full animate-bounce-fun" />
        
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="font-playful text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
                OUR DRINKS ARE HERE TO 
                <span className="bg-gradient-drinks bg-clip-text text-transparent animate-pulse-glow block">
                  RULE
                </span>
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-modern">
                  We've got options that love you back. Enjoy our range of Zero Dairy drinks made with oat milk—smooth, creamy, and full of flavor. For those looking for even more balance, our Zero Dairy Zero Sugar Added drinks deliver the same great taste with Zero Sugar added. 
                  <span className="font-bold text-foreground">Pure satisfaction, no compromises.</span>
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={benefit.title} animation="fade-up" delay={index * 100}>
                <div className="group text-center p-8 bg-card rounded-3xl border-2 border-transparent hover:border-primary/30 hover-lift hover-glow transition-all duration-500 relative overflow-hidden">
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 ${benefit.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`} />
                  
                  <div className="relative z-10">
                    <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center text-6xl animate-bounce-fun group-hover:animate-wiggle">
                      {benefit.icon}
                    </div>
                    <h3 className="font-playful text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground font-modern leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Bottom CTA */}
          <ScrollReveal delay={600}>
            <div className="text-center mt-16">
              <div className="inline-flex items-center gap-4 bg-card px-8 py-4 rounded-full shadow-vibrant">
                <span className="font-modern font-bold text-foreground">ZERO DAIRY OPTIONS</span>
                <span className="text-muted-foreground">|</span>
                <span className="font-modern font-bold text-foreground">ZERO SUGAR ADDED</span>
                <span className="text-muted-foreground">|</span>
                <span className="font-modern font-bold text-foreground">LOW IN CALORIES</span>
                <span className="text-muted-foreground">|</span>
                <span className="font-modern font-bold text-primary">PREMIUM TASTE</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Specialty Drinks Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-background to-muted/50 relative">
        {/* Floating decorative elements */}
        <div className="absolute top-10 left-20 text-6xl animate-float-gentle">🌟</div>
        <div className="absolute top-40 right-10 text-5xl animate-bounce-fun">🎉</div>
        <div className="absolute bottom-20 left-10 text-4xl animate-wiggle">🚀</div>
        
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="font-playful text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
                SPECIALITY DRINKS
                <span className="bg-gradient-premium bg-clip-text text-transparent block animate-pulse-glow">
                  INSANELY
                </span>
                DELICIOUS FLAVORS
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-modern">
                They are not mainstream. They are Yolé. Experience flavors that create unforgettable sips and prove we're extra to be just drinks.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {specialtyDrinks.map((drink, index) => (
              <DrinkCard 
                key={drink.title}
                {...drink}
                animationDelay={index * 200}
              />
            ))}
          </div>

          {/* Fun Tagline Section */}
          <ScrollReveal delay={600}>
            <div className="mt-20 text-center">
              <div className="max-w-4xl mx-auto space-y-6">
                <div className="bg-secondary text-secondary-foreground px-8 py-4 rounded-full inline-block transform rotate-1 font-playful font-bold text-lg animate-wiggle">
                  FUN MEETS FLAVOUR
                </div>
                <div className="bg-card text-foreground px-8 py-4 rounded-full inline-block transform -rotate-1 font-playful font-bold text-lg animate-bounce-fun mx-4">
                  UNEXPECTED COMBOS
                </div>
                <div className="bg-primary text-primary-foreground px-8 py-4 rounded-full inline-block transform rotate-2 font-playful font-bold text-lg animate-float-gentle">
                  UNFORGETTABLE SIPS
                </div>
                <div className="block mt-8">
                  <div className="bg-gradient-fun text-white px-12 py-6 rounded-full inline-block font-playful font-bold text-xl animate-pulse-glow shadow-premium">
                    EXTRA TO BE JUST DRINKS
                  </div>
                </div>
                <p className="text-muted-foreground font-modern mt-8 text-lg">
                  and much more...
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Customer Love Section */}
      <section className="py-24 px-4 bg-primary/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="font-playful text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
                WHAT'S EVERYONE
                <span className="bg-gradient-hero bg-clip-text text-transparent block animate-pulse-glow">
                  SAYING
                </span>
              </h2>
              <div className="flex justify-center items-center gap-4 flex-wrap">
                <div className="animate-wiggle text-4xl">💝</div>
                <p className="text-xl text-muted-foreground font-modern">
                  Real stories from our amazing customers
                </p>
                <div className="animate-bounce-fun text-4xl">🌟</div>
              </div>
            </div>
          </ScrollReveal>

          {/* Floating testimonial cards would go here */}
          <ScrollReveal delay={200}>
            <div className="text-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="bg-card p-8 rounded-3xl hover-lift shadow-card border-2 border-transparent hover:border-primary/30 transition-all duration-500">
                  <div className="text-6xl mb-4 animate-bounce-fun">🤩</div>
                  <p className="font-modern text-foreground mb-4">"The Mango Pineapple Raspberry is incredible! I can't believe it's zero sugar - it tastes like pure tropical paradise!"</p>
                  <p className="font-playful font-bold text-primary">- Sarah M.</p>
                </div>
                <div className="bg-card p-8 rounded-3xl hover-lift shadow-card border-2 border-transparent hover:border-primary/30 transition-all duration-500">
                  <div className="text-6xl mb-4 animate-wiggle">😋</div>
                  <p className="font-modern text-foreground mb-4">"Finally found my go-to office drink! The Blue Island flavor is so refreshing and gives me energy without the sugar crash."</p>
                  <p className="font-playful font-bold text-primary">- Jake T.</p>
                </div>
                <div className="bg-card p-8 rounded-3xl hover-lift shadow-card border-2 border-transparent hover:border-primary/30 transition-all duration-500">
                  <div className="text-6xl mb-4 animate-float-gentle">🥳</div>
                  <p className="font-modern text-foreground mb-4">"These drinks are a game-changer! Zero dairy but still creamy, and the flavors are out of this world. Yolé rocks!"</p>
                  <p className="font-playful font-bold text-primary">- Emma R.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-vibrant-pink/5 rounded-full animate-float-gentle" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-vibrant-blue/5 rounded-full animate-bounce-fun" />
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-4 bg-gradient-fun relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full animate-liquid-flow" />
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-full animate-liquid-flow" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/10 rounded-full animate-liquid-flow" style={{ animationDelay: '4s' }} />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <h2 className="font-playful text-5xl md:text-7xl font-bold text-white mb-8 leading-tight" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
              Ready to Experience 
              <span className="block text-secondary animate-bounce-fun">
                The Yolé Magic?
              </span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-modern">
              Join thousands of happy customers who have discovered the perfect balance of 
              <span className="font-bold"> taste, health, and pure joy</span> in every sip! 🎉
            </p>
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-card text-foreground font-playful font-bold px-10 py-6 text-xl hover-bounce shadow-premium animate-pulse-glow">
                🗺️ Find Store Near You
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-foreground font-playful font-bold px-10 py-6 text-xl hover-lift">
                📱 Order Online Now
              </Button>
            </div>
          </ScrollReveal>
          
          {/* Fun floating elements */}
          <div className="absolute top-20 left-20 text-5xl animate-float-gentle">🌈</div>
          <div className="absolute bottom-20 right-20 text-5xl animate-bounce-fun">💫</div>
          <div className="absolute top-1/2 left-10 text-4xl animate-wiggle">⭐</div>
          <div className="absolute top-1/2 right-10 text-4xl animate-float-gentle">🎊</div>
        </div>
      </section>
    </div>
  );
};

export default Index;
