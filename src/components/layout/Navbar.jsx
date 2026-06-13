// Navbar.jsx - Aryan Properties

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const GREEN      = "#5d8f44";
const GREEN_DARK = "#3a6b25";

const NAV_LINKS = [
  { label: "Home",       to: "/"           },
  { label: "About",      to: "/about"      },
  { label: "Properties", to: "/properties" },
  { label: "Services",   to: "/services"   },
  { label: "Blogs",      to: "/blog"       },
  { label: "Gallery",    to: "/gallery"    },
  { label: "Contact",    to: "/contact"    },
];

const useScrolled = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return scrolled;
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled  = useScrolled();
  const location  = useLocation();

  /* close drawer on route change */
  useEffect(() => setMenuOpen(false), [location.pathname]);

  /* lock body scroll when drawer open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isActive = (to) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  /* ── shared nav background ── */
  const navBg = scrolled
    ? "rgba(8,24,4,0.97)"
    : "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 100%)";

  return (
    <>
      {/* ═══════════════════ NAVBAR ═══════════════════ */}
      <nav
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 1000,
          background: navBg,
          backdropFilter: scrolled ? "blur(18px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(93,143,68,0.18)" : "none",
          transition: "background 0.35s, border-color 0.35s",
        }}
      >
        {/* inner row */}
        <div
          style={{
            maxWidth: 1380,
            margin: "0 auto",
            padding: "0 24px",
            height: 88,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          {/* ── LOGO ── */}
          <Link
            to="/"
            style={{ textDecoration: "none", flexShrink: 0, display: "flex", alignItems: "center" }}
          >
            <img
              src="./logo.png"
              alt="Aryan Properties"
              style={{
                height: 72,
                width: "auto",
                objectFit: "contain",
                display: "block",
                /* white glow so logo pops on any bg */
                filter: "brightness(1.15) drop-shadow(0 0 6px rgba(255,255,255,0.25)) drop-shadow(0 0 14px rgba(93,143,68,0.4))",
              }}
            />
          </Link>

          {/* ── DESKTOP LINKS (≥ 1100px) ── */}
          <div
            className="desktop-nav"
            style={{ display: "flex", alignItems: "center", gap: 28, flexShrink: 0 }}
          >
            {NAV_LINKS.map(({ label, to }) => {
              const active = isActive(to);
              return (
                <Link
                  key={label}
                  to={to}
                  style={{
                    position: "relative",
                    textDecoration: "none",
                    fontSize: 10,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    fontFamily: "Jost, sans-serif",
                    fontWeight: 600,
                    color: active ? GREEN : "rgba(255,255,255,0.82)",
                    paddingBottom: 4,
                    whiteSpace: "nowrap",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={e => { if (!active) e.currentTarget.style.color = GREEN; }}
                  onMouseLeave={e => { if (!active) e.currentTarget.style.color = "rgba(255,255,255,0.82)"; }}
                >
                  {label}
                  {/* underline */}
                  <span
                    style={{
                      position: "absolute",
                      left: 0, bottom: 0,
                      width: "100%", height: 1.5,
                      background: GREEN,
                      transform: active ? "scaleX(1)" : "scaleX(0)",
                      transformOrigin: "left",
                      transition: "transform 0.25s ease",
                    }}
                  />
                </Link>
              );
            })}

            {/* Book Visit CTA */}
            <Link to="/contact" style={{ textDecoration: "none", flexShrink: 0 }}>
              <button
                style={{
                  background: GREEN,
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  padding: "10px 20px",
                  fontSize: 10,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  fontFamily: "Jost, sans-serif",
                  fontWeight: 700,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "background 0.2s, transform 0.15s",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = GREEN_DARK; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = GREEN;      e.currentTarget.style.transform = "translateY(0)"; }}
              >
                Book Visit
              </button>
            </Link>
          </div>

          {/* ── HAMBURGER (< 1100px) ── */}
          <button
            className="hamburger-btn"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
            style={{
              background: menuOpen ? "rgba(93,143,68,0.15)" : "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 8,
              padding: "9px 10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#fff",
              flexShrink: 0,
              transition: "background 0.2s",
            }}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* ═══════════════════ MOBILE DRAWER ═══════════════════ */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMenuOpen(false)}
              style={{
                position: "fixed", inset: 0,
                zIndex: 998,
                background: "rgba(0,0,0,0.5)",
              }}
            />

            {/* drawer panel */}
            <motion.aside
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.32, ease: [0.32, 0, 0.17, 1] }}
              style={{
                position: "fixed",
                top: 0, right: 0, bottom: 0,
                width: "min(300px, 85vw)",
                background: "rgba(8,24,4,0.99)",
                backdropFilter: "blur(24px)",
                zIndex: 999,
                borderLeft: "1px solid rgba(93,143,68,0.22)",
                display: "flex",
                flexDirection: "column",
                overflowY: "auto",
                padding: "0 0 32px",
              }}
            >
              {/* drawer header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "18px 24px",
                  borderBottom: "1px solid rgba(93,143,68,0.15)",
                }}
              >
                <img
                  src="./logo.png"
                  alt="Aryan Properties"
                  style={{
                    height: 52, width: "auto", objectFit: "contain",
                    filter: "brightness(1.1) drop-shadow(0 0 6px rgba(93,143,68,0.3))",
                  }}
                />
                <button
                  onClick={() => setMenuOpen(false)}
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: 8, padding: "7px 8px",
                    cursor: "pointer", color: "#fff",
                    display: "flex", alignItems: "center",
                  }}
                >
                  <X size={18} />
                </button>
              </div>

              {/* links */}
              <nav style={{ padding: "12px 24px", flex: 1 }}>
                {NAV_LINKS.map(({ label, to }, i) => {
                  const active = isActive(to);
                  return (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, x: 18 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.045, duration: 0.3 }}
                    >
                      <Link
                        to={to}
                        onClick={() => setMenuOpen(false)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                          padding: "13px 0",
                          borderBottom: "1px solid rgba(255,255,255,0.05)",
                          textDecoration: "none",
                          color: active ? GREEN : "rgba(255,255,255,0.8)",
                          fontSize: 20,
                          fontFamily: "'Cormorant Garamond', serif",
                          fontWeight: 500,
                          letterSpacing: "0.03em",
                          transition: "color 0.2s",
                        }}
                      >
                        {/* active indicator */}
                        <span
                          style={{
                            width: 3, height: 18,
                            borderRadius: 2,
                            background: active ? GREEN : "transparent",
                            flexShrink: 0,
                            transition: "background 0.2s",
                          }}
                        />
                        {label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* drawer footer */}
              <div style={{ padding: "0 24px" }}>
                <Link to="/contact" onClick={() => setMenuOpen(false)} style={{ textDecoration: "none" }}>
                  <button
                    style={{
                      width: "100%",
                      background: GREEN,
                      color: "#fff",
                      border: "none",
                      borderRadius: 12,
                      padding: "14px",
                      fontSize: 11,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      fontFamily: "Jost, sans-serif",
                      fontWeight: 700,
                      cursor: "pointer",
                      marginBottom: 16,
                    }}
                  >
                    Book a Site Visit
                  </button>
                </Link>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: 12,
                    color: "rgba(255,255,255,0.35)",
                    fontFamily: "Jost, sans-serif",
                  }}
                >
                  <Phone size={12} color={GREEN} />
                  099534 44307
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* ── responsive toggle CSS ── */}
      <style>{`
        .desktop-nav  { display: flex !important; }
        .hamburger-btn { display: none !important; }

        @media (max-width: 1099px) {
          .desktop-nav   { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}