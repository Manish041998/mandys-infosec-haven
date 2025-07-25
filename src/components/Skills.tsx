import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Security Tools",
      skills: [
        "Nessus", "Metasploit", "Nmap", "Wireshark", "Burp Suite",
        "OWASP ZAP", "Qualys", "Rapid7", "Splunk", "ELK Stack"
      ]
    },
    {
      category: "Programming & Scripting",
      skills: [
        "Python", "PowerShell", "Bash", "SQL", "JavaScript",
        "C++", "Go", "Regex", "JSON", "XML"
      ]
    },
    {
      category: "Frameworks & Standards",
      skills: [
        "NIST", "ISO 27001", "OWASP", "CIS Controls", "COBIT",
        "SOC 2", "PCI DSS", "HIPAA", "GDPR", "MITRE ATT&CK"
      ]
    },
    {
      category: "Cloud & Infrastructure",
      skills: [
        "AWS Security", "Azure Security", "GCP Security", "Docker",
        "Kubernetes", "Terraform", "Ansible", "Jenkins", "Git", "Linux"
      ]
    }
  ];

  const certifications = [
    "CISSP - Certified Information Systems Security Professional",
    "CEH - Certified Ethical Hacker",
    "GSEC - GIAC Security Essentials",
    "Security+ - CompTIA Security+",
    "CCSP - Certified Cloud Security Professional"
  ];

  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-accent bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto mb-8 rounded-full" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technical expertise across security tools, programming languages, 
            and industry-standard frameworks.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card border-border hover:border-cyber-glow/50 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-cyber-glow">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="text-xs hover:bg-cyber-glow/20 hover:text-cyber-glow transition-colors duration-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <Card className="p-8 bg-card border-border">
          <h3 className="text-2xl font-semibold mb-6 text-center text-cyber-glow">
            Professional Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors duration-200"
              >
                <div className="w-3 h-3 bg-cyber-glow rounded-full flex-shrink-0" />
                <span className="text-sm text-foreground font-medium">
                  {cert}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Skills;