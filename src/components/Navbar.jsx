import React, { useState, useEffect } from "react";
import { siteConfig, navLinks } from "../data/data";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLink = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        {/* Logo */}
        <a href="#hero" className="nav-logo" onClick={(e) => handleLink(e, "#hero")}>
          <span className="logo-main">{siteConfig.name.split(" ")[0]}</span>
          <span className="logo-sub">{siteConfig.name.split(" ").slice(1).join(" ")}</span>
        </a>

        {/* Desktop Links */}
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} onClick={(e) => handleLink(e, link.href)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href={siteConfig.orderLink} target="_blank" rel="noreferrer" className="nav-cta">
          Order Now
        </a>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} onClick={(e) => handleLink(e, link.href)}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href={siteConfig.orderLink} target="_blank" rel="noreferrer" className="mobile-cta">
              Order Now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
