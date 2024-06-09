import React from "react";
import "../styles/components/projectsContainer.sass";

const ProjectsContainer = () => {
  return (
    <section className="projects-container">
      <h2>Principais Projetos</h2>
      <div className="experience">
        <ol>
          <li>
            <strong>
              Aplicativo{" "}
              <a
                href="https://play.google.com/store/apps/details?id=br.com.cooplem.app&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer">
                Cooplem Idiomas
              </a>
            </strong>
            <ul>
              <li>
                Desenvolvimento de aplicativo IONIC para interação simplificada
                entre alunos e Cooplem.
              </li>
              <li>
                Acesso a informações cruciais: notas, frequências, diários de
                bordo.
              </li>
              <li>Implementação de funcionalidades de pagamento.</li>
            </ul>
          </li>
        </ol>
        <ol>
          <li>
            <strong>
              Customização e Implantação do{" "}
              <a
                href="https://play.google.com/store/apps/details?id=com.izzyerp.app&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer">
                IzzyERP
              </a>
            </strong>
            :
            <ul>
              <li>
                Realização de customizações específicas para o IzzyERP, uma
                solução completa de gestão empresarial para diversos setores.
              </li>
              <li>
                Aplicação de conhecimentos técnicos em softwares (IONIC) para
                aprimorar a integração e funcionalidades do IzzyERP.
              </li>
              <li>
                Participação ativa e direta em todas as etapas do ciclo de
                desenvolvimento e implantação, assegurando uma integração suave
                e eficaz dessa solução de gestão.
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default ProjectsContainer;
