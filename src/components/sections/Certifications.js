import React from "react";
import CredlyBadge from "../elements/CredlyBadge";
import Resume from "../../resume.json";

function Certifications() {
  return (
    <section className="section" id="certifications" aria-labelledby="certifications-title">
      <div className="container">
        <h2 className="title" id="certifications-title">Certifications</h2>
        <ul className="certification-grid">
          {Resume.certificates.map((cert) => (
            <li key={cert.url}>
              <CredlyBadge
                imageName={cert.x_imageName}
                badgeId={cert.x_badgeId}
                badgeName={cert.name + " by " + cert.issuer}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Certifications;
