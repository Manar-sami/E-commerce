import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useForgetPassword from "./../../Hook/ForgetPassword"
import { useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom";


function Forgetpassword() {
  
    const {mutate:forget}=useForgetPassword();
     const navigate=useNavigate();
    
    
 const {
     register,
     handleSubmit,
   } = useForm({});


   const forgetpassword=(data)=>{
    console.log(data);

    forget(data, {
        onSuccess:()=>{
      navigate("/ResetPassword");
    }
    })
   }

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          mt: 10,
          p: 5,
          borderRadius: 3,
          boxShadow: 3,
          backgroundColor: "#fff",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 2,
          }}
        >
          Forgot Password?
        </Typography>

        <Typography
          sx={{
            color: "#767683",
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
          <TextField
          {...register("email")}
            label="Email Address"
            type="email"
            variant="standard"
          />

          <Button
          type="submit"
            variant="contained"
            sx={{
              mt: 2,
              py: 2,
              borderRadius: "50px",
              background: "#000666",
              "&:hover": {
                background: "#0014b3",
              },
            }}
          >
            Send Code
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Forgetpassword;