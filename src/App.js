import React, { Component } from "react";
import "./App.css";
import { FaWhatsapp, FaMailBulk } from "react-icons/fa";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="head1"></header>
        <header className="head2">
          <h2>&emsp; EducaUB</h2>
        </header>
        <div className="bg" />
        <div className="bg bg2" />
        <div className="bg bg3" />
        <div className="content">
          <div className="thead">
            <b>Entrar como</b>
          </div>
          <form action="/action_page.php">
            <br />
            <Link to="/adm">
              <input type="radio" id="adm" name="user" value="adm" />
              Administrador
            </Link>
            <br />
            <Link to="/pf">
              <input type="radio" id="prof" name="user" value="prof" />
              Professor
            </Link>
            <br />
            <Link to="/aln">
              <input type="radio" id="aln" name="user" value="aln" />
              Aluno
            </Link>
            <br />
            <Link to="/mapa">
              <input type="radio" id="vis" name="user" value="vis" />
              Visitante
            </Link>
          </form>
        </div>
        <footer>
          <div>
            <h3>
              &emsp; Dúvidas? Contate-nos: &emsp;{" "}
              <span style={{ marginLeft: "20%" }}>
                {" "}
                <FaMailBulk /> xxxxx.xxxxx@ufu.br &emsp; <FaWhatsapp /> (34)
                9xxxx-xxxx{" "}
              </span>
            </h3>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
