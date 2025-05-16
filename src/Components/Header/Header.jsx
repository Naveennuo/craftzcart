import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import "./Header.css";

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isScrolling, setIsScrolling] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [cursorIdle, setCursorIdle] = useState(false);
  const headerRef = useRef(null);
  const cursorTimeoutRef = useRef(null);
  const hideHeaderTimeoutRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setHeaderVisible(false);
      } else {
        setHeaderVisible(true);
      }
      setLastScrollY(currentScrollY);
      setIsScrolling(currentScrollY > 0);
    };

    const handleMouseMove = () => {
      if (cursorTimeoutRef.current) clearTimeout(cursorTimeoutRef.current);
      setCursorIdle(false);
      setHeaderVisible(true);
      if (hideHeaderTimeoutRef.current) clearTimeout(hideHeaderTimeoutRef.current);

      hideHeaderTimeoutRef.current = setTimeout(() => {
        setHeaderVisible(false);
      }, 2000);

      cursorTimeoutRef.current = setTimeout(() => {
        setCursorIdle(true);
      }, 2000);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
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
      setTimeout(() => {
        scrollToContact();
      }, 200);
    }
  };

  const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 0;

  return (
    <header
      ref={headerRef}
      className={`header ${isScrolling ? "scrolled" : ""} ${
        headerVisible ? "" : "hidden"
      } ${cursorIdle ? "cursor-idle" : ""}`}
      style={{
        flexDirection: isMobile ? "column" : "row",
        alignItems: isMobile ? "flex-start" : "center",
        rowGap: isMobile ? "20px" : "0",
        padding: isMobile ? "30px 20px" : "40px 100px",
        top: headerVisible ? "0" : `-${headerHeight}px`,
      }}
    >
      <div className="logo-section">
        <img
          src={logo}
          alt="CraftzCart Logo"
          className="logo"
          style={{ width: isMobile ? 150 : 200 }}
        />
      </div>
      <nav
        className="nav"
        style={{
          gap: isMobile ? "20px" : "80px",
          flexDirection: isMobile ? "column" : "row",
          alignSelf: isMobile ? "flex-start" : "center",
        }}
      >
        <Link to="/home" className="nav-link home">
          Home
        </Link>
        <Link to="/collections" className="nav-link collections">
          Collections
        </Link>
        <Link to="/aboutus" className="nav-link aboutus">
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
  );
};

export default Header;
