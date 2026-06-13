import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Phone, Mail, Globe, Clock } from "lucide-react";

const COLORS = {
  bg: "#0f1a0d",
  bgSurface: "#162213",
  green: "#5d8f44",
  greenLight: "#7ab85a",
  text: "rgba(255,255,255,0.5)",
  textHover: "rgba(255,255,255,0.85)",
  border: "rgba(93,143,68,0.15)",
};

const FooterLink = ({ to, children }) => (
  <li>
    <Link
      to={to}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        fontSize: 13,
        fontFamily: "Jost, sans-serif",
        fontWeight: 300,
        color: COLORS.text,
        textDecoration: "none",
        letterSpacing: "0.02em",
        transition: "color 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.textHover)}
      onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.text)}
    >
      <ArrowRight size={9} style={{ color: COLORS.green, flexShrink: 0 }} />
      {children}
    </Link>
  </li>
);

const ColHeading = ({ children }) => (
  <div style={{
    fontSize: 9,
    letterSpacing: "0.35em",
    textTransform: "uppercase",
    fontFamily: "Jost, sans-serif",
    fontWeight: 600,
    color: COLORS.greenLight,
    marginBottom: 16,
  }}>
    {children}
  </div>
);

const Footer = () => {
  return (
    <footer style={{
      background: COLORS.bg,
      color: "#fff",
      position: "relative",
      overflow: "hidden",
      borderTop: `1px solid ${COLORS.border}`,
    }}>
      <style>{`
        .footer-watermark {
          position: absolute;
          top: 65%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: clamp(28px, 8vw, 140px);
          font-family: 'Jost', sans-serif;
          font-weight: 700;
          color: rgba(93,143,68,0.05);
          white-space: nowrap;
          pointer-events: none;
          z-index: 0;
          letter-spacing: 0.05em;
        }
        .footer-inner {
          position: relative;
          z-index: 1;
          max-width: 1380px;
          margin: 0 auto;
          padding: clamp(36px, 5vw, 64px) clamp(16px, 4vw, 40px) clamp(20px, 3vw, 36px);
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 48px;
          padding-bottom: 40px;
          border-bottom: 1px solid rgba(93,143,68,0.12);
          margin-bottom: 24px;
        }

        /* Tablet: 640–1023px */
        @media (max-width: 1023px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 32px 24px;
          }
          .footer-brand {
            grid-column: 1 / -1;
          }
          /* side-by-side contact info on tablet */
          .footer-contact-list {
            display: grid !important;
            grid-template-columns: 1fr 1fr;
            gap: 12px 24px;
          }
        }

        /* Mobile: <640px */
        @media (max-width: 639px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 24px 16px;
          }
          .footer-brand {
            grid-column: 1 / -1;
          }
          .footer-links-cols {
            grid-column: 1 / -1;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 24px 16px;
          }
          .footer-contact-list {
            display: flex !important;
            flex-direction: column;
            gap: 12px;
          }
          .footer-bottom {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 6px;
          }
          .footer-watermark {
            font-size: clamp(20px, 7vw, 60px);
          }
        }

        .logo-wrap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(93,143,68,0.06);
          border: 1px solid rgba(93,143,68,0.2);
          padding: 10px 14px;
          margin-bottom: 18px;
        }
        .logo-wrap img {
          height: clamp(44px, 6vw, 72px);
          width: auto;
          max-width: 200px;
          object-fit: contain;
          display: block;
          filter: brightness(1.1) contrast(1.05);
        }
        .contact-icon-box {
          width: 26px;
          height: 26px;
          min-width: 26px;
          border: 1px solid rgba(93,143,68,0.25);
          background: rgba(93,143,68,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
        }
        .footer-link-col ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 11px;
        }
      `}</style>

      <div className="footer-watermark">ARYAN PROPERTIES</div>

      <div className="footer-inner">
        <div className="footer-grid">

          {/* ── Brand column ── */}
          <div className="footer-brand">
            <div className="logo-wrap">
              <img src="/logo.png" alt="Aryan Properties" />
            </div>

            <p style={{
              fontSize: 13, fontFamily: "Jost, sans-serif", fontWeight: 300,
              color: "rgba(255,255,255,0.4)", lineHeight: 1.85,
              maxWidth: 300, marginBottom: 20,
            }}>
              Turning Your Dream Home Into Reality. Trusted real estate consultants
              in Noida specialising in residential &amp; commercial properties.
            </p>

            <div
              className="footer-contact-list"
              style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 20 }}
            >
              {[
                { Icon: MapPin, text: "Shop No-16, VDS Market, Sector 110, Noida, UP 201304" },
                { Icon: Phone,  text: "099534 44307",             href: "tel:+910995344307" },
                { Icon: Mail,   text: "info@aryanproperties.com", href: "mailto:info@aryanproperties.com" },
                { Icon: Globe,  text: "www.aryanproperties.com",  href: "https://www.aryanproperties.com" },
                { Icon: Clock,  text: "Open · Closes 7 pm  |  Mon – Sat" },
              ].map(({ Icon, text, href }) => (
                <div key={text} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <div className="contact-icon-box">
                    <Icon size={11} style={{ color: COLORS.green }} />
                  </div>
                  {href ? (
                    <a href={href} style={{
                      fontSize: 12, fontFamily: "Jost, sans-serif", fontWeight: 300,
                      color: "rgba(255,255,255,0.45)", textDecoration: "none",
                      letterSpacing: "0.02em", transition: "color 0.2s",
                      paddingTop: 4, lineHeight: 1.5, wordBreak: "break-word",
                    }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
                    >{text}</a>
                  ) : (
                    <span style={{
                      fontSize: 12, fontFamily: "Jost, sans-serif", fontWeight: 300,
                      color: "rgba(255,255,255,0.45)", lineHeight: 1.5,
                      paddingTop: 4, wordBreak: "break-word",
                    }}>{text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ── Properties ── */}
          <div className="footer-link-col">
            <ColHeading>Properties</ColHeading>
            <ul>
              {["Aranya Farmhouses", "Shivalik Crown Villa", "Nirvana Greens Farmhouse", "Magnolia Grand Villa"].map(item => (
                <FooterLink key={item} to="/properties">{item}</FooterLink>
              ))}
            </ul>
          </div>

          {/* ── Services ── */}
          <div className="footer-link-col">
            <ColHeading>Services</ColHeading>
            <ul>
              {["Buy Property", "Sell Property", "Rent / Lease", "Book Project", "Legal Support"].map(item => (
                <FooterLink key={item} to="/services">{item}</FooterLink>
              ))}
            </ul>
          </div>

          {/* ── Company ── */}
          <div className="footer-link-col">
            <ColHeading>Company</ColHeading>
            <ul>
              {[["About Us", "/about"], ["Blog", "/blog"], ["Gallery", "/gallery"], ["Contact", "/contact"]].map(([label, to]) => (
                <FooterLink key={label} to={to}>{label}</FooterLink>
              ))}
            </ul>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div
          className="footer-bottom"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          <span style={{
            fontSize: 11, fontFamily: "Jost, sans-serif", fontWeight: 300,
            color: "rgba(255,255,255,0.2)",
          }}>
            © 2026 Aryan Properties. All rights reserved.
          </span>
          <a
            href="https://deboxtechnology.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 11, fontFamily: "Jost, sans-serif", fontWeight: 300,
              color: "rgba(255,255,255,0.2)", textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.2)")}
          >
            DEVELOPED BY DEBOX TECHNOLOGY
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;