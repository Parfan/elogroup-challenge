import { FormEvent, useState } from "react";
import Button from "../Button";

function RegisterForm() {
  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(user, password, confirmPassword);
  }

  return (
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
      <Button type="submit">Registrar</Button>
    </form>
  )
}

export default RegisterForm;