/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar.tsx';
import { Footer } from './components/layout/Footer.tsx';
import { LegalModal } from './components/modals/LegalModal.tsx';
import { HomeView } from './views/HomeView.tsx';
import { ServicesView } from './views/ServicesView.tsx';
import { MarketingLabView } from './views/MarketingLabView.tsx';
import { MethodologyView } from './views/MethodologyView.tsx';
import { ShowcaseView } from './views/ShowcaseView.tsx';
import { AboutView } from './views/AboutView.tsx';
import { ContactView } from './views/ContactView.tsx';
import { BESRG_DATA } from './data/besrgData.ts';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);
  const [lang, setLang] = useState<'fr' | 'en'>('fr');
  const [scrollY, setScrollY] = useState<number>(0);
  const [legalModalType, setLegalModalType] = useState<'mentions' | 'confidentialite' | null>(null);

  // Initialize language from localStorage
  useEffect(() => {
    const savedLang = localStorage.getItem('besrg_lang');
    if (savedLang === 'en' || savedLang === 'fr') {
      setLang(savedLang);
    }
  }, []);

  const handleToggleLang = () => {
    const nextLang = lang === 'fr' ? 'en' : 'fr';
    setLang(nextLang);
    localStorage.setItem('besrg_lang', nextLang);
  };

  // Track window scroll for 3D parallax
  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Navigation handler
  const handleNavigate = (view: string, service?: string) => {
    if (service) {
      setPreselectedService(service);
    }
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Structured Data Schema.org (JSON-LD) localized for Yaoundé, Cameroon
  useEffect(() => {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'ETS BESRG COMPANY',
      legalName: 'ETS BESRG COMPANY',
      alternateName: 'BESRG COMPANY',
      description:
        lang === 'fr'
          ? "Entreprise polyvalente à Yaoundé (Cameroun) immatriculée au RCCM RC/YAO/2024/A/843 : Équipements sportifs, marketing digital, communication, prestations de services et commerce général."
          : 'Versatile enterprise based in Yaoundé (Cameroon) registered under RCCM RC/YAO/2024/A/843: Sports equipment, digital marketing, communication, and general trade.',
      email: BESRG_DATA.company.email,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Yaoundé',
        addressRegion: 'Centre',
        addressCountry: 'CM'
      },
      makesOffer: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Équipements et fournitures sportifs',
            description: 'Matériel homologué, ballons, tenues personnalisées pour clubs et tournois.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Marketing Digital & Communication',
            description: 'Campagnes publicitaires Meta Ads, Google Ads, SEO et communication d’entreprise.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Prestations de Services & Commerce Général',
            description: 'Approvisionnement B2B, négoce multi-produits et fournitures administratives.'
          }
        }
      ]
    };

    let scriptTag = document.getElementById('besrg-schema-jsonld') as HTMLScriptElement;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'besrg-schema-jsonld';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.text = JSON.stringify(structuredData);
  }, [lang]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 selection:bg-[#00B2F6] selection:text-white relative">
      {/* Navigation Bar */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        lang={lang}
        onToggleLang={handleToggleLang}
      />

      {/* Main View Router */}
      <main className="flex-1 w-full bg-white">
        {currentView === 'home' && (
          <HomeView
            lang={lang}
            onNavigate={handleNavigate}
            scrollY={scrollY}
          />
        )}

        {currentView === 'services' && (
          <ServicesView
            lang={lang}
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'marketing-lab' && (
          <MarketingLabView
            lang={lang}
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'methodology' && (
          <MethodologyView
            lang={lang}
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'showcase' && (
          <ShowcaseView
            lang={lang}
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'about' && (
          <AboutView
            lang={lang}
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'contact' && (
          <ContactView
            lang={lang}
            preselectedService={preselectedService}
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Universal Footer */}
      <Footer
        onNavigate={handleNavigate}
        lang={lang}
        onOpenLegal={(type) => setLegalModalType(type)}
      />

      {/* Legal & Privacy Compliance Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
        lang={lang}
      />
    </div>
  );
}
