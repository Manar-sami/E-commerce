
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import useGetitemformcart from "../../Hook/Getitemformcart";
import HttpsIcon from '@mui/icons-material/Https';
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";

function Checkout_section() {
 
      const{t}=useTranslation();

      const{data,isLoading,isError,error}=useGetitemformcart();
      let total = 0;
      const navigatin=useNavigate()

      data?.map((item) => {
        total += item.totalPrice;
      });
       const estimatedTaxes = total * 0.10;
       const fainaltotal= total + estimatedTaxes;

    

      


   if(isLoading) return <CircularProgress></CircularProgress>;
      if(isError) return <Typography sx={{color:"red"}}>{error}</Typography>
  return (
    <Box sx={{boxShadow:2,display:"flex",gap:4,flexDirection:"column",justifyContent:"center",alignItems:"center",py:"24px",px:"87px",borderRadius:"8px",border:"1px solid #F2CA5020"}}>
        <Typography sx={{fontWeight:"bold",fontSize:"24px",color:"Curatedbg"}}>
            {t("Order Summary")}
        </Typography>
        <Box sx={{display:"flex",justifyContent:"space-between",width: "100%",mt:2}}>
            <Typography sx={{color:"headercolor",fontSize:"16px"}}>
                {t("Subtotal")}
            </Typography>
            <Typography component="span" sx={{color:"Curatedbg",fontSize:"16px",fontWeight:"700"}}>
             ${total}.00
            </Typography>
        </Box>

        <Box sx={{display:"flex",justifyContent:"space-between",width: "100%",mt:2}}>
            <Typography sx={{color:"headercolor",fontSize:"16px"}}>
                {t("Shipping")}
            </Typography>
            <Typography component="span" sx={{color:"#F2CA50",fontSize:"16px",fontWeight:"700"}}>
             {t("Free")}
            </Typography>
        </Box>
        <Box sx={{display:"flex",justifyContent:"space-between",width: "100%",mt:2,mb:1}}>
            <Typography sx={{color:"headercolor",fontSize:"16px"}}>
                {t("Estimated Taxes")}
            </Typography>
            <Typography component="span" sx={{color:"Curatedbg",fontSize:"16px",fontWeight:"700"}}>
             ${estimatedTaxes}
            </Typography>
        </Box>

        <Box sx={{borderTop:"1px solid #C6C5D430",width:"100%",py:1}}>
          <Box sx={{display:"flex",justifyContent:"space-between",width: "100%",mt:2,mb:1}}>
            <Typography sx={{color:"h2color",fontSize:"24px",fontWeight:"bold"}}>
               {t("Total")}
            </Typography>
            <Typography component="span" sx={{color:"#F2CA50",fontSize:"24px",fontWeight:"bold"}}>
             ${fainaltotal}
            </Typography>
        </Box>
        </Box>
       
        <Button onClick={()=>navigatin("/Checkout")} sx={{bgcolor:"#D4AF37",color:"#050505",py:2,borderRadius:"8px","&:hover":{bgcolor:"#F2CA50"}}}>
            < HttpsIcon/> {t("Secure Checkout")}
        </Button>
        <Typography sx={{textAlign:"center",mt:1,color:"#5E5E5E"}}>
            {t("Complimentary luxury shipping & returns included.")}
        </Typography>
        
    
    </Box>
  )
}

export default Checkout_section