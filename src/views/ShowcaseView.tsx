import React, { useState } from 'react';
import { BESRG_DATA, DemoProject } from '../data/besrgData.ts';
import { SafeImage } from '../components/common/SafeImage.tsx';
import {
  ArrowUpRight,
  ShieldAlert,
  X
} from 'lucide-react';

interface ShowcaseViewProps {
  lang: 'fr' | 'en';
  onNavigate: (view: string) => void;
}

export const ShowcaseView: React.FC<ShowcaseViewProps> = ({ lang, onNavigate }) => {
  const isFr = lang === 'fr';
  const [selectedDemo, setSelectedDemo] = useState<DemoProject | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', labelFr: 'Tous les cas d’usage', labelEn: 'All Showcases' },
    { id: 'sport', labelFr: 'Équipements Sportifs', labelEn: 'Sports Gear' },
    { id: 'marketing', labelFr: 'Marketing & Acquisition', labelEn: 'Marketing & Ads' },
    { id: 'comm', labelFr: 'Communication & Image', labelEn: 'Communication & Brand' },
    { id: 'procurement', labelFr: 'Commerce & Prestations', labelEn: 'Trade & Supply' }
  ];

  const filteredProjects = BESRG_DATA.demoShowcase.filter(item => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'sport') return item.tags.includes('Équipements Sportifs');
    if (selectedCategory === 'marketing') return item.tags.includes('Meta Ads') || item.tags.includes('Acquisition');
    if (selectedCategory === 'comm') return item.tags.includes('Communication') || item.tags.includes('Image de Marque');
    if (selectedCategory === 'procurement') return item.tags.includes('Commerce Général') || item.tags.includes('Approvisionnement');
    return true;
  });

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white text-slate-800">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-[2px] bg-[#00B2F6]" />
          <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#054859]">
            {isFr ? 'DÉMONSTRATEURS R&D & CAS TYPES' : 'R&D PROTOTYPES & SHOWCASES'}
          </span>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-[#054859] tracking-tight mb-4">
          {isFr ? 'Démonstrateurs d’ingénierie et de service.' : 'Engineering & Service Demonstrators.'}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {isFr
            ? 'Ces fiches d’étude illustrent notre savoir-faire opérationnel en équipements sportifs, marketing d’acquisition, communication et commerce général. Elles sont présentées sous forme de démonstrateurs conceptuels.'
            : 'These case studies demonstrate our capabilities in sports supply, performance marketing, communication, and general procurement. They are explicitly presented as conceptual demonstrators.'}
        </p>

        {/* Mandatory Transparency Callout */}
        <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3 text-xs text-slate-600">
          <ShieldAlert className="w-4 h-4 text-[#00B2F6] shrink-0 mt-0.5" />
          <span>
            {isFr
              ? 'Transparence déontologique : Les fiches ci-dessous sont des modélisations types conçues pour présenter nos normes de qualité, de conditionnement et de traçabilité.'
              : 'Ethical transparency: All showcases below are model use cases illustrating our standards of quality, packing, and traceability.'}
          </span>
        </div>
      </div>

      {/* Filter Category Tabs on White */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-slate-200">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-[#054859] text-white shadow-xs'
                : 'bg-slate-50 text-slate-600 hover:text-[#054859] hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {isFr ? cat.labelFr : cat.labelEn}
          </button>
        ))}
      </div>

      {/* Showcase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(demo => (
          <div
            key={demo.id}
            className="glass-panel glass-panel-hover rounded-2xl overflow-hidden border border-slate-200 flex flex-col justify-between group shadow-xs bg-white"
          >
            {/* Visual Photo Header with SafeImage */}
            <div className="relative">
              <SafeImage
                src={demo.imageUrl || 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1200&auto=format&fit=crop'}
                alt={demo.title}
                aspectRatio="video"
                className="rounded-t-2xl rounded-b-none"
              />
              <div className="absolute top-3 left-3 flex items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-sm text-white text-[10px] font-mono font-semibold uppercase tracking-wider">
                  {isFr ? demo.badgeFr : demo.badgeEn}
                </span>
              </div>
            </div>

            {/* Title & Category */}
            <div className="p-6 pb-2">
              <span className="text-[11px] font-mono text-[#00B2F6] font-semibold block mb-1">
                {demo.category}
              </span>
              <h3 className="font-display text-lg font-bold text-[#054859]">
                {demo.title}
              </h3>
            </div>

            {/* Body */}
            <div className="p-6 space-y-4">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {isFr ? demo.summaryFr : demo.summaryEn}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-100 text-center">
                {demo.metrics.map((m, mIdx) => (
                  <div key={mIdx}>
                    <span className="block font-display text-sm font-bold text-[#054859]">
                      {m.value}
                    </span>
                    <span className="block text-[10px] font-mono text-slate-500">
                      {isFr ? m.labelFr : m.labelEn}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {demo.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200 text-[10px] font-mono text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action */}
            <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-500">
                {isFr ? 'Modèle conceptuel' : 'Conceptual Model'}
              </span>
              <button
                onClick={() => setSelectedDemo(demo)}
                className="text-xs font-semibold text-[#054859] hover:text-[#00B2F6] transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span>{isFr ? 'Examiner la fiche' : 'Inspect Details'}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Concept Deep Dive Modal on White Canvas */}
      {selectedDemo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] text-slate-800">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200 bg-slate-50">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#00B2F6] font-bold block mb-1">
                  {isFr ? selectedDemo.badgeFr : selectedDemo.badgeEn}
                </span>
                <h3 className="font-display text-xl font-bold text-[#054859]">
                  {selectedDemo.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedDemo(null)}
                className="p-2 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-200 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-600">
              <SafeImage
                src={selectedDemo.imageUrl || 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1200&auto=format&fit=crop'}
                alt={selectedDemo.title}
                aspectRatio="video"
                className="rounded-xl shadow-md border border-slate-200"
              />

              <div>
                <h4 className="text-slate-900 font-semibold text-xs font-mono uppercase tracking-wider mb-2 text-[#054859]">
                  {isFr ? '01 // Défi Opérationnel ou Technique' : '01 // The Challenge'}
                </h4>
                <p className="leading-relaxed">
                  {isFr ? selectedDemo.challengeFr : selectedDemo.challengeEn}
                </p>
              </div>

              <div>
                <h4 className="text-slate-900 font-semibold text-xs font-mono uppercase tracking-wider mb-2 text-[#054859]">
                  {isFr ? '02 // Solution & Approche Retenue' : '02 // Implemented Approach'}
                </h4>
                <p className="leading-relaxed">
                  {isFr ? selectedDemo.solutionFr : selectedDemo.solutionEn}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="font-semibold text-xs font-mono uppercase tracking-wider mb-3 text-[#F82649]">
                  {isFr ? 'Spécifications Observées sur le Cas' : 'Observed Benchmark Specifications'}
                </h4>
                <div className="grid grid-cols-3 gap-3 text-center">
                  {selectedDemo.metrics.map((m, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-white border border-slate-200">
                      <span className="block font-display text-sm font-bold text-[#054859]">{m.value}</span>
                      <span className="block text-[10px] font-mono text-slate-500">{isFr ? m.labelFr : m.labelEn}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex justify-between items-center">
              <button
                onClick={() => setSelectedDemo(null)}
                className="text-xs text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
              >
                {isFr ? 'Fermer' : 'Close'}
              </button>
              <button
                onClick={() => {
                  setSelectedDemo(null);
                  onNavigate('contact');
                }}
                className="px-5 py-2 rounded-lg bg-[#054859] hover:bg-[#075f75] text-white text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer flex items-center gap-2 shadow-xs"
              >
                <span>{isFr ? 'Demander un devis similaire' : 'Request Similar Proposal'}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#00B2F6]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
