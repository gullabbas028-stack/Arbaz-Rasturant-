import React from "react";
import { secondVideo } from "../data/data";
import "./VideoSection.css";

export default function VideoSection() {
  return (
    <section className="video-section">
      <div className="vs-inner">
        <div className="vs-text">
          <span className="section-label">The Arbaz Experience</span>
          <h2>
            More Flavor, <br />
            <em>Less Compromise</em>
          </h2>
          <div className="gold-line" />
          <p>
            We believe that exceptional taste should never come at the cost of quality. 
            At Zaika, we source the finest ingredients, craft authentic recipes, and serve 
            every dish with the care it deserves.
          </p>
          <ul className="vs-list">
            <li>
              <span className="vs-icon">✦</span>
              Premium quality ingredients
            </li>
            <li>
              <span className="vs-icon">✦</span>
              Authentic traditional recipes
            </li>
            <li>
              <span className="vs-icon">✦</span>
              Crafted with love, every time
            </li>
          </ul>
        </div>

        <div className="vs-video-wrap">
          <video
            src={secondVideo}
            autoPlay
            loop
            muted
            playsInline
            className="vs-video"
          />
          <div className="vs-video-border" />
        </div>
      </div>
    </section>
  );
}
