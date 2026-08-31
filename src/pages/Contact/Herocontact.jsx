import { Box, Container, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"


function Herocontact() {
    const{t}=useTranslation();
  return (
    <Box sx={{py:10,bgcolor:"contactbg"}}>
        <Container>
            <Box sx={{display:'flex',justifyContent:"center",alignItems:'center',flexDirection:"column",gap:2}}>
                <Typography sx={{color:"#FFE088",fontSize:{xs:"38px",md:'48px',lg:"64px"}}} >
                    {t("Get in Touch")}
                </Typography>
                <Typography sx={{color:"headercolor",maxWidth:{xs:"100%",lg:"50%"},textAlign:'center'}}>
                   {t("Experience unparalleled support. Our dedicated concierge team is ready to assist you with inquiries regarding our precision-engineered collection.")}
                </Typography>
            </Box>
        </Container>
    </Box>
  )
}

export default Herocontact