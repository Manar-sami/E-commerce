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
                The Atelier of Sound & Silicon
              </Typography>

              <Typography sx={{fontSize:"16px",color:'colorp'}}>
                Born from a relentless pursuit of acoustic and computational
                perfection, Noir Excellence began in a small Swiss workshop. Our
                founders, a horologist and an acoustic engineer, sought to merge the
                timeless precision of mechanical craftsmanship with the bleeding
                edge of modern technology.
              </Typography>
               <Typography sx={{fontSize:"16px",color:'colorp'}}>
                Every piece we create is not merely assembled; it is orchestrated.
                From the tactile feedback of a solid brass dial to the imperceptible
                latency of our wireless protocols, we engineer emotional resonance
                into every interaction.
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