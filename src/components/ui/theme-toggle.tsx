"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "./button";
import { cn } from "@/lib/utils";

export function ThemeToggle({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={cn("flex items-center", className)} {...props}>
        <Button
          variant="ghost"
          size="icon"
          className="group relative h-10 w-10 rounded-full prof-glass prof-interactive hover:prof-glow active:scale-95"
          aria-label="Toggle theme"
        />
      </div>
    );
  }

  return (
    <div className={cn("flex items-center", className)} {...props}>
      <Button
        variant="ghost"
        size="icon"
        className="group relative h-10 w-10 rounded-full prof-glass prof-interactive hover:prof-glow active:scale-95"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        aria-label="Toggle theme"
      >
        <div className="relative flex items-center justify-center w-4 h-4">
          <Sun
            className={`absolute h-4 w-4 transition-all duration-500 ease-in-out group-hover:rotate-12 group-hover:text-white-500 ${
              theme === "dark"
                ? "-rotate-180 scale-0 opacity-0"
                : "rotate-0 scale-100 opacity-100"
            }`}
          />
          <Moon
            className={`absolute h-4 w-4 transition-all duration-500 ease-in-out group-hover:-rotate-12 group-hover:text-blue-400 ${
              theme === "dark"
                ? "rotate-0 scale-100 opacity-100"
                : "rotate-180 scale-0 opacity-0"
            }`}
          />
        </div>
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}
