import { useState } from "react";
import Imagem from "./assets/isso.jpg";
import "./App.css";

export default function App() {
  return (
    <main>
      <section className="imagemSection">
        <img src={Imagem} alt="Imagem" />
      </section>

      <section className="loginSection">
        <form className="login">
          <h1>Login</h1>
          <p>Usuário:</p>
          <input type="text" placeholder="Digite o usuário" />
          <p>Senha:</p>
          <input type="password" placeholder="Digite sua senha" />
          <a className="esqueci" href="#">
            Esqueci meu acesso!
          </a>

          <button type="button" className="bt-entrar">
            Logar
          </button>
        </form>
      </section>
    </main>
  );
}
