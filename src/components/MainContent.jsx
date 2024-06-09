import TechnologiesContainer from "./TechnologiesContainer";
import AboutContainer from "./AboutContainer";
import ProjectsContainer from "./ProjectsContainer";
import AboutExpirienceContainer from "./AboutExpirienceContainer";
import CertifcationContainer from "./CertifcationContainer";
import "../styles/components/maincontent.sass";

const MainContent = () => {
  return (
    <main id="main-content">
      <AboutContainer />
      <AboutExpirienceContainer />
      <ProjectsContainer />
      <CertifcationContainer />
      <TechnologiesContainer />
    </main>
  );
};

export default MainContent;
