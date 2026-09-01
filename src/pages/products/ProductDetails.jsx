import useProductdetails from "../../Hook/Productdetails";
import { Link, useNavigate, useParams } from "react-router-dom";
import useAddtocart from "../../Hook/Addtocart";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import i18n from "../../languge";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import Button from "@mui/material/Button";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import Reviews from "./Reviews";
import { useTranslation } from "react-i18next";
import { CircularProgress } from "@mui/material";
import Swal from "sweetalert2";
import useGetproducts from "./../../Hook/Getproducts";
import { CardMedia, Rating, Stack, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
import Loading from "../../Loading";

function ProductDetails() {
  const star = [1, 2, 3, 4, 5];
  const navigate = useNavigate();
  const { mutate: addtocart, isSuccess } = useAddtocart();
  const { id } = useParams();
  const { data, isLoading } = useProductdetails(id);
  const { data: getproduct, isLoading: productloading } = useGetproducts();
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedColor, setSelectedColor] = useState("#111111");

  const { t } = useTranslation();

  console.log(getproduct);

  const products = getproduct?.response?.data.filter(
    (product) => product.id !== Number(id),
  );

  console.log(products);

  const addtocartt = () => {
    addtocart({
      ProductId: data.id,
      Count: 1,
    });

    Swal.fire({
      title: t("Product added to cart"),
      icon: "success",
      draggable: true,
      background: "#121212",
      color: "#ffffff",
      confirmButtonColor: "#D4AF37",
    });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }
  if (productloading) return <Loading></Loading>;

  console.log(data);

  return (
    <Box sx={{ py: 10 }}>
      <Container>
        <Box sx={{ display: "flex", alignItems: "start" }}>
          <Typography
            component={Link}
            to="/"
            sx={{ color: "colorp", fontSize: "14px", textDecoration: "none" }}
          >
            {t("Home")}
          </Typography>

          <Box sx={{ color: "colorp", fontSize: "14px" }}>
            {i18n.language === "ar" ? (
              <KeyboardArrowLeftIcon />
            ) : (
              <KeyboardArrowRightIcon />
            )}
          </Box>
          <Typography sx={{ color: "colorp", fontSize: "14px" }}>
            {t("Products")}
          </Typography>
          <Box sx={{ color: "colorp", fontSize: "14px" }}>
            {i18n.language === "ar" ? (
              <KeyboardArrowLeftIcon />
            ) : (
              <KeyboardArrowRightIcon />
            )}
          </Box>
          <Typography sx={{ color: "#F2CA50", fontSize: "14px" }}>
            {data.name}
          </Typography>
        </Box>

        <Grid container spacing={7} sx={{ pt: 5 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component="img"
              src={data.image}
              alt={data.name}
              sx={{
                position: "relative",
                width: "100%",
                height: { xs: "350px", sm: "450px", md: "600px" },
                borderRadius: "8px",
                overflow: "hidden",
                border: "1px solid #262626",
                backgroundColor: "#0d0d0e",
                mb: 2,
              }}
            ></Box>
           
          </Grid>

          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              // justifyContent: "space-between",
              gap:1
            }}
          >
            <Typography
              component="h2"
              sx={{ fontSize: "16px", fontWeight: "bold", color: "#E9C349" }}
            >
              {data.name}
            </Typography>

            <Typography
              component="p"
              sx={{ color: "whitecolor", fontSize: "16px" }}
            >
              {t("Premium Product, Exceptional Experience")}
            </Typography>

            <Box sx={{ display: "flex", gap: 2 }}>
              <Box>
                {star.map((star) => {
                  return star <= data.rate ? (
                    <StarIcon sx={{ color: "#E9C349" }} key={star} />
                  ) : (
                    <StarBorderIcon sx={{ color: "#E9C349" }} key={star} />
                  );
                })}
              </Box>

              <Box sx={{ color: "#9CA3AF", fontSize: "16px" }}>
                ({data.reviews.length} {t("reviews")})
              </Box>
            </Box>

            <Box
              sx={{
                color: "#E9C349",
                fontSize: "16px",
              }}
            >
              {data.price}.00$
            </Box>
            <Typography
              component="p"
              sx={{
                color: "productp",
                fontSize: "16px",
                "&::after": {
                  content: '""',
                  display: "block",
                  width: "100%",
                  height: "1px",
                  bgcolor: "#E9C34930",
                  my: 4,
                },
              }}
            >
             {t("Crafted with precision and designed for excellence. Every detail reflects exceptional quality and thoughtful design, delivering a remarkable experience that exceeds expectations. Experience the perfect balance of style, performance, and reliability.")}
            </Typography>

            <Box sx={{ display: "flex", gap: 1 }}>
              <Typography sx={{ color: "whitecolor" }}>Color:{t("Color:")}</Typography>
              <Typography sx={{ color: "#E9C349" }}>
  {selectedColor === "#111111"
    ? t("Obsidian Black")
    : selectedColor === "#E5D3B3"
    ? t("Champagne Beige")
    : t("Silver")}
</Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 3, mb: 2 }}>
              <Box
                onClick={() => setSelectedColor("#111111")}
                sx={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  bgcolor: "#111111",
                  border:
                    selectedColor === "#111111"
                      ? "2px solid #E9C349"
                      : "1px solid #ccc",
                  cursor: "pointer",
                }}
              />

              <Box
                onClick={() => setSelectedColor("#E5D3B3")}
                sx={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  bgcolor: "#E5D3B3",
                  border:
                    selectedColor === "#E5D3B3"
                      ? "2px solid #E9C349"
                      : "1px solid #ccc",
                  cursor: "pointer",
                }}
              />

              <Box
                onClick={() => setSelectedColor("#E0E0E0")}
                sx={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  bgcolor: "#E0E0E0",
                  border:
                    selectedColor === "#E0E0E0"
                      ? "2px solid #E9C349"
                      : "1px solid #ccc",
                  cursor: "pointer",
                }}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Button
                onClick={addtocartt}
                sx={{
                  width: "100%",
                  borderRadius: "2px",
                  color: "black",
                  fontSize: "18px",
                  bgcolor: "#E9C349",
                  py: "24px",
                  transition: "ease 0.3s",
                  "&:hover": {
                    backgroundColor: "#d8b12f",
                    color: "white",
                  },
                }}
              >
                <ShoppingCartIcon sx={{ mx: 2 }} />
                {t("Add to Cart")}
              </Button>
              <Button
                onClick={() => navigate("/Checkout")}
                sx={{
                  border: "1px solid #E9C349",
                  width: "100%",
                  borderRadius: "2px",
                  color: "Curatedbg",
                  fontSize: "18px",

                  py: "24px",
                  transition: "ease 0.3s",
                  "&:hover": {
                    backgroundColor: "#E9C349",
                    color: "white",
                  },
                }}
              >
                {t("Buy Now")}
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Reviews></Reviews>

        <Box
          sx={{
            "&::after": {
              content: '""',
              display: "block",
              width: "100%",
              height: "1px",
              bgcolor: "#E9C34930",
              my: 7,
            },
          }}
        ></Box>

        <Box>
          <Typography sx={{ mb: 3, fontSize: "16px" }}>
            {t("You May Also Like")}
          </Typography>
          <Grid container spacing={3}>
            {products.map((product) => (
              <Grid
                size={{ xs: 12, sm: 6, md: 4 }}
                sx={{ textDecoration: "none" }}
                key={product.id}
                component={Link}
                to={`/product/${product.id}`}
              >
                <Box sx={{ width: 320 }}>
                  <Box
                    sx={{
                      position: "relative",
                      borderRadius: "16px",
                      border: "1px solid #383024",
                      overflow: "hidden",
                      backgroundColor: "#121212",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="320"
                      image={product.image}
                      alt="Aurelius In-Ear Monitors"
                      sx={{ objectFit: "cover" }}
                    />

                    <IconButton
                      onClick={() => setIsFavorite(!isFavorite)}
                      sx={{
                        position: "absolute",
                        top: 12,
                        right: 12,
                        color: "#ffffff",
                        backgroundColor: "rgba(0, 0, 0, 0.2)",
                        "&:hover": {
                          backgroundColor: "rgba(0, 0, 0, 0.4)",
                        },
                      }}
                    >
                      {isFavorite ? (
                        <FavoriteIcon sx={{ color: "#ef4444" }} />
                      ) : (
                        <FavoriteBorderIcon sx={{ color: "#ffffff" }} />
                      )}
                    </IconButton>
                  </Box>

                  <Box sx={{ pt: 2.5 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#ffffff",
                        fontWeight: 700,
                        fontSize: "1.25rem",
                        mb: 1.5,
                        fontFamily: "Inter, system-ui, sans-serif",
                      }}
                    >
                      {product.name}
                    </Typography>

                    <Stack
                      direction="row"
                      spacing={1}
                      alignItems="center"
                      mb={1.5}
                    >
                      {star.map((star) => {
                        return star <= product.rate ? (
                          <StarIcon sx={{ color: "#E9C349" }} key={star} />
                        ) : (
                          <StarBorderIcon
                            sx={{ color: "#E9C349" }}
                            key={star}
                          />
                        );
                      })}
                    </Stack>

                    <Typography
                      variant="h6"
                      sx={{
                        color: "#eab308",
                        fontWeight: 600,
                        fontSize: "1.3rem",
                      }}
                    >
                      $299.00
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default ProductDetails;
