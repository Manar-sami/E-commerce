
import useGetitemformcart from "../../Hook/Getitemformcart";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import useRemovitemcart from "../../Hook/Removitemcart";
import useUpdateQuantity from "../../Hook/UpdateQuantity";
import { CircularProgress } from "@mui/material";
import Button from "@mui/material/Button";
function Getcart() {

    // هان استدعينا ال hook الخاص يلي بجيب المنتجات الموجودة في السلة
  const{data,isLoading,isError,error}=useGetitemformcart();
  console.log(data);
   // هان استدعينا ال hook الخاص يلي بحذف المنتج الموجودة في السلة
    const{mutate:removecart,isPending}=useRemovitemcart();
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

    // هان استدعينا ال hook الخاص يلي بعدل الكمية  الموجودة في السلة
   const{mutate:update,isPending:updateitem}=useUpdateQuantity();

   if(isLoading) return <CircularProgress></CircularProgress>
   if(isError) return <Typography>{error}</Typography>



  return (
    <Box>
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
    </Box>
  )
}

export default Getcart