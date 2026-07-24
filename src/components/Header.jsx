
import { Link } from "react-router-dom";
import useAuthStore from "../store/UseAuthStore";
import { useNavigate } from "react-router-dom";
import useGetitemformcart from './../Hook/Getitemformcart'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useTranslation } from 'react-i18next';
import i18n from "./../languge";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from "@mui/material/IconButton";
import LoginIcon from '@mui/icons-material/Login';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import Button from "@mui/material/Button";
import MenuIcon from '@mui/icons-material/Menu';

function Header() {

 const Token=useAuthStore((state)=>state.Token);
 const logout=useAuthStore((state)=>state.logout);
 const {data}=useGetitemformcart();
  //  اللغة 
 const changeLanguage =()=>{
  const lang=i18n.language==='ar'?"en":"ar"
 i18n.changeLanguage (lang);
 }

const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

 console.log(data)
   const { t } = useTranslation();

 const navigate=useNavigate();

  const hundellogout=()=>{
    logout();
    navigate('/');
  }
  return (
    <>
     <Box sx={{position:"absolute",width:"100%"}}>
      <Container maxWidth="lg">
       <Box sx={{py:"20px"}} >
      
      
        <Box sx={{display:"flex",alignItems:"center",textAlign:'center',justifyContent:"space-between"}} >
         <Box sx={{display:"flex",gap:"20px"}}>
           <Box
             component={Link}
             to="/"
             sx={{
               fontSize: 32,
               fontWeight: "bold",
               color: "white",
               textDecoration: "none",
                }}
              >
              KaShop
          </Box>
          
           <List sx={{display:"flex",}}>
            <ListItem component={Link} to="/" sx={{color:"#C7C4D7", fontSize:"16px",fontWeight:"600",
             transition:"0.3s",
             "&:hover":{
              color:"#C0C1FF",
              textDecoration:"underline"

             }
            }}>

                {t('Home')}
            </ListItem>

             <ListItem component={Link} to="/Products" sx={{color:"#C7C4D7", fontSize:"16px",fontWeight:"600",
             transition:"0.3s",
             "&:hover":{
              color:"#C0C1FF",
              textDecoration:"underline"

             }
            }}>

               {t('Products')} 
            </ListItem>

             <ListItem component={Link} to="/Categories" sx={{color:"#C7C4D7", fontSize:"16px",fontWeight:"600",
             transition:"0.3s",
             "&:hover":{
              color:"#C0C1FF",
              textDecoration:"underline"

             }
            }}>

                {t('Categories')}
            </ListItem>
            
           </List>
         </Box>
         
           
            {/* التصميم الخاص بال mune */}

          <Box sx={{display:{xs:"flex",md:"none"}}}>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open}
        onClick={handleClick}
        sx={{color:"#C7C4D7"}}
      >
        <MenuIcon/>
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >

          <MenuItem>
         <IconButton onClick={ changeLanguage}
            sx={{
              color:"#C7C4D7",
              fontSize:"18px",
              fontWeight:"600",
            }}
            >
            {i18n.language==='ar'?"EN":"AR"}
            </IconButton>
            </MenuItem>

        <MenuItem >
          {/* profil */}
           <Box component={Link}
            sx={{
              color:"#C7C4D7",
              fontSize:"18px",
              fontWeight:"600",
            }}
            >
              < AccountCircleIcon/>
            </Box>
        </MenuItem>
        <MenuItem >
         {/* darkmode */}
         <IconButton 
            sx={{
              color:"#C7C4D7",
              fontSize:"18px",
              fontWeight:"600",
            }}>
              <DarkModeIcon/>
            </IconButton>
        </MenuItem>
        
       
            <MenuItem>
            <Box component={Link} to="/Cart"
             sx={{
              color:"#C7C4D7",
              fontSize:"18px",
              fontWeight:"600",
            }}
             >
             <ShoppingCartIcon/>

            </Box>
            </MenuItem>
            <MenuItem >
        {/* logout */}
        <Box onClick={ hundellogout}
            sx={{
              color:"#C7C4D7",
              fontSize:"18px",
              fontWeight:"600",
            }}
            >
              < LogoutIcon/>
              Logout
            
            </Box>
        </MenuItem>
         </Menu>
          </Box >



         <Box sx={{display:{xs:"none",md:"flex"}}}>
             {Token?
            <>
             <Box sx={{display:{xs:"none",md:"flex"},alignItems:"center",justifyContent:"space-between",gap:"15px"
            }}>

            <IconButton onClick={ changeLanguage}
            sx={{
              color:"#C7C4D7",
              fontSize:"18px",
              fontWeight:"600",
              transition:"0.4s",
               "&:hover":{
              color:"#C0C1FF",
              

             }
            }}
            >
            {i18n.language==='ar'?"EN":"AR"}
            </IconButton>

            <IconButton 
            sx={{
              color:"#C7C4D7",
              fontSize:"18px",
              fontWeight:"600",
              transition:"0.4s",
               "&:hover":{
              color:"#C0C1FF",
              

             }
            }}>
              <DarkModeIcon/>
            </IconButton>

             <Box component={Link} to="/Cart"
             sx={{
              color:"#C7C4D7",
              fontSize:"18px",
              fontWeight:"600",
              transition:"0.4s",
               "&:hover":{
              color:"#C0C1FF",
              

             }
            }}
             >
             <ShoppingCartIcon/>

            </Box>
            <Box component={Link}
            sx={{
              color:"#C7C4D7",
              fontSize:"18px",
              fontWeight:"600",
              transition:"0.4s",
               "&:hover":{
              color:"#C0C1FF",
              

             }
            }}
            >
              < AccountCircleIcon/>
            </Box>

            <Box onClick={ hundellogout}
            sx={{
              color:"#C7C4D7",
              fontSize:"18px",
              fontWeight:"600",
              transition:"0.4s",
               "&:hover":{
              color:"#C0C1FF",
              

             }
            }}
            >
              < LogoutIcon/>
               {t('Logout')}
            
            </Box>

          
            
           
            



           </Box>
            
            </>:
            <>
             <Box sx={{display:{md:"flex",xs:"none"},alignItems:"center",justifyContent:"space-between",gap:"15px"}}>

            <IconButton onClick={ changeLanguage}
            sx={{
              color:"#C7C4D7",
              fontSize:"18px",
              fontWeight:"600",
            }}
            >
            {i18n.language==='ar'?"EN":"AR"}
            </IconButton>

            <IconButton 
            sx={{
              color:"#C7C4D7",
              fontSize:"18px",
              fontWeight:"600",
            }}>
              <DarkModeIcon/>
            </IconButton>

            
            

            <Box
            component={Link}
            to="/Login"
            sx={{
              color:"#C7C4D7",
              fontSize:"18px",
              fontWeight:"600",
            }}
            >
              < LoginIcon/>
              Login
            
            </Box>

          
            
           
            



           </Box>
            
            </>}
         </Box>


        </Box>
         
      
     
    </Box>
     </Container>
     </Box>

     
    </>
  )
}



