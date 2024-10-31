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
          <li>
            <strong>Tecnologias utilizadas</strong>:
          </li>
          <ul>
            <li>
              <strong>Docker</strong>: Containerização do back-end, incluindo
              configuração de <strong>Apache</strong> e <strong>Nginx </strong>
              para gerenciamento de servidores.
            </li>
            <li>
              <strong>PHP - Laravel</strong>: Desenvolvimento do back-end,
              garantindo robustez e segurança nas operações de processamento de
              dados.
            </li>
            <li>
              <strong>React - Mantis</strong>: Utilizado no front-end para criar
              interfaces dinâmicas e intuitivas, melhorando a experiência do
              usuário e a acessibilidade das informações.
            </li>
          </ul>
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
            <strong>Engesoftware | Alocação: PNUD </strong>- Participação no
            desenvolvimento ágil do Front-end do Sistema Integrado de
            Agrotóxicos (SIA), uma iniciativa do Programa das Nações Unidas para
            o Desenvolvimento (PNUD) para regulamentação de defensivos agrícolas
            no Brasil, América Latina e Caribe.
          </li>
          <li>
            <strong>Tecnologias utilizadas</strong>:
          </li>
          <ul>
            <li>
              TypeScript e Angular: Desenvolvimento do front-end com foco em uma
              arquitetura modular e escalável, garantindo interfaces dinâmicas e
              responsivas.
            </li>
            <li>
              Bootstrap: Implementação de design responsivo, assegurando que o
              sistema se adapte a diversos dispositivos e resoluções de tela.
            </li>
            <li>
              Java - Spring Boot: Apoio no back-end para integrar
              funcionalidades do front-end com a lógica de negócios, garantindo
              segurança e desempenho no processamento de dados.
            </li>
          </ul>
          <br />
          <li>
            Merlion TI - Atuação em equipes de desenvolvimento de sistemas,
            contribuindo para projetos de grande relevância e impacto.
            Responsável por desenvolver soluções robustas e escaláveis,
            utilizando tecnologias modernas para atender às necessidades de
            diferentes setores empresariais e educacionais.
          </li>
          <li>
            <strong>Tecnologias utilizadas</strong>:
          </li>
          <ul>
            <li>
              <strong>Angular e Vue.js</strong>: Desenvolvimento de front-end,
              criando interfaces dinâmicas e responsivas para melhorar a
              experiência do usuário.
            </li>
            <li>
              <strong>Ionic</strong>: Criação de aplicativos móveis com foco em
              multiplataforma, permitindo uma experiência unificada em
              dispositivos iOS e Android.
            </li>
            <li>
              <strong>Java - Spring Boot</strong>: Desenvolvimento de APIs e
              back-end, garantindo performance e segurança na manipulação de
              dados.
            </li>
          </ul>
          <li>Principais entregas:</li>
          <ul>
            <li>
              <strong>Izzy Construction: </strong>
              Plataforma de gestão empresarial desenvolvida com
              <strong> Angular e Ionic</strong>, voltada para otimizar operações
              e processos administrativos em diversos ramos de negócios.
            </li>
            <li>
              <strong>Cooplem Idiomas:</strong>
              Customização e implantação de um sistema de gestão de ensino (LMS)
              baseado em Moodle, integrando os módulos Administrativo e
              Pedagógico. A solução foi desenvolvida em
              <strong> PHP com Laravel</strong>, proporcionando uma plataforma
              completa para instituições de ensino, com funcionalidades
              específicas para a gestão escolar da Cooplem Idiomas.
            </li>
          </ul>
        </ul>
      </div>
      <div className="experience">
        <p>Empresa Privada - NDA (Freelancer)</p>
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
            <li>
              <strong>Docker</strong>: Containerização do banco de dados, Apache
              e Nginx.
            </li>
            <li>
              <strong>Pusher e Pushr</strong>: Para implementação de lives e
              notificações e live Chat.
            </li>
            <li>
              <strong>Mailgun e API da OpenAI</strong>: Integração de
              funcionalidades avançadas para o projeto.
            </li>
            <li>
              <strong>Marcado Pago e Efí pay</strong>: Para meios de pagamentos.
            </li>
          </ul>
        </ul>
      </div>
    </section>
  );
};

export default AboutExpirienceContainer;
