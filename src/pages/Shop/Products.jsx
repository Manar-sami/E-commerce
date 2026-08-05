
import Box from "@mui/material/Box"
import useGetproducts from "../../Hook/Getproducts"
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import { Link } from "react-router-dom";
import { CircularProgress } from "@mui/material";

function Products({ ascending,sortBy ,minPrice,maxPrice}) {
 
   
  
  const{data,isLoading,isError}=useGetproducts({
    ascending,
    sortBy,
    minPrice,
    maxPrice
  });
 
 
  
    if (isLoading) return <CircularProgress></CircularProgress>;
    if (isError) return <Typography>Error</Typography>;
    console.log(data.response.data);
   
  return (
  <Box sx={{py:10}}>
   <Container>
    
    

     <Box sx={{py:2}}>
        <Grid container spacing={2}>
         {data.response.data.map((product)=>{
            return(
                 <Grid size={{xs:12,md:6,lg:3}} component={Link} to={`/product/${product.id}`}>
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
        
        </CardContent>
      </CardActionArea>
                 </Card>
                 </Grid>
            )
         })}
          
        </Grid>
     </Box>


  

   </Container>

  </Box>
  )

}

export default Products