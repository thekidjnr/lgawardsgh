import { Gaming } from "./pages/Gaming/Gaming";
import { Lottery } from "./pages/Lottery/Lottery";
import Home from "./pages/Home/Home";
import { Contact } from "./pages/Contact/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/gaming" element={<Gaming />} ></Route>
        <Route path="/lottery" element={<Lottery />} ></Route>
        <Route path="/contact" element={<Contact />} ></Route>
      </Routes>
    </Router>

  );
}

export default App;
