import { useContext, useState } from "react";
import { AppContext } from "../contexts/AppContext";

interface Project {
  company: string;
  role: string;
  description: string;
  stack: string[];
  color: string;
  image?: string;
}

const projects: Project[] = [
  {
    company: "Monument",
    role: "Full Stack Software Engineer",
    description:
      "Built a full manual lease generator system end-to-end. Refactored the email template builder improving maintainability and scalability.",
    stack: ["React", "NestJS", "MySQL"],
    color: "from-violet-600 to-indigo-900",
  },
  {
    company: "Betano",
    role: "Fullstack Software Engineer",
    description:
      "Implemented a live view of incoming bets handling 100 bets/sec under heavy load. Built a UI system for managing bet results manually.",
    stack: ["Angular", "TypeScript", "C#", ".NET"],
    color: "from-orange-500 to-red-900",
  },
  {
    company: "Lexyta",
    role: "Founder & Engineer",
    description:
      "Implemented all engineering from scratch: auth, frontend, back office, DB architecture, CI/CD. Built a shadcn/ui equivalent for Angular as the design system.",
    stack: ["Angular", "Stripe", "Angular CDK"],
    color: "from-cyan-500 to-blue-900",
  },
  {
    company: "Optimalex",
    role: "Full Stack Software Engineer",
    description:
      "Led the full development cycle from proposal to deployment. Integrated prediction models and transformed results into graphs and user-friendly dashboards.",
    stack: ["Angular", "Flask", "PostgreSQL", "AWS"],
    color: "from-emerald-500 to-teal-900",
  },
  {
    company: "Quorum",
    role: "Web Support Engineer",
    description:
      "Started a CS portal to automate repetitive tasks. Built a JS script to generate 50,000 signed PDFs for manual delivery.",
    stack: ["PHP", "Vue 2", "MySQL", "Laravel"],
    color: "from-rose-500 to-pink-900",
  },
  {
    company: "SYDLE",
    role: "Trainee Software Engineer",
    description:
      "Developed live version-controlled UI for customer authentication with government services. Created back office UIs for Serasa eID.",
    stack: ["Angular", "TypeScript", "ElasticSearch"],
    color: "from-amber-500 to-orange-900",
  },
];

function PhotosWindow({ appId = "PHOTOS_APP" }: { appId?: string }) {
  const { toggleApp } = useContext(AppContext);
  const [selected, setSelected] = useState<number | null>(null);

  function handleButton(e: React.MouseEvent, action: () => void) {
    e.stopPropagation();
    action();
  }

  const close = () => toggleApp(appId, false);

  return (
    <div className="bg-[#1c1c1e] rounded-xl w-[38rem] max-h-[32rem] shadow-2xl shadow-black/50 overflow-hidden text-white flex flex-col">
      {/* Title bar */}
      <div className="window-controls flex items-center gap-[6px] px-3 py-2 bg-[#2a2a2a] border-b border-[#3a3a3a] shrink-0">
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
          {selected !== null ? projects[selected].company : "Projects"}
        </span>
      </div>

      {selected === null ? (
        /* Grid view */
        <div className="overflow-y-auto p-4">
          <p className="text-xs uppercase tracking-wider text-[#a7a7a7] mb-3 px-1">
            {projects.length} Projects
          </p>
          <div className="grid grid-cols-3 gap-3">
            {projects.map((project, i) => (
              <button
                key={i}
                type="button"
                className="group text-left border-0 p-0 cursor-pointer bg-transparent"
                onClick={() => setSelected(i)}
              >
                <div
                  className={`bg-gradient-to-br ${project.color} aspect-[4/3] rounded-lg flex items-center justify-center overflow-hidden group-hover:ring-2 ring-white/40 transition-all`}
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.company}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-white/30 text-3xl font-bold">
                      {project.company.charAt(0)}
                    </span>
                  )}
                </div>
                <p className="text-xs text-white/80 mt-1.5 truncate">
                  {project.company}
                </p>
                <p className="text-[10px] text-[#a7a7a7] truncate">
                  {project.role}
                </p>
              </button>
            ))}
          </div>
        </div>
      ) : (
        /* Detail view */
        <div className="overflow-y-auto">
          <div
            className={`bg-gradient-to-br ${projects[selected].color} aspect-[16/9] flex items-center justify-center`}
          >
            {projects[selected].image ? (
              <img
                src={projects[selected].image}
                alt={projects[selected].company}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-center">
                <span className="text-white/20 text-6xl font-bold">
                  {projects[selected].company.charAt(0)}
                </span>
                <p className="text-white/30 text-xs mt-2">
                  Drop screenshot in src/assets/
                </p>
              </div>
            )}
          </div>

          <div className="p-4 space-y-3">
            <div>
              <h2 className="text-lg font-bold">
                {projects[selected].company}
              </h2>
              <p className="text-sm text-[#a7a7a7]">
                {projects[selected].role}
              </p>
            </div>

            <p className="text-sm text-white/70 leading-relaxed">
              {projects[selected].description}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {projects[selected].stack.map((tech, j) => (
                <span
                  key={j}
                  className="px-2 py-0.5 rounded text-xs bg-white/10 text-white/60"
                >
                  {tech}
                </span>
              ))}
            </div>

            <button
              type="button"
              className="text-sm text-[#0a84ff] hover:underline cursor-pointer bg-transparent border-0 p-0"
              onClick={() => setSelected(null)}
            >
              ← Back to all projects
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PhotosWindow;