export default Header;





// <nav className="flex justify-between items-center p-4 bg-gray-200">
//      <ul className="flex  justify-center items-center gap-3">
//         <li><Link to="/">{t('Home')}</Link></li>
//         <li><Link to="/products">{t('Products')}</Link></li>
//         <li><Link to="/Categories">{t('Categories')}</Link></li>
        
//      </ul>
//     <div>

//       {Token?
//       <>

//       <Link to="/Cart" className="px-2 py-1 ">
//        <Typography
//     sx={{
//       backgroundColor: "red",
//       color: "white",
//       width: 24,
//       height: 24,
//       borderRadius: "50%",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       fontSize: 14,
//     }}
//   >
//    {/* {data.length} */}
//   </Typography>
//        <ShoppingCartIcon/>
//      </Link>

//       <Button onClick={ changeLanguage}>
//         {i18n.language==='ar'?"EN":"AR"}
//       </Button>

//      <Link to="/login" onClick={hundellogout}  className="bg-red-500 text-white px-2 py-1 rounded ml-5">
//       {t('logout')}
//      </Link>
//       </>
//       :
//       <>
//        <Link to="/Login" className="bg-green-500 text-white px-2 py-1 rounded ">
//        {t('Login')}
//      </Link>
//       <Link to="/Register" className="bg-blue-500 text-white px-2 py-1 rounded ml-5">
//        {t('Register')} 
//       </Link>
//       </>
//       }
     
    
//     </div>
//     </nav>