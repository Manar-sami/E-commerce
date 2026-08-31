import { Box, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"

function Heroabout() {
  const{t}=useTranslation();

  return (
    <Box   sx={{
        backgroundImage:"url(./image/about/about.png)",
        height:"70vh",
        backgroundPosition:"center",
        backgroundSize:"cover",
        py:{xs:5,md:8,lg:10},
        
      }}>

        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"}}>
           <Box>
              <Typography sx={{fontSize:{xs:"28px",sm:"38px",md:"72px"},fontWeight:"bold",color:"#E5E2E1",maxWidth:"80%",mx:"auto"}}>
                {t("Crafting the Future of")}<Typography sx={{fontSize:{xs:"28px",sm:"38px",md:"72px"},color:"#E9C349"}}>{t("Technology")}</Typography>
            </Typography>
            <Typography sx={{fontSize:"18px",color:"#CFC4C5"}}>
             {t("ENGINEERING PRECISION SINCE 2004.")} 
            </Typography>
            
           </Box>
        </Box>

    </Box>
  )
}

export default Heroabout