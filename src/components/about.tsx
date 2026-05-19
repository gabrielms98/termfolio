import { contact } from "../data/portfolio";

const info: [string, string][] = [
  ["Name", contact.name],
  ["Role", contact.role],
  ["Email", contact.email],
  ["Phone", contact.phone],
  ["Web", contact.web],
  ["LinkedIn", contact.linkedin],
];

export function getAboutLines(): JSX.Element[] {
  return [
    <p style={{ color: "#50fa7b", fontWeight: "bold" }}>gabriel@portfolio</p>,
    <p style={{ color: "#6272a4" }}>──────────────────</p>,
    ...info.map(([key, value]) => (
      <span>
        <span
          style={{
            color: "#8be9fd",
            fontWeight: "bold",
            display: "inline-block",
            minWidth: "6rem",
          }}
        >
          {key}
        </span>
        <span style={{ color: "#f8f8f2" }}>{value}</span>
      </span>
    )),
  ];
}
