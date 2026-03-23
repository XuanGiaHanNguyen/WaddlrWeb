// src/components/Login.jsx
import { useState } from "react";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import { useAuth } from "../../services/hooks/useauth";

const C = {
  accent: "#e8720c",
  accentLight: "rgba(232,114,12,0.07)",
  deep: "#0f2027",
  muted: "#4a6a78",
  white: "#ffffff",
};

export default function Login({ onSwitch }) {
  const { signIn, loading, error, clearError } = useAuth();

  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const inputStyle = (field) => ({
    width: "100%",
    padding: "0.72rem 0.9rem",
    border: `1px solid ${focusedField === field ? C.accent : "rgba(0,0,0,0.15)"}`,
    borderRadius: "8px",
    fontSize: "0.875rem",
    color: C.deep,
    background: C.white,
    outline: "none",
    transition: "all 0.15s",
    boxShadow: focusedField === field ? `0 0 0 3px rgba(232,114,12,0.1)` : "none",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    clearError();
    try {
      await signIn(email, password);
      // onAuthStateChange in useAuth updates user → App re-renders to dashboard
    } catch {
      // error already in context
    }
  };

  return (
    <div style={{ flex: 1, padding: "2.5rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <div style={{ marginBottom: "1.75rem" }}>
        <div style={{ fontSize: "1.5rem", fontWeight: 600, color: C.deep, marginBottom: "0.25rem" }}>Sign in</div>
        <p style={{ fontSize: "0.85rem", color: C.muted }}>
          No account?{" "}
          <button onClick={onSwitch} style={{ background: "none", border: "none", cursor: "pointer", color: C.accent, fontWeight: 500, fontSize: "0.85rem", padding: 0 }}>
            Create one free
          </button>
        </p>
      </div>

      {/* Error banner */}
      {error && (
        <div style={{ marginBottom: "1rem", padding: "0.65rem 0.9rem", borderRadius: "8px", background: "rgba(220,38,38,0.06)", border: "1px solid rgba(220,38,38,0.2)", fontSize: "0.82rem", color: "#dc2626" }}>
          {error}
        </div>
      )}

      {/* Google */}
      <button
        style={{ width: "100%", padding: "0.68rem", borderRadius: "8px", border: "1px solid rgba(0,0,0,0.15)", background: C.white, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontSize: "0.85rem", fontWeight: 500, color: C.deep, transition: "background 0.15s", marginBottom: "1.25rem" }}
        onMouseEnter={(e) => { e.currentTarget.style.background = C.accentLight; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = C.white; }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
        Continue with Google
      </button>

      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1.25rem" }}>
        <div style={{ flex: 1, height: "1px", background: "rgba(0,0,0,0.1)" }} />
        <span style={{ fontSize: "0.72rem", fontWeight: 600, color: C.muted, textTransform: "uppercase", letterSpacing: "0.08em" }}>or</span>
        <div style={{ flex: 1, height: "1px", background: "rgba(0,0,0,0.1)" }} />
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", marginBottom: "0.85rem" }}>
          <div>
            <label style={{ display: "block", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", color: C.deep, marginBottom: "0.3rem" }}>Email address</label>
            <input
              type="email" placeholder="you@example.com"
              value={email} onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setFocusedField("email")} onBlur={() => setFocusedField(null)}
              style={inputStyle("email")} required
            />
          </div>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.3rem" }}>
              <label style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", color: C.deep }}>Password</label>
              <button type="button" style={{ background: "none", border: "none", cursor: "pointer", fontSize: "0.78rem", color: C.accent, fontWeight: 500, padding: 0 }}>Forgot?</button>
            </div>
            <div style={{ position: "relative" }}>
              <input
                type={showPass ? "text" : "password"} placeholder="••••••••"
                value={password} onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setFocusedField("password")} onBlur={() => setFocusedField(null)}
                style={{ ...inputStyle("password"), paddingRight: "2.8rem" }} required
              />
              <button type="button" onClick={() => setShowPass(!showPass)} style={{ position: "absolute", right: "0.9rem", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: C.muted, display: "flex", padding: 0 }}>
                {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>
        </div>

        <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", marginBottom: "1.5rem" }}>
          <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} style={{ accentColor: C.accent, width: 14, height: 14 }} />
          <span style={{ fontSize: "0.82rem", color: C.muted }}>Keep me signed in</span>
        </label>

        <button
          type="submit" disabled={loading}
          style={{ width: "100%", padding: "0.75rem", borderRadius: "8px", background: C.accent, color: C.white, border: "none", fontSize: "0.88rem", fontWeight: 600, cursor: loading ? "not-allowed" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", opacity: loading ? 0.7 : 1, transition: "opacity 0.15s" }}
          onMouseEnter={(e) => { if (!loading) e.currentTarget.style.opacity = "0.88"; }}
          onMouseLeave={(e) => { if (!loading) e.currentTarget.style.opacity = "1"; }}
        >
          {loading
            ? <span style={{ width: 16, height: 16, border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "#fff", borderRadius: "50%", display: "inline-block", animation: "spin 0.7s linear infinite" }} />
            : <> Sign in <ArrowRight size={15} /> </>}
        </button>
      </form>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}