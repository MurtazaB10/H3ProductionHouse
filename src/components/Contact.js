import React from "react";
import "../css/contact.css";
import "../css/feedback.css";
import Footer from "./Footer";
import Fade from "react-reveal/Fade";

function Contact() {
  return (
    <div className="contact px-4">
      <p className="contact_subtitle">location</p>
      <Fade bottom>
        <h2 className="contact_title">Contact Us</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.7544866303256!2d72.82458391473463!3d19.379780536914307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7aebfe206e417%3A0xc2ba7f8ef2296a16!2sDindayal%20Nagar%2C%20Vasai%20West%2C%20Vasai-Virar%2C%20Maharashtra%20401202!5e0!3m2!1sen!2sin!4v1626417164981!5m2!1sen!2sin"
          allowfullscreen=""
          loading="lazy"
          className="contact_location"
        ></iframe>
      </Fade>
      <div className="container-fluid mt-5">
        <div className="row g-sm-2 g-5">
          <div className="col-sm-6 col-12">
            <Fade left>
              <h5 className="contact_row_p">
                I'm available for worldwide orders.
              </h5>
            </Fade>
            <Fade left delay="300">
              <p className="contact_row_p mt-5">
                Phone: <span>+917798517862</span>
              </p>
              <p className="contact_row_p">
                Email: <span>h3productionhouse@gmail.com</span>
              </p>
              <p className="contact_row_p">
                Address:{" "}
                <span>
                  Pandit dindayal nagar vasai west 401202, Mumbai, India.
                </span>
              </p>
            </Fade>
          </div>
          <div className="col-sm-6 col-12">
            <Fade right>
              <h5 className="contact_row_p">Contact Form</h5>
              <p className="contact_form_p">Interested to work with us ?</p>
              <form action="" className="feedback_form contact_form">
                <div className="contact_form_div">
                  <input
                    type="text"
                    name="fullname"
                    className="feedback_field contact_field"
                    required
                    placeholder="Your Name"
                  />
                  <input
                    type="email"
                    name="emial"
                    className="feedback_field contact_field"
                    required
                    placeholder="Email"
                  />
                </div>
                <textarea
                  name="message"
                  className="feedback_field contact_field"
                  required
                  placeholder="Message"
                  rows="5"
                ></textarea>
                <button
                  className="feedback_submit contact_submit"
                  type="submit"
                >
                  Submit Feedback
                </button>
              </form>
            </Fade>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
