import { Link, Outlet } from "react-router-dom";
import Leads from "../../components/Leads";

function LeadsPage() {
  return (
    <>
      <Leads />
      <Link to="create">Novo Lead (+)</Link>
      <Outlet />
    </>
  )
}

export default LeadsPage;