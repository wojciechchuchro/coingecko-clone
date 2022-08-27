import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CryptoDetail from "./pages/CryptoDetail";
import CryptoHome from "./pages/CryptoHome";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<CryptoHome />} />
        <Route path="/coin/:id" element={<CryptoDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
