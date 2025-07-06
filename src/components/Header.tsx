import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import DropdownButton from "./header/DropdownButton";
import MobileMenu from "./header/MobileMenu";
import { navigationData } from "../constants/navigation";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./ui/theme-toggle";

const Header: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseEnter = (dropdownName: string) => {
    setActiveDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
  };

  const handleDropdownToggle = (dropdownName: string) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="flex items-center"
              onClick={closeAllDropdowns}
            >
              <Image
                className="h-10 w-auto"
                src="https://res.cloudinary.com/dnyouhvwj/image/upload/v1750176558/cairl_logo_sx9gcw.png"
                alt="CAiRL"
                width={150}
                height={150}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navigationData.map((item) => (
              <div
                key={item.label}
                onMouseEnter={() => handleMouseEnter(item.label.toLowerCase())}
              >
                <DropdownButton
                  isActive={activeDropdown === item.label.toLowerCase()}
                  route={item.route}
                >
                  {item.label}
                </DropdownButton>
                <item.component
                  isOpen={activeDropdown === item.label.toLowerCase()}
                  onClose={closeAllDropdowns}
                />
              </div>
            ))}
          </nav>

          {/* Contact & CTA - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="ml-auto">
              <ThemeToggle />
            </div>
            <Link
              href="/engage-with-us"
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap text-base ${
                isScrolled
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-primary text-primary-foreground hover:bg-primary/90"
              }`}
              onClick={closeAllDropdowns}
            >
              Engage with Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground/80 hover:text-primary hover:bg-secondary focus:outline-none transition-colors duration-300"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="h-7 w-7" />
              ) : (
                <Menu className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        activeDropdown={activeDropdown}
        onDropdownToggle={handleDropdownToggle}
        onClose={closeAllDropdowns}
        isScrolled={isScrolled}
      />
    </header>
  );
};

export default Header;
