import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";

function Hero() {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        py: 20,
      }}
    >
      
    <Box
  component={motion.div}
  animate={{
    y: [0, -20, 0],
    scale: [1., 1.05, 1],
  }}
  transition={{
    duration: 8,
    ease: "easeInOut",
    repeat: Infinity,
    repeatType: "loop",
  }}
  sx={{
    position: "absolute",
    top: "-5%",
    left: 0,
    width: "100%",
    height: "110%",
    backgroundImage: "url(./image/hero.png)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    zIndex: 0,
  }}
/>

     
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.55) 100%)",
          zIndex: 1,
        }}
      />

      <Container sx={{ position: "relative", zIndex: 2, height: "100%" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            height: "100%",
            gap: { xs: 2, md: 3 },
            px: { xs: "24px", md: "64px" },
          }}
        >
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            sx={{
              border: "1px solid rgba(255,255,255,0.4)",
              borderRadius: "20px",
              px: "16px",
              py: "4px",
            }}
          >
            <Typography sx={{ color: "#E4E1E9", fontSize: "12px", letterSpacing: "3px" }}>
              {t('FLAGSHIP RELEASE')}
            </Typography>
          </Box>

          <Typography
            component={motion.h1}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            variant="h1"
            sx={{
              fontSize: { xs: "32px", md: "64px" },
              fontWeight: "bold",
              color: "#FFFFFF",
            }}
          >
            {t('The Zenith Horizon')}
          </Typography>

          <Typography
            component={motion.p}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            sx={{ color: "#D6D4DE", fontSize: { xs: "14px", md: "18px" }, maxWidth: "60%" }}
          >
            {t('Uncompromising acoustic precision encased in aerospace-grade titanium. Experience silence reimagined.')}
          </Typography>

          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
            sx={{ display: "flex", gap: 2, flexWrap: "wrap", justifyContent: "center", mt: 1 }}
          >
            <Button
              component={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              sx={{
                backgroundColor: "#D4AF37",
                color: "#1A1A1A",
                fontSize: "16px",
                fontWeight: "600",
                borderRadius: "0px",
                px: { xs: "24px", md: "32px" },
                py: { xs: "10px", md: "14px" },
                transition: "background-color 0.3s",
                "&:hover": {
                  backgroundColor: "#D8B45A",
                },
              }}
            >
              {t('Shop Now')}
            </Button>

            <Button
              component={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              sx={{
                color: "#FFFFFF",
                fontSize: "16px",
                fontWeight: "400",
                borderRadius: "0px",
                px: { xs: "24px", md: "32px" },
                py: { xs: "10px", md: "14px" },
                border: "1px solid #908FA0",
                transition: "background-color 0.3s, color 0.3s",
                "&:hover": {
                  backgroundColor: "#FFFFFF",
                  color: "#1A1A1A",
                },
              }}
            >
              {t('Learn More')}
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Hero;