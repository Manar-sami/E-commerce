
import { Box,Typography,Grid, } from "@mui/material"
import { useTranslation } from "react-i18next"

function Specification() {
    const{t}=useTranslation();
  return (
    <Box
    sx={{
      mt: 4,
      p: { xs: 2, sm: 3 },
      border: "1px solid #E9C34930",
      borderRadius: "8px",
      backgroundColor: "#0d0d0e",
    }}
  >
    <Typography
      sx={{
        color: "#E9C349",
        fontSize: "22px",
        fontWeight: 600,
        mb: 3,
      }}
    >
      {t("Product Features")}
    </Typography>

    <Grid container spacing={2}>
      <Grid size={{ xs: 12, sm: 6 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            p: 2,
            border: "1px solid #E9C34920",
            borderRadius: "6px",
            transition: "0.3s",
            "&:hover": {
              borderColor: "#E9C349",
              transform: "translateY(-3px)",
            },
          }}
        >
          <Box
            sx={{
              width: 42,
              height: 42,
              minWidth: 42,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              backgroundColor: "#E9C34915",
              color: "#E9C349",
            }}
          >
            ✓
          </Box>

          <Box>
            <Typography
              sx={{
                color: "white",
                fontSize: "16px",
                fontWeight: 500,
              }}
            >
             {t("Premium Quality")} 
            </Typography>

            <Typography
              sx={{
                color: "#9CA3AF",
                fontSize: "14px",
                mt: 0.5,
              }}
            >
              {t("Crafted with carefully selected materials.")} 
            </Typography>
          </Box>
        </Box>
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            p: 2,
            border: "1px solid #E9C34920",
            borderRadius: "6px",
            transition: "0.3s",
            "&:hover": {
              borderColor: "#E9C349",
              transform: "translateY(-3px)",
            },
          }}
        >
          <Box
            sx={{
              width: 42,
              height: 42,
              minWidth: 42,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              backgroundColor: "#E9C34915",
              color: "#E9C349",
            }}
          >
            ✓
          </Box>

          <Box>
            <Typography
              sx={{
                color: "white",
                fontSize: "16px",
                fontWeight: 500,
              }}
            >
             {t("Elegant Design")}  
            </Typography>

            <Typography
              sx={{
                color: "#9CA3AF",
                fontSize: "14px",
                mt: 0.5,
              }}
            >
             {t("A refined design made for a premium experience.")}  
            </Typography>
          </Box>
        </Box>
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            p: 2,
            border: "1px solid #E9C34920",
            borderRadius: "6px",
            transition: "0.3s",
            "&:hover": {
              borderColor: "#E9C349",
              transform: "translateY(-3px)",
            },
          }}
        >
          <Box
            sx={{
              width: 42,
              height: 42,
              minWidth: 42,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              backgroundColor: "#E9C34915",
              color: "#E9C349",
            }}
          >
            ✓
          </Box>

          <Box>
            <Typography
              sx={{
                color: "white",
                fontSize: "16px",
                fontWeight: 500,
              }}
            >
              {t("Built to Last")}
            </Typography>

            <Typography
              sx={{
                color: "#9CA3AF",
                fontSize: "14px",
                mt: 0.5,
              }}
            >
            {t("Designed for reliable and long-lasting performance.")} 
            </Typography>
          </Box>
        </Box>
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            p: 2,
            border: "1px solid #E9C34920",
            borderRadius: "6px",
            transition: "0.3s",
            "&:hover": {
              borderColor: "#E9C349",
              transform: "translateY(-3px)",
            },
          }}
        >
          <Box
            sx={{
              width: 42,
              height: 42,
              minWidth: 42,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              backgroundColor: "#E9C34915",
              color: "#E9C349",
            }}
          >
            ✓
          </Box>

          <Box>
            <Typography
              sx={{
                color: "white",
                fontSize: "16px",
                fontWeight: 500,
              }}
            >
             {t("Exceptional Experience")}  
            </Typography>

            <Typography
              sx={{
                color: "#9CA3AF",
                fontSize: "14px",
                mt: 0.5,
              }}
            >
              {t("Designed to deliver comfort, style and performance.")}  
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  </Box>
  )
}

export default Specification