
import Box from '@mui/material/Box'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import IconButton from '@mui/material/IconButton';
function Footer() {

  const{t}=useTranslation();

  return (
    <Box component="section" sx={{py:10,textAlign:{xs:"center",md:"start"}}}>
        <Container>
           <Grid container sx={{pb:5}} spacing={2}>

              <Grid size={{xs:12,md:6,lg:3}}>
            
                  <Box
                    component={Link}
                    to="/"
                    sx={{
                      fontSize: "24px",
                      fontWeight: "bold",
                      color: "black",
                      textDecoration: "none",
                    }}
                  >    
                     KaShop
                 </Box>
                 <Typography sx={{color:"#4546522",fontSize:"16px",mt:"24px"}}>
                  {t("Elevating the everyday through curated luxury and architectural design.")}
                 </Typography>
            
              </Grid>

              <Grid size={{xs:12,md:6,lg:3}}>
               <Typography sx={{fontSize:"16px",color:"#0B1C30",fontWeight:"500"}}>
                {t("CLIENT SERVICE")}
               </Typography>

               <List sx={{
                  width: "fit-content",
               mx: { xs: "auto", md: 0 },
               }}>
                <ListItem component={Link} sx={{px:"0px",fontSize:"14px",fontWeight:"600",color:'#454652',
                transition:"color 0.3s ease",
                  "&:hover":{
                    color:"#0B1C30",
                    textDecoration:"underline"
                  }
                }}>
                 {t("Track Order")}
                </ListItem>
                  
                <ListItem component={Link} sx={{px:"0px",fontSize:"14px",fontWeight:"600",color:'#454652',
                transition:"color 0.3s ease",
                  "&:hover":{
                    color:"#0B1C30",
                    textDecoration:"underline"
                  }
                }}>
                 {t("Shipping & Returns")}
                </ListItem>

                <ListItem component={Link} sx={{px:"0px",fontSize:"14px",fontWeight:"600",color:'#454652',
                transition:"color 0.3s ease",
                  "&:hover":{
                    color:"#0B1C30",
                    textDecoration:"underline"
                  }
                }}>
                 {t("Size Guide")}
                </ListItem> 

                <ListItem component={Link} sx={{px:"0px",fontSize:"14px",fontWeight:"600",color:'#454652',
                transition:"color 0.3s ease",
                  "&:hover":{
                    color:"#0B1C30",
                    textDecoration:"underline"
                  }
                }}>
                 {t("Contact Us")}
                </ListItem>   
               </List>
              </Grid>


               <Grid size={{xs:12,md:6,lg:3}}>
               <Typography sx={{fontSize:"16px",color:"#0B1C30",fontWeight:"500"}}>
                {t("ABOUT KASHOP")}
               </Typography>

               <List
                sx={{
                  width: "fit-content",
                  mx: { xs: "auto", md: 0 },
                }}
               >
                <ListItem component={Link} sx={{px:"0px",fontSize:"14px",fontWeight:"600",color:'#454652',
                transition:"color 0.3s ease",
                  "&:hover":{
                    color:"#0B1C30",
                    textDecoration:"underline"
                  }
                }}>
                 {t("Our Story")}
                </ListItem>
                  
                <ListItem component={Link} sx={{px:"0px",fontSize:"14px",fontWeight:"600",color:'#454652',
                transition:"color 0.3s ease",
                  "&:hover":{
                    color:"#0B1C30",
                    textDecoration:"underline"
                  }
                }}>
                 {t("Sustainability")}
                </ListItem>

                <ListItem component={Link} sx={{px:"0px",fontSize:"14px",fontWeight:"600",color:'#454652',
                transition:"color 0.3s ease",
                  "&:hover":{
                    color:"#0B1C30",
                    textDecoration:"underline"
                  }
                }}>
                 {t("Retail Locations")}
                </ListItem> 

                <ListItem component={Link} sx={{px:"0px",fontSize:"14px",fontWeight:"600",color:'#454652',
                transition:"color 0.3s ease",
                  "&:hover":{
                    color:"#0B1C30",
                    textDecoration:"underline"
                  }
                }}>
                 {t("Careers")}
                </ListItem>   
               </List>
              </Grid>

               <Grid size={{xs:12,md:6,lg:3}}>
               <Typography sx={{fontSize:"16px",color:"#0B1C30",fontWeight:"500"}}>
                {t("LEGAL")}
               </Typography>

               <List
                 sx={{
                  width: "fit-content",
                  mx: { xs: "auto", md: 0 },
                }}
               >
                <ListItem component={Link} sx={{px:"0px",fontSize:"14px",fontWeight:"600",color:'#454652',
                transition:"color 0.3s ease",
                  "&:hover":{
                    color:"#0B1C30",
                    textDecoration:"underline"
                  }
                }}>
                 {t("Privacy Policy")}
                </ListItem>
                  
                <ListItem component={Link} sx={{px:"0px",fontSize:"14px",fontWeight:"600",color:'#454652',
                transition:"color 0.3s ease",
                  "&:hover":{
                    color:"#0B1C30",
                    textDecoration:"underline"
                  }
                }}>
                 {t("Terms of Service")}
                </ListItem>

                <ListItem component={Link} sx={{px:"0px",fontSize:"14px",fontWeight:"600",color:'#454652',
                transition:"color 0.3s ease",
                  "&:hover":{
                    color:"#0B1C30",
                    textDecoration:"underline"
                  }
                }}>
                 {t("Cookie Settings")}
                </ListItem> 

                  
               </List>
              </Grid>

            
          </Grid>


          <Box sx={{pt:5,borderTop:"1px solid black",display:"flex" ,flexDirection:{xs:"column",md:"row"},justifyContent:"space-between",alignItems:"center"}}>
            <Typography>
              {t("© 2026 KaShop Luxury Retail. All rights reserved.")}
            </Typography>
            <Box>
              <IconButton>
                <MarkunreadIcon />
              </IconButton>
               <IconButton>
                <TwitterIcon/>
              </IconButton>
               <IconButton>
                <WhatsAppIcon/>
              </IconButton>
              
              

            </Box>
          </Box>
        </Container>
       
    </Box>
  )
}

export default Footer;