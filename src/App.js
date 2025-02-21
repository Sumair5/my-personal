// import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Contact from "./pages/Contact";
import About from "./pages/About";
import "./layout/Layout.css"; // ✅ صحیح طریقہ
import CV from "./pages/CV";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Header />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cv" element={<CV />} />

            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
