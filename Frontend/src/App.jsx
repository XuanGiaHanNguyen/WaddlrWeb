import "./index.css";
import { Routes, Route } from "react-router";

import Landing from "./pages/Landing";
import Process from "./pages/process/Process";
import Navbar from "./components/Navbar";
import AuthApp from "./pages/login/auth";

function App() {
  return (
    <>
      <Navbar />  

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/safehome" element={<Process />} />
        <Route path="/authenication" element={<AuthApp />} />
      </Routes>
    </>
  );
}

export default App;