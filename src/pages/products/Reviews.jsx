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


function Reviews() {

  const Token=UseAuthStore((state)=>state.Token); 
  const {id} = useParams();
  const{data,isLoading}=useProductdetails(id);
  const star=[1,2,3,4,5];
  const [open,setopen]=useState(false);
  const{mutate:addreview}=useAddreview();
    const [value, setValue] = React.useState(0);
    const [comment, setComment] = useState("");
    
    const navigate=useNavigate();

    const {

    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

const opens = () => {
  {Token?setopen(true):
    navigate("/Login")
  }
};


const review=(data)=>{
 addreview({
    ProductId: id,

   
         Rating: value,
         Comment:comment,

    
    onSuccess: (response) => {
  console.log(response.data);
}
 }),

 console.log(data)
}
console.log(comment);


  if(isLoading) return <Typography> loading</Typography>
  
  return (
  <Box sx={{py:10}}>
        <Container>
          <Typography sx={{fontSize:"28px",fontWeight:"bold"}}>
            Customer Reviews
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
           {data.reviews.length} REVIEWS
          </Typography>
          

        </Box>
         <Box component="form">
           <Button  onClick={opens} sx={{color:"#000666",fontSize:"14px",fontWeight:"bold",boxShadow:2,borderRadius:7,px:6}}> 
            WRITE REVIEW
            < CreateIcon sx={{m:1}}/>
        </Button>
         </Box>
        </Box>

         <Box  sx={{py:10,display:"flex",flexDirection:"column",gap:2}}>
            {data.reviews.map((review)=>{
              return(
                
                 <Box sx={{boxShadow:3,p:"50px",borderRadius:"24px",}}>
                  <Box sx={{display:"flex",justifyContent:"space-between"}}>
                     <Box sx={{
                    display:"flex",
                    
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
                   <Box>
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

    <Typography sx={{fontSize:24,fontWeight:"bold"}}>
      Write Review
    </Typography>

   

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

    <Button
    type="submit"
      sx={{mt:2}}
    >
      Submit
    </Button>
    </Box>

  </Box>
)}
         
        </Container>

    </Box>
  )
}

export default Reviews