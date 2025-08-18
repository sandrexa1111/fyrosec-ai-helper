import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield, Zap, Clock, CheckCircle } from "lucide-react";
import { SecurityScore } from "@/components/ui/security-score";
import heroImage from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background" />
      
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-primary">
                <Shield className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-wide">AI-Powered Security</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Protect Your Website with{" "}
                <span className="text-gradient">AI Security</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Get instant, automated vulnerability scans and AI-generated security reports 
                in plain English. Perfect for small businesses who want enterprise-level security.
              </p>
            </div>

            {/* Quick Benefits */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Instant Scans</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Weekly Monitoring</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Plain English Reports</span>
              </div>
            </div>

            {/* CTA Section */}
            <div className="space-y-4">
              <p className="text-sm font-medium">Try it free - scan your website now:</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Input 
                  placeholder="Enter your website URL (e.g., https://yoursite.com)"
                  className="flex-1"
                />
                <Button variant="hero" size="lg" className="sm:w-auto">
                  Scan Now - Free
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                No credit card required • Get results in 60 seconds
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1000+</div>
                <div className="text-xs text-muted-foreground">Sites Scanned</div>
              </div>
              <div className="h-8 w-px bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-xs text-muted-foreground">Threats Detected</div>
              </div>
              <div className="h-8 w-px bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-xs text-muted-foreground">Monitoring</div>
              </div>
            </div>
          </div>

          {/* Demo Dashboard */}
          <div className="relative animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-card border rounded-lg p-6 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold">Security Dashboard</h3>
                <div className="flex items-center space-x-2 text-xs text-success">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                  <span>Live Monitoring</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="text-center">
                  <SecurityScore score={87} size="lg" />
                  <p className="text-sm text-muted-foreground mt-2">Overall Security</p>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Vulnerabilities</span>
                    <span className="text-sm font-medium text-success">2 Fixed</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Last Scan</span>
                    <span className="text-sm font-medium">2 min ago</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Status</span>
                    <span className="text-sm font-medium text-success">Protected</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-xs text-muted-foreground">Recent Activity</div>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2 text-xs">
                    <div className="w-1.5 h-1.5 bg-success rounded-full" />
                    <span>SSL certificate validated</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span>Malware scan completed</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs">
                    <div className="w-1.5 h-1.5 bg-warning rounded-full" />
                    <span>Plugin update recommended</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}