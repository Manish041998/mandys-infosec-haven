import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Linkedin, Github, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@getsmandy.in",
      href: "mailto:hello@getsmandy.in"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      href: null
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://linkedin.com/in/smandy"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View my projects",
      href: "https://github.com/smandy"
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-accent bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto mb-8 rounded-full" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss cybersecurity challenges or explore collaboration opportunities? 
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-foreground">
              Get in Touch
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-cyber-glow" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                    {item.href ? (
                      <a 
                        href={item.href}
                        className="text-foreground hover:text-cyber-glow transition-colors duration-200"
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-foreground">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <Card className="p-6 bg-card border-border">
              <h4 className="text-lg font-semibold mb-4 text-cyber-glow">
                Areas of Expertise
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Security Audits & Penetration Testing</li>
                <li>• Vulnerability Assessments</li>
                <li>• Incident Response & Forensics</li>
                <li>• Security Architecture Design</li>
                <li>• Compliance & Risk Management</li>
                <li>• Security Training & Consulting</li>
              </ul>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 bg-card border-border">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Send a Message
            </h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Name *
                  </label>
                  <Input 
                    placeholder="Your name"
                    className="bg-background border-border focus:border-cyber-glow"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Email *
                  </label>
                  <Input 
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-background border-border focus:border-cyber-glow"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">
                  Subject *
                </label>
                <Input 
                  placeholder="What's this about?"
                  className="bg-background border-border focus:border-cyber-glow"
                />
              </div>
              
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">
                  Message *
                </label>
                <Textarea 
                  placeholder="Tell me about your project or security needs..."
                  rows={6}
                  className="bg-background border-border focus:border-cyber-glow resize-none"
                />
              </div>
              
              <Button variant="cyber" size="lg" className="w-full">
                <Send className="w-5 h-5" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;