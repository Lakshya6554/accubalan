import React from "react";
import Common from "./common";
import web2 from "../src/image/2.svg";

const About = () => {
  return (
    <Common
      name="Welcome to"
      title="Accubalance"
      subtitle="Our software has been designed to help small businesses and entrepreneurs stay on top of their finances. With our software, you can easily keep track of your 

      "
      imgsrc={web2}
      visit="/contact"
      btname="Contact us"
    ></Common>
  );
};

export default About;
