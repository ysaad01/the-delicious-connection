import React from "react";

import Auth from "../utils/auth";

import Carousel from "../components/Carousel1";
import About from "../components/About";
import SearchLocation from "./SearchLoc";

import Typewriter from "typewriter-effect";
// import { onInit } from "typewriter-effect"
// import { useEffect, useRef } from "react";


const Landing = () => {
  // const feeling = useRef();

  // useEffect(() => {
  //   onInit(feeling.current, {
  //     showCursor: true,
  //     backDelay: 1500,
  //     backSpeed: 60,
  //     strings: ["leader", "passionate team member", "dedicated worker"],
  //   });
  // }, []);

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
                <h4>
                  We've helped these&nbsp;
                  <Typewriter
                    options={{
                      strings: ["hangry", "indecisive", "picky", "hesitant"],
                      autoStart: true,
                      loop: true,
                    }}
                    onInit={(typewriter) => {
                      typewriter.start();
                    }}
                  />
                  people
                </h4>
                <Carousel />
                <h5>lets help you too</h5>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Landing;
