import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import { useTranslation } from "react-i18next"
import Button from "@mui/material/Button"


function Heroproduct() {

    const{t}=useTranslation();

  return (
     <Box component="section" 
      sx={{
        backgroundImage:"url(./image/heroproduct.png)",
        height:"90vh",
        backgroundPosition:"center",
        backgroundSize:"cover",
        py:{xs:10,md:10,lg:20},
      }}
     >
        <Container>
            {/* <Box>
                <Typography component="p">
                    {t("THE EXCLUSIVE 2024 COLLECTION")}
                </Typography>
                <Typography>
                    {t("Premium Collection")}
                </Typography>
            </Box> */}

            <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid white",
               width:{sx:"75%",md:"65%",lg:"45%"}, 
                mx:"auto",
                borderRadius:"16px",
                p:{xs:"10px",md:"20px",lg:"32px"},
                gap:{xs:2,md:4},
                textAlign:"center",
                backdropFilter: "blur(7px)",
                flexDirection:"column",
            }}>
             <Typography sx={{color:"#E1E0FF",fontSize:"16px",letterSpacing:"4px"}}>
                 {t('THE EXCLUSIVE 2026 COLLECTION')}
             </Typography>
            <Typography component="h1" variant="h1" sx={{fontSize:{xs:"24px",md:"48px"},fontWeight:"bold",color:"white"}}>
                 {t('Premium Collection')}
            </Typography>

            <Typography component="p" sx={{color:"#C7C4D7",fontSize:"16px"}}>
               {t('Discover the perfect balance between architectural innovation and minimalist aesthetics. Premium appliances designed to elevate every moment in your home.')}
            </Typography>

             <Box sx={{display:"flex",gap:2,flexWrap:"wrap"}}>
                <Button sx={{
                    color:"#E4E1E9",
                    fontSize:"16px",
                    fontWeight:"400",
                    borderRadius:"8px",
                    px:{xs:"10px",md:"20px",lg:"40px"},
                    py:{xs:"8px",md:"12px",lg:"24px"},
                    border:"1px solid #908FA0",
                    transition:"0.5s"
,                    "&:hover":{
                        backgroundColor:"#C0C1FF",
                        color:"#1000A9",
                    }
                }}>
                     {t('Explore Now')}
                </Button>

                 <Button sx={{
                    color:"#E4E1E9",
                    fontSize:"16px",
                    fontWeight:"400",
                    borderRadius:"8px",
                    px:{xs:"10px",md:"20px",lg:"40px"},
                    py:{xs:"8px",md:"12px",lg:"24px"},
                    border:"1px solid #908FA0",
                    transition:"0.5s"
,                    "&:hover":{
                        backgroundColor:"#C0C1FF",
                        color:"#1000A9",
                    }
                }}>
                      {t('Watch Video')}
                </Button>
             </Box>

            </Box>

        </Container>

     </Box>
  )
}

export default Heroproduct