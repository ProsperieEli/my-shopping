import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import Technology from "./components/Technology/Technology";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tech" element={<Technology />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
