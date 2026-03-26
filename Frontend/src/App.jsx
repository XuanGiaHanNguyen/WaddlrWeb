import "./index.css";
import { Routes, Route, Navigate } from "react-router";

import Landing from "./pages/Landing";
import Process from "./pages/process/Process";
import Navbar from "./components/Navbar";
import AuthApp from "./pages/login/auth";
import { AuthProvider, useAuth } from "./services/hooks/useauth";

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) return null;
  return user ? children : <Navigate to="/authenication" />;
}

function AuthRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) return null;
  return user ? <Navigate to="/safehome" /> : children;
}

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/safehome" element={
          <ProtectedRoute>
            <Process />
          </ProtectedRoute>
        } />

        <Route path="/authenication" element={
          <AuthRoute>
            <AuthApp />
          </AuthRoute>
        } />
      </Routes>
    </AuthProvider>
  );
}

export default App;