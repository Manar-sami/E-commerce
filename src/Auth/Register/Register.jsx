
import axios from "axios";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

import {schema} from './Schema'
import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useTranslation } from "react-i18next";

function Register() {

    const[error,seterror]=useState([]); 
    const{t}=useTranslation();
   
      // هان استخدمنا مكتبة useForm
  const { register,handleSubmit,formState: { errors ,isSubmitting }}=useForm({
     resolver: yupResolver(schema),
  });
  
  //   هان عملت function يلي بتستقبل ال data
  const registerform= async(data)=>{
        try {
    const response = await axios.post(
      `${import.meta.env.VITE_BURL}/auth/Account/Register`,
      data
    );

    console.log(response.data);
  } catch (err) {
    seterror(err.response.data.errors)
    console.log(err.response.data.errors)
  }
  }
   

  return (


    <>
     <Container maxWidth="lg">
      <Box sx={{ mt: 10, px: 4 }}>
        <Grid container spacing={4}>

          {/* Left Side */}

          <Grid
            size={{ lg: 6, xs: 12 }}
            sx={{
              backgroundImage: 'url("./image/login.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              p: 5,
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                fontSize: {
                  xs: 30,
                  md: 60,
                },
                fontWeight: "bold",
              }}
            >
              {t("Welcome!")}
            </Typography>

            <Typography
              sx={{
                color: "#fff",
                mt: 2,
                textAlign: "center",
              }}
            >
             {t("Create your account to explore exclusive collections,personalized recommendations, and a premium shopping experience.")}
            </Typography>

          </Grid>
        

          {/* Right Side */}

            <Grid size={{ lg: 6, xs: 12 }} sx={{ py: 8,px:3,bgcolor:"#0F0F0F",boxShadow:4 }}>

            <Typography
              sx={{
                fontSize: 48,
                fontWeight: "bold",
              }}
            >
              {t("Create Account")}
            </Typography>

            <Typography sx={{ mt: 1, color: "#D0C5AF" }}>
              {t("Join our community and start your shopping journey.")}
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit(registerform)}
              sx={{
                mt: 5,
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >

              <TextField
                {...register("fullName")}
                label={t("Full Name")}
                variant="standard"
              />
              <Typography color="error">
                {errors.fullName?.message}
              </Typography>

              <TextField
                {...register("userName")}
                label={t("Username")}
                variant="standard"
              />
              <Typography color="error">
                {errors.userName?.message}
              </Typography>

              <TextField
                {...register("email")}
                label={t("Email")}
                variant="standard"
              />
              <Typography color="error">
                {errors.email?.message}
              </Typography>

              <TextField
                {...register("phoneNumber")}
                label={t("Phone Number")}
                variant="standard"
              />
              <Typography color="error">
                {errors.phoneNumber?.message}
              </Typography>

              <TextField
                {...register("password")}
                label={t("Password")}
                type="password"
                variant="standard"
              />
              <Typography color="error">
                {errors.password?.message}
              </Typography>

              <Button
                type="submit"
                disabled={isSubmitting}
                variant="contained"
                sx={{
                  py: 2,
                  borderRadius: 5,
                  background: "#D4AF37",
                }}
              >
                {isSubmitting ? (
                  <span className="loader"></span>
                ) : (
                  <>
                    {t("Create Account")}
                    <ArrowRightAltIcon />
                  </>
                )}
              </Button>

              <Typography
                component={Link}
                to="/Login"
                sx={{
                  textAlign: "center",
                  color: "#D4AF37",
                  textDecoration: "none",
                }}
              >
                {t("Already have an account? Sign In")}
              </Typography>

              <Typography>
                {error?.length > 0 ? error.map((err)=>{

           return <span className="text-red-600">{err}</span>
          }) :''}
              </Typography>

            </Box>

          </Grid>
          

        </Grid>
      </Box>
    </Container>
    </>
  )
}

export default Register;