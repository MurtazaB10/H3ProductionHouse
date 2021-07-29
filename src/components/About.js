import React from "react";
import Footer from "./Footer";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../css/about.css";
import Fade from "react-reveal/Fade";

function About() {
  return (
    <div className="about px-4">
      <Fade top>
        <h2 className="about_title">About Us</h2>
      </Fade>
      <Fade bottom>
        <p className="ap">founder</p>
        <img src="img/2.jpg" alt="my-pic" className="about_img" />
      </Fade>
      <Fade bottom>
        <p className="about_p text-uppercase">photographer</p>
      </Fade>
      <Fade bottom>
        <h2 className="about_h2">h3 production house</h2>
      </Fade>
      <Fade bottom>
        <p className="about_p mt-4">
          Hozefa Kanchwala ( Jeff ). We are based in Mumbai, Maharashtra. We
          have been doing photography since 2015. We are team of professionals
          that comes with traditional photographer, traditional videographer,
          portrait photographer, cinematographer, drone specialist, post
          production team.
        </p>
      </Fade>
      <Fade bottom>
        <p className="about_p">
          The work which we are doing it comes with alot of fun, enjoyment and
          we are passionate about our work. We have worked with number of
          clients that they are now a part of our family.
        </p>
      </Fade>
      <Fade bottom>
        <p className="about_p">
          After working passionately with so many people, now we are ready with
          a professional crew members who can really memorize your wedding with
          alot of fun. Our crew's moral discipline includes customer
          satisfaction which is our sole aim to achieve. One and only H3
          Production House "Make your wedding a wonderful story"
        </p>
      </Fade>
      <Footer />
    </div>
  );
}

export default About;
