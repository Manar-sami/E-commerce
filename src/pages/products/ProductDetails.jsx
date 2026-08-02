import useProductdetails from "../../Hook/Productdetails";
import { Link, useParams } from "react-router-dom";
import useAddtocart from "../../Hook/Addtocart";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import i18n from "../../languge";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import Button from "@mui/material/Button";
import { useState } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Reviews from "./Reviews";
import { useTranslation } from "react-i18next";
import { CircularProgress } from "@mui/material";

function ProductDetails() {
   const star=[1,2,3,4,5];
    const {mutate:addtocart,isSuccess} = useAddtocart()
    const {id} = useParams()
    const{data, isLoading}=useProductdetails(id);
    const [showMore, setShowMore] = useState(false);
     const [cart, setcart] = useState("");
     const{t}= useTranslation();

    const addtocartt=()=>{
      addtocart({
        ProductId: data.id, Count: 1
      })
    setTimeout(() => {
     setcart(     
       <Box
    sx={{
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 400,
      height: 300,
      bgcolor: "white",
      borderRadius: 3,
      boxShadow: 5,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 2000,
    }}
  >
    <Typography sx={{ fontSize: "60px" }}>✅</Typography>

    <Typography sx={{ fontSize: "28px", fontWeight: "bold" }}>
      {t("Product added to cart")}
    </Typography>
  </Box>
        )
    });
      setTimeout(() => {
    setcart("");
  }, 2000);
    }

    

    if (isLoading) {
        return (<CircularProgress></CircularProgress>)
    }

    console.log(data)

  return (
    <Box sx={{py:20}}>
      
      <Container>
        <Box sx={{display:"flex",alignItems:"center"}}>
          <Typography component={Link} to="/" sx={{color:"#45464fb8",fontSize:"14px"}} >
           {t("Home")}
          </Typography>
          
          <Box sx={{color:"#45464fb8",fontSize:"14px"}}>
            {i18n.language === "ar"?<KeyboardArrowLeftIcon/>:<KeyboardArrowRightIcon/>}
          </Box>
           <Typography component={Link} to="/Products" sx={{color:"#45464fb8",fontSize:"14px"}} >
           {t("Products")}
          </Typography>
          <Box sx={{color:"#45464fb8",fontSize:"14px"}}>
            {i18n.language === "ar"?<KeyboardArrowLeftIcon/>:<KeyboardArrowRightIcon/>}
          </Box>
           <Typography  sx={{color:"black",fontSize:"14px"}} >
           {data.name}
          </Typography>
           
        </Box>

        <Grid container spacing={4} sx={{pt:5}}>
        <Grid size={{xs:12,md:6}}>
         <Box component="img"
         src={data.image}
         alt={data.name}
         sx={{
          width: "100%",
          objectFit: "cover",
          borderRadius: "12px",
          boxShadow: 3,
         }}
         >

         </Box>
        </Grid>

        <Grid size={{xs:12,md:6}} sx={{display:"flex",flexDirection:"column",gap:2,}}>
         <Typography component="h2" sx={{fontSize:"44px",fontWeight:"bold",color:"#1A1C1E"}}>
          {data.name}
         </Typography>

         <Typography  component="p" sx={{color:"#45464F",fontSize:"14px"}}>
          {t("Product ID")}: {data.id}
         </Typography>

         <Box sx={{display:"flex",gap:2}} >
          <Box>
            {star.map((star)=>{
              return star <= data.rate ? <StarIcon sx={{color:"#1A237E"}} key={star} /> : <StarBorderIcon sx={{color:"#1A237E"}} key={star} />;
          //  return  <StarBorderIcon sx={{color: star <= data.rate ? "#1A237E" : "#ccc"}} key={star} />
          })}
          </Box>

          <Box sx={{color:"#45464F",fontSize:"16px"}}>
            ({data.reviews.length} {t("reviews")})
          </Box>

         </Box>

         <Box sx={{backgroundColor:"#F3F3FA",p:"24px",fontSize:"40px",fontWeight:"bold" ,borderRadius:"16px"}}>
          {data.price}.00$

         </Box>
         <Typography component="p" sx={{
             textAlign: "justify",
             display: "-webkit-box",
             WebkitLineClamp: showMore ? "unset" : 10,
             WebkitBoxOrient: "vertical",
             overflow: "hidden",
  }}>
          {data.description}
         </Typography>
         <Typography sx={{cursor:"pointer",color:"#1A237E"}}  onClick={() => setShowMore(!showMore)} >
          {showMore ? `${t("Read less")}` : `${t("Read more")}`}
         </Typography>

          <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:2}}>
            <Button onClick={addtocartt} sx={{
             border:"1px solid #C6C6D0",
             width:"100%",
             borderRadius:"12px",
             color:"black",
             fontSize:"18px",
             fontWeight:"bold",
             py:"24px",
             transition:"ease 0.3s",
             "&:hover":{
              backgroundColor:"#1A237E",
              color:"white",
             }
            }}>
             <ShoppingCartIcon sx={{mx:2}} />{t("Add to Cart")}
            </Button>
            <Button
             sx={{
             border:"1px solid #C6C6D0",
             width:"100%",
             borderRadius:"12px",
             color:"black",
             fontSize:"18px",
             fontWeight:"bold",
             py:"24px",
             transition:"ease 0.3s",
             "&:hover":{
              backgroundColor:"#1A237E",
              color:"white",
             }
            }}
            >
              <FavoriteBorderIcon sx={{mx:2}} /> {t("Add to Wishlist")}
            </Button>
          </Box>

          

         {cart}
        </Grid>
      </Grid>

      <Reviews></Reviews>
      </Container>

    </Box>
  )
}

export default ProductDetails