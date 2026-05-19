import { useState } from "react";
import { experiences } from "../data/portfolio";
import WindowFrame from "./WindowFrame";

interface Project {
  company: string;
  role: string;
  description: string;
  stack: string[];
  color: string;
  image?: string;
}

const projects: Project[] = experiences
  .filter((xp) => xp.company !== "NOBUGS")
  .map((xp) => ({
    company: xp.company === "Kaizen Gaming (Betano)" ? "Betano" : xp.company,
    role: xp.title,
    description: xp.description,
    stack: xp.stack,
    color: xp.color,
  }));

function PhotosWindow({ appId = "PHOTOS_APP" }: { appId?: string }) {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <WindowFrame
      appId={appId}
      title={selected !== null ? projects[selected].company : "Projects"}
      className="bg-[#1c1c1e] rounded-xl w-[38rem] max-h-[32rem] shadow-2xl shadow-black/50 overflow-hidden text-white flex flex-col"
    >
      {selected === null ? (
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
    </WindowFrame>
  );
}

export default PhotosWindow;
