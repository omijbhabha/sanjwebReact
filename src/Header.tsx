import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [currentPage, setCurrentPage] = useState("");

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setIsOpen(false);
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setCurrentPage(window.location.pathname);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`z-50 bg-black shadow-md ${
        isMobile ? "sticky top-0" : "relative"
      } w-full`}
    >
      <div className="w-full flex justify-between items-center p-6">
        <div className="text-2xl font-bold text-white md:hidden mr-8">
          Pixel Baba
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl text-white">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <nav className={`hidden md:flex w-full justify-center space-x-8`}>
          <a
            href="/home"
            style={{ color: currentPage === "/home" ? "#FFD700" : "#ffffff" }}
            className="text-lg hover:text-blue-400"
          >
            home
          </a>
          <a
            href="/cv"
            style={{ color: currentPage === "/cv" ? "#FFD700" : "#ffffff" }}
            className="text-lg hover:text-blue-400"
          >
            work
          </a>
          <a
            href="/contact"
            style={{
              color: currentPage === "/contact" ? "#FFD700" : "#ffffff",
            }}
            className="text-lg hover:text-blue-400"
          >
            contact
          </a>
        </nav>
      </div>

      {isOpen && isMobile && (
        <nav className="md:hidden flex flex-col items-center space-y-4 pb-4 bg-black shadow-md">
          <a
            href="/home"
            style={{ color: currentPage === "/home" ? "#FFD700" : "#ffffff" }}
            className="text-lg hover:text-blue-400"
            onClick={toggleMenu}
          >
            home
          </a>
          <a
            href="/cv"
            style={{ color: currentPage === "/cv" ? "#FFD700" : "#ffffff" }}
            className="text-lg hover:text-blue-400"
            onClick={toggleMenu}
          >
            work
          </a>
          <a
            href="/contact"
            style={{
              color: currentPage === "/contact" ? "#FFD700" : "#ffffff",
            }}
            className="text-lg hover:text-blue-400"
            onClick={toggleMenu}
          >
            contact
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
