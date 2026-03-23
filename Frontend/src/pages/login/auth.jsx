import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

export default function AuthApp() {
  const [view, setView] = useState("login");

  return (
    <div
      style={{
        marginTop: "60px",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "50%",
          minWidth: 200,
          maxWidth: 560,
          background: "#ffffff",
          borderRadius: "14px",
          border: "1px solid rgba(0,0,0,0.08)",
          boxShadow: "0 4px 4px rgba(0,0,0,0.06)",
          overflow: "hidden",
        }}
      >
        {view === "login" ? (
          <Login onSwitch={() => setView("signup")} />
        ) : (
          <SignUp onSwitch={() => setView("login")} />
        )}
      </div>
    </div>
  );
}
