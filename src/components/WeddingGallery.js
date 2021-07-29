import React from "react";
import "../css/WeddingGallery.css";
import "../css/service.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import HomeGalleryImages from "./HomeGalleryImages";
import { SRLWrapper } from "simple-react-lightbox";
import Footer from "./Footer";
import Fade from "react-reveal/Fade";

function WeddingGallery({ urls, heading, imgSrc, p1, p2 }) {
  const options = {
    buttons: {
      backgroundColor: "transparent",
      showDownloadButton: false,
    },
  };


  return (
    <div className="wgallery px-4">
      <p className="service_p">services</p>
      <Fade bottom>
        <h1 className="service_heading">{heading}</h1>
        <div className="wg_img_div">
          <img className="wg_img" src={imgSrc} />
        </div>
      </Fade>
      <Fade bottom>
        <p className="wg_p1">{p1}</p>
      </Fade>
      <Fade bottom>
        <p className="wg_p2">{p2}</p>
      </Fade>
      <SRLWrapper options={options}>
        <div className="container-fluid">
          <div className="row g-4">
            {urls.map((val, ind) => {
              return (
                <HomeGalleryImages key={ind} del={ind * 200} url={val.url} />
              );
            })}
          </div>
        </div>
      </SRLWrapper>
      <Footer />
    </div>
  );
}

export default WeddingGallery;
