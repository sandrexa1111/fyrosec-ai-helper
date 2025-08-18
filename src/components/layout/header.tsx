import { Button } from "@/components/ui/button";
import { Shield, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Shield className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-gradient">FyroSec.AI</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 ml-8">
          <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
            Features
          </a>
          <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
            Pricing
          </a>
          <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
            How it Works
          </a>
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4 ml-auto">
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <Button variant="hero" size="sm">
            Start Free Trial
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden ml-auto"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden border-t bg-background/95 backdrop-blur",
        isMenuOpen ? "block" : "hidden"
      )}>
        <nav className="container py-4 space-y-3">
          <a href="#features" className="block text-sm font-medium hover:text-primary transition-colors">
            Features
          </a>
          <a href="#pricing" className="block text-sm font-medium hover:text-primary transition-colors">
            Pricing
          </a>
          <a href="#how-it-works" className="block text-sm font-medium hover:text-primary transition-colors">
            How it Works
          </a>
          <div className="pt-3 space-y-2">
            <Button variant="ghost" size="sm" className="w-full justify-start">
              Sign In
            </Button>
            <Button variant="hero" size="sm" className="w-full">
              Start Free Trial
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}