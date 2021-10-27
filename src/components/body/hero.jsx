import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import HeroLeft from "../subparts/hero-left";
import HeroRight from "../subparts/hero-right";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function HeroSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Box sx={{ flexGrow: 1, mx: isMobile ? 0 : 13, my: 4 }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        wrap="wrap"
        spacing={0}
      >
        <Grid item xs={12} sm={12} md={12} lg={12} xl={6}>
          <Box
            display="flex"
            height="65%"
            sx={{
              backgroundColor: "#f8f8fa",
              px: 10,
              py: 20,
            }}
          >
            <HeroLeft />
          </Box>
        </Grid>
        {isMobile ? (
          <div />
        ) : (
          <Grid item md={12} lg={12} xl={6}>
            <Box
              height="65%"
              sx={{
                backgroundImage:
                  "linear-gradient(to bottom right, #8463d9, #9588d8, #db578d)",
                px: 10,
                py: 20,
              }}
            >
              <HeroRight />
            </Box>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}