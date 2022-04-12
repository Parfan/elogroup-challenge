import { BrowserRouter as Router } from "react-router-dom";
import PageRoutes from "./routes";
import UserProvider from "./contexts/UserContext";

function App() {
  return (
    <UserProvider>
      <Router>
        <PageRoutes />
      </Router>
    </UserProvider>
  );
}

export default App;