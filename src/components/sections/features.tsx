import { Shield, Brain, Clock, FileText, AlertTriangle, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Comprehensive Vulnerability Scanning",
    description: "Detect SQL injection, cross-site scripting, outdated plugins, exposed directories, and more with our advanced scanning engine.",
  },
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Our AI transforms complex security reports into clear, actionable recommendations that anyone can understand and implement.",
  },
  {
    icon: Clock,
    title: "24/7 Automated Monitoring",
    description: "Set it and forget it. We continuously monitor your website and alert you immediately when new threats are detected.",
  },
  {
    icon: FileText,
    title: "Executive-Ready Reports",
    description: "Get professional PDF reports with security scores, risk assessments, and step-by-step remediation guides.",
  },
  {
    icon: AlertTriangle,
    title: "Instant Threat Alerts",
    description: "Receive immediate notifications via email and dashboard when critical vulnerabilities are discovered.",
  },
  {
    icon: TrendingUp,
    title: "Security Score Tracking",
    description: "Monitor your website's security posture over time with our easy-to-understand scoring system and trend analysis.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-secondary">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Enterprise Security Made <span className="text-gradient">Simple</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful cybersecurity tools designed for small businesses. 
            No technical expertise required.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 bg-card/80 backdrop-blur group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-white" strokeWidth={2} />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}