import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WIP from "./pages/WIP.tsx";
import Header from "./components/Header.tsx";
// import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<WIP />} /> {/* WIP for CV page */}
        <Route path="/contact" element={<WIP />} /> {/* WIP for Contact page */}
        <Route path="/about" element={<WIP />} /> {/* WIP for About page */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
