import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Icon from "@mui/icons-material/BlurOn";
import Time from "@mui/icons-material/Schedule";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTranslation } from "react-i18next";

export default function HeroLeft(props) {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useTranslation();

  const focusTextField = () =>
    props.emailRef.current.scrollIntoView({ behavior: "smooth" });

  return (
    <Box m="auto">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Grid item>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={1}
          >
            <Grid item>
              <Icon sx={{ color: "black", fontSize: 40 }} />
            </Grid>
            <Grid item>
              <Typography
                sx={{ color: "black", fontWeight: 400, fontSize: 20 }}
              >
                {t("hero.caption")}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sx={{ marginTop: 3 }}>
          <Typography
            sx={{
              color: "black",
              fontWeight: 700,
              fontSize: isMobile ? 50 : 70,
            }}
          >
            {t("hero.title")}
          </Typography>
        </Grid>
        <Grid item sx={{ marginBottom: 3 }}>
          <Grid container direction="row" alignItems="flex-end" spacing={15}>
            <Grid item>
              <Typography
                sx={{
                  color: "black",
                  fontWeight: 700,
                  fontSize: isMobile ? 50 : 70,
                }}
              >
                {t("hero.title2")}
              </Typography>
            </Grid>
            {isTablet ? (
              <div />
            ) : (
              <Grid item>
                <Time sx={{ color: "black", fontSize: 80 }} />
              </Grid>
            )}
          </Grid>
        </Grid>
        <Grid item sx={{ width: isMobile ? "100%" : "60%" }}>
          <Typography sx={{ color: "gray", fontWeight: 400, fontSize: 20 }}>
            {t("hero.subtitle")}
          </Typography>
        </Grid>
        <Grid item sx={{ marginTop: 10 }}>
          <Button
            onClick={focusTextField}
            sx={{
              backgroundColor: "black",
              color: "white",
              fontWeight: 500,
              fontSize: 17,
              textTransform: "none",
              borderRadius: 4,
              py: 2,
              px: 6,
              ":hover": {
                border: "1px solid black",
                color: "black",
                backgroundColor: "transparent",
              },
            }}
          >
            {t("hero.button")}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
