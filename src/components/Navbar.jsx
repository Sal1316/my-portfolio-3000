import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../Styles/Navbar.css";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false); // determins wheather or not we expanded the navbar or not.
  const location = useLocation(); // gets info on which routes you are in.

  useEffect(() => {
    // run only when location variable changes. Basically, we only want it to run when the hamburger links have been clicked, so the hamburger disapears.
    setExpandNavbar(false);
  }, [location]);

  return (
    <div
      id={expandNavbar ? "openHamburger" : "closedHanburger"}
      className="navbar"
    >
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          {/* swithches state to its opposite. */}
          <FaBars />
        </button>
      </div>
      <div className="links">
        <Link to="/home">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/about">About Me</Link>
        <Link to="/contact">Contact Info</Link>
      </div>
    </div>
  );
}

export default Navbar;
