
import { Box, Container, Grid, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"

function MASTERY_section() {
  const { t } = useTranslation();
  return (
     <Box sx={{py:10}}>
       <Container>
         <Grid container spacing={2}>

            <Grid size={{xs:12,md:6}} sx={{display:"flex",flexDirection:"column",gap:2,justifyContent:"center",px:3,textAlign:"justify"}}>
            <Typography sx={{fontSize:"14px",color:"#1A237E60",fontweight:"700"}}>
              {t("MASTERY")}
            </Typography>
            <Typography sx={{fontSize:"32px",color:"#000666",fontweight:"bold"}}>
              {t("Obsessive Craftsmanship")}
            </Typography>
            <Typography sx={{fontSize:"16px",color:"#5E5E5E",fontweight:"400",lineHeight:"1.8"}}>
                {t("Every component is measured to the micron, ensuring a flawless fit and finish that lasts generations.We design for the ears as much as the eyes, utilizing advanced acoustic dampening for near-silent operation.")}
            </Typography>
            </Grid>

            <Grid size={{xs:12,md:6}}>
                 <Box
                    component="img"
                    src="/image/about/MASTERY.png"
                    alt="OURHERITAGE"
                    sx={{
                      width: "100%",
                      height: "500px",
                      borderRadius: "12px",
                      
                    }}
                        >
                    </Box>

            </Grid>

        </Grid>
       </Container>

    </Box>
  )
}

export default MASTERY_section