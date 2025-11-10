import "./SobreNos.css";

function SobreNos() {
  return (
    <div className="sobre-nos">
      <h1>Por trás do POP CORNt 🍿</h1>
      <p>
        Somos um grupo de estudantes apaixonados por tecnologia, criatividade e
        cinema. Nosso projeto POP CORNt nasceu da vontade de unir entretenimento
        com inovação — e claro, com muito estilo!
      </p>

      <blockquote>"Aqui a pipoca é tech e o código é pop!"</blockquote>
      <blockquote>"Se não for divertido, nem começa!"</blockquote>

      <div className="integrantes">
        {[
          { nome: "Emanulle", cargo: "Designer", img: "emanuelle.png" },
          { nome: "Giselle", cargo: "UX Designer", img: "giselle.png" },
          { nome: "Hugo", cargo: "Front-End", img: "hugo.png" },
          { nome: "Jessica", cargo: "Design Criativo", img: "jessica.png" },
          { nome: "João", cargo: "Back-End", img: "joao.png" },
          { nome: "William", cargo: "Front-End", img: "william.png" },
        ].map((pessoa) => (
          <div className="card" key={pessoa.nome}>
            <img src={`/src/assets/${pessoa.img}`} alt={pessoa.nome} />
            <h3>
              {pessoa.nome}
              <br />
              <small>{pessoa.cargo}</small>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SobreNos;
