import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

const cv = {
  name: "Gabriel Martins",
  contact:
    "Belo Horizonte, Brazil | gabrielms.dev@gmail.com | linkedin.com/in/gabrielms98",
  summary:
    "A dedicated software engineer with over 6 years of experience specializing in SaaS product development. Demonstrates a strong passion for Frontend development, with expertise in Angular, Flask, and React. Skilled in full-stack engineering, including Backend, Frontend, Database, and DevOps, with a proven ability to work independently and deliver solutions across diverse environments.",
  experience: [
    {
      title: "Full Stack Software Engineer",
      company: "Monument",
      period: "12/2025 – Present",
      description:
        "Working as a full-stack software engineer building and maintaining product features across the stack. Implemented a full manual lease generator system end-to-end. Refactored the email template builder system improving maintainability and scalability. Stack: React, NestJS, MySQL.",
    },
    {
      title: "Fullstack Software Engineer",
      company: "Kaizen Gaming (Betano)",
      period: "07/2024 – 12/2025",
      description:
        "Migrated codebase to Angular 17 and the new Signal Store. Implemented the live view of incoming bets into the system, capable of handling 100 bets per second under heavy load. Developed a new UI system for managing bet results manually.",
    },
    {
      title: "Founder & Full Stack Engineer",
      company: "Lexyta",
      period: "01/2024 – 07/2024",
      description:
        "Implemented all the engineering foundation for the company, including backend with auth, customer frontend, admin back office, database architecture, and CI/CDs. Built the shadcn/ui equivalent for Angular as the company's design system.",
    },
    {
      title: "Full Stack Software Engineer",
      company: "Optimalex",
      period: "10/2021 – 12/2023",
      description:
        "Led the full development cycle, from project proposal to deployment. Implemented end-to-end solutions including integration with prediction models to transform results into graphs and user-friendly information.",
    },
    {
      title: "Web Support Engineer",
      company: "Quorum",
      period: "04/2021 – 09/2021",
      description:
        "Started the implementation of a CS portal to automate repetitive tasks. Developed a JS script to generate 50,000 signed PDFs for manual delivery.",
    },
    {
      title: "Trainee Software Engineer",
      company: "SYDLE",
      period: "03/2020 – 03/2021",
      description:
        "Developed live version-controlled UI for customer authentication with government services using Angular 8. Created back office UIs for Serasa eID.",
    },
    {
      title: "Developer",
      company: "NOBUGS",
      period: "01/2017 – 01/2019",
      description:
        "Developed a Windows desktop app for small farmers to manage their crops using Vue 2, Electron, and SQLite.",
    },
  ],
  education: [
    "Computer Science — Universidade Federal de Minas Gerais (2020–2022)",
    "Computer Science — Universidade Federal de Viçosa (2017–2019)",
  ],
  skills: {
    Frontend: "Angular, React, TypeScript",
    Backend: "NestJS, Flask",
    Database: "PostgreSQL, MySQL",
    DevOps: "AWS, GitHub Actions, Nginx",
  },
};

function CVPage() {
  return (
    <div
      style={{
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        color: "#1a1a1a",
        fontSize: "11px",
        lineHeight: 1.5,
        padding: "2rem 2.5rem",
        background: "white",
        minHeight: "100%",
      }}
    >
      <h1 style={{ fontSize: "20px", margin: 0 }}>{cv.name}</h1>
      <p style={{ color: "#666", margin: "4px 0 12px", fontSize: "10px" }}>
        {cv.contact}
      </p>

      <p style={{ marginBottom: "14px" }}>{cv.summary}</p>

      <h2
        style={{
          fontSize: "12px",
          textTransform: "uppercase",
          letterSpacing: "1px",
          borderBottom: "1px solid #ddd",
          paddingBottom: "3px",
          marginBottom: "8px",
        }}
      >
        Experience
      </h2>
      {cv.experience.map((job, i) => (
        <div key={i} style={{ marginBottom: "10px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
            }}
          >
            <strong>
              {job.title} — {job.company}
            </strong>
            <span style={{ color: "#666", fontSize: "10px", flexShrink: 0 }}>
              {job.period}
            </span>
          </div>
          <p style={{ margin: "2px 0 0", color: "#333" }}>{job.description}</p>
        </div>
      ))}

      <h2
        style={{
          fontSize: "12px",
          textTransform: "uppercase",
          letterSpacing: "1px",
          borderBottom: "1px solid #ddd",
          paddingBottom: "3px",
          marginBottom: "8px",
          marginTop: "14px",
        }}
      >
        Education
      </h2>
      {cv.education.map((edu, i) => (
        <p key={i} style={{ margin: "2px 0" }}>
          {edu}
        </p>
      ))}

      <h2
        style={{
          fontSize: "12px",
          textTransform: "uppercase",
          letterSpacing: "1px",
          borderBottom: "1px solid #ddd",
          paddingBottom: "3px",
          marginBottom: "8px",
          marginTop: "14px",
        }}
      >
        Skills
      </h2>
      {Object.entries(cv.skills).map(([category, items]) => (
        <p key={category} style={{ margin: "2px 0" }}>
          <strong>{category}:</strong> {items}
        </p>
      ))}
    </div>
  );
}

