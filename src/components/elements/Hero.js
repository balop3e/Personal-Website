import React from "react";
import NavBar from "./NavBar";
import Resume from "../../resume.json";

function Hero() {
  return (
    <section className="hero portfolio-hero">
      <div className="hero-head">
        <NavBar />
      </div>
      <div className="hero-body">
        <div className="container portfolio-hero-layout">
          <div className="portfolio-hero-copy">
            <p className="portfolio-kicker">Azure · Kubernetes · AI DevSecOps</p>
            <h1>{Resume.basics.label}</h1>
            <p className="portfolio-hero-description">
              I build secure cloud platforms and delivery pipelines for enterprise
              applications and AI services.
            </p>
            <p className="portfolio-hero-meta">Microsoft Certified Trainer · MMAUG co-organiser · Malta</p>
            <div className="portfolio-actions">
              <a className="portfolio-button portfolio-button-primary" href="#experience">View my work</a>
              <a className="portfolio-button portfolio-button-secondary" href="#community">Community &amp; speaking</a>
            </div>
            <div className="portfolio-profiles" aria-label="Professional profiles">
              {Resume.basics.profiles.map(({ network, url }) => (
                <a key={network} href={url}>{network}</a>
              ))}
            </div>
          </div>
          <img
            className="portfolio-portrait"
            src={Resume.basics.picture}
            alt={Resume.basics.name}
            width="540"
            height="540"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
