import React from "react";
import { Carousel } from "react-bootstrap";
import ControlledCarousel from "../components/Carousel";
import Auth from "../utils/auth";

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
