import { Footer, Header } from "./components";
import "./index.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Lizing from "./pages/Lizing/Lizing";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lizing" element={<Lizing />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
