import "../styles/components/aboutExpirienceContainer.sass";

const AboutExpirienceContainer = () => {
  return (
    <section className="about-container">
      <h2>Experiência Profissional</h2>

      <div className="experience">
        <p>Quero Passagem</p>
        <p>
          <i>Desenvolvedor Full Stack Pleno</i>
        </p>
        <p>Período: Novembro/2025 - Presente · São Paulo/SP</p>
        <ul>
          <li>Atuação como Desenvolvedor Full Stack Pleno, atualmente em andamento.</li>
        </ul>
      </div>
      <div className="experience">
        <p>Engesoftware Tecnologia S.A</p>
        <p>
          <i>Desenvolvedor Fullstack</i>
        </p>
        <p>Período: Junho/2025 - Presente · Brasília/DF</p>
        <ul>
          <li>
            Atuação em projetos legados da Terracap, desenvolvendo e dando
            manutenção em sistemas corporativos com <strong>Java</strong> e{" "}
            <strong>PHP</strong>, garantindo a continuidade, estabilidade e
            evolução das aplicações utilizadas pela empresa.
          </li>
        </ul>
      </div>
      <div className="experience">
        <p>Regimento Interno Comentado · Câmara dos Deputados</p>
        <p>
          <i>Desenvolvedor Full Stack Web &amp; Mobile (Projeto Autoral)</i>
        </p>
        <p>Período: Dezembro/2024 - Outubro/2025 (concluído) · Brasília/DF</p>
        <ul>
          <li>
            Transformação do livro <strong>"Regimento Interno Facilitado"</strong>{" "}
            em uma obra digital interativa (web, Android e iOS), publicada por um
            servidor da Câmara dos Deputados, com estruturação hierárquica do
            conteúdo em Livro → Título → Capítulo → Seção → Artigo → Parágrafo.
          </li>
          <li>
            Inserções interativas: comentários, notas de rodapé, remissões e
            quadros esquemáticos, conectando temas e permitindo navegação entre
            trechos relacionados.
          </li>
          <li>
            Sistema de login social (Google, Facebook, Instagram), controle de
            acesso por assinatura e dashboard administrativo para edição e
            gestão do conteúdo.
          </li>
          <li>
            <strong>Resultado:</strong> redução de 35% na carga do banco de
            dados e aumento de 40% na velocidade de resposta, com boas
            práticas replicadas para outros sistemas jurídicos da consultoria.
          </li>
          <li>
            <strong>Tecnologias utilizadas</strong>:
          </li>
          <ul>
            <li>
              <strong>Laravel e MySQL</strong>: backend robusto, autenticação
              segura e deploy via Docker.
            </li>
            <li>
              <strong>Angular, Ionic e Capacitor</strong>: frontend mobile com
              navegação inteligente e modo offline.
            </li>
          </ul>
        </ul>
      </div>
      <div className="experience">
        <p>Merlion TI e Engesoftware</p>
        <p>
          <i>Consultor e Desenvolvedor de Software</i>
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
        <p>Snapic Tecnologia</p>
        <p>
          <i>Engenheiro de Software</i>
        </p>
        <p>Período: Janeiro/2024 - Janeiro/2025 (1 ano 1 mês) · São Paulo/SP</p>
        <ul>
          <li>
            Desenvolvimento de uma plataforma white-label altamente complexa,
            contribuindo no front-end, back-end, QA, infraestrutura e
            integrações estratégicas. Liderança de uma equipe de 3
            desenvolvedores até a entrega final do projeto.
          </li>
          <li>
            <strong>Tecnologias utilizadas</strong>:
          </li>
          <ul>
            <li>
              <strong>Pagamentos</strong>: cartão, PIX, boleto e saques via
              Mercado Pago, Stripe e Efipay.
            </li>
            <li>
              <strong>Tempo real</strong>: Pusher e WebSocket para mensagens e
              transmissão ao vivo com envio de presentes.
            </li>
            <li>
              <strong>Cloud &amp; DevOps</strong>: Docker, DigitalOcean
              (Droplets &amp; Spaces), AWS (ECS/S3) e Firebase Storage.
            </li>
            <li>
              <strong>Integrações</strong>: Zendesk, bots do Telegram, API
              Meta (Facebook), Google OAuth 2.0 e ChatGPT para feed
              personalizado.
            </li>
          </ul>
          <li>
            <strong>Resultado:</strong> redução de 25% no tempo médio de
            suporte e aumento de 18% no engajamento.
          </li>
        </ul>
      </div>
      <div className="experience">
        <p>Fiotec</p>
        <p>
          <i>Consultor e Desenvolvedor de Software (Pesquisador Técnico)</i>
        </p>
        <p>Período: Janeiro/2024 - Março/2026</p>
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
    </section>
  );
};

export default AboutExpirienceContainer;
