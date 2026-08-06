import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";

function SubscribeSection() {
 const {t}=useTranslation();

  return (
    <Box sx={{ py: 10, backgroundColor: "#F7F5F3" }}>
      <Container >
        <Paper
         
          sx={{
            p: { xs: 4, md: 8 },
            borderRadius: "24px",
            textAlign: "center",
            backgroundColor: "#fff",
            boxShadow: "0 15px 40px rgba(0,0,0,.08)",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: "#222",
              mb: 2,
            }}
          >
            {t("Join the Circle")}
          </Typography>

          <Typography
            sx={{
              color: "#6B7280",
              maxWidth: "520px",
              mx: "auto",
              mb: 5,
              lineHeight: 1.8,
            }}
          >
           {t("Be the first to experience private seasonal drops, designer interviews, and member-only benefits.")}
          </Typography>

          <Box
            component="form"
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            <TextField
              placeholder={t("Your email address")}
              sx={{
                width: { xs: "100%", sm: 320 },
              }}
            />

            <Button
              variant="contained"
              sx={{
                px: 5,
                borderRadius: "10px",
                backgroundColor: "#111C7A",
                textTransform: "none",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#0B1460",
                },
              }}
            >
              {t("Subscribe")}
            </Button>
          </Box>

          <Typography
            sx={{
              mt: 3,
              color: "#A0A0A0",
              fontSize: "12px",
            }}
          >
            {t("By joining, you agree to our Privacy Policy and Terms of Service.")}
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}

export default SubscribeSection;