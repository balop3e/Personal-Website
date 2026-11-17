import React from "react";
import AboutMe from "../sections/AboutMe";
import Skills from "../sections/Skills";
import Certifications from "../sections/Certifications";
import Experience from "../sections/Experience";
import Community from "../sections/Community";
import Articles from "../sections/Articles";

function Content() {
  return (
    <main id="main-content">
      <AboutMe />
      <Experience />
      <Community />
      <Articles />
      <Skills />
      <Certifications />
    </main>
  );
}

export default Content;
