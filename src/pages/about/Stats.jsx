
import { Box, Container, Grid, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"

function Stats() {
  const { t } = useTranslation();
  return (
     <Box sx={{py:10,textAlign:"center"}}>
      <Container sx={{border:"1px solid #4C454630",py:8}}>
        <Grid spacing={3} container>
         <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
           <Typography sx={{color:"#E9C349",fontSize:"48px",fontWeight:"700"}}>
            20+
           </Typography>
           <Typography sx={{color:"colorp",fontSize:"12px",fontWeight:"700",mt:1}}>
            YEARS OF EXCELLENCE
           </Typography>
         </Grid>

         <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
           <Typography sx={{color:"#E9C349",fontSize:"48px",fontWeight:"700"}}>
            1M+
           </Typography>
           <Typography sx={{color:"colorp",fontSize:"12px",fontWeight:"700",mt:1}}>
            PRODUCTS DELIVERED
           </Typography>
         </Grid>

         <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
           <Typography sx={{color:"#E9C349",fontSize:"48px",fontWeight:"700"}}>
            500K+
           </Typography>
           <Typography sx={{color:"colorp",fontSize:"12px",fontWeight:"700",mt:1}}>
            SATISFIED CLIENTS
           </Typography>
         </Grid>

         <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
           <Typography sx={{color:"#E9C349",fontSize:"48px",fontWeight:"700"}}>
            45
           </Typography>
           <Typography sx={{color:"colorp",fontSize:"12px",fontWeight:"700",mt:1}}>
            COUNTRIES SERVED
           </Typography>
         </Grid>
        </Grid>
      </Container>
     </Box>
  )
}

export default Stats