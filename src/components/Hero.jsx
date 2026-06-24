import React, { useRef, useState } from "react";
import { siteConfig, heroVideo } from "../data/data";
import "./Hero.css";

export default function Hero() {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    setMuted((m) => {
      videoRef.current.muted = !m;
      return !m;
    });
  };

  const scrollDown = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="hero">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="hero-video"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="hero-overlay" />

      {/* Content */}
      <div className="hero-content">
        <span className="section-label">{siteConfig.tagline}</span>
        <h1 className="hero-title">
          <span className="hero-title-sub">{siteConfig.subtitle}</span>
          <span className="hero-name">{siteConfig.name}</span>
        </h1>
        <p className="hero-desc">{siteConfig.description}</p>
        <div className="hero-actions">
          <a href={siteConfig.orderLink} target="_blank" rel="noreferrer" className="btn-primary">
            Order Now
          </a>
          <button className="btn-ghost" onClick={scrollDown}>
            Explore Menu
          </button>
        </div>
      </div>

      {/* Mute toggle */}
      <button className="mute-btn" onClick={toggleMute} aria-label="Toggle audio">
        {muted ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
            <line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
          </svg>
        )}
        <span>{muted ? "Unmute" : "Mute"}</span>
      </button>

      {/* Scroll indicator */}
      <div className="scroll-indicator" onClick={scrollDown}>
        <div className="scroll-dot" />
      </div>
    </section>
  );
}
