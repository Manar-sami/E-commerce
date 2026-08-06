import Container from "@mui/material/Container";
import UseAuthStore from "../../store/UseAuthStore"
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LockIcon from '@mui/icons-material/Lock';
import { Link } from "react-router-dom";
import useProductdetails from "./../../Hook/Productdetails"
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import CreateIcon from '@mui/icons-material/Create';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import useAddreview from "./../../Hook/Addreview"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { schemaLogin } from "../../Auth/Login/SchemaLogin";
import Rating from '@mui/material/Rating';
import * as React from 'react';
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { useTranslation } from "react-i18next";
import CloseIcon from "@mui/icons-material/Close";
import UseProfile from "./../../Hook/Profile"


function Reviews() {

    const Token=UseAuthStore((state)=>state.Token); 
    const {id} = useParams();
    const{data,isLoading}=useProductdetails(id);
    const star=[1,2,3,4,5];
    const [open,setopen]=useState(false);
    const{mutate:addreview,isError,error}=useAddreview();
 
    const [value, setValue] = useState(0);
    const [comment, setComment] = useState("");
    const{t}= useTranslation();
    const{data:profaildata,isLoading:profile}=UseProfile();
    // console.log(profaildata.data.orders);
    const[massage,setmassage]=useState(false);

    const hasPaidOrder = profaildata?.data?.orders?.map(
       (order) => order.paymentStatus === "paid"
     );
     console.log(hasPaidOrder)

  
    const {

    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

const opens = () => {
 {Token?setopen(true):setmassage(true)}
 
  setTimeout(()=>{

    setmassage(false);
  },2000)
 
};


const review = () => {
  addreview(
    {
      ProductId: id,
      Rating: value,
      Comment: comment,
    },
    {
      onSuccess: (response) => {
        console.log(response.data);
        setopen(false);
      },

      onError: (error) => {
       
        console.log("message:", error.response?.data?.message);
      },
    }
  );
};
console.log(review);

  
  if(isLoading) return <CircularProgress></CircularProgress>
  if(profile) return <CircularProgress></CircularProgress>
  
  return (
  <Box sx={{py:10}}>
        <Container>
          <Typography sx={{fontSize:"28px",fontWeight:"bold"}}>
            {t("Customer Reviews")}
        </Typography>
        <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap"}}>
            <Box  sx={{display:"flex",alignItems:"center",gap:6 ,flexWrap:"wrap"}}>
          <Box sx={{borderRight:"1px solid #c6c5d433",px:4}}>
             <Typography sx={{fontSize:"64px",color:"#000666",fontWeight:"bold",}}>
            4.8
        </Typography>
        <Typography sx={{color:"#0006669e",fontSize:"20px"}}>
            ★★★★☆
        </Typography>
          </Box>

          <Typography sx={{fontWeight:"bold",fontSize:"14px",letterSpacing:3}}>
           {data.reviews.length} {t("reviews")}
          </Typography>
          

        </Box>
         <Box component="form">
           <Button  onClick={opens} sx={{color:"#000666",fontSize:"14px",fontWeight:"bold",boxShadow:2,borderRadius:7,px:6}}> 
            {t("Write Review")}
            < CreateIcon sx={{m:1}}/>
        </Button>
         </Box>
        </Box>

         <Box  sx={{py:10,display:"flex",flexDirection:"column",gap:2,flexWrap:"wrap"}}>
            {data.reviews.map((review)=>{
              return(
                
                 <Box sx={{boxShadow:3,p:{xs:"25px",md:"40px",lg:"50px"},borderRadius:"24px",}}>
                  <Box sx={{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>
                     <Box sx={{
                    display:"flex",
                    flexWrap:"wrap",
                    alignItems:"center"
                  }}>
                    <Box sx={{boxShadow:2,borderRadius:"100%",width:"48px",
                     backgroundColor:"#0006661c",
                     height:"48px",
                     display:"flex",
                     justifyContent:"center",
                     alignItems:"center",
                     textTransform:"uppercase",
                     color:"#000666",
                     fontWeight:"bold",
                     

                    }}>
                        {review.userName[0]}
                        {review.userName[review.userName.length - 1]}
                        
                    </Box>
                        <Box sx={{mx:2}}>
                       <Typography sx={{fontSize:"16px",fontWeight:"bold",color:"black"}}>
                         {review.userName}
                       </Typography>
                       <Typography component="p" sx={{fontSize:"12px",fontWeight:"bold",color:"#45465260"}}>
                         {new Date(review.createdAt).toLocaleDateString('en-GB')}
                       </Typography>
                    </Box>

                     
                    
                   
                     
                  </Box>
                   <Box >
                         {star.map((star)=>{
                            return star <= review.rating ? <StarIcon sx={{color:"#1A237E"}} key={star} /> : <StarBorderIcon sx={{color:"#1A237E"}} key={star} />;
         
                        })}
                    </Box>
                  </Box>

                  <Typography component="p" sx={{fontSize:"20px",mt:4}}>
                    {review.comment}

                  </Typography>
                 </Box>
                
                )
       
                })}
         </Box>


         {open && (
  <Box
    sx={{
      position:"fixed",
      top:"50%",
      left:"50%",
      transform:"translate(-50%, -50%)",
      backgroundColor:"white",
      boxShadow:5,
      borderRadius:3,
      p:4,
      width:400,
      zIndex:2000
    }}
  >

     <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
       <Typography sx={{fontSize:24,fontWeight:"bold"}}>
     {t("Write Review")}
    </Typography>

   
    <Button sx={{color:"red"}} onClick={()=>setopen(false)}>
      <CloseIcon />
    </Button>
     </Box>
    <Box component="form" onSubmit={handleSubmit(review)}>

         <Rating
     
      value={value}
      onChange={(event,newValue)=>{
        setValue(newValue);
      }}
    />

    

            <TextField
            value={comment}
            onChange={(e)=>setComment(e.target.value)}
            fullWidth
            multiline
            rows={4}
            placeholder="Your comment"
            
            sx={{mt:2}}
    />

    {isError?<Typography sx={{color:"red",mt:2}}>{error.response.data.message}</Typography>:""}

    <Button
    
    disabled={!comment||value === 0}
    type="submit"
      sx={{mt:2}}
    >
      {t("Submit")}
    </Button>
    </Box>

  </Box>
)}
         



                  {massage && (
  <Box
    sx={{
      position:"fixed",
      top:"50%",
      left:"50%",
      transform:"translate(-50%, -50%)",
      backgroundColor:"white",
      boxShadow:5,
      borderRadius:3,
      p:4,
      width:400,
      zIndex:2000
    }}
  >

    
    <Box component="form" onSubmit={handleSubmit(review)}>

        
         <Typography>
          🔒 You must log in to add a comment
         </Typography>

 
    </Box>

  </Box>
)}
        </Container>

    </Box>
  )
}

export default Reviews