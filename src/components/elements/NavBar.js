import React, { useRef, useState } from "react";
import MenuItem from "./MenuItem";
import Resume from "../../resume.json";

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const menuButton = useRef(null);

  function closeOnEscape(event) {
    if (event.key === "Escape" && showMenu) {
      setShowMenu(false);
      menuButton.current.focus();
    }
  }

  return (
    <nav className="navbar portfolio-nav" aria-label="Main navigation" onKeyDown={closeOnEscape}>
      <div className="container">
        <div className="navbar-brand">
          <a href="/" className="navbar-item portfolio-name">{Resume.basics.name}</a>
          <button
            ref={menuButton}
            type="button"
            className={`navbar-burger burger${showMenu ? " is-active" : ""}`}
            aria-label="Toggle navigation"
            aria-controls="portfolio-menu"
            aria-expanded={showMenu}
            onClick={() => setShowMenu(!showMenu)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
        <div id="portfolio-menu" className={`navbar-menu${showMenu ? " is-active" : ""}`}>
          <div className="navbar-end">
            <MenuItem text="About" href="#aboutMe" onClick={() => setShowMenu(false)} />
            <MenuItem text="Experience" href="#experience" onClick={() => setShowMenu(false)} />
            <MenuItem text="Community & Speaking" href="#community" onClick={() => setShowMenu(false)} />
            <MenuItem text="Articles" href="#articles" onClick={() => setShowMenu(false)} />
            <MenuItem text="Certifications" href="#certifications" onClick={() => setShowMenu(false)} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
