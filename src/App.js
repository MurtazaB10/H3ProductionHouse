import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Feedback from "./components/Feedback";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import SimpleReactLightbox from "simple-react-lightbox";
import WeddingGallery from "./components/WeddingGallery";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import {
  PreWeddingGalleryImageurls,
  WeddingGalleryImageurls,
  wgbp,
  ms,
} from "./components/HomeGalleryUrls";

function App() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = (e) => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <>
      <div
        onClick={scrollToTop}
        className="scrollbtn"
        style={{ opacity: visible ? "1" : "0" }}
      >
        <ExpandLessIcon className="expandicon" />
      </div>
      <div className="container-fluid p-0 m-0">
        <div className="row g-0">
          <div className="col-3 fixed-top left">
            <Header />
          </div>
          <div className="col-md-9 col-12 right offset-md-3">
            <Switch>
              <Route exact path="/">
                <SimpleReactLightbox>
                  <Home />
                </SimpleReactLightbox>
              </Route>
              <Route exact path="/wedding">
                <SimpleReactLightbox>
                  <WeddingGallery
                    urls={WeddingGalleryImageurls}
                    heading="Wedding Shoots"
                    imgSrc="img/WeddingGalleryImg.jpg"
                    p1="A wedding is not just the culmination of a couple’s commitment. It’s also the final product of much planning and preparation. Yet despite the best-laid plans, your big day won’t necessarily get a free pass from Murphy’s Law. Some chaos is almost inevitable at some point along the way. Luckily, when you hire a wedding photojournalist, you have someone on hand who is an expert in capturing those moments as memorable visual stories that you’ll enjoy for years to come."
                    p2="Some wedding photographers may feel the need to include the bride or groom in every picture, but those photos convey only part of the day's record. Most WPJA members will probably tell you that you're not fully documenting the event unless you get out there on the periphery and record the subplots of the wedding day—the unique and intersecting stories of the guests as they enjoy the festivities."
                  />
                </SimpleReactLightbox>
              </Route>
              <Route exact path="/prewedding">
                <SimpleReactLightbox>
                  <WeddingGallery
                    urls={PreWeddingGalleryImageurls}
                    heading="Pre-Wedding Shoots"
                    imgSrc="img/pws_main.jpg"
                    p1="On your big day, may you be blessed with all that you deserve? May you have an exceptional birthday celebration.On your birthday, I hope you create a memory that becomes your happy place in all the many years yet to come. Happy Birthday!"
                    p2="Here’s wishing you all the very best on your special day. May you be blessed with all the joy you can ever have and be blessed abundantly today, tomorrow, and the days to come! May you have a fantastic birthday and many more to come. Let's make your birthday more memorable with some artistic and pictorial photographs."
                  />
                </SimpleReactLightbox>
              </Route>
              <Route exact path="/birthdayparty">
                <SimpleReactLightbox>
                  <WeddingGallery
                    urls={wgbp}
                    heading="Birthday Party Shoots"
                    imgSrc="img/BP_main.jpg"
                    p1="Pre-wedding shoot sounds fancy and a lot of couples think it is unnecessary and expensive too. But the truth is, a pre-wedding photo shoot has a number of perks that will help you. Here are some of the key benefits of choosing a pre-wedding photography."
                    p2="Nowadays, wedding photography is not just about posing and smiling. Unlike the old days, photographers are coming up with the innovative ways to make a wedding album perfect. If you choose to do a pre-wedding photo shoot two to three months prior to your wedding day, you should be well known about your photographer much in advance. Hence, you can relax completely in front of the camera and be yourself throughout. It may help your photographer to discover your best angles and positions to make your wedding day photos outstanding. Furthermore, pre-wedding shoots can be considered as a trial photography session to make you prepare for your big day. Also, it will make you feel comfort with your photographer and also you will come to know his or her shooting style."
                  />
                </SimpleReactLightbox>
              </Route>
              <Route exact path="/maternity">
                <SimpleReactLightbox>
                  <WeddingGallery
                    urls={ms}
                    heading="Maternity Shoots"
                    imgSrc="img/ms_main.jpg"
                    p1="Pregnancy in art covers any artistic work that portrays pregnancy. In art as in life, it is often unclear whether an actual state of pregnancy is intended to be shown. A common visual indication is the gesture of the woman placing a protective open hand on her abdomen. Historically, married women were at some stage of pregnancy for much of their life until the menopause, but the depiction of this in art is relatively uncommon, and generally restricted to some specific contexts."
                    p2="This probably persists even in contemporary culture; despite several recent artworks depicting heavily pregnant women, one writer was astonished at the shortage of visual images ... of pregnant women in public visual culture. A research study conducted by Pierre Bourdieu in 1963 found that the great majority of 693 French subjects thought that a photo of a pregnant woman could not, by definition, be beautiful."
                  />
                </SimpleReactLightbox>
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/services">
                <Services />
              </Route>
              <Route exact path="/gallery">
                <SimpleReactLightbox>
                  <Gallery />
                </SimpleReactLightbox>
              </Route>
              <Route exact path="/feedback">
                <Feedback />
              </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
              <Redirect to="/" />
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
