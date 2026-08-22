import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useResetPassword from "../../Hook/ResetPassword";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaResetPassword } from "../resetpassword/schemaResetPassword";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schemaResetPassword),
  });
const email =localStorage.getItem("userEmail");
  const { mutate: reset } = useResetPassword();
  const onSubmit = (data) => {
    console.log(data);

    reset(data, {
      onSuccess: () => {
        alert("Password changed successfully");
        navigate("/Login");
      },
    });
  };
   
   
  return (
    <Container>
      <Box
        sx={{
          mt: 10,
          p: 5,
          borderRadius: "12px",
          boxShadow: 3,
          border: "1px solid #FFFFFF10",
          backgroundColor: "#0F0F0F",
          textAlign: "center",
          maxWidth: { xs: "90%", md: "50%", lg: "40%" },
          mx: "auto",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#F2CA50",
            fontSize: { xs: "38px", md: "48px", lg: "64px" },
            mb: 2,
          }}
        >
          KaShop
        </Typography>

        <Typography sx={{ fontSize: "32px", color: "#E5E2E1" }}>
          Reset Password
        </Typography>

        <Typography sx={{ color: "#D0C5AF", mb: 4 }}>
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
            value={email}
            slotProps={{ input: { readOnly: true } }} 
            variant="standard"
            sx={{
              "& .MuiInputLabel-root": { color: "#D0C5AF" },
              "& .MuiInputLabel-root.Mui-focused": { color: "#F2CA50" },
              "& .MuiInput-underline:before": { borderBottomColor: "#D0C5AF" },
              "& .MuiInput-underline:after": { borderBottomColor: "#F2CA50" },
              input: { color: "#E5E2E1" },
            }}
          />

          <TextField
            {...register("code")}
            label="Verification Code"
            variant="standard"
            sx={{
              "& .MuiInputLabel-root": { color: "#D0C5AF" },
              "& .MuiInputLabel-root.Mui-focused": { color: "#F2CA50" },
              "& .MuiInput-underline:before": { borderBottomColor: "#D0C5AF" },
              "& .MuiInput-underline:after": { borderBottomColor: "#F2CA50" },
              input: { color: "#E5E2E1" },
            }}
          />

          <TextField
            {...register("newPassword")}
            label="New Password"
            type="password"
            variant="standard"
            sx={{
              "& .MuiInputLabel-root": { color: "#D0C5AF" },
              "& .MuiInputLabel-root.Mui-focused": { color: "#F2CA50" },
              "& .MuiInput-underline:before": { borderBottomColor: "#D0C5AF" },
              "& .MuiInput-underline:after": { borderBottomColor: "#F2CA50" },
              input: { color: "#E5E2E1" },
            }}
          />

          <Button
            type="submit"
            variant="contained"
            sx={{
              mt: 2,
              py: "12px",
              borderRadius: "4px",
              background: "#D4AF37",
              color: "#000",
              fontSize: "16px",
              fontWeight: "600",
              "&:hover": {
                background: "#F2CA50",
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