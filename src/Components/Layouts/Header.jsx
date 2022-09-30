import React from "react";

function Header() {
  return (
    <div className="header">
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <a class="navbar-brand" href="/">
            <img src="https://safemoon.com/img/logo.svg" alt="" width="15% " />
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="hhhhh">
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">
                    <b className="para1">Home</b>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    <b className="para1">Our Team</b>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    <b className="para1">Swap</b>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">
                    <b className="para1">Products</b>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">
                    <b className="para1"> Merch</b>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">
                    <b className="para1">Partners</b>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">
                    <b className="para1">Markets</b>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">
                    <b className="para1">How to buy</b>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
