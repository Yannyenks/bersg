export interface ServiceDetail {
  id: string;
  categoryGroup: string;
  title: string;
  titleEn: string;
  tagline: string;
  taglineEn: string;
  badge: string;
  badgeEn: string;
  imageUrl?: string;
  problem: string;
  problemEn: string;
  approach: string;
  approachEn: string;
  deliverables: { fr: string; en: string }[];
  steps: { step: string; titleFr: string; titleEn: string; descFr: string; descEn: string }[];
  benefits: { fr: string; en: string }[];
  faqs: { qFr: string; qEn: string; aFr: string; aEn: string }[];
}

export interface DemoProject {
  id: string;
  title: string;
  category: string;
  sector: string;
  sectorEn: string;
  imageUrl?: string;
  isConceptDemo: boolean;
  badgeFr: string;
  badgeEn: string;
  summaryFr: string;
  summaryEn: string;
  challengeFr: string;
  challengeEn: string;
  solutionFr: string;
  solutionEn: string;
  metrics: { labelFr: string; labelEn: string; value: string }[];
  tags: string[];
}

export const BESRG_DATA = {
  company: {
    name: 'ETS BESRG COMPANY',
    shortName: 'BESRG COMPANY',
    legalName: 'ETS BESRG COMPANY',
    legalForm: 'Établissement (ETS)',
    rccm: 'RC/YAO/2024/A/843',
    registryLocation: 'Greffe du Tribunal de Première Instance de Yaoundé (Cameroun)',
    activityStartDate: '1er février 2024',
    location: 'Yaoundé, Cameroun',
    city: 'Yaoundé',
    country: 'Cameroun',
    headlineFr: "L'avenir se construit maintenant.",
    headlineEn: 'The future is built now.',
    subheadlineFr: 'ETS BESRG COMPANY est une entreprise polyvalente basée à Yaoundé (Cameroun), alliant vision stratégique, marketing digital, communication, équipements sportifs certifiés et commerce général.',
    subheadlineEn: 'ETS BESRG COMPANY is a versatile enterprise based in Yaoundé (Cameroon), combining strategic vision, digital marketing, communication, certified athletic equipment, and general trade services.',
    email: 'contact@besrg-company.com',
    phone: '+237 6 00 00 00 00', // À confirmer / coordonnée configurable
    phoneNoticeFr: 'Coordonnées téléphoniques en cours d’actualisation administrative',
    phoneNoticeEn: 'Phone contacts pending final administrative update',
    status: 'Établissement commercial polyvalent immatriculé au RCCM',
    declaredDomains: [
      { id: 'sport', fr: 'Équipements et fournitures sportifs', en: 'Sports equipment & athletic supplies' },
      { id: 'marketing', fr: 'Marketing digital', en: 'Digital marketing' },
      { id: 'comm', fr: 'Communication & Image de marque', en: 'Corporate communication & branding' },
      { id: 'services', fr: 'Prestations de services', en: 'Corporate service delivery' },
      { id: 'commerce', fr: 'Commerce général', en: 'General trade & procurement' }
    ],
    transparencyNoticeFr: 'Informations administratives déclarées et enregistrées au RCCM sous le numéro RC/YAO/2024/A/843. Début d’activité déclaré : 1er février 2024 à Yaoundé, Cameroun. Les données présentées respectent scrupuleusement les registres légaux.',
    transparencyNoticeEn: 'Official administrative information registered under RCCM: RC/YAO/2024/A/843. Declared activity inception: February 1, 2024 in Yaoundé, Cameroon.'
  },

  manifesto: {
    titleFr: 'Penser plus loin. Construire autrement.',
    titleEn: 'Think Further. Build Differently.',
    subtitleFr: 'La rigueur opérationnelle et la vision d’affaires : les leviers indispensables pour le développement durable des entreprises et institutions.',
    subtitleEn: 'Operational rigor and strategic business vision: the indispensable catalysts for sustainable corporate and institutional growth.',
    paragraphsFr: [
      'Fondée sur un socle d’exigence professionnelle et immatriculée à Yaoundé (Cameroun), ETS BESRG COMPANY déploie ses compétences au croisement du commerce moderne et de la transformation numérique.',
      'Qu’il s’agisse de doter des organisations sportives en équipements certifiés, d’accélérer la croissance d’une marque par le marketing digital ou de faciliter les approvisionnements en commerce général, notre méthode privilégie toujours l’efficacité et la conformité.',
      'De la conduite de campagnes marketing ciblées aux livraisons logistiques d’équipements sportifs et fournitures de terrain, nous bâtissons des partenariats durables fondés sur la confiance et la transparence.'
    ],
    paragraphsEn: [
      'Grounded in professional discipline and officially registered in Yaoundé (Cameroon), ETS BESRG COMPANY operates at the crossroads of modern trade and digital empowerment.',
      'Whether supplying sports clubs and institutions with certified athletic gear, accelerating corporate market share through data-backed marketing, or facilitating corporate procurement, our focus is grounded in delivery and compliance.',
      'From targeted communication campaigns to on-the-ground equipment logistics, we establish lasting client partnerships rooted in trust and verifiable reliability.'
    ]
  },

  expertises: [
    {
      id: 'equipements-sportifs',
      categoryGroup: 'sport',
      titleFr: 'Équipements & Fournitures Sportifs',
      titleEn: 'Sports & Athletic Equipment',
      shortDescFr: 'Approvisionnement en matériel sportif certifié, tenues d’équipes, accessoires d’entraînement et dotations pour clubs, écoles, entreprises et compétitions.',
      shortDescEn: 'Supply of certified sports equipment, team apparel, training gear, and athletic endowments for clubs, schools, corporations, and tournaments.',
      iconName: 'Activity',
      color: '#F82649',
      benefitsFr: ['Matériels durables et conformes aux normes', 'Personnalisation des équipements (flocage, textile)', 'Logistique d’approvisionnement fiable et suivie'],
      benefitsEn: ['Durable equipment compliant with standards', 'Custom team branding & gear customization', 'Reliable, tracked procurement logistics']
    },
    {
      id: 'marketing-digital',
      categoryGroup: 'marketing',
      titleFr: 'Marketing Digital',
      titleEn: 'Digital Marketing',
      shortDescFr: 'Gestion de campagnes publicitaires ciblées (Meta Ads, Google Search), optimisation des tunnels de vente et génération de contacts qualifiés.',
      shortDescEn: 'Targeted advertising campaigns (Meta Ads, Google Search), sales funnel optimization, and high-intent lead generation.',
      iconName: 'TrendingUp',
      color: '#00B2F6',
      benefitsFr: ['Génération de prospects qualifiés', 'Visibilité locale à Yaoundé et nationale', 'Mesure rigoureuse du retour sur investissement'],
      benefitsEn: ['High-intent lead generation', 'Local visibility in Yaoundé and nationwide', 'Transparent attribution and ROI measurement']
    },
    {
      id: 'communication',
      categoryGroup: 'comm',
      titleFr: 'Communication & Image de Marque',
      titleEn: 'Corporate Communication & Branding',
      shortDescFr: 'Stratégies de communication institutionnelle, valorisation de marque, création de supports et diffusion auprès des publics cibles.',
      shortDescEn: 'Corporate communications strategy, brand enhancement, marketing collaterals, and targeted public outreach.',
      iconName: 'Compass',
      color: '#054859',
      benefitsFr: ['Notoriété et crédibilité renforcées', 'Supports de communication harmonisés', 'Rayonnement auprès des partenaires et institutions'],
      benefitsEn: ['Strengthened brand credibility', 'Unified communication collaterals', 'Enhanced outreach to partners and institutions']
    },
    {
      id: 'prestations-services',
      categoryGroup: 'services',
      titleFr: 'Prestations de Services',
      titleEn: 'Corporate & Professional Services',
      shortDescFr: 'Assistance opérationnelle, gestion déléguée de projets d’approvisionnement et prestations logistiques sur-mesure pour organisations.',
      shortDescEn: 'Operational assistance, delegated procurement project management, and tailored logistics services for organizations.',
      iconName: 'Briefcase',
      color: '#054859',
      benefitsFr: ['Gain de temps opérationnel mesurable', 'Interlocuteur dédié et responsable', 'Respect scrupuleux du cahier des charges'],
      benefitsEn: ['Measurable operational time savings', 'Dedicated accountable contact', 'Strict adherence to project specifications']
    },
    {
      id: 'commerce-general',
      categoryGroup: 'commerce',
      titleFr: 'Commerce Général & Négoce',
      titleEn: 'General Trade & Supply',
      shortDescFr: 'Négoce multi-produits, approvisionnement B2B en fournitures et consommables d’entreprise avec facturation réglementaire.',
      shortDescEn: 'Multi-category trade, B2B supplies and consumables procurement with regulatory billing compliance.',
      iconName: 'Package',
      color: '#F82649',
      benefitsFr: ['Approvisionnements groupés simplifiés', 'Cadre légal camerounais vérifiable (RCCM : RC/YAO/2024/A/843)', 'Bordereaux de livraison et traçabilité complète'],
      benefitsEn: ['Simplified bulk procurement', 'Verifiable legal framework (RCCM: RC/YAO/2024/A/843)', 'Delivery slips and complete traceability']
    }
  ],

  servicesDetails: [
    {
      id: 'marketing-digital',
      categoryGroup: 'marketing-comm',
      title: 'Marketing Digital & Communication Stratégique',
      titleEn: 'Digital Marketing & Strategic Communication',
      tagline: 'Transformer la visibilité numérique en moteur d’acquisition concret pour vos produits et services.',
      taglineEn: 'Transforming digital visibility into a concrete client acquisition engine for your products and services.',
      badge: 'Acquisition & Notoriété',
      badgeEn: 'Acquisition & Branding',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
      problem: 'Beaucoup d’entreprises et d’organisations peinent à émerger dans l’espace numérique : budgets publicitaires mal orientés, absence d’attribution des résultats et communication déconnectée des cibles réelles.',
      problemEn: 'Many organizations struggle to establish a profitable digital presence: misallocated ad spend, zero attribution telemetry, and disconnected messaging.',
      approach: 'ETS BESRG COMPANY structure une démarche méthodique combinant ciblage publicitaire sur les plateformes dominantes (Meta Ads, Google Search), production de visuels percutants, rédaction orientée valeur et communication corporate.',
      approachEn: 'ETS BESRG COMPANY deploys a structured approach combining targeted ads on primary ad networks (Meta Ads, Google Search), compelling visual design, value copywriting, and corporate communication.',
      deliverables: [
        { fr: 'Audit de visibilité et diagnostic concurrentiel', en: 'Digital visibility audit and competitive benchmark' },
        { fr: 'Gestion et optimisation de campagnes Meta Ads & Google Ads', en: 'Management and optimization of Meta Ads & Google Ads' },
        { fr: 'Élaboration de calendriers éditoriaux et contenus réseaux sociaux', en: 'Strategic editorial calendars and social content production' },
        { fr: 'Stratégie de communication de marque et relations publiques', en: 'Brand communication strategy and corporate PR' },
        { fr: 'Référencement local (SEO Yaoundé & Cameroun) et sémantique', en: 'Local SEO (Yaoundé & Cameroon) and semantic search authority' },
        { fr: 'Rapports de performance transparents et analyse des retombées', en: 'Transparent performance reporting and campaign ROI analysis' }
      ],
      steps: [
        { step: '01', titleFr: 'Cadrage & Cibles', titleEn: 'Targeting & Scoping', descFr: 'Identification précise des audiences à Yaoundé, au Cameroun et à l’international.', descEn: 'Precise identification of target personas in Yaoundé, Cameroon, and worldwide.' },
        { step: '02', titleFr: 'Conception Créative', titleEn: 'Creative Production', descFr: 'Création des visuels de communication, messages clés et supports publicitaires.', descEn: 'Creation of communication visuals, key messaging, and advertising assets.' },
        { step: '03', titleFr: 'Lancement des Dispositifs', titleEn: 'Campaign Deployment', descFr: 'Paramétrage rigoureux du ciblage, des budgets alloués et des événements de conversion.', descEn: 'Rigorous setup of audiences, allocated ad spend, and conversion events.' },
        { step: '04', titleFr: 'Mesure & Itération', titleEn: 'Measurement & Scaling', descFr: 'Analyse continue des indicateurs pour ajuster les messages et accroître l’impact.', descEn: 'Ongoing performance tracking to refine messaging and scale campaign impact.' }
      ],
      benefits: [
        { fr: 'Notoriété renforcée auprès des décideurs et consommateurs cibles', en: 'Enhanced brand authority among decision-makers and target consumers' },
        { fr: 'Génération de contacts qualifiés pour vos offres et services', en: 'Steady generation of qualified inquiries for your products and services' },
        { fr: 'Transparence totale sur les actions engagées et les résultats obtenus', en: 'Total transparency on executed actions and verifiable results' }
      ],
      faqs: [
        {
          qFr: 'Travaillez-vous aussi bien pour les PME locales que pour des institutions ?',
          qEn: 'Do you work with local SMEs as well as larger institutions?',
          aFr: 'Oui, nos plans de communication et de marketing digital sont modulables et s’adaptent aussi bien aux besoins d’une entreprise camerounaise en expansion qu’à des programmes d’envergure.',
          aEn: 'Yes, our communication and marketing campaigns are modular, designed for growing Cameroonian businesses as well as larger institutional programs.'
        },
        {
          qFr: 'Quels canaux publicitaires recommandez-vous au Cameroun ?',
          qEn: 'Which advertising channels do you recommend in Cameroon?',
          aFr: 'Meta (Facebook, Instagram, WhatsApp Business) représente le premier carrefour d’audience au Cameroun, complété par Google Search et YouTube pour capter l’intention de recherche active.',
          aEn: 'Meta (Facebook, Instagram, WhatsApp Business) represents the primary reach channel in Cameroon, paired with Google Search and YouTube for high-intent search capture.'
        }
      ]
    },
    {
      id: 'equipements-sportifs',
      categoryGroup: 'sport',
      title: 'Équipements & Fournitures Sportifs',
      titleEn: 'Sports & Athletic Equipment Supply',
      tagline: 'L’exigence du matériel de haute performance au service des clubs, athlètes, écoles et organisations.',
      taglineEn: 'High-performance sports equipment catering to athletic clubs, athletes, schools, and organizations.',
      badge: 'Fourniture & Sport',
      badgeEn: 'Athletic Supply',
      imageUrl: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1200&auto=format&fit=crop',
      problem: 'L’approvisionnement en équipements sportifs de qualité au Cameroun et dans la sous-région souffre fréquemment de retards logistiques, de matériels non homologués ou d’une durabilité insuffisante face à un usage intensif.',
      problemEn: 'Procuring high-standard sports gear in Cameroon and the sub-region often faces logistics delays, non-certified merchandise, or inadequate durability under intense athletic usage.',
      approach: 'ETS BESRG COMPANY s’appuie sur des réseaux de fournisseurs certifiés pour livrer des équipements robustes, conformes aux exigences sportives et personnalisables selon les couleurs de votre club ou institution.',
      approachEn: 'ETS BESRG COMPANY leverages certified supplier networks to deliver robust, regulation-compliant athletic gear, fully customizable with your club or institutional colors.',
      deliverables: [
        { fr: 'Équipements collectifs (ballons homologués, filets, plots, chasubles, échelles de rythme)', en: 'Team gear (regulation balls, nets, cones, training bibs, agility ladders)' },
        { fr: 'Tenues sportives complètes et maillots personnalisés (flocage, écussons, sublimation)', en: 'Custom team uniforms & jerseys (printing, embroidery, sublimation)' },
        { fr: 'Fournitures d’entraînement et de renforcement pour académies et complexes sportifs', en: 'Training & conditioning equipment for sports academies and fitness facilities' },
        { fr: 'Dotations d’équipements pour tournois scolaires, universitaires et corporatifs', en: 'Endowment packages for school, university, and corporate tournaments' },
        { fr: 'Devis quantitatifs détaillés avec délais de livraison planifiés à Yaoundé et régions', en: 'Itemized volume quotes with delivery schedules across Yaoundé and nationwide' }
      ],
      steps: [
        { step: '01', titleFr: 'Recueil des Besoins', titleEn: 'Requirements Intake', descFr: 'Spécifications techniques, volumes requis, disciplines concernées et délais.', descEn: 'Technical specifications, required quantities, sports disciplines, and deadlines.' },
        { step: '02', titleFr: 'Sourcing & Devis', titleEn: 'Sourcing & Quotation', descFr: 'Sélection des équipements auprès de fabricants fiables et émission d’un devis transparent.', descEn: 'Equipment sourcing from vetted manufacturers and issuance of an itemized quote.' },
        { step: '03', titleFr: 'Personnalisation & Contrôle', titleEn: 'Customization & QA', descFr: 'Impression, marquage aux couleurs du client et vérification de la qualité des matières.', descEn: 'Branding, printing with client colors, and textile quality verification.' },
        { step: '04', titleFr: 'Livraison & Réception', titleEn: 'Delivery & Inspection', descFr: 'Acheminement sécurisé, remise avec bordereau et service après-vente.', descEn: 'Secure logistics dispatch, handover with inspection sheet, and after-sales service.' }
      ],
      benefits: [
        { fr: 'Matériaux certifiés et résistants à l’usure', en: 'Certified, highly durable materials built for intensive play' },
        { fr: 'Identité visuelle forte pour vos équipes grâce au marquage professionnel', en: 'Strong visual identity for your teams through professional printing' },
        { fr: 'Partenaire commercial de proximité légalement constitué (RCCM : RC/YAO/2024/A/843)', en: 'Locally established, legally registered commercial partner (RCCM: RC/YAO/2024/A/843)' }
      ],
      faqs: [
        {
          qFr: 'Quelles disciplines sportives couvrez-vous ?',
          qEn: 'Which sports disciplines do you cover?',
          aFr: 'Nos capacités de fourniture couvrent le football, le basketball, le volleyball, l’athlétisme, le handball, le fitness ainsi que les activités d’éducation physique scolaire.',
          aEn: 'Our supply capabilities cover football, basketball, volleyball, athletics, handball, fitness, and institutional physical education programs.'
        },
        {
          qFr: 'Proposez-vous la personnalisation avec logos et numéros ?',
          qEn: 'Do you provide logo and number customization on team kits?',
          aFr: 'Oui, nous réalisons le flocage, la broderie et la sublimation thermique de vos maillots, survêtements et sacs de sport.',
          aEn: 'Yes, we provide heat-press printing, embroidery, and thermal sublimation for jerseys, tracksuits, and gear bags.'
        }
      ]
    },
    {
      id: 'prestations-commerce',
      categoryGroup: 'services-commerce',
      title: 'Prestations de Services & Commerce Général',
      titleEn: 'Corporate Services & General Trade',
      tagline: 'L’efficacité d’un partenaire d’approvisionnement polyvalent et rigoureux pour vos besoins professionnels.',
      taglineEn: 'The reliability of a versatile and rigorous procurement partner for all your corporate supply needs.',
      badge: 'Négoce & Prestations',
      badgeEn: 'Trade & Services',
      imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
      problem: 'Gérer de multiples fournisseurs pour les consommables de bureau, matériels d’équipement et prestations ponctuelles entraîne une dispersion administrative et des risques de non-conformité.',
      problemEn: 'Coordinating disparate vendors for office supplies, business hardware, and ad-hoc corporate services causes administrative burden and compliance risks.',
      approach: 'ETS BESRG COMPANY agit comme un prestataire et négociant généraliste structuré, simplifiant votre chaîne d’approvisionnement avec des livraisons documentées et un suivi commercial rigoureux.',
      approachEn: 'ETS BESRG COMPANY serves as a structured general procurement partner, streamlining your supply chain with transparent documentation and rigorous commercial follow-through.',
      deliverables: [
        { fr: 'Fourniture de consommables d’entreprise, papeterie et matériels bureautiques', en: 'Office supplies, stationery, and corporate administrative equipment' },
        { fr: 'Négoce et approvisionnement en biens d’équipement divers selon bon de commande', en: 'Procurement of diverse equipment goods aligned with purchase orders' },
        { fr: 'Prestations d’assistance opérationnelle et logistique pour projets d’entreprise', en: 'Operational support and logistics services for corporate initiatives' },
        { fr: 'Gestion de commandes groupées pour administrations, ONG et sociétés privées', en: 'Bulk procurement management for public bodies, NGOs, and private firms' },
        { fr: 'Bordereaux de livraison conformes, facturation réglementaire et traçabilité', en: 'Compliant delivery slips, regulated billing, and transparent tracking' }
      ],
      steps: [
        { step: '01', titleFr: 'Expression du Besoin', titleEn: 'Procurement Brief', descFr: 'Réception du bon de commande ou cahier des charges de la prestation.', descEn: 'Intake of purchase orders or operational service briefs.' },
        { step: '02', titleFr: 'Cotation Tarifaire', titleEn: 'Pricing & Sourcing', descFr: 'Identification des meilleures sources d’approvisionnement et émission du devis.', descEn: 'Identification of optimal procurement sources and quotation issuance.' },
        { step: '03', titleFr: 'Validation & Logistique', titleEn: 'Validation & Logistics', descFr: 'Confirmation d’achat, conditionnement et organisation du transport.', descEn: 'Order confirmation, packaging, and coordinated transit.' },
        { step: '04', titleFr: 'Réception & Conformité', titleEn: 'Delivery & Inspection', descFr: 'Livraison sur site avec procès-verbal de conformité et suivi comptable.', descEn: 'On-site delivery with conformity acceptance report and accounting documentation.' }
      ],
      benefits: [
        { fr: 'Interlocuteur unique pour l’ensemble de vos approvisionnements', en: 'Single accountable point of contact for diverse procurement streams' },
        { fr: 'Respect scrupuleux des engagements de délais et de qualité', en: 'Strict commitment to delivery timelines and verified quality' },
        { fr: 'Cadre légal camerounais vérifiable (RCCM : RC/YAO/2024/A/843)', en: 'Verifiable legal registration in Cameroon (RCCM: RC/YAO/2024/A/843)' }
      ],
      faqs: [
        {
          qFr: 'Pouvez-vous répondre aux consultations et appels d’offres formels ?',
          qEn: 'Can you participate in formal tenders and procurement consultations?',
          aFr: 'Oui, ETS BESRG COMPANY dispose de l’immatriculation légale requise au RCCM et fournit des propositions commerciales adaptées aux exigences des consultations privées et publiques.',
          aEn: 'Yes, ETS BESRG COMPANY possesses the required legal RCCM registration and prepares formal commercial bids aligned with public and private tender requirements.'
        }
      ]
    },
    {
      id: 'communication',
      categoryGroup: 'comm',
      title: 'Communication & Image de Marque',
      titleEn: 'Corporate Communication & Branding',
      tagline: 'Construire une image de marque forte, crédible et mémorable pour votre organisation.',
      taglineEn: 'Building a strong, authoritative, and memorable brand presence for your organization.',
      badge: 'Notoriété & Image',
      badgeEn: 'Branding & Authority',
      imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop',
      problem: 'Une identité visuelle floue ou une communication non structurée nuit à la crédibilité de votre entreprise auprès des partenaires, investisseurs et clients.',
      problemEn: 'An ambiguous brand image or disorganized messaging damages your corporate authority among clients, partners, and institutions.',
      approach: 'ETS BESRG COMPANY élabore des stratégies de communication globales associant chartes graphiques harmonisées, supports de présentation institutionnels, relations publiques et diffusion ciblée.',
      approachEn: 'ETS BESRG COMPANY architects end-to-end communication strategies uniting harmonized visual systems, corporate presentation collaterals, PR, and targeted outreach.',
      deliverables: [
        { fr: 'Élaboration de chartes graphiques et guidelines d’utilisation', en: 'Brand identity guidelines and visual usage standards' },
        { fr: 'Supports de présentation d’entreprise, plaquettes et brochures institutionnelles', en: 'Corporate pitch decks, brochures, and company profile collaterals' },
        { fr: 'Campagnes de relations publiques et communication événementielle', en: 'Public relations campaigns and corporate event communication' },
        { fr: 'Signalétique professionnelle et supports de communication imprimés', en: 'Professional signage and commercial print collaterals' }
      ],
      steps: [
        { step: '01', titleFr: 'Audit d’Image', titleEn: 'Brand Audit', descFr: 'Analyse du positionnement actuel, des valeurs et des attentes des parties prenantes.', descEn: 'Assessment of current brand stance, core values, and stakeholder expectations.' },
        { step: '02', titleFr: 'Stratégie & Supports', titleEn: 'Strategy & Assets', descFr: 'Conception des messages clés et production des supports de marque.', descEn: 'Core messaging architecture and professional brand collateral production.' },
        { step: '03', titleFr: 'Déploiement', titleEn: 'Activation', descFr: 'Diffusion coordonnée sur l’ensemble des points de contact physiques et digitaux.', descEn: 'Coordinated rollout across all physical and corporate communication touchpoints.' }
      ],
      benefits: [
        { fr: 'Crédibilité institutionnelle renforcée auprès des partenaires', en: 'Elevated institutional credibility with partners and stakeholders' },
        { fr: 'Cohérence exemplaire sur l’ensemble de vos supports de communication', en: 'Exemplary consistency across all brand touchpoints' }
      ],
      faqs: [
        {
          qFr: 'Accompagnez-vous la refonte globale d’une identité existante ?',
          qEn: 'Do you assist with complete rebranding for existing organizations?',
          aFr: 'Oui, nous intervenons aussi bien pour la création d’une nouvelle image que pour la modernisation et l’harmonisation d’une identité déjà établie.',
          aEn: 'Yes, we assist both newly established firms and existing organizations seeking to modernize and unify their brand presence.'
        }
      ]
    }
  ],

  methodology: [
    {
      num: '01',
      code: 'DISCOVER',
      titleFr: 'Comprendre & Cadrer',
      titleEn: 'Discover & Frame',
      descFr: 'Analyse précise des besoins (équipements sportifs, campagne marketing, ou approvisionnement général) et définition des critères de succès.',
      descEn: 'Granular analysis of requirements (athletic gear, marketing campaign, or general procurement) and definition of success milestones.',
      metricsFr: 'Livrable : Matrice de cadrage & Devis estimatif',
      metricsEn: 'Deliverable: Scoping Matrix & Preliminary Estimate'
    },
    {
      num: '02',
      code: 'STRATEGIZE',
      titleFr: 'Concevoir & Sourcer',
      titleEn: 'Strategize & Source',
      descFr: 'Sélection des canaux de communication ou des fabricants certifiés, modélisation des plans d’action et validation des échantillons.',
      descEn: 'Selection of communication channels or vetted manufacturers, action plan prototyping, and sample validation.',
      metricsFr: 'Livrable : Plan d’action validé & Fiches techniques',
      metricsEn: 'Deliverable: Validated Action Plan & Technical Specs'
    },
    {
      num: '03',
      code: 'BUILD',
      titleFr: 'Exécuter & Livrer',
      titleEn: 'Execute & Deliver',
      descFr: 'Lancement des campagnes publicitaires, personnalisation des équipements sportifs ou acheminement des commandes avec suivi rigoureux.',
      descEn: 'Ad campaign launch, sports gear customization, or supply dispatch with strict quality inspection.',
      metricsFr: 'Livrable : Réception conforme & Rapports d’exécution',
      metricsEn: 'Deliverable: Conformity Handover & Execution Reports'
    },
    {
      num: '04',
      code: 'OPTIMIZE',
      titleFr: 'Pérenniser & Accompagner',
      titleEn: 'Sustain & Support',
      descFr: 'Suivi après-vente, mesure des retombées commerciales et ajustement continu pour un partenariat d’affaires durable.',
      descEn: 'After-sales support, commercial ROI evaluation, and ongoing iteration for an enduring business relationship.',
      metricsFr: 'Livrable : Bilan de satisfaction & Suivi partenarial',
      metricsEn: 'Deliverable: Satisfaction Review & Partnership Cadence'
    }
  ],

  demoShowcase: [
    {
      id: 'demo-sport-kit',
      title: 'Dotation Sportive & Académie de Football',
      category: 'Équipements & Fournitures Sportifs',
      sector: 'Sports Collectifs & Formation Jeunesse',
      sectorEn: 'Athletic Teams & Youth Development',
      imageUrl: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1200&auto=format&fit=crop',
      isConceptDemo: true,
      badgeFr: 'Concept Démonstrateur',
      badgeEn: 'Demonstration Concept',
      summaryFr: 'Modélisation d’un dispositif complet de dotation en ballons certifiés, chasubles et tenues personnalisées pour un centre de formation sportive.',
      summaryEn: 'Model of an end-to-end equipment package featuring regulation balls, training bibs, and custom kits for a youth athletic academy.',
      challengeFr: 'Assurer une résistance textile supérieure aux entraînements répétés et un respect strict des délais avant le début du championnat.',
      challengeEn: 'Ensuring superior textile wear resistance across daily training cycles with strict delivery timelines ahead of league kickoff.',
      solutionFr: 'Sélection d’un textile respirant haute densité avec flocage thermique résistant et approvisionnement groupé optimisé.',
      solutionEn: 'High-density breathable athletic fabric selection paired with durable thermal printing and consolidated freight sourcing.',
      metrics: [
        { labelFr: 'Type de réalisation', labelEn: 'Project Type', value: 'Prototype R&D' },
        { labelFr: 'Norme matériel', labelEn: 'Standard', value: 'Certifié' },
        { labelFr: 'Cadre d’usage', labelEn: 'Use Case', value: 'Académies' }
      ],
      tags: ['Équipements Sportifs', 'Textile Pro', 'Dotations', 'Logistique']
    },
    {
      id: 'demo-aurora-perf',
      title: 'Campagne de Visibilité & Acquisition Locale',
      category: 'Marketing Digital & Communication',
      sector: 'Distribution & Services aux Entreprises',
      sectorEn: 'Commercial Distribution & B2B Services',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
      isConceptDemo: true,
      badgeFr: 'Concept Démonstrateur',
      badgeEn: 'Demonstration Concept',
      summaryFr: 'Scénario de campagne multi-plateformes (Meta Ads & WhatsApp Business) pour la promotion d’une gamme de produits avec tracking des demandes de devis.',
      summaryEn: 'Multi-platform advertising campaign scenario (Meta Ads & WhatsApp Business) driving qualified quote requests for commercial product lines.',
      challengeFr: 'Maximiser le taux de contact direct via messagerie instantanée tout en contrôlant rigoureusement le coût par prospect.',
      challengeEn: 'Maximizing direct instant-messaging lead intake while keeping customer acquisition cost strictly controlled.',
      solutionFr: 'Créatifs publicitaires géo-ciblés, tunnels de conversion allégés et formulaires automatisés de qualification.',
      solutionEn: 'Geo-targeted localized ad creatives, lightweight conversion funnels, and automated pre-qualification forms.',
      metrics: [
        { labelFr: 'Type de réalisation', labelEn: 'Project Type', value: 'Modèle Démo' },
        { labelFr: 'Ciblage testé', labelEn: 'Targeting', value: 'Yaoundé & Ext.' },
        { labelFr: 'Attribution', labelEn: 'Telemetry', value: 'WhatsApp CAPI' }
      ],
      tags: ['Meta Ads', 'WhatsApp CRO', 'Marketing Local', 'Acquisition']
    },
    {
      id: 'demo-procurement',
      title: 'Pack Approvisionnement Fournitures B2B',
      category: 'Prestations de Services & Commerce Général',
      sector: 'PME, ONG & Établissements Tertiaires',
      sectorEn: 'SMEs, NGOs & Professional Offices',
      imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
      isConceptDemo: true,
      badgeFr: 'Concept Démonstrateur',
      badgeEn: 'Demonstration Concept',
      summaryFr: 'Protocole de gestion d’approvisionnement groupé en consommables bureautiques et matériels d’équipement avec bordereau de traçabilité.',
      summaryEn: 'Consolidated B2B procurement protocol for administrative consumables and office hardware with verified tracking sheets.',
      challengeFr: 'Centraliser des achats hétérogènes en un seul bon de commande tout en garantissant les délais de livraison sur site.',
      challengeEn: 'Consolidating heterogeneous supply items into a single purchase order while guaranteeing on-time on-site delivery.',
      solutionFr: 'Nomenclature standardisée, contrôle qualité à l’emballage et transmission d’un dossier administratif complet.',
      solutionEn: 'Standardized nomenclature, pre-shipment quality inspection, and full administrative audit-ready invoicing documentation.',
      metrics: [
        { labelFr: 'Type de réalisation', labelEn: 'Project Type', value: 'Modèle Démo' },
        { labelFr: 'Traçabilité', labelEn: 'Traceability', value: '100% Documentée' },
        { labelFr: 'Formule', labelEn: 'Format', value: 'Guichet Unique' }
      ],
      tags: ['Commerce Général', 'Approvisionnement', 'B2B', 'RCCM Conforme']
    },
    {
      id: 'demo-brand-identity',
      title: 'Identité de Marque & Communication Institutionnelle',
      category: 'Communication & Image de Marque',
      sector: 'Institutions, Fondations & Entreprises',
      sectorEn: 'Institutions, Foundations & Enterprises',
      imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop',
      isConceptDemo: true,
      badgeFr: 'Concept Démonstrateur',
      badgeEn: 'Demonstration Concept',
      summaryFr: 'Élaboration d’un système d’identité visuelle harmonisé, plaquettes commerciales et supports institutionnels de haute qualité.',
      summaryEn: 'Design of a unified visual identity system, corporate decks, and high-standard institutional collaterals.',
      challengeFr: 'Unifier la présence de marque sur l’ensemble des points de contact physiques et digitaux pour accroître la crédibilité auprès des partenaires.',
      challengeEn: 'Unifying brand presence across physical and digital touchpoints to elevate credibility among partners.',
      solutionFr: 'Charte graphique complète, grille typographique rigoureuse et supports prêts à l’impression avec finitions soignées.',
      solutionEn: 'Comprehensive brand guide, rigorous typographic layout, and print-ready collaterals with refined finishes.',
      metrics: [
        { labelFr: 'Type de réalisation', labelEn: 'Project Type', value: 'Modèle Démo' },
        { labelFr: 'Cohérence', labelEn: 'Consistency', value: 'Omnicanale' },
        { labelFr: 'Finition', labelEn: 'Standard', value: 'Premium' }
      ],
      tags: ['Communication', 'Image de Marque', 'Plaquettes', 'Relations Pro']
    }
  ],

  whyChooseUs: [
    {
      titleFr: 'Entreprise Enregistrée & Transparente',
      titleEn: 'Registered & Transparent Enterprise',
      descFr: 'Immatriculée officiellement au RCCM sous le numéro RC/YAO/2024/A/843 à Yaoundé (Cameroun), nous offrons un cadre commercial fiable et vérifiable.',
      descEn: 'Officially registered under RCCM RC/YAO/2024/A/843 in Yaoundé (Cameroon), providing an auditable, dependable commercial framework.'
    },
    {
      titleFr: 'Polyvalence & Approche Multi-Disciplinaire',
      titleEn: 'Versatile Multi-Sector Capability',
      descFr: 'De la fourniture de matériels sportifs à la conduite de stratégies marketing digitales, nous répondons à vos besoins avec une rigueur constante.',
      descEn: 'From athletic equipment procurement to high-impact digital marketing, we serve diverse needs with unified rigor.'
    },
    {
      titleFr: 'Ancrage Local & Portée Globale',
      titleEn: 'Local Anchor & Global Standards',
      descFr: 'Basée à Yaoundé, ETS BESRG COMPANY comprend les réalités du marché camerounais tout en appliquant les standards d’exécution internationaux les plus exigeants.',
      descEn: 'Headquartered in Yaoundé, ETS BESRG COMPANY understands local market realities while applying exacting international standards.'
    },
    {
      titleFr: 'Intégrité Déontologique',
      titleEn: 'Strict Commercial Integrity',
      descFr: 'Zéro faux avis, zéro promesse irréaliste. Nous présentons clairement nos capacités, nos devis et nos engagements contractuels.',
      descEn: 'Zero synthetic reviews, zero inflated claims. We provide crystal-clear specifications, honest quotes, and reliable fulfillment.'
    },
    {
      titleFr: 'Méthodes & Outils Modernes',
      titleEn: 'Modern Frameworks & Tools',
      descFr: 'Notre savoir-faire commercial et numérique s’appuie sur des outils et méthodes de pointe pour valoriser l’image de votre organisation et sécuriser vos opérations.',
      descEn: 'Our commercial and digital craft leverages modern tools and frameworks to elevate your corporate image and secure fulfillment.'
    },
    {
      titleFr: 'Partenaire de Confiance Durable',
      titleEn: 'Long-Term Trusted Partner',
      descFr: 'Nous privilégions les relations d’affaires pérennes fondées sur la réactivité, le respect des délais et le sens du service.',
      descEn: 'We cultivate enduring business relationships built on agility, deadline respect, and committed service excellence.'
    }
  ],

  marketingLabFeatures: [
    {
      titleFr: 'Campagnes Publicitaires Meta & Google Ads',
      titleEn: 'Meta & Google Ads Campaign Management',
      descFr: 'Ciblage d’audience par intention d’achat à Yaoundé, au Cameroun et à l’international avec suivi rigoureux des dépenses.',
      descEn: 'Intent-based audience targeting across Yaoundé, Cameroon, and global markets with strict spend governance.'
    },
    {
      titleFr: 'Communication Digitale & Création de Contenus',
      titleEn: 'Digital Communication & Creative Assets',
      descFr: 'Visuels professionnels, rédaction de messages valorisants et scénarisation de contenus pour vos réseaux sociaux et supports.',
      descEn: 'Professional graphic assets, value-centric copywriting, and social media content creation.'
    },
    {
      titleFr: 'Optimisation de la Conversion (CRO) & Tunnels WhatsApp',
      titleEn: 'Conversion Rate Optimization & WhatsApp Funnels',
      descFr: 'Itinéraires fluides reliant vos publicités à vos équipes commerciales par WhatsApp Business ou formulaires de devis.',
      descEn: 'Frictionless customer journeys connecting advertising directly to sales desks via WhatsApp Business and quote forms.'
    },
    {
      titleFr: 'Référencement Sémantique & Visibilité Locale',
      titleEn: 'Semantic SEO & Local Cameroon Search',
      descFr: 'Optimisation pour les recherches géolocalisées à Yaoundé et valorisation de votre présence sur les moteurs de recherche.',
      descEn: 'Optimization for local search in Yaoundé and search engine authority building across Cameroon.'
    },
    {
      titleFr: 'Stratégie de Marque & Communication d’Entreprise',
      titleEn: 'Brand Strategy & Corporate Communications',
      descFr: 'Accompagnement dans la définition de votre identité de marque, discours institutionnel et supports de présentation.',
      descEn: 'Guidance in brand positioning, institutional storytelling, and presentation collaterals.'
    },
    {
      titleFr: 'Reporting Transparent & Mesure de la Performance',
      titleEn: 'Transparent Telemetry & ROI Reporting',
      descFr: 'Rapports d’analyse périodiques pour évaluer concrètement l’impact de chaque action marketing engagée.',
      descEn: 'Periodic performance audits to transparently measure the bottom-line impact of every marketing initiative.'
    }
  ]
};
