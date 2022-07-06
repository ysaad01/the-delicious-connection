import React from "react";
import { Link } from "react-router-dom";

import Auth from "../utils/auth";

import SearchLocation from "./AddLoc";

const Landing = () => {
  return (
    <div>
      <h1>TEST</h1>
      <div className="page-container">
        {Auth.loggedIn() ? (
          <>
            <SearchLocation />
          </>
        ) : (
          <>
            <Link to="/" />
          </>
        )}
      </div>
    </div>
  );
};

export default Landing;
