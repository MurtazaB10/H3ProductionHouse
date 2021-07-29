import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../css/header.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import CopyrightIcon from "@material-ui/icons/Copyright";
import Fade from "react-reveal/Fade";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

function Header() {
  const [show, setShow] = useState("translateX(-100vw)");
  const [clicked, setClicked] = useState(false);

  const year = new Date().getFullYear().toString();

  const Show = () => {
    setClicked(true);
    setShow("translateX(0)");
  };

  const hide = () => {
    setClicked(false);
    setShow("translateX(-100vw)");
  };

  return (
    <>
      {!clicked ? (
        <IconButton onClick={Show} className="bicon menuicon">
          <MenuIcon />
        </IconButton>
      ) : null}

      <div className="header" style={{ "--trans": show }}>
        {clicked ? (
          <IconButton className="bicon closeicon" onClick={hide}>
            <CloseIcon />
          </IconButton>
        ) : null}
        <Fade top>
          <Link to="/" className="header_link">
            <img src="img/logo.png" className="header_logo" alt="Logo" />
            <h3 className="header_title">H3 Production House</h3>
          </Link>
        </Fade>
        <Fade left>
          <NavLink
            className="header_navlink"
            activeClassName="activate"
            exact
            to="/"
          >
            <div className="header_navlink_div">Home</div>
          </NavLink>
        </Fade>
        <Fade left delay={200}>
          <NavLink
            className="header_navlink"
            activeClassName="activate"
            exact
            to="/about"
          >
            <div className="header_navlink_div">About</div>
          </NavLink>
        </Fade>
        <Fade left delay={400}>
          <NavLink
            className="header_navlink"
            activeClassName="activate"
            exact
            to="/services"
          >
            <div className="header_navlink_div">Services</div>
          </NavLink>
        </Fade>
        <Fade left delay={600}>
          <NavLink
            className="header_navlink"
            activeClassName="activate"
            exact
            to="/gallery"
          >
            <div className="header_navlink_div">Gallery</div>
          </NavLink>
        </Fade>
        <Fade left delay={800}>
          <NavLink
            className="header_navlink"
            activeClassName="activate"
            exact
            to="/feedback"
          >
            <div className="header_navlink_div">Feedback</div>
          </NavLink>
        </Fade>
        <Fade left delay={1000}>
          <NavLink
            className="header_navlink"
            activeClassName="activate"
            exact
            to="/contact"
          >
            <div className="header_navlink_div">Contact</div>
          </NavLink>
        </Fade>

        <Fade bottom>
          <div className="header_icons">
            <a
              href="https://instagram.com/h3productionhouse?utm_medium=copy_link"
              target="_blank"
            >
              <InstagramIcon className="icon" />
            </a>
            <a href="" target="_blank">
              <FacebookIcon className="icon" />
            </a>
          </div>
          <p className="header_p">
            <CopyrightIcon className="copy" /> {year} H3 Production House <br />{" "}
            Design by: A.M.Designers
          </p>
        </Fade>
      </div>
    </>
  );
}

export default Header;
