import { Box, Button, Container, List, ListItem } from "@mui/material"
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { NavLink } from "react-router-dom";
import { useState } from "react";
import LogoutIcon from '@mui/icons-material/Logout';
import useAuthStore from "../../store/UseAuthStore";
import { useTranslation } from "react-i18next";
function Sidebar() {
 const[profile,setprofile]=useState("");
  const logout = useAuthStore((state) => state.logout);
  const{t}=useTranslation();
  return (
    <Box >
        <Container>
             <Box >
                <List sx={{textDecoration:"none"}} >
            <ListItem component={NavLink}  to=""   
            >
             <Button onClick={()=>setprofile("Account")} sx={{
             color:profile==="Account"?"#F2CA50":"headercolor",
            
             fontSize:"14px",display:"flex",gap:2,alignItems:"center",
                
             }}>
                <PermIdentityIcon/>{t("Account Settings")}
            </Button>
            </ListItem>

            <ListItem component={NavLink}  to="order">
             <Button onClick={()=>setprofile("order")} sx={{
                color:profile==="order"?"#F2CA50":"headercolor",
                
                fontSize:"14px",display:"flex",gap:2,alignItems:"center"}}>
                <ListAltIcon/>{t("Order History")}
            </Button>
            </ListItem>

             <ListItem component={NavLink}  to="order">
             <Button onClick={logout} sx={{
                color:"#BA1A1A",
                
                fontSize:"14px",display:"flex",gap:2,alignItems:"center"}}>
                <LogoutIcon />{t("Log Out")}
            </Button>
            </ListItem>
            </List>
             </Box>

        </Container>
    </Box>
  )
}

export default Sidebar