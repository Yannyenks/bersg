import React from 'react';
import { X, Shield, FileText, Building } from 'lucide-react';
import { BESRG_DATA } from '../../data/besrgData.ts';

interface LegalModalProps {
  type: 'mentions' | 'confidentialite' | null;
  onClose: () => void;
  lang: 'fr' | 'en';
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose, lang }) => {
  if (!type) return null;
  const isFr = lang === 'fr';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-3xl max-h-[85vh] bg-white border border-slate-200 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-800">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2.5">
            {type === 'mentions' ? (
              <FileText className="w-5 h-5 text-[#00B2F6]" />
            ) : (
              <Shield className="w-5 h-5 text-[#F82649]" />
            )}
            <h3 className="font-display text-lg font-bold text-[#054859]">
              {type === 'mentions'
                ? isFr
                  ? 'Mentions Légales & Cadre Réglementaire'
                  : 'Legal Notice & Regulatory Framework'
                : isFr
                ? 'Politique de Confidentialité & Protection des Données'
                : 'Privacy Policy & Data Protection'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-200 transition-colors cursor-pointer"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs text-slate-600 leading-relaxed">
          {type === 'mentions' ? (
            <>
              {/* Official Administrative Details Box */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 font-bold text-sm text-[#054859]">
                  <Building className="w-4 h-4 text-[#00B2F6]" />
                  <span>Informations Officielles Déclarées</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div>
                    <strong className="text-slate-800">Dénomination : </strong>
                    <span>{BESRG_DATA.company.legalName}</span>
                  </div>
                  <div>
                    <strong className="text-slate-800">Forme juridique : </strong>
                    <span>{BESRG_DATA.company.legalForm}</span>
                  </div>
                  <div>
                    <strong className="text-slate-800">Numéro RCCM : </strong>
                    <span className="font-mono font-semibold text-[#054859]">{BESRG_DATA.company.rccm}</span>
                  </div>
                  <div>
                    <strong className="text-slate-800">Date début d’activité : </strong>
                    <span>{BESRG_DATA.company.activityStartDate}</span>
                  </div>
                  <div className="sm:col-span-2">
                    <strong className="text-slate-800">Siège / Localisation déclarée : </strong>
                    <span>{BESRG_DATA.company.location}</span>
                  </div>
                  <div className="sm:col-span-2">
                    <strong className="text-slate-800">Domaines d’activité déclarés : </strong>
                    <span>Équipements et fournitures sportifs, Marketing digital, Communication, Prestations de services, Commerce général.</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-slate-900 font-semibold text-sm mb-1">1. Éditeur de la Plateforme</h4>
                <p>
                  Le présent site est édité par l’entreprise <strong>{BESRG_DATA.company.name}</strong>, immatriculée au Registre du Commerce et du Crédit Mobilier sous le numéro <strong>{BESRG_DATA.company.rccm}</strong> à Yaoundé (Cameroun).
                  <br />
                  Contact électronique : {BESRG_DATA.company.email}.
                </p>
              </div>

              <div>
                <h4 className="text-slate-900 font-semibold text-sm mb-1">2. Transparence Administrative</h4>
                <p>
                  Les mentions administratives ci-dessus sont reproduites fidèlement d’après les déclarations officielles d’immatriculation. Aucune mention manuscrite de montant non vérifiée n’a été intégrée comme capital ou chiffre d’affaires garanti. Les coordonnées et informations complémentaires sont tenues à jour au fur et à mesure des confirmations officielles.
                </p>
              </div>

              <div>
                <h4 className="text-slate-900 font-semibold text-sm mb-1">3. Propriété Intellectuelle</h4>
                <p>
                  L’ensemble des contenus, éléments graphiques, logo vectoriel, concepts 3D procéduraux et architecture logicielle constituent des créations protégées par le droit d’auteur et la propriété intellectuelle. Toute reproduction non autorisée est expressément prohibée.
                </p>
              </div>

              <div>
                <h4 className="text-slate-900 font-semibold text-sm mb-1">4. Hébergement & Sécurité</h4>
                <p>
                  La plateforme est hébergée sur une infrastructure Cloud haute disponibilité avec chiffrement HTTPS/SSL certifié.
                </p>
              </div>
            </>
          ) : (
            <>
              <div>
                <h4 className="text-slate-900 font-semibold text-sm mb-1">1. Traitement des Demandes & Devis</h4>
                <p>
                  {BESRG_DATA.company.name} recueille les données transmises via ses formulaires de devis (nom, entreprise, adresse électronique, numéro de téléphone, spécifications d’équipements ou de prestations) dans le but exclusif de formuler une réponse commerciale et technique appropriée.
                </p>
              </div>

              <div>
                <h4 className="text-slate-900 font-semibold text-sm mb-1">2. Non-Cession & Confidentialité</h4>
                <p>
                  Les données transmises ne sont en aucun cas vendues, cédées ou louées à des tiers. Elles demeurent sous la garde stricte des gestionnaires autorisés d’ETS BESRG COMPANY.
                </p>
              </div>

              <div>
                <h4 className="text-slate-900 font-semibold text-sm mb-1">3. Droits d’Accès & de Rectification</h4>
                <p>
                  Vous pouvez solliciter à tout moment la modification ou la suppression de vos données par courriel adressé à : {BESRG_DATA.company.email}.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#054859] hover:bg-[#075f75] text-white text-xs font-semibold tracking-wider transition-colors cursor-pointer"
          >
            {isFr ? 'Fermer' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
