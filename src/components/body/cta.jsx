import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import phone from "../../assets/images/phone-download.png";
import apple from "../../assets/icons/apple.png";
import google from "../../assets/icons/google.png";

export default function CTASection() {
  return (
    <Box sx={{ flexGrow: 1, my: 20, mx: 13 }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        wrap="wrap"
        spacing={10}
      >
        <Grid item md={6} lg={6}>
          <img alt="phone" src={phone} width="100%" />
        </Grid>
        <Grid item md={6} lg={6} xl={5}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
          >
            <Grid item>
              <Typography
                sx={{ color: "black", fontWeight: 600, fontSize: 50 }}
              >
                Download
              </Typography>
            </Grid>
            <Grid item sx={{ width: "80%" }}>
              <Typography
                sx={{
                  color: "gray",
                  fontWeight: 400,
                  fontSize: 20,
                  my: 4,
                }}
              >
                Download Car 2 Wash mobile app for iOS and Android. It helps you
                washing your car smartly and removes unnecessary routine.
              </Typography>
            </Grid>
            <Grid item>
              <Tooltip title="Beta Access Only" placement="left">
                <Button
                  startIcon={<img alt="apple" src={apple} width={25} />}
                  sx={{
                    my: 2,
                    border: "2px solid #bdbdbd",
                    color: "black",
                    backgroundColor: "transparent",
                    fontWeight: 500,
                    fontSize: 17,
                    textTransform: "none",
                    borderRadius: 4,
                    py: 3,
                    px: 5,
                    ":hover": {
                      border: "2px solid black",
                      color: "black",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  App Store
                </Button>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title="Beta Access Only" placement="left">
                <Button
                  startIcon={<img alt="apple" src={google} width={25} />}
                  sx={{
                    my: 1,
                    border: "2px solid #bdbdbd",
                    color: "black",
                    backgroundColor: "transparent",
                    fontWeight: 500,
                    fontSize: 17,
                    textTransform: "none",
                    borderRadius: 4,
                    py: 3,
                    px: 5,
                    ":hover": {
                      border: "2px solid black",
                      color: "black",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  Google Store
                </Button>
              </Tooltip>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
