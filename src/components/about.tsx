const info: [string, string][] = [
  ["Name", "Gabriel Martins Silva"],
  ["Role", "Software Engineer"],
  ["Email", "gabrielms.dev@gmail.com"],
  ["Phone", "+55 (31) 98323-8957"],
  ["Web", "gabrielms.dev"],
  ["LinkedIn", "linkedin.com/in/gabrielms98"],
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
