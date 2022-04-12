import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/img/elogroup_logo.svg";
import { UserContext } from "../../contexts/UserContext";
import styles from "./styles.module.css";

function Header() {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  function handleClick() {
    localStorage.setItem("activeId", "[]");
    userContext.setActiveId([]);
    navigate("/");
  }

  return (
    <header className={styles.container}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo da Elogroup" />
      </div>
      <button className={styles.btn} onClick={handleClick}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
        Sair
      </button>
    </header>
  )
}

export default Header;