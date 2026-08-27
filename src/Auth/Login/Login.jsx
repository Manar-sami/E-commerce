import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { schemaLogin } from "./SchemaLogin";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import UseAuthStore from "../../store/UseAuthStore";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { CircularProgress } from "@mui/material";

import {
  Checkbox,
  FormControlLabel,
  Divider,
  IconButton,
  InputAdornment,
  Paper,
} from "@mui/material";
import { color } from "framer-motion";

function Login() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [error, seterror] = useState([]);
  const setToken = UseAuthStore((state) => state.setToken);

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  // هان استخدمنا مكتبة useForm
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schemaLogin),
  });

  //   هان عملت function يلي بتستقبل ال data
  const loginform = async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BURL}/auth/Account/Login`,
        data,
      );

      console.log(response.data.accessToken);
      navigate("/");
      setToken(response.data.accessToken);
    } catch (err) {
      seterror(err.response.data.message);
      console.log(err.response.data);
    }
  };

  return (
    <>
      <Grid container sx={{ minHeight: "100vh", bgcolor: "#0a0a0a" }}>
        <Grid
          item
          size={{ xs: 12, md: 6 }}
          sx={{
            backgroundImage: 'url("./image/login.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            p: { xs: 4, md: 8 },
          }}
        >
          <Box sx={{ maxWidth: 480 }}>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                color: "#d4af37",
                fontWeight: 800,
                letterSpacing: 3,
                lineHeight: 1.1,
                mb: 3,
              }}
            >
              KaShop
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#a1a1aa", fontSize: "16px", lineHeight: 1.6 }}
            >
              Precision engineering. Uncompromising fidelity.
              <br />
              Enter the void.
            </Typography>
          </Box>
        </Grid>

        <Grid
          item
          size={{ xs: 12, md: 6 }}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: { xs: 3, md: 6 },
            bgcolor: "#0a0a0a",
          }}
        >
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, sm: 5 },
              width: "100%",
              maxWidth: 440,
              bgcolor: "#121212",
              borderRadius: 3,
              border: "1px solid #1f1f1f",
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: "#ffffff", fontWeight: 500, mb: 1 }}
            >
              Welcome Back
            </Typography>
            <Typography variant="body2" sx={{ color: "#71717a", mb: 4 }}>
              Sign in to access your bespoke audio profile.
            </Typography>

            <Box component="form" onSubmit={handleSubmit(loginform)} noValidate>
              <TextField
                {...register("email")}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email address"
                name="email"
                variant="standard"
                sx={{
                  mb: 3,
                  "& input:-webkit-autofill": {
                    WebkitBoxShadow: "0 0 0 1000px #121212 inset",
                    WebkitTextFillColor: "#ffffff",
                    caretColor: "#ffffff",
                  },
                  "& .MuiInput-root": {
                    color: "#ffffff",
                    "&:before": { borderColor: "#3f3f46" },
                    "&:hover:not(.Mui-disabled):before": {
                      borderColor: "#d4af37",
                    },
                    "&:after": { borderColor: "#d4af37" },
                  },
                  "& .MuiInputLabel-root": { color: "#71717a" },
                  "& .MuiInputLabel-root.Mui-focused": { color: "#d4af37" },
                }}
              />

              {errors.email ? (
                <Box sx={{ color: "red" }}>{errors.email.message}</Box>
              ) : (
                ""
              )}

              <TextField
                {...register("password")}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                id="password"
                variant="standard"
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleClickShowPassword}
                          edge="end"
                          sx={{ color: "#71717a" }}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }}
                sx={{
                  mb: 2,
                  "& input:-webkit-autofill": {
                    WebkitBoxShadow: "0 0 0 1000px #121212 inset",
                    WebkitTextFillColor: "#ffffff",
                    caretColor: "#ffffff",
                  },
                  "& .MuiInput-root": {
                    color: "#ffffff",

                    "&:before": {
                      borderColor: "#3f3f46",
                    },

                    "&:hover:not(.Mui-disabled):before": {
                      borderColor: "#d4af37",
                    },

                    "&:after": {
                      borderColor: "#d4af37",
                    },
                  },

                  "& .MuiInputLabel-root": {
                    color: "#71717a",
                  },

                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#d4af37",
                  },
                }}
              />

              {errors.password ? (
                <Box sx={{ color: "red" }}>{errors.password.message}</Box>
              ) : (
                ""
              )}

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 3,
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      size="small"
                      sx={{
                        color: "#3f3f46",
                        "&.Mui-checked": { color: "#d4af37" },
                      }}
                    />
                  }
                  label={
                    <Typography
                      variant="body2"
                      sx={{ color: "#a1a1aa", fontSize: "13px" }}
                    >
                      Remember me
                    </Typography>
                  }
                />
                <Box
                  component={Link}
                  to="/ForgetPassword"
                  underline="none"
                  sx={{
                    color: "#F2CA50",
                    fontSize: "13px",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  Forgot Password?
                </Box>
              </Box>
              {/* هان بظهر الخطا يلي جاي من server */}

              <Box sx={{ color: "red", my: 1 }}>{error}</Box>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                disableElevation
                sx={{
                  bgcolor: "#d4af37",
                  color: "#000000",
                  fontWeight: 700,
                  py: 1.3,
                  borderRadius: 1,
                  textTransform: "none",
                  fontSize: "16px",
                  mb: 4,
                  "&:hover": {
                    bgcolor: "#c5a028",
                  },
                }}
              >
                {isSubmitting ? (
                  <CircularProgress></CircularProgress>
                ) : (
                  <>{t("Log In")}</>
                )}
              </Button>

              <Divider
                sx={{
                  color: "#71717a",
                  fontSize: "12px",
                  mb: 3,
                  "&::before, &::after": { borderColor: "#27272a" },
                }}
              >
                Or continue with
              </Divider>

              <Grid container spacing={2} sx={{ mb: 4 }}>
                <Grid item size={6}>
                  <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<AppleIcon />}
                    sx={{
                      color: "#ffffff",
                      borderColor: "#27272a",
                      borderRadius: 1,
                      textTransform: "none",
                      py: 1,
                      fontSize: "14px",
                      "&:hover": {
                        borderColor: "#d4af37",
                        bgcolor: "rgba(212, 175, 55, 0.05)",
                      },
                    }}
                  >
                    Apple
                  </Button>
                </Grid>
                <Grid item size={6}>
                  <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<GoogleIcon />}
                    sx={{
                      color: "#ffffff",
                      borderColor: "#27272a",
                      borderRadius: 1,
                      textTransform: "none",
                      py: 1,
                      fontSize: "14px",
                      "&:hover": {
                        borderColor: "#d4af37",
                        bgcolor: "rgba(212, 175, 55, 0.05)",
                      },
                    }}
                  >
                    Google
                  </Button>
                </Grid>
              </Grid>

              <Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#71717a",
                    fontSize: "13px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  Don't have an account?
                  <Box
                    component={Link}
                    to="/Register"
                    sx={{
                      color: "#d4af37",
                      fontWeight: 600,
                      mx: 1,
                      textDecoration: "none",
                    }}
                  >
                    Sign Up
                  </Box>
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default Login;
