import "./index.css";
import { Routes, Route } from "react-router";

import Landing from "./pages/Landing";
import Process from "./pages/Process";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />  

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/safehome" element={<Process />} />
      </Routes>
    </>
  );
}

export default App;