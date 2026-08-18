import { createTheme } from "@mui/material/styles";

const UseThemmode =(mode)=>{
  return  createTheme({
    palette:{
     mode:mode,
       
        background:{
          default: mode === "light" ? "#fff" : "#131313",
         
        },
        headercolor: mode === "light" ? "black" : "#D0C5AF",
        h2color:mode === "light" ? "black" : "#E5E2E1",
        Curatedbg:mode === "light" ? "#0A0A0A" : "#E5E2E1",
        footerbg:mode === "light" ? "white" : "#0d0d0d",
    }
 
});

}



export default UseThemmode;