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
        card:mode === "light" ? "white" : "#0F0F0F40",
        contactbg:mode === "light" ? "#F8F6F0" : "#0E0E0E",
        colorp:mode === "light" ? "#0E0E0E" : "#CFC4C5",
        whitecolor:mode === "light" ? "black" : "#FFFFFF",
        productp:mode === "light" ? "black" : "#D1D5DB",
    }
 
});

}



export default UseThemmode;