import React from "react";
import "../css/service.css";
import ServiceImages from "./ServiceImage";
import { ServiceImageurls } from "./HomeGalleryUrls";
import Footer from "./Footer";
import Button from "@material-ui/core/Button";
import Fade from "react-reveal/Fade";

function Service() {
  return (
    <div className="service px-4">
      <p className="service_p">what we do</p>
      <Fade bottom>
        <h1 className="service_heading">Services</h1>
      </Fade>
      <div className="container-fluid">
        <div className="row g-4 pt-4">
          {ServiceImageurls.map((val, ind) => {
            return <ServiceImages key={ind} del={ind*200} src={val.url} head={val.head} />;
          })}
        </div>
      </div>
      <Fade bottom>
        <p className="service_p">INTERESTED TO WORK WITH US?</p>
      </Fade>
      <Fade bottom>
        <div className="text-center">
          <Button
            variant="contained"
            href="/contact"
            className="service_button"
          >
            contact with us
          </Button>
        </div>
      </Fade>
      <Footer />
    </div>
  );
}

export default Service;
