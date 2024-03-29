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
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTranslation } from "react-i18next";

const lngs = {
  az: { nativeName: "🇦🇿 Azerbaijani", nativeNameMobile: "🇦🇿 AZ" },
  en: { nativeName: "🇺🇸 English", nativeNameMobile: "🇺🇸 EN" },
  ru: { nativeName: "🇷🇺 Russian", nativeNameMobile: "🇷🇺 RU" },
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function NavigationBar(props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const { t, i18n } = useTranslation();
  const [drawerState, setDrawerState] = useState(false);
  const [langHovered, setLangHovered] = useState(false);

  const openDrawer = () => {
    setDrawerState(true);
  };

  const executeBusinessScroll = () =>
    props.businessRef.current.scrollIntoView({ behavior: "smooth" });
  const executeFeaturesScroll = () =>
    props.featuresRef.current.scrollIntoView({ behavior: "smooth" });
  const executeDownloadScroll = () =>
    props.downloadRef.current.scrollIntoView({ behavior: "smooth" });

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setLangHovered(true);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setLangHovered(false);
    setAnchorEl(null);
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
                onClick={() =>
                  window.open("http://192.168.0.100:3000", "_self")
                }
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
                  <List sx={{ height: "100vh" }}>
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
                    />
                    <ListItem disablePadding>
                      <ListItemButton
                        onClick={() => {
                          executeBusinessScroll();
                          setDrawerState(false);
                        }}
                      >
                        <ListItemText primary={t("navbar.business")} />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemText
                          primary={`${t("navbar.pricing")} (${t(
                            "navbar.beta"
                          )})`}
                        />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton
                        onClick={() => {
                          executeFeaturesScroll();
                          setDrawerState(false);
                        }}
                      >
                        <ListItemText primary={t("navbar.features")} />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton
                        onClick={() => {
                          executeDownloadScroll();
                          setDrawerState(false);
                        }}
                      >
                        <ListItemText primary={t("navbar.download")} />
                      </ListItemButton>
                    </ListItem>
                    <Divider variant="middle" />
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemText
                          primary={`${t("navbar.logIn")} (${t("navbar.soon")})`}
                        />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemText
                          primary={`${t("navbar.signUp")} (${t(
                            "navbar.soon"
                          )})`}
                        />
                      </ListItemButton>
                    </ListItem>
                    <ListItem
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        py: 4,
                        backgroundColor: "#f8f8fa",
                      }}
                    >
                      <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        {Object.keys(lngs).map((lng) => (
                          <Grid item key={lng}>
                            <Button
                              onClick={() => {
                                i18n.changeLanguage(lng);
                                setLangHovered(false);
                                setAnchorEl(null);
                              }}
                              sx={{
                                backgroundColor: "#ececee",
                                color: "black",
                              }}
                            >
                              {lngs[lng].nativeNameMobile}
                            </Button>
                          </Grid>
                        ))}
                      </Grid>
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
                        onClick={executeBusinessScroll}
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
                        {t("navbar.business")}
                      </Button>
                    </Grid>
                    <Grid item>
                      <Tooltip title={t("navbar.beta")} placement="bottom">
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
                          {t("navbar.pricing")}
                        </Button>
                      </Tooltip>
                    </Grid>
                    <Grid item>
                      <Button
                        onClick={executeFeaturesScroll}
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
                        {t("navbar.features")}
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        onClick={executeDownloadScroll}
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
                        {t("navbar.download")}
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        onClick={handleClick}
                        onMouseOver={handleClick}
                        onMouse
                        sx={{
                          color: langHovered ? "black" : "gray",
                          fontWeight: 500,
                          fontSize: 17,
                          textTransform: "none",
                          ":hover": {
                            color: "black",
                            backgroundColor: "transparent",
                          },
                        }}
                      >
                        {t("navbar.language")}
                      </Button>
                      <Menu
                        disableAutoFocusItem
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                          onMouseLeave: handleClose,
                        }}
                      >
                        {Object.keys(lngs).map((lng) => (
                          <MenuItem
                            key={lng}
                            onClick={() => {
                              i18n.changeLanguage(lng);
                              setLangHovered(false);
                              setAnchorEl(null);
                            }}
                          >
                            {lngs[lng].nativeName}
                          </MenuItem>
                        ))}
                      </Menu>
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
                      <Tooltip title={t("navbar.soon")} placement="bottom">
                        <Button
                          sx={{
                            color: "black",
                            fontSize: 17,
                            fontWeight: 500,
                            textTransform: "none",
                            ":hover": {
                              // color: "gray",
                              backgroundColor: "transparent",
                              color: "black",
                            },
                          }}
                        >
                          {t("navbar.logIn")}
                        </Button>
                      </Tooltip>
                    </Grid>
                    <Grid item>
                      <Tooltip title={t("navbar.soon")} placement="bottom">
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
                              // border: "1px solid black",
                              // color: "black",
                              // backgroundColor: "transparent",
                              backgroundColor: "black",
                              color: "white",
                            },
                          }}
                        >
                          {t("navbar.signUp")}
                        </Button>
                      </Tooltip>
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
