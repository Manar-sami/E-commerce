import { Box, CircularProgress, Container, Typography } from "@mui/material";
import useGetcategorise from "../../Hook/Getcategorise";
import { useTranslation } from "react-i18next";
import TuneIcon from "@mui/icons-material/Tune";
import TextField from "@mui/material/TextField";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { use, useState } from "react";
import Products from "./Products";


function Categorise() {
  const { data, isLoading, isError } = useGetcategorise();
  //   console.log(data.response.data);

  //   const{data}=useGetproducts();

  const { t } = useTranslation();

  const[sort,setsort]=useState("");
  //  تنازلي 
  const[asc,setasc]=useState(false);
  console.log(asc)

  const[min,setmin]=useState("");
   const[max,setmax]=useState("");

  

  if (isLoading) return <CircularProgress></CircularProgress>;
  if (isError) return <Typography>error </Typography>;

  return (
    <Box sx={{ py: 10 }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection:{xs:"column",md:"row"},
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              bgcolor: "#000666",
              color: "white",
              py: "4px",
              px: "24px",
              borderRadius: "30px",
            }}
          >
            {t("All")}
          </Box>
          {/* categorise */}
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
            {data.response.data.map((categorise) => {
              return (
                <Box
                  sx={{
                    bgcolor: "#E0DFDF",
                    color: "#626362",
                    py: "4px",
                    px: "24px",
                    borderRadius: "30px",
                  }}
                >
                  {categorise.name}
                </Box>
              );
            })}
          </Box>

         

          {/* min price */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography sx={{ color: "#5E5E5E" }}>MIN</Typography>
            <TextField
              placeholder="$0"
              value={min}
              onChange={(e)=>setmin(e.target.value)}
              variant="outlined"
              sx={{
                width: "80px",
                "& .MuiOutlinedInput-root": {
                  height: 35,
                },
              }}
            />
          </Box>

          {/* max price */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography sx={{ color: "#5E5E5E" }}>MAX</Typography>
            <TextField
              placeholder="$500"
              value={max}
              onChange={(e)=>setmax(e.target.value)}
              variant="outlined"
              sx={{
                width: "80px",
                "& .MuiOutlinedInput-root": {
                  height: 35,
                },
              }}
            />
          </Box>
            
            <InputLabel>{t("Sort Order")}</InputLabel>
           <Select
             displayEmpty
            value={asc ? "asc" : "desc"}
            onChange={(e) => setasc(e.target.value === "asc")}
             
            >
                
                
                <MenuItem value="asc">
                  {t("Ascending")}
                </MenuItem>
                <MenuItem value="desc">
                 {t("Descending")}
                </MenuItem>
            </Select>

          {/* select */}

          <InputLabel>{t("SORT BY:")}</InputLabel>

          <Select displayEmpty value={sort} onChange={(e)=>setsort(e.target.value)}  label="Sort By">
            <MenuItem value="price">Price</MenuItem>
            <MenuItem value="name" >Name</MenuItem>
            <MenuItem value="rate">Rate</MenuItem>
          </Select>

          <Box>
             <Products
             ascending={asc}
             sortBy={sort}
             minPrice={min}
             maxPrice={max}
             ></Products>
            
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Categorise;
