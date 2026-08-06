import Box from "@mui/material/Box"
import useGetproducts from "./../../Hook/Getproducts"
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useTranslation } from "react-i18next";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import SortIcon from '@mui/icons-material/Sort';
import TuneIcon from '@mui/icons-material/Tune';
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import { useState } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";


function Getprducts() {
 
  const[ascending, setAscending]=useState(false)
   
  const{data,isLoading,isError}=useGetproducts({
    ascending,
    sortBy:"price"
  });
  const{t}=useTranslation();
 
  
    if (isLoading) return <span class="loader"></span>;
    if (isError) return <p>Error</p>;
    console.log(data.response.data);
   
  return (
  <Box sx={{py:10}}>
   <Container>
    
     <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap"}}>
        <Box sx={{display:"flex",alignItems:"center",gap:2,flexWrap:"wrap"}}>
        <Typography component="h3" sx={{
            fontSize:"24px",
            fontWeight:"bold",
        }}>
          {t("All Appliances")}
        </Typography>
        
        <Typography sx={{color:"#5A5A75"}}>
           ({data.response.data.length} {t("items")}) 
        </Typography>
     </Box>

      <Box>
        <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",gap:2}}>
            <Select
            
            value={ascending ? "asc" : "desc"}
            onChange={(e) => setAscending(e.target.value === "asc")}
             
            >
                
                
                <MenuItem value="asc">
                 <SortIcon/> {t("Sort by: Price Low to High")}
                </MenuItem>
                <MenuItem value="desc">
                 <SortIcon/> {t("Sort by: Price High to Low")}
                </MenuItem>
            </Select>

            <Box sx={{border:"1px solid #EEF1F7",p:"12px",borderRadius:"4px"}}>
                <TuneIcon/>
                {t("Filter")}
            </Box>
        </Box>
      </Box>

     </Box>

     <Box sx={{py:10}}>
        <Grid container spacing={2}>
         {data.response.data.map((product)=>{
            return(
                 <Grid size={{xs:12,md:6,lg:4}} component={Link} to={`/product/${product.id}`}>
                    <Card sx={{ maxWidth: 345 }}>
         <CardActionArea>
        <CardMedia
          component="img"
          height="140"
            src={product.image}
            alt={product.name}
            sx={{ filter: "brightness(70%)"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {product.name}
          </Typography>
          <Typography>
            {product.price}$
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {t("Precision technology meets modern luxury design for every morning.")}
          </Typography>
        </CardContent>
      </CardActionArea>
                 </Card>
                 </Grid>
            )
         })}
          
        </Grid>
     </Box>


     <Box sx={{ flexGrow: 1, padding: { xs: 2, md: 4 } }}>
      <Grid container spacing={4} alignItems="stretch">
        
        
        <Grid item size={{xs:12,md:6}}>
          <Box
            sx={{
              backgroundColor: '#f8faff',
              borderRadius: '24px',
              padding: { xs: 4, md: 8 },
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}
          >
          
            <Typography
              variant="overline"
              sx={{
                color: '#6366f1', 
                fontWeight: '700',
                letterSpacing: '1.5px',
                fontSize: '0.85rem',
                mb: 2,
              }}
            >
              {t("DESIGN PHILOSOPHY")}
            </Typography>

          
            <Typography
              variant="h3"
              component="h2"
              sx={{
                color: '#0f172a', 
                fontWeight: '800',
                lineHeight: 1.2,
                mb: 3,
                fontSize: { xs: '32px', md: '38px' },
              }}
            >
              {t("Innovation Beyond")} <br /> {t("the Familiar")}
            </Typography>

          
            <Typography
              variant="body1"
              sx={{
                color: '#475569',
                lineHeight: 1.6,
                mb: 5,
                maxWidth: '480px',
              }}
            >
             {t(" We don't just sell tools; we offer artistic pieces that elevate the quality of your daily experience in the heart of your home.")}
            </Typography>

            
            <Button
              variant="text"
              
              sx={{
                color: '#4f46e5',
                fontWeight: '700',
                textTransform: 'none',
                fontSize: '16px',
                padding: 0,
                paddingBottom: '4px',
                borderRadius: 0,
                borderBottom: '2px solid #4f46e5', 
                '&:hover': {
                  backgroundColor: 'transparent',
                  opacity: 0.8,
                },
              }}
            >
              {t("Explore Full Collection")}
            </Button>
          </Box>
        </Grid>

       
        <Grid item size={{xs:12,md:6}}>
          <Box
            sx={{
              borderRadius: '24px',
              overflow: 'hidden',
              height: '100%',
              minHeight: { xs: '300px', md: '100%' },
              boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.05)', 
            }}
          >
            <Box
              component="img"
              src="./image/Product.png"
              alt="Innovation Beyond the Familiar"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </Box>
        </Grid>

      </Grid>
    </Box>

   </Container>

  </Box>
  )
}

export default Getprducts