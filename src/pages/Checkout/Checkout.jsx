import { Box, Container, Grid, Typography } from "@mui/material";
import Getcart from "../cart/Getcart";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import Button from "@mui/material/Button";
import PaymentsIcon from "@mui/icons-material/Payments";
import { useState } from "react";
import useCheckout from "../../Hook/Checkout";
import { useTranslation } from "react-i18next";
import Checkout_section from "./../cart/Checkout_section";

import { CircularProgress } from "@mui/material";
import useGetitemformcart from "../../Hook/Getitemformcart";
import HttpsIcon from "@mui/icons-material/Https";
import { useNavigate } from "react-router-dom";
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  Stack,
  Chip,
} from "@mui/material";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import Error from "../../Error/Error";
import Loading from "../../Loading";

function Checkout() {
  const { mutate: checkout } = useCheckout();

  const { t } = useTranslation();

  const [paymentMethod, setpaymentMethod] = useState("");

  const { data, isLoading, isError, error } = useGetitemformcart();
  let total = 0;
  const navigatin = useNavigate();

  data?.map((item) => {
    total += item.totalPrice;
  });
  const estimatedTaxes = total * 0.1;
  const fainaltotal = total + estimatedTaxes;

  const handleCheckout = () => {
    console.log("Payment Method:", paymentMethod);

    checkout({
      paymentMethod: paymentMethod,
    });
  };

  if(isLoading) return <Loading></Loading>
  if(isError) return <Error></Error>

  return (
    <Box sx={{ py: 10 }}>
      <Container>
        <Grid spacing={3} container>
          <Grid size={{xs:12,lg:8}}>
            <Box
              sx={{
                backgroundColor: "#121212",
                color: "#ffffff",
                padding: "32px",
                borderRadius: "8px",
                maxWidth: "650px",
                fontFamily: "sans-serif",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontFamily: '"Cormorant Garamond", "Times New Roman", serif',
                  fontSize: "36px",
                  fontWeight: 500,
                  color: "#ffffff",
                  marginBottom: "8px",
                }}
              >
                Select Payment Method
              </Typography>
              <Typography
                sx={{
                  color: "#a1a1aa",
                  fontSize: "15px",
                  marginBottom: "28px",
                }}
              >
                Choose how you'd like to pay for your order.
              </Typography>

              <RadioGroup value={paymentMethod} onChange={handleCheckout}>
                <Box
                  onClick={() => setpaymentMethod("cash")}
                  sx={{
                    border:
                      paymentMethod === "cash"
                        ? "1px solid #eab308"
                        : "1px solid #27272a",
                    backgroundColor: "#18181b",
                    borderRadius: "8px",
                    padding: "20px",
                    marginBottom: "16px",
                    cursor: "pointer",
                    transition: "border-color 0.2s ease",
                  }}
                >
                  <FormControlLabel
                    value="cash"
                    control={
                      <Radio
                        sx={{
                          color: "#52525b",
                          "&.Mui-checked": { color: "#eab308" },
                          paddingRight: "12px",
                        }}
                      />
                    }
                    label={
                      <Box>
                        <Stack
                          direction="row"
                          spacing="10px"
                          alignItems="center"
                        >
                          <LocalAtmOutlinedIcon
                            sx={{ color: "#eab308", fontSize: "22px" }}
                          />
                          <Typography
                            sx={{
                              fontFamily:
                                '"Cormorant Garamond", "Times New Roman", serif',
                              fontSize: "22px",
                              fontWeight: 600,
                              color: "#ffffff",
                            }}
                          >
                            Cash on Delivery
                          </Typography>
                        </Stack>
                        <Typography
                          sx={{
                            color: "#a1a1aa",
                            fontSize: "14px",
                            marginTop: "6px",
                            paddingLeft: "32px",
                          }}
                        >
                          Pay with cash when your order arrives at your
                          doorstep.
                        </Typography>
                      </Box>
                    }
                    sx={{ margin: 0, width: "100%", alignItems: "flex-start" }}
                  />
                </Box>

                <Box
                  onClick={() => setpaymentMethod("Visa")}
                  sx={{
                    border:
                      paymentMethod === "Visa"
                        ? "1px solid #eab308"
                        : "1px solid #27272a",
                    backgroundColor: "#18181b",
                    borderRadius: "8px",
                    padding: "20px",
                    marginBottom: "28px",
                    cursor: "pointer",
                    transition: "border-color 0.2s ease",
                  }}
                >
                  <FormControlLabel
                    value="Visa"
                    control={
                      <Radio
                        sx={{
                          color: "#52525b",
                          "&.Mui-checked": { color: "#eab308" },
                          paddingRight: "12px",
                        }}
                      />
                    }
                    label={
                      <Box sx={{ width: "100%" }}>
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Stack
                            direction="row"
                            spacing="10px"
                            alignItems="center"
                          >
                            <CreditCardOutlinedIcon
                              sx={{ color: "#eab308", fontSize: "22px" }}
                            />
                            <Typography
                              sx={{
                                fontFamily:
                                  '"Cormorant Garamond", "Times New Roman", serif',
                                fontSize: "22px",
                                fontWeight: 600,
                                color: "#ffffff",
                              }}
                            >
                              Visa / Credit Card
                            </Typography>
                          </Stack>
                        </Stack>
                        <Typography
                          sx={{
                            color: "#a1a1aa",
                            fontSize: "14px",
                            marginTop: "6px",
                            paddingLeft: "32px",
                          }}
                        >
                          You'll be redirected to a secure payment page to
                          complete your transaction.
                        </Typography>
                      </Box>
                    }
                    sx={{ margin: 0, width: "100%", alignItems: "flex-start" }}
                  />
                </Box>
              </RadioGroup>

              <Button
                onClick={handleCheckout}
                fullWidth
                disabled={!paymentMethod}
                sx={{
                  backgroundColor: paymentMethod ? "#eab308" : "#27272a",
                  color: paymentMethod ? "#000000" : "#71717a",
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "1px",
                  paddingTop: "14px",
                  paddingBottom: "14px",
                  borderRadius: "4px",
                  textTransform: "uppercase",
                  "&:hover": {
                    backgroundColor: paymentMethod ? "#facc15" : "#27272a",
                  },
                  "&.Mui-disabled": {
                    backgroundColor: "#27272a",
                    color: "#52525b",
                  },
                }}
              >
                Select Payment Method
              </Button>
            </Box>
          </Grid>

          <Grid size={{xs:12,lg:4}}>
            <Box
              sx={{
                boxShadow: 2,
                display: "flex",
                gap: 4,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                py: "24px",
                px: "87px",
                borderRadius: "8px",
                border: "1px solid #F2CA5020",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "24px",
                  color: "Curatedbg",
                }}
              >
                {t("Order Summary")}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  mt: 2,
                }}
              >
                <Typography sx={{ color: "headercolor", fontSize: "16px" }}>
                  {t("Subtotal")}
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    color: "Curatedbg",
                    fontSize: "16px",
                    fontWeight: "700",
                  }}
                >
                  ${total}.00
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  mt: 2,
                }}
              >
                <Typography sx={{ color: "headercolor", fontSize: "16px" }}>
                  {t("Shipping")}
                </Typography>
                <Typography
                  component="span"
                  sx={{ color: "#F2CA50", fontSize: "16px", fontWeight: "700" }}
                >
                  {t("Free")}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  mt: 2,
                  mb: 1,
                }}
              >
                <Typography sx={{ color: "headercolor", fontSize: "16px" }}>
                  {t("Estimated Taxes")}
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    color: "Curatedbg",
                    fontSize: "16px",
                    fontWeight: "700",
                  }}
                >
                  ${estimatedTaxes}
                </Typography>
              </Box>

              <Box
                sx={{ borderTop: "1px solid #C6C5D430", width: "100%", py: 1 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    mt: 2,
                    mb: 1,
                  }}
                >
                  <Typography
                    sx={{
                      color: "h2color",
                      fontSize: "24px",
                      fontWeight: "bold",
                    }}
                  >
                    {t("Total")}
                  </Typography>
                  <Typography
                    component="span"
                    sx={{
                      color: "#F2CA50",
                      fontSize: "24px",
                      fontWeight: "bold",
                    }}
                  >
                    ${fainaltotal}
                  </Typography>
                </Box>
              </Box>

              <Typography sx={{ textAlign: "center", mt: 1, color: "#5E5E5E" }}>
                {t("Complimentary luxury shipping & returns included.")}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>

    // <Box sx={{py:10}}>
    //  <Container>
    //   <Typography component="h1" sx={{fontSize:{xs:"24px",md:"48px"},fontWeight:"bold",color:"#000666"}}>
    //    {t("Order Summary")}
    //   </Typography>
    //   <Box sx={{width:"50%",mx:"auto",mt:2}}>
    //     <Getcart></Getcart>
    //   </Box>

    //   <Typography component="h1" sx={{fontSize:{xs:"24px",md:"48px"},fontWeight:"bold",color:"#000666"}}>
    //    {t("Payment Methods")}
    //   </Typography>

    //     <Box sx={{width:"50%",mx:"auto",mt:2}}>
    //        <Button value={"Visa" } onClick={(e)=>setPaymentMethod(e.target.value)} sx={{display:"flex",justifyContent:"start",mb:3,gap:2,boxShadow:2,p:"24px",borderRadius:"8px",width:"100%",fontSize:"14px",
    //        backgroundColor: PaymentMethod === "Visa" ? "#000666" : "white",
    //        color:  PaymentMethod === "Visa" ? "white" : "#151C27",
    //        }}>
    //          <CreditCardIcon/> {t("Credit Card")}
    //        </Button>
    //     </Box>

    //       <Box sx={{width:"50%",mx:"auto",mt:2}}>
    //        <Button value={"cash"}  onClick={(e)=>setPaymentMethod(e.target.value)} sx={{display:"flex",justifyContent:"start",mb:3,gap:2,boxShadow:2,p:"24px",borderRadius:"8px",width:"100%",fontSize:"14px",
    //         color:  PaymentMethod === "cash" ? "white" : "#151C27",
    //         backgroundColor:  PaymentMethod === "cash" ? "#000666" : "white",
    //        }}>
    //          <PaymentsIcon/> {t("Cash on Delivery")}
    //        </Button>
    //     </Box>

    //      <Button disabled={!PaymentMethod} sx={{bgcolor:"#004A31",color:"white",mx:"auto",width:"50%",display:"flex",justifyContent:"center"}} onClick={()=>checkout({PaymentMethod})}>
    //       {t("Pay Now")}
    //      </Button>

    //  </Container>
    // </Box>
  );
}

export default Checkout;
