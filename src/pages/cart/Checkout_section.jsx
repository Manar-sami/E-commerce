
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import useGetitemformcart from "../../Hook/Getitemformcart";
import HttpsIcon from '@mui/icons-material/Https';
import { useNavigate } from "react-router-dom";

function Checkout_section() {
      const{data,isLoading,isError,error}=useGetitemformcart();
      let total = 0;
      const navigatin=useNavigate()

      data.map((item) => {
        total += item.totalPrice;
      });
       const estimatedTaxes = total * 0.10;
       const fainaltotal= total + estimatedTaxes;

      if(isLoading) return <CircularProgress></CircularProgress>;
      if(isError) return <Typography sx={{color:"red"}}>{error}</Typography>

      console.log(total);

  return (
    <Box sx={{boxShadow:2,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",py:"24px",px:"87px",borderRadius:"8px"}}>
        <Typography sx={{fontWeight:"bold",fontSize:"24px",color:"#000666"}}>
            Order Summary
        </Typography>
        <Box sx={{display:"flex",justifyContent:"space-between",width: "100%",mt:2}}>
            <Typography sx={{color:"#5E5E5E",fontSize:"16px"}}>
                Subtotal
            </Typography>
            <Typography component="span" sx={{color:"#1B1C1C",fontSize:"16px",fontWeight:"700"}}>
             ${total}.00
            </Typography>
        </Box>

        <Box sx={{display:"flex",justifyContent:"space-between",width: "100%",mt:2}}>
            <Typography sx={{color:"#5E5E5E",fontSize:"16px"}}>
                Shipping
            </Typography>
            <Typography component="span" sx={{color:"#8690EE",fontSize:"16px",fontWeight:"700"}}>
             Free
            </Typography>
        </Box>
        <Box sx={{display:"flex",justifyContent:"space-between",width: "100%",mt:2,mb:1}}>
            <Typography sx={{color:"#5E5E5E",fontSize:"16px"}}>
                Shipping
            </Typography>
            <Typography component="span" sx={{color:"#1B1C1C",fontSize:"16px",fontWeight:"700"}}>
             ${estimatedTaxes}
            </Typography>
        </Box>

        <Box sx={{borderTop:"1px solid #C6C5D430",width:"100%",py:1}}>
          <Box sx={{display:"flex",justifyContent:"space-between",width: "100%",mt:2,mb:1}}>
            <Typography sx={{color:"#000666",fontSize:"24px",fontWeight:"bold"}}>
               Total
            </Typography>
            <Typography component="span" sx={{color:"#000666",fontSize:"24px",fontWeight:"bold"}}>
             ${fainaltotal}
            </Typography>
        </Box>
        </Box>
       
        <Button onClick={()=>navigatin("/Checkout")} sx={{bgcolor:"#000666",color:"white",py:2,borderRadius:"8px"}}>
            < HttpsIcon/> Secure Checkout
        </Button>
        <Typography sx={{textAlign:"center",mt:1,color:"#5E5E5E"}}>
            Complimentary luxury shipping & returns included.
        </Typography>
        
    
    </Box>
  )
}

export default Checkout_section