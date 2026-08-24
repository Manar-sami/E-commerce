import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import SettingsIcon from "@mui/icons-material/Settings";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";

function Seasonal_section() {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        bgcolor: "background",
        color: "#ffffff",
        py: 8,
        px: 2,
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            bgcolor: "#1a1a1a",
            borderRadius: 3,
            overflow: "hidden",
            mb: 6,
            border: "1px solid #262626",
          }}
        >
          <Grid container>
            <Grid item size={{ xs: 12, md: 6 }}>
              <Box
                component="img"
                src="./image/Tower.png"
                alt="Omnis Tower Speaker"
                sx={{
                  width: "100%",
                  height: "100%",
                  minHeight: 400,
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Grid>

            <Grid
              item
              size={{ xs: 12, md: 6 }}
              sx={{
                py: { xs: 5, md: 10 },
                px: { xs: 5, md: 10 },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "#d4af37",
                  fontWeight: 700,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  mb: 1,
                  fontSize: "0.75rem",
                }}
              >
                Masterpiece Collection
              </Typography>

              <Typography
                variant="h3"
                component="h1"
                sx={{ fontWeight: 600, mb: 2 }}
              >
                Omnis Tower
              </Typography>

              <Typography
                variant="body2"
                sx={{ color: "#a1a1aa", mb: 4, lineHeight: 1.6 }}
              >
                Room-filling presence meets microscopic detail. The Omnis Tower
                is an architectural statement that redefines reference audio.
              </Typography>

              <Stack spacing={2.5} sx={{ mb: 4 }}>
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{ alignItems: "center" }}
                >
                  <GraphicEqIcon sx={{ color: "#d4af37", fontSize: 22 }} />
                  <Box>
                    <Typography
                      variant="caption"
                      display="block"
                      sx={{
                        color: "#a1a1aa",
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        letterSpacing: 0.5,
                      }}
                    >
                      FREQUENCY RESPONSE
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      18Hz - 40kHz (±3dB)
                    </Typography>
                  </Box>
                </Stack>

                <Stack
                  direction="row"
                  spacing={2}
                  sx={{ alignItems: "center" }}
                >
                  <SettingsIcon sx={{ color: "#d4af37", fontSize: 22 }} />
                  <Box>
                    <Typography
                      variant="caption"
                      display="block"
                      sx={{
                        color: "#a1a1aa",
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        letterSpacing: 0.5,
                      }}
                    >
                      DRIVER MATERIAL
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      Beryllium Tweeter, Kevlar Bass
                    </Typography>
                  </Box>
                </Stack>
              </Stack>

              <Button
                variant="contained"
                disableElevation
                sx={{
                  bgcolor: "#d4af37",
                  color: "#000000",
                  fontWeight: 700,
                  py: 1.5,
                  px: 4,
                  width: "fit-content",
                  borderRadius: 1,
                  textTransform: "none",
                  fontSize: "16px",
                  "&:hover": {
                    bgcolor: "#c5a028",
                  },
                }}
              >
                Acquire Now
              </Button>
            </Grid>
          </Grid>
        </Box>

        <Grid
          container
          spacing={3}
          justifyContent="space-between"
          sx={{ pt: "40px" }}
        >
          <Grid size={{ xs: 12, sm: 4 }}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Box
                sx={{
                  bgcolor: "#1a1a1a",
                  p: 2,
                  borderRadius: "100%",
                  height: "100%",
                  border: "1px solid #F2CA5030",
                  display: "flex",
                }}
              >
                <LocalShippingOutlinedIcon
                  sx={{ color: "#d4af37", fontSize: 20 }}
                />
              </Box>

              <Box>
                <Typography
                  sx={{ fontSize: "24px", fontWeight: 600, color: "h2color" }}
                >
                  Complimentary Courier
                </Typography>

                <Typography sx={{ fontSize: "14px", color: "#71717a" }}>
                  Insured global delivery.
                </Typography>
              </Box>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, sm: 4 }}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Box
                sx={{
                  bgcolor: "#1a1a1a",
                  p: 2,
                  borderRadius: "100%",
                  height: "100%",
                  border: "1px solid #F2CA5030",
                  display: "flex",
                }}
              >
                <VerifiedUserOutlinedIcon
                  sx={{ color: "#d4af37", fontSize: 20 }}
                />
              </Box>

              <Box>
                <Typography
                  sx={{ fontSize: "24px", fontWeight: 600, color: "h2color" }}
                >
                  5-Year Warranty
                </Typography>

                <Typography
                  variant="caption"
                  sx={{ fontSize: "14px", color: "#71717a" }}
                >
                  Comprehensive protection plan.
                </Typography>
              </Box>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, sm: 4 }}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Box
                sx={{
                  bgcolor: "#1a1a1a",
                  p: 2,
                  borderRadius: "100%",
                  height: "100%",
                  border: "1px solid #F2CA5030",
                  display: "flex",
                }}
              >
                <LockOutlinedIcon sx={{ color: "#d4af37", fontSize: 20 }} />
              </Box>

              <Box>
                <Typography
                  sx={{ fontSize: "24px", fontWeight: 600, color: "h2color" }}
                >
                  Secure Transaction
                </Typography>

                <Typography
                  variant="caption"
                  sx={{ fontSize: "14px", color: "#71717a" }}
                >
                  Encrypted payment gateway.
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Seasonal_section;
