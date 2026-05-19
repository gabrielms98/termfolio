import { contact, summary, experiences, education, skills } from "../data/portfolio";
import WindowFrame from "./WindowFrame";

const cv = {
  name: contact.name,
  contact: `${contact.location} | ${contact.email} | ${contact.linkedin}`,
  summary,
  experience: experiences.map((xp) => ({
    title: xp.title,
    company: xp.company,
    period: `${xp.begin} – ${xp.end}`,
    description: xp.description,
  })),
  education,
  skills,
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
<html><head><title>${cv.name} - CV</title>
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
  return (
    <WindowFrame
      appId={appId}
      title="Gabriel_Martins_CV.pdf"
      className="bg-[#2c2c2c] rounded-xl w-[36rem] max-h-[34rem] shadow-2xl shadow-black/50 overflow-hidden text-white flex flex-col"
      headerClassName="bg-[#3a3a3a] border-b border-[#4a4a4a]"
    >
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
    </WindowFrame>
  );
}

export default ReaderWindow;
