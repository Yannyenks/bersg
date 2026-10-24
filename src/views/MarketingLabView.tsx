import React, { useState } from 'react';
import { BESRG_DATA } from '../data/besrgData.ts';
import {
  TrendingUp,
  Target,
  Sliders,
  HelpCircle,
  ChevronDown,
  ArrowUpRight,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';

interface MarketingLabViewProps {
  lang: 'fr' | 'en';
  onNavigate: (view: string, service?: string) => void;
}

export const MarketingLabView: React.FC<MarketingLabViewProps> = ({ lang, onNavigate }) => {
  const isFr = lang === 'fr';

  // Interactive ROI & Lead generation simulator state
  const [monthlyBudget, setMonthlyBudget] = useState<number>(3500);
  const [estimatedCpc, setEstimatedCpc] = useState<number>(1.8);
  const [conversionRate, setConversionRate] = useState<number>(3.5);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Computed projections
  const estimatedClicks = Math.round(monthlyBudget / Math.max(estimatedCpc, 0.1));
  const estimatedLeads = Math.round(estimatedClicks * (conversionRate / 100));
  const estimatedCostPerLead = estimatedLeads > 0 ? (monthlyBudget / estimatedLeads).toFixed(2) : '0';

  const faqs = [
    {
      qFr: 'Quels canaux publicitaires utilisez-vous principalement au Cameroun et dans la sous-région ?',
      qEn: 'Which ad channels do you prioritize in Cameroon and the sub-region?',
      aFr: 'L’écosystème Meta (Facebook, Instagram, WhatsApp Business) est le premier canal d’acquisition au Cameroun, complété par Google Search et le SEO local pour capter la demande intentionniste.',
      aEn: 'The Meta ecosystem (Facebook, Instagram, WhatsApp Business) is the primary customer acquisition bridge in Cameroon, complemented by Google Search and local SEO for active purchase intent.'
    },
    {
      qFr: 'Comment qualifiez-vous les prospects générés ?',
      qEn: 'How do you qualify generated leads?',
      aFr: 'Nous mettons en place des formulaires et des scénarios automatisés posant les questions filtres essentielles (spécification du besoin, volume, budget indicatif) avant transmission à vos équipes commerciales.',
      aEn: 'We implement forms and automated flows asking essential qualification gate questions (specifications, volume, budget range) before handover to sales teams.'
    },
    {
      qFr: 'Peut-on démarrer avec un budget publicitaire modéré ?',
      qEn: 'Can we launch with a moderate advertising budget?',
      aFr: 'Oui, nous calibrons les premières phases de test pour vérifier la pertinence des messages publicitaires et des audiences avant tout déploiement à plus grande échelle.',
      aEn: 'Yes, we calibrate initial test phases to validate creative resonance and audience fit before scaling spend.'
    }
  ];

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white text-slate-800">
      {/* Hero Banner on White / Light Slate */}
      <div className="relative glass-panel p-8 sm:p-12 rounded-2xl overflow-hidden border border-slate-200 mb-14 bg-gradient-to-br from-slate-50 via-white to-slate-50 shadow-xs">
        <div className="max-w-3xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-slate-200 text-xs font-mono font-bold text-[#054859] tracking-widest uppercase mb-4 shadow-2xs">
            <TrendingUp className="w-3.5 h-3.5 text-[#00B2F6]" />
            <span>GROWTH &amp; PERFORMANCE LAB</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-[#054859] tracking-tight mb-4">
            {isFr
              ? 'Le marketing digital conçu comme un levier de rentabilité.'
              : 'Digital marketing engineered as a bottom-line profit engine.'}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
            {isFr
              ? 'ETS BESRG COMPANY structure vos dispositifs d’acquisition publicitaire (Meta Ads, Google Search, tunnels WhatsApp) et votre communication institutionnelle pour transformer des contacts en clients fidèles.'
              : 'ETS BESRG COMPANY structures your ad acquisition channels (Meta Ads, Google Search, WhatsApp funnels) and corporate communications to convert leads into loyal clients.'}
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate('contact', 'marketing-digital')}
              className="px-6 py-3.5 rounded-lg bg-[#054859] hover:bg-[#075f75] text-white text-xs font-semibold tracking-wider uppercase border border-[#00B2F6]/50 shadow-sm flex items-center gap-2 cursor-pointer transition-all"
            >
              <span>{isFr ? 'Demander un plan média' : 'Request Media Plan'}</span>
              <ArrowUpRight className="w-4 h-4 text-[#00B2F6]" />
            </button>
          </div>
        </div>
      </div>

      {/* 6 Tactical Capabilities */}
      <div className="mb-16">
        <div className="max-w-2xl mb-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-[2px] bg-[#00B2F6]" />
            <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#054859]">
              {isFr ? 'DISPOSITIFS MARKETING DÉCLARÉS' : 'TACTICAL CAPABILITIES'}
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#054859]">
            {isFr ? 'Les piliers de notre laboratoire d’acquisition.' : 'Core growth laboratory disciplines.'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BESRG_DATA.marketingLabFeatures.map((feature, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover p-6 rounded-xl border border-slate-200 space-y-3 group shadow-xs"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#054859]">0{idx + 1} //</span>
                <Target className="w-4 h-4 text-slate-400 group-hover:text-[#00B2F6] transition-colors" />
              </div>
              <h3 className="font-display text-base font-bold text-[#054859]">
                {isFr ? feature.titleFr : feature.titleEn}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {isFr ? feature.descFr : feature.descEn}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Lead & Budget Projection Simulator on White Canvas */}
      <div className="glass-panel p-8 sm:p-10 rounded-2xl border border-slate-200 mb-16 bg-white shadow-sm">
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#054859] uppercase tracking-wider mb-2">
            <Sliders className="w-4 h-4 text-[#00B2F6]" />
            <span>{isFr ? 'SIMULATEUR DE PROJECTION STRATÉGIQUE' : 'STRATEGIC PROJECTION SIMULATOR'}</span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#054859] mb-2">
            {isFr ? 'Modélisez vos volumes d’acquisition prévisionnels.' : 'Model your forecast acquisition volumes.'}
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            {isFr
              ? 'Ajustez les variables pour appréhender la dynamique de conversion d’une campagne publicitaire structurée.'
              : 'Adjust parameters to explore the conversion dynamics of a structured advertising funnel.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-700 font-medium">
                  {isFr ? 'Budget Média Mensuel Estimé (€)' : 'Monthly Media Budget (€)'}
                </span>
                <span className="font-mono font-bold text-[#054859]">{monthlyBudget.toLocaleString()} €</span>
              </div>
              <input
                type="range"
                min="500"
                max="20000"
                step="500"
                value={monthlyBudget}
                onChange={e => setMonthlyBudget(Number(e.target.value))}
                className="w-full accent-[#00B2F6] bg-slate-200 h-2 rounded cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-400">
                <span>500 €</span>
                <span>10 000 €</span>
                <span>20 000 €</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-700 font-medium">
                  {isFr ? 'Coût par Clic Moyen (CPC indicatif €)' : 'Estimated Avg Cost-per-Click (€)'}
                </span>
                <span className="font-mono font-bold text-[#054859]">{estimatedCpc.toFixed(2)} €</span>
              </div>
              <input
                type="range"
                min="0.3"
                max="5.0"
                step="0.1"
                value={estimatedCpc}
                onChange={e => setEstimatedCpc(Number(e.target.value))}
                className="w-full accent-[#00B2F6] bg-slate-200 h-2 rounded cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-400">
                <span>0.30 € (Meta Local)</span>
                <span>1.80 € (Mix Search/Social)</span>
                <span>5.00 € (B2B Décisionnel)</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-700 font-medium">
                  {isFr ? 'Taux de Conversion (%)' : 'Conversion Rate (%)'}
                </span>
                <span className="font-mono font-bold text-[#054859]">{conversionRate.toFixed(1)} %</span>
              </div>
              <input
                type="range"
                min="1.0"
                max="10.0"
                step="0.5"
                value={conversionRate}
                onChange={e => setConversionRate(Number(e.target.value))}
                className="w-full accent-[#00B2F6] bg-slate-200 h-2 rounded cursor-pointer"
              />
            </div>
          </div>

          {/* Results Projection Card */}
          <div className="lg:col-span-5 p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#054859] font-bold block">
              {isFr ? 'PROJECTIONS MATHÉMATIQUES' : 'MATHEMATICAL PROJECTIONS'}
            </span>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 rounded-lg bg-white border border-slate-200">
                <span className="text-[10px] text-slate-500 block mb-1">
                  {isFr ? 'Clics Visiteurs / mois' : 'Visitor Clicks / mo'}
                </span>
                <span className="font-display text-2xl font-black text-[#054859]">
                  {estimatedClicks.toLocaleString()}
                </span>
              </div>

              <div className="p-3 rounded-lg bg-white border border-slate-200">
                <span className="text-[10px] text-slate-500 block mb-1">
                  {isFr ? 'Leads Estimés / mois' : 'Estimated Leads / mo'}
                </span>
                <span className="font-display text-2xl font-black text-[#00B2F6]">
                  ~{estimatedLeads}
                </span>
              </div>

              <div className="p-3 rounded-lg bg-white border border-slate-200 col-span-2">
                <span className="text-[10px] text-slate-500 block mb-1">
                  {isFr ? 'Coût par Lead Estimé (CPL)' : 'Estimated Cost Per Lead (CPL)'}
                </span>
                <span className="font-display text-2xl font-black text-[#054859]">
                  {estimatedCostPerLead} €
                </span>
              </div>
            </div>

            {/* Regulatory Disclaimer */}
            <div className="p-3 rounded-lg bg-white border border-slate-200 text-[10px] text-slate-500 leading-relaxed flex items-start gap-2">
              <ShieldAlert className="w-4 h-4 text-[#F82649] shrink-0 mt-0.5" />
              <span>
                {isFr
                  ? 'Avertissement déontologique : Ce simulateur fournit une estimation mathématique purement indicative. Aucun chiffre d’affaires ou volume n’est contractuellement garanti sans audit préalable.'
                  : 'Regulatory disclaimer: This simulator provides educational estimation. No revenue or volume is contractually guaranteed without prior scoping.'}
              </span>
            </div>

            <button
              onClick={() => onNavigate('contact', 'marketing-digital')}
              className="w-full py-3 rounded-lg bg-[#054859] hover:bg-[#075f75] text-white text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <span>{isFr ? 'Valider cette modélisation' : 'Validate this model'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Marketing Lab FAQs */}
      <div className="glass-panel p-8 rounded-xl space-y-6">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-4 h-4 text-[#00B2F6]" />
          <h3 className="font-display text-lg font-bold text-[#054859]">
            {isFr ? 'Questions Fréquentes sur le Marketing Digital' : 'Marketing Lab FAQs'}
          </h3>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
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
    </div>
  );
};
