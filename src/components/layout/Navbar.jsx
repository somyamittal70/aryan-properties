// Navbar.jsx - Aryan Properties

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const COLORS = { green: "#5d8f44" };

const useBreakpoint = () => {
  const [w, setW] = useState(typeof window !== "undefined" ? window.innerWidth : 1280);
  useEffect(() => {
    const handler = () => setW(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return { isMobile: w < 640, isTablet: w >= 640 && w < 1024, isDesktop: w >= 1024, width: w };
};

const NAV_LINKS = [
  { label: "About",      to: "/about"      },
  { label: "Properties", to: "/properties" },
  { label: "Services",   to: "/services"   },
  { label: "Blogs",      to: "/blog"       },
  { label: "Gallery",    to: "/gallery"    },
  { label: "Career",     to: "/careers"    },
  { label: "Contact",    to: "/contact"    },
];

const Navbar = () => {
  const { isMobile, isTablet } = useBreakpoint();
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // close drawer on route change
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  const isActive = (to) =>
    to === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(to);

  return (
    <>
      <style>{`
        /* desktop nav link */
        .nav-link {
          position: relative;
          transition: color 0.2s;
          padding-bottom: 4px;
        }
        /* animated underline */
        .nav-link::after {
          content: "";
          position: absolute;
          left: 0; bottom: -2px;
          width: 100%; height: 1.5px;
          background: #5d8f44;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.25s ease;
        }
        .nav-link:hover { color: #5d8f44 !important; }
        .nav-link:hover::after { transform: scaleX(1); }

        /* active page — underline stays */
        .nav-link.active {
          color: #5d8f44 !important;
        }
        .nav-link.active::after { transform: scaleX(1); }

        /* mobile drawer */
        .mobile-nav { transform: translateX(100%); transition: transform 0.35s ease; }
        .mobile-nav.open { transform: translateX(0); }

        /* mobile link active dot */
        .mobile-link-active {
          color: #5d8f44 !important;
          border-left: 2.5px solid #5d8f44;
          padding-left: 12px;
        }
      `}</style>

      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        padding: isMobile ? "0 16px" : "0 40px",
        height: isMobile ? 56 : 72,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled ? "rgba(10,31,5,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(93,143,68,0.2)" : "none",
        transition: "background 0.3s",
      }}>

        {/* ── Logo ── */}
        <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          <img
            src="./logo.png"
            alt="Aryan Properties"
            style={{
              height: isMobile ? 46 : 62,
              width: "auto",
              objectFit: "contain",
              display: "block",
              
              filter: "brightness(1.1) drop-shadow(0 0 8px rgba(93,143,68,0.3))",
            }}
          />
        </Link>

        {/* ── Desktop Links ── */}
        {!isMobile && !isTablet && (
          <div style={{ display: "flex", gap: 32 }}>
            {NAV_LINKS.map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                className={`nav-link ${isActive(to) ? "active" : ""}`}
                style={{
                  fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
                  color: isActive(to) ? COLORS.green : "rgba(255,255,255,0.75)",
                  fontFamily: "Jost, sans-serif", fontWeight: 500, textDecoration: "none",
                }}
              >
                {label}
              </Link>
            ))}
          </div>
        )}

        {/* ── Right side ── */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {!isMobile && (
            <Link to="/contact">
              <button style={{
                background: COLORS.green, color: "#fff", border: "none", borderRadius: 10,
                padding: "10px 20px", fontSize: 10, letterSpacing: "0.2em",
                textTransform: "uppercase", fontFamily: "Jost, sans-serif",
                fontWeight: 600, cursor: "pointer",
              }}>
                Book Visit
              </button>
            </Link>
          )}
          {(isMobile || isTablet) && (
            <button
              onClick={() => setMenuOpen(v => !v)}
              style={{
                background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 8, padding: "8px", display: "flex", alignItems: "center",
                justifyContent: "center", cursor: "pointer", color: "#fff",
              }}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          )}
        </div>
      </nav>

      {/* ── Mobile Drawer ── */}
      <div
        className={`mobile-nav ${menuOpen ? "open" : ""}`}
        style={{
          position: "fixed", top: 0, right: 0, bottom: 0,
          width: Math.min(300, typeof window !== "undefined" ? window.innerWidth * 0.85 : 300),
          background: "rgba(10,31,5,0.98)", backdropFilter: "blur(20px)",
          zIndex: 999, padding: "72px 28px 40px",
          display: "flex", flexDirection: "column", gap: 4,
          borderLeft: "1px solid rgba(93,143,68,0.2)", overflowY: "auto",
        }}
      >
        {/* logo inside drawer */}
        <div style={{ marginBottom: 24 }}>
          <img
            src="./logo.png"
            alt="Aryan Properties"
            style={{ height: 36, width: "auto", objectFit: "contain", filter: "brightness(1.05)" }}
          />
        </div>

        {NAV_LINKS.map(({ label, to }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: menuOpen ? 1 : 0, x: menuOpen ? 0 : 20 }}
            transition={{ delay: i * 0.07 }}
          >
            <Link
              to={to}
              onClick={() => setMenuOpen(false)}
              className={isActive(to) ? "mobile-link-active" : ""}
              style={{
                display: "block",
                fontSize: 22, fontFamily: "'Cormorant Garamond', serif", fontWeight: 500,
                color: isActive(to) ? COLORS.green : "#fff",
                textDecoration: "none",
                padding: "13px 0",
                paddingLeft: isActive(to) ? 12 : 0,
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                borderLeft: isActive(to) ? `2.5px solid ${COLORS.green}` : "2.5px solid transparent",
                transition: "all 0.2s",
              }}
            >
              {label}
            </Link>
          </motion.div>
        ))}

        <Link to="/contact" onClick={() => setMenuOpen(false)}>
          <button style={{
            marginTop: 28, background: COLORS.green, color: "#fff", border: "none",
            borderRadius: 12, padding: "15px", fontSize: 11, letterSpacing: "0.2em",
            textTransform: "uppercase", fontFamily: "Jost, sans-serif", fontWeight: 600,
            cursor: "pointer", width: "100%",
          }}>
            Book a Site Visit
          </button>
        </Link>

        <div style={{
          marginTop: "auto", fontSize: 12, color: "rgba(255,255,255,0.3)",
          fontFamily: "Jost, sans-serif", paddingTop: 24,
        }}>
          099534 44307
        </div>
      </div>

      {/* ── Backdrop ── */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{ position: "fixed", inset: 0, zIndex: 998, background: "rgba(0,0,0,0.4)" }}
        />
      )}
    </>
  );
};

export default Navbar;