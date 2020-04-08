import React, { useState } from "react";
import { Link } from "react-router-dom";

const HeroSection = ({ heading, img, para }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 my-auto mobile-top">
          <div className="starting-widget">
            <h2>{heading}</h2>
            <p>{para}</p>
            <div className="portable-form">
              <form className="form" method="post" action="#">
                <div className="form-group overlay-btn">
                  <input
                    onChange={e => setEmail(e.target.value)}
                    type="text"
                    placeholder="Enter your email"
                    className="form-control input-rounded"
                    aria-label="Text input with checkbox"
                  />
                </div>
                <Link
                  to={{
                    pathname: "/signup",
                    state: { email: email ? email : "", name: name ? name : "" }
                  }}
                >
                  <button type="submit" className="btn btn-rounded-custom">
                    Get Started
                  </button>
                </Link>
              </form>
            </div>

            <span className="note">No Credit Card Required.</span>
          </div>
        </div>
        <div className="col-md-6 my-auto"></div>
      </div>
    </div>
  );
};
export { HeroSection };
