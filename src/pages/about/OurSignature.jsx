import { Box, Button, Typography, Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function OurSignature() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        px: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container>
        <Box
          sx={{
            border: "1px solid rgba(212, 184, 150, 0.2)",
            backgroundColor: "#111113",
            p: { xs: 4, md: 8 },
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            sx={{
              color: "#ffffff",
              fontWeight: 500,
              fontSize: { xs: "29px", sm: "40px", md: "48px" },
              lineHeight: 1.2,
              mb: 2.5,
              maxWidth: "600px",
            }}
          >
            {t("Discover Our Signature Collection")}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#a1a1aa",
              fontSize: { xs: "14px", md: "16px" },
              fontWeight: 300,
              mb: 4,
              maxWidth: "500px",
              lineHeight: 1.6,
              letterSpacing: "0.3px",
            }}
          >
            {t(
              "Experience the synthesis of high-fidelity audio and horological precision.",
            )}
          </Typography>

          <Button
            variant="contained"
            onClick={()=>navigate("/shop")}
            sx={{
              backgroundColor: "#e3c263",
              color: "#000000",
              fontWeight: 700,
              fontSize: "14px",
              letterSpacing: "1.5px",
              px: 4,
              py: 1.2,
              borderRadius: "2px",
              textTransform: "uppercase",
              "&:hover": {
                backgroundColor: "#cbab51",
              },
            }}
          >
            {t("SHOP NOW")}
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default OurSignature;
