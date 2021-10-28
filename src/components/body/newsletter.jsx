import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTranslation } from "react-i18next";

export default function NewsletterSection(props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useTranslation();

  const [helperError, setHelperError] = useState(false);
  const [email, setEmail] = useState("");

  // check whether email is correct
  const enterEmail = (email) => {
    let re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(email)) {
      console.log("valid");
      setHelperError(false);
      setEmail(email);
    } else {
      setHelperError(true);
      console.log("invalid");
    }
  };

  const getInvitationPressed = () => {
    console.log(email);
    if (email === "") {
      setHelperError(true);
    }
  };

  return (
    <Box sx={{ flexGrow: 1, my: 10, mx: isMobile ? 4 : 13 }}>
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
            {t("newsletter.title")}
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
            {t("newsletter.subtitle")}
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
                name="email"
                autoComplete="email"
                placeholder={t("newsletter.prompt")}
                error={helperError}
                helperText={helperError ? t("newsletter.error") : ""}
                ref={props.emailRef}
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
                onChange={(event) => enterEmail(event.target.value)}
              />
            </Grid>
            <Grid item>
              <Button
                onClick={() => getInvitationPressed()}
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
                {t("newsletter.button")}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
