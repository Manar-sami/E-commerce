import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import useResetPassword from "../../src/Hook/ResetPassword";
import { useState } from "react";
function VerifyCode() {
    const navigate=useNavigate();

     const { mutate: reset } = useResetPassword();
     const [value, setvalue] = useState("");
     

 const {
     register,
     handleSubmit,
   } = useForm({});


const onSubmit = (data) => {
  reset(
        {
      code: value,
      email:"",
    },
    {
      onSuccess: () => {
        navigate("/ResetPassword");
      },
      onError: () => {
        alert("Invalid code");
      },
    }
  );
  
};

  return (
    <Container maxWidth="sm">

      <Box
  component="form"
  onSubmit={handleSubmit(onSubmit)}
  sx={{
    mt: 10,
    p: 5,
    borderRadius: 3,
    boxShadow: 3,
    background: "#fff",
  }}
>
  <Typography
    variant="h4"
    sx={{
      fontWeight: "bold",
      mb: 2,
    }}
  >
    Verify Code
  </Typography>

  <Typography
    sx={{
      color: "#767683",
      mb: 4,
    }}
  >
    Enter the verification code sent to your email.
  </Typography>

  <TextField
    value={value}
    onChange={(e) => setvalue(e.target.value)}
    fullWidth
    label="Verification Code"
    variant="standard"
  />

  <Button
    type="submit"
    variant="contained"
    sx={{
      mt: 4,
      width: "100%",
      py: 2,
      borderRadius: "50px",
      background: "#000666",
      "&:hover": {
        background: "#0014b3",
      },
    }}
  >
    Verify Code
  </Button>
</Box>

    </Container>
  )
}

export default VerifyCode;