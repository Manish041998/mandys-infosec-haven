import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Award, TrendingUp } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Information Security Analyst",
      company: "Resillion",
      period: "June 2024 – Present",
      location: "India",
      achievements: [
        "Managed proactive threat detection using advanced SIEM tools (Sentinel, ELK)",
        "Led triage, forensic analysis, and incident response coordination",
        "Conducted comprehensive vulnerability assessments and penetration testing",
        "Authored MDR reports and security briefings for clients",
        "Developed Security Awareness Training and Simulated Phishing Campaigns",
        "Recognized with Best Employee Award within six months"
      ],
      skills: ["Microsoft Sentinel", "Forensic Analysis", "KnowBe4", "Burp Suite", "Metasploit"]
    },
    {
      title: "SOC Analyst L2",
      company: "Atech",
      period: "Dec 2022 – Feb 2024",
      location: "India", 
      achievements: [
        "Promoted from Level 1 to Level 2 within a year due to excellent performance",
        "Handled daily cybersecurity incidents with Microsoft Sentinel and Defender",
        "Developed advanced KQL queries for threat detection and response",
        "Created detailed incident response procedures and playbooks",
        "Led threat hunting efforts using custom scripts and specialized software",
        "Conducted malware analysis and digital forensics investigations"
      ],
      skills: ["Microsoft Sentinel", "KQL", "Malware Analysis", "Threat Hunting", "Leadership"]
    },
    {
      title: "SOC Analyst L1", 
      company: "Atech",
      period: "Nov 2021 – Dec 2022",
      location: "India",
      achievements: [
        "Focused on incident triage using Microsoft Sentinel",
        "Managed Azure security configurations for remote operations",
        "Handled email security and phishing attempt mitigation",
        "Participated in early threat detection and analysis activities",
        "Collaborated across teams to develop security strategies",
        "Built foundation for advanced threat detection capabilities"
      ],
      skills: ["Microsoft Defender", "Azure Security", "Email Security", "Incident Triage"]
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-accent bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto mb-8 rounded-full" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            3.5+ years of hands-on experience in cybersecurity operations, threat hunting, 
            and security engineering across enterprise environments.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="p-8 bg-card border-border hover:border-cyber-glow/50 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-cyber-glow mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-4 text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      <span className="font-semibold text-foreground">{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                {index === 0 && (
                  <div className="flex items-center gap-2 bg-cyber-glow/10 px-4 py-2 rounded-full">
                    <Award className="w-4 h-4 text-cyber-glow" />
                    <span className="text-sm font-medium text-cyber-glow">Current Role</span>
                  </div>
                )}
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-foreground">Key Achievements</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start gap-3 text-muted-foreground">
                      <div className="w-2 h-2 bg-cyber-glow rounded-full mt-2 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold mb-3 text-foreground">Key Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="text-xs hover:bg-cyber-glow/20 hover:text-cyber-glow transition-colors duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-16">
          <Card className="p-8 bg-card border-border">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4 text-cyber-glow">Education</h3>
              <div className="text-lg font-medium text-foreground mb-2">
                Bachelor of Engineering in Electronics and Communication Engineering
              </div>
              <div className="text-muted-foreground">
                Nova Academy • Graduated 2020
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;