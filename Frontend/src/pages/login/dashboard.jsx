
import { useEffect, useState } from "react";
import { useAuth } from "../../services/hooks/useauth";
import { api } from "../../services/Api";

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
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-2xl border border-black/[0.08] shadow-[0_4px_4px_rgba(0,0,0,0.06)] p-8">

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-[#e8720c] flex items-center justify-center text-white text-lg font-semibold shrink-0">
            {user?.email?.[0].toUpperCase()}
          </div>
          <div className="min-w-0">
            <h2 className="text-base font-semibold text-gray-900 truncate">
              {fullName ?? "Welcome back"}
            </h2>
            <p className="text-sm text-gray-400 truncate">{user?.email}</p>
          </div>
        </div>

        {/* Greeting banner */}
        {greeting && (
          <div className="flex items-center gap-2 px-4 py-3 mb-6 rounded-xl bg-orange-50 text-[#e8720c] text-sm font-medium">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
            </svg>
            <span>{greeting}</span>
          </div>
        )}

        {/* Info rows */}
        <div className="divide-y divide-gray-100 mb-6">
          <div className="flex items-center justify-between py-3">
            <span className="text-sm text-gray-400">User ID</span>
            <span className="text-sm text-gray-700 font-mono truncate max-w-[60%]">{user?.id}</span>
          </div>
          <div className="flex items-center justify-between py-3">
            <span className="text-sm text-gray-400">Session</span>
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-green-50 text-green-600">
              Active
            </span>
          </div>
          <div className="flex items-center justify-between py-3">
            <span className="text-sm text-gray-400">Backend</span>
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-50 text-blue-600">
              FastAPI ✓
            </span>
          </div>
        </div>

        {/* Sign out */}
        <button
          onClick={signOut}
          disabled={loading}
          className="w-full py-2.5 rounded-xl text-sm font-medium text-white bg-gray-900 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
        >
          {loading
            ? <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
            : "Sign out"}
        </button>

      </div>
    </div>
  );
}