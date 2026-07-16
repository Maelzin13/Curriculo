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
import {
  SiTypescript,
  SiAmazonaws,
  SiSpringboot,
  SiFigma,
  SiPython,
  SiVuedotjs,
} from "react-icons/si";

import "../styles/components/technologiescontainer.sass";

const technologyCategories = [
  {
    id: "linguagens",
    title: "Linguagens & Frameworks",
    items: [
      { id: "html", name: "HTML5", icon: <DiHtml5 /> },
      { id: "css", name: "CSS3", icon: <DiCss3 /> },
      { id: "js", name: "JavaScript", icon: <DiJavascript /> },
      { id: "typescript", name: "TypeScript", icon: <SiTypescript /> },
      { id: "java", name: "Java", icon: <DiJava /> },
      { id: "springboot", name: "Spring Boot", icon: <SiSpringboot /> },
      { id: "python", name: "Python", icon: <SiPython /> },
      { id: "angular", name: "Angular", icon: <DiAngularSimple /> },
      { id: "react", name: "React", icon: <DiReact /> },
      { id: "vuejs", name: "Vue.js", icon: <SiVuedotjs /> },
      { id: "node", name: "Node.js", icon: <DiNodejs /> },
      { id: "ionic", name: "Ionic", icon: <DiIonic /> },
      { id: "android", name: "Android", icon: <DiAndroid /> },
      { id: "sass", name: "Sass", icon: <DiSass /> },
      { id: "bootstrap", name: "Bootstrap", icon: <DiBootstrap /> },
      { id: "laravel", name: "Laravel", icon: <DiLaravel /> },
      { id: "php", name: "Php ", icon: <DiPhp /> },
      { id: "responsive", name: "Responsive", icon: <DiResponsive /> },
    ],
  },
  {
    id: "arquitetura",
    title: "Arquitetura & Infraestrutura",
    items: [
      { id: "database", name: "Database", icon: <DiDatabase /> },
      { id: "docker", name: "Docker", icon: <DiDocker /> },
      { id: "aws", name: "AWS", icon: <SiAmazonaws /> },
      { id: "firebase", name: "Firebase", icon: <DiFirebase /> },
      { id: "mongodb", name: "Mongodb ", icon: <DiMongodb /> },
      { id: "mysql", name: "Mysql", icon: <DiMysql /> },
      { id: "nginx", name: "Nginx", icon: <DiNginx /> },
      { id: "postgresql", name: "Postgresql", icon: <DiPostgresql /> },
      { id: "redis", name: "Redis", icon: <DiRedis /> },
      { id: "sqllite", name: "Sqllite", icon: <DiSqllite /> },
    ],
  },
  {
    id: "metodologia",
    title: "Metodologia & Ferramentas",
    items: [
      { id: "git", name: "Git", icon: <DiGit /> },
      { id: "github", name: "GitHub", icon: <DiGithubBadge /> },
      { id: "scrum", name: "Scrum", icon: <DiScrum /> },
      { id: "jira", name: "Jira", icon: <DiJira /> },
      { id: "figma", name: "Figma", icon: <SiFigma /> },
      { id: "jenkins", name: "Jenkins", icon: <DiJenkins /> },
      { id: "composer", name: "Composer", icon: <DiComposer /> },
      { id: "eclipse", name: "Eclipse", icon: <DiEclipse /> },
    ],
  },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      {technologyCategories.map((category) => (
        <div className="technology-category" key={category.id}>
          <h3 className="technology-category-title">{category.title}</h3>
          <div className="technologies-grid">
            {category.items.map((tech) => (
              <div className="technology-card" id={tech.id} key={tech.id}>
                {tech.icon}
                <div className="technology-info">
                  <h4>{tech.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default TechnologiesContainer;
