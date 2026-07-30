
import useGetitemformcart from "../../Hook/Getitemformcart";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import useClearcart from "../../Hook/Clearcart";
import { Container, Grid } from "@mui/material";
import Checkout_section from "./Checkout_section";
import Getcart from "./Getcart";


function Cart() { 
  // هان استدعينا ال hook الخاص يلي بجيب المنتجات الموجودة في السلة
  const{data,isLoading,isError,error}=useGetitemformcart();
  console.log(data)


   

   
    // هان ال hook الخاص ب مسح جميع عناصر السلة 
    const {mutate:clear}=useClearcart();
    console.log(clear);


 

 return (

  <Box sx={{py:10}}>
    <Container>
      <Typography component="h1" sx={{fontSize:{xs:"24px",md:"48px"},fontWeight:"bold",color:"#000666"}}>
       Your Shopping Bag
      </Typography>
      <Typography sx={{color:"#5E5E5E",fontSize:"16px"}}>
        {data.length}  Items ready for delivery
      </Typography>

      <Grid container spacing={4}>
        <Grid size={{xs:12,md:8}} sx={{mt:5}}>
        
        <Getcart></Getcart>

        {data.length==0?"":<Button  onClick={()=>clear()} sx={{fontSize:"16px",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",color:"#000666"}}>
           Clear Cart
        </Button>}
      </Grid>
      <Grid size={{xs:12,md:4}} sx={{mt:5}}>
        <Checkout_section></Checkout_section>
       
      </Grid>

      </Grid>
    </Container>

  </Box>
    
    
  );
  
}

export default Cart;