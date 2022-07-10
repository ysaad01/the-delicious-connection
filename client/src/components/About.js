import React from "react";
import Typewriter from "typewriter-effect";

const About = () => {
  return (
    <section className="about">
      <h2>Why the Delicious Connection?</h2>
      <p>
        When deciding where to eat, the most annoying response is "I don't
        know." We've all experienced it, but have no fear! The Delicious
        Connection is here!
      </p>

      <h3>What is the Delicious Connection</h3>
      <p>
        The Delicious Connection is a random restaurant generator utilizing
        Yelp's API to allow us to suggest a restaurant on the most indecisive
        evenings.
      </p>
      <p>
        The generator will take your search location into account along with the
        price range and distance you want to search in. The generator will
        provide the Yelp profile for the restaurant, so that you can view the
        information and reviews before deciding to make your Delicious
        Connection
      </p>
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
    </section>
  );
};

export default About;
