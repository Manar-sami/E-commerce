import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import { useTranslation } from "react-i18next";


function Seasonal_section() {

    const { t } = useTranslation();

  return (
   <Box sx={{
    backgroundImage:"url(./image/home.png)",
    height:"500px",
    py:10,
    backgroundPosition:"center",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat",
    width:"100%"

   }}>
    <Container>
        <Typography sx={{fontSize:{xs:"24px",md:"32px",lg:"64px"},fontWeight:"bold",color:"white"}}>
            {t("A Seasonal Shift.")}
            
        </Typography>

        <Typography sx={{fontSize:"18px",color:"white",maxWidth:"43%",mt:"20px"}}>
            {t("Exclusive early access to our Autumn/Winter pre-collection. Tailored for the transition.")}
        </Typography>

        <Button sx={{
            backgroundColor:"white",
            color:"#000666",
            fontSize:"14px",
            borderRadius:8,
            px:"20px",
            py:"15px",
            mt:"20px",
            transition:"0,03s",
            "&:hover":{
                backgroundColor:"#000666",
                color:"white",
            }
        }}>
            {t("Explore Pre-Collection")}
        </Button>


    </Container>
   </Box>
  )
}

export default Seasonal_section