import { Route, Routes } from "react-router-dom";

// Page
import Home from "./pages/Home";
import CodeOfConductPage from "./pages/CodeOfConduct";

// Components
import Navbar from "./components/Navbar";

// Temp

function App() {
  return (
    <main className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CodeofConduct" element={<CodeOfConductPage />} />
      </Routes>
    </main>
  );
}

export default App;
