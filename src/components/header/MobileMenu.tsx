import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import MobileDropdown from "./MobileDropdown";
import type { MobileMenuProps } from "../../types/header";
import { navigationData } from "../../constants/navigation";
import Link from "next/link";

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  activeDropdown,
  onDropdownToggle,
  onClose,
  isScrolled,
}) => {
  const handleToggle = (dropdownName: string) => {
    onDropdownToggle(activeDropdown === dropdownName ? "" : dropdownName);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`fixed inset-0 z-20 ${isScrolled ? 'bg-secondary/70 shadow-md backdrop-blur-sm' : 'bg-background/95 backdrop-blur-sm'}`}
        >
          <div className="pt-20 pb-8 px-6 h-[calc(100vh-80px)] overflow-y-auto">
            <nav className="flex flex-col space-y-2">
              {navigationData.map((item) => (
                <MobileDropdown
                  key={item.label}
                  title={item.label}
                  isOpen={activeDropdown === item.label.toLowerCase()}
                  onToggle={() => handleToggle(item.label.toLowerCase())}
                >
                  {item.links.map((section) => (
                    <div key={section.title}>
                      <h3 className="px-4 py-2 text-sm font-semibold text-foreground/60">{section.title}</h3>
                      {section.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="block py-2 px-4 text-foreground/80 hover:text-primary"
                          onClick={onClose}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </MobileDropdown>
              ))}
            </nav>

            <div className="border-t border-border/50 pt-6 mt-6">
              <Link
                href="/contact-us"
                className="block py-3 text-lg font-medium text-foreground hover:text-primary transition-colors"
                onClick={onClose}
              >
                Contact
              </Link>
              <Link
                href="/engage-with-us"
                className="block mt-4 w-full text-center bg-primary text-primary-foreground rounded-md px-6 py-3 text-lg font-semibold hover:bg-primary/90 transition-all shadow-md"
                onClick={onClose}
              >
                Engage with us
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
