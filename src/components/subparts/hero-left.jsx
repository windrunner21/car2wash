import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Icon from "@mui/icons-material/BlurOn";
import Time from "@mui/icons-material/Schedule";
import useWindowDimensions from "../misc/window-dimensions";

export default function HeroLeft() {
  // eslint-disable-next-line no-unused-vars
  const { height, width } = useWindowDimensions();

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
                β Testing free trial
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sx={{ marginTop: 3 }}>
          <Typography sx={{ color: "black", fontWeight: 700, fontSize: 70 }}>
            Life Should
          </Typography>
        </Grid>
        <Grid item sx={{ marginBottom: 3 }}>
          <Grid container direction="row" alignItems="flex-end" spacing={15}>
            <Grid item>
              <Typography
                sx={{ color: "black", fontWeight: 700, fontSize: 70 }}
              >
                Be Easy.
              </Typography>
            </Grid>
            {width < 900 ? (
              <div />
            ) : (
              <Grid item>
                <Time sx={{ color: "black", fontSize: 80 }} />
              </Grid>
            )}
          </Grid>
        </Grid>
        <Grid item sx={{ width: "60%" }}>
          <Typography sx={{ color: "gray", fontWeight: 400, fontSize: 20 }}>
            book a place at any car wash using a mobile device and save time.
          </Typography>
        </Grid>
        <Grid item sx={{ marginTop: 10 }}>
          <Button
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
            I'm interested
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
