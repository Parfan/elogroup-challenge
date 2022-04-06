import { FormEvent, useState } from "react";

function RegisterForm() {
  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(user, password, confirmPassword);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Usuário</span>
          <input
            type="text"
            value={user}
            onChange={e => setUser(e.target.value)}
            required
          />
        </label>
        <label>
          <span>Senha</span>
          <input
            type="text"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </label>
        <label>
          <span>Confirmar senha</span>
          <input
            type="text"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Registrar</button>
      </form>
    </div>
  )
}

export default RegisterForm;