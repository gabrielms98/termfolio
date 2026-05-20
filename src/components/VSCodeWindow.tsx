import { useState, useMemo } from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import vsDark from "prism-react-renderer/themes/vsDark";
import WindowFrame from "./WindowFrame";

const sourceFiles = import.meta.glob(
  ["/src/**/*.{ts,tsx,css}", "/index.html", "/package.json", "/tsconfig.json", "/tailwind.config.js", "/vite.config.ts"],
  { query: "?raw", import: "default", eager: true }
) as Record<string, string>;

interface TreeNode {
  name: string;
  path: string;
  children?: TreeNode[];
}

function buildTree(paths: string[]): TreeNode[] {
  const root: TreeNode = { name: "", path: "", children: [] };

  for (const fullPath of paths) {
    const parts = fullPath.replace(/^\//, "").split("/");
    let current = root;
    let accumulated = "";

    for (let i = 0; i < parts.length; i++) {
      accumulated += (i === 0 ? "" : "/") + parts[i];
      const isFile = i === parts.length - 1;

      if (!current.children) current.children = [];
      let existing = current.children.find((c) => c.name === parts[i]);
      if (!existing) {
        existing = {
          name: parts[i],
          path: "/" + accumulated,
          ...(isFile ? {} : { children: [] }),
        };
        current.children.push(existing);
      }
      current = existing;
    }
  }

  sortTree(root.children!);
  return root.children!;
}

function sortTree(nodes: TreeNode[]) {
  nodes.sort((a, b) => {
    if (a.children && !b.children) return -1;
    if (!a.children && b.children) return 1;
    return a.name.localeCompare(b.name);
  });
  for (const n of nodes) {
    if (n.children) sortTree(n.children);
  }
}

function getLanguage(name: string): Language {
  if (name.endsWith(".tsx")) return "tsx";
  if (name.endsWith(".ts")) return "typescript";
  if (name.endsWith(".css")) return "css";
  if (name.endsWith(".html")) return "markup";
  if (name.endsWith(".json")) return "json";
  if (name.endsWith(".js") || name.endsWith(".cjs")) return "javascript";
  return "typescript";
}

function getFileIcon(name: string): { icon: string; color: string } {
  if (name.endsWith(".tsx")) return { icon: "⚛", color: "#61dafb" };
  if (name.endsWith(".ts")) return { icon: "TS", color: "#3178c6" };
  if (name.endsWith(".css")) return { icon: "#", color: "#563d7c" };
  if (name.endsWith(".html")) return { icon: "<>", color: "#e44d26" };
  if (name.endsWith(".json")) return { icon: "{}", color: "#cbcb41" };
  if (name.endsWith(".js")) return { icon: "JS", color: "#f7df1e" };
  return { icon: "F", color: "#999" };
}

function FileTreeItem({
  node,
  depth,
  activeFile,
  onSelect,
}: {
  node: TreeNode;
  depth: number;
  activeFile: string;
  onSelect: (path: string) => void;
}) {
  const [expanded, setExpanded] = useState(depth < 2);
  const isFolder = !!node.children;
  const isActive = node.path === activeFile;

  if (isFolder) {
    return (
      <>
        <button
          type="button"
          className={`w-full flex items-center gap-1 px-1 py-[2px] text-left border-0 cursor-pointer text-[13px] hover:bg-[#2a2d2e] bg-transparent text-[#cccccc]`}
          style={{ paddingLeft: `${depth * 12 + 4}px` }}
          onClick={() => setExpanded(!expanded)}
        >
          <span className="text-[10px] w-3 text-center shrink-0 text-[#c5c5c5]">
            {expanded ? "▾" : "▸"}
          </span>
          <span className="text-[12px] shrink-0">{"📁"}</span>
          <span className="truncate">{node.name}</span>
        </button>
        {expanded &&
          node.children!.map((child) => (
            <FileTreeItem
              key={child.path}
              node={child}
              depth={depth + 1}
              activeFile={activeFile}
              onSelect={onSelect}
            />
          ))}
      </>
    );
  }

  const { icon, color } = getFileIcon(node.name);
  return (
    <button
      type="button"
      className={`w-full flex items-center gap-1 px-1 py-[2px] text-left border-0 cursor-pointer text-[13px] ${
        isActive ? "bg-[#094771] text-white" : "bg-transparent text-[#cccccc] hover:bg-[#2a2d2e]"
      }`}
      style={{ paddingLeft: `${depth * 12 + 4}px` }}
      onClick={() => onSelect(node.path)}
    >
      <span className="w-3 shrink-0" />
      <span
        className="text-[10px] shrink-0 font-bold w-4 text-center"
        style={{ color }}
      >
        {icon}
      </span>
      <span className="truncate">{node.name}</span>
    </button>
  );
}

const editorFont = "'Fira Code', 'Cascadia Code', Consolas, monospace";

function VSCodeWindow({ appId = "VSCODE_APP" }: { appId?: string }) {
  const paths = Object.keys(sourceFiles).sort();
  const tree = useMemo(() => buildTree(paths), []);
  const [activeFile, setActiveFile] = useState(paths.find((p) => p.endsWith("App.tsx")) ?? paths[0]);

  const content = (sourceFiles[activeFile] ?? "").trimEnd();
  const lineCount = content.split("\n").length;
  const fileName = activeFile.split("/").pop() ?? "";
  const language = getLanguage(fileName);
  const { icon, color } = getFileIcon(fileName);

  return (
    <WindowFrame
      appId={appId}
      title={`${fileName} — termfolio`}
      className="bg-[#1e1e1e] rounded-xl w-[52rem] h-[34rem] shadow-2xl shadow-black/50 overflow-hidden text-white flex flex-col"
      headerClassName="bg-[#323233] border-b border-[#252526]"
    >
      {/* Tab bar */}
      <div className="flex items-center bg-[#252526] border-b border-[#1e1e1e] shrink-0">
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#1e1e1e] border-r border-[#252526] text-[13px]">
          <span className="text-[10px] font-bold" style={{ color }}>
            {icon}
          </span>
          <span className="text-[#cccccc]">{fileName}</span>
        </div>
      </div>

      <div className="flex flex-1 min-h-0">
        {/* Activity bar */}
        <div className="w-12 bg-[#333333] flex flex-col items-center py-2 gap-3 shrink-0 border-r border-[#252526]">
          <button
            type="button"
            className="w-8 h-8 flex items-center justify-center rounded bg-transparent border-0 cursor-default"
            title="Explorer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#cccccc" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 3h7l2 2h9v14H3z" />
            </svg>
          </button>
          <button
            type="button"
            className="w-8 h-8 flex items-center justify-center rounded bg-transparent border-0 cursor-default"
            title="Search"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#858585" strokeWidth="1.5" strokeLinecap="round">
              <circle cx="10" cy="10" r="7" />
              <line x1="15" y1="15" x2="21" y2="21" />
            </svg>
          </button>
          <button
            type="button"
            className="w-8 h-8 flex items-center justify-center rounded bg-transparent border-0 cursor-default"
            title="Source Control"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#858585" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="5" r="2.5" />
              <circle cx="12" cy="19" r="2.5" />
              <line x1="12" y1="7.5" x2="12" y2="16.5" />
            </svg>
          </button>
        </div>

        {/* Sidebar */}
        <div className="w-52 bg-[#252526] border-r border-[#1e1e1e] flex flex-col shrink-0 overflow-hidden">
          <p className="text-[11px] uppercase tracking-wider text-[#bbbbbb] px-4 py-2 font-semibold shrink-0">
            Explorer
          </p>
          <p className="text-[11px] uppercase tracking-wider text-[#cccccc] px-3 py-1 font-semibold shrink-0">
            {"▾"} termfolio
          </p>
          <div className="overflow-y-auto flex-1 pb-2">
            {tree.map((node) => (
              <FileTreeItem
                key={node.path}
                node={node}
                depth={0}
                activeFile={activeFile}
                onSelect={setActiveFile}
              />
            ))}
          </div>
        </div>

        {/* Editor */}
        <div className="flex-1 overflow-auto min-w-0 bg-[#1e1e1e]">
          <Highlight {...defaultProps} theme={vsDark} code={content} language={language}>
            {({ tokens, getLineProps, getTokenProps }) => (
              <pre className="m-0 p-0 bg-transparent text-[13px] leading-[20px]" style={{ fontFamily: editorFont }}>
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line, key: i })} className="flex hover:bg-[#2a2d2e]" style={{ background: undefined }}>
                    <span className="text-right pr-4 pl-4 select-none text-[#858585] shrink-0" style={{ minWidth: "3.5rem" }}>
                      {i + 1}
                    </span>
                    <span className="pr-4 whitespace-pre">
                      {line.map((token, j) => (
                        <span key={j} {...getTokenProps({ token, key: j })} />
                      ))}
                    </span>
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </div>
      </div>

      {/* Status bar */}
      <div className="flex items-center justify-between px-3 py-[2px] bg-[#007acc] text-white text-[12px] shrink-0">
        <div className="flex items-center gap-3">
          <span>main</span>
          <span>0 errors</span>
        </div>
        <div className="flex items-center gap-3">
          <span>Ln {lineCount}, Col 1</span>
          <span>UTF-8</span>
          <span>TypeScript React</span>
        </div>
      </div>
    </WindowFrame>
  );
}

export default VSCodeWindow;
