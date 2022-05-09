import React from "react";
import "./Navbar.css";
import mulearn from "./mulearn.png";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg fixed-top navbar-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="https://mulearn.org">
          <img class="mulearn-logo" src={mulearn} alt="" />
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="navbar-styles collapse navbar-collapse"
          id="navbarNavDropdown"
        >
          <div class="navbar-dropdowns">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Program
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a class="dropdown-item" href="https://yip.mulearn.org">
                      YIP
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="https://mulearn.org/events">
                      Events
                    </a>
                  </li>
                </ul>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link"
                  href="https://atfg.gtechindia.org/participate/"
                >
                  Participate
                </a>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link" href="https://mulearn.org/careers/">
                  {" "}
                  Careers{" "}
                </a>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a class="dropdown-item" href="https://mulearn.org/team">
                      Our Team
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div class="nav-barbtn">
            <a href="https://discord.com/invite/Jt7sv3chZP">
              <button class="join-discord">Join Discord Server</button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
