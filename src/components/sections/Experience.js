import React from "react";
import Resume from "../../resume.json";

const workHighlights = [
  {
    title: "Azure & Kubernetes platforms",
    description: "Operate multi-cluster AKS environments and standardise Azure provisioning and release workflows with Terraform, Bicep and reusable Azure DevOps templates.",
  },
  {
    title: "AI platform delivery",
    description: "Design Azure infrastructure and release workflows for containerised AI services, with Microsoft Foundry, Entra ID and Key Vault supporting the delivery architecture.",
  },
  {
    title: "AI-assisted release governance",
    description: "Built a reusable GitHub Actions workflow and Python policy checks for release evidence. Designed a Microsoft Foundry agent to advise reviewers while people retain deployment approval.",
  },
];

function Experience() {
  return (
    <section className="section experience-section" id="experience" aria-labelledby="experience-title">
      <div className="container">
        <h2 className="title" id="experience-title">Experience</h2>
        <h3 className="portfolio-subheading">Selected engineering work</h3>
        <div className="portfolio-card-grid">
          {workHighlights.map(({ title, description }) => (
            <article className="portfolio-card" key={title}>
              <h4>{title}</h4>
              <p>{description}</p>
            </article>
          ))}
        </div>
        <h3 className="portfolio-subheading career-heading">Career history</h3>
        <div className="career-list">
          {Resume.work.map(({ company, position, period, summary }) => (
            <article className="career-row" key={company}>
              <div>
                <p className="portfolio-kicker">{period}</p>
                <h4>{position}</h4>
                <p>{company}</p>
              </div>
              <p>{summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
