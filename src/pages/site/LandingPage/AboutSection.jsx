import React from "react";
import Plyr from "react-plyr";

const AboutSection = () => {
  return (
    <section id="about-section" className="about-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Plyr
              type="video" // or "vimeo"
              url="https://vonza.s3-us-west-2.amazonaws.com/whyvonza.mp4"
              autoplay={true}
              muted={true}
            />
          </div>
          <div className="col-md-6">
            <div className="about-short-content">
              <h3>
                Vonza makes it seamless for you to run a successful online
                business all in one place, not all over the place: saving you
                time, money and tech frustrations.
              </h3>
              <p>
                Within minutes, you will get a fully functioning online website
                platform with the latest technology, full learning management,
                payment processing, sales and marketing tools to grow your
                business under your own brand and custom domain.
              </p>
              <p>
                You’re ready to scale your online business. Vonza is what it
                takes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
