import { experiences } from "../data/portfolio";

export function getExperienceLines(): JSX.Element[] {
  return [
    <p>
      <b style={{ color: "#f8f8f2" }}>Experiences</b>
      <br />
      <span style={{ color: "#6272a4" }}>
        6+ years building software for the industry
      </span>
    </p>,
    ...experiences.map((experience) => (
      <div>
        <span>
          <b style={{ color: "#f8f8f2" }}>{experience.title}</b>
          <span style={{ color: "#6272a4" }}> @ </span>
          <b style={{ color: "#8be9fd" }}>{experience.company}</b>
        </span>
        <br />
        <span style={{ color: "#6272a4", fontSize: "0.875rem" }}>
          {experience.begin} – {experience.end} | {experience.location}
        </span>
        <br />
        <span>
          {experience.stack.map((tool, j) => (
            <span
              key={j}
              style={{
                display: "inline-block",
                padding: "1px 8px",
                marginRight: "4px",
                marginTop: "4px",
                borderRadius: "4px",
                fontSize: "0.75rem",
                backgroundColor: "rgba(98, 114, 164, 0.3)",
                color: "#bd93f9",
              }}
            >
              {tool}
            </span>
          ))}
        </span>
      </div>
    )),
  ];
}
