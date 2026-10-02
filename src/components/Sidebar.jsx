import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";
import Avatar from "../img/foto-linkedin.jpg";
import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Ismael dos Santos Dias" />
      <p className="nomeMael">Ismael dos Santos Dias</p>
      <p className="title">Desenvolvedor Full Stack Pleno</p>
      <SocialNetworkContainer />
      <InformationContainer />
    </aside>
  );
};

export default Sidebar;
