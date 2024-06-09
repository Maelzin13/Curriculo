import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";
import Avatar from "../img/Mael.png";
import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Ismael dos Santos Dias" />
      <p className="nomeMael">Ismael dos Santos Dias</p>
      <p className="title">Desenvolvedor </p>
      <SocialNetworkContainer />
      <InformationContainer />
    </aside>
  );
};

export default Sidebar;
