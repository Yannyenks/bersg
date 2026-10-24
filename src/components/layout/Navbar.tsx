import React, { useState, useEffect } from 'react';
import { BesrgLogo } from '../brand/BesrgLogo.tsx';
import { Menu, X, ArrowUpRight, Globe } from 'lucide-react';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
  lang: 'fr' | 'en';
  onToggleLang: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  lang,
  onToggleLang
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress(totalScroll > 0 ? (currentScroll / totalScroll) * 100 : 0);
      setScrolled(currentScroll > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', labelFr: 'Accueil', labelEn: 'Home' },
    { id: 'services', labelFr: 'Services', labelEn: 'Services' },
    { id: 'marketing-lab', labelFr: 'Marketing Lab', labelEn: 'Marketing Lab' },
    { id: 'methodology', labelFr: 'Méthodologie', labelEn: 'Methodology' },
    { id: 'showcase', labelFr: 'Projets Démo', labelEn: 'Demo Projects' },
    { id: 'about', labelFr: 'À Propos', labelEn: 'About' },
  ];

  const handleNavClick = (viewId: string) => {
    onNavigate(viewId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isDarkHero = currentView === 'home' && !scrolled;

  return (
    <>
      {/* Top Scroll Progress Indicator Bar */}
      <div className="fixed top-0 left-0 right-0 h-[2.5px] z-50 bg-slate-100 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#054859] via-[#00B2F6] to-[#F82649] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Main Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isDarkHero
            ? 'bg-[#06141E]/80 backdrop-blur-md py-4 sm:py-5 border-b border-white/10 text-white'
            : scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 py-3 shadow-sm text-slate-800'
            : 'bg-white/90 backdrop-blur-sm py-4 sm:py-5 border-b border-slate-100 text-slate-800'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <BesrgLogo
            size="md"
            animated={true}
            theme={isDarkHero ? 'dark' : 'light'}
            onClick={() => handleNavClick('home')}
          />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map(item => {
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs tracking-wider transition-all cursor-pointer font-medium ${
                    isActive
                      ? isDarkHero
                        ? 'text-[#00B2F6] bg-white/10 font-bold border border-[#00B2F6]/30 shadow-xs'
                        : 'text-[#054859] bg-[#054859]/10 font-bold border border-[#054859]/20 shadow-xs'
                      : isDarkHero
                      ? 'text-slate-200 hover:text-white hover:bg-white/10'
                      : 'text-slate-600 hover:text-[#054859] hover:bg-slate-100'
                  }`}
                >
                  {lang === 'fr' ? item.labelFr : item.labelEn}
                </button>
              );
            })}
          </nav>

          {/* Right Action Bar */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={onToggleLang}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono rounded-lg transition-colors cursor-pointer ${
                isDarkHero
                  ? 'text-white bg-white/10 hover:bg-white/20 border border-white/20'
                  : 'text-slate-700 hover:text-[#054859] bg-slate-100 hover:bg-slate-200 border border-slate-200'
              }`}
              title="Changer de langue / Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-[#00B2F6]" />
              <span className="font-semibold uppercase">{lang}</span>
            </button>

            {/* Primary CTA */}
            <button
              onClick={() => handleNavClick('contact')}
              className="relative group overflow-hidden px-4 py-2 rounded-lg bg-[#054859] hover:bg-[#075f75] text-white text-xs font-semibold tracking-wider uppercase border border-[#00B2F6]/50 shadow-md hover:shadow-cyan-900/20 transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <span>{lang === 'fr' ? 'Démarrer un projet' : 'Start a Project'}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#00B2F6] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onToggleLang}
              className={`p-2 text-xs font-mono rounded-lg border cursor-pointer ${
                isDarkHero
                  ? 'text-white bg-white/10 border-white/20'
                  : 'text-slate-700 bg-slate-100 border-slate-200'
              }`}
            >
              {lang.toUpperCase()}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg border cursor-pointer transition-colors ${
                isDarkHero
                  ? 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                  : 'bg-slate-100 border-slate-200 text-slate-800 hover:bg-slate-200'
              }`}
              aria-label="Ouvrir le menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#F82649]" /> : <Menu className="w-5 h-5 text-[#00B2F6]" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-6 py-6 transition-all duration-300 shadow-xl">
            <div className="flex flex-col gap-2">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-4 py-3 rounded-lg text-sm font-medium tracking-wide transition-colors ${
                    currentView === item.id
                      ? 'text-[#054859] bg-[#054859]/10 font-bold border-l-3 border-[#00B2F6]'
                      : 'text-slate-700 hover:text-[#054859] hover:bg-slate-50'
                  }`}
                >
                  {lang === 'fr' ? item.labelFr : item.labelEn}
                </button>
              ))}

              <div className="pt-4 border-t border-slate-200 mt-2 flex flex-col gap-3">
                <button
                  onClick={() => handleNavClick('contact')}
                  className="w-full py-3 rounded-lg bg-[#054859] text-white text-xs font-semibold tracking-wider uppercase border border-[#00B2F6]/50 flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>{lang === 'fr' ? 'Démarrer un projet' : 'Start a Project'}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#00B2F6]" />
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
