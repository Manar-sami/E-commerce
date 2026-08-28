
import { Box, Button, Typography } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    <Box
      sx={{
        minHeight: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: "20px",
        py: "60px",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          maxWidth: "650px",
          width: "100%",
          px: "20px",
        }}
      >
        <Box
          component={motion.div}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          sx={{
            width: "100px",
            height: "100px",
            border: "1px solid #F2CA50",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mx: "auto",
            mb: "30px",
            position: "relative",

            "&::after": {
              content: '""',
              position: "absolute",
              width: "120px",
              height: "120px",
              border: "1px solid rgba(242, 202, 80, 0.15)",
              borderRadius: "50%",
            },
          }}
        >
          <ErrorIcon
            sx={{
              fontSize: "50px",
              color: "#F2CA50",
            }}
          />
        </Box>

        <Typography
          sx={{
            fontSize: "13px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "#F2CA50",
            fontWeight: "600",
            mb: "12px",
          }}
        >
          Error 500
        </Typography>

        <Typography
          sx={{
            fontSize: {
              xs: "28px",
              sm: "36px",
            },
            fontWeight: "600",
            color: "h2color",
            mb: "15px",
          }}
        >
          Something went wrong
        </Typography>

        <Typography
          sx={{
            fontSize: "16px",
            color: "colorp",
            lineHeight: "1.8",
            maxWidth: "500px",
            mx: "auto",
            mb: "30px",
          }}
        >
          We couldn't load the requested data right now.
          Please try again in a moment.
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <Button
            onClick={handleRefresh}
            sx={{
              minWidth: "150px",
              backgroundColor: "#F2CA50",
              color: "#000",
              px: "30px",
              py: "12px",
              fontSize: "14px",
              fontWeight: "600",
              borderRadius: "3px",
              textTransform: "uppercase",
              letterSpacing: "1px",
              transition: "0.3s",

              "&:hover": {
                backgroundColor: "#F2CA50",
                transform: "translateY(-2px)",
                boxShadow: "0px 8px 20px rgba(242, 202, 80, 0.2)",
              },
            }}
          >
            Try Again
          </Button>

          <Button
            onClick={handleHome}
            sx={{
              minWidth: "150px",
              backgroundColor: "transparent",
              color: "h2color",
              border: "1px solid #F2CA50",
              px: "30px",
              py: "12px",
              fontSize: "14px",
              fontWeight: "600",
              borderRadius: "3px",
              textTransform: "uppercase",
              letterSpacing: "1px",
              transition: "0.3s",

              "&:hover": {
                backgroundColor: "#F2CA50",
                color: "#000",
                transform: "translateY(-2px)",
              },
            }}
          >
            Back to Home
          </Button>
        </Box>

        <Box
          sx={{
            width: "50px",
            height: "1px",
            backgroundColor: "#F2CA50",
            mx: "auto",
            mt: "35px",
            opacity: 0.6,
          }}
        />
      </Box>
    </Box>
  );
}

export default Error;

