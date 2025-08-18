import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$20",
    period: "/month",
    description: "Perfect for single website owners",
    features: [
      "1 website monitoring",
      "Weekly automated scans",
      "AI-generated reports",
      "Email notifications",
      "Basic vulnerability detection",
      "SSL certificate monitoring",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    price: "$50",
    period: "/month",
    description: "Ideal for agencies and multi-site owners",
    features: [
      "3 websites monitoring",
      "Daily automated scans",
      "Advanced AI analysis",
      "Priority email & SMS alerts",
      "Complete vulnerability suite",
      "Malware detection",
      "PDF executive reports",
      "API access",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations",
    features: [
      "Unlimited websites",
      "Real-time monitoring",
      "Custom AI training",
      "24/7 phone support",
      "White-label reports",
      "Compliance reporting",
      "Dedicated account manager",
      "Custom integrations",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Simple, Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include our 7-day free trial 
            and 30-day money-back guarantee.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                plan.popular 
                  ? 'border-primary shadow-2xl scale-105 bg-gradient-to-b from-card to-primary/5 hover:shadow-primary/20' 
                  : 'border-border hover:border-primary/50 hover:shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="gradient-primary text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="h-3 w-3" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground">{plan.period}</span>
                  )}
                </div>
                <p className="text-muted-foreground mt-2">{plan.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-success mt-0.5 flex-shrink-0 bg-success/10 rounded-full p-1" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full" 
                  variant={plan.popular ? "hero" : "outline"}
                  size="lg"
                >
                  {plan.popular && <Zap className="h-4 w-4 mr-2" />}
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            All plans include 7-day free trial • No setup fees • <span className="font-semibold text-foreground">Cancel anytime</span>
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-success" />
              <span>SSL Secured</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-success" />
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-success" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}