
import Box from '@mui/material/Box'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Footer() {

  const{t}=useTranslation();

  return (
    <Box component="section" sx={{py:10,textAlign:{xs:"center",md:"start",},bgcolor:"footerbg"}}>
        <Container>
           <Grid container sx={{pb:5}} spacing={2}>

              <Grid size={{xs:12,md:6,lg:3}}>
            
                  <Box
                    component={Link}
                    to="/"
                    sx={{
                      fontSize: "40px",
                      fontWeight: "bold",
                      color: "#F2CA50",
                      textDecoration: "none",
                    }}
                  >    
                     KaShop
                 </Box>
                 <Typography sx={{color:"headercolor",fontSize:"16px",mt:"24px"}}>
                  {t("Precision Engineering. Uncompromising Quality.")}
                 </Typography>
            
              </Grid>

              <Grid size={{xs:12,md:6,lg:3}}>

               <List sx={{
                  width: "fit-content",
               mx: { xs: "auto", md: 0 },
               }}>
                <ListItem component={Link} to="./about" sx={{px:"0px",fontSize:"14px",fontWeight:"600",color:'headercolor',
                
                transition:"color 0.3s ease",
                  "&:hover":{
                    color:"#F2CA50",
                    textDecoration:"underline"
                  }
                }}>
                 {t("About")}
                </ListItem>
                  
                <ListItem component={Link} to="./shop" sx={{px:"0px",fontSize:"14px",fontWeight:"600",color:'headercolor',
                transition:"color 0.3s ease",
                  "&:hover":{
                    color:"#F2CA50",
                    textDecoration:"underline"
                  }
                }}>
                 {t("Shop")}
                </ListItem>

                
               </List>
              </Grid>


               <Grid size={{xs:12,md:6,lg:3}}>
              

               <List
                sx={{
                  width: "fit-content",
                  mx: { xs: "auto", md: 0 },
                }}
               >
                <ListItem component={Link} sx={{px:"0px",fontSize:"14px",fontWeight:"600",color:'headercolor',
                transition:"color 0.3s ease",
                  "&:hover":{
                    color:"#F2CA50",
                    textDecoration:"underline"
                  }
                }}>
                 {t("Customer Service")}
                </ListItem>
                  
                <ListItem component={Link} sx={{px:"0px",fontSize:"14px",fontWeight:"600",color:'headercolor',
                transition:"color 0.3s ease",
                  "&:hover":{
                    color:"#F2CA50",
                    textDecoration:"underline"
                  }
                }}>
                 {t("Contact")}
                </ListItem> 
               </List>
              </Grid>

               <Grid size={{xs:12,md:6,lg:3}}>
           

               <List
                 sx={{
                  width: "fit-content",
                  mx: { xs: "auto", md: 0 },
                }}
               >
               <ListItem component={Link} sx={{px:"0px",fontSize:"14px",fontWeight:"600",color:'headercolor',
                transition:"color 0.3s ease",
                  "&:hover":{
                    color:"#F2CA50",
                    textDecoration:"underline"
                  }
                }}>
                 {t("Privacy Policy")}
                </ListItem>
                  
                <ListItem component={Link} sx={{px:"0px",fontSize:"14px",fontWeight:"600",color:'headercolor',
                transition:"color 0.3s ease",
                  "&:hover":{
                    color:"#F2CA50",
                    textDecoration:"underline"
                  }
                }}>
                 {t("Terms of Service")}
                </ListItem>

                  
               </List>
              </Grid>

            
          </Grid>


          <Box sx={{pt:5,display:"flex" ,flexDirection:{xs:"column",md:"row"},justifyContent:"center",alignItems:"center"}}>
            <Typography sx={{color:"headercolor"}}>
              {t("© 2026 KaShop Luxury Retail. All rights reserved.")}
            </Typography>
           
          </Box>
        </Container>
       
    </Box>
  )
}

export default Footer;