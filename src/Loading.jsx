
import { Box, Typography } from "@mui/material";
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
        zIndex: 9999,
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
        <Box
          component={motion.div}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
          sx={{
            width: "55px",
            height: "55px",
            border: "3px solid rgba(242, 202, 80, 0.2)",
            borderTop: "3px solid #F2CA50",
            borderRadius: "50%",
          }}
        />

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

