import React from "react";
import Resume from "../../resume.json";

function AboutMe() {
  return (
    <section className="section about-section" id="aboutMe" aria-labelledby="about-title">
      <div className="container">
        <div className="portfolio-section-intro">
          <div>
            <h2 className="title" id="about-title">About</h2>
            <p>{Resume.basics.summary}</p>
          </div>
          <a className="portfolio-text-link" href="#skills">View technical skills <span aria-hidden="true">↓</span></a>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
