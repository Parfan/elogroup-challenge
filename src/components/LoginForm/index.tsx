import { FormEvent, useState } from "react";

function LoginForm() {
  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(user, password);
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
        <button type="submit">Entrar</button>
      </form>
    </div>
  )
}

export default LoginForm;