import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import logo from "../../assets/img/elogroup_logo.svg";
import { UserContext } from "../../contexts/UserContext";
import styles from "./styles.module.css";

function Home() {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const activeId = JSON.parse(localStorage.getItem("activeId") || "[]");
    if (activeId.length > 0) {
      userContext.setActiveId(activeId);
      navigate(`/leads/${activeId}`);
    } else
      userContext.setActiveId([]);
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