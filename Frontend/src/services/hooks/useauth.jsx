// src/hooks/useAuth.jsx
import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { supabase } from "../Supabase";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser]       = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  // Restore session on mount and listen for auth state changes
  useEffect(() => {
    // Get current session immediately
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // onAuthStateChange fires on: sign-in, sign-out, token refresh, tab focus
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signUp = useCallback(async (email, password, fullName) => {
    setError(null);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: fullName } }, // stored in user_metadata
    });
    if (error) { setError(error.message); throw error; }
  }, []);

  const signIn = useCallback(async (email, password) => {
    setError(null);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) { setError(error.message); throw error; }
    // onAuthStateChange above will update `user` automatically
  }, []);

  const signOut = useCallback(async () => {
    setError(null);
    const { error } = await supabase.auth.signOut();
    if (error) setError(error.message);
  }, []);

  const clearError = useCallback(() => setError(null), []);

  return (
    <AuthContext.Provider value={{ user, loading, error, signUp, signIn, signOut, clearError }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
}