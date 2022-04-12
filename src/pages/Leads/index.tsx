import { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import LeadProvider from "../../contexts/LeadContext";
import Header from "../../components/Header";
import Leads from "../../components/Leads";
import styles from "./styles.module.css";

function LeadsPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const sessionActive = JSON.parse(localStorage.getItem("sessionActive") || "false");
    if (!sessionActive)
      navigate("/");
  }, []);

  return (
    <>
      <Header />
      <LeadProvider>
        <main className={styles.background}>
          <h1>Painel de Leads</h1>
          <Leads />
          <Link to="create" className={styles.newLeadBtn}>Novo Lead (+)</Link>
          <Outlet />
        </main>
      </LeadProvider>
    </>
  )
}

export default LeadsPage;