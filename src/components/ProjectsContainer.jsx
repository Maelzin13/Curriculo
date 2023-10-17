import { useState } from "react";
import Projects from "./Projetos";

const ProjectsContainer = () => {
  const [showCurriculum, setShowCurriculum] = useState(false);

  const handleButtonClick = () => {
    setShowCurriculum(true);
  };

  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore at
        rem fugit provident dolorum exercitationem, ducimus quisquam ratione
        cumque reiciendis accusamus totam, veniam iusto numquam distinctio.
        Dignissimos labore aspernatur pariatur?
      </p>
      <button className="btn" onClick={handleButtonClick}>
        Ver Currículo
      </button>

      {showCurriculum && <Projects />}
    </section>
  );
};

export default ProjectsContainer;
