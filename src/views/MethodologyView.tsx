import React, { useState } from 'react';
import { BESRG_DATA } from '../data/besrgData.ts';
import {
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

interface MethodologyViewProps {
  lang: 'fr' | 'en';
  onNavigate: (view: string) => void;
}

export const MethodologyView: React.FC<MethodologyViewProps> = ({ lang, onNavigate }) => {
  const isFr = lang === 'fr';
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const stepsDetails = [
    {
      num: '01',
      code: 'DISCOVER',
      titleFr: 'Comprendre & Cadrer les Besoins',
      titleEn: 'Discover & Scope Requirements',
      summaryFr: 'Analyse approfondie de votre projet : qu’il s’agisse de matériel sportif, d’une campagne publicitaire ou d’approvisionnement général.',
      summaryEn: 'Deep-dive analysis of your requirements: whether athletic supplies, advertising campaigns, or general trade.',
      substepsFr: [
        'Recueil du cahier des charges et spécifications techniques',
        'Étude des cibles et des contraintes de calendrier à Yaoundé et régions',
        'Identification des meilleures sources d’approvisionnement et leviers média',
        'Élaboration d’une proposition financière et opérationnelle transparente'
      ],
      substepsEn: [
        'Collection of technical requirements and procurement briefs',
        'Audience mapping and scheduling constraints across Yaoundé and regions',
        'Identification of verified supply sources and advertising levers',
        'Issuance of transparent operational and financial proposals'
      ],
      deliverableFr: 'Matrice de cadrage & Devis détaillé chiffré',
      deliverableEn: 'Scoping Matrix & Itemized Quote',
      color: '#054859'
    },
    {
      num: '02',
      code: 'STRATEGIZE',
      titleFr: 'Concevoir l’Approche & Valider',
      titleEn: 'Strategize & Validate',
      summaryFr: 'Validation des échantillons de matériel, modélisation des tunnels marketing ou sélection des filières d’achat.',
      summaryEn: 'Sample equipment validation, ad funnel prototyping, and procurement supply-line selection.',
      substepsFr: [
        'Validation des fiches techniques (textiles, ballons, matériel bureautique)',
        'Création des maquettes graphiques ou des visuels de campagne',
        'Planification logistique détaillée et confirmation des jalons',
        'Mise en place des protocoles de traçabilité'
      ],
      substepsEn: [
        'Technical sheet verification (athletic textiles, balls, office hardware)',
        'Design of brand visuals and advertising creatives',
        'Logistics schedule coordination and milestone validation',
        'Setup of end-to-end tracking protocols'
      ],
      deliverableFr: 'Bons à tirer (BAT) & Calendrier logistique validé',
      deliverableEn: 'Proofs of Concept & Validated Delivery Schedule',
      color: '#00B2F6'
    },
    {
      num: '03',
      code: 'BUILD',
      titleFr: 'Exécuter & Livrer avec Rigueur',
      titleEn: 'Execute & Deliver with Rigor',
      summaryFr: 'Lancement des campagnes publicitaires, personnalisation des équipements sportifs ou acheminement des marchandises.',
      summaryEn: 'Ad campaign launch, athletic gear customization, or consignment transport with strict inspection.',
      substepsFr: [
        'Personnalisation textile (flocage, broderie, marquage haute qualité)',
        'Activation des campagnes Meta & Google Ads avec contrôle du budget',
        'Conditionnement rigoureux pour le transport et la manutention',
        'Contrôle qualité systématique avant livraison'
      ],
      substepsEn: [
        'Textile customization (heat-press, embroidery, high-grade printing)',
        'Activation of Meta & Google Ads campaigns with budget governance',
        'Rigorous packing for transit and handling safety',
        'Systematic pre-dispatch quality control'
      ],
      deliverableFr: 'Bordereaux de livraison & Rapports d’exécution initiaux',
      deliverableEn: 'Delivery Slips & Initial Campaign Handover Reports',
      color: '#F82649'
    },
    {
      num: '04',
      code: 'OPTIMIZE',
      titleFr: 'Accompagner & Pérenniser',
      titleEn: 'Support & Scale',
      summaryFr: 'La livraison n’est que la première étape : nous assurons le service après-vente et la pérennité de notre partenariat.',
      summaryEn: 'Delivery is just milestone one: we ensure after-sales support and ongoing partnership continuity.',
      substepsFr: [
        'Recueil du procès-verbal de conformité à réception',
        'Analyse continue des retombées pour les campagnes de communication',
        'Maintien d’un stock de réassort pour les clubs et entreprises clientes',
        'Revue périodique des besoins d’approvisionnement'
      ],
      substepsEn: [
        'Conformity acceptance report collection upon delivery',
        'Continuous performance monitoring for marketing campaigns',
        'Inventory buffer maintenance for repeat athletic club orders',
        'Periodic procurement reviews and cadence meetings'
      ],
      deliverableFr: 'Bilan de conformité & Suivi partenarial continu',
      deliverableEn: 'Conformity Acceptance Record & Ongoing Partnership Cadence',
      color: '#00B2F6'
    }
  ];

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white text-slate-800">
      {/* Page Header */}
      <div className="max-w-3xl mb-14">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-[2px] bg-[#F82649]" />
          <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#054859]">
            {isFr ? 'CADRE MÉTHODOLOGIQUE' : 'METHODOLOGICAL FRAMEWORK'}
          </span>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-[#054859] tracking-tight mb-4">
          {isFr ? 'La Méthodologie ETS BESRG en 4 Étapes.' : 'The 4-Step ETS BESRG Methodology.'}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {isFr
            ? 'Une démarche éprouvée qui garantit rigueur, traçabilité et respect scrupuleux des engagements pour chacun de vos projets.'
            : 'A battle-tested process ensuring rigor, transparency, and strict adherence to commitments on every engagement.'}
        </p>
      </div>

      {/* Stepper Navigation */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {stepsDetails.map((step, idx) => {
          const isActive = activeStepIndex === idx;
          return (
            <button
              key={step.num}
              onClick={() => setActiveStepIndex(idx)}
              className={`p-5 rounded-xl border text-left transition-all cursor-pointer relative overflow-hidden ${
                isActive
                  ? 'bg-slate-50 border-[#054859] shadow-sm'
                  : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <div
                className="absolute top-0 left-0 right-0 h-1 transition-opacity"
                style={{ backgroundColor: step.color, opacity: isActive ? 1 : 0.4 }}
              />
              <span className="font-mono text-xs text-slate-500 block mb-1">
                {step.num} // {step.code}
              </span>
              <span className="font-display text-sm font-bold text-[#054859] block">
                {isFr ? step.titleFr : step.titleEn}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Step Deep-Dive Card */}
      {(() => {
        const current = stepsDetails[activeStepIndex];
        return (
          <div className="glass-panel p-8 sm:p-12 rounded-2xl border border-slate-200 space-y-8 mb-16 shadow-xs bg-white">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-3xl font-black text-[#054859]">
                    {current.num}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#F82649] font-bold">
                    PHASE {current.code}
                  </span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#054859]">
                  {isFr ? current.titleFr : current.titleEn}
                </h2>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700">
                <span className="text-[#054859] font-bold">Livrable clé : </span>
                {isFr ? current.deliverableFr : current.deliverableEn}
              </div>
            </div>

            <p className="text-base text-slate-600 leading-relaxed font-normal">
              {isFr ? current.summaryFr : current.summaryEn}
            </p>

            {/* Checklist of Substeps */}
            <div className="space-y-3">
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#054859] font-bold">
                {isFr ? 'Jalons & Actions Concrètes :' : 'Key Operational Milestones:'}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(isFr ? current.substepsFr : current.substepsEn).map((substep, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-4 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-3 text-xs text-slate-700"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#00B2F6] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{substep}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step Controls */}
            <div className="flex items-center justify-between pt-6 border-t border-slate-100">
              <button
                disabled={activeStepIndex === 0}
                onClick={() => setActiveStepIndex(Math.max(0, activeStepIndex - 1))}
                className={`text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                  activeStepIndex === 0
                    ? 'opacity-30 cursor-not-allowed text-slate-400'
                    : 'text-slate-600 hover:text-[#054859]'
                }`}
              >
                ← {isFr ? 'Étape précédente' : 'Previous Step'}
              </button>

              <button
                onClick={() => {
                  if (activeStepIndex < stepsDetails.length - 1) {
                    setActiveStepIndex(activeStepIndex + 1);
                  } else {
                    onNavigate('contact');
                  }
                }}
                className="px-6 py-2.5 rounded-lg bg-[#054859] hover:bg-[#075f75] text-white text-xs font-semibold tracking-wider uppercase transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <span>
                  {activeStepIndex < stepsDetails.length - 1
                    ? isFr
                      ? 'Étape suivante'
                      : 'Next Step'
                    : isFr
                    ? 'Lancer votre projet'
                    : 'Launch Your Project'}
                </span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        );
      })()}
    </div>
  );
};
