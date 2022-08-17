import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Dashboard } from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Dashboard />
    </BrowserRouter>
  );
}

export default App;
