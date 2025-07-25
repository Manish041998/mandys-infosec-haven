import { Button } from "@/components/ui/button";
import { Mail, Shield, Code, Lock } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Cybersecurity background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-cyber" />
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 z-10">
        <Shield className="absolute top-20 left-20 w-8 h-8 text-cyber-glow opacity-30 animate-float" />
        <Code className="absolute top-40 right-32 w-6 h-6 text-cyber-glow-soft opacity-40 animate-float [animation-delay:1s]" />
        <Lock className="absolute bottom-32 left-16 w-7 h-7 text-cyber-glow opacity-25 animate-float [animation-delay:2s]" />
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-accent bg-clip-text text-transparent leading-tight">
            Sai Manish
          </h1>
          <div className="text-xl md:text-2xl text-cyber-glow-soft mb-4 font-medium">
            Information Security Specialist | Threat Hunter | Detection Engineer
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Experienced Cybersecurity Analyst with 3.5+ years specializing in threat detection, 
            incident response, penetration testing, and vulnerability management. Expert in SIEM, 
            XDR platforms, and malware analysis.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="cyber" size="lg" className="min-w-[200px]">
            <Mail className="w-5 h-5" />
            Get In Touch
          </Button>
          <Button variant="outline" size="lg" className="min-w-[200px] border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View My Work
          </Button>
        </div>

        {/* Stats or Quick Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-cyber-glow">3.5+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-cyber-glow">Microsoft</div>
            <div className="text-sm text-muted-foreground">Certified Expert</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-cyber-glow">SOC L2</div>
            <div className="text-sm text-muted-foreground">Team Leader</div>
          </div>
        </div>
      </div>

      {/* Subtle gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;