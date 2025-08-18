import { ArrowRight, Globe, Search, FileText, Shield } from "lucide-react";

const steps = [
  {
    icon: Globe,
    title: "Enter Your Website",
    description: "Simply paste your website URL and we'll start the analysis immediately.",
    number: "01",
  },
  {
    icon: Search,
    title: "AI-Powered Scan",
    description: "Our advanced AI scans for vulnerabilities, malware, and security issues in minutes.",
    number: "02",
  },
  {
    icon: FileText,
    title: "Get Your Report",
    description: "Receive a plain-English report with your security score and actionable recommendations.",
    number: "03",
  },
  {
    icon: Shield,
    title: "Stay Protected",
    description: "We monitor your site 24/7 and alert you to new threats as they emerge.",
    number: "04",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-secondary">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Website Security in <span className="text-gradient">4 Simple Steps</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From scan to protection in under 5 minutes. 
            No technical knowledge required.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                {/* Step Number */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <ArrowRight className="hidden lg:block absolute top-8 -right-12 h-6 w-6 text-primary opacity-60" />
                  )}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg transition-all duration-300">
                  <step.icon className="h-6 w-6" strokeWidth={2} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-card rounded-lg p-8 max-w-3xl mx-auto border shadow-lg">
            <h3 className="text-2xl font-bold mb-4">
              Ready to secure your website?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of businesses protecting their websites with FyroSec.AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 gradient-primary text-white rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105">
                Start Free 7-Day Trial
              </button>
              <button className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}