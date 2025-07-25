import { Card } from "@/components/ui/card";
import { Shield, Search, Lock, AlertTriangle } from "lucide-react";

const About = () => {
  const expertise = [
    {
      icon: Shield,
      title: "Threat Hunting & Detection",
      description: "Advanced threat hunting using SIEM tools, custom KQL queries, and behavioral analysis for proactive threat identification."
    },
    {
      icon: Search,
      title: "Malware Analysis & Forensics",
      description: "Expert in static/dynamic malware analysis using tools like Ghidra, IDA Pro, ANY.RUN, and comprehensive digital forensics."
    },
    {
      icon: Lock,
      title: "Incident Response & SIEM",
      description: "Leading incident response operations with Microsoft Sentinel, ELK Stack, and coordinating cross-functional security teams."
    },
    {
      icon: AlertTriangle,
      title: "Vulnerability Management",
      description: "Comprehensive penetration testing and vulnerability assessments using Nessus, Burp Suite, Metasploit, and Kali Linux."
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
            <h3 className="text-2xl font-bold mb-6 text-foreground">Professional Journey</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Currently serving as an Information Security Analyst at Resillion, I manage 
                proactive threat detection and continuous monitoring across diverse client environments. 
                My expertise spans advanced SIEM tools (Sentinel, ELK), XDR platforms, and forensic analysis.
              </p>
              <p>
                Promoted from SOC Analyst L1 to L2 within a year at Atech, I've demonstrated 
                exceptional leadership in security operations. I specialize in malware analysis, 
                incident response, and developing custom detection rules using KQL and PowerShell.
              </p>
              <p>
                Recognized with the Best Employee Award at Resillion within six months, I continue 
                to expand into Detection Engineering while mentoring teams and enhancing security postures 
                through comprehensive vulnerability assessments and penetration testing.
              </p>
            </div>
          </div>

          <div className="relative">
            <Card className="p-8 bg-card border-border shadow-subtle">
              <h4 className="text-xl font-semibold mb-4 text-cyber-glow">Key Achievements</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyber-glow rounded-full" />
                  Best Employee Award at Resillion (6 months)
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyber-glow rounded-full" />
                  Promoted L1 → L2 SOC Analyst (1 year)
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyber-glow rounded-full" />
                  Microsoft Cybersecurity Architect Certified
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyber-glow rounded-full" />
                  Team Leadership & Detection Engineering
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