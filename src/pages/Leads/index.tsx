import { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Leads from "../../components/Leads";
import styles from "./styles.module.css";;
function LeadsPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const isSessionActive = JSON.parse(localStorage.getItem("isSessionActive") || "false");
    if (!isSessionActive)
      navigate("/");
  }, []);

  return (
    <>
      <Header />
      <main className={styles.background}>
        <Leads />
        <Link to="create" className={styles.newLeadBtn}>Novo Lead (+)</Link>
        <Outlet />
      </main>
    </>
  )
}

export default LeadsPage;