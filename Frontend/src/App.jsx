// src/App.jsx
import "./index.css";
import { Routes, Route } from "react-router";

import Landing from "./pages/Landing";
import Process from "./pages/process/Process";
import Navbar from "./components/Navbar";
import AuthApp from "./pages/login/auth";
import { AuthProvider } from "./services/hooks/useauth";

function App() {
  return (
    <AuthProvider> 
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/safehome" element={<Process />} />
        <Route path="/authenication" element={<AuthApp />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;