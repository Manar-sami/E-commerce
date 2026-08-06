import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import useProfile from "../../Hook/Profile"
import Avatar from "@mui/material/Avatar";
import { useTranslation } from "react-i18next";
function Profile() {
    const{data,isLoading,isError}=useProfile();
    console.log(data);
    const{t}=useTranslation();
    if(isLoading) return <CircularProgress></CircularProgress>
    if(isError) return <Typography>error</Typography>

  return (
    <Box>
      
        <Box sx={{display:"flex"}}>
         <Avatar sx={{ bgcolor:"#000666",width:{xs:"40px",md:"50px",lg:"70px"},height:{xs:"40px",md:"50px",lg:"70px"},fontSize:{xs:"24px",md:"28px",lg:"38px"} }}>{data.data.fullName[0]}</Avatar>
          <Box sx={{display:"flex",flexDirection:"column",mx:2}}>
           <Typography sx={{fontSize:{xs:"24px",md:"32px",lg:"40px"},color:"#000666"}}>{data.data.fullName}</Typography>
          <Box sx={{fontSize:"12px",color:"#000666",border:"1px solid #00066630",width:"fit-content",borderRadius:"70px",px:"20px",py:"5px",bgcolor:"#00066610" }}>
           {t("Member since 2026")}
          </Box>
          </Box>
        </Box>

         <Box sx={{boxShadow:3,borderRadius:"12px",p:"32px",mt:4}}>
          <Typography  sx={{fontSize:"24px",color:"#000666",fontWeight:"bold"}}>
             {t("Personal Details")}
          </Typography>
           <Grid container spacing={2} sx={{mt:4}}>
            <Grid size={{xs:12,md:6}}>
                <Box>
            <Typography sx={{fontSize:"12px",color:"#767683",fontWeight:"700"}} >
              {t("FULL NAME")}
            </Typography>
            <Typography sx={{fontSize:"20px",color:"#000666",fontWeight:"bold"}}>
              {data.data.fullName}
            </Typography>
          </Box>
            </Grid>
             <Grid size={{xs:12,md:6}}>
                <Box>
            <Typography sx={{fontSize:"12px",color:"#767683",fontWeight:"700"}} >
             {t("EMAIL ADDRESS")}
            </Typography>
            <Typography sx={{fontSize:"18px",color:"#454652"}}>
              {data.data.email}
            </Typography>
          </Box>
            </Grid>

             <Grid size={{xs:12,md:6}}>
                <Box>
            <Typography sx={{fontSize:"12px",color:"#767683",fontWeight:"700"}} >
              {t("PHONE NUMBER")}
            </Typography>
            <Typography sx={{fontSize:"18px",color:"#454652"}}>
              {data.data.phoneNumber}
            </Typography>
          </Box>
            </Grid>
             <Grid size={{xs:12,md:6}}>
                <Box>
            <Typography sx={{fontSize:"12px",color:"#767683",fontWeight:"700"}} >
              {t("City")}
            </Typography>
            <Typography sx={{fontSize:"18px",color:"#454652"}}>
              {data.data.city?data.data.city:"not set yet"}
            </Typography>
          </Box>
            </Grid>
           </Grid>

         </Box>
       
    </Box>
  )
}

export default Profile