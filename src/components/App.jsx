import React, { useEffect } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { MarketingSiteRoutes } from "../pages/site";
// import { UserWebsiteRoutes } from "../pages/userSite";
import ExecutionEnvironment from "exenv";
import window from "global";

// import Loadable from "react-loadable";
// const AsyncLandingPage = Loadable({
//   loader: () =>
//     import(/* webpackChunkName: "myNamedChunk" */ "../pages/site/LandingPage"),
//   loading: () => <div>loading...</div>,
//   modules: ["myLandingPage"],
// });
// import signUpRoutes from "../pages/main/signUpRoutes";
const App = ({ location }) => {
  // const subDomain = ExecutionEnvironment.canUseDOM
  //   ? localStorage.getItem("sub_domain")
  //   : "";
  let subdomain = typeof window !== "undefined" ? window.location : "";

  console.log("subDomain", subdomain);
  console.log("location",location);
  
  return (
    <Switch>
      <Route path="/" component={MarketingSiteRoutes} />
      {/* <Route
        path="/"
        render={(props) => {
          const subdomain = ExecutionEnvironment.canUseDOM
            ? window.location.hostname.split(".")
            : "";
          if (subdomain && subdomain.length > 2 && !subdomain.includes("www"))
            return <UserWebsiteRoutes {...props} subdomain={subdomain[0]} />;
          return <MarketingSiteRoutes {...props} />;
        }}
      /> */}
    </Switch>
  );
};

export default withRouter(App);
