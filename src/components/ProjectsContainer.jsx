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
        No âmbito do convênio, destaco as seguintes entregas relacionadas às expectativas:
      </p>
      <br />
      <div>
        <ol>
          <li>
            <strong>Aplicativo Cooplem: <a href="https://play.google.com/store/apps/details?id=br.com.cooplem.app&pcampaignid=web_share" target="_blank">Cooplem Idiomas</a></strong>
            <ul>
              <li>Desenvolvimento de um aplicativo (IONIC) proporcionando uma interação simplificada entre alunos e a Cooplem.</li>
              <li>Facilitação do acesso a informações cruciais do aluno, incluindo notas, frequências e diários de bordo.</li>
              <li>Implementação de funcionalidades para acesso conveniente a faturas e boletos, com a opção de agrupamento quando necessário.</li>
              <li>Participação integral em todas as fases do ciclo de desenvolvimento e implantação, garantindo um produto alinhado às necessidades da Cooplem.</li>
            </ul>
          </li>
          <br />
          <li>
            <strong>Customização e Implantação do IzzyERP: <a href="https://play.google.com/store/apps/details?id=com.izzyerp.app&pcampaignid=web_share" target="_blank">IzzyERP</a></strong>
            <ul>
              <li>Realização de customizações específicas para o IzzyERP, uma solução completa de gestão empresarial para diversos setores.</li>
              <li>Aplicação de conhecimentos técnicos em softwares (IONIC) para aprimorar a integração e funcionalidades do IzzyERP.</li>
              <li>Participação ativa e direta em todas as etapas do ciclo de desenvolvimento e implantação, assegurando uma integração suave e eficaz dessa solução de gestão.</li>
            </ul>
          </li>
        </ol>
      </div>
      <br />
      <p>
        Essas entregas não apenas atendem às expectativas do convênio, mas também refletem a capacidade de atuar em diferentes frentes, 
        desde o desenvolvimento de aplicativos até a personalização e implementação de soluções empresariais, 
        evidenciando um comprometimento integral em todas as fases dos projetos.
      </p>    
    </section>
  );
};

export default ProjectsContainer;
