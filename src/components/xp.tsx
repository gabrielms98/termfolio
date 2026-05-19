interface Experience {
  begin: string;
  end: string;
  company: string;
  location: string;
  title: string;
  stack: string[];
}

const experiences: Experience[] = [
  {
    begin: "December 2025",
    end: "Present",
    company: "Monument",
    location: "Remote US",
    title: "Full Stack Software Engineer",
    stack: ["React", "NestJS", "MySQL", "TypeScript"],
  },
  {
    begin: "July 2024",
    end: "December 2025",
    company: "Kaizen Gaming (Betano)",
    location: "Remote Brazil",
    title: "Fullstack Software Engineer (Heavy FE)",
    stack: ["Angular", "TypeScript", "C#", ".NET"],
  },
  {
    begin: "January 2024",
    end: "July 2024",
    company: "Lexyta",
    location: "Remote US",
    title: "Founder Full Stack Software Engineer",
    stack: ["Angular", "TypeScript", "Stripe", "Angular CDK"],
  },
  {
    begin: "October 2021",
    end: "December 2023",
    company: "Optimalex",
    location: "Remote US",
    title: "Full Stack Software Engineer",
    stack: ["Angular", "Flask", "Python", "TypeScript", "PostgreSQL", "AWS"],
  },
  {
    begin: "April 2021",
    end: "September 2021",
    company: "Quorum",
    location: "Remote US",
    title: "Web Support Engineer",
    stack: ["PHP", "Vue 2", "MySQL", "Laravel", "JavaScript"],
  },
  {
    begin: "March 2020",
    end: "March 2021",
    company: "SYDLE",
    location: "Remote Brazil",
    title: "Trainee Software Engineer",
    stack: ["Angular", "TypeScript", "ElasticSearch"],
  },
  {
    begin: "January 2017",
    end: "January 2019",
    company: "NOBUGS",
    location: "Brazil",
    title: "Developer",
    stack: ["Vue 2", "Electron", "SQLite"],
  },
];

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
