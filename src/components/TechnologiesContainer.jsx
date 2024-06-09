import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiAndroid,
  DiReact,
  DiIonic,
  DiGit,
  DiAngularSimple,
  DiScrum,
  DiNpm,
  DiJira,
  DiSass,
  DiJava,
  DiGithub,
  DiSwift,
} from "react-icons/di";

import "../styles/components/technologiescontainer.sass";

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "java", name: "Java", icon: <DiJava /> },
  { id: "angular", name: "Angular", icon: <DiAngularSimple /> },
  { id: "react", name: "React", icon: <DiReact /> },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
  { id: "ionic", name: "Ionic", icon: <DiIonic /> },
  { id: "android", name: "Android", icon: <DiAndroid /> },
  { id: "swift", name: "Swift", icon: <DiSwift /> },
  { id: "sass", name: "Sass", icon: <DiSass /> },
  { id: "git", name: "Git", icon: <DiGit /> },
  { id: "github", name: "GitHub", icon: <DiGithub /> },
  { id: "npm", name: "Npm", icon: <DiNpm /> },
  { id: "scrum", name: "Scrum", icon: <DiScrum /> },
  { id: "jira", name: "Jira", icon: <DiJira /> },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
