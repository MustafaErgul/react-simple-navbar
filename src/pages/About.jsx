// pages/Home.js

import React from "react";
import imag from "../../public/images/apple.png";

const About = () => (
  <div>
    <h1 className="title">This is the About Page</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida,
      risus at dapibus aliquet, elit quam scelerisque tortor, nec accumsan eros
      nulla interdum justo. Pellentesque dignissim, sapien et congue rutrum,
      lorem tortor dapibus turpis, sit amet vestibulum eros mi et odio.
    </p>
    <img src={imag} alt="asd" />
  </div>
);

export default About;
