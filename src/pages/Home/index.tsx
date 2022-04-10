import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import logo from "../../assets/img/elogroup_logo.svg";
import styles from "./styles.module.css";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const isSessionActive = JSON.parse(localStorage.getItem("isSessionActive") || "false");
    if (isSessionActive)
      navigate("/leads");
  }, [navigate]);

  return (
    <main className={styles.background}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo da Elogroup" />
      </div>
      <Outlet />
    </main>
  )
}

export default Home;