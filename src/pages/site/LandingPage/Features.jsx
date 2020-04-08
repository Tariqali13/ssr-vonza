import React from "react";
import { Cards } from "../../../components";

const Features = () => {
  return (
    <section className="features-section">
      <div className="container">
        <div className="section-header">
          <h2>Start Now</h2>
          <p>Grow your online business in an innovate way</p>
        </div>
        <div className="row">
          <Cards
            img="feature-2.png"
            heading="Online Courses"
            para="Create engaging courses. Add video, image, text, audio and PDF files. Easily import your content from other platforms."
          />
          <Cards
            img="feature-1.png"
            heading="Branded Website"
            para="Use your own domain name. Build and design a beautiful website and membership pages with blog. Hosting Included."
          />
          <Cards
            img="feature-3.png"
            heading="Sell Products*"
            para="With Vonza you can sell more than courses. You can market and sell your physical and digital products and services."
          />
          <Cards
            img="feature-6.png"
            heading="Email Marketing*"
            para=" Stay in touch with your audience by sending interactive and animated email broadcasts."
          />
          <Cards
            img="feature-7.png"
            heading="Sales Funnel*"
            para="Convert your website visitors into leads and quickly grow your audience into paying customers."
          />
          <Cards
            img="calendar.png"
            heading="University Management*"
            para="Vonza offers schools and university solution to help you manage higher education degrees, student information, staff, professors, schedules, admissions, transcript, curriculum, reporting and finance, smoothly."
          />
        </div>
        <a href="/features" className="btn-orange-r-25">
          See All Features
        </a>
      </div>
    </section>
  );
};

export default Features;
