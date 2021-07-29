import React from "react";
import Fade from "react-reveal/Fade";
import "../css/homegalleryimages.css";

function HomeGalleryImages(props) {
  return (
    <Fade bottom delay={props.del}>
      <div className="col-4 gallerycol">
        <a href={props.url}>
          <img className="homegallery_img" src={props.url} />
        </a>
      </div>
    </Fade>
  );
}

export default HomeGalleryImages;
