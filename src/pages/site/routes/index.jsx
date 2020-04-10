import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
// import { DataconfigVeriables } from "../DataconfigVeriables";
import Loadable from "react-loadable";
const AsyncLandingPage = Loadable({
  loader: () => import(/* webpackChunkName: "myNamedChunk" */ "../LandingPage"),
  loading: () => <div>loading...</div>,
  modules: ["myLandingPage"],
});
// import {
//   LandingPage,
//   Pricing,
//   Example,
//   SignUp,
//   Payment,
//   Login,
//   AboutUs,
//   ContactUs,
//   Enterprice,
//   Feature,
//   ComingSoon,
//   ComingSoonSuccess,
//   PrivacyPolic,
//   IncomeDisclaimer,
//   BecomeAffiliate,
//   TermsOfUse,
//   PressRelease,
//   ForgotPassword,
//   VonzaShow,
//   PublicSiteBlogPage,
//   PostViewComplete
// } from "../index";
// import { signUpRoutes, AdminRoutes } from "../../main";
// import ScrollToTop from "../../../components/util";
// import { Verifyingauth } from "../../userSite";
// import { ChangePasswordScreen } from "../ForgotPassword/ChangePasswordScreen";
const MarketingSiteRoutes = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={AsyncLandingPage} />
        {/* <Route path="/aboutus" exact component={AboutUs} />
        <Route path="/contactus" exact component={ContactUs} />
        <Route path="/features" exact component={Feature} />
        <Route path="/enterprise" exact component={Enterprice} />
        <Route path="/pricing" exact component={Pricing} />
        <Route path="/examples" exact component={Example} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/login" exact component={Login} />
        <Route path="/comingsoon" exact component={ComingSoon} />
        <Route path="/comingsoonsuccess" exact component={ComingSoonSuccess} />
        <Route path="/privacypolicy" exact component={PrivacyPolic} />
        <Route path="/income" exact component={IncomeDisclaimer} />
        <Route path="/affiliates" exact component={BecomeAffiliate} />
        <Route path="/terms" exact component={TermsOfUse} />
        <Route path="/verifyingauth" component={Verifyingauth} />
        <Route path="/press" component={PressRelease} />
        <Route path="/show" component={VonzaShow} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/change-password" component={ChangePasswordScreen} />
        <Route
          path={["/blog/business-growth/:id", "/blog/personal-development/:id"]}
          component={PostViewComplete}
        />
        <Route path="/blog/:id" component={PublicSiteBlogPage} />

        <Route path={`/getConfigData`} component={DataconfigVeriables} />
        {/* <Route path={`/admin`} component={AdminRoutes} /> */}
        {/* <Route component={signUpRoutes} /> */}
      </Switch>
    </>
  );
};

export { MarketingSiteRoutes };
