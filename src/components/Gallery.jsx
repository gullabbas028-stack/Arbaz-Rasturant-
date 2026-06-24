import React, { useState } from "react";
import { galleryImages } from "../data/data";
import "./Gallery.css";

export default function Gallery() {
  const [activeImg, setActiveImg] = useState(null);

  return (
    <section id="gallery" className="gallery">
      <div className="gallery-header">
        <span className="section-label">Our Story in Pictures</span>
        <h2 className="gallery-heading">
          A Feast for <em>Every Sense</em>
        </h2>
        <div className="gold-line" style={{ margin: "1.5rem auto" }} />
      </div>

      {/* Masonry Grid */}
      <div className="gallery-grid">
        {galleryImages.map((img, i) => (
          <div
            key={img.id}
            className={`gallery-item gi-${i + 1}`}
            onClick={() => setActiveImg(img)}
          >
            <img src={img.src} alt={img.alt} loading="lazy" />
            <div className="gallery-item-overlay">
              <p>{img.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {activeImg && (
        <div className="lightbox" onClick={() => setActiveImg(null)}>
          <button className="lightbox-close" onClick={() => setActiveImg(null)}>✕</button>
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <img src={activeImg.src} alt={activeImg.alt} />
            <p className="lightbox-caption">{activeImg.caption}</p>
          </div>
        </div>
      )}
    </section>
  );
}
