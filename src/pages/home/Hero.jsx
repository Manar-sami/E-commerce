import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function Hero() {
  return (
    <>
    <Box sx={{
        backgroundImage:"url(./image/hero.png)",
        height:"100vh",
        backgroundPosition:"center",
        backgroundSize:"cover",
        py:20,
    }}>
        
        <Container>
            <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid white",
                width:"70%", 
                mx:"auto",
                borderRadius:"16px",
                p:{xs:"32px",md:"64px"},
                gap:{xs:2,md:4},
                textAlign:"center",
                backdropFilter: "blur(5px)",
                flexDirection:"column",
            }}>
             <Typography sx={{color:"#C0C1FF",fontSize:"16px",letterSpacing:"7px"}}>
                COLLECTION 2024
             </Typography>
            <Typography component="h1" variant="h1" sx={{fontSize:{xs:"24px",md:"48px"},fontWeight:"bold",color:"#E4E1E9"}}>
               The Art of Technical Precision.
            </Typography>

            <Typography component="p" sx={{color:"#C7C4D7",fontSize:"16px"}}>
               A meticulously curated selection of world-class designers and timeless pieces
               engineered for the modern aesthetic.
            </Typography>

             <Box sx={{display:"flex",gap:2,flexWrap:"wrap"}}>
                <Button sx={{
                    color:"#E4E1E9",
                    fontSize:"16px",
                    fontWeight:"400",
                    borderRadius:"8px",
                    px:{xs:"20px",md:"40px"},
                    py:{xs:"12px",md:"24px"},
                    border:"1px solid #908FA0",
                    transition:"0.5s"
,                    "&:hover":{
                        backgroundColor:"#C0C1FF",
                        color:"#1000A9",
                    }
                }}>
                    Shop the Collection
                </Button>

                 <Button sx={{
                    color:"#E4E1E9",
                    fontSize:"16px",
                    fontWeight:"400",
                    borderRadius:"8px",
                    px:{xs:"20px",md:"40px"},
                    py:{xs:"12px",md:"24px"},
                    border:"1px solid #908FA0",
                    transition:"0.5s"
,                    "&:hover":{
                        backgroundColor:"#C0C1FF",
                        color:"#1000A9",
                    }
                }}>
                    View Archive
                </Button>
             </Box>

            </Box>
        </Container>
      
    </Box>
    </>
  )
}

export default Hero
