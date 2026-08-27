import { Link } from "react-router-dom";
import useAuthStore from "../store/UseAuthStore";
import { useNavigate } from "react-router-dom";
import useGetitemformcart from "./../Hook/Getitemformcart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useTranslation } from "react-i18next";
import i18n from "./../languge";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import IconButton from "@mui/material/IconButton";
import LoginIcon from "@mui/icons-material/Login";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import Usemode from "../store/Usemode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Typography } from "@mui/material";

function Header() {
  const Token = useAuthStore((state) => state.Token);
  const logout = useAuthStore((state) => state.logout);
  const { data } = useGetitemformcart();
  //  اللغة
  const changeLanguage = () => {
    const lang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(lang);
  };

  const [open, setOpen] = useState(false);

  console.log(data);
  const { t } = useTranslation();

  const navigate = useNavigate();

  const mode = Usemode((state) => state.mode);
  const toggleMode = Usemode((state) => state.togglemode);

  return (
    <>
      <Box
        sx={{ width: "100%", background: "background.default", boxShadow: 2 }}
      >
        <Container maxWidth="lg">
          <Box sx={{ py: "20px" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", gap: { xs: "5px", lg: "20px" } }}>
                <Box
                  component={Link}
                  to="/"
                  sx={{
                    fontSize: { xs: "20px", md: "24px", lg: "32px" },
                    fontWeight: "bold",
                    color: "#F2CA50",
                    textDecoration: "none",
                  }}
                >
                  KaShop
                </Box>
              </Box>

              <List
                sx={{
                  display: { xs: "none", lg: "flex" },
                  justifyContent: "space-between",
                }}
              >
                <ListItem
                  component={Link}
                  to="/"
                  sx={{
                    color: "headercolor",
                    fontSize: "16px",
                    fontWeight: "600",
                    transition: "0.3s",
                    textTransform: "uppercase",
                    "&:hover": {
                      color: "#F2CA50",
                      textDecoration: "underline",
                    },
                  }}
                >
                  {t("Home")}
                </ListItem>

                <ListItem
                  component={Link}
                  to="/shop"
                  sx={{
                    color: "headercolor",
                    fontSize: "16px",
                    fontWeight: "600",
                    transition: "0.3s",
                    textTransform: "uppercase",
                    "&:hover": {
                      color: "#F2CA50",
                      textDecoration: "underline",
                    },
                  }}
                >
                  {t("Shop")}
                </ListItem>
                <ListItem
                  component={Link}
                  to="/about"
                  sx={{
                    color: "headercolor",
                    fontSize: "16px",
                    fontWeight: "600",
                    transition: "0.3s",
                    textTransform: "uppercase",
                    "&:hover": {
                      color: "#F2CA50",
                      textDecoration: "underline",
                    },
                  }}
                >
                  {t("About")}
                </ListItem>
                <ListItem
                  component={Link}
                  to="/contact"
                  sx={{
                    color: "headercolor",
                    fontSize: "16px",
                    fontWeight: "600",
                    transition: "0.3s",
                    textTransform: "uppercase",
                    "&:hover": {
                      color: "#F2CA50",
                      textDecoration: "underline",
                    },
                  }}
                >
                  {t("Contact")}
                </ListItem>
              </List>

              {/* الخاص بال menu  */}

              <IconButton
                onClick={() => setOpen(true)}
                sx={{ display: { xs: "block", md: "none" },color:"menu" }}
              >
                <MenuIcon />
              </IconButton>

              <AnimatePresence>
                {open && (
                  <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ duration: 0.3 }}
                    style={{
                      position: "fixed",
                      top: 0,
                      right: 0,
                      width: "300px",
                      height: "100vh",
                      zIndex: 9999,
                    }}
                  >
                    <Box
                      sx={{
                        height: "100%",
                        backgroundColor: "bgmenu",
                        boxShadow: 3,
                        p: 3,
                      }}
                    >
                      <IconButton
                        onClick={() => setOpen(false)}
                        sx={{ display: "flex", justifyContent: "start" }}
                      >
                        <CloseIcon sx={{ color: "headercolor" }} />
                      </IconButton>

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "end",
                          py: 4,
                          flexDirection: "column",
                          gap: 3,
                          alignItems: "end",
                          px: 5,
                          borderBottom: "1px solid #F2CA5030",
                        }}
                      >
                        <Typography
                          sx={{ fontSize: "22px", color: "headercolor" }}
                        >
                          Explore
                        </Typography>
                        <Box
                          component={Link}
                          to="/"
                          sx={{
                            textDecoration: "none",
                            color: "menu",
                            transition: "0.3s",
                            "&:hover": {
                              color: "#F2CA50",
                              textDecoration: "underline",
                              textUnderlineOffset: "5px",
                            },
                          }}
                        >
                          Home
                        </Box>
                        <Box
                          component={Link}
                          to="/shop"
                          sx={{
                            textDecoration: "none",
                            color: "menu",
                            transition: "0.3s",
                            "&:hover": {
                              color: "#F2CA50",
                              textDecoration: "underline",
                              textUnderlineOffset: "5px",
                            },
                          }}
                        >
                          Shop
                        </Box>
                        <Box
                          component={Link}
                          to="/about"
                          sx={{
                            textDecoration: "none",
                            color: "menu",
                            transition: "0.3s",
                            "&:hover": {
                              color: "#F2CA50",
                              textDecoration: "underline",
                              textUnderlineOffset: "5px",
                            },
                          }}
                        >
                          About
                        </Box>

                        <Box
                          component={Link}
                          to="/contact"
                          sx={{
                            textDecoration: "none",
                            color: "menu",
                            transition: "0.3s",
                            "&:hover": {
                              color: "#F2CA50",
                              textDecoration: "underline",
                              textUnderlineOffset: "5px",
                            },
                          }}
                        >
                          Contact
                        </Box>
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "end",
                          py: 4,
                          flexDirection: "column",
                          gap: 3,
                          alignItems: "end",
                          px: 5,
                          borderBottom: "1px solid #F2CA5030",
                        }}
                      >
                        <Typography
                          sx={{ fontSize: "22px", color: "headercolor" }}
                        >
                          Settings
                        </Typography>
                        <Box
                          sx={{
                            display:"flex",
                            alignItems: "center",
                            flexDirection: "column",
                            gap: "15px",
                          }}
                        >
                          <IconButton
                            onClick={changeLanguage}
                            sx={{
                              color: "#E9C349",
                              fontSize: "18px",
                              fontWeight: "600",
                              transition: "0.4s",
                              "&:hover": {
                                color: "#d9a807",
                              },
                            }}
                          >
                            {i18n.language === "ar" ? "EN" : "AR"}
                          </IconButton>

                          <IconButton
                            onClick={toggleMode}
                            sx={{
                              color: "#E9C349",
                              transition: "0.4s",
                              "&:hover": {
                                color: "#d9a807",
                              },
                            }}
                          >
                            {mode === "light" ? (
                              <DarkModeIcon />
                            ) : (
                              <LightModeIcon />
                            )}
                          </IconButton>

                          {Token ? (
                            <>
                              <Box
                                component={Link}
                                to="/Cart"
                                sx={{
                                  color: "#E9C349",
                                  transition: "0.4s",
                                  "&:hover": {
                                    color: "#d9a807",
                                  },
                                }}
                              >
                                <ShoppingCartIcon />
                              </Box>

                              <Box
                                component={Link}
                                to="/Profile"
                                sx={{
                                  color: "#E9C349",
                                  transition: "0.4s",
                                  "&:hover": {
                                    color: "#d9a807",
                                  },
                                }}
                              >
                                <AccountCircleIcon />
                              </Box>
                            </>
                          ) : (
                            <Box
                              component={Link}
                              to="/Login"
                              sx={{
                                color: "#E9C349",
                                fontSize: "18px",
                                fontWeight: "600",
                                textDecoration: "none",
                                transition: "0.4s",

                                "&:hover": {
                                  color: "#d9a807",
                                  textDecoration: "underline",
                                },
                              }}
                            >
                              Login
                            </Box>
                          )}
                        </Box>
                      </Box>
                    </Box>
                  </motion.div>
                )}
              </AnimatePresence>

              <Box sx={{display: { xs: "none", md: "flex" },}}>
                {Token ? (
                  <>
                    <Box
                      sx={{
                        display: { xs: "none", md: "flex" },
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "15px",
                      }}
                    >
                      <IconButton
                        onClick={changeLanguage}
                        sx={{
                          color: "#E9C349",
                          fontSize: "18px",
                          fontWeight: "600",
                          transition: "0.4s",
                          "&:hover": {
                            color: "#d9a807",
                          },
                        }}
                      >
                        {i18n.language === "ar" ? "EN" : "AR"}
                      </IconButton>

                      <IconButton
                        onClick={toggleMode}
                        sx={{
                          color: "#E9C349",
                          fontSize: "18px",
                          fontWeight: "600",
                          transition: "0.4s",
                          "&:hover": {
                            color: "#d9a807",
                          },
                        }}
                      >
                        {mode === "light" ? (
                          <DarkModeIcon />
                        ) : (
                          <LightModeIcon />
                        )}
                      </IconButton>

                      <Box
                        component={Link}
                        to="/Cart"
                        sx={{
                          color: "#E9C349",
                          fontSize: "18px",
                          fontWeight: "600",
                          transition: "0.4s",
                          "&:hover": {
                            color: "#d9a807",
                          },
                        }}
                      >
                        <ShoppingCartIcon />
                      </Box>
                      <Box
                        component={Link}
                        to="/Profile"
                        sx={{
                          color: "#E9C349",
                          fontSize: "18px",
                          fontWeight: "600",
                          transition: "0.4s",
                          "&:hover": {
                            color: "#d9a807",
                          },
                        }}
                      >
                        <AccountCircleIcon />
                      </Box>
                    </Box>
                  </>
                ) : (
                  <>
                    <Box
                      sx={{
                        display: { md: "flex", xs: "none" },
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "15px",
                      }}
                    >
                      <IconButton
                        onClick={changeLanguage}
                        sx={{
                          color: "#E9C349",
                          fontSize: "18px",
                          fontWeight: "600",
                        }}
                      >
                        {i18n.language === "ar" ? "EN" : "AR"}
                      </IconButton>

                      <IconButton
                        onClick={toggleMode}
                        sx={{
                          color: "#E9C349",
                          fontSize: "18px",
                          fontWeight: "600",
                        }}
                      >
                        {mode === "light" ? (
                          <DarkModeIcon />
                        ) : (
                          <LightModeIcon />
                        )}
                      </IconButton>

                      <Box
                        component={Link}
                        to="/Login"
                        sx={{
                          color: "#E9C349",
                          fontSize: "18px",
                          fontWeight: "600",
                        }}
                      >
                        Login
                      </Box>
                    </Box>
                  </>
                )}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Header;
