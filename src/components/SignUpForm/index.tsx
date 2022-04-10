import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PopUp from "../PopUp";
import styles from "./styles.module.css";

function SignUpForm() {
  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [signupSuccess, setSignupSuccess] = useState(false);
  const navigate = useNavigate();

  function validatePassword() {
    if (/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password) // Check if password has special character
      && /\d/.test(password) // Check if password has number
      && /[A-Z]/.test(password) // Check if password has uppercase
      && password.length >= 8) // Check if password has at least 8 characters
    {
      return true;
    }
    return false;
  }

  function confirmPasswordMatch() {
    return password === confirmPassword;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const isPasswordValidated = validatePassword();
    const isPasswordMatch = confirmPasswordMatch();

    if (!isPasswordValidated) {
      setErrorMessage(`
        Sua senha deve conter ao menos 8 caracteres, contendo ao menos,
        um caracter especial,
        um caracter numérico,
        um caracter maiúsculo.
      `)
      setShowErrorMessage(true);
    } else if (!isPasswordMatch) {
      setErrorMessage("As senhas que você digitou não são compatíveis.")
      setShowErrorMessage(true);
    } else {
      setShowErrorMessage(false);
      setSignupSuccess(true);
      setTimeout(() => navigate("/"), 3000);
    }

    // const users = JSON.parse(localStorage.getItem("users") || "[]");
    // localStorage.setItem("users", JSON.stringify([...users, {
    //   id: Math.random().toString(16).slice(2),
    //   username: user,
    //   password: password,
    //   leads: {}
    // }]));

    // navigate("/leads");
  }

  return (
    <>
      {signupSuccess ? (
        <PopUp type="success">
          Cadastro efetuado com sucesso!<br />
          Voltando para página de entrada...
        </PopUp>
      ) : false}
      <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.form}>
        <h1>Cadastro</h1>
          <label>
            <span>Usuário <span style={{ color: "red" }}>*</span></span>
            <input
              type="text"
              value={user}
              onChange={e => setUser(e.target.value)}
              placeholder="Digite o usuário"
              required
            />
          </label>
          <label>
            <span>Senha <span style={{ color: "red" }}>*</span></span>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Digite uma senha"
              required
            />
          </label>
          <label>
            <span>Confirmar senha <span style={{ color: "red" }}>*</span></span>
            <input
              type="password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              placeholder="Repita a senha"
              required
            />
          </label>
          {showErrorMessage ? (
            <p className={styles.error}>
              {errorMessage}
            </p>
          ) : false}
          <button type="submit">Cadastrar</button>
          <p className={styles.login}>Já possui uma conta? <Link to="/">Entrar</Link></p>
        </form>
      </div>
    </>
  )
}

export default SignUpForm;