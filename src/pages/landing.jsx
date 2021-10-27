import React from "react";
import Box from "@mui/material/Box";
import NavigationBar from "../components/navigation/bar";
import HeroSection from "../components/body/hero";
import FeatureSection from "../components/body/feature";
import Divider from "@mui/material/Divider";
import CTASection from "../components/body/cta";
import CTASection2 from "../components/body/cta-2";
import NewsletterSection from "../components/body/newsletter";

export default function LandingPage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <NavigationBar />
      <HeroSection />
      <FeatureSection />
      <Divider sx={{ mx: 50 }} />
      <CTASection />
      <CTASection2 />
      <Divider sx={{ mx: 50 }} />
      <NewsletterSection />
    </Box>
  );
}
