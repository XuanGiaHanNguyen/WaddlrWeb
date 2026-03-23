// src/pages/login/auth.jsx
import { useState } from "react";
import { useAuth } from "../../services/hooks/useauth";
import Login from "../login/login";
import SignUp from "../login/signup"; 
import Dashboard from "../login/dashboard"; 

export default function AuthApp() {
  const { user, loading } = useAuth();
  const [view, setView] = useState("login");

  if (loading) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ width: 32, height: 32, border: "3px solid rgba(0,0,0,0.1)", borderTopColor: "#e8720c", borderRadius: "50%", display: "inline-block", animation: "spin 0.7s linear infinite" }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  if (user) return <Dashboard />;

  return (
    <div style={{ marginTop: "60px", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ width: "50%", minWidth: 200, maxWidth: 560, background: "#ffffff", borderRadius: "14px", border: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 4px 4px rgba(0,0,0,0.06)", overflow: "hidden" }}>
        {view === "login"
          ? <Login  onSwitch={() => setView("signup")} />
          : <SignUp onSwitch={() => setView("login")}  />}
      </div>
    </div>
  );
}