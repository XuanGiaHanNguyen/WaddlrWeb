// src/components/Dashboard.jsx
import { useEffect, useState } from "react";
import { useAuth } from "../../services/hooks/useauth";
import { api } from "../../services/Api"

export default function Dashboard() {
  const { user, signOut, loading } = useAuth();
  const [greeting, setGreeting] = useState(null);

  useEffect(() => {
    api.getDashboard()
      .then((d) => setGreeting(d.message))
      .catch(() => setGreeting(null));
  }, []);

  const fullName = user?.user_metadata?.full_name;

  return (
    <div className="dash-wrapper">
      <div className="dash-card">
        <div className="dash-header">
          <div className="avatar">{user?.email?.[0].toUpperCase()}</div>
          <div>
            <h2>{fullName ?? "Welcome back"}</h2>
            <p className="email">{user?.email}</p>
          </div>
        </div>

        {greeting && (
          <div className="dash-banner">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
            </svg>
            <span>{greeting}</span>
          </div>
        )}

        <div className="dash-info">
          <div className="info-row">
            <span className="info-label">User ID</span>
            <span className="info-value mono">{user?.id}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Session</span>
            <span className="info-value"><span className="badge badge-active">Active</span></span>
          </div>
          <div className="info-row">
            <span className="info-label">Backend</span>
            <span className="info-value"><span className="badge badge-connected">FastAPI ✓</span></span>
          </div>
        </div>

        <button className="btn-signout" onClick={signOut} disabled={loading}>
          {loading ? <span className="spinner" /> : "Sign out"}
        </button>
      </div>
    </div>
  );
}