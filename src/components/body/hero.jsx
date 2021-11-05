import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import HeroLeft from "../subparts/hero-left";
import HeroRight from "../subparts/hero-right";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function HeroSection(props) {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("xl"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ flexGrow: 1, mx: isTablet ? 0 : 13, my: 4 }}>
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
            height="100%"
            sx={{
              backgroundColor: "#f8f8fa",
              borderBottomLeftRadius: isMobile ? 0 : 150,
              px: isMobile ? 5 : 10,
              py: isMobile ? 2 : 6,
            }}
          >
            <HeroLeft emailRef={props.emailRef} />
          </Box>
        </Grid>
        {isTablet ? (
          <div />
        ) : (
          <Grid item md={12} lg={12} xl={6}>
            <Box
              height="100%"
              sx={{
                backgroundImage:
                  "linear-gradient(to bottom right, #8463d9, #9588d8, #db578d)",
                borderTopRightRadius: 150,
                px: 10,
                py: 6,
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
