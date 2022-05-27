import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

import { Homepage } from "./pages/HomePage";
import { RegisterPage } from "./pages/registerPage";
import { LoginPage } from "./pages/LoginPage";
import { IncidenciaPage } from "./pages/IncidenciaPage";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/incidencia/:id" element={<IncidenciaPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
