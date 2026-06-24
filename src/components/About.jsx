import React from "react";
import { siteConfig } from "../data/data";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-inner">
        <div className="about-text">
          <span className="section-label">Who We Are</span>
          <h2 className="about-heading">
            Where Taste <br />
            <em>Meets Tradition</em>
          </h2>
          <div className="gold-line" />
          <p>
            At {siteConfig.name}, every dish tells a story — of heritage, of passion, and of 
            the finest ingredients sourced from across Pakistan and beyond. We believe food is 
            more than sustenance; it's a celebration of culture and connection.
          </p>
          <p>
            From rich desi curries to expertly grilled steaks and delicate continental cuisine, 
            our chefs bring decades of experience and a relentless pursuit of flavor to every plate.
          </p>
          <div className="about-stats">
            <div className="stat">
              <span className="stat-num">30+</span>
              <span className="stat-label">Years of Heritage</span>
            </div>
            <div className="stat">
              <span className="stat-num">4</span>
              <span className="stat-label">Cuisine Styles</span>
            </div>
            <div className="stat">
              <span className="stat-num">100%</span>
              <span className="stat-label">Fresh Ingredients</span>
            </div>
          </div>
        </div>
        <div className="about-quote">
          <blockquote>
            "Life's too short for boring food."
          </blockquote>
          <p className="quote-sub">— The Arbaz Philosophy</p>
        </div>
      </div>
    </section>
  );
}
