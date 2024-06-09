import "../styles/components/aboutExpirienceContainer.sass";

const AboutExpirienceContainer = () => {
  return (
    <section className="about-container">
      <h2>Experiência Profissional</h2>
      <div className="experience">
        <p>Desenvolvedor de Software, Merlion TI</p>
        <p>2022 – 2024</p>
        <ul>
          <li>
            Desenvolvimento de sistemas em Angular, IONIC, React, Java (Spring),
            Vue.js.
          </li>
          <li>
            Integração de Bancos de Dados: NoSQL, SQLite, MySQL, PostgreSQL, SQL
            Server e Oracle.
          </li>
          <li>Aplicação de REST, SOAP, MVC, JSON e outros conceitos.</li>
        </ul>
      </div>
      <div className="experience">
        <p>
          Desenvolvedor de Software e Bolsista, Fiotec - Fundação de Apoio à
          Fiocruz
        </p>
        <p>2024 - Presente</p>
        <ul>
          <li>
            Desenvolvimento de sistemas com foco em eficiência e acessibilidade.
          </li>
          <li>
            Colaboração efetiva com equipe e stakeholders para garantir
            alinhamento e transparência.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutExpirienceContainer;
