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
      <div className="min-h-screen flex items-center justify-center">
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        <span
          className="w-8 h-8 rounded-full inline-block border-[3px] border-black/10"
          style={{ borderTopColor: "#e8720c", animation: "spin 0.7s linear infinite" }}
        />
      </div>
    );
  }

  if (user) return <Dashboard />;

  return (
    <div className="mt-[60px] min-h-screen flex items-center justify-center">
      <div className="w-1/2 min-w-[200px] max-w-[560px] bg-white rounded-[14px] border border-black/[0.08] shadow-[0_4px_4px_rgba(0,0,0,0.06)] overflow-hidden">
        {view === "login"
          ? <Login onSwitch={() => setView("signup")} />
          : <SignUp onSwitch={() => setView("login")} />}
      </div>
    </div>
  );
}