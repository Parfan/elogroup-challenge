import { FormEvent, useState } from "react";
import Button from "../Button";

function LoginForm() {
  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(user, password);
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
      <Button type="submit" color="black">a</Button>
    </form>
  )
}

export default LoginForm;