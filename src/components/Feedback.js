import React, { useState } from "react";
import "../css/feedback.css";
import Footer from "./Footer";
import { reviews } from "./HomeGalleryUrls";
import Reviews from "./Reviews";
import Fade from "react-reveal/Fade";

function Feedback() {
  const [review, setReview] = useState({
    name: "",
    comment: "",
  });

  const setName = (e) => {
    const { value, name } = e.target;

    setReview((pre) => {
      if (name === "name") {
        return {
          name: value,
          comment: pre.comment,
        };
      } else {
        return {
          name: pre.name,
          comment: value,
        };
      }
    });
  };

  const submit = (e) => {
    e.preventDefault();
    reviews = [...reviews, review];
    console.log(reviews);
  };

  return (
    <div className="feedback px-4">
      <p className="feedback_review">reviews</p>
      <Fade bottom>
        <h2 className="feedback_title">Feedback</h2>
      </Fade>
      <Fade bottom>
        <p className="feedback_clientrev">Client Reviews</p>
      </Fade>

      {reviews.map((elem, ind) => {
        return (
          <Reviews
            key={ind}
            name={elem.name}
            del={ind * 300}
            cardtext={elem.comment}
          />
        );
      })}
      <Fade bottom>
        <h3 className="feedback_leave">leave feedback</h3>
      </Fade>
      <form action="" className="feedback_form" onSubmit={submit}>
        <Fade bottom>
          <input
            type="text"
            name="name"
            className="feedback_field"
            required
            placeholder="Your Name"
            value={review.name}
            onChange={setName}
          />
          <textarea
            name="comment"
            className="feedback_field"
            required
            placeholder="Your Feedback"
            rows="5"
            value={review.comment}
            onChange={setName}
          ></textarea>
          <button className="feedback_submit" type="submit">
            Submit Feedback
          </button>
        </Fade>
      </form>
      <Footer />
    </div>
  );
}

export default Feedback;
