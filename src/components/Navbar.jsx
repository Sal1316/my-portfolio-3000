import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/Navbar.css";
import ReorderIcon from "@mui/material/Drawer";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false); // determins wheather or not we expanded the navbar or not.
  return (
    <div className="navbar">
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          {/* swithches state to its opposite. */}
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
}

export default Navbar;
