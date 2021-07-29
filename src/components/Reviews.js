import React from "react";
import Fade from "react-reveal/Fade";

function Reviews({ name, cardtext, del }) {
  return (
    <Fade bottom delay={del}>
      <div className="mt-5 feedback_card">
        <h5 className="feedback_cardtitle">{name}</h5>
        <p className="feedback_cardtext">{cardtext}</p>
      </div>
    </Fade>
  );
}

export default Reviews;
