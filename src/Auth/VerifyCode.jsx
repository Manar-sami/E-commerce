import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
function VerifyCode() {
    const navigate=useNavigate()

 const {
     register,
     handleSubmit,
   } = useForm({});


const onSubmit = (data) => {
  console.log(data); 
  navigate("/ResetPassword");
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
    {...register("code")}
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