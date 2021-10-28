import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import feature1 from "../../assets/images/feature-1.png";
import feature2 from "../../assets/images/feature-2.png";
import feature3 from "../../assets/images/feature-3.png";
import { useTranslation } from "react-i18next";

export default function FeatureSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useTranslation();

  return (
    <Box sx={{ flexGrow: 1, my: isMobile ? 10 : 20, mx: isMobile ? 4 : 13 }}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <Typography
            sx={{
              color: "black",
              fontWeight: 600,
              fontSize: isMobile ? 45 : 50,
              textAlign: "center",
            }}
          >
            {t("feature.title")}
          </Typography>
        </Grid>

        <Grid item sx={{ width: isMobile ? "100%" : "25%" }}>
          <Typography
            sx={{
              color: "gray",
              fontWeight: 400,
              fontSize: 20,
              textAlign: "center",
            }}
          >
            {t("feature.subtitle")}
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
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2.5}>
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
                {t("feature.booking")}
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
                {t("feature.bookingText")}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2.5}>
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
                {t("feature.tracking")}
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
                {t("feature.trackingText")}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2.5}>
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
                {t("feature.washing")}
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
                {t("feature.washingText")}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
