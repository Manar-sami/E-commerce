
import CircularProgress from "@mui/material/CircularProgress";
import useProductdetails from "../../Hook/Productdetails";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";


function Description() {
    const { id } = useParams();
     const { data, isLoading } = useProductdetails(id);
     console.log(data)

     if(isLoading) return <CircularProgress></CircularProgress>
  return (
    <Box sx={{
        textAlign: "justify",
        mt:2,
    }}>
        {data.description}
        </Box>
  )
}

export default Description