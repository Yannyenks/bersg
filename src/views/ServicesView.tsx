import React, { useState } from 'react';
import { BESRG_DATA, ServiceDetail } from '../data/besrgData.ts';
import { SafeImage } from '../components/common/SafeImage.tsx';
import {
  TrendingUp,
  Activity,
  Briefcase,
  Compass,
  AlertCircle,
  Lightbulb,
  CheckCircle2,
  ChevronDown,
  ArrowUpRight,
  HelpCircle,
  Clock,
  Sparkles
} from 'lucide-react';

interface ServicesViewProps {
  lang: 'fr' | 'en';
  onNavigate: (view: string, preselectedService?: string) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ lang, onNavigate }) => {
  const isFr = lang === 'fr';
  const [selectedServiceId, setSelectedServiceId] = useState<string>('equipements-sportifs');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const activeService: ServiceDetail =
    BESRG_DATA.servicesDetails.find(s => s.id === selectedServiceId) ||
    BESRG_DATA.servicesDetails[0];

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'equipements-sportifs':
        return <Activity className="w-4 h-4 text-[#F82649]" />;
      case 'marketing-digital':
        return <TrendingUp className="w-4 h-4 text-[#00B2F6]" />;
      case 'prestations-commerce':
        return <Briefcase className="w-4 h-4 text-[#054859]" />;
      case 'communication':
        return <Compass className="w-4 h-4 text-[#054859]" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#00B2F6]" />;
    }
  };

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white text-slate-800">
      {/* Page Header */}
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-[2px] bg-[#00B2F6]" />
          <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#054859]">
            {isFr ? 'CATALOGUE DES OFFRES & SERVICES' : 'SERVICES & SOLUTIONS'}
          </span>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-[#054859] tracking-tight mb-4">
          {isFr ? 'Expertises organisées par domaines d’activité.' : 'Expertise structured by declared sector.'}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {isFr
            ? 'ETS BESRG COMPANY structure ses prestations autour de pôles d’excellence reconnus : équipements sportifs, marketing digital & communication, prestations de services et commerce général.'
            : 'ETS BESRG COMPANY structures its operations around defined excellence pillars: athletic supplies, digital marketing & communication, corporate services, and general procurement.'}
        </p>
      </div>

      {/* Service Selector Tabs on Light Background */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-slate-200">
        {BESRG_DATA.servicesDetails.map(service => {
          const isActive = selectedServiceId === service.id;
          return (
            <button
              key={service.id}
              onClick={() => {
                setSelectedServiceId(service.id);
                setOpenFaqIndex(0);
              }}
              className={`flex items-center gap-2.5 px-4 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                isActive
                  ? 'bg-[#054859] text-white shadow-sm'
                  : 'bg-slate-50 text-slate-700 hover:text-[#054859] hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {getServiceIcon(service.id)}
              <span>{isFr ? service.title : service.titleEn}</span>
            </button>
          );
        })}
      </div>

      {/* Active Service Deep Dive Container */}
      <div className="space-y-10">
        {/* Service Title & Tagline Banner with Photo */}
        <div className="glass-panel p-6 sm:p-10 rounded-2xl relative overflow-hidden border border-slate-200 shadow-sm bg-gradient-to-r from-slate-50 via-white to-slate-50">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7">
              <span className="inline-block px-3 py-1 rounded-md bg-white border border-slate-200 text-[11px] font-mono font-bold text-[#054859] tracking-widest uppercase mb-4 shadow-2xs">
                {isFr ? activeService.badge : activeService.badgeEn}
              </span>

              <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-[#054859] mb-3">
                {isFr ? activeService.title : activeService.titleEn}
              </h2>

              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-6">
                {isFr ? activeService.tagline : activeService.taglineEn}
              </p>

              <button
                onClick={() => onNavigate('contact', activeService.id)}
                className="px-6 py-3 rounded-lg bg-[#054859] hover:bg-[#075f75] text-white text-xs font-semibold tracking-wider uppercase flex items-center gap-2 cursor-pointer shadow-sm transition-all"
              >
                <span>{isFr ? 'Solliciter un devis' : 'Request a Quote'}</span>
                <ArrowUpRight className="w-4 h-4 text-[#00B2F6]" />
              </button>
            </div>

            <div className="lg:col-span-5">
              <SafeImage
                src={activeService.imageUrl || 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1200&auto=format&fit=crop'}
                alt={isFr ? activeService.title : activeService.titleEn}
                aspectRatio="video"
                className="shadow-lg border border-slate-200"
              />
            </div>
          </div>
        </div>

        {/* Two-Column Problem vs Approach */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Problem */}
          <div className="p-8 rounded-xl bg-slate-50 border border-red-200/60 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#F82649] uppercase tracking-wider">
              <AlertCircle className="w-4 h-4" />
              <span>{isFr ? 'LE DÉFI CLIENT' : 'THE CHALLENGE'}</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              {isFr ? activeService.problem : activeService.problemEn}
            </p>
          </div>

          {/* Approach */}
          <div className="p-8 rounded-xl bg-slate-50 border border-cyan-200/80 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#054859] uppercase tracking-wider">
              <Lightbulb className="w-4 h-4 text-[#00B2F6]" />
              <span>{isFr ? 'NOTRE SOLUTION OPÉRATIONNELLE' : 'OUR OPERATIONAL SOLUTION'}</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              {isFr ? activeService.approach : activeService.approachEn}
            </p>
          </div>
        </div>

        {/* Deliverables & Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Deliverables */}
          <div className="lg:col-span-7 glass-panel p-8 rounded-xl space-y-6">
            <h3 className="font-display text-lg font-bold text-[#054859] border-b border-slate-100 pb-3">
              {isFr ? 'Livrables & Prestations Concrètes' : 'Tangible Deliverables'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activeService.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#00B2F6] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{isFr ? item.fr : item.en}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="lg:col-span-5 glass-panel p-8 rounded-xl space-y-6">
            <h3 className="font-display text-lg font-bold text-[#054859] border-b border-slate-100 pb-3">
              {isFr ? 'Bénéfices pour votre Organisation' : 'Business Value'}
            </h3>
            <ul className="space-y-4">
              {activeService.benefits.map((b, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F82649] shrink-0 mt-1.5" />
                  <span className="leading-relaxed font-medium">
                    {isFr ? b.fr : b.en}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Execution Process Steps */}
        <div className="glass-panel p-8 rounded-xl space-y-6">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#00B2F6]" />
            <h3 className="font-display text-lg font-bold text-[#054859]">
              {isFr ? 'Déroulement de l’Intervention' : 'Execution Milestones'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activeService.steps.map(step => (
              <div key={step.step} className="p-5 rounded-lg bg-slate-50 border border-slate-200/90 space-y-2">
                <span className="font-mono text-xl font-bold text-[#054859]">{step.step}</span>
                <h4 className="font-display text-sm font-bold text-slate-800">
                  {isFr ? step.titleFr : step.titleEn}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {isFr ? step.descFr : step.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Service FAQs */}
        <div className="glass-panel p-8 rounded-xl space-y-6">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-[#00B2F6]" />
            <h3 className="font-display text-lg font-bold text-[#054859]">
              {isFr ? 'Questions Fréquentes' : 'Frequently Asked Questions'}
            </h3>
          </div>

          <div className="space-y-3">
            {activeService.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-lg bg-slate-50 border border-slate-200 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full px-5 py-4 flex items-center justify-between text-left text-xs sm:text-sm font-semibold text-slate-800 hover:text-[#054859] transition-colors cursor-pointer"
                  >
                    <span>{isFr ? faq.qFr : faq.qEn}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#054859] transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-200 pt-3">
                      {isFr ? faq.aFr : faq.aEn}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA for active service */}
        <div className="p-8 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-xs">
          <div>
            <h4 className="font-display text-lg font-bold text-[#054859] mb-1">
              {isFr ? 'Besoin d’un devis quantitatif ou d’un cadrage ?' : 'Need an itemized quote or project scoping?'}
            </h4>
            <p className="text-xs text-slate-600">
              {isFr ? 'Réponse commerciale et technique sous 24 à 48 heures.' : 'Technical and commercial quote returned within 24 to 48 hours.'}
            </p>
          </div>

          <button
            onClick={() => onNavigate('contact', activeService.id)}
            className="px-6 py-3 rounded-lg bg-[#054859] hover:bg-[#075f75] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-sm shrink-0"
          >
            <span>{isFr ? 'Demander un devis' : 'Request Proposal'}</span>
            <ArrowUpRight className="w-4 h-4 text-[#00B2F6]" />
          </button>
        </div>
      </div>
    </div>
  );
};
