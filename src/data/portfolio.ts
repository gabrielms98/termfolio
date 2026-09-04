export interface Experience {
  company: string;
  title: string;
  begin: string;
  end: string;
  location: string;
  /** One-paragraph overview, used by the Projects window. */
  description: string;
  /** CV bullet points, used by the CV reader. */
  highlights: string[];
  stack: string[];
  color: string;
}

export interface ContactInfo {
  name: string;
  role: string;
  email: string;
  phone: string;
  web: string;
  linkedin: string;
  location: string;
}

export const contact: ContactInfo = {
  name: "Gabriel Martins",
  role: "Full Stack Software Engineer",
  email: "gabrielms.dev@gmail.com",
  phone: "+55 (31) 98323-8957",
  web: "gabrielms.dev",
  linkedin: "linkedin.com/in/gabrielms98",
  location: "Belo Horizonte, Brazil",
};

export const summary =
  "Full-stack software engineer with over 7 years building SaaS products end to end — Angular and React on the front, Python/Flask, NestJS and .NET on the back. Ships whole features independently: REST APIs, PostgreSQL schema design, async processing with Celery and SQS, Stripe subscription billing, RBAC and SSO, through to the interfaces on top of them. Founding engineer twice over, building entire product stacks — database, CI/CD, design system — for an LMS serving 500+ students daily and an insurtech SaaS sold to large US law firms.";

export const coreCompetencies = [
  "Angular (v8–22)",
  "Python / Flask",
  "React & NestJS",
  "C# / .NET",
  "REST APIs",
  "PostgreSQL & MySQL",
  "Stripe Subscriptions",
  "RBAC & SAML SSO",
  "Async Processing (Celery, SQS)",
  "Design Systems",
];

export const experiences: Experience[] = [
  {
    company: "Monument",
    title: "Full Stack Software Engineer",
    begin: "December 2025",
    end: "Present",
    location: "Remote US",
    description:
      "Building and maintaining product features across the stack, from the React frontend to NestJS/Node.js services on MySQL. Built the credit card surcharge feature that processes $1M USD a month, the manual lease generator that produces leases for 40k+ storage units monthly, and rebuilt the email template builder as a reusable standalone component. Own the RBAC system for the facility management tool.",
    highlights: [
      "Build and maintain product features across the stack, from the React frontend to NestJS/Node.js services on MySQL.",
      "Built the credit card surcharge feature that processes $1M USD a month, which took integrating the payment gateway APIs and reworking the backend's transactional logic.",
      "Built the manual lease generator that produces leases for 40k+ storage units monthly.",
      "Rebuilt the email template builder as a standalone component with recipient-aware variables that plugs into any part of the system, so admins no longer keep duplicate templates or recreate the same emails.",
      "Own the RBAC system covering the different user types and roles in the facility management tool.",
    ],
    stack: ["React", "Node.js", "NestJS", "MySQL"],
    color: "from-violet-600 to-indigo-900",
  },
  {
    company: "Kaizen Gaming (Betano)",
    title: "Full Stack Software Engineer",
    begin: "July 2024",
    end: "December 2025",
    location: "Remote Greece",
    description:
      "Migrated the frontend Angular application from v13 to v17, adopting signals and the new Signal Store. Built the live view of incoming bets, which handles 100 bets per second under heavy load, backed by .NET and a SignalR endpoint feeding a virtual-scroll viewer. Built the UI and high-performance backend dispatcher used to settle bet results manually.",
    highlights: [
      "Migrated the frontend Angular application from v13 to v17, adopting Angular signals and the new Signal Store.",
      "Built the live view of incoming bets, which handles 100 bets per second under heavy load: a .NET backend plus a SignalR endpoint that dispatches bulk messages to a virtual-scroll live viewer.",
      "Built the UI and the high-performance backend dispatcher used to settle bet results manually when a systemic error or failure hits.",
    ],
    stack: ["Angular", "C#/.NET Framework", "SignalR", "Azure"],
    color: "from-orange-500 to-red-900",
  },
  {
    company: "Lexyta",
    title: "Founding Full Stack Software Engineer",
    begin: "January 2024",
    end: "July 2024",
    location: "Remote US",
    description:
      "First software hire. Set up the company's entire engineering foundation: backend with auth, customer frontend, admin back office, database architecture, and CI/CD. Built a Stripe-based recurring payment system collecting monthly subscriptions from thousands of students, RBAC for students, professors and admins, and a shadcn/ui-equivalent design system on Angular CDK.",
    highlights: [
      "Set up the company's entire engineering foundation: backend application with auth, customer frontend, admin back office panel, database architecture, and CI/CDs.",
      "Built a Stripe-based recurring payment system that collects monthly subscriptions from thousands of students, plus dynamic assessment forms.",
      "Built the company's design system from scratch on Angular CDK — a shadcn/ui equivalent for Angular with reusable components.",
      "Implemented RBAC for both the internal back office and the main product, covering students, professors, and admin roles.",
    ],
    stack: ["Angular", "Flask", "PostgreSQL", "Docker", "GitHub Actions"],
    color: "from-cyan-500 to-blue-900",
  },
  {
    company: "Optimalex",
    title: "Full Stack Software Engineer",
    begin: "October 2021",
    end: "December 2023",
    location: "Remote US",
    description:
      "Led the full development cycle of the company's SaaS product, from proposal to deployment. Built the self-serve trial flow and the Stripe subscription billing system used by large US law firms, a unified customer hub with Okta-based SAML SSO, and a Google Drive-like document management system on S3 fed by an ML document-ingestion pipeline.",
    highlights: [
      "Led the full development cycle of the company's SaaS product, from project proposal to deployment.",
      "Built a self-serve trial flow that lets prospects test the product before committing, which lifted signup conversion, and the subscription/billing system the SaaS model runs on, including Stripe recurring payments collected from large US law firms.",
      "Built a unified customer hub (single login, subscription management, product access) that improved client satisfaction and renewal rates, and integrated Okta-based SAML SSO for enterprise access.",
      "Built a Google Drive-like document management system with S3 storage, permission roles, and viewing/downloading, fed by a document-ingestion pipeline for ML models running on a microservice and a FIFO queue.",
      "Turned prediction model output into graphs and readable information for users.",
    ],
    stack: [
      "Angular",
      "Flask",
      "PostgreSQL",
      "Stripe",
      "AWS (S3, SQS)",
      "Celery",
      "Docker",
      "GitHub Actions",
    ],
    color: "from-emerald-500 to-teal-900",
  },
  {
    company: "Self-employed",
    title: "Full Stack Developer (Freelance)",
    begin: "January 2021",
    end: "December 2023",
    location: "Brazil",
    description:
      "Delivered client web applications end to end alongside full-time roles. Engineered a compact e-commerce platform for Leroy Associados for insurance-plan sales and policy management with a Pagar.me payment gateway, and built the website for the 2021 XP Expert Conference with an animated, interactive event map.",
    highlights: [
      "Delivered client web applications end to end alongside full-time roles.",
      "Engineered a compact e-commerce platform for Leroy Associados for insurance-plan sales and policy management, with a Pagar.me payment gateway integration and a client-specific design language.",
      "Built the website for the 2021 XP Expert Conference, with an event overview and per-speech schedules on an animated, interactive event map.",
    ],
    stack: ["React", "Express", "Lottie"],
    color: "from-fuchsia-500 to-purple-900",
  },
  {
    company: "Quorum (Gov Predict)",
    title: "Web Support Engineer",
    begin: "April 2021",
    end: "September 2021",
    location: "Remote US",
    description:
      "Ranked #1 on the team for tickets solved by volume and quality. Started a CS portal that cut average ticket response times from 2-3 hours to 10-20 minutes, wrote a JS script that generated 50,000 signed PDFs, and built a Chrome extension embedding a lightweight code editor into the website creation tool.",
    highlights: [
      "Ranked #1 on the team for tickets solved by volume and quality.",
      "Started the implementation of a CS portal to automate repetitive tasks, which cut average ticket response times from 2-3 hours to 10-20 minutes and raised daily throughput from ~5 to 15-20 tickets.",
      "Wrote a codebase for common customer-related tasks and a JS script that generated 50,000 signed PDFs for manual delivery.",
      "Built a Chrome extension that embedded a lightweight code editor (basic LSP and syntax highlighting) to replace a plain textarea in the website creation tool.",
    ],
    stack: ["Laravel", "PHP", "PostgreSQL", "Vue", "JavaScript"],
    color: "from-rose-500 to-pink-900",
  },
  {
    company: "SYDLE",
    title: "Trainee Software Engineer",
    begin: "March 2020",
    end: "March 2021",
    location: "Remote Brazil",
    description:
      "Became the team's go-to frontend authority within a year. Built a virtual issuance system in Angular 8 for remote digital-certificate issuance over video conference, with document upload, OTP validation and biometric verification against government APIs, plus an e-commerce checkout flow on Cielo and back office UIs for Serasa eID.",
    highlights: [
      "Became the team's go-to frontend authority within a year of joining.",
      "Built a virtual issuance system (Angular 8) for remote digital-certificate issuance over video conference, with document upload, OTP validation, and phone-based biometric verification against government APIs, which kept clients issuing certificates through pandemic lockdowns.",
      "Built an e-commerce checkout flow for purchasing and scheduling certificate issuance, calling the Cielo provider's internal APIs for payment processing.",
      "Developed live version-controlled UI for customer authentication with government services, and back office UIs for Serasa eID.",
    ],
    stack: ["Angular", "Java", "ElasticSearch"],
    color: "from-amber-500 to-orange-900",
  },
  {
    company: "NOBUGS",
    title: "Developer",
    begin: "January 2017",
    end: "January 2019",
    location: "Brazil",
    description:
      "Built a Windows desktop app that lets small farmers manage their crops and expenses, used by 100+ farmers.",
    highlights: [
      "Built a Windows desktop app that lets small farmers manage their crops and expenses, used by 100+ farmers.",
    ],
    stack: ["Vue", "Electron", "SQLite"],
    color: "from-slate-500 to-slate-900",
  },
];

export const education = [
  "Computer Science — Universidade Federal de Minas Gerais (2020–2022)",
  "Computer Science — Universidade Federal de Viçosa (2017–2019)",
];

export const skills: Record<string, string> = {
  Backend:
    "Python / Flask, Node.js, NestJS, .NET / .NET MVC, C#, REST API, Celery, RBAC / Access Control, SAML SSO",
  Frontend:
    "Angular (v8–22), Angular CDK, Signal Store, RxJS, TypeScript, JavaScript, React, Vue.js, jQuery",
  Database: "PostgreSQL, MySQL, SQL",
  "Payments & SaaS":
    "Stripe subscriptions & recurring billing, self-serve trials, multi-tenant access control",
  DevOps: "AWS (S3, SQS), Docker, GitHub Actions, CI/CD, Nginx, Azure",
  Design: "Figma, design systems",
};

export const languages: Record<string, string> = {
  English: "Full professional",
  Portuguese: "Native",
};
