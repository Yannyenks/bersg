import React, { useState } from 'react';
import { BESRG_DATA } from '../data/besrgData.ts';
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  Shield,
  FileCheck,
  Printer,
  Building
} from 'lucide-react';

interface ContactViewProps {
  lang: 'fr' | 'en';
  preselectedService?: string;
  onNavigate?: (view: string) => void;
}

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
  consent: boolean;
}

interface SubmissionResult {
  success: boolean;
  trackingId: string;
  receivedAt: string;
  estimatedResponseHours: string;
  message: string;
  contactSupport: string;
}

export const ContactView: React.FC<ContactViewProps> = ({
  lang,
  preselectedService
}) => {
  const isFr = lang === 'fr';

  const [form, setForm] = useState<FormState>({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: preselectedService || 'equipements-sportifs',
    budget: 'standard',
    message: '',
    consent: false,
  });

  const [clientErrors, setClientErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submissionResult, setSubmissionResult] = useState<SubmissionResult | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  const serviceOptions = [
    { id: 'equipements-sportifs', labelFr: 'Équipements & Fournitures Sportifs (Ballons, Tenues, Matériel)', labelEn: 'Sports & Athletic Equipment Supply' },
    { id: 'marketing-digital', labelFr: 'Marketing Digital & Acquisition (Meta Ads, Google Search)', labelEn: 'Digital Marketing & Acquisition (Meta, Google)' },
    { id: 'communication', labelFr: 'Communication & Image de Marque', labelEn: 'Corporate Communication & Brand Identity' },
    { id: 'prestations-commerce', labelFr: 'Prestations de Services & Commerce Général (Approvisionnement)', labelEn: 'Corporate Services & General Procurement' },
    { id: 'appel-offre', labelFr: 'Consultation Formelle / Appel d’Offres', labelEn: 'Formal Commercial Bid / Tender' }
  ];

  const budgetOptions = [
    { id: 'standard', labelFr: 'Commande Standard / Prestation Ciblée', labelEn: 'Standard Order / Targeted Project' },
    { id: 'intermediaire', labelFr: 'Commande Groupée / Campagne d’Envergure', labelEn: 'Bulk Order / Major Campaign' },
    { id: 'cadre', labelFr: 'Contrat Cadre d’Approvisionnement Annuel', labelEn: 'Annual Corporate Procurement Framework' },
    { id: 'devis-ouvert', labelFr: 'À définir selon le devis quantitatif', labelEn: 'To be defined based on itemized quote' }
  ];

  const validate = (): boolean => {
    const errors: Record<string, string> = {};

    if (!form.name.trim() || form.name.trim().length < 2) {
      errors.name = isFr
        ? 'Le nom complet est obligatoire (min 2 caractères).'
        : 'Full name is required (at least 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim() || !emailRegex.test(form.email.trim())) {
      errors.email = isFr
        ? 'Une adresse email valide est requise.'
        : 'A valid email address is required.';
    }

    if (!form.service) {
      errors.service = isFr
        ? 'Veuillez sélectionner un domaine d’intervention.'
        : 'Please select an area of expertise.';
    }

    if (!form.message.trim() || form.message.trim().length < 10) {
      errors.message = isFr
        ? 'Veuillez préciser votre demande (min 10 caractères).'
        : 'Please describe your request (min 10 characters).';
    }

    if (!form.consent) {
      errors.consent = isFr
        ? 'Le consentement au traitement de la demande est requis.'
        : 'Consent to data processing is required.';
    }

    setClientErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          company: form.company,
          email: form.email,
          phone: form.phone,
          service: form.service,
          budget: form.budget,
          message: form.message,
          consent: form.consent,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        if (data.errors) {
          setClientErrors(data.errors);
        }
        throw new Error(data.error || data.message || 'Une erreur serveur est survenue.');
      }

      setSubmissionResult(data);
    } catch (err: any) {
      console.error('Contact submission error:', err);
      setServerError(
        err.message ||
          (isFr
            ? 'Impossible de transmettre la demande. Veuillez vérifier votre connexion ou réessayer.'
            : 'Unable to submit request. Please check your connection or retry.')
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePrintReceipt = () => {
    window.print();
  };

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white text-slate-800">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-[2px] bg-[#00B2F6]" />
          <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#054859]">
            {isFr ? 'CONTACT STRATÉGIQUE & DEMANDE DE DEVIS' : 'STRATEGIC CONTACT & QUOTATION'}
          </span>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-[#054859] tracking-tight mb-4">
          {isFr ? 'Soumettez votre projet à ETS BESRG COMPANY.' : 'Submit your request to ETS BESRG COMPANY.'}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {isFr
            ? 'Que vous ayez besoin d’équipements sportifs, d’une stratégie marketing, ou d’approvisionnements généraux à Yaoundé et régions, nous établissons un devis précis sous 24 à 48 heures ouvrées.'
            : 'Whether you require athletic equipment, marketing campaigns, or corporate supplies in Yaoundé and beyond, we formulate itemized proposals within 24 to 48 business hours.'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Form or Success Confirmation Card on White */}
        <div className="lg:col-span-8">
          {submissionResult ? (
            /* Successful Transmission Confirmation Card on Clean White */
            <div className="glass-panel p-8 sm:p-10 rounded-2xl border border-slate-200 space-y-6 shadow-sm bg-white animate-fadeIn">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-slate-100 text-[#00B2F6] border border-slate-200">
                  <CheckCircle2 className="w-7 h-7 text-[#054859]" />
                </div>
                <div>
                  <span className="font-mono text-xs text-[#054859] uppercase tracking-wider font-bold">
                    {isFr ? 'DEMANDE ENREGISTRÉE AVEC SUCCÈS' : 'REQUEST SUCCESSFULLY TRANSMITTED'}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-slate-900">
                    {isFr ? 'Dossier transmis aux services commerciaux' : 'Dossier Transmitted to Commercial Desk'}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {isFr
                  ? `Merci ${form.name}. Votre demande a été enregistrée avec succès auprès d’ETS BESRG COMPANY. Un responsable commercial prendra contact avec vous sous 24 à 48h ouvrées.`
                  : `Thank you ${form.name}. Your proposal has been registered with ETS BESRG COMPANY. A commercial representative will connect with you within 24 to 48 business hours.`}
              </p>

              {/* Verified Details Receipt */}
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-3 font-mono text-xs">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">{isFr ? 'Numéro de suivi :' : 'Tracking Reference:'}</span>
                  <span className="font-bold text-[#054859]">{submissionResult.trackingId}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">{isFr ? 'Horodatage officiel :' : 'Official Timestamp:'}</span>
                  <span className="text-slate-800">{new Date(submissionResult.receivedAt).toLocaleString()}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">{isFr ? 'Engagement de réponse :' : 'Response SLA:'}</span>
                  <span className="text-slate-800 font-semibold">{submissionResult.estimatedResponseHours}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">{isFr ? 'Domaine sollicité :' : 'Requested Service:'}</span>
                  <span className="text-slate-800">{form.service}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">{isFr ? 'Support direct :' : 'Direct Desk:'}</span>
                  <span className="text-[#054859] font-semibold">{submissionResult.contactSupport}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={handlePrintReceipt}
                  className="px-5 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold tracking-wider uppercase border border-slate-200 flex items-center gap-2 cursor-pointer transition-colors"
                >
                  <Printer className="w-4 h-4 text-[#00B2F6]" />
                  <span>{isFr ? 'Imprimer l’accusé de réception' : 'Print Receipt'}</span>
                </button>

                <button
                  onClick={() => {
                    setSubmissionResult(null);
                    setForm({
                      name: '',
                      company: '',
                      email: '',
                      phone: '',
                      service: 'equipements-sportifs',
                      budget: 'standard',
                      message: '',
                      consent: false,
                    });
                  }}
                  className="px-5 py-2.5 rounded-lg bg-[#054859] hover:bg-[#075f75] text-white text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer"
                >
                  {isFr ? 'Soumettre un autre dossier' : 'Submit Another Request'}
                </button>
              </div>
            </div>
          ) : (
            /* Interactive Contact & Quote Form on Pure White */
            <form onSubmit={handleSubmit} className="glass-panel p-8 sm:p-10 rounded-2xl border border-slate-200 space-y-6 shadow-xs bg-white">
              {serverError && (
                <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-[#F82649] shrink-0" />
                  <span>{serverError}</span>
                </div>
              )}

              {/* Row 1: Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-700 mb-2">
                    {isFr ? 'Nom complet *' : 'Full Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder="Jean Dupont"
                    className={`w-full px-4 py-3 rounded-lg bg-slate-50 border text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:border-[#00B2F6] focus:bg-white transition-colors ${
                      clientErrors.name ? 'border-[#F82649]' : 'border-slate-200'
                    }`}
                  />
                  {clientErrors.name && (
                    <span className="text-[11px] text-[#F82649] mt-1 block">{clientErrors.name}</span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-700 mb-2">
                    {isFr ? 'Organisation / Entreprise / Club' : 'Company / Organization / Club'}
                  </label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={e => setForm({ ...form, company: e.target.value })}
                    placeholder="Club Sportif ou Société SARL"
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:border-[#00B2F6] focus:bg-white transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-700 mb-2">
                    {isFr ? 'Adresse email de contact *' : 'Email Address *'}
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder="contact@organisation.com"
                    className={`w-full px-4 py-3 rounded-lg bg-slate-50 border text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:border-[#00B2F6] focus:bg-white transition-colors ${
                      clientErrors.email ? 'border-[#F82649]' : 'border-slate-200'
                    }`}
                  />
                  {clientErrors.email && (
                    <span className="text-[11px] text-[#F82649] mt-1 block">{clientErrors.email}</span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-700 mb-2">
                    {isFr ? 'Téléphone / WhatsApp' : 'Phone / WhatsApp'}
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    placeholder="+237 6..."
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:border-[#00B2F6] focus:bg-white transition-colors"
                  />
                </div>
              </div>

              {/* Row 3: Service Requested & Format */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-700 mb-2">
                    {isFr ? 'Domaine d’intervention recherché *' : 'Area of Expertise *'}
                  </label>
                  <select
                    value={form.service}
                    onChange={e => setForm({ ...form, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-[#00B2F6] focus:bg-white transition-colors cursor-pointer"
                  >
                    {serviceOptions.map(opt => (
                      <option key={opt.id} value={opt.id}>
                        {isFr ? opt.labelFr : opt.labelEn}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-700 mb-2">
                    {isFr ? 'Format d’approvisionnement' : 'Procurement Format'}
                  </label>
                  <select
                    value={form.budget}
                    onChange={e => setForm({ ...form, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-[#00B2F6] focus:bg-white transition-colors cursor-pointer"
                  >
                    {budgetOptions.map(opt => (
                      <option key={opt.id} value={opt.id}>
                        {isFr ? opt.labelFr : opt.labelEn}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 4: Description */}
              <div>
                <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-700 mb-2">
                  {isFr ? 'Description détaillée de votre besoin *' : 'Detailed Requirements *'}
                </label>
                <textarea
                  rows={5}
                  required
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  placeholder={
                    isFr
                      ? 'Précisez les volumes souhaités (quantités d’équipements, type de campagne marketing, fournitures), les délais et le lieu de livraison (Yaoundé ou autres)...'
                      : 'Specify desired quantities, sports disciplines, marketing objectives, delivery location (Yaoundé or others), and timelines...'
                  }
                  className={`w-full px-4 py-3 rounded-lg bg-slate-50 border text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:border-[#00B2F6] focus:bg-white transition-colors ${
                    clientErrors.message ? 'border-[#F82649]' : 'border-slate-200'
                  }`}
                />
                {clientErrors.message && (
                  <span className="text-[11px] text-[#F82649] mt-1 block">{clientErrors.message}</span>
                )}
              </div>

              {/* Row 5: Consent Checkbox */}
              <div className="space-y-1">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={e => setForm({ ...form, consent: e.target.checked })}
                    className="mt-0.5 w-4 h-4 rounded accent-[#054859] bg-white border-slate-300 cursor-pointer"
                  />
                  <span className="text-xs text-slate-600 leading-relaxed">
                    {isFr
                      ? 'J’accepte que les données renseignées soient traitées par ETS BESRG COMPANY afin d’établir un devis commercial et d’assurer le suivi de ma demande.'
                      : 'I consent to the processing of entered details by ETS BESRG COMPANY to formulate a commercial proposal and ensure follow-up.'}
                  </span>
                </label>
                {clientErrors.consent && (
                  <span className="text-[11px] text-[#F82649] block pl-7">{clientErrors.consent}</span>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-[11px] font-mono text-slate-500">
                  <Shield className="w-3.5 h-3.5 text-[#00B2F6]" />
                  <span>{isFr ? 'Chiffrement SSL & Traitement sécurisé' : 'SSL Encrypted & Server Processed'}</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[#054859] hover:bg-[#075f75] text-white text-xs font-semibold tracking-wider uppercase border border-[#00B2F6]/50 shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    isSubmitting ? 'opacity-50 cursor-wait' : ''
                  }`}
                >
                  <Send className="w-3.5 h-3.5 text-[#00B2F6]" />
                  <span>
                    {isSubmitting
                      ? isFr
                        ? 'Transmission en cours...'
                        : 'Transmitting...'
                      : isFr
                      ? 'Transmettre le dossier'
                      : 'Transmit Request'}
                  </span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Right Column: Direct Contacts & Commitments on White */}
        <div className="lg:col-span-4 space-y-6">
          {/* Desk card */}
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-5 bg-white shadow-xs">
            <h3 className="font-display text-base font-bold text-[#054859] border-b border-slate-100 pb-3">
              {isFr ? 'Coordonnées Officielles' : 'Official Contacts'}
            </h3>

            <div className="space-y-4 text-xs text-slate-600">
              <div className="flex items-start gap-3">
                <Building className="w-4 h-4 text-[#054859] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-900 font-semibold">{BESRG_DATA.company.legalName}</span>
                  <span className="font-mono text-slate-500">RCCM : {BESRG_DATA.company.rccm}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#F82649] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-900 font-semibold">{isFr ? 'Siège Déclaré' : 'Headquarters'}</span>
                  <span>{BESRG_DATA.company.location}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#00B2F6] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-900 font-semibold">Email Direct</span>
                  <a href={`mailto:${BESRG_DATA.company.email}`} className="text-[#054859] font-medium hover:underline">
                    {BESRG_DATA.company.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#00B2F6] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-900 font-semibold">{isFr ? 'Engagement de Réponse' : 'Response Guarantee'}</span>
                  <span>{isFr ? 'Sous 24h à 48h ouvrées' : 'Within 24h to 48h business hours'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Confidentiality card */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-xs">
            <div className="flex items-center gap-2 text-[#054859] font-mono font-bold uppercase tracking-wider">
              <FileCheck className="w-4 h-4 text-[#00B2F6]" />
              <span>{isFr ? 'CONFIDENTIALITÉ COMMERCIALE' : 'COMMERCIAL INTEGRITY'}</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              {isFr
                ? 'Toutes les consultations et cotations tarifaires émises par ETS BESRG COMPANY respectent une stricte déontologie commerciale et la confidentialité des prix négociés.'
                : 'All quotations and commercial bids issued by ETS BESRG COMPANY adhere to strict commercial confidentiality.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
