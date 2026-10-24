import React from 'react';
import { BesrgDimensionScene } from '../components/canvas/BesrgDimensionScene.tsx';
import { BESRG_DATA } from '../data/besrgData.ts';
import { SafeImage } from '../components/common/SafeImage.tsx';
import {
  ArrowUpRight,
  TrendingUp,
  Activity,
  Briefcase,
  Compass,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  BarChart3,
  Target,
  Zap,
  ArrowRight,
  ShieldCheck,
  Package,
  Trophy,
  Award,
  Truck
} from 'lucide-react';

interface HomeViewProps {
  lang: 'fr' | 'en';
  onNavigate: (view: string, service?: string) => void;
  scrollY: number;
}

export const HomeView: React.FC<HomeViewProps> = ({ lang, onNavigate, scrollY }) => {
  const isFr = lang === 'fr';

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-[#00B2F6]" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-[#F82649]" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-[#054859]" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#054859]" />;
      case 'Package':
        return <Package className="w-5 h-5 text-[#F82649]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#00B2F6]" />;
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full overflow-hidden bg-white text-slate-800">
      {/* ============================================================ */}
      {/* SECTION 1: IMMERSIVE HERO WITH 3D BESRG DIMENSION (BLEU)     */}
      {/* ============================================================ */}
      <section className="relative min-h-[95vh] lg:min-h-screen flex flex-col justify-between pt-28 pb-14 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#06141E] via-[#054859] to-[#042d38] text-white">
        {/* Ambient atmospheric cyber-architectural lighting */}
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[750px] bg-[radial-gradient(circle_at_center,rgba(0,178,246,0.22)_0%,rgba(5,72,89,0.15)_45%,transparent_70%)] blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(248,38,73,0.14)_0%,transparent_70%)] blur-2xl pointer-events-none" />

        {/* 3D Scene Container (Centered background & hero focus) */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-auto">
          <BesrgDimensionScene scrollY={scrollY} interactive={true} />
        </div>

        {/* Hero Content Overlay */}
        <div className="relative z-10 max-w-7xl mx-auto w-full my-auto pointer-events-none">
          <div className="max-w-2xl text-left pointer-events-auto">
            {/* Official Registration Tag */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 shadow-md backdrop-blur-md mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00B2F6] animate-pulse" />
              <span className="text-[11px] font-mono font-semibold tracking-wider uppercase text-cyan-200">
                ETS BESRG COMPANY • RCCM {BESRG_DATA.company.rccm} • YAOUNDÉ
              </span>
            </div>

            {/* Powerful Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] mb-6 drop-shadow-md">
              {isFr ? "L'avenir se construit maintenant." : 'The future is built now.'}
            </h1>

            {/* Value-oriented Subtitle presenting polyvalence */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-xl mb-8 font-normal drop-shadow-sm">
              {isFr ? BESRG_DATA.company.subheadlineFr : BESRG_DATA.company.subheadlineEn}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="relative group px-7 py-3.5 rounded-lg bg-[#00B2F6] hover:bg-[#38c8ff] text-[#054859] text-xs sm:text-sm font-bold tracking-wider uppercase shadow-lg shadow-cyan-500/25 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>{isFr ? 'Demander un devis officiel' : 'Request Official Quote'}</span>
                <ArrowUpRight className="w-4 h-4 text-[#054859] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('focus-sport')}
                className="px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold tracking-wider uppercase border border-white/25 backdrop-blur-sm transition-all flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <Trophy className="w-4 h-4 text-[#F82649]" />
                <span>{isFr ? 'Équipements Sportifs' : 'Athletic Supplies'}</span>
              </button>

              <button
                onClick={() => scrollToSection('manifesto')}
                className="px-5 py-3.5 rounded-lg text-slate-300 hover:text-white text-xs sm:text-sm font-medium tracking-wider uppercase transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>{isFr ? 'En savoir plus' : 'Learn More'}</span>
                <ChevronDown className="w-4 h-4 text-[#00B2F6]" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom indicator & scroll invitation */}
        <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between text-xs text-slate-300 font-mono tracking-widest uppercase pointer-events-none">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00B2F6]" />
            <span>ETS BESRG COMPANY • YAOUNDÉ, CAMEROUN</span>
          </div>

          <button
            onClick={() => scrollToSection('manifesto')}
            className="hidden sm:flex items-center gap-2 text-slate-300 hover:text-white transition-colors cursor-pointer pointer-events-auto"
          >
            <span>{isFr ? 'Découvrir' : 'Scroll to explore'}</span>
            <ChevronDown className="w-4 h-4 text-[#00B2F6] animate-bounce" />
          </button>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 2: MANIFESTO & PRESENTATION (BLANC)                  */}
      {/* ============================================================ */}
      <section id="manifesto" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          {/* Header Tag */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-[#F82649]" />
            <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#F82649]">
              {isFr ? 'NOTRE MANIFESTE' : 'OUR MANIFESTO'}
            </span>
          </div>

          {/* Title */}
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#054859] tracking-tight leading-tight mb-6">
            {isFr ? BESRG_DATA.manifesto.titleFr : BESRG_DATA.manifesto.titleEn}
          </h2>

          <p className="text-lg sm:text-xl text-slate-700 font-light leading-relaxed mb-10 max-w-4xl">
            {isFr ? BESRG_DATA.manifesto.subtitleFr : BESRG_DATA.manifesto.subtitleEn}
          </p>

          {/* Paragraphs with high editorial typography */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-slate-600 text-sm leading-relaxed border-t border-slate-200 pt-8">
            {(isFr ? BESRG_DATA.manifesto.paragraphsFr : BESRG_DATA.manifesto.paragraphsEn).map((paragraph, idx) => (
              <div key={idx} className="relative group p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs hover:border-[#00B2F6] transition-colors">
                <span className="font-mono text-xs text-[#00B2F6] font-bold mb-3 block">
                  0{idx + 1} //
                </span>
                <p className="leading-relaxed text-slate-700 font-normal">
                  {paragraph}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 3: GRAND FOCUS EQUIPEMENTS SPORTIFS (ROUGE)          */}
      {/* ============================================================ */}
      <section id="focus-sport" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F82649] via-[#e51d3e] to-[#ba142f] text-white overflow-hidden shadow-inner">
        {/* Decorative background geometry */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-black/10 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Editorial & Scope */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 border border-white/30 backdrop-blur-sm text-xs font-mono font-bold tracking-widest uppercase">
                <Trophy className="w-3.5 h-3.5 text-yellow-300" />
                <span>{isFr ? 'PÔLE EXCELLENCE SPORT' : 'ATHLETIC EQUIPMENT DIVISION'}</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                {isFr
                  ? 'Équipements & Fournitures Sportifs Certifiés.'
                  : 'Certified High-Performance Sports Supplies.'}
              </h2>

              <p className="text-sm sm:text-base text-red-50 leading-relaxed font-normal">
                {isFr
                  ? 'ETS BESRG COMPANY équipe les clubs sportifs, écoles, complexes d’entraînement et organisateurs de compétitions à Yaoundé et dans tout le Cameroun. Ballons homologués, jeux de maillots personnalisés, filets et matériel technique de préparation.'
                  : 'ETS BESRG COMPANY outfits sports clubs, schools, academies, and tournament organizers across Yaoundé and Cameroon with regulation balls, custom kits, nets, and conditioning equipment.'}
              </p>

              {/* Supply Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-yellow-300 uppercase">
                    <Award className="w-4 h-4" />
                    <span>{isFr ? 'Normes & Qualité' : 'Certified Standards'}</span>
                  </div>
                  <p className="text-xs text-red-100">
                    {isFr ? 'Ballons FIFA-normés et textiles respirants anti-déchirure.' : 'Regulation balls and high-durability breathable textiles.'}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-200 uppercase">
                    <Truck className="w-4 h-4" />
                    <span>{isFr ? 'Livraison & Flocage' : 'Delivery & Branding'}</span>
                  </div>
                  <p className="text-xs text-red-100">
                    {isFr ? 'Personnalisation complète et acheminement suivi à Yaoundé.' : 'Full kit printing and tracked delivery across Yaoundé.'}
                  </p>
                </div>
              </div>

              {/* Call to action */}
              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('contact', 'equipements-sportifs')}
                  className="px-7 py-3.5 rounded-lg bg-white hover:bg-red-50 text-[#ba142f] text-xs sm:text-sm font-bold tracking-wider uppercase shadow-xl transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>{isFr ? 'Commander des équipements sportifs' : 'Order Sports Supplies'}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#ba142f]" />
                </button>

                <button
                  onClick={() => onNavigate('services', 'equipements-sportifs')}
                  className="px-6 py-3.5 rounded-lg bg-black/20 hover:bg-black/30 text-white text-xs sm:text-sm font-semibold tracking-wider uppercase border border-white/30 backdrop-blur-sm transition-all cursor-pointer"
                >
                  <span>{isFr ? 'Voir le catalogue sport' : 'View Sports Catalog'}</span>
                </button>
              </div>
            </div>

            {/* Right Column: High-Resolution Photo Display with Zoom Modal */}
            <div className="lg:col-span-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <SafeImage
                    src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1200&auto=format&fit=crop"
                    alt={isFr ? "Ballons de football certifiés compétition" : "Certified soccer tournament balls"}
                    aspectRatio="video"
                    caption={isFr ? "Ballons certifiés pour entraînements et championnats" : "Regulation match and training soccer balls"}
                    className="shadow-2xl border-2 border-white/20"
                  />
                </div>
                <div>
                  <SafeImage
                    src="https://images.unsplash.com/photo-1517649763962-0c623266ddc0?q=80&w=1200&auto=format&fit=crop"
                    alt={isFr ? "Équipements et accessoires de fitness" : "Athletic fitness and training gear"}
                    aspectRatio="square"
                    caption={isFr ? "Accessoires d'entraînement" : "Training conditioning gear"}
                    className="shadow-xl border-2 border-white/20"
                  />
                </div>
                <div>
                  <SafeImage
                    src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1200&auto=format&fit=crop"
                    alt={isFr ? "Dotations pour académies et équipes" : "Team kits and sports academy gear"}
                    aspectRatio="square"
                    caption={isFr ? "Tenues d'équipes & dotations" : "Team uniforms & academy kits"}
                    className="shadow-xl border-2 border-white/20"
                  />
                </div>
              </div>
              <p className="text-[11px] text-center text-red-200 font-mono">
                {isFr ? "Cliquez sur l'icône loupe pour agrandir chaque photo en plein écran." : "Click the zoom icon to view any photo in full lightbox."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 4: DOMAINES D'ACTIVITÉ DÉCLARÉS (BLANC)              */}
      {/* ============================================================ */}
      <section id="expertises" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-[2px] bg-[#00B2F6]" />
                <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#054859]">
                  {isFr ? 'DOMAINES D’ACTIVITÉ DÉCLARÉS (RCCM : RC/YAO/2024/A/843)' : 'OFFICIAL DECLARED ACTIVITIES'}
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#054859] tracking-tight">
                {isFr ? 'Une polyvalence commerciale rigoureuse.' : 'Versatile commercial excellence.'}
              </h2>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#054859] hover:text-[#00B2F6] transition-colors cursor-pointer group"
            >
              <span>{isFr ? 'Consulter le catalogue des services' : 'View full services catalog'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Expertises Grid on White */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BESRG_DATA.expertises.map((exp, idx) => {
              const title = isFr ? exp.titleFr : exp.titleEn;
              const desc = isFr ? exp.shortDescFr : exp.shortDescEn;
              const benefits = isFr ? exp.benefitsFr : exp.benefitsEn;

              return (
                <div
                  key={exp.id}
                  className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-2xl flex flex-col justify-between group relative overflow-hidden bg-white border border-slate-200 shadow-xs"
                >
                  {/* Top color accent */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px]"
                    style={{ backgroundColor: exp.color }}
                  />

                  <div>
                    {/* Icon & Index */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                        {getIcon(exp.iconName)}
                      </div>
                      <span className="font-mono text-xs text-slate-400 font-bold">
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-xl font-bold text-[#054859] mb-3">
                      {title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      {desc}
                    </p>

                    {/* Key Benefits */}
                    <ul className="space-y-2 mb-6">
                      {benefits.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00B2F6] shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deep link */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => onNavigate('services', exp.id)}
                      className="text-xs font-semibold text-[#054859] group-hover:text-[#00B2F6] transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <span>{isFr ? 'Détails & Devis' : 'Details & Quote'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#00B2F6] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}

            {/* Specialized Highlight Card: Sports Supply */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#054859] to-[#073642] text-white flex flex-col justify-between group shadow-md">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#00B2F6] uppercase tracking-widest mb-4">
                  <Package className="w-4 h-4" />
                  <span>{isFr ? 'APPROVISIONNEMENT RAPIDE' : 'RAPID PROCUREMENT'}</span>
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3">
                  {isFr ? 'Commerce Général & Négoce B2B' : 'General Trade & B2B Procurement'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-6">
                  {isFr
                    ? 'Fourniture de consommables d’entreprise, papeterie, matériels et biens divers avec bordereau de conformité et cadre légal vérifiable.'
                    : 'Office supplies, consumables, and general equipment goods with certified delivery tracking and full RCCM regulatory compliance.'}
                </p>
              </div>

              <button
                onClick={() => onNavigate('services', 'prestations-commerce')}
                className="w-full py-3 rounded-lg bg-[#00B2F6] hover:bg-[#20c0fa] text-[#054859] text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>{isFr ? 'Demander une cotation' : 'Request Commercial Quote'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 5: DIGITAL MARKETING & PERFORMANCE LAB (BLEU)        */}
      {/* ============================================================ */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#054859] via-[#04333f] to-[#03242c] text-white overflow-hidden shadow-inner">
        {/* Ambient cyan lighting */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(0,178,246,0.18)_0%,transparent_70%)] blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Strategic Vision */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-mono font-bold tracking-widest uppercase text-[#00B2F6]">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>MARKETING LAB &amp; ACQUISITION</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                {isFr
                  ? 'Générer des opportunités commerciales concrètes.'
                  : 'Generating verifiable, measurable commercial pipeline.'}
              </h2>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                {isFr
                  ? 'Pour vos produits, équipements ou services, ETS BESRG COMPANY déploie des campagnes publicitaires ciblées (Meta Ads, Google Search, tunnels WhatsApp Business) et une communication de marque percutante pour toucher directement les décideurs.'
                  : 'For your product lines, sports supplies, or professional services, ETS BESRG COMPANY designs precision targeted campaigns (Meta Ads, Google Search, WhatsApp funnels) and high-impact branding.'}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate('marketing-lab')}
                  className="px-6 py-3.5 rounded-lg bg-[#00B2F6] hover:bg-[#38c8ff] text-[#054859] text-xs font-bold tracking-wider uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <BarChart3 className="w-4 h-4 text-[#054859]" />
                  <span>{isFr ? 'Accéder au Marketing Lab' : 'Enter Marketing Lab'}</span>
                </button>

                <button
                  onClick={() => onNavigate('contact', 'marketing-digital')}
                  className="px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold tracking-wider uppercase border border-white/20 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{isFr ? 'Demander un plan média' : 'Request Media Plan'}</span>
                </button>
              </div>
            </div>

            {/* Right Column: Grid of Marketing Capabilities */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {BESRG_DATA.marketingLabFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white/10 border border-white/15 hover:border-[#00B2F6] transition-all backdrop-blur-sm group"
                >
                  <div className="flex items-center gap-2 text-xs font-mono text-[#00B2F6] font-bold mb-2">
                    <Target className="w-3.5 h-3.5" />
                    <span>0{idx + 1}</span>
                  </div>
                  <h4 className="font-display text-sm font-bold text-white mb-2">
                    {isFr ? feat.titleFr : feat.titleEn}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {isFr ? feat.descFr : feat.descEn}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 6: METHODOLOGIE OPERATIONNELLE (BLANC)               */}
      {/* ============================================================ */}
      <section id="methodology" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-3 mb-3">
              <div className="w-6 h-[2px] bg-[#F82649]" />
              <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#F82649]">
                {isFr ? 'MÉTHODOLOGIE OPÉRATIONNELLE' : 'OPERATIONAL METHODOLOGY'}
              </span>
              <div className="w-6 h-[2px] bg-[#F82649]" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#054859] tracking-tight mb-3">
              {isFr ? 'Un processus en 4 étapes vers la réussite.' : 'A 4-step framework engineered for success.'}
            </h2>
            <p className="text-sm text-slate-600">
              {isFr
                ? 'Une organisation rigoureuse du recueil des besoins jusqu’à la livraison finale.'
                : 'A rigorous organization from initial scoping to final delivery.'}
            </p>
          </div>

          {/* 4 Connected Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {BESRG_DATA.methodology.map((step) => (
              <div
                key={step.num}
                className="relative glass-panel p-6 rounded-2xl border border-slate-200 hover:border-[#00B2F6] transition-all flex flex-col justify-between group shadow-xs bg-slate-50/60"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 border-b border-slate-200 pb-3">
                    <span className="font-mono text-2xl font-black text-[#054859]">
                      {step.num}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-widest text-[#F82649] font-bold">
                      {step.code}
                    </span>
                  </div>

                  <h3 className="font-display text-base font-bold text-[#054859] mb-2">
                    {isFr ? step.titleFr : step.titleEn}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6 font-normal">
                    {isFr ? step.descFr : step.descEn}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200">
                  <span className="text-[11px] font-mono text-[#00B2F6] font-semibold block">
                    {isFr ? step.metricsFr : step.metricsEn}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 7: DEMONSTRATEURS & GALERIE PHOTOS HAUTE DEFINITION  */}
      {/* ============================================================ */}
      <section id="showcase" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-[2px] bg-[#00B2F6]" />
                <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#054859]">
                  {isFr ? 'DÉMONSTRATEURS R&D & GALERIE VISUELLE' : 'R&D DEMO SHOWCASE'}
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#054859] tracking-tight mb-2">
                {isFr ? 'Exemples concrets de cas d’usage.' : 'Concrete operational use cases.'}
              </h2>
              <p className="text-xs text-slate-500 font-mono">
                {isFr
                  ? 'Démonstrateurs illustrant nos capacités en équipements sportifs, marketing, approvisionnement et communication.'
                  : 'Demonstrators illustrating our capabilities across sports supply, marketing, trade, and corporate communication.'}
              </p>
            </div>

            <button
              onClick={() => onNavigate('showcase')}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#054859] hover:text-[#00B2F6] transition-colors cursor-pointer group"
            >
              <span>{isFr ? 'Voir toutes les fiches d’étude' : 'View full case studies'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Cards with High-Resolution Photos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BESRG_DATA.demoShowcase.map((demo) => (
              <div
                key={demo.id}
                className="glass-panel glass-panel-hover rounded-2xl overflow-hidden border border-slate-200 flex flex-col justify-between group shadow-sm bg-white"
              >
                <div>
                  {/* Photo Display with SafeImage */}
                  <div className="relative">
                    <SafeImage
                      src={demo.imageUrl || "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1200&auto=format&fit=crop"}
                      alt={demo.title}
                      aspectRatio="video"
                      className="rounded-t-2xl rounded-b-none"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-sm text-white text-[10px] font-mono font-semibold uppercase tracking-wider">
                        {isFr ? demo.badgeFr : demo.badgeEn}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-3">
                    <span className="text-[11px] font-mono font-semibold text-[#00B2F6] block">
                      {demo.category}
                    </span>
                    <h3 className="font-display text-base font-bold text-[#054859] leading-snug">
                      {demo.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal line-clamp-3">
                      {isFr ? demo.summaryFr : demo.summaryEn}
                    </p>
                  </div>
                </div>

                {/* Footer action */}
                <div className="px-5 py-3.5 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-400">
                    {isFr ? demo.sector : demo.sectorEn}
                  </span>
                  <button
                    onClick={() => onNavigate('showcase')}
                    className="text-xs font-semibold text-[#054859] hover:text-[#00B2F6] transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>{isFr ? 'Examiner' : 'Inspect'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#00B2F6]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 8: WHY CHOOSE ETS BESRG COMPANY (BLANC)              */}
      {/* ============================================================ */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-[2px] bg-[#F82649]" />
              <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#F82649]">
                {isFr ? 'POURQUOI NOUS CHOISIR' : 'WHY ETS BESRG COMPANY'}
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#054859] tracking-tight">
              {isFr ? 'Des engagements clairs et vérifiables.' : 'Clear, verifiable commitments.'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BESRG_DATA.whyChooseUs.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#00B2F6] transition-all space-y-3"
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-[#054859]">
                    0{idx + 1}
                  </span>
                  <div className="w-6 h-[1px] bg-slate-200" />
                </div>
                <h3 className="font-display text-base font-bold text-[#054859]">
                  {isFr ? item.titleFr : item.titleEn}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {isFr ? item.descFr : item.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 9: FINAL CALL TO ACTION (ROUGE)                      */}
      {/* ============================================================ */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#F82649] via-[#e51d3e] to-[#c91834] text-white overflow-hidden shadow-2xl">
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 border border-white/30 backdrop-blur-sm text-xs font-mono text-white uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 text-yellow-300" />
            <span>{isFr ? 'ENGAGER LA COLLABORATION' : 'START COLLABORATION'}</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            {isFr ? 'Votre prochaine étape commence ici.' : 'Your next milestone begins here.'}
          </h2>

          <p className="text-base sm:text-lg text-red-50 max-w-2xl mx-auto font-normal leading-relaxed">
            {isFr
              ? 'Équipements sportifs, marketing digital, communication institutionnelle ou approvisionnement général : échangeons sur vos besoins avec un devis détaillé sous 24 à 48 heures ouvrées.'
              : 'Sports supplies, digital marketing, corporate communication, or general procurement: let’s discuss your needs with a detailed proposal within 24 to 48 business hours.'}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 rounded-xl bg-white hover:bg-red-50 text-[#ba142f] text-xs sm:text-sm font-bold tracking-wider uppercase shadow-xl transition-all flex items-center gap-3 cursor-pointer"
            >
              <span>{isFr ? 'Demander un devis officiel' : 'Request Official Quote'}</span>
              <ArrowUpRight className="w-4 h-4 text-[#ba142f]" />
            </button>

            <button
              onClick={() => onNavigate('services')}
              className="px-8 py-4 rounded-xl bg-black/20 hover:bg-black/30 text-white text-xs sm:text-sm font-semibold tracking-wider uppercase border border-white/30 backdrop-blur-sm transition-all cursor-pointer"
            >
              <span>{isFr ? 'Parcourir nos catalogues' : 'Browse Catalogs'}</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
