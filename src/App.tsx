import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import NavBar from "./components/NavBar";
import { MovieProvider } from "./context/MovieContext";

function App() {
  return (
    <MovieProvider>
      <div className="min-h-screen bg-gray-900 text-white">
        <NavBar />
        <main className="px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorite" element={<Favorite />} />
          </Routes>
        </main>
      </div>
    </MovieProvider>
  );
}

export default App;
