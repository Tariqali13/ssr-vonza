import React from "react";
import { CDN_URL } from "../../../constants";
const Cards = ({ heading, img, para }) => {
  return (
    <div className="col-md-4 col-12">
      <div className="feature-box">
        <h3>{heading}</h3>
        <div className="feature-icon">
          <img src={`${CDN_URL}/assets/${img}`} alt="feature" />
        </div>
        <p>{para}</p>
      </div>
    </div>
  );
};
export { Cards };
