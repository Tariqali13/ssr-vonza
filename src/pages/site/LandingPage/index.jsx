import React, { useEffect } from "react";
import { PublicTemplate } from "../../../components";
import HeroSection from "./HeroSection";
import Loadable from "react-loadable";
// const AsyncHeroSection = Loadable({
//   loader: () => import(/* webpackChunkName: "myNamedChunk" */ "./HeroSection"),
//   loading: () => <div>loading...</div>,
// });
// const AsyncPublicTemplate = Loadable({
//   loader: () =>
//     import(
//       /* webpackChunkName: "myNamedChunk" */ "../../../components/Templates/public"
//     ),
//   loading: () => <div>loading...</div>,
// });
import AboutSection from "./AboutSection";
import Features from "./Features";
// import TopExperiecneSection from "./TopExperiecneSection";
// import GetStarted from "./GetStarted";
// import ChooseBusiness from "./ChooseBusiness";
// import QuickSetup from "./QuickSetup";
// import Testimonials from "./Testimonials";
// import Creators from "./Creators";
// import OnlineSupport from "./OnlineSupport";
// import BeginNow from "./BeginNow";

const LandingPage = () => {
  return (
    <div id="wrapper" role="main">
      <PublicTemplate
        pageTitle="Vonza - Your Online Business All In One Place"
        pageDescription="The ultimate platform to build online courses, sell products, offer services, construct sales funnels, schedule appointments, launch email marketing campaigns and develop amazing websites."
        pageKeywords="web development, online course platform, all in one course platform, kajabi competitor, web design, email marketing services, ecommerce website, ecommerce platform, online course development, multimedia learning platforms, educational platforms, digital marketing for business"
      >
        <HeroSection />
        <AboutSection />
        <Features />
        {/*
        
        <TopExperiecneSection />
        <GetStarted />
        <ChooseBusiness />
        <QuickSetup />
        <Testimonials />
        <Creators />
        <OnlineSupport />
        <BeginNow /> */}
      </PublicTemplate>
    </div>
  );
};

export default LandingPage;
