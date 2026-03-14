import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { BRAND_NAME, BRAND_NAME_LOWERCASE } from "@/constants/brand";
import { Link, useNavigate } from "@tanstack/react-router";
import { ChevronDown, Heart, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function SiteLayout({
  children,
}: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const solutionsRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        solutionsRef.current &&
        !solutionsRef.current.contains(e.target as Node)
      ) {
        setSolutionsOpen(false);
      }
      if (
        resourcesRef.current &&
        !resourcesRef.current.contains(e.target as Node)
      ) {
        setResourcesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (path: string) => {
    navigate({ to: path });
    setMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Stream Selection (Class 8-10)", path: "/stream-career-8-10" },
    { label: "Career Selection (Class 11-12)", path: "/career-planning-11-12" },
  ];

  const footerLinks = [
    { label: "Home", path: "/", external: false },
    {
      label: "Stream Selection (Class 8-10)",
      path: "/stream-career-8-10",
      external: false,
    },
    {
      label: "Career Selection (Class 11-12)",
      path: "/career-planning-11-12",
      external: false,
    },
    {
      label: "Smart Choice Discovery",
      path: "/psychometric-test",
      external: false,
    },
    { label: "Smart Choice Guidance", path: "/counseling", external: false },
    {
      label: "Meet your Counselor",
      path: "https://www.bodhami.com/summary/counselor?id=SameerPopli",
      external: true,
    },
    {
      label: "Knowledge Hub",
      path: "https://thesmartchoice.notion.site/TSC-Knowledge-Hub-d5e0532d3d6541e4b66ad90bd9f40b25",
      external: true,
    },
    { label: "Contact Us", path: "/contact", external: false },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0">
              <span className="text-xl sm:text-2xl font-bold text-amber-600 hover:text-amber-700 transition-colors">
                {BRAND_NAME}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="px-2 xl:px-3 py-2 text-xs xl:text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-md hover:bg-accent/50 whitespace-nowrap"
                  activeProps={{
                    className:
                      "px-2 xl:px-3 py-2 text-xs xl:text-sm font-semibold text-foreground rounded-md bg-accent/50 whitespace-nowrap",
                  }}
                  data-ocid={`nav.${item.path.replace(/[/-]/g, "")}.link`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Solutions Dropdown */}
              <div ref={solutionsRef} className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setSolutionsOpen(!solutionsOpen);
                    setResourcesOpen(false);
                  }}
                  className="flex items-center gap-1 px-2 xl:px-3 py-2 text-xs xl:text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-md hover:bg-accent/50 whitespace-nowrap"
                  data-ocid="nav.solutions.toggle"
                >
                  Solutions
                  <ChevronDown
                    className={`w-3 h-3 xl:w-4 xl:h-4 transition-transform ${solutionsOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {solutionsOpen && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-background border border-border rounded-lg shadow-lg z-50 py-1">
                    <Link
                      to="/psychometric-test"
                      className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-foreground hover:bg-accent/50 transition-colors"
                      onClick={() => setSolutionsOpen(false)}
                      data-ocid="nav.solutions.discovery.link"
                    >
                      Smart Choice Discovery
                    </Link>
                    <Link
                      to="/counseling"
                      className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-foreground hover:bg-accent/50 transition-colors"
                      onClick={() => setSolutionsOpen(false)}
                      data-ocid="nav.solutions.guidance.link"
                    >
                      Smart Choice Guidance
                    </Link>
                    <div className="flex items-center gap-2 px-4 py-2.5 text-sm text-muted-foreground cursor-default">
                      <span>Smart Choice Mentorship</span>
                      <span className="text-xs bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded-full font-medium">
                        Soon
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Resources Dropdown */}
              <div ref={resourcesRef} className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setResourcesOpen(!resourcesOpen);
                    setSolutionsOpen(false);
                  }}
                  className="flex items-center gap-1 px-2 xl:px-3 py-2 text-xs xl:text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-md hover:bg-accent/50 whitespace-nowrap"
                  data-ocid="nav.resources.toggle"
                >
                  Resources
                  <ChevronDown
                    className={`w-3 h-3 xl:w-4 xl:h-4 transition-transform ${resourcesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {resourcesOpen && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-background border border-border rounded-lg shadow-lg z-50 py-1">
                    <a
                      href="https://thesmartchoice.notion.site/TSC-Knowledge-Hub-d5e0532d3d6541e4b66ad90bd9f40b25"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-foreground hover:bg-accent/50 transition-colors"
                      onClick={() => setResourcesOpen(false)}
                      data-ocid="nav.resources.knowledgehub.link"
                    >
                      Knowledge Hub
                    </a>
                    <div className="flex items-center gap-2 px-4 py-2.5 text-sm text-muted-foreground cursor-default">
                      <span>Blog</span>
                      <span className="text-xs bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded-full font-medium">
                        Soon
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Meet your Counselor - external link */}
              <a
                href="https://www.bodhami.com/summary/counselor?id=SameerPopli"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 xl:px-3 py-2 text-xs xl:text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-md hover:bg-accent/50 whitespace-nowrap"
                data-ocid="nav.counselorprofile.link"
              >
                Meet your Counselor
              </a>

              <Link
                to="/contact"
                className="px-2 xl:px-3 py-2 text-xs xl:text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-md hover:bg-accent/50 whitespace-nowrap"
                activeProps={{
                  className:
                    "px-2 xl:px-3 py-2 text-xs xl:text-sm font-semibold text-foreground rounded-md bg-accent/50 whitespace-nowrap",
                }}
                data-ocid="nav.contact.link"
              >
                Contact Us
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="lg:hidden p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              data-ocid="nav.mobile.toggle"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="lg:hidden py-4 border-t border-border/40">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  type="button"
                  onClick={() => handleNavClick(item.path)}
                  className="block w-full text-left px-4 py-2.5 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent/50 transition-colors"
                  data-ocid={`nav.mobile.${item.path.replace(/[/-]/g, "")}.link`}
                >
                  {item.label}
                </button>
              ))}

              {/* Solutions expandable in mobile */}
              <button
                type="button"
                onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                className="flex items-center justify-between w-full px-4 py-2.5 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent/50 transition-colors"
                data-ocid="nav.mobile.solutions.toggle"
              >
                Solutions
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${mobileSolutionsOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileSolutionsOpen && (
                <div className="bg-muted/30">
                  <button
                    type="button"
                    onClick={() => handleNavClick("/psychometric-test")}
                    className="block w-full text-left pl-8 pr-4 py-2.5 text-sm text-foreground/70 hover:text-foreground hover:bg-accent/50 transition-colors"
                    data-ocid="nav.mobile.discovery.link"
                  >
                    Smart Choice Discovery
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNavClick("/counseling")}
                    className="block w-full text-left pl-8 pr-4 py-2.5 text-sm text-foreground/70 hover:text-foreground hover:bg-accent/50 transition-colors"
                    data-ocid="nav.mobile.guidance.link"
                  >
                    Smart Choice Guidance
                  </button>
                  <div className="flex items-center gap-2 pl-8 pr-4 py-2.5 text-sm text-muted-foreground">
                    <span>Smart Choice Mentorship</span>
                    <span className="text-xs bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded-full font-medium">
                      Soon
                    </span>
                  </div>
                </div>
              )}

              {/* Resources expandable in mobile */}
              <button
                type="button"
                onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                className="flex items-center justify-between w-full px-4 py-2.5 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent/50 transition-colors"
                data-ocid="nav.mobile.resources.toggle"
              >
                Resources
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${mobileResourcesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileResourcesOpen && (
                <div className="bg-muted/30">
                  <a
                    href="https://thesmartchoice.notion.site/TSC-Knowledge-Hub-d5e0532d3d6541e4b66ad90bd9f40b25"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-left pl-8 pr-4 py-2.5 text-sm text-foreground/70 hover:text-foreground hover:bg-accent/50 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                    data-ocid="nav.mobile.knowledgehub.link"
                  >
                    Knowledge Hub
                  </a>
                  <div className="flex items-center gap-2 pl-8 pr-4 py-2.5 text-sm text-muted-foreground">
                    <span>Blog</span>
                    <span className="text-xs bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded-full font-medium">
                      Soon
                    </span>
                  </div>
                </div>
              )}

              {/* Meet your Counselor - mobile */}
              <a
                href="https://www.bodhami.com/summary/counselor?id=SameerPopli"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-left px-4 py-2.5 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent/50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                data-ocid="nav.mobile.counselorprofile.link"
              >
                Meet your Counselor
              </a>

              <button
                type="button"
                onClick={() => handleNavClick("/contact")}
                className="block w-full text-left px-4 py-2.5 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent/50 transition-colors"
                data-ocid="nav.mobile.contact.link"
              >
                Contact Us
              </button>
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
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                {BRAND_NAME}
              </h3>
              <p className="text-sm text-muted-foreground">
                Helping students in grades 8-12 make informed decisions about
                their educational stream and career path. Start your journey
                with The Smart Choice today.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.path}>
                    {link.external ? (
                      <a
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                Get in Touch
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                Have questions? We're here to help you make the right choice for
                your future.
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
              © {new Date().getFullYear()} {BRAND_NAME}. Built with{" "}
              <Heart className="inline-block w-4 h-4 text-red-500 fill-current" />{" "}
              using{" "}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                  typeof window !== "undefined"
                    ? window.location.hostname
                    : BRAND_NAME_LOWERCASE,
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
