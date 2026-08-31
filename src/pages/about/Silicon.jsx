import { Box, Container, Grid, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"

function Silicon() {

   const{t}=useTranslation();

  return (
    <Box sx={{py:10}}>
       <Container>
         <Grid container spacing={2}>

            <Grid size={{xs:12,md:6}} sx={{display:"flex",flexDirection:'column',gap:3}}>
              <Typography sx={{fontSize:"48px",color:'Curatedbg',fontWeight:"700","&::after": { 
                 content: '""',
                  display: "block",
                  width: "48px",
                  height: "1px",
                  bgcolor: "#E9C349",
                  mt: 1,

              }}}>
                {t("The Atelier of Sound & Silicon")}
              </Typography>

              <Typography sx={{fontSize:"16px",color:'colorp'}}>
               {t("aboutStory")}
              </Typography>
               <Typography sx={{fontSize:"16px",color:'colorp'}}>
                {t("aboutDescription2")}
              </Typography>
              
            </Grid>

            <Grid size={{xs:12,md:6}}>
                 <Box
                    component="img"
                    src="/image/about/Silicon.png"
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

export default Silicon