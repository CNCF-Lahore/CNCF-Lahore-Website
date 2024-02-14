import { Route, Routes } from "react-router-dom";

// Page
import Home from "./pages/Home";
import CodeOfConductPage from "./pages/CodeOfConduct";

// Components
import Navbar from "./components/Navbar";

// Temp
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <main className="">
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CodeofConduct" element={<CodeOfConductPage />} />
        </Routes>
      </AuthContextProvider>
    </main>
  );
}

export default App;
