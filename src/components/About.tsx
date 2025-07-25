import { Card } from "@/components/ui/card";
import { Shield, Search, Lock, AlertTriangle } from "lucide-react";

const About = () => {
  const expertise = [
    {
      icon: Shield,
      title: "Threat Analysis",
      description: "Advanced threat detection and analysis using cutting-edge security tools and methodologies."
    },
    {
      icon: Search,
      title: "Vulnerability Assessment",
      description: "Comprehensive security assessments to identify and mitigate potential vulnerabilities."
    },
    {
      icon: Lock,
      title: "Security Architecture",
      description: "Designing and implementing robust security frameworks and protocols."
    },
    {
      icon: AlertTriangle,
      title: "Incident Response",
      description: "Rapid response and forensic analysis for security incidents and breaches."
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto mb-8 rounded-full" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate information security professional with extensive experience in protecting 
            digital infrastructures and maintaining cybersecurity excellence across diverse environments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">My Journey</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                With over 5 years of experience in information security, I specialize in 
                identifying vulnerabilities, implementing security measures, and ensuring 
                compliance with industry standards.
              </p>
              <p>
                My expertise spans across various domains including network security, 
                application security, cloud security, and risk management. I'm committed 
                to staying ahead of emerging threats and continuously enhancing security postures.
              </p>
              <p>
                I believe in a proactive approach to cybersecurity, combining technical 
                expertise with strategic thinking to build comprehensive security solutions.
              </p>
            </div>
          </div>

          <div className="relative">
            <Card className="p-8 bg-card border-border shadow-subtle">
              <h4 className="text-xl font-semibold mb-4 text-cyber-glow">Core Values</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyber-glow rounded-full" />
                  Continuous Learning & Adaptation
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyber-glow rounded-full" />
                  Proactive Security Mindset
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyber-glow rounded-full" />
                  Ethical & Responsible Practices
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyber-glow rounded-full" />
                  Collaborative Problem Solving
                </li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map((item, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card border-border hover:border-cyber-glow transition-all duration-300 hover:shadow-glow group"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-cyber-glow/10 transition-colors duration-300">
                  <item.icon className="w-8 h-8 text-cyber-glow" />
                </div>
                <h4 className="text-lg font-semibold mb-3 text-foreground">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;