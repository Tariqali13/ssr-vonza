import React, { Fragment } from "react";

const ListItems = ({ heading, para, para2, para3, para4, para5 }) => {
  return (
    <li className="li">
      <strong className="title">{heading}</strong>
      <p className="text">{para}</p>
      {para2 != null || para3 != null ? (
        <>
          <p className="text">{para2}</p>
          <p className="text">{para3}</p>{" "}
        </>
      ) : null}
      {para4 != null || para5 != null ? (
          <>
            <p className="text">{para4}</p>
            <p className="text">{para5}</p>{" "}
          </>
      ) : null}
    </li>
  );
};

export { ListItems };
