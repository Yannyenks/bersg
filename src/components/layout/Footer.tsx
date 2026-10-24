import React from 'react';
import { BesrgLogo } from '../brand/BesrgLogo.tsx';
import { BESRG_DATA } from '../../data/besrgData.ts';
import { Mail, MapPin, ArrowUp, ShieldCheck, FileText, ExternalLink, Building, CheckCircle } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string, service?: string) => void;
  lang: 'fr' | 'en';
  onOpenLegal: (type: 'mentions' | 'confidentialite') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, lang, onOpenLegal }) => {
  const currentYear = new Date().getFullYear();
  const isFr = lang === 'fr';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-50 border-t border-slate-200 pt-16 pb-12 overflow-hidden text-sm text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-14">
          {/* Col 1 & 2: Brand & Official Registration */}
          <div className="lg:col-span-2 space-y-4">
            <BesrgLogo size="md" theme="light" onClick={() => onNavigate('home')} />
            <p className="text-slate-600 text-xs leading-relaxed max-w-md pt-1">
              {isFr
                ? "ETS BESRG COMPANY est une entreprise polyvalente établie à Yaoundé (Cameroun), active dans les équipements sportifs certifiés, le marketing digital d'acquisition, la communication institutionnelle et le commerce général."
                : 'ETS BESRG COMPANY is a multifaceted enterprise based in Yaoundé (Cameroon), specializing in certified athletic supplies, digital growth marketing, corporate communications, and general trade procurement.'}
            </p>

            {/* Official Registration Badge */}
            <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2 text-xs">
              <div className="flex items-center gap-2 text-[#054859] font-bold font-mono">
                <Building className="w-4 h-4 text-[#00B2F6]" />
                <span>ETS BESRG COMPANY</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-1 gap-x-3 text-[11px] text-slate-500 font-mono">
                <div>
                  <span className="text-slate-400">RCCM : </span>
                  <span className="font-semibold text-slate-800">{BESRG_DATA.company.rccm}</span>
                </div>
                <div>
                  <span className="text-slate-400">Forme : </span>
                  <span className="font-semibold text-slate-800">{BESRG_DATA.company.legalForm}</span>
                </div>
                <div>
                  <span className="text-slate-400">Début activité : </span>
                  <span className="font-semibold text-slate-800">{BESRG_DATA.company.activityStartDate}</span>
                </div>
                <div>
                  <span className="text-slate-400">Siège : </span>
                  <span className="font-semibold text-slate-800">{BESRG_DATA.company.location}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1.5 text-xs text-slate-600 pt-1">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#00B2F6]" />
                <a href={`mailto:${BESRG_DATA.company.email}`} className="hover:text-[#054859] transition-colors font-medium">
                  {BESRG_DATA.company.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#F82649]" />
                <span>{BESRG_DATA.company.location}</span>
              </div>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-[#054859] border-b border-slate-200 pb-2">
              {isFr ? 'Navigation' : 'Navigation'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-[#054859] transition-colors cursor-pointer">
                  {isFr ? 'Accueil' : 'Home'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-[#054859] transition-colors cursor-pointer">
                  {isFr ? 'Services & Offres' : 'Services & Offerings'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('marketing-lab')} className="hover:text-[#054859] transition-colors cursor-pointer">
                  {isFr ? 'Digital Marketing Lab' : 'Digital Marketing Lab'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('methodology')} className="hover:text-[#054859] transition-colors cursor-pointer">
                  {isFr ? 'Méthodologie' : 'Methodology'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('showcase')} className="hover:text-[#054859] transition-colors cursor-pointer">
                  {isFr ? 'Démonstrateurs R&D' : 'Demo Showcases'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-[#054859] transition-colors cursor-pointer">
                  {isFr ? 'À Propos & Registre' : 'About & Registry'}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Services / Declared Domains */}
          <div className="space-y-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-[#054859] border-b border-slate-200 pb-2">
              {isFr ? 'Activités Déclarées' : 'Declared Domains'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('services', 'equipements-sportifs')} className="hover:text-[#054859] transition-colors cursor-pointer text-left">
                  {isFr ? 'Équipements & Fournitures Sportifs' : 'Sports Equipment & Supplies'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services', 'marketing-digital')} className="hover:text-[#054859] transition-colors cursor-pointer text-left">
                  {isFr ? 'Marketing Digital & Communication' : 'Digital Marketing & Communication'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services', 'prestations-commerce')} className="hover:text-[#054859] transition-colors cursor-pointer text-left">
                  {isFr ? 'Prestations de Services & Commerce' : 'Corporate Services & Trade'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services', 'communication')} className="hover:text-[#054859] transition-colors cursor-pointer text-left">
                  {isFr ? 'Communication & Image de Marque' : 'Corporate Communication & Branding'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('marketing-lab')} className="hover:text-[#054859] transition-colors cursor-pointer text-left">
                  {isFr ? 'Campagnes Meta Ads & CRO' : 'Meta Ads & CRO Funnels'}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact & Devis Callout */}
          <div className="space-y-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-[#054859] border-b border-slate-200 pb-2">
              {isFr ? 'Devis & Commandes' : 'Quotes & Orders'}
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              {isFr
                ? 'Besoin d’équipements sportifs, d’une campagne marketing ou d’approvisionnement général à Yaoundé et régions ?'
                : 'Need athletic equipment, a digital marketing campaign, or general procurement in Yaoundé and nationwide?'}
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="w-full mt-2 py-2.5 px-3 rounded-lg bg-[#054859] hover:bg-[#075f75] text-white text-xs font-semibold tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 shadow-sm"
            >
              <span>{isFr ? 'Demander un devis officiel' : 'Request Official Quote'}</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#00B2F6]" />
            </button>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-medium text-slate-700">© {currentYear} ETS BESRG COMPANY.</span>
            <span>•</span>
            <span>RCCM : RC/YAO/2024/A/843</span>
            <span>•</span>
            <span>{isFr ? 'Yaoundé, Cameroun' : 'Yaoundé, Cameroon'}</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenLegal('mentions')}
              className="hover:text-[#054859] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-[#00B2F6]" />
              <span>{isFr ? 'Mentions Légales' : 'Legal Notices'}</span>
            </button>

            <button
              onClick={() => onOpenLegal('confidentialite')}
              className="hover:text-[#054859] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#F82649]" />
              <span>{isFr ? 'Confidentialité' : 'Privacy Policy'}</span>
            </button>

            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200 transition-colors cursor-pointer shadow-xs"
              aria-label="Retour en haut"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
