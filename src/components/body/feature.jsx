import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import feature1 from "../../assets/images/feature-1.png";
import feature2 from "../../assets/images/feature-2.png";
import feature3 from "../../assets/images/feature-3.png";

export default function FeatureSection() {
  return (
    <Box sx={{ flexGrow: 1, my: 16, mx: 13 }}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <Typography sx={{ color: "black", fontWeight: 600, fontSize: 50 }}>
            How it works
          </Typography>
        </Grid>
        <Grid item sx={{ width: "25%" }}>
          <Typography
            sx={{
              color: "gray",
              fontWeight: 400,
              fontSize: 20,
              textAlign: "center",
            }}
          >
            We value your time and comfort highly and believe in simplicity of
            routines
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="flex-end"
        wrap="wrap"
        sx={{ marginTop: 5 }}
        spacing={10}
      >
        <Grid item xs={6} sm={6} md={4} lg={3} xl={2.5}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <img alt={"feature1"} src={feature1} width="100%" />
            </Grid>
            <Grid item>
              <Typography
                sx={{
                  color: "black",
                  fontWeight: 600,
                  fontSize: 35,
                }}
              >
                Booking
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                sx={{
                  color: "#455a64",
                  fontWeight: 400,
                  fontSize: 20,
                  textAlign: "center",
                }}
              >
                Choose a car wash, comfortable time, date and you are good to
                go!
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3} xl={2.5}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <img alt={"feature1"} src={feature2} width="100%" />
            </Grid>
            <Grid item>
              <Typography
                sx={{ color: "black", fontWeight: 600, fontSize: 35 }}
              >
                Tracking
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                sx={{
                  color: "#455a64",
                  fontWeight: 400,
                  fontSize: 20,
                  textAlign: "center",
                }}
              >
                Get updated on any booking changes or updates immediately.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3} xl={2.5}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <img alt={"feature1"} src={feature3} width="100%" />
            </Grid>
            <Grid item>
              <Typography
                sx={{ color: "black", fontWeight: 600, fontSize: 35 }}
              >
                Washing
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                sx={{
                  color: "#455a64",
                  fontWeight: 400,
                  fontSize: 20,
                  textAlign: "center",
                }}
              >
                Drive to the booked place and time, have your car washed
                instantly.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
