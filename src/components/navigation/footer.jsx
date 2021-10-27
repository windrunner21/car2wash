import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import instagram from "../../assets/icons/instagram.png";
import facebook from "../../assets/icons/facebook.png";
import twitter from "../../assets/icons/twitter.png";

export default function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Box
      sx={{
        flexGrow: 1,
        mx: isMobile ? 0 : 13,
        my: 4,
        padding: 4,
        backgroundColor: "#f8f8fa",
      }}
    >
      <Grid container direction="row" alignItems="center" spacing={2}>
        <Grid item sx={{ flexGrow: 1 }}>
          <Typography sx={{ flexGrow: 1, color: "gray", fontWeight: 300 }}>
            Copyright © 2021 Dummy Tech LLC.
          </Typography>
        </Grid>
        <Grid item>
          <IconButton sx={{ backgroundColor: "#ececee", borderRadius: 4 }}>
            <img
              alt="instagram"
              src={instagram}
              width={20}
              style={{ padding: 10 }}
            />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton sx={{ backgroundColor: "#ececee", borderRadius: 4 }}>
            <img
              alt="facebook"
              src={facebook}
              width={20}
              style={{ padding: 10 }}
            />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton sx={{ backgroundColor: "#ececee", borderRadius: 4 }}>
            <img
              alt="twitter"
              src={twitter}
              width={20}
              style={{ padding: 10 }}
            />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
}
