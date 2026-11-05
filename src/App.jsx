import React from "react";
import Cards from "./components/Cards";

function App() {
  return (
    <div>
      <h1>Minha primeira aplicação React</h1>
      <Cards titulo="Alunos Aprovados" nomeAluno="Os Flamenguistas"></Cards>
      <Cards titulo="Alunos Reprovados" nomeAluno="Vascao"></Cards>
    </div>
  );
}

export default App;
