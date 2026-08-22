import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from "@mui/material/Button";
import useForgetPassword from "./../../Hook/ForgetPassword"
import { useForm } from "react-hook-form";
import {Link, useNavigate} from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { useState } from "react";
import {Schemaforget} from "./Schemaforget"
import { yupResolver } from "@hookform/resolvers/yup";


function Forgetpassword() {
  
    const {mutate:forget,isPending}=useForgetPassword();
    const [error, setError] = useState("");
     const navigate=useNavigate();
    
 const {
     register,
     handleSubmit,
     formState: { errors}
   } = useForm({
    resolver: yupResolver(Schemaforget),
   });
    

   const forgetpassword=(data)=>{
    console.log(data);
       localStorage.setItem("userEmail", data.email);
    forget(data, {
        onSuccess:()=>{
      navigate("/ResetPassword");
    },
    onError:(error)=>{
      setError(error.response.data.message)
     
     console.log(error.response.data.message)
    }
    })
   }

  return (
    <Container>
      <Box
        sx={{
          mt: 10,
          p: 5,
          borderRadius: "12px",
          boxShadow: 3,
          border:"1px solid #FFFFFF10",
          backgroundColor: "#0F0F0F",
          textAlign:'center',
          maxWidth:{xs:"90%",md:"50%",lg:"40%"},
          mx:"auto",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color:"#F2CA50",
            fontSize:{xs:"38px",md:"48px",lg:"64px"},
            mb: 2,
          }}
        >
          KaShop
        </Typography>

        <Typography sx={{fontSize:'32px',color:"#E5E2E1"}}>
          Forgot Your Password?
        </Typography>

        <Typography
          sx={{
            color: "#D0C5AF",
            mb: 4,
          }}
        >
          Enter your email and we will send you a verification code.
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit(forgetpassword)}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
        
          

          <Box component="input" placeholder="Email Address" {...register("email")}
          sx={{
            px:1,
            py:2,
          }}
          >

          </Box>


          <Button
          type="submit"
            variant="contained"
            disabled={isPending}
            sx={{
              mt: 2,
              py: "12px",
              borderRadius: "4px",
              background: "#D4AF37",
              fontSize:"16px",
              fontWeight:"600",
              "&:hover": {
                background: "#F2CA50",
              },
            }}
          >
            {isPending?<CircularProgress></CircularProgress>:"Send Code"}
          </Button>
        </Box>

         {errors.email ? (
                  <Box sx={{color:"red",mt:2 }}>{errors.email.message}</Box>
                ) : (
                  ""
                )}

        {error && (
  <Typography sx={{ color: "red", mt: 1 }}>
    {error}
  </Typography>
)}

        <Box component={Link} to="/login" sx={{
          color:"#D0C5AF",
          textDecoration:'none',
          display:"flex",
          justifyContent:'center',
          alignItems:'center',
          py:5
        }}>
       <ArrowBackIcon /> BACK TO LOGIN
        </Box>
      </Box>
    </Container>
  );
}

export default Forgetpassword;