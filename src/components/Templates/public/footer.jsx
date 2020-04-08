import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    // Demo, Marketplace, Become an Affiliate, Vonza Academy.
    <footer id="footer" className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-3 col-6 footer-widget">
                <h3>Products</h3>
                <ul>
                  <li>
                    <Link to="/" title="">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/features" title="">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link to="/pricing" title="">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <a hred="#" title="">
                      Demo
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      {" "}
                      Marketplace{" "}
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-md-3 col-6  footer-widget">
                <h3>Learn</h3>
                <ul>
                  <li>
                    <Link to="/blog/business-growth" title="Blog">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <a href="#" title="">
                      Vonza Academy
                    </a>
                  </li>
                  <li>
                    <Link to="/privacypolicy" title="">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/terms" title="">
                      Terms of Use
                    </Link>
                  </li>
                  <li>
                    <Link to="/income" title="">
                      Income Disclaimer
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-md-3 col-6  footer-widget">
                <h3 className="company">Company</h3>
                <ul>
                  <li>
                    <Link to="/aboutus" title="">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/enterprise" title="">
                      Enterprise
                    </Link>
                  </li>
                  <li>
                    <Link to="/press" title="">
                      Press
                    </Link>
                  </li>
                  <li>
                    <Link to="/contactus" title="">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <a href="#" title="">
                      Become an Affiliate
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-md-3  col-6">
                <div className="address-widget">
                  <img src="/images/logo-transparent.png" alt="Vonza Logo" />
                  <h3>Get in touch</h3>
                  <ul>
                    <li>
                      <i className="von-icon-mail"></i>{" "}
                      <span>
                        {" "}
                        <a href="#" title="">
                          info@vonza.com
                        </a>{" "}
                      </span>
                    </li>
                    <li>
                      <i className="von-icon-phone"></i>{" "}
                      <span>
                        {" "}
                        <a href="tel:888-640-2951" title="">
                          888-640-2951
                        </a>{" "}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row footer-copyright">
          <div className="col-md-6">
            <p>© Vonza 2020. All rights reserved.</p>
          </div>
          <div className="col-md-6">
            <ul className="social-list">
              <li>
                {" "}
                <a
                  href="https://www.facebook.com/vonzaHQ"
                  title=""
                  target="_blank"
                >
                  {" "}
                  <i className="von-icon-fb"></i>
                </a>{" "}
              </li>
              <li>
                {" "}
                <a
                  href="https://www.instagram.com/vonzahq/"
                  title=""
                  target="_blank"
                >
                  {" "}
                  <i className="von-icon-ig"></i>
                </a>{" "}
              </li>
              <li>
                {" "}
                <a
                  href="https://www.youtube.com/channel/UCgVLQ5tJuT-KBSF3XJfXAeg/videos?view_as=subscriber"
                  title=""
                  target="_blank"
                >
                  {" "}
                  <i className="von-icon-ut"></i>
                </a>{" "}
              </li>
              <li>
                {" "}
                <a
                  href="https://www.pinterest.com/vonzahq/"
                  title=""
                  target="_blank"
                >
                  {" "}
                  <i className="von-icon-pi"></i>
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="https://twitter.com/vonzahq" title="" target="_blank">
                  {" "}
                  <i className="von-icon-tw"></i>
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
