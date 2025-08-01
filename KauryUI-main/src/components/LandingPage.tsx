import React from 'react';
import { Sparkles, Zap, Code, Palette, Layers, ArrowRight, Github, Star, Play, Download, Users, Globe, Shield, Rocket, Layout, Image, Type, Library, Dumbbell as Embed, Settings, BarChart3, Wand2, Paintbrush, Grid3X3, MousePointer, Cpu } from 'lucide-react';

interface LandingPageProps {
  onNavigate: (component: string) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-xl border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">KauryUI</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#tools" className="text-gray-400 hover:text-white transition-colors text-sm">Tools</a>
              <a href="#components" className="text-gray-400 hover:text-white transition-colors text-sm">Components</a>
              <a href="#docs" className="text-gray-400 hover:text-white transition-colors text-sm">Docs</a>
              <button 
                onClick={() => onNavigate('form-builder')}
                className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-100 transition-all duration-200 text-sm font-medium"
              >
                Try Builder
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-gray-900/50 border border-gray-800 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-300">Modern Web Components Library</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Build Beautiful
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Web Interfaces
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Complete toolkit for creating stunning forms, components, and animations. 
              From form builders to icon libraries - everything you need in one place.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-200">
            <button 
              onClick={() => onNavigate('form-builder')}
              className="group bg-white text-black px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>Start Building</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group bg-gray-900/50 backdrop-blur-sm text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-800/50 transition-all duration-300 border border-gray-800 flex items-center space-x-2">
              <Github className="w-5 h-5" />
              <span>View on GitHub</span>
            </button>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section id="tools" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Development Toolkit
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Everything you need to build modern web interfaces, from components to utilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Layout className="w-6 h-6" />,
                title: "Form Builder",
                description: "Visual form creator with live preview",
                available: true,
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: <Image className="w-6 h-6" />,
                title: "Backgrounds",
                description: "Beautiful gradient and pattern backgrounds",
                available: false,
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: <Grid3X3 className="w-6 h-6" />,
                title: "Components",
                description: "Pre-built UI components library",
                available: false,
                gradient: "from-green-500 to-emerald-500"
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Animations",
                description: "Smooth CSS and JS animations",
                available: false,
                gradient: "from-yellow-500 to-orange-500"
              },
              {
                icon: <Type className="w-6 h-6" />,
                title: "Text Animations",
                description: "Animated text effects and transitions",
                available: true,
                gradient: "from-red-500 to-pink-500"
              },
              {
                icon: <Library className="w-6 h-6" />,
                title: "Icon Library",
                description: "Curated collection of modern icons",
                available: true,
                gradient: "from-indigo-500 to-purple-500"
              },
              {
                icon: <Embed className="w-6 h-6" />,
                title: "Embed Generator",
                description: "Generate embeddable widgets and components",
                available: true,
                gradient: "from-teal-500 to-cyan-500"
              },
              {
                icon: <Sparkles className="w-6 h-6" />,
                title: "Favicon Generator",
                description: "Create favicons from text or images",
                available: true,
                gradient: "from-violet-500 to-purple-500"
              },
              {
                icon: <BarChart3 className="w-6 h-6" />,
                title: "Dashboard Components",
                description: "Charts, metrics, and dashboard widgets",
                available: true,
                gradient: "from-blue-500 to-indigo-500"
              },
              {
                icon: <Sparkles className="w-6 h-6" />,
                title: "React Bits Collection",
                description: "Complete library of animated React components",
                available: true,
                gradient: "from-purple-500 to-pink-500"
              }
            ].map((tool, index) => (
              <div 
                key={index}
                className={`group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 transition-all duration-300 hover:scale-105 animate-fade-in-up overflow-hidden ${
                  tool.available 
                    ? 'hover:bg-gray-800/50 cursor-pointer hover:border-gray-700' 
                    : 'opacity-75'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => {
                  if (tool.available) {
                    if (tool.title === 'Form Builder') {
                      onNavigate('form-builder');
                    } else if (tool.title === 'Favicon Generator') {
                      onNavigate('favicon-generator');
                    } else if (tool.title === 'Embed Generator') {
                      onNavigate('embed-generator');
                    } else if (tool.title === 'Icon Library') {
                      onNavigate('icon-library');
                    } else if (tool.title === 'Dashboard Components') {
                      onNavigate('dashboard-components');
                    } else if (tool.title === 'Text Animations') {
                      onNavigate('text-animations');
                    } else if (tool.title === 'React Bits Collection') {
                      onNavigate('react-bits-showcase');
                    }
                  }
                }}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${tool.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className={`w-12 h-12 bg-gradient-to-r ${tool.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {tool.icon}
                  </div>
                  
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-white">{tool.title}</h3>
                    {!tool.available && (
                      <div className="text-xs text-gray-500 bg-gray-800/50 px-2 py-1 rounded-full border border-gray-700">
                        Soon
                      </div>
                    )}
                  </div>
                  
                  <p className="text-gray-400 text-sm leading-relaxed">{tool.description}</p>
                  
                  {tool.available && (
                    <div className="mt-4 flex items-center text-gray-300 text-sm group-hover:text-white transition-colors">
                      <span>Try it now</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose KauryUI?
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Built for modern developers who want beautiful, accessible, and performant components
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Lightning Fast",
                description: "Optimized web components with minimal bundle size and maximum performance"
              },
              {
                icon: <Code className="w-6 h-6" />,
                title: "Developer Friendly",
                description: "Simple API, TypeScript support, and comprehensive documentation"
              },
              {
                icon: <Palette className="w-6 h-6" />,
                title: "Fully Customizable",
                description: "Extensive theming system with CSS variables and custom properties"
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Accessible by Default",
                description: "WCAG 2.1 compliant with full keyboard navigation and screen reader support"
              },
              {
                icon: <Layers className="w-6 h-6" />,
                title: "Framework Agnostic",
                description: "Works with React, Vue, Angular, or vanilla HTML - your choice"
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: "CDN Ready",
                description: "Available on jsDelivr and unpkg for instant integration"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800/30 hover:bg-gray-800/30 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-gray-800/50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gray-700/50 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-3xl p-12 border border-gray-800/50 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                Join thousands of developers creating beautiful interfaces with KauryUI's complete toolkit
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => onNavigate('form-builder')}
                  className="group bg-white text-black px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Rocket className="w-5 h-5" />
                  <span>Start Building Now</span>
                </button>
                
                <button className="group bg-gray-800/50 backdrop-blur-sm text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-700/50 transition-all duration-300 border border-gray-700 flex items-center justify-center space-x-2">
                  <Download className="w-5 h-5" />
                  <span>Download Library</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">KauryUI</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Star className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Users className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800/50 text-center text-gray-400 text-sm">
            <p>&copy; 2024 KauryUI. Built with ❤️ for developers.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 200ms;
        }
      `}</style>
    </div>
  );
};