function handleDownload() {
  const printWindow = window.open("", "_blank");
  if (!printWindow) return;
  printWindow.document.write(`<!DOCTYPE html>
<html><head><title>Gabriel Martins - CV</title>
<style>
  body { font-family: 'Segoe UI', system-ui, sans-serif; color: #1a1a1a; font-size: 11px; line-height: 1.5; padding: 2rem 2.5rem; margin: 0; }
  h1 { font-size: 20px; margin: 0; }
  h2 { font-size: 12px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid #ddd; padding-bottom: 3px; margin: 14px 0 8px; }
  .contact { color: #666; margin: 4px 0 12px; font-size: 10px; }
  .job { margin-bottom: 10px; }
  .job-header { display: flex; justify-content: space-between; }
  .period { color: #666; font-size: 10px; }
  .desc { margin: 2px 0 0; color: #333; }
  @media print { body { padding: 0; } }
</style></head><body>
<h1>${cv.name}</h1>
<p class="contact">${cv.contact}</p>
<p>${cv.summary}</p>
<h2>Experience</h2>
${cv.experience
  .map(
    (j) => `<div class="job">
  <div class="job-header"><strong>${j.title} — ${j.company}</strong><span class="period">${j.period}</span></div>
  <p class="desc">${j.description}</p>
</div>`
  )
  .join("")}
<h2>Education</h2>
${cv.education.map((e) => `<p>${e}</p>`).join("")}
<h2>Skills</h2>
${Object.entries(cv.skills)
  .map(([k, v]) => `<p><strong>${k}:</strong> ${v}</p>`)
  .join("")}
</body></html>`);
  printWindow.document.close();
  printWindow.print();
}

function ReaderWindow({ appId = "READER_APP" }: { appId?: string }) {
  const { toggleApp } = useContext(AppContext);

  function handleButton(e: React.MouseEvent, action: () => void) {
    e.stopPropagation();
    action();
  }

  const close = () => toggleApp(appId, false);

  return (
    <div className="bg-[#2c2c2c] rounded-xl w-[36rem] max-h-[34rem] shadow-2xl shadow-black/50 overflow-hidden text-white flex flex-col">
      {/* Title bar */}
      <div className="window-controls flex items-center gap-[6px] px-3 py-2 bg-[#3a3a3a] border-b border-[#4a4a4a] shrink-0">
        <button
          type="button"
          className="window-btn w-[13px] h-[13px] rounded-full bg-[#ff5f56] flex items-center justify-center cursor-pointer border-0 p-0"
          onClick={(e) => handleButton(e, close)}
        >
          <span className="text-[9px] leading-[13px] font-bold text-black/50">
            ✕
          </span>
        </button>
        <button
          type="button"
          className="window-btn w-[13px] h-[13px] rounded-full bg-[#ffbd2e] flex items-center justify-center cursor-pointer border-0 p-0"
          onClick={(e) => handleButton(e, close)}
        >
          <span className="text-[10px] leading-[13px] font-bold text-black/50">
            −
          </span>
        </button>
        <button
          type="button"
          className="window-btn w-[13px] h-[13px] rounded-full bg-[#27c93f] flex items-center justify-center border-0 p-0"
        >
          <span className="text-[9px] leading-[13px] font-bold text-black/50">
            ⤢
          </span>
        </button>
        <span className="flex-1 text-center text-sm text-[#a2a2a2] pr-[57px]">
          Gabriel_Martins_CV.pdf
        </span>
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between px-4 py-1.5 bg-[#353535] border-b border-[#4a4a4a] shrink-0">
        <span className="text-xs text-[#a7a7a7]">1 page</span>
        <button
          type="button"
          className="flex items-center gap-1.5 bg-[#e74c3c] hover:bg-[#c0392b] text-white text-xs px-3 py-1 rounded cursor-pointer border-0 transition-colors"
          onClick={handleDownload}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download PDF
        </button>
      </div>

      {/* Document */}
      <div className="flex-1 overflow-y-auto bg-[#525659] p-4">
        <div className="bg-white rounded shadow-lg mx-auto max-w-[32rem]">
          <CVPage />
        </div>
      </div>
    </div>
  );
}

export default ReaderWindow;
