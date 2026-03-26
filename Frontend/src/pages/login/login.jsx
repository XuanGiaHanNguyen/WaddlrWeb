// src/components/Login.jsx
import { useState } from "react";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import { useAuth } from "../../services/hooks/useauth";
import { useNavigate } from "react-router";

export default function Login({ onSwitch }) {
  const { signIn, loading, error, clearError } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const inputClass = (field) =>
    `w-full px-[0.9rem] py-[0.72rem] rounded-lg text-sm text-[#0f2027] bg-white outline-none transition-all duration-150 border ${
      focusedField === field
        ? "border-[#e8720c] shadow-[0_0_0_3px_rgba(232,114,12,0.1)]"
        : "border-black/15"
    }`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    clearError();
    try {
      await signIn(email, password);
      navigate("/safehome");
    } catch {
      // error already in context
    }
  };

  return (
    <div className="flex-1 p-10 flex flex-col justify-center">

      {/* Heading */}
      <div className="mb-7">
        <div className="text-2xl font-semibold text-[#0f2027] mb-1">Sign in</div>
        <p className="text-[0.85rem] text-[#4a6a78]">
          No account?{" "}
          <button
            onClick={onSwitch}
            className="bg-transparent border-none cursor-pointer text-[#e8720c] font-medium text-[0.85rem] p-0 hover:underline"
          >
            Create one free
          </button>
        </p>
      </div>

      {/* Error banner */}
      {error && (
        <div className="mb-4 px-[0.9rem] py-[0.65rem] rounded-lg bg-red-600/[0.06] border border-red-600/20 text-[0.82rem] text-red-600">
          {error}
        </div>
      )}

      {/* Google */}
      <button className="w-full py-[0.68rem] rounded-lg border border-black/15 bg-white flex items-center justify-center gap-2 text-[0.85rem] font-medium text-[#0f2027] mb-5 transition-colors duration-150 hover:bg-[rgba(232,114,12,0.07)] cursor-pointer">
        <svg width="16" height="16" viewBox="0 0 24 24">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        Continue with Google
      </button>

      {/* Divider */}
      <div className="flex items-center gap-2.5 mb-5">
        <div className="flex-1 h-px bg-black/10" />
        <span className="text-[0.72rem] font-semibold text-[#4a6a78] uppercase tracking-widest">or</span>
        <div className="flex-1 h-px bg-black/10" />
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <div className="flex flex-col gap-[0.85rem] mb-[0.85rem]">

          {/* Email */}
          <div>
            <label className="block text-[0.72rem] font-semibold tracking-[0.04em] uppercase text-[#0f2027] mb-[0.3rem]">
              Email address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField(null)}
              className={inputClass("email")}
              required
            />
          </div>

          {/* Password */}
          <div>
            <div className="flex justify-between items-center mb-[0.3rem]">
              <label className="text-[0.72rem] font-semibold tracking-[0.04em] uppercase text-[#0f2027]">
                Password
              </label>
              <button
                type="button"
                className="bg-transparent border-none cursor-pointer text-[0.78rem] text-[#e8720c] font-medium p-0 hover:underline"
              >
                Forgot?
              </button>
            </div>
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setFocusedField("password")}
                onBlur={() => setFocusedField(null)}
                className={`${inputClass("password")} pr-11`}
                required
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-[0.9rem] top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer text-[#4a6a78] flex p-0"
              >
                {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>
        </div>

        {/* Remember me */}
        <label className="flex items-center gap-2 cursor-pointer mb-6">
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
            className="w-3.5 h-3.5 accent-[#e8720c]"
          />
          <span className="text-[0.82rem] text-[#4a6a78]">Keep me signed in</span>
        </label>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-lg bg-[#e8720c] text-white text-[0.88rem] font-semibold flex items-center justify-center gap-1.5 transition-opacity duration-150 hover:opacity-90 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer border-none"
        >
          {loading
            ? <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
            : <> Sign in <ArrowRight size={15} /> </>}
        </button>
      </form>
    </div>
  );
}