export interface Experience {
  company: string;
  title: string;
  begin: string;
  end: string;
  location: string;
  description: string;
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
  name: "Gabriel Martins Silva",
  role: "Software Engineer",
  email: "gabrielms.dev@gmail.com",
  phone: "+55 (31) 98323-8957",
  web: "gabrielms.dev",
  linkedin: "linkedin.com/in/gabrielms98",
  location: "Belo Horizonte, Brazil",
};

export const summary =
  "A dedicated software engineer with over 6 years of experience specializing in SaaS product development. Demonstrates a strong passion for Frontend development, with expertise in Angular, Flask, and React. Skilled in full-stack engineering, including Backend, Frontend, Database, and DevOps, with a proven ability to work independently and deliver solutions across diverse environments.";

export const experiences: Experience[] = [
  {
    company: "Monument",
    title: "Full Stack Software Engineer",
    begin: "December 2025",
    end: "Present",
    location: "Remote US",
    description:
      "Working as a full-stack software engineer building and maintaining product features across the stack. Implemented a full manual lease generator system end-to-end. Refactored the email template builder system improving maintainability and scalability.",
    stack: ["React", "NestJS", "MySQL", "TypeScript"],
    color: "from-violet-600 to-indigo-900",
  },
  {
    company: "Kaizen Gaming (Betano)",
    title: "Fullstack Software Engineer (Heavy FE)",
    begin: "July 2024",
    end: "December 2025",
    location: "Remote Brazil",
    description:
      "Migrated codebase to Angular 17 and the new Signal Store. Implemented the live view of incoming bets into the system, capable of handling 100 bets per second under heavy load. Developed a new UI system for managing bet results manually.",
    stack: ["Angular", "TypeScript", "C#", ".NET"],
    color: "from-orange-500 to-red-900",
  },
  {
    company: "Lexyta",
    title: "Founder Full Stack Software Engineer",
    begin: "January 2024",
    end: "July 2024",
    location: "Remote US",
    description:
      "Implemented all the engineering foundation for the company, including backend with auth, customer frontend, admin back office, database architecture, and CI/CDs. Built the shadcn/ui equivalent for Angular as the company's design system.",
    stack: ["Angular", "TypeScript", "Stripe", "Angular CDK"],
    color: "from-cyan-500 to-blue-900",
  },
  {
    company: "Optimalex",
    title: "Full Stack Software Engineer",
    begin: "October 2021",
    end: "December 2023",
    location: "Remote US",
    description:
      "Led the full development cycle, from project proposal to deployment. Implemented end-to-end solutions including integration with prediction models to transform results into graphs and user-friendly information.",
    stack: ["Angular", "Flask", "Python", "TypeScript", "PostgreSQL", "AWS"],
    color: "from-emerald-500 to-teal-900",
  },
  {
    company: "Quorum",
    title: "Web Support Engineer",
    begin: "April 2021",
    end: "September 2021",
    location: "Remote US",
    description:
      "Started the implementation of a CS portal to automate repetitive tasks. Developed a JS script to generate 50,000 signed PDFs for manual delivery.",
    stack: ["PHP", "Vue 2", "MySQL", "Laravel", "JavaScript"],
    color: "from-rose-500 to-pink-900",
  },
  {
    company: "SYDLE",
    title: "Trainee Software Engineer",
    begin: "March 2020",
    end: "March 2021",
    location: "Remote Brazil",
    description:
      "Developed live version-controlled UI for customer authentication with government services using Angular 8. Created back office UIs for Serasa eID.",
    stack: ["Angular", "TypeScript", "ElasticSearch"],
    color: "from-amber-500 to-orange-900",
  },
  {
    company: "NOBUGS",
    title: "Developer",
    begin: "January 2017",
    end: "January 2019",
    location: "Brazil",
    description:
      "Developed a Windows desktop app for small farmers to manage their crops using Vue 2, Electron, and SQLite.",
    stack: ["Vue 2", "Electron", "SQLite"],
    color: "from-slate-500 to-slate-900",
  },
];

export const education = [
  "Computer Science — Universidade Federal de Minas Gerais (2020–2022)",
  "Computer Science — Universidade Federal de Viçosa (2017–2019)",
];

export const skills: Record<string, string> = {
  Frontend: "Angular, React, TypeScript",
  Backend: "NestJS, Flask",
  Database: "PostgreSQL, MySQL",
  DevOps: "AWS, GitHub Actions, Nginx",
};
