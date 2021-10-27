import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function NewsletterSection() {
  return (
    <Box sx={{ flexGrow: 1, my: 10, mx: 13 }}>
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
              fontSize: 50,
              textAlign: "center",
            }}
          >
            Request β Access
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            sx={{
              color: "gray",
              fontWeight: 400,
              fontSize: 20,
              textAlign: "center",
              my: 2,
            }}
          >
            online reservation system for car washes
          </Typography>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="row"
            justifyCenter="center"
            alignItems="flex-start"
            spacing={2}
            sx={{ my: 5 }}
          >
            <Grid item>
              <TextField
                id="email-invitation"
                variant="outlined"
                placeholder="Enter your email"
                sx={{
                  input: {
                    "&::placeholder": {
                      color: "black",
                      fontWeight: 500,
                      fontSize: 17,
                    },
                  },
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "black",
                    },
                  },
                  "& .MuiInputBase-root": {
                    backgroundColor: "#f8f8fa",
                    borderRadius: 4,
                    padding: 0.4,
                  },
                }}
              />
            </Grid>
            <Grid item>
              <Button
                sx={{
                  backgroundColor: "black",
                  color: "white",
                  fontWeight: 500,
                  fontSize: 17,
                  textTransform: "none",
                  borderRadius: 4,
                  py: 2,
                  px: 4,
                  ":hover": {
                    border: "1px solid black",
                    color: "black",
                    backgroundColor: "transparent",
                  },
                }}
              >
                Get Invitation
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
