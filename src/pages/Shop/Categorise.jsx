import { Box, CircularProgress, Container, Typography,Grid } from "@mui/material";
import useGetcategorise from "../../Hook/Getcategorise";
import { useTranslation } from "react-i18next";
import TextField from "@mui/material/TextField";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import {  useState } from "react";
import Products from "./Products";


function Categorise() {
  const { data, isLoading, isError } = useGetcategorise();
  //   console.log(data.response.data);

  //   const{data}=useGetproducts();

  const { t } = useTranslation();

  const[sort,setsort]=useState("price");
  //  تنازلي 
  const[asc,setasc]=useState(false);
  console.log(asc)

  const[min,setmin]=useState("");
   const[max,setmax]=useState("");

  

  if (isLoading) return <CircularProgress></CircularProgress>;
  if (isError) return <Typography>error </Typography>;

  return (
   <Box sx={{ py: { xs: 4, md: 8 }}}>
      <Container maxWidth="lg">
        
         
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1.5,
              mb: 3,
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                bgcolor: "#000666",
                color: "white",
                py: "6px",
                px: "20px",
                borderRadius: "20px",
                fontSize: "14px",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "0.2s",
                "&:hover": { opacity: 0.9 },
              }}
            >
              {t("All")}
            </Box>

            {data?.response?.data?.map((categorise) => (
              <Box
                key={categorise.id}
                sx={{
                  bgcolor: "#f0f0f0",
                  color: "#555",
                  py: "6px",
                  px: "20px",
                  borderRadius: "20px",
                  fontSize: "14px",
                  cursor: "pointer",
                  transition: "0.2s",
                  "&:hover": {
                    bgcolor: "#000666",
                    color: "white",
                  },
                }}
              >
                {categorise.name}
              </Box>
            ))}
          </Box>

          
          <Grid container spacing={2} alignItems="center">
            {/* min Price */}
            <Grid item xs={6} sm={3} md={2}>
              <TextField
                fullWidth
                size="small"
                label={t("MIN")}
                placeholder="$0"
                value={min}
                onChange={(e) => setmin(e.target.value)}
                type="number"
                variant="outlined"
              />
            </Grid>

            {/* max Price */}
            <Grid item xs={6} sm={3} md={2}>
              <TextField
                fullWidth
                size="small"
                label={t("MAX")}
                placeholder="$500"
                value={max}
                onChange={(e) => setmax(e.target.value)}
                type="number"
                variant="outlined"
              />
            </Grid>

           
            <Grid item xs={12} sm={3} md={4}>
              <FormControl fullWidth size="small">
                <InputLabel >{t("Sort Order")}</InputLabel>
                <Select
                  
                  label={t("Sort Order")}
                  value={asc ? "asc" : "desc"}
                  onChange={(e) => setasc(e.target.value === "asc")}
                >
                  <MenuItem value="asc">{t("Ascending")}</MenuItem>
                  <MenuItem value="desc">{t("Descending")}</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Sort By :*/}
            <Grid item xs={12} sm={3} md={4}>
              <FormControl fullWidth size="small">
                <InputLabel >{t("SORT BY:")}</InputLabel>
                <Select
                  
                  label={t("SORT BY:")}
                  value={sort}
                  onChange={(e) => setsort(e.target.value)}
                >
                  <MenuItem value="price">{t("Price")}</MenuItem>
                  <MenuItem value="name">{t("Name")}</MenuItem>
                  <MenuItem value="rate">{t("Rate")}</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
       

        {/* Products Section */}
        <Box sx={{ width: "100%" }}>
          <Products
            ascending={asc}
            sortBy={sort}
            minPrice={min}
            maxPrice={max}
          />
        </Box>
      </Container>
    </Box>
  );
}

export default Categorise;
