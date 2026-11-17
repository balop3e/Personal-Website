import React from "react";

const events = [
  {
    role: "Bootcamp co-organiser",
    date: "October 2026",
    title: "AI & DevOps Fundamentals Bootcamp",
    description: "Helped organise a month of free, hands-on learning in AI, cloud engineering and DevOps, with capstone projects that put the sessions into practice.",
    url: "https://mmaug.com/bootcamp",
    link: "Explore the bootcamp",
  },
  {
    role: "Speaker",
    date: "June 2026",
    title: "Microsoft Build //localhost: Luqa",
    description: "Joined the speaker lineup at Microsoft Malta for an in-person event on building and delivering AI applications with Microsoft Foundry and GitHub Copilot.",
    url: "https://reactor.microsoft.com/en-us/reactor/events/27088/",
    link: "View Microsoft Reactor event",
  },
  {
    role: "Speaker",
    date: "April 2026",
    title: "GitHub Copilot Dev Days Malta",
    description: "Presented GitHub agentic workflows, showing how AI agents can participate in GitHub workflows and support software delivery.",
    url: "https://mmaug-org.github.io/community-articles/articles/2026-04-17-github-copilot-dev-days-malta.html",
    link: "View event and resources",
  },
];

function Community() {
  return (
    <section className="section community-section" id="community" aria-labelledby="community-title">
      <div className="container">
        <div className="portfolio-section-intro">
          <div>
            <h2 className="title" id="community-title">Community &amp; Speaking</h2>
            <p>
              I co-founded and help organise the Malta Microsoft AI User Group (MMAUG).
              As a Microsoft Certified Trainer, I also teach and mentor on Azure, secure
              software delivery and AI-assisted development.
            </p>
          </div>
          <a className="portfolio-text-link" href="https://mmaug.com/events">
            Browse MMAUG events <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="portfolio-card-grid">
          {events.map(({ role, date, title, description, url, link }) => (
            <article className="portfolio-card community-card" key={title}>
              <p className="portfolio-kicker">{role} <span>· {date}</span></p>
              <h3>{title}</h3>
              <p>{description}</p>
              <a className="portfolio-text-link" href={url}>
                {link} <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Community;
