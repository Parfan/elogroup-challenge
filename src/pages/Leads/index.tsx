import { useContext, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import LeadProvider from "../../contexts/LeadContext";
import Header from "../../components/Header";
import Leads from "../../components/Leads";
import styles from "./styles.module.css";
import { UserContext } from "../../contexts/UserContext";

function LeadsPage() {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const activeId = JSON.parse(localStorage.getItem("activeId") || "[]");
    if (!(activeId.length > 0)) {
      userContext.setActiveId([]);
      navigate("/");
    } else
      userContext.setActiveId(activeId);
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