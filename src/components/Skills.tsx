import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "SIEM & XDR Platforms",
      skills: [
        "Microsoft Sentinel", "ELK Stack", "Microsoft Defender for Endpoint", 
        "CrowdStrike Falcon", "Sysmon", "Microsoft 365 Defender", "Exchange Online Protection"
      ]
    },
    {
      category: "Malware Analysis & Forensics",
      skills: [
        "Ghidra", "IDA Pro", "OllyDBG", "ANY.RUN", "PEStudio", "ProcMon",
        "strings", "FLARE VM", "Wireshark", "Autopsy"
      ]
    },
    {
      category: "Vulnerability & Penetration Testing",
      skills: [
        "Nessus", "Qualys", "Burp Suite", "Metasploit", "Kali Linux", 
        "Nmap", "PuTTY", "CVSS Scoring", "Patch Validation"
      ]
    },
    {
      category: "Scripting & Query Languages",
      skills: [
        "KQL (Kusto Query Language)", "PowerShell", "Bash", "Python", 
        "Sigma Rules", "Custom Detection Rules", "Hunting Queries"
      ]
    },
    {
      category: "Cloud & Virtualization",
      skills: [
        "Microsoft Azure", "Defender for Cloud", "Docker", "VMware",
        "Windows Server", "Linux (Ubuntu, Kali)", "NTFS/EXT File Systems"
      ]
    },
    {
      category: "Threat Intelligence & Frameworks",
      skills: [
        "MITRE ATT&CK Framework", "Threat Hunting", "Behavioral Analysis",
        "IOC Analysis", "TTP Mapping", "Kill Chain Analysis"
      ]
    }
  ];

  const certifications = [
    "SC-100 - Microsoft Cybersecurity Architect",
    "SC-200 - Security Operations Analyst Associate", 
    "AZ-500 - Azure Security Engineer Associate",
    "ISC2 CC - Certified in Cybersecurity",
    "Kusto Detective Agency - Case #1 Badge"
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