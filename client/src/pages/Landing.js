import React from "react";

import Auth from "../utils/auth";

import Carousel from "../components/Carousel1";
import About from "../components/About";
import SearchLocation from "./SearchLoc";

const Landing = () => {
  return (
    <div>
      <div>
        {Auth.loggedIn() ? (
          <>
            <SearchLocation />
          </>
        ) : (
          <>
            <div className="d-flex justify-content-center">
              <div
                id="overlap"
                style={{ display: "block", width: 700, padding: 30 }}
              >
                <About />
                <h2>We've helped these hangry people</h2>
                <Carousel />
                <h3>lets help you too</h3>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Landing;
