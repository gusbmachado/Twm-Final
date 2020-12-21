import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaMailBulk } from "react-icons/fa";

class Admin extends Component {
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
          <div className="thead" style={{ marginTop: "-12%" }}>
            <b>Entrar</b>
          </div>
          <form className="section-sign-in" style={{ marginTop: "-20%" }}>
            <div className="form-group form-icon">
              <label className="form-label">Usuário</label>
              <br />
              <input
                type="text"
                className="form-input form-icon--user"
                placeholder="Insira seu usuário"
              />
              <br />
            </div>
            <br />
            <div className="form-group form-icon">
              <label className="form-label">Senha</label>
              <br />
              <input
                type="text"
                className="form-input form-icon-lock"
                placeholder="Insira sua senha"
              />
            </div>
            <br />
            <br />
            <br />
            <button class="button btn">
              <Link to="/">Acessar</Link>
            </button>
            <br />
            <br />
            <a href="#" className="form-link">
              Esqueci minha senha
            </a>
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

export default Admin;
