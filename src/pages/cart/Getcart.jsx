
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
import { useTranslation } from "react-i18next";
import Swal from 'sweetalert2'

function Getcart() {

  const{t}=useTranslation();

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


      const handleRemove = (productId,productName) => {
  Swal.fire({
    title: `Delete "${productName}"?`,
    text: "Are you sure you want to remove this product from your cart?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, remove it",
    cancelButtonText: "Cancel",
    

    
  }).then((result) => {
    if (result.isConfirmed) {
      removecart(productId);

      Swal.fire({
        icon: "success",
        title: "Removed!",
        text: "Product removed successfully.",
        timer: 1500,
        showConfirmButton: false,
      });
    }
  });
};
   
    // هان استدعينا ال hook الخاص يلي بعدل الكمية  الموجودة في السلة
   const{mutate:update,isPending:updateitem}=useUpdateQuantity();

   if(isLoading) return <CircularProgress></CircularProgress>
   if(isError) return <Typography>{error}</Typography>



  return (
    <Box>
         {data.map((cart)=>{
          return(
            <Box sx={{bgcolor:"card",display:"flex",flexDirection:"column",mb:3,gap:2,boxShadow:2,border:"1px solid #F2CA5020",p:"24px",borderRadius:"8px"}}>
              <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <Typography sx={{color:"h2color",fontSize:"24px",fontWeight:"bold"}}>
                  {cart.productName}
                </Typography>
                <Typography sx={{color:"#F2CA50",fontSize:"24px",fontWeight:"bold"}}>
                 ${cart.price}
                </Typography>
              </Box>
              <Typography sx={{color:"headercolor",fontSize:"12px"}}>
                {t("Matte Black / 5.5L Capacity")}
              </Typography>

              <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap"}}>
                 <Box sx={{display: "flex",alignItems:"center",justifyContent:"end",border:"1px solid #4D463530",borderRadius:"100px"}}>
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
                 
                 <Box sx={{mx:2}}>{cart.count}</Box>
                   <IconButton>
                  < AddIcon disabled={updateitem} onClick={()=>handuleupdate(cart.productId,'+')}/>
                 </IconButton>
              </Box>

               <Box sx={{color:"headercolor",display:"flex",alignItems:"center",gap:3}}>
                 
                <Button sx={{color:"headercolor"}} onClick={()=>handleRemove(cart.productId,cart.productName)}> <DeleteIcon/>{t("Remove")}</Button>
               
               </Box>
              </Box>
            </Box>
          )
        })}
    </Box>
  )
}

export default Getcart