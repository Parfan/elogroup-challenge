import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import logo from "../../assets/img/elogroup_logo.svg";
import styles from "./styles.module.css";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const sessionActive = JSON.parse(localStorage.getItem("sessionActive") || "false");
    if (sessionActive)
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