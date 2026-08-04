
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LoopIcon from '@mui/icons-material/Loop';
import { useTranslation } from "react-i18next";
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import ForestIcon from '@mui/icons-material/Forest';

function Sustainability_Section() {
    
  const{t}=useTranslation();

  return (
         <Container sx={{py:10}}>
            <Box sx={{textAlign:"center",mb:5}}>
                <Typography sx={{fontSize:"32px",color:"#000666",fontWeight:"bold"}}>
                    {t("Sustainability by Design")}
                </Typography>
                <Typography sx={{fontSize:"16px",color:"#454652",maxWidth:{xs:"90%",md:"50%"},mx:"auto"}}>
                    {t("True luxury is responsible. Our commitment to the planet is woven into the very fabric of our manufacturing processes.")}
                </Typography>
            </Box>
             <Grid container spacing={3} >
 
              <Grid  size={{ xs: 12, md: 6, lg: 4 }}>
      <Box
        sx={{
          p: 4,
          borderRadius: 3,
          backgroundColor: "#fff",
          boxShadow: 2,
          textAlign: "center",
          transition: "0.3s",
          cursor: "pointer",
          "&:hover": {
            transform: "translateY(-6px)",
            boxShadow: 6,
          },
        }}
      >
        <Box
          sx={{
            width: 70,
            height: 70,
            borderRadius: "50%",
            bgcolor: "#EEF2FF",
            color: "#1A237E",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mx: "auto",
            mb: 2,
            fontSize: 28,
            fontWeight: "bold",
          }}
        >
          <LoopIcon />
        </Box>

        <Typography
          component="h2"
          sx={{ fontWeight: "bold", color: "#1A1C1E",fontSize:"24px" }}
        >
           {t("Circular Life")}
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: "#6B7280", mt: 1 }}
        >
          {t("Our products are 98% recyclable and designed to be repaired, not replaced.")}
        </Typography>
      </Box>
              </Grid>

              <Grid  size={{ xs: 12, md: 6, lg: 4 }}>
      <Box
        sx={{
          p: 4,
          borderRadius: 3,
          backgroundColor: "#fff",
          boxShadow: 2,
          textAlign: "center",
          transition: "0.3s",
          cursor: "pointer",
          "&:hover": {
            transform: "translateY(-6px)",
            boxShadow: 6,
          },
        }}
      >
        <Box
          sx={{
            width: 70,
            height: 70,
            borderRadius: "50%",
            bgcolor: "#EEF2FF",
            color: "#1A237E",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mx: "auto",
            mb: 2,
            fontSize: 28,
            fontWeight: "bold",
          }}
        >
          <EnergySavingsLeafIcon />
        </Box>

        <Typography
          component="h2"
          sx={{ fontWeight: "bold", color: "#1A1C1E",fontSize:"24px" }}
        >
           {t("Efficiency Max")}
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: "#6B7280", mt: 1 }}
        >
          {t("A-rated energy consumption across our entire catalog without compromising performance.")}
        </Typography>
      </Box>
              </Grid>

              <Grid  size={{ xs: 12, md: 6, lg: 4 }}>
      <Box
        sx={{
          p: 4,
          borderRadius: 3,
          backgroundColor: "#fff",
          boxShadow: 2,
          textAlign: "center",
          transition: "0.3s",
          cursor: "pointer",
          "&:hover": {
            transform: "translateY(-6px)",
            boxShadow: 6,
          },
        }}
      >
        <Box
          sx={{
            width: 70,
            height: 70,
            borderRadius: "50%",
            bgcolor: "#EEF2FF",
            color: "#1A237E",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mx: "auto",
            mb: 2,
            fontSize: 28,
            fontWeight: "bold",
          }}
        >
          <ForestIcon />
        </Box>

        <Typography
          component="h2"
          sx={{ fontWeight: "bold", color: "#1A1C1E",fontSize:"24px" }}
        >
           {t("Carbon Neutral")}
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: "#6B7280", mt: 1 }}
        >
          {t("Our logistics and manufacturing centers operate on 100% renewable energy.")}
        </Typography>
      </Box>
              </Grid>
 
          </Grid> 

          
         </Container>
  )
}

export default Sustainability_Section