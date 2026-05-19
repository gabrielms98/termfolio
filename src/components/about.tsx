function About() {
  const info: [string, string][] = [
    ["Name", "Gabriel Martins Silva"],
    ["Role", "Software Engineer"],
    ["Email", "gabrielms.dev@gmail.com"],
    ["Phone", "+55 (31) 98323-8957"],
    ["Web", "gabrielms.dev"],
    ["LinkedIn", "linkedin.com/in/gabrielms98"],
  ];

  return (
    <div>
      <p style={{ color: "#50fa7b", fontWeight: "bold" }}>
        gabriel@portfolio
      </p>
      <p style={{ color: "#6272a4" }}>──────────────────</p>
      <table style={{ borderCollapse: "collapse" }}>
        <tbody>
          {info.map(([key, value]) => (
            <tr key={key}>
              <td
                style={{
                  color: "#8be9fd",
                  paddingRight: "1rem",
                  whiteSpace: "nowrap",
                  fontWeight: "bold",
                }}
              >
                {key}
              </td>
              <td style={{ color: "#f8f8f2" }}>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default About;
