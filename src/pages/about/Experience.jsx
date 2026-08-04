import { Box, Button, Typography } from "@mui/material"
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function Experience() {
  const navigate = useNavigate();
  const{t}=useTranslation();

  return (
    <Box sx={{py:10,display:"flex",justifyContent:"center",flexDirection:"column",gap:2,textAlign:"center",alignItems:"center",boxShadow:3,width:{xs:"90%",md:"50%"},mx:"auto",borderRadius:"12px"}}>
      <Typography sx={{fontSize:{xs:"24px",sm:"28px",md:"48px"},color:"#000666",fontWeight:"bold"}}>
        {t("Experience Excellence")}
      </Typography>
       <Box>
         <Button onClick={() => navigate("/Categories")} sx={{ml:2,px:4,py:2,borderRadius:"12px",backgroundColor:"#1A237E",color:"#fff","&:hover":{backgroundColor:"#000666"}}}>
        {t("EXPLORE COLLECTIONS")}
         </Button>

         <Button sx={{ml:2,px:4,py:2,borderRadius:"12px",backgroundColor:"#fff",color:"#1A237E",border:"1px solid #1A237E","&:hover":{backgroundColor:"#000666",color:"#fff"}}}>
        {t("VISIT A SHOWROOM")}
         </Button>
        </Box>
    </Box>
  )
}

export default Experience