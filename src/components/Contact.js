import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import pic from "../images/telephone.jpg";
const Contact = () => {
  return (
    <div className="contact-section bg-white text-center">
      <div className="container-fluid contact-container">
        <br />
        <div className="row">
          <div className="col-md-6">
            <div className="contact-image-container">
              <img src={pic} alt="Contact" width="600px" height="300px" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact-details">
              <h1>Contact Us</h1>
              <p>
                For any inquiries or assistance regarding our student management
                solution, please feel free to contact us:
              </p>

              <div className="address">
                <h5>Address:</h5>
                <p>123 Main Street, Banglore,Karnataka,India</p>
              </div>

              <div className="phone">
                <h5>Phone:</h5>
                <p>
                  <FontAwesomeIcon icon={faPhone} /> +91 1234567890
                </p>
              </div>

              <div className="follow-us">
                <div className="social-icons">
                  <div className="follow-us">
                    <h5>Follow Us:</h5>
                    <div className="social-icons">
                      <a href="https://www.facebook.com/your-facebook-url">
                        <FontAwesomeIcon icon={faFacebook} />
                      </a>
                      &nbsp;&nbsp;&nbsp;
                      <a href="https://www.twitter.com/your-twitter-url">
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                      &nbsp;&nbsp;&nbsp;
                      <a href="https://www.instagram.com/your-instagram-url">
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card testimonial-card">
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p>
                    "The student management solution has greatly streamlined our
                    administrative tasks. Highly recommended!"
                  </p>
                  <footer className="blockquote-footer">
                    John Doe, Principal
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card testimonial-card">
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p>
                    "We've seen significant improvements in student enrollment
                    and communication since implementing the student management
                    solution."
                  </p>
                  <footer className="blockquote-footer">
                    Jane Smith, Registrar
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card testimonial-card">
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p>
                    "The student management solution has made our administrative
                    tasks more efficient, allowing us to focus on student
                    success."
                  </p>
                  <footer className="blockquote-footer">
                    David Johnson, Academic Advisor
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
