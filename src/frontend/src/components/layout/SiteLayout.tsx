import { Link, useNavigate } from '@tanstack/react-router';
import { Menu, X, Heart } from 'lucide-react';
import { useState } from 'react';
import { BRAND_NAME, BRAND_NAME_LOWERCASE } from '@/constants/brand';
import WhatsAppFloatingButton from '@/components/WhatsAppFloatingButton';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Psychometric Test', path: '/psychometric-test' },
    { label: '1:1 Counseling', path: '/counseling' },
    { label: 'Contact Us', path: '/contact' },
  ];

  const handleNavClick = (path: string) => {
    navigate({ to: path });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src="/assets/generated/brand-logo.dim_200x60.png"
                alt={BRAND_NAME}
                className="h-10 sm:h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                  activeProps={{ className: 'text-foreground font-semibold' }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden py-4 border-t border-border/40">
              <div className="flex items-center justify-center mb-4 pb-4 border-b border-border/40">
                <img
                  src="/assets/generated/brand-logo.dim_200x60.png"
                  alt={BRAND_NAME}
                  className="h-8 w-auto"
                />
              </div>
              {navLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent/50 transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* WhatsApp Floating Button */}
      <WhatsAppFloatingButton />

      {/* Footer */}
      <footer className="border-t border-border/40 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">{BRAND_NAME}</h3>
              <p className="text-sm text-muted-foreground">
                Helping students in grades 8-10 make informed decisions about their educational path after 10th standard.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">Quick Links</h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">Get in Touch</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Have questions? We're here to help you make the right choice for your future.
              </p>
              <Link
                to="/contact"
                className="text-sm font-medium text-amber-600 hover:text-amber-700 transition-colors"
              >
                Contact Us →
              </Link>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border/40 text-center text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} {BRAND_NAME}. Built with{' '}
              <Heart className="inline-block w-4 h-4 text-red-500 fill-current" /> using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                  typeof window !== 'undefined' ? window.location.hostname : BRAND_NAME_LOWERCASE
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-600 hover:text-amber-700 transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
