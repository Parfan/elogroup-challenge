import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/img/elogroup_logo.svg";
import styles from "./styles.module.css";

function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="Logo da Elogroup" />
        </div>
        <button className={styles.btn} onClick={() => navigate("/")}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Voltar
        </button>
      </header>
      <main className={styles.container}>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "50px"
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <div>
            <h1>404</h1>
            <div>
              <h2>Oops!</h2>
              <p>A página que você está procurando não foi encontrada</p>
            </div>
          </div>
        </div>
        <Link to="/">Voltar</Link>
      </main>
    </>
  )
}

export default NotFound;