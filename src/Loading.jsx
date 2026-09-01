
import { Box, Typography, CircularProgress } from "@mui/material";
import { motion } from "framer-motion";

function Loading() {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.55)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 30,
      }}
    >
      <Box
        sx={{
          width: "200px",
          minHeight: "180px",
          backgroundColor: "background.default",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          boxShadow: "0px 10px 40px rgba(0, 0, 0, 0.35)",
        }}
      >
        <CircularProgress sx={{color:"#F2CA50"}} />

        <Typography
          component={motion.p}
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          sx={{
            margin: 0,
            fontSize: "15px",
            color: "colorp",
            fontWeight: "500",
          }}
        >
          Please wait...
        </Typography>
      </Box>
    </Box>
  );
}

export default Loading;

