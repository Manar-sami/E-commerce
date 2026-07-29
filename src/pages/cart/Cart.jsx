
import useGetitemformcart from "../../Hook/Getitemformcart";
import Typography from "@mui/material/Typography";
import useRemovitemcart from "../../Hook/Removitemcart";
import useUpdateQuantity from "../../Hook/UpdateQuantity";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import useClearcart from "../../Hook/Clearcart";
import { Container, Grid } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import Checkout_section from "./Checkout_section";


function Cart() { 
  // هان استدعينا ال hook الخاص يلي بجيب المنتجات الموجودة في السلة
  const{data,isLoading,isError,error}=useGetitemformcart();
  console.log(data)

 // هان استدعينا ال hook الخاص يلي بحذف المنتج الموجودة في السلة
  const{mutate:removecart,isPending}=useRemovitemcart();

 // هان استدعينا ال hook الخاص يلي بعدل الكمية  الموجودة في السلة
   const{mutate:update,isPending:updateitem}=useUpdateQuantity();

  //  function خاصة في التحديث
   const handuleupdate=(productId,action)=>{
    const item=data.find(i=>i.productId==productId);
    console.log(item);

   

    if (action === "+") {
    update({
      productId,
      count: item.count + 1
    });
  }
    else {
      
  update({
    productId,
    count: item.count - 1
  });
}
   }
   
    // هان ال hook الخاص ب مسح جميع عناصر السلة 
    const {mutate:clear}=useClearcart();
    console.log(clear);

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>{error.message}</div>

 

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
        
        {data.map((cart)=>{
          return(
            <Box sx={{display:"flex",flexDirection:"column",mb:3,gap:2,boxShadow:2,p:"24px",borderRadius:"8px"}}>
              <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <Typography sx={{color:"#000666",fontSize:"24px",fontWeight:"bold"}}>
                  {cart.productName}
                </Typography>
                <Typography sx={{color:"#000666",fontSize:"24px",fontWeight:"bold"}}>
                 ${cart.price}
                </Typography>
              </Box>
              <Typography sx={{color:"#5E5E5E",fontSize:"12px"}}>
                Matte Black / 5.5L Capacity
              </Typography>

              <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                 <Box sx={{display: "flex",alignItems:"center",justifyContent:"end",border:"1px solid #C6C5D4",borderRadius:"8px"}}>
                 {cart.count<=1?<>
                  <IconButton sx={{opacity:0}} >
                  < RemoveIcon disabled={updateitem} onClick={()=>handuleupdate(cart.productId,'-')}/>
                 </IconButton>
                  </> :
                  <>
                  <IconButton >
                  < RemoveIcon disabled={updateitem} onClick={()=>handuleupdate(cart.productId,'-')}/>
                 </IconButton>
                  </>
                  }
                 
                 <Box align="right">{cart.count}</Box>
                   <IconButton>
                  < AddIcon disabled={updateitem} onClick={()=>handuleupdate(cart.productId,'+')}/>
                 </IconButton>
              </Box>

               <Box sx={{color:"#BA1A1A"}}>
                
                <Button sx={{color:"#BA1A1A"}} onClick={()=>removecart(cart.productId)}> <DeleteIcon/>Remove</Button>
               </Box>
              </Box>
            </Box>
          )
        })}

        <Button  onClick={()=>clear()} sx={{fontSize:"16px",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",color:"#000666"}}>
           Clear Cart
        </Button>
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