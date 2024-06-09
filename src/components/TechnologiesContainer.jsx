import {
  DiHtml5,
  DiCss3,
  DiAndroid,
  DiReact,
  DiIonic,
  DiGit,
  DiAngularSimple,
  DiScrum,
  DiJira,
  DiSass,
  DiJava,
  DiBootstrap,
  DiComposer,
  DiDatabase,
  DiDocker,
  DiEclipse,
  DiFirebase,
  DiGithubBadge,
  DiJavascript,
  DiJenkins,
  DiLaravel,
  DiMongodb,
  DiMysql,
  DiNginx,
  DiNodejs,
  DiPhp,
  DiPostgresql,
  DiRedis,
  DiResponsive,
  DiSqllite,
} from "react-icons/di";

import "../styles/components/technologiescontainer.sass";

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", icon: <DiJavascript /> },
  { id: "java", name: "Java", icon: <DiJava /> },
  { id: "angular", name: "Angular", icon: <DiAngularSimple /> },
  { id: "react", name: "React", icon: <DiReact /> },
  { id: "node", name: "Node.js", icon: <DiNodejs /> },
  { id: "ionic", name: "Ionic", icon: <DiIonic /> },
  { id: "android", name: "Android", icon: <DiAndroid /> },
  { id: "sass", name: "Sass", icon: <DiSass /> },
  { id: "git", name: "Git", icon: <DiGit /> },
  { id: "github", name: "GitHub", icon: <DiGithubBadge /> },
  { id: "scrum", name: "Scrum", icon: <DiScrum /> },
  { id: "jira", name: "Jira", icon: <DiJira /> },
  { id: "bootstrap", name: "Bootstrap", icon: <DiBootstrap /> },
  { id: "composer", name: "Composer", icon: <DiComposer /> },
  { id: "database", name: "Database", icon: <DiDatabase /> },
  { id: "docker", name: "Docker", icon: <DiDocker /> },
  { id: "eclipse", name: "Eclipse", icon: <DiEclipse /> },
  { id: "firebase", name: "Firebase", icon: <DiFirebase /> },
  { id: "jenkins", name: "Jenkins", icon: <DiJenkins /> },
  { id: "laravel", name: "Laravel", icon: <DiLaravel /> },
  { id: "mongodb", name: "Mongodb ", icon: <DiMongodb /> },
  { id: "mysql", name: "Mysql", icon: <DiMysql /> },
  { id: "nginx", name: "Nginx", icon: <DiNginx /> },
  { id: "php", name: "Php ", icon: <DiPhp /> },
  { id: "postgresql", name: "Postgresql", icon: <DiPostgresql /> },
  { id: "redis", name: "Redis", icon: <DiRedis /> },
  { id: "responsive", name: "Responsive", icon: <DiResponsive /> },
  { id: "sqllite", name: "Sqllite", icon: <DiSqllite /> },
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
