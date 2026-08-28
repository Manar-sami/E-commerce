import Box from "@mui/material/Box";
import useGetproducts from "../../Hook/Getproducts";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import { Link } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { useTranslation } from "react-i18next";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useState } from "react";
import { Rating, Select, MenuItem } from "@mui/material";
import { motion } from "framer-motion";
import Error from "../../Error/Error";

function Products({ minPrice, maxPrice }) {
  const { t, i18n } = useTranslation();

  const [sort, setsort] = useState("price");
  //  تنازلي
  const [asc, setasc] = useState(false);
  const [sortValue, setSortValue] = useState("priceHigh");

  const { data, isLoading, isError } = useGetproducts({
    ascending: asc,
    sortBy: sort,
    minPrice,
    maxPrice,
  });

  if (isLoading) return <CircularProgress></CircularProgress>;
  if (isError) return <Error></Error>;
  console.log(data.response.data);

  return (
    <Box>
      <Container>
        <Box sx={{ display: "flex", alignItems: "start" }}>
          <Typography
            component={Link}
            to="/"
            sx={{
              color: "headercolor",
              fontSize: "14px",
              textDecoration: "none",
            }}
          >
            {t("Home")}
          </Typography>

          <Box sx={{ color: "headercolor", fontSize: "14px" }}>
            {i18n.language === "ar" ? (
              <KeyboardArrowLeftIcon />
            ) : (
              <KeyboardArrowRightIcon />
            )}
          </Box>
          <Typography sx={{ color: "headercolor", fontSize: "14px" }}>
            {t("Shop")}
          </Typography>
          <Box sx={{ color: "headercolor", fontSize: "14px" }}>
            {i18n.language === "ar" ? (
              <KeyboardArrowLeftIcon />
            ) : (
              <KeyboardArrowRightIcon />
            )}
          </Box>
          <Typography sx={{ color: "headercolor", fontSize: "14px" }}>
            {t("All Products")}
          </Typography>
        </Box>

        <Typography
          sx={{
            fontSize: { xs: "38px", md: "48px", lg: "64px" },
            fontWeight: "bold",
            color: "Curatedbg",
            maxWidth: "40%",
          }}
        >
          Shop All Products
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 1.5,
          }}
        >
          <Typography sx={{ color: "headercolor", fontSize: "16px" }}>
            Showing {data.response.data.length} premium items
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Typography
              sx={{
                color: "headercolor",
                fontSize: "14px",
                fontWeight: 500,
                lineHeight: 1.2,
                width: "40px",
              }}
            >
              {t("SORT BY:")}
            </Typography>

            <Select
              value={sortValue}
              onChange={(e) => {
                const value = e.target.value;
                setSortValue(value);

                if (value === "priceHigh") {
                  setsort("price");
                  setasc(false);
                }
                if (value === "priceLow") {
                  setsort("price");
                  setasc(true);
                }
                if (value === "name") {
                  setsort("name");
                }
                if (value === "rate") {
                  setsort("rate");
                }
              }}
              size="small"
              sx={{
                backgroundColor: "#0d0d0d",
                color: "#ffffff",
                borderRadius: "16px",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#222222",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#444444",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#666666",
                },
                "& .MuiSvgIcon-root": {
                  color: "#ffffff", //
                },
                minWidth: "180px",
              }}
            >
              <MenuItem value="priceHigh">{t("Price: High to Low")}</MenuItem>
              <MenuItem value="priceLow">{t("Price: Low to High")}</MenuItem>
              <MenuItem value="name">{t("Name:A-Z")}</MenuItem>
              <MenuItem value="rate">{t("Rate")}</MenuItem>
            </Select>
          </Box>
        </Box>

        <Box sx={{ py: 5 }}>
          <Grid container spacing={2}>
            {data.response.data.length > 0 ? (
              data.response.data.map((product, index) => {
                return (
                  <Grid key={product.id} size={{ xs: 12, md: 6, lg: 3 }}>
                    <Box
                      component={Link}
                      to={`/product/${product.id}`}
                      sx={{
                        textDecoration: "none",
                        display: "block",
                      }}
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{
                          y: -8,
                          scale: 1.02,
                        }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.08,
                        }}
                      >
                        <Card
                          sx={{
                            width: "100%",
                            borderRadius: "16px",
                            overflow: "hidden",
                            boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
                            border: "1px solid #333333",
                          }}
                        >
                          <CardActionArea>
                            <CardMedia
                              component="img"
                              height="220"
                              image={product.image}
                              alt={product.name}
                            />

                            <CardContent
                              sx={{
                                background: "#1A1A1A",
                                color: "#ffffff",
                                padding: "20px",
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 1,
                                  mb: 1.5,
                                }}
                              >
                                <Rating
                                  value={product.rate}
                                  precision={0.5}
                                  readOnly
                                  size="small"
                                  sx={{
                                    color: "#e6c265",
                                    "& .MuiRating-iconEmpty": {
                                      color: "#888",
                                    },
                                  }}
                                />

                                <Typography
                                  variant="body2"
                                  sx={{ color: "#aaa" }}
                                >
                                  ({product.rate})
                                </Typography>
                              </Box>

                              <Typography
                                variant="h5"
                                component="div"
                                sx={{
                                  fontWeight: 400,
                                  lineHeight: 1.2,
                                  mb: 1.5,
                                  letterSpacing: "0.5px",
                                }}
                              >
                                {product.name}
                              </Typography>

                              <Typography
                                variant="h5"
                                sx={{
                                  color: "#e6c265",
                                  fontWeight: 500,
                                }}
                              >
                                ${product.price}
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </motion.div>
                    </Box>
                  </Grid>
                );
              })
            ) : (
              <Grid size={{ xs: 12 }}>
                <Box
                  sx={{
                    minHeight: "300px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    px: "20px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "28px",
                      fontWeight: "600",
                      color: "h2color",
                      mb: "10px",
                    }}
                  >
                    No Products Found
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "16px",
                      color: "colorp",
                    }}
                  > 
                    There are no products available at the moment.
                  </Typography>
                </Box>
              </Grid>
            )}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default Products;
