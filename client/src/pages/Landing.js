import React from "react";

import Auth from "../utils/auth";

import ControlledCarousel from "../components/ControlledCarousel";
import SearchLocation from "./AddLoc";

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
            <ControlledCarousel />
          </>
        )}
      </div>
    </div>
  );
};

export default Landing;
