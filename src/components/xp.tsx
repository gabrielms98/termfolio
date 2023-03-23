interface Experience {
  begin: string;
  end: string;
  company: string;
  location: string;
  title: string;
  stack: string[];
}

const experinces: Experience[] = [
  {
    begin: "October 2021",
    end: "Present",
    company: "Optimalex",
    location: "Remote US",
    title: "Full Stack Software Engineer",
    stack: [
      "Angular",
      "Flask",
      "Python",
      "Typescript",
      "PostgreSQL",
      "Docker",
      "AWS",
    ],
  },
  {
    begin: "April 2021",
    end: "October 2021",
    company: "Phone2Action",
    location: "Remote US",
    title: "Web Support Engineer",
    stack: ["PHP", "Vue2", "MySQL", "Laravel", "Javascript"],
  },
  {
    begin: "March 2020",
    end: "April 2021",
    company: "Sydle",
    location: "Remote Brazil",
    title: "Full Stack Software Engineer Trainee",
    stack: ["Javascript", "Angular", "TypeScript", "ElasticSearch"],
  },
];

function Experience() {
  return (
    <div>
      <p>
        <b>Experiences</b>
        <br></br>
        <span>3+ years building software for the industry</span>
      </p>

      <br></br>

      <ul>
        {experinces.map((experience) => (
          <li>
            <span>
              <b>
                {experience.title} @ {experience.company}
              </b>
            </span>

            <br></br>

            <span className="text-gray-700">
              {experience.begin} - {experience.end} | {experience.location}
            </span>

            <br></br>

            <span className="text-sm">
              {experience.stack.map((tool) => (
                <span>{tool} </span>
              ))}
            </span>
            <br></br>
            <br></br>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Experience;
