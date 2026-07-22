import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useResetPassword from "../../Hook/ResetPassword";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaResetPassword} from "../resetpassword/schemaResetPassword";
import {useNavigate} from "react-router-dom";

function ResetPassword() {
   const navigate=useNavigate();

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schemaResetPassword),
  });

  const { mutate: reset } = useResetPassword();
  const onSubmit = (data) => {
    console.log(data);
    console.log("manar");
    reset(data,{
       onSuccess:()=>{
          alert("Password changed successfully");
         navigate("/Login");
       }
    });
  };

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
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
          Reset Password
        </Typography>

        <Typography sx={{ color: "#767683", mb: 4 }}>
          Enter the verification code and your new password.
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <TextField
            {...register("email")}
            label="Email"
            type="email"
            variant="standard"
          />

          <TextField
            {...register("code")}
            label="Verification Code"
            variant="standard"
          />

          <TextField
            {...register("newPassword")}
            label="New Password"
            type="password"
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
            Reset Password
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default ResetPassword;
