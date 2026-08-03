import { Box, Typography } from "@mui/material"
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { useTranslation } from "react-i18next";

function OurMission() {
  
   const{t}=useTranslation();

  return (
    <Box sx={{py:10,display:"flex",justifyContent:"center",
    flexDirection:"column",gap:2,textAlign:"center",
    alignItems:"center",boxShadow:3,
    width:"50%",
    mx:"auto",
    borderRadius:"12px",
    }}>
        <AutoAwesomeIcon sx={{fontSize:"28px",color:"#1A237E"}}/>
        <Typography sx={{fontSize:"32px",color:"#000666",fontWeight:"bold"}}>
         {t("Our Mission")}
        </Typography>
        <Typography sx={{fontSize:"18px",color:"#454652"}}>
            {t("To elevate the human experience by infusing daily rituals with beauty, silence, and unparalleled performance.")}
        </Typography>
    </Box>
  )
}

export default OurMission