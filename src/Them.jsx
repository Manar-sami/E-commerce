import { createTheme } from "@mui/material/styles";

const UseThemmode =(mode)=>{
  return  createTheme({
    palette:{
     mode:mode,
      
    }
 
});

}



export default UseThemmode;