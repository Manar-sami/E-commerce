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

function Header() {
  const Token = useAuthStore((state) => state.Token);
  const logout = useAuthStore((state) => state.logout);
  const { data } = useGetitemformcart();
  //  اللغة
  const changeLanguage = () => {
    const lang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(lang);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  console.log(data);
  const { t } = useTranslation();

  const navigate = useNavigate();

     const mode = Usemode((state) => state.mode);
     const toggleMode = Usemode((state) => state.togglemode);

  const hundellogout = () => {
    logout();
    navigate("/");
  };
  return (
    <>
      <Box sx={{ width: "100%",background:"background.default",boxShadow:2 }}>
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

              <List sx={{ display: { xs: "none", lg: "flex" },justifyContent:"space-between" }}>
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
                  to="/Products"
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
                  {t("Products")}
                </ListItem>

                <ListItem
                  component={Link}
                  to="/Categories"
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
                  {t("Categories")}
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
              </List>
              {/* التصميم الخاص بال mune */}

              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <Button
                  id="demo-positioned-button"
                  aria-controls={open ? "demo-positioned-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open}
                  onClick={handleClick}
                  sx={{ color: "#1B1C1C" }}
                >
                  <MenuIcon />
                </Button>
                <Menu
                  id="demo-positioned-menu"
                  aria-labelledby="demo-positioned-button"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                >
                  <ListItem
                    component={Link}
                    to="/"
                    sx={{
                      color: "#1B1C1C",
                      fontSize: "16px",
                      fontWeight: "600",
                      transition: "0.3s",
                      "&:hover": {
                        color: "#000666",
                        textDecoration: "underline",
                      },
                    }}
                  >
                    {t("Home")}
                  </ListItem>
                  <ListItem
                    component={Link}
                    to="/Products"
                    sx={{
                      color: "#1B1C1C",
                      fontSize: "16px",
                      fontWeight: "600",
                      transition: "0.3s",
                      "&:hover": {
                        color: "#000666",
                        textDecoration: "underline",
                      },
                    }}
                  >
                    {t("Products")}
                  </ListItem>

                  <ListItem
                    component={Link}
                    to="/Categories"
                    sx={{
                      color: "#1B1C1C",
                      fontSize: "16px",
                      fontWeight: "600",
                      transition: "0.3s",
                      "&:hover": {
                        color: "#000666",
                        textDecoration: "underline",
                      },
                    }}
                  >
                    {t("Categories")}
                  </ListItem>

                   <ListItem
                  component={Link}
                  to="/shop"
                  sx={{
                    color: "#1B1C1C",
                    fontSize: "16px",
                    fontWeight: "600",
                    transition: "0.3s",
                    "&:hover": {
                      color: "#000666",
                      textDecoration: "underline",
                    },
                  }}
                ></ListItem>

                  <ListItem
                  component={Link}
                  to="/about"
                  sx={{
                    color: "#1B1C1C",
                    fontSize: "16px",
                    fontWeight: "600",
                    transition: "0.3s",
                    "&:hover": {
                      color: "#000666",
                      textDecoration: "underline",
                    },
                  }}
                >
                  {t("About")}
                </ListItem>
                 <ListItem
                  component={Link}
                  to="/shop"
                  sx={{
                    color: "#1B1C1C",
                    fontSize: "16px",
                    fontWeight: "600",
                    transition: "0.3s",
                    "&:hover": {
                      color: "#000666",
                      textDecoration: "underline",
                    },
                  }}
                >
                  {t("Shop")}
                </ListItem>

                  {Token ?<>
                  <MenuItem>
                    <IconButton
                      onClick={changeLanguage}
                      sx={{
                        color: "#1B1C1C",
                        fontSize: "18px",
                        fontWeight: "600",
                      }}
                    >
                      {i18n.language === "ar" ? "EN" : "AR"}
                    </IconButton>
                  </MenuItem>

                     <MenuItem>
                    {/* darkmode */}

                    <IconButton
                      onClick={toggleMode}
                      sx={{
                        color: "#1B1C1C",
                        fontSize: "18px",
                        fontWeight: "600",
                      }}
                    >
                      {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
                    </IconButton>
                  </MenuItem>
                  <MenuItem>
                    {/* profil */}
                    <Box
                     
                      component={Link}
                      to="/Profile"
                      sx={{
                        color: "#1B1C1C",
                        fontSize: "18px",
                        fontWeight: "600",
                      }}
                    >
                      <AccountCircleIcon />
                    </Box>
                  </MenuItem>

                   <MenuItem>
                    <Box
                      component={Link}
                      to="/Cart"
                      sx={{
                        color: "#1B1C1C",
                        fontSize: "18px",
                        fontWeight: "600",
                      }}
                    >
                      <ShoppingCartIcon />
                    </Box>
                  </MenuItem>
                   <MenuItem>
                    {/* logout */}
                   
                  </MenuItem>
                  </> :
                  <>

                    <MenuItem>
                    {/* darkmode */}

                    <IconButton
                      onClick={toggleMode}
                      sx={{
                        color: "#1B1C1C",
                        fontSize: "18px",
                        fontWeight: "600",
                      }}
                    >
                      {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
                    </IconButton>
                  </MenuItem>
                  <MenuItem>
                    <IconButton
                      onClick={changeLanguage}
                      sx={{
                        color: "#1B1C1C",
                        fontSize: "18px",
                        fontWeight: "600",
                      }}
                    >
                      {i18n.language === "ar" ? "EN" : "AR"}
                    </IconButton>
                  </MenuItem>
                  
                  <Box
                        component={Link}
                        to="/Login"
                        sx={{
                          color: "#E9C349",
                          fontSize: "18px",
                          fontWeight: "600",
                        }}
                      >
                        <LoginIcon />
                        Login
                  </Box>
                  </>
                  }

                  

                  
               

                 
                 
                </Menu>
              </Box>

              <Box sx={{ display: { xs: "none", md: "flex" } }}>
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
                          {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
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
                        {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
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