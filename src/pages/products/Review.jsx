import { Box, CircularProgress, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import useProductdetails from "../../Hook/Productdetails";
import { useParams } from "react-router-dom";
import { Avatar, Stack } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { useState } from "react";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import CloseIcon from "@mui/icons-material/Close";
import useAddreview from "./../../Hook/Addreview";
import TextField from "@mui/material/TextField";
import { useTranslation } from "react-i18next";


import UseAuthStore from "../../store/UseAuthStore";
import Loading from "../../Loading";

function Review() {
  const { id } = useParams();
  const { data, isLoading } = useProductdetails(id);
  const star = [1, 2, 3, 4, 5];
  const [values, setvalues] = useState(0);
  const [open, setopen] = useState(false);

  const [comment, setComment] = useState("");
  const [value, setValue] = useState(0);
  const { t } = useTranslation();
  const [massage, setmassage] = useState(false);
  const Token = UseAuthStore((state) => state.Token);
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const { mutate: addreview, isError, error } = useAddreview();
  ;

  const opens = () => {
    {
      Token ? setopen(true) : setmassage(true);
    }

    setTimeout(() => {
      setmassage(false);
    }, 2000);
  };
  const review = () => {
    addreview(
      {
        ProductId: id,
        Rating: value,
        Comment: comment,
      },
      {
        onSuccess: (response) => {
          console.log(response.data);
          setopen(false);
        },

        onError: (error) => {
          console.log("message:", error.response?.data?.message);
        },
      },
    );
  };


  if (isLoading) return <Loading></Loading>;
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Box>
          <Typography sx={{ color: "#E9C349" }}>4.2</Typography>
          <Rating
            value={4}
            readOnly
            sx={{
              my: 2,
              "& .MuiRating-iconFilled": {
                color: "#E9C349",
              },
              "& .MuiRating-iconEmpty": {
                color: "#E9C349",
              },
            }}
          />
          <Typography sx={{ color: "#9CA3AF", letterSpacing: 2 }}>
            BASED ON {data.reviews.length} REVIEWS
          </Typography>
        </Box>

        <Box
          component="img"
          src="/image/Reviews.png"
          alt="rate"
          sx={{
            maxWidth: { xs: "50%" },
            height: "auto",
            objectFit: "contain",
          }}
        />
      </Box>
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

      {/* بجيب الreview */}

      <Box>
        {data.reviews.slice(0, values + 2).map((review) => {
          return (
            <Box
              sx={{
                color: "#ffffff",
                p: 3,
                my: 2,
                borderRadius: 2,
              }}
            >
              <Stack
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Stack direction="row" spacing={2}>
                  <Avatar
                    sx={{
                      bgcolor: "#1e293b",
                      color: "#ffffff",
                      width: 48,
                      height: 48,
                      fontSize: "16px",
                      fontWeight: 600,
                    }}
                  >
                    {review.userName[0]}
                    {review.userName[review.userName.length - 1]}
                  </Avatar>
                  <Box>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 600, color: "#fff", lineHeight: 1.2 }}
                    >
                      {review.userName}
                    </Typography>
                    <Stack direction="row" spacing={0.5} sx={{ mt: 1 }}>
                      <VerifiedIcon sx={{ fontSize: 14, color: "#eab308" }} />
                      <Typography
                        variant="caption"
                        sx={{ color: "#eab308", fontWeight: 500 }}
                      >
                        Verified Purchase
                      </Typography>
                    </Stack>
                  </Box>
                </Stack>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "end",
                  }}
                >
                  <Box>
                    {star.map((star) => {
                      return star <= review.rating ? (
                        <StarIcon sx={{ color: "#E9C349" }} key={star} />
                      ) : (
                        <StarBorderIcon sx={{ color: "#E9C349" }} key={star} />
                      );
                    })}
                  </Box>
                  <Typography
                    variant="caption"
                    display="block"
                    sx={{ color: "#71717a", mt: 0.5 }}
                  >
                    {new Date(review.createdAt).toLocaleDateString("en-GB")}
                  </Typography>
                </Box>
              </Stack>

              <Typography
                variant="body2"
                sx={{ color: "#a1a1aa", lineHeight: 1.6, my: 3 }}
              >
                {review.comment}
              </Typography>

              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                sx={{ color: "#71717a" }}
              >
                <Typography
                  variant="body2"
                  sx={{ color: "#a1a1aa", fontSize: "12px" }}
                >
                  Helpful?
                </Typography>

                <Stack direction="row" spacing={0.8} alignItems="center">
                  <ThumbUpOutlinedIcon
                    sx={{ fontSize: 18, color: "#a1a1aa" }}
                  />
                  <Typography variant="body2" sx={{ color: "#a1a1aa" }}>
                    24
                  </Typography>
                </Stack>

                <Stack direction="row" spacing={0.8} alignItems="center">
                  <ThumbDownOutlinedIcon
                    sx={{ fontSize: 18, color: "#a1a1aa" }}
                  />
                  <Typography variant="body2" sx={{ color: "#a1a1aa" }}>
                    2
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          );
        })}
      </Box>

      <Box sx={{ display: "flex", gap: 3, justifyContent: "center", mt: 4 }}>
        {values < data.reviews.length ? (
          <Button
            onClick={() => setvalues(values + 4)}
            variant="outlined"
            sx={{
              color: "#eab308",
              borderColor: "#E9C349",
              borderRadius: "4px",
              textTransform: "none",
              fontSize: "18px",
              fontWeight: 400,
              fontFamily: '"Cormorant Garamond", "Times New Roman", serif',
              px: {
                xs: 2,
                sm: 2.5,
                md: 3.5,
              },
              py: {
                xs: 0.8,
                sm: 1,
                md: 1.2,
              },
              transition: "all 0.3s ease",
              "&:hover": {
                borderColor: "#facc15",
                backgroundColor: "rgba(234, 179, 8, 0.08)",
              },
            }}
          >
            Load More Reviews
          </Button>
        ) : (
          ""
        )}

        <Button
          variant="contained"
          disableElevation
          onClick={opens}
          sx={{
            backgroundColor: "#E9C349",
            color: "#1c1917",
            borderRadius: "4px",
            textTransform: "none",
            fontSize: "18px",
            fontWeight: 500,
            fontFamily: '"Cormorant Garamond", "Times New Roman", serif',
            px: {
              xs: 2,
              sm: 2.5,
              md: 3.5,
            },
            py: {
              xs: 0.8,
              sm: 1,
              md: 1.2,
            },
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "#e0b21a",
            },
          }}
        >
          Write a Review
        </Button>
      </Box>

     


      {open && (
        <Box
          sx={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#131313",
            boxShadow: 5,
            borderRadius: 3,
            p: 4,
            width: 400,
            zIndex: 2000,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: 24, fontWeight: "bold" }}>
              {t("Write Review")}
            </Typography>

            <Button sx={{ color: "red" }} onClick={() => setopen(false)}>
              <CloseIcon />
            </Button>
          </Box>
          <Box component="form" onSubmit={handleSubmit(review)}>
            <Rating
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />

            <TextField
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              fullWidth
              multiline
              rows={4}
              placeholder="Your comment"
              sx={{ mt: 2 }}
            />

            {isError ? (
              <Typography sx={{ color: "red", mt: 2 }}>
                {error.response.data.message}
              </Typography>
            ) : (
              ""
            )}

            <Button
              disabled={!comment || value === 0}
              type="submit"
              sx={{ mt: 2 }}
            >
              {t("Submit")}
            </Button>
          </Box>
        </Box>
      )}

      {massage && (
        <Box
          sx={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "black",
            boxShadow: 5,
            borderRadius: 3,
            p: 4,
            width: 400,
            zIndex: 2000,
          }}
        >
          <Box component="form" onSubmit={handleSubmit(review)}>
            <Typography>🔒 You must log in to add a comment</Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default Review;
