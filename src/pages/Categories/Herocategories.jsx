
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import { useTranslation } from "react-i18next"


function Herocategories() {
  const{t}=useTranslation()
  return (
    <Box sx={{py:10,backgroundColor:"#F7F5F3"}} >
      <Container>
        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",textAlign:"center",maxWidth:"70%",mx:"auto"}}>
              <Typography component="p" sx={{color:"#000666",fontSize:"14px",fontWeight:"700px"}}>
        {t("SPRING SUMMER 2026")}
      </Typography>
      <Typography component="h1" sx={{color:"black",fontSize:{xs:"32px",md:"64px"},fontWeight:"bold"}}>
        {t("Curated Collections of Timeless Elegance")}
      </Typography>

       <Typography component="p" sx={{color:"#454652",fontSize:"18px"}}>
        {t("Explore our meticulously chosen categories, where high-end craftsmanship meets contemporary design for the discerning lifestyle.")}
      </Typography>
        </Box>

      </Container>
    </Box>
  )
}

export default Herocategories