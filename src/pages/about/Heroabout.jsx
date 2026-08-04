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
        py:{xs:10,md:10,lg:20},
        
      }}>

        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"}}>
           <Box>
              <Typography sx={{fontSize:{xs:"28px",sm:"38px",md:"48px"},fontWeight:"bold",color:"#000666"}}>
                {t("The Art of Living Well")}
            </Typography>
            <Typography sx={{fontSize:"18px",color:"#454652",maxWidth:{xs:"90%",md:"50%"},mx:"auto"}}>
               {t("Where precision engineering meets timeless design. We craft the tools for a life lived with intentionality.")}
            </Typography>
           </Box>
        </Box>

    </Box>
  )
}

export default Heroabout