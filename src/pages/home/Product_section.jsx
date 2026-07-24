import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import EastIcon from '@mui/icons-material/East';
import useGetproducts from "./../../Hook/Getproducts"
import i18n from "../../languge";
import WestIcon from '@mui/icons-material/West';
import Grid from "@mui/material/Grid";


function Product_section() {

    //  الخاص بالترجمة 
     const { t } = useTranslation();
    
     const{data,isLoading,isError}=useGetproducts();

     if (isLoading) return <p>Loading...</p>;
   if (isError) return <p>Error</p>;
     console.log(data.response.data);
  return (
    <Box sx={{py:10}}>
     <Container maxWidth="lg">
       <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"start"}}>
        <Box>
            <Typography component="p" sx={{fontSize:"16px",fontWeight:"bold"}}>
           {t('Curated Essentials')}
        </Typography>

        <Typography component="p" sx={{mt:1}}>
           {t('Refined silhouettes and premium materials, curated for the discerning individual')}
        </Typography>
        </Box>
         {data.response.data.length>3?
         <Box component={Link}>
            {t("View All Products")}
            {i18n.language=="ar"?< WestIcon/>:<><EastIcon/></>}
            
        </Box>:""}
         
       </Box>
         
        <Grid container spacing={2} sx={{py:5}}>

            {data.response.data.map((product)=>{

                return(
                <Grid
                      key={product.id}
                      size={{ xs: 12, md: 6, lg: 4 }}
                      sx={{
                        backgroundImage: `url(${product.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "500px",
                        borderRadius: 1,
                        boxShadow: 3,
                        position: "relative",
                        overflow: "hidden",
                        
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          inset: 0,
                          backgroundColor: "rgba(0,0,0,0.7)",
                        },
                      }}
                       >
                         <Box
                           sx={{
                             display: "flex",
                             alignItems: "flex-end",
                             height: "100%",
                             p: 4,
                             position: "relative",
                           }}
                         >
                           <Typography sx={{ color: "white" ,fontSize:"16px"}}>
                             {product.name}
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

export default Product_section
