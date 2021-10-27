import React, { useRef } from "react";
import Box from "@mui/material/Box";
import NavigationBar from "../components/navigation/bar";
import HeroSection from "../components/body/hero";
import FeatureSection from "../components/body/feature";
import CTASection from "../components/body/cta";
import CTASection2 from "../components/body/cta-2";
import NewsletterSection from "../components/body/newsletter";
import Footer from "../components/navigation/footer";

export default function LandingPage() {
  const businessRef = useRef(null);
  const downloadRef = useRef(null);
  const featuresRef = useRef(null);
  const emailTextFieldRef = useRef(null);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <NavigationBar
        businessRef={businessRef}
        downloadRef={downloadRef}
        featuresRef={featuresRef}
      />
      <div ref={businessRef}>
        <HeroSection emailRef={emailTextFieldRef} />
      </div>
      <FeatureSection />
      <hr
        style={{
          width: "65%",
          textAlign: "center",
          backgroundColor: "#e2e2e2",
          color: "#e2e2e2",
          height: "1px",
          borderWidth: 0,
        }}
      />
      <div ref={downloadRef}>
        <CTASection />
      </div>
      <div ref={featuresRef}>
        <CTASection2 emailRef={emailTextFieldRef} />
      </div>
      <hr
        style={{
          width: "65%",
          textAlign: "center",
          backgroundColor: "#e2e2e2",
          color: "#e2e2e2",
          height: "1px",
          borderWidth: 0,
        }}
      />
      <NewsletterSection emailRef={emailTextFieldRef} />
      <Footer />
    </Box>
  );
}
