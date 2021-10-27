import React from "react";
import Box from "@mui/material/Box";
import NavigationBar from "../components/navigation/bar";
import HeroSection from "../components/body/hero";
import FeatureSection from "../components/body/feature";
import CTASection from "../components/body/cta";
import CTASection2 from "../components/body/cta-2";
import NewsletterSection from "../components/body/newsletter";
import Footer from "../components/navigation/footer";

export default function LandingPage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <NavigationBar />
      <HeroSection />
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
      <CTASection />
      <CTASection2 />
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
      <NewsletterSection />
      <Footer />
    </Box>
  );
}
