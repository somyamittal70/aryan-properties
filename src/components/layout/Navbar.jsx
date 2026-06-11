// Navbar.jsx - Aryan Properties

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const COLORS = {
  green: "#5d8f44",
};

const useBreakpoint = () => {
  const [w, setW] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1280,
  );
  useEffect(() => {
    const handler = () => setW(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return {
    isMobile: w < 640,
    isTablet: w >= 640 && w < 1024,
    isDesktop: w >= 1024,
    width: w,
  };
};

const NAV_LINKS = ["Properties", "Services", "About", "Invest", "Contact"];

const Navbar = () => {
  const { isMobile, isTablet } = useBreakpoint();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <style>{`
        .nav-link { transition: color 0.2s; }
        .nav-link:hover { color: #5d8f44 !important; }
        .mobile-nav { transform: translateX(100%); transition: transform 0.35s ease; }
        .mobile-nav.open { transform: translateX(0); }
      `}</style>

      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: isMobile ? "0 16px" : "0 40px",
          height: isMobile ? 56 : 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: scrolled ? "white" : "white",
          borderBottom: scrolled ? "1px solid rgba(93,143,68,0.2)" : "none",
          transition: "background 0.3s",
        }}
      >
        {/* Logo */}
        <Link to="/" style={{ textDecoration: "none" }}>
          <img
            src="./logo.png"
            alt="Aryan Properties"
            style={{
              height: isMobile ? "80px" : "100px",
              width: "200px",
              cursor: "pointer",
              display: "block",
            }}
          />
        </Link>

        {/* Desktop Links */}
        {!isMobile && !isTablet && (
          <div style={{ display: "flex", gap: 32 }}>
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                className="nav-link"
                href="#"
                style={{
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(14, 13, 13, 0.75)",
                  fontFamily: "Jost, sans-serif",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                {link}
              </a>
            ))}
          </div>
        )}

        {/* Right side */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {!isMobile && (
            <Link to="/contact">
              <button
                style={{
                  background: COLORS.green,
                  color: "#fff",
                  border: "none",
                  borderRadius: 10,
                  padding: "10px 20px",
                  fontSize: 10,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  fontFamily: "Jost, sans-serif",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Book Visit
              </button>
            </Link>
          )}
          {(isMobile || isTablet) && (
            <button
              onClick={() => setMenuOpen((v) => !v)}
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 8,
                padding: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#fff",
              }}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`mobile-nav ${menuOpen ? "open" : ""}`}
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: Math.min(
            300,
            typeof window !== "undefined" ? window.innerWidth * 0.85 : 300,
          ),
          background: "rgba(10,31,5,0.98)",
          backdropFilter: "blur(20px)",
          zIndex: 999,
          padding: "72px 28px 40px",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          borderLeft: "1px solid rgba(93,143,68,0.2)",
          overflowY: "auto",
        }}
      >
        {NAV_LINKS.map((link, i) => (
          <motion.a
            key={link}
            href="#"
            onClick={() => setMenuOpen(false)}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: menuOpen ? 1 : 0, x: menuOpen ? 0 : 20 }}
            transition={{ delay: i * 0.07 }}
            style={{
              fontSize: 22,
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 500,
              color: "#fff",
              textDecoration: "none",
              padding: "13px 0",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {link}
          </motion.a>
        ))}
        <Link to="/contact" onClick={() => setMenuOpen(false)}>
          <button
            style={{
              marginTop: 28,
              background: COLORS.green,
              color: "#fff",
              border: "none",
              borderRadius: 12,
              padding: "15px",
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontFamily: "Jost, sans-serif",
              fontWeight: 600,
              cursor: "pointer",
              width: "100%",
            }}
          >
            Book a Site Visit
          </button>
        </Link>
        <div
          style={{
            marginTop: "auto",
            fontSize: 12,
            color: "rgba(255,255,255,0.3)",
            fontFamily: "Jost, sans-serif",
            paddingTop: 24,
          }}
        >
          099534 44307
        </div>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 998,
            background: "rgba(0,0,0,0.4)",
          }}
        />
      )}
    </>
  );
};

export default Navbar;
