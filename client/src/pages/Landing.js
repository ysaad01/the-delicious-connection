import React from "react";

import Auth from "../utils/auth";

import Carousel from "../components/Carousel";
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
          <div id="overlap">
          <h1>We've helped these hangry people</h1>
            <Carousel />
          <h2>lets help you too</h2>
          </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Landing;
