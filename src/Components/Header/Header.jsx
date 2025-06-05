import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import "./Header.css";

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  const location = useLocation();
  const navigate = useNavigate();
  const headerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsMenuOpen(false);
      }
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolling(currentScrollY > 0);

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY) {
        setHeaderVisible(false);
        setIsMenuOpen(false); // close mobile menu on scroll
      } else {
        setHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-us");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    const pagesWithContact = ["/home", "/collections", "/aboutus"];
    if (pagesWithContact.includes(location.pathname)) {
      scrollToContact();
    } else {
      navigate("/home");
      setTimeout(scrollToContact, 300);
    }
    setIsMenuOpen(false);
  };

  const headerHeight = headerRef.current?.offsetHeight || 0;

  const isBlurred = isScrolling || (isMobile && isMenuOpen);

  return (
    <>
      <header
        ref={headerRef}
        className={`header ${isBlurred ? "scrolled" : ""}`}
        style={{
          top: headerVisible ? "0" : `-${headerHeight}px`,
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "flex-start" : "center",
          rowGap: isMobile ? "20px" : "0",
          padding: isMobile ? "20px" : "40px 100px",
        }}
      >
        <div className="logo-toggle">
          <img
            src={logo}
            alt="CraftzCart Logo"
            className="logo"
            style={{ width: isMobile ? 150 : 200 }}
          />
          {isMobile && (
            <button
              className="menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              ☰
            </button>
          )}
        </div>

        <nav
          className={`nav ${isMobile ? "mobile" : ""} ${
            isMobile && isMenuOpen ? "open" : ""
          }`}
          style={{
            gap: isMobile ? "20px" : "80px",
            flexDirection: isMobile ? "column" : "row",
            alignSelf: isMobile ? "center" : "center",
          }}
        >
          <Link to="/home" className="nav-link home" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link to="/collections" className="nav-link collections" onClick={() => setIsMenuOpen(false)}>
            Collections
          </Link>
          <Link to="/aboutus" className="nav-link aboutus" onClick={() => setIsMenuOpen(false)}>
            About Us
          </Link>
          <a
            href="#contact-us"
            onClick={handleContactClick}
            className="nav-link contact-link contactus"
          >
            Contact Us
          </a>
        </nav>
      </header>
    </>
  );
};

export default Header;
