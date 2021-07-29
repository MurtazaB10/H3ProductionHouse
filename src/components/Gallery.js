import React from "react";
import "../css/gallery.css";
import GalleryImages from "./GalleryImages";
import { Galleryurls } from "./HomeGalleryUrls";
import Footer from "./Footer";
import { SRLWrapper } from "simple-react-lightbox";
import Fade from "react-reveal/Fade";

function Gallery() {
  const options = {
    buttons: {
      backgroundColor: "transparent",
      showDownloadButton: false,
    },
  };

  return (
    <div className="gallery px-4">
      <p className="gallery_head_p">Portfolio</p>
      <Fade bottom>
        <h1 className="gallery_heading">Masonry Gallery</h1>
      </Fade>
      <SRLWrapper options={options}>
        <div className="gallery_gallery">
          {Galleryurls.map((val, index) => {
            return (
              <GalleryImages key={index} del={index * 100} url={val.url} />
            );
          })}
        </div>
      </SRLWrapper>
      <Footer />
    </div>
  );
}

export default Gallery;
