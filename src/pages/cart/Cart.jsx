
import useGetitemformcart from "../../Hook/Getitemformcart";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import useClearcart from "../../Hook/Clearcart";
import { CircularProgress, Container, Grid } from "@mui/material";
import Checkout_section from "./Checkout_section";
import Getcart from "./Getcart";
import { useTranslation } from "react-i18next";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useNavigate } from "react-router-dom";


function Cart() { 

  const{t}=useTranslation();
  const navigate=useNavigate();

  // هان استدعينا ال hook الخاص يلي بجيب المنتجات الموجودة في السلة
  const{data,isLoading,isError,error}=useGetitemformcart();
  console.log(data)


   

   
    // هان ال hook الخاص ب مسح جميع عناصر السلة 
    const {mutate:clear}=useClearcart();
    console.log(clear);


 
  if(isLoading) return <CircularProgress></CircularProgress>
  if(isError)  return <Typography>error</Typography>

 return (

  <Box sx={{py:10}}>
    <Container>
      <Typography component="h1" sx={{fontSize:{xs:"24px",md:"48px"},fontWeight:"bold",color:"h2color"}}>
       {t("Shopping Cart")}
      </Typography>
      <Typography sx={{color:"#5E5E5E",fontSize:"16px"}}>
        {data?.length}  {t("Items ready for delivery")}
      </Typography>

    {data.length === 0 ? (
  <Box
    sx={{
      minHeight: "450px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      p: 4,
      borderRadius: "16px",
      bgcolor: "card",
      
    }}
  >
    <Box
      sx={{
        width: 100,
        height: 100,
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#F2CA5020",
        mb: 3,
      }}
    >
      <ShoppingCartOutlinedIcon
        sx={{
          fontSize: 55,
          color: "#F2CA50",
        }}
      />
    </Box>

    <Typography
      sx={{
        fontSize: "26px",
        fontWeight: "bold",
        color: "h2color",
        mb: 1,
      }}
    >
      {t("Your Cart is Empty")}
    </Typography>

    <Typography
      sx={{
        fontSize: "15px",
        color: "headercolor",
        mb: 3,
      }}
    >
      {t("You don't have any products in your cart yet.")}
    </Typography>

    <Button
      onClick={()=>(navigate("/products"))}
      variant="contained"
      sx={{
        bgcolor: "#F2CA50",
        color: "#000",
        borderRadius: "8px",
        px: 4,
        py: 1.2,
        fontSize: "15px",
        fontWeight: "bold",
        textTransform: "none",
        "&:hover": {
          bgcolor: "#dcb33f",
        },
      }}
    >
      {t("Continue Shopping")}
    </Button>
  </Box>
) : (
  <Grid container spacing={4}>
    <Grid size={{ xs: 12, md: 8 }} sx={{ mt: 5 }}>
      
      <Getcart />

      <Button
        onClick={() => clear()}
        sx={{
          fontSize: "16px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          color: "#F2CA50",
          mt: 2,
        }}
      >
        {t("Clear Cart")}
      </Button>

    </Grid>

    <Grid size={{ xs: 12, md: 4 }} sx={{ mt: 5 }}>
      <Checkout_section />
    </Grid>
  </Grid>
)}
    </Container>

  </Box>
    
    
  );
  
}

export default Cart;