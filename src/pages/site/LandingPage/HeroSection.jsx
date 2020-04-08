import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import {
//   sendingEmail,
//   EmailSubscriptionForLandingPage
// } from "../../../store/actions";
import { Link } from "react-router-dom";
import { CDN_URL } from "../../../constants";
const HeroSection = () => {
  // const dispatch = useDispatch();
  const [email, setEmail] = useState("");

  // const emailSent = e => {
  //   e.preventDefault();
  //   dispatch(sendingEmail(email));
  // };

  return (
    <section id="landing-main" className="mt-auto">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-md-6 my-auto">
            <div className="starting-widget">
              <h2>Your All-In-One Platform for Business Online</h2>
              <p>
                Create and sell online courses, offer digital and physical products, construct your sales funnels and build an amazing website - at Vonza! The only platform of it’s kind in the world.
              </p>
              <div className="portable-form">
                <form className="form" 
                // onSubmit={emailSent}
                >
                  <div className="form-group overlay-btn">
                    <input
                      // onChange={e => setEmail(e.target.value)}
                      // value={email}
                      type="email"
                      className="form-control input-rounded"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      required
                    />
                    <Link
                      to={{
                        pathname: "/signup",
                        state: { email: email ? email : "" }
                      }}
                    >
                      <button
                        type="submit"
                        // onClick={() =>
                        //   dispatch(EmailSubscriptionForLandingPage({ email }))
                        // }
                        className="btn btn-rounded-custom"
                      >
                        Get Started
                      </button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-6 my-auto ">
            <div className="starting-img-widget">
              <img
                src={`${CDN_URL}/assets/landing-img2.png`}
                alt="Online Business"
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
