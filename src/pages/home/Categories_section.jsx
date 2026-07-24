import { useTranslation } from 'react-i18next';
import useCetcategorise from "./../../Hook/Getcategorise"
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import i18n from "../../languge";
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import Grid from '@mui/material/Grid';
 
function Categories_section() {

     //  الخاص بالترجمة 
         const { t } = useTranslation();

        const {data,isLoading,isError}=useCetcategorise();
        if (isLoading) return <span class="loader"></span>;
        if (isError) return <p>Error</p>;

        console.log(data)
  return (
    <Box sx={{py:10}}>
        <Container maxWidth="lg">
           <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"start"}}>
            <Box>
            <Typography component="p" sx={{fontSize:"32px",fontWeight:"bold"}}>
           {t('Featured Categories')}
        </Typography>
        </Box>
         {data.response.data.length>3?
         <Box component={Link} to="/Categories">
            {t("View All  Categories")}
            {i18n.language=="ar"?< WestIcon/>:<><EastIcon/></>}
            
        </Box>:""}
         
           </Box>

             <Grid container spacing={2} sx={{py:5}}>

            {data.response.data.slice(0, 3).map((item)=>{

                return(
                <Grid
                      key={item.id}
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
                           <Typography sx={{ color: "#0B1C30" ,fontSize:"28px",fontWeight:"700",letterSpacing:"3px"}}>
                             {item.name}
                           </Typography>
                           <Typography sx={{color:"#000666",fontSize:"16px"}}>
                            {t("EXPLORE")}
                           </Typography>
                         </Box>
                      </Grid>
                )
             
            })}
             

  
       </Grid>
        </Container>
    </Box>
  )
}

export default Categories_section