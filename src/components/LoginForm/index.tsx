import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

function LoginForm() {
  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // const users = JSON.parse(localStorage.getItem("users") || "[]");
    localStorage.setItem("isSessionActive", JSON.stringify(true));
    navigate("/leads");
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1>Entrar</h1>
        <label>
          <span>Usuário <span style={{ color: "red" }}>*</span></span>
          <input
            type="text"
            value={user}
            onChange={e => setUser(e.target.value)}
            placeholder="Digite seu usuário"
            required
          />
        </label>
        <label>
          <span>Senha <span style={{ color: "red" }}>*</span></span>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Digite sua senha"
            required
          />
        </label>
        {showErrorMessage ? (
          <p className={styles.error}>
            {errorMessage}
          </p>
        ) : false}
        <button type="submit">Entrar</button>
        <p className={styles.signup}>Não possui uma conta? <Link to="/signup">Cadastrar</Link></p>
      </form>
    </div>
  )
}

export default LoginForm;