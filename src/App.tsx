import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WIP from "./pages/WIP.tsx";
import NotFound from "./pages/NotFound";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer";
import Work from "./pages/Work.tsx";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<WIP />} />
        <Route path="/about" element={<WIP />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
