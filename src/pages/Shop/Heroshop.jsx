import { useTranslation } from "react-i18next"
import { Box, Typography } from "@mui/material"


function Heroshop() {

  const{t}=useTranslation();

  return (
     <Box   sx={{
        backgroundImage:"url(./image/shop.png)",
        height:"70vh",
        backgroundPosition:"center",
        backgroundSize:"cover",
        py:{xs:10,md:10,lg:20},
        
      }}>

        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"}}>
           <Box>
              <Typography sx={{fontSize:{xs:"28px",sm:"38px",md:"48px"},fontWeight:"bold",color:"#000666"}}>
                {t("Shop All Products")}
            </Typography>
            <Typography sx={{fontSize:"18px",color:"#454652",maxWidth:{xs:"90%",md:"70%"},mx:"auto"}}>
               {t("Elevate your daily rituals with our curated collection of architectural appliances and refined home technology.")}
            </Typography>
           </Box>
        </Box>

    </Box>
  )
}

export default Heroshop