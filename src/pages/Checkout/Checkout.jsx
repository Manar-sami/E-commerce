import { Box, Container, Typography } from "@mui/material"
import Getcart from "../cart/Getcart"
import CreditCardIcon from '@mui/icons-material/CreditCard';
import Button from "@mui/material/Button";
import PaymentsIcon from '@mui/icons-material/Payments';
import { useState } from "react";
import useCheckout from "../../Hook/Checkout"

function Checkout() {

  const[PaymentMethod,setPaymentMethod]=useState("");
  const{mutate:checkout}=useCheckout();
  // console.log( PaymentMethod)

  return (
    <Box sx={{py:10}}>
     <Container>
      <Typography component="h1" sx={{fontSize:{xs:"24px",md:"48px"},fontWeight:"bold",color:"#000666"}}>
       Order Summary
      </Typography>
      <Box sx={{width:"50%",mx:"auto",mt:2}}>
        <Getcart></Getcart>
      </Box>

      <Typography component="h1" sx={{fontSize:{xs:"24px",md:"48px"},fontWeight:"bold",color:"#000666"}}>
       Payment Methods
      </Typography>
        
       
        <Box sx={{width:"50%",mx:"auto",mt:2}}>
           <Button value={"Visa" } onClick={(e)=>setPaymentMethod(e.target.value)} sx={{display:"flex",justifyContent:"start",mb:3,gap:2,boxShadow:2,p:"24px",borderRadius:"8px",width:"100%",fontSize:"14px",
           backgroundColor: PaymentMethod === "Visa" ? "#000666" : "white",
           color:  PaymentMethod === "Visa" ? "white" : "#151C27",
           }}>
             <CreditCardIcon/> Credit Card
           </Button>
        </Box>

          <Box sx={{width:"50%",mx:"auto",mt:2}}>
           <Button value={"cash"}  onClick={(e)=>setPaymentMethod(e.target.value)} sx={{display:"flex",justifyContent:"start",mb:3,gap:2,boxShadow:2,p:"24px",borderRadius:"8px",width:"100%",fontSize:"14px",
            color:  PaymentMethod === "cash" ? "white" : "#151C27",
            backgroundColor:  PaymentMethod === "cash" ? "#000666" : "white",
           }}>
             <PaymentsIcon/> Cash on Delivery
           </Button>
        </Box> 

         <Button disabled={!PaymentMethod} sx={{bgcolor:"#004A31",color:"white",mx:"auto",width:"50%",display:"flex",justifyContent:"center"}} onClick={()=>checkout({PaymentMethod})}>
          Pay Now
         </Button>


     </Container>
    </Box>
  )
}

export default Checkout