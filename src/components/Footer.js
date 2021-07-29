import React from "react";
import CopyrightIcon from "@material-ui/icons/Copyright";
import "../css/footer.css";
import Fade from "react-reveal/Fade";

function Footer() {
  const year = new Date().getFullYear().toString();

  return (
    <Fade bottom>
      <div className="footer">
        <h3 className="footer_title">H3 Production House</h3>
        <p>
          <CopyrightIcon className="copy" /> {year} H3 Production House <br />{" "}
          Design by: A.M.Designers
        </p>
      </div>
    </Fade>
  );
}

export default Footer;
