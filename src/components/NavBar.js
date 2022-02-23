import React from "react";
import Time from "./Time";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-horizontal navbar-expand-lg navbar-dark bg-dark">
        <div className="navbar-brand mx-3" >
          Web Developer Assessment Task
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-default"
          aria-controls="navbar-default"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar-default">
          <div className="navbar-collapse-header">
            <div className="row">
              <div className="col-6 collapse-close">
                <button
                  type="button"
                  className="navbar-toggler"
                  data-toggle="collapse"
                  data-target="#navbar-default"
                  aria-controls="navbar-default"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
    
          <ul className="navbar-nav ml-lg-auto"> </ul>
          <div className="hdate mx-3" >   <Time/>    </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
