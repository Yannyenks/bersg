import React from 'react';
import { BESRG_DATA } from '../data/besrgData.ts';
import {
  Building,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
  Calendar,
  MapPin,
  FileText
} from 'lucide-react';

interface AboutViewProps {
  lang: 'fr' | 'en';
  onNavigate: (view: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ lang, onNavigate }) => {
  const isFr = lang === 'fr';

  const values = [
    {
      titleFr: 'Exigence & Rigueur d’Exécution',
      titleEn: 'Rigor & Craft Excellence',
      descFr: 'Qu’il s’agisse du choix des matériaux pour un équipement sportif ou du paramétrage d’une campagne publicitaire, chaque détail fait l’objet d’un contrôle strict.',
      descEn: 'Whether selecting certified athletic fabrics or configuring an advertising acquisition funnel, every detail undergoes strict quality verification.'
    },
    {
      titleFr: 'Utilité Opérationnelle & Valeur Réelle',
      titleEn: 'Operational Utility & Concrete Value',
      descFr: 'Nous refusons les actions gratuites sans impact mesurable. Nos prestations répondent à un besoin concret d’approvisionnement ou de visibilité commerciale.',
      descEn: 'We deliver purposeful solutions tied to concrete business utility, from dependable sports supply to measurable market acquisition.'
    },
    {
      titleFr: 'Transparence & Intégrité Administrative',
      titleEn: 'Transparency & Administrative Integrity',
      descFr: 'Immatriculée officiellement au RCCM, ETS BESRG COMPANY présente ses informations sans fard : devis clairs, délais tenus et zéro faux avis.',
      descEn: 'Officially registered under RCCM, ETS BESRG COMPANY presents its business framework with clarity: itemized quotes, kept schedules, and zero hype.'
    },
    {
      titleFr: 'Partenariat Durable & Proximité',
      titleEn: 'Enduring Partnership & Local Proximity',
      descFr: 'Basée à Yaoundé, nous cultivons une relation de confiance et de proximité avec les entreprises, clubs sportifs et administrations camerounaises et internationales.',
      descEn: 'Headquartered in Yaoundé, we foster dependable proximity with corporations, athletic clubs, and institutional partners in Cameroon and beyond.'
    }
  ];

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white text-slate-800">
      {/* Page Header */}
      <div className="max-w-3xl mb-14">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-[2px] bg-[#00B2F6]" />
          <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#054859]">
            {isFr ? 'PRÉSENTATION INSTITUTIONNELLE' : 'INSTITUTIONAL PROFILE'}
          </span>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-[#054859] tracking-tight mb-4">
          {isFr ? 'À Propos d’ETS BESRG COMPANY.' : 'About ETS BESRG COMPANY.'}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {isFr
            ? 'ETS BESRG COMPANY est un établissement commercial polyvalent fondé à Yaoundé (Cameroun), associant vision d’affaires, marketing digital, communication, approvisionnement en équipements sportifs et commerce général.'
            : 'ETS BESRG COMPANY is a versatile commercial establishment founded in Yaoundé (Cameroon), uniting business acumen, digital marketing, communication, athletic equipment supply, and general trade procurement.'}
        </p>
      </div>

      {/* Official Administrative Framework Card (Mandatory for Institutional Credibility) */}
      <div className="p-8 sm:p-10 rounded-2xl bg-slate-50 border border-slate-200 mb-16 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-[#054859] shadow-2xs">
              <Building className="w-6 h-6 text-[#00B2F6]" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500 font-bold block">
                {isFr ? 'CADRE LÉGAL & ENREGISTREMENT OFFICIEL' : 'LEGAL FRAMEWORK & REGISTRATION'}
              </span>
              <h2 className="font-display text-xl font-bold text-[#054859]">
                {BESRG_DATA.company.legalName}
              </h2>
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white border border-slate-200 text-xs font-mono text-slate-700 shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-[#00B2F6]" />
            <span>RCCM : {BESRG_DATA.company.rccm}</span>
          </div>
        </div>

        {/* Administrative Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs text-slate-600 mb-6">
          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
            <span className="block font-mono text-slate-400 text-[10px] uppercase mb-1">
              {isFr ? 'Forme Juridique Déclarée' : 'Declared Legal Form'}
            </span>
            <span className="font-display text-sm font-bold text-slate-800">
              {BESRG_DATA.company.legalForm}
            </span>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
            <span className="block font-mono text-slate-400 text-[10px] uppercase mb-1">
              {isFr ? 'Numéro RCCM' : 'RCCM Registration'}
            </span>
            <span className="font-mono text-sm font-bold text-[#054859]">
              {BESRG_DATA.company.rccm}
            </span>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
            <span className="block font-mono text-slate-400 text-[10px] uppercase mb-1">
              {isFr ? 'Début d’Activité Déclaré' : 'Declared Inception'}
            </span>
            <span className="font-display text-sm font-bold text-slate-800 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#00B2F6]" />
              {BESRG_DATA.company.activityStartDate}
            </span>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
            <span className="block font-mono text-slate-400 text-[10px] uppercase mb-1">
              {isFr ? 'Localisation / Siège' : 'Declared Headquarters'}
            </span>
            <span className="font-display text-sm font-bold text-slate-800 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#F82649]" />
              {BESRG_DATA.company.location}
            </span>
          </div>
        </div>

        {/* Declared Activities Box */}
        <div className="p-4 rounded-xl bg-white border border-slate-200/80 space-y-2 text-xs">
          <span className="font-mono text-slate-500 font-semibold uppercase text-[10px] block">
            {isFr ? 'Domaines d’activité déclarés :' : 'Official declared activity domains:'}
          </span>
          <div className="flex flex-wrap gap-2">
            {BESRG_DATA.company.declaredDomains.map(d => (
              <span
                key={d.id}
                className="px-3 py-1 rounded-md bg-slate-100 text-slate-800 border border-slate-200 font-medium text-xs flex items-center gap-1.5"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00B2F6]" />
                <span>{isFr ? d.fr : d.en}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Regulatory Transparency Note */}
        <p className="mt-4 text-[11px] text-slate-500 leading-relaxed italic">
          {isFr ? BESRG_DATA.company.transparencyNoticeFr : BESRG_DATA.company.transparencyNoticeEn}
        </p>
      </div>

      {/* Vision & Mission Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="glass-panel p-8 sm:p-10 rounded-2xl border border-slate-200 space-y-3 bg-white shadow-xs">
          <span className="text-xs font-mono font-bold text-[#054859] uppercase tracking-wider block">
            {isFr ? 'NOTRE VISION' : 'OUR VISION'}
          </span>
          <h2 className="font-display text-xl sm:text-2xl font-bold text-[#054859]">
            {isFr ? 'Un partenaire de référence polyvalent et fiable.' : 'A trusted, versatile commercial reference.'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {isFr
              ? 'Bâtir une entreprise commerciale et de services capable d’accompagner avec rigueur les clubs, entreprises, écoles et institutions dans leurs défis matériels et digitaux, au Cameroun et à l’échelle sous-régionale.'
              : 'Building a dependable commercial and service enterprise supporting athletic clubs, corporations, schools, and institutions across Cameroon and the sub-region in their operational and digital ambitions.'}
          </p>
        </div>

        <div className="glass-panel p-8 sm:p-10 rounded-2xl border border-slate-200 space-y-3 bg-white shadow-xs">
          <span className="text-xs font-mono font-bold text-[#F82649] uppercase tracking-wider block">
            {isFr ? 'NOTRE MISSION' : 'OUR MISSION'}
          </span>
          <h2 className="font-display text-xl sm:text-2xl font-bold text-[#054859]">
            {isFr ? 'L’excellence au service de vos projets.' : 'Delivering excellence for your initiatives.'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {isFr
              ? 'Fournir des équipements sportifs de qualité supérieure, orchestrer des campagnes de communication rentables et sécuriser les approvisionnements professionnels grâce à des devis transparents et des livraisons documentées.'
              : 'Supplying top-grade athletic equipment, executing high-converting digital communication, and securing corporate procurement through transparent quotes and tracked deliveries.'}
          </p>
        </div>
      </div>

      {/* Corporate Values */}
      <div className="mb-16">
        <div className="max-w-2xl mb-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-[2px] bg-[#00B2F6]" />
            <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#054859]">
              {isFr ? 'NOS PRINCIPES FONDAMENTAUX' : 'CORE PRINCIPLES'}
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#054859]">
            {isFr ? 'Les valeurs qui guident chaque engagement.' : 'The values guiding every engagement.'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((v, idx) => (
            <div
              key={idx}
              className="glass-panel p-8 rounded-xl border border-slate-200 hover:border-[#00B2F6] transition-all space-y-3 bg-white shadow-xs"
            >
              <span className="font-mono text-xs font-bold text-[#054859]">
                0{idx + 1} //
              </span>
              <h3 className="font-display text-lg font-bold text-[#054859]">
                {isFr ? v.titleFr : v.titleEn}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {isFr ? v.descFr : v.descEn}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center space-y-4 pt-4">
        <h3 className="font-display text-2xl font-bold text-[#054859]">
          {isFr ? 'Échangeons autour de vos besoins d’approvisionnement ou de marketing.' : 'Let us discuss your procurement or marketing requirements.'}
        </h3>
        <button
          onClick={() => onNavigate('contact')}
          className="px-8 py-3.5 rounded-lg bg-[#054859] hover:bg-[#075f75] text-white text-xs font-semibold tracking-wider uppercase border border-[#00B2F6]/50 inline-flex items-center gap-2 cursor-pointer shadow-sm transition-all"
        >
          <span>{isFr ? 'Prendre contact avec la direction' : 'Contact Leadership'}</span>
          <ArrowUpRight className="w-4 h-4 text-[#00B2F6]" />
        </button>
      </div>
    </div>
  );
};
