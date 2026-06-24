import React, { useState } from "react";
import { cuisineCategories } from "../data/data";
import "./CuisineGrid.css";

export default function CuisineGrid() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="menu" className="cuisine">
      <div className="cuisine-header">
        <span className="section-label">Our Cuisines</span>
        <h2 className="cuisine-heading">
          We've Got Something <br />
          <em>For Everyone</em>
        </h2>
        <div className="gold-line" style={{ margin: "1.5rem auto" }} />
        <p className="cuisine-subtext">
          From the aromatic spices of the subcontinent to the refined elegance of continental fare — 
          explore a world of flavors under one roof.
        </p>
      </div>

      <div className="cuisine-grid">
        {cuisineCategories.map((item) => (
          <div
            key={item.id}
            className={`cuisine-card ${hovered === item.id ? "active" : ""}`}
            onMouseEnter={() => setHovered(item.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="cuisine-img-wrap">
              <img src={item.image} alt={item.name} loading="lazy" />
            </div>
            <div className="cuisine-info">
              <span className="cuisine-name">{item.name}</span>
              <span className="cuisine-desc">{item.description}</span>
              <div className="cuisine-line" />
            </div>
          </div>
        ))}
      </div>

      <div className="cuisine-cta">
        <p>Where taste meets the myth</p>
        <a href="#contact" className="btn-primary" onClick={(e) => {
          e.preventDefault();
          document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
        }}>
          Reserve a Table
        </a>
      </div>
    </section>
  );
}
