'use client';

import { useState } from 'react';
import { useTheme } from 'next-themes';
import Layout from '@/components/Layout';

export default function ThemeShowcase() {
  const { theme, setTheme } = useTheme();
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <div className="container mx-auto py-12 space-y-16">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-heading font-bold ai-gradient-text">
            CAiRL Theme Showcase
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Exploring the modern, professional design system for the Centre for Artificial Intelligence Research and Learning
          </p>
          <div className="flex justify-center gap-4">
            <button 
              onClick={() => setTheme('light')} 
              className={`px-6 py-3 rounded-lg transition-all ${theme === 'light' ? 'bg-primary text-primary-foreground ai-glow' : 'bg-secondary text-secondary-foreground'}`}
            >
              Light Theme
            </button>
            <button 
              onClick={() => setTheme('dark')} 
              className={`px-6 py-3 rounded-lg transition-all ${theme === 'dark' ? 'bg-primary text-primary-foreground ai-glow' : 'bg-secondary text-secondary-foreground'}`}
            >
              Dark Theme
            </button>
          </div>
        </section>

        {/* Typography Section */}
        <section className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-heading font-semibold">Typography</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-heading font-medium">Headings (Space Grotesk)</h3>
                <div className="mt-2 space-y-2">
                  <h1 className="text-4xl font-heading font-bold">Heading 1</h1>
                  <h2 className="text-3xl font-heading font-semibold">Heading 2</h2>
                  <h3 className="text-2xl font-heading font-medium">Heading 3</h3>
                  <h4 className="text-xl font-heading">Heading 4</h4>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-heading font-medium">Body Text (Inter)</h3>
                <div className="mt-2 space-y-2">
                  <p className="text-base">Regular paragraph text in Inter font. The quick brown fox jumps over the lazy dog.</p>
                  <p className="text-sm">Small text for captions and secondary information.</p>
                  <p className="text-lg font-medium">Medium weight text for emphasis.</p>
                  <p className="text-base font-bold">Bold text for strong emphasis.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-heading font-semibold">Colors</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-background border border-border rounded-lg">
                <p>Background</p>
              </div>
              <div className="p-4 bg-foreground text-background border border-border rounded-lg">
                <p>Foreground</p>
              </div>
              <div className="p-4 bg-primary text-primary-foreground rounded-lg">
                <p>Primary</p>
              </div>
              <div className="p-4 bg-secondary text-secondary-foreground rounded-lg">
                <p>Secondary</p>
              </div>
              <div className="p-4 bg-accent text-accent-foreground rounded-lg">
                <p>Accent</p>
              </div>
              <div className="p-4 bg-muted text-muted-foreground rounded-lg">
                <p>Muted</p>
              </div>
            </div>
          </div>
        </section>

        {/* AI Components Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-heading font-semibold">AI-Themed Components</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="ai-card p-6 space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center ai-pulse">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-medium">AI Card with Pulse</h3>
              <p>This card uses the ai-card and ai-pulse classes for a modern AI aesthetic.</p>
            </div>

            <div className="ai-card p-6 space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center ai-float">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-medium">AI Card with Float</h3>
              <p>This card uses the ai-card and ai-float classes for a subtle floating animation.</p>
            </div>

            <div className="ai-card p-6 space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center ai-glow">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-medium">AI Card with Glow</h3>
              <p>This card uses the ai-card and ai-glow classes for a subtle glow effect on hover.</p>
            </div>
          </div>

          <div className="p-8 ai-grid-pattern rounded-lg border border-border">
            <h3 className="text-2xl font-heading font-semibold mb-4">Grid Pattern Background</h3>
            <p className="mb-4">This section uses the ai-grid-pattern class for a subtle tech-inspired background.</p>
            <div className="flex items-center justify-center py-8">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 blur-xl rounded-full"></div>
                <button 
                  onClick={() => setCount(count + 1)}
                  className="relative px-6 py-3 bg-primary text-primary-foreground rounded-lg ai-glow"
                >
                  Clicked {count} times
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Text Effects Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-heading font-semibold">Text Effects</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border border-border rounded-lg space-y-4">
              <h3 className="text-2xl font-heading ai-gradient-text">Gradient Text</h3>
              <p>This heading uses the ai-gradient-text class for a dynamic gradient effect.</p>
            </div>
            
            <div className="p-6 border border-border rounded-lg space-y-4">
              <h3 className="text-2xl font-heading">
                <span className="relative">
                  Highlighted Text
                  <span className="absolute bottom-0 left-0 w-full h-2 bg-primary/30"></span>
                </span>
              </h3>
              <p>This heading uses a relative/absolute positioning for a highlight effect.</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}