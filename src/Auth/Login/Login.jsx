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
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";

function Login() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [error, seterror] = useState([]);
  const setToken = UseAuthStore((state) => state.setToken);
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
      seterror(err.response.data.errors);
      console.log(err.response.data.errors);
    }
  };

  return (
    <>
      <Container maxWidth="lg">
        <Box component="section" sx={{ mt: 10, pl: 4, pr: 4 }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid size={{lg:6,md:12}}  sx={{ pb: 10, pt: 10 }}>
              <Typography
                component="h1"
                sx={{
                  fontSize: 48,
                  fontWeight: "bold",
                }}
              >
                Welcome Back
              </Typography>

              <Typography component="p" sx={{ fontSize: 18 }}>
                Access your curated wardrobe and exclusive collections.
              </Typography>

              <Box
                component="form"
                onSubmit={handleSubmit(loginform)}
                sx={{ pt: 4, display: "flex", flexDirection: "column", gap: 4 }}
              >
                <TextField
                  {...register("email")}
                  label="Email Address"
                  defaultValue="name@example.com"
                  sx={{
                    "& .MuiInputLabel-root": {
                      fontSize: 16,
                      color: "black",
                    },
                    "& .MuiInputBase-input": {
                      fontSize: 16,
                      color: "#767683",
                    },
                  }}
                  variant="standard"
                />
                {errors.email ? (
                  <div className="text-red-600">{errors.email.message}</div>
                ) : (
                  ""
                )}

                <TextField
                  {...register("password")}
                  label="Password"
                  defaultValue="••••••••"
                  sx={{
                    "& .MuiInputLabel-root": {
                      fontSize: 16,
                      color: "black",
                    },
                    "& .MuiInputBase-input": {
                      fontSize: 16,
                      color: "#767683",
                    },
                  }}
                  variant="standard"
                />
                {errors.password ? (
                  <div className="text-red-600">{errors.password.message}</div>
                ) : (
                  ""
                )}

                <Button
                  type="submit"
                  variant="contained"
                  disabled={isSubmitting}
                  sx={{ background: "#000666", borderRadius: 5, pt: 2, pb: 2 }}
                >
                  {isSubmitting ? (
                    <span className="loader"></span>
                  ) : (
                    <>
                      Sign In <ArrowRightAltIcon />
                    </>
                  )}
                </Button>
                {/* هان بظهر الخطا يلي جاي من server */}

                {error?.length > 0
                  ? error.map((err) => {
                      return <span className="text-red-600">{err}</span>;
                    })
                  : ""}

                <Typography
                  component="p"
                  sx={{ textAlign: "center", fontSize: 16, color: "#767683" }}
                >
                  OR CONTINUE WITH
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 9,
                  }}
                >
                  <Box
                    component={Link}
                    to="https://google.com/"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <GoogleIcon />
                    <Typography>Google</Typography>
                  </Box>
                  <Box
                    component={Link}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <AppleIcon />
                    <Typography>Apple</Typography>
                  </Box>
                </Box>
                 <Typography component={Link} to="/ForgetPassword"
            sx={{
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              color:"#000666",
              
            }} 
           >
            Forgot Password?
           </Typography>
              </Box>
            </Grid>

            <Grid
             size={{lg:6,md:12}}
              sx={{
                  backgroundImage: `
                    linear-gradient(
                     0deg,
                     rgba(0, 6, 102, 0.8) 0%,
                     rgba(0, 6, 102, 0.39) 50%,
                     rgba(0, 6, 102, 0.35) 100%
                   ),
                   url('./image/login.png')
                 `,
                 backgroundSize: "cover",
                 backgroundPosition: "center",
                 backgroundRepeat: "no-repeat",
                 padding:5,
                 display:"flex",
                 justifyContent:"center",
                 alignItems:"center",
                 flexDirection:"column",
              }}
            >

              <Typography component="h2" 
              sx={{fontSize: { xs: 28, sm: 40, md: 64 }
              ,color:"white"}}
              >
                Join the Collective.
              </Typography>
              <Typography component="p" sx={{fontSize:16,color:"white"}}>
                Experience retail engineered for precision.
                Members get early access to limited archives and
                personalized styling services.

              </Typography>

              
              <Box sx={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                gap:2,
                mt:5,



              }}>
                <Typography component={Link} to="/Register"
                sx={{
                  border:"1px solid  #FFFFFF",
                  padding:"16px 40px",
                  color:"white",
                  fontWeight:400,
                  borderRadius:7,
                  transition:"0.3s",
                "&:hover":{
                  backgroundColor:"white",
                  color:"#000666",

                }
                }}
                >
                Create Account
              </Typography>
                <Button
                sx={{
                  border:"1px solid  #FFFFFF",
                  padding:"16px 40px",
                  color:"white",
                  fontWeight:400,
                  borderRadius:7,
                  transition:"0.3s",
                "&:hover":{
                  backgroundColor:"white",
                  color:"#000666",

                }
                }}
                >
                  Learn More
                </Button>
              </Box>
            </Grid>
           
          </Grid>

           
        </Box>
      </Container>
    </>
  );
}

export default Login;
