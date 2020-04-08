import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { CDN_URL } from "../../../constants";
const HeroSection2 = ({
  heading,
  heading2,
  img,
  img2,
  imgClass,
  imgClass2,
  para,
  strongPara
}) => {
  return (
    <div className="container">
      <img
        className={`${imgClass}`}
        src={`${CDN_URL}/assets/${img}`}
        alt="image"
      />
      {img2 != null ? (
        <img
          className={`${imgClass2}`}
          src={`${CDN_URL}/assets/${img2}`}
          alt="image"
        />
      ) : null}
      <div className="row">
        <div className="col-md-6 my-auto">
          <div className="starting-widget">
            <h2>{heading}</h2>
            {heading2 != null ? <h3>{heading2}</h3> : null}
            <p>
              {para}{" "}
              {strongPara != null ? (
                <>
                  – <strong>{strongPara}</strong>
                </>
              ) : null}
            </p>
          </div>
          <Link to="/signup" className="btn btn-primary radius">
            Start Your Vonza Account
          </Link>
        </div>
        <div className="col-md-6 my-auto"></div>
      </div>
    </div>
  );
};
export { HeroSection2 };
