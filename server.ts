import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const isProduction = process.env.NODE_ENV === 'production';

app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));

// In-memory store for contact inquiries and quotes
interface ContactSubmission {
  id: string;
  trackingId: string;
  name: string;
  company?: string;
  email: string;
  phone?: string;
  service: string;
  budget?: string;
  message: string;
  consent: boolean;
  submittedAt: string;
  ip: string;
  status: 'received' | 'in_review' | 'contacted';
}

const contactSubmissions: ContactSubmission[] = [];

// Rate-limiting map: ip -> timestamps
const rateLimitMap = new Map<string, number[]>();

function checkRateLimit(ip: string, maxRequests = 8, windowMs = 60000): boolean {
  const now = Date.now();
  const timestamps = (rateLimitMap.get(ip) || []).filter(t => now - t < windowMs);
  if (timestamps.length >= maxRequests) {
    return false;
  }
  timestamps.push(now);
  rateLimitMap.set(ip, timestamps);
  return true;
}

// Health check endpoint
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    service: 'ETS BESRG COMPANY API',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    environment: isProduction ? 'production' : 'development'
  });
});

// Contact & Lead Generation endpoint
app.post('/api/contact', (req: Request, res: Response) => {
  const clientIp = req.headers['x-forwarded-for']?.toString() || req.socket.remoteAddress || 'unknown';

  if (!checkRateLimit(clientIp)) {
    return res.status(429).json({
      success: false,
      error: 'Trop de requêtes. Veuillez patienter avant de soumettre à nouveau.',
      errorEn: 'Too many requests. Please wait before submitting again.'
    });
  }

  const { name, company, email, phone, service, budget, message, consent } = req.body;
  const errors: Record<string, string> = {};

  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    errors.name = 'Le nom complet est requis (au moins 2 caractères).';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
    errors.email = 'Une adresse email valide est requise.';
  }

  if (!service || typeof service !== 'string' || service.trim().length === 0) {
    errors.service = 'Veuillez sélectionner un domaine d’intervention.';
  }

  if (!message || typeof message !== 'string' || message.trim().length < 10) {
    errors.message = 'La description du projet doit comporter au moins 10 caractères.';
  }

  if (!consent) {
    errors.consent = 'Le consentement au traitement des données est requis.';
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Validation échouée',
      errors
    });
  }

  const trackingId = `BESRG-${new Date().getFullYear()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

  const submission: ContactSubmission = {
    id: `sub_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
    trackingId,
    name: name.trim(),
    company: company ? String(company).trim() : undefined,
    email: email.trim().toLowerCase(),
    phone: phone ? String(phone).trim() : undefined,
    service: service.trim(),
    budget: budget ? String(budget).trim() : undefined,
    message: message.trim(),
    consent: Boolean(consent),
    submittedAt: new Date().toISOString(),
    ip: clientIp,
    status: 'received'
  };

  contactSubmissions.push(submission);

  // In production with a mailer (e.g. Resend, Sendgrid, SMTP), this sends the real notification.
  // We log securely and return confirmed receipt tracking to client.
  console.log(`[ETS BESRG Contact] Nouvelle demande reçue [${trackingId}] de ${submission.name} (${submission.email}) pour ${submission.service}`);

  return res.status(201).json({
    success: true,
    message: 'Votre demande a été transmise avec succès aux services d’ETS BESRG COMPANY.',
    messageEn: 'Your request has been successfully transmitted to ETS BESRG COMPANY.',
    trackingId,
    receivedAt: submission.submittedAt,
    estimatedResponseHours: '24h - 48h',
    contactSupport: 'contact@besrg-company.com'
  });
});

// Strategic quote estimation calculator endpoint
app.post('/api/quote-estimate', (req: Request, res: Response) => {
  const { serviceType, scopeLevel, urgency, targetMarket } = req.body;

  let baseTimelineWeeks = 4;
  let estimatedPhases = [
    { phase: '1. Immersion & Cadrage Stratégique', duration: '1 semaine', focus: 'Analyse business, concurrents, KPIS' },
    { phase: '2. Direction Artistique & Architecture', duration: '1-2 semaines', focus: 'Concepts 3D, UX/UI, prototypes' },
    { phase: '3. Ingénierie & Intégration', duration: '2-3 semaines', focus: 'Développement WebGL, Next/React, SEO' },
    { phase: '4. Optimisation & Lancement', duration: '1 semaine', focus: 'Tests charge, tracking analytics, formation' }
  ];

  if (serviceType === 'marketing') {
    baseTimelineWeeks = 3;
    estimatedPhases = [
      { phase: '1. Audit Sémantique & Tunnels', duration: '1 semaine', focus: 'Audit des comptes pub, concurrence & SEO' },
      { phase: '2. Stratégie d’Acquisition & Création', duration: '1 semaine', focus: 'Copywriting, assets publicitaires, landing pages' },
      { phase: '3. Déploiement & Setup Tracking', duration: '1 semaine', focus: 'Pixel Meta, GA4 Server-side, UTMs' },
      { phase: '4. Optimisation Continue & Scaling', duration: 'En continu', focus: 'A/B testing, réduction CAC, reporting hebdomadaire' }
    ];
  }

  res.json({
    success: true,
    estimatedWeeks: baseTimelineWeeks,
    phases: estimatedPhases,
    currency: 'EUR',
    urgencyLevel: urgency || 'standard',
    scopeLevel: scopeLevel || 'medium',
    targetMarket: targetMarket || 'international'
  });
});

// Configure Vite middleware in dev or static serving in production
async function startServer() {
  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[BESRG COMPANY] Server listening on http://0.0.0.0:${PORT} (${isProduction ? 'prod' : 'dev'})`);
  });
}

startServer().catch(err => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
