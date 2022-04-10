import { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Leads from "../../components/Leads";

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
      <Leads />
      <Link to="create">Novo Lead (+)</Link>
      <Outlet />
    </>
  )
}

export default LeadsPage;