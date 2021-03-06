import { Routes, Route } from "react-router-dom";
import LeadModal from "../components/LeadModal";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import {
  Home,
  Leads,
  NotFound
} from "./routes";

function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<LoginForm />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="signup" element={<SignUpForm />} />
      </Route>
      <Route path="leads/:id" element={<Leads />}>
        <Route path="create" element={<LeadModal />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default PageRoutes;