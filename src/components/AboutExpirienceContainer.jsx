import "../styles/components/aboutExpirienceContainer.sass";

const AboutExpirienceContainer = () => {
  return (
    <section className="about-container">
      <h2>Experiência Profissional</h2>
      <div className="experience">
        <p>Fiotec</p>
        <p>
          <i>Consultor e Desnvolvedor de Software</i>
        </p>
        <p>Período: 2024 - Presente</p>
        <ul>
          <li>
            Consultoria especializada para a Secretaria de Estado de Saúde do
            Distrito Federal (SES-DF), com foco na gestão de informações para o
            SIOF (Sistema de Informações Orçamentárias e Financeiras). Atuação
            na atualização e revisão de interfaces para garantir integridade e
            acessibilidade das informações.
          </li>
          <li>
            Contribuição para o projeto SESPLAN, com mapeamento de informações e
            análise de processos, visando introduzir melhorias contínuas na
            gestão estratégica da SES .
          </li>
        </ul>
      </div>
      <div className="experience">
        <p>Merlion TI e Engesoftware</p>
        <p>
          <i>Consultor e Desnvolvedor de Software</i>
        </p>
        <p>Período: 2022 - 2024</p>
        <ul>
          <li>
            Engesoftware | Alocação: PNUD - Participação no desenvolvimento ágil
            do Front-end do Sistema Integrado de Agrotóxicos (SIA), uma
            iniciativa do Programa das Nações Unidas para o Desenvolvimento
            (PNUD) para regulamentação de defensivos agrícolas no Brasil,
            América Latina e Caribe. Tecnologias utilizadas: TypeScript,
            Angular, Bootstrap, Java e Spring Boot.
          </li>
          <li>
            Merlion TI - Atuação em times de desenvolvimento de sistemas com
            Angular, Vue.js, e Ionic, contribuindo para projetos de grande
            relevância.
          </li>
          <li>Entrega de dois aplicativos:</li>
          <ul>
            <li>
              o Izzy Construction: Plataforma de gestão empresarial para
              diversos ramos de negócios, desenvolvida com Angular e Ionic.
            </li>
            <li>
              o Cooplem Idiomas: Customização e implantação de um sistema de
              gestão de ensino (LMS) baseado em Moodle, com integração entre os
              módulos Administrativo e Pedagógico, utilizando Laravel em PHP.
            </li>
          </ul>
        </ul>
      </div>
      <div className="experience">
        <p>Empresa Privada (Freelancer)</p>
        <p>
          <i>Desenvolvedor de Plataforma</i>
        </p>
        <p>Período: Julho/2024 - Outubro/2024</p>

        <ul>
          <li>
            Desenvolvimento de uma aplicação web usando Laravel e Blade,
            hospedada em infraestrutura Docker na DigitalOcean. Tecnologias
            utilizadas incluem:
          </li>
          <ul>
            <li>Docker: Containerização do banco de dados, Apache e Nginx.</li>
            <li>
              Pusher e Pushr: Para implementação de lives e notificações e live
              Chat.
            </li>
            <li>
              Mailgun e API da OpenAI: Integração de funcionalidades avançadas
              para o projeto.
            </li>
            <li>Marcado Pago e Efí pay: Para meios de pagamentos</li>
          </ul>
        </ul>
      </div>
    </section>
  );
};

export default AboutExpirienceContainer;
