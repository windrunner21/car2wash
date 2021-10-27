import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/icons-material/ViewHeadline";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Slide from "@mui/material/Slide";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function NavigationBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const [drawerState, setDrawerState] = useState(false);

  const openDrawer = () => {
    setDrawerState(true);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        elevation={0}
        sx={{ backgroundColor: "white", py: 2, px: isMobile ? 0 : 10 }}
      >
        <Toolbar>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item sx={{ flexGrow: 1 }}>
              <Button
                sx={{
                  color: "black",
                  fontSize: 24,
                  fontWeight: 900,
                  backgroundColor: "transparent",
                  textTransform: "none",
                  ":hover": {
                    color: "black",
                    backgroundColor: "transparent",
                  },
                }}
              >
                Car 2 Wash
              </Button>
            </Grid>
            {isMobile ? (
              <>
                <IconButton
                  size="large"
                  sx={{ color: "black" }}
                  onClick={() => openDrawer()}
                >
                  <Icon fontSize="inherit" />
                </IconButton>
                <Dialog
                  fullScreen
                  TransitionComponent={Transition}
                  open={drawerState}
                  onClose={() => setDrawerState(false)}
                >
                  <List>
                    <ListItem
                      sx={{ py: 5 }}
                      secondaryAction={
                        <IconButton>
                          <CloseIcon
                            size="large"
                            sx={{ color: "black" }}
                            onClick={() => setDrawerState(false)}
                          />
                        </IconButton>
                      }
                    ></ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemText primary="Business" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemText primary="Pricing" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemText primary="Features" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemText primary="About" />
                      </ListItemButton>
                    </ListItem>
                    <Divider />
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemText primary="Log in" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemText primary="Sign up" />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Dialog>
              </>
            ) : (
              <>
                <Grid item sx={{ flexGrow: 1 }}>
                  <Grid
                    container
                    direction="row"
                    alignItems="center"
                    spacing={2}
                  >
                    <Grid item>
                      <Button
                        sx={{
                          color: "gray",
                          fontSize: 17,
                          fontWeight: 500,
                          textTransform: "none",
                          ":hover": {
                            color: "black",
                            backgroundColor: "transparent",
                          },
                        }}
                      >
                        Business
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        sx={{
                          color: "gray",
                          fontWeight: 500,
                          fontSize: 17,
                          textTransform: "none",
                          ":hover": {
                            color: "black",
                            backgroundColor: "transparent",
                          },
                        }}
                      >
                        Pricing
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        sx={{
                          color: "gray",
                          fontWeight: 500,
                          fontSize: 17,
                          textTransform: "none",
                          ":hover": {
                            color: "black",
                            backgroundColor: "transparent",
                          },
                        }}
                      >
                        Features
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        sx={{
                          color: "gray",
                          fontWeight: 500,
                          fontSize: 17,
                          textTransform: "none",
                          ":hover": {
                            color: "black",
                            backgroundColor: "transparent",
                          },
                        }}
                      >
                        About
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid
                    container
                    direction="row"
                    alignItems="center"
                    spacing={2}
                  >
                    <Grid item>
                      <Button
                        sx={{
                          color: "black",
                          fontSize: 17,
                          fontWeight: 500,
                          textTransform: "none",
                          ":hover": {
                            color: "gray",
                            backgroundColor: "transparent",
                          },
                        }}
                      >
                        Log in
                      </Button>
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
                        Sign up
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
