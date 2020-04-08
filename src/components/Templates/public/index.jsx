import React, { useEffect, useState } from "react";
import Footer from "./footer";
import Header from "./header";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import ReactPixel from "react-facebook-pixel";
import ReactGA from "react-ga";
import window from "global";
import { history } from "../../../index";
const PublicTemplate = ({
  children,
  pageTitle,
  pageDescription,
  pageKeywords,
}) => {
  const dispatch = useDispatch();

  // const handleScriptInject = ({ linkTags }) => {
  //   if (linkTags && linkTags.length > 0) {
  //     const linkTag = linkTags[0];
  //     linkTag.onload = handleOnLoad;
  //   }
  // };
  // const handleOnLoad = () => {
  //   document.body.style.display = "block";
  // };

  useEffect(() => {
    const options = {
      autoConfig: true,
      debug: false,
    };
    ReactPixel.init("195817528371621", null, options);
    ReactPixel.pageView();
    history.listen(() => {
      ReactPixel.pageView();
      ReactGA.initialize("UA-144188876-1");
      ReactGA.pageview(window.location.pathname + window.location.search);
    });
  });
  return (
    <>
      <Helmet>
        <link rel="stylesheet" type="text/css" href="./css/public/style.css" />
        <title>{pageTitle}</title>
        <meta
          name="description"
          content={pageDescription}
          data-react-helmet="true"
        />
        <meta name="keywords" content={pageKeywords} data-react-helmet="true" />
        <link
          rel="shortcut icon"
          href="/images/favicon.ico"
          type="image/x-icon"
        />
        {/* <script
          async
          data-uid="21be89e740"
          src="https://exceptional-thinker-5672.ck.page/21be89e740/index.js"></script>
        <script type="text/javascript">
          {(function() {
            var hccid = 59157928;
            var nt = document.createElement("script");
            nt.async = true;
            nt.src = "https://mylivechat.com/chatinline.aspx?hccid=" + hccid;
            var ct = document.getElementsByTagName("script")[0];
            ct.parentNode.insertBefore(nt, ct);
          })()}
        </script> */}
      </Helmet>
      <>
        {" "}
        <Header />
        {children}
        <Footer />
      </>
    </>
  );
};

export default PublicTemplate;
