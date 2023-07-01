import React from "react";
import "./NavBar.css";
import NavLinks from "./NavLinks";

function NavBar() {
  return (
    <div className="main-header">
      <nav>
        <NavLinks />
      </nav>
    </div>
  );
}

export default NavBar;
