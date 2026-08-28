import Container from "@mui/material/Container";

import Box from "@mui/material/Box";

import useProductdetails from "./../../Hook/Productdetails";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";

import { useState } from "react";

import { CircularProgress } from "@mui/material";
import { useTranslation } from "react-i18next";

import UseProfile from "./../../Hook/Profile";
import Description from "./Description";
import Review from "./Review";
import Features from "./Features";
import Loading from "../../Loading";
import Error from "../../Error/Error";

function Reviews() {
  const { id } = useParams();
  const { data, isLoading } = useProductdetails(id);

  const [activeTab, setactiveTab] = useState("Description");

  const { t } = useTranslation();
  const { data: profaildata, isLoading: profile } = UseProfile();

  const hasPaidOrder = profaildata?.data?.orders?.map(
    (order) => order.paymentStatus === "paid",
  );
  console.log(hasPaidOrder);

  if (isLoading) return <Loading></Loading>;
  if (profile) return <Error></Error>;

  return (
    <Box sx={{ py: 20 }}>
      <Container>
        <Box
          sx={{
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
          <Box sx={{ display: "flex", gap: 6 }}>
            <Button
              sx={{
                color: activeTab == "Description" ? "#E9C349" : "#9CA3AF",
                fontSize: "16px",
              }}
              onClick={() => setactiveTab("Description")}
            >
              Description
            </Button>
            <Button
              sx={{
                color: activeTab == "Features" ? "#E9C349" : "#9CA3AF",
                fontSize: "16px",
              }}
              onClick={() => setactiveTab("Features")}
            >
              Features
            </Button>
            <Button
              sx={{
                color: activeTab == "Reviews" ? "#E9C349" : "#9CA3AF",
                fontSize: "16px",
              }}
              onClick={() => setactiveTab("Reviews")}
            >
              Reviews ({data.reviews.length})
            </Button>
          </Box>
        </Box>

        <Box>
          {activeTab === "Description" ? (
            <Description />
          ) : activeTab === "Reviews" ? (
            <Review />
          ) : (
            <Features />
          )}
        </Box>
      </Container>
    </Box>
  );
}

export default Reviews;
