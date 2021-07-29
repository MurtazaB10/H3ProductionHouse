import React, { useState } from "react";
import "../css/home.css";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import HomeGalleryImages from "./HomeGalleryImages";
import Urls, { Nexturls } from "./HomeGalleryUrls";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import "../css/header.css";
import Footer from "./Footer";
import { SRLWrapper } from "simple-react-lightbox";
import Fade from "react-reveal/Fade";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

function Home() {
  const [hide, setHide] = useState(false);

  const show = () => {
    setHide(!hide);
  };

  const options = {
    buttons: {
      backgroundColor: "transparent",
      showDownloadButton: false,
    },
  };

  return (
    <div className="home">
      <Carousel fade controls={false} pause={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/homeimg1.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="hometag_parent">
            <h3 className="hometag">
              <ChevronRightIcon className="hometag_icon" />
              <ChevronRightIcon className="hometag_icon" />
              <ChevronRightIcon className="hometag_icon" />
              <ChevronRightIcon className="hometag_icon" /> Make Your Wedding A
              Wonderful Story
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/homeimg2.jpg"
            alt="Second slide"
          />

          <Carousel.Caption className="hometag_parent">
            <h3 className="hometag">
              <ChevronRightIcon className="hometag_icon" />
              <ChevronRightIcon className="hometag_icon" />
              <ChevronRightIcon className="hometag_icon" />
              <ChevronRightIcon className="hometag_icon" /> Make Your Wedding A
              Wonderful Story
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/homeimg3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption className="hometag_parent">
            <h3 className="hometag">
              <ChevronRightIcon className="hometag_icon" />
              <ChevronRightIcon className="hometag_icon" />
              <ChevronRightIcon className="hometag_icon" />
              <ChevronRightIcon className="hometag_icon" /> Make Your Wedding A
              Wonderful Story
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Fade bottom>
        <p className="home_p">
          “To me, photography is an art of observation. It’s about finding
          something interesting in an ordinary place... I’ve found it has little
          to do with the things you see and everything to do with the way you
          see them.”
        </p>
      </Fade>
      <SRLWrapper options={options}>
        <div className="container-fluid">
          <div className="row g-4 w-100 px-4 m-0">
            {Urls.map((elem, index) => {
              return (
                <HomeGalleryImages
                  key={index}
                  del={index * 200}
                  url={elem.url}
                />
              );
            })}

            {hide ? (
              Nexturls.map((elem, index) => {
                return (
                  <HomeGalleryImages
                    key={index}
                    del={index * 200}
                    url={elem.url}
                  />
                );
              })
            ) : (
              <Fade bottom>
                <div className="text-center">
                  <Button
                    className="homegallery_btn"
                    variant="outlined"
                    onClick={show}
                  >
                    <AddIcon className="homegallery_plus" />
                  </Button>
                </div>
              </Fade>
            )}
          </div>
        </div>
      </SRLWrapper>
      <Footer />
    </div>
  );
}

export default Home;
