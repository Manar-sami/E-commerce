import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import { Link } from "react-router-dom"
import Grid from "@mui/material/Grid"
import { useTranslation } from "react-i18next"

function COMMUNITY() {
     const { t } = useTranslation();
  return (
    <Box sx={{py:10}}>
        <Container maxWidth="lg">
           <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
            <Box>
                  <Typography component="p" sx={{fontSize:"12px",fontWeight:"600",color:"#000666",textAlign:"center"}}>
                      {t('THE COMMUNITY')}
                 </Typography>
            <Typography component="p" sx={{fontSize:"32px",fontWeight:"bold",color:"#0B1C30"}}>
           {t('Trusted by the Discerning.')}
        </Typography>
        </Box>
         
         
           </Box>

             <Grid container spacing={2} sx={{py:5}}>

           
                      <Grid
                     
                      size={{ xs: 12, md: 6, lg: 4 }}
                      
                       >
                         <Box
                           sx={{
                            backgroundColor:"#EFF4FF",
                            borderRadius:"12px",
                            px:"60px",
                            py:"40px",
                            display:"flex",
                            justifyContent:"center",
                            alignItems:"center",
                            flexDirection:"column",
                            gap:"5px"
                           }}
                         >
                           <Typography sx={{ color: "#0B1C30" ,fontSize:"22px",fontWeight:"700"}}>
                             {t("The Archive Series")}
                           </Typography>
                           <Typography sx={{color:"#000666",fontSize:"16px"}}>
                            {t("EXPLORE")}
                           </Typography>
                         </Box>
                      </Grid>

                       <Grid
                     
                      size={{ xs: 12, md: 6, lg: 4 }}
                      
                       >
                         <Box
                           sx={{
                            backgroundColor:"#EFF4FF",
                            borderRadius:"12px",
                            px:"60px",
                            py:"40px",
                            display:"flex",
                            justifyContent:"center",
                            alignItems:"center",
                            flexDirection:"column",
                            gap:"5px"
                           }}
                         >
                           <Typography sx={{ color: "#0B1C30" ,fontSize:"22px",fontWeight:"700"}}>
                             {t("Elevated Basics")}
                           </Typography>
                           <Typography sx={{color:"#000666",fontSize:"16px"}}>
                            {t("EXPLORE")}
                           </Typography>
                         </Box>
                      </Grid>

                       <Grid
                     
                      size={{ xs: 12, md: 6, lg: 4 }}
                      
                       >
                         <Box
                           sx={{
                            backgroundColor:"#EFF4FF",
                            borderRadius:"12px",
                            px:"60px",
                            py:"40px",
                            display:"flex",
                            justifyContent:"center",
                            alignItems:"center",
                            flexDirection:"column",
                            gap:"5px"
                           }}
                         >
                           <Typography sx={{ color: "#0B1C30" ,fontSize:"22px",fontWeight:"700"}}>
                             {t("Object & Form")}
                           </Typography>
                           <Typography sx={{color:"#000666",fontSize:"16px"}}>
                            {t("EXPLORE")}
                           </Typography>
                         </Box>
                      </Grid>
         
             

  
       </Grid>
        </Container>
    </Box>
  )
}

export default COMMUNITY