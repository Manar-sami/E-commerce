import {
  Box,
  CircularProgress,
  Container,
  Typography,
  Grid,
} from "@mui/material";
import useGetcategorise from "../../Hook/Getcategorise";
import { useTranslation } from "react-i18next";
import TextField from "@mui/material/TextField";

import { useState } from "react";
import Products from "./Products";
import Checkbox from "@mui/material/Checkbox";
import InterestsIcon from "@mui/icons-material/Interests";
import Button from "@mui/material/Button";

function Categorise() {
  const { data, isLoading, isError } = useGetcategorise();
  //   console.log(data.response.data);

  //   const{data}=useGetproducts();

  const { t } = useTranslation();

  const [min, setmin] = useState("");
  const [max, setmax] = useState("");

  if (isLoading) return <CircularProgress></CircularProgress>;
  if (isError) return <Typography>error </Typography>;

  return (
    <Box sx={{ py: { xs: 4, md: 8 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid
            size={{
              xs: 12,
              md: 3,
            }}
            sx={{
              bgcolor: "#201F1F70",
              p: "24px",
              borderRadius: "12px",
              border: "1px solid #FFFFFF10",
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: "#F2CA50",
                  fontSize: "24px",
                  fontWeight: "700",
                }}
              >
                Filters
              </Typography>
              <Typography
                sx={{
                  color: "headercolor",
                  fontSize: "12px",
                }}
              >
                Refine your selection
              </Typography>
            </Box>

            {/* Categories */}

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Box sx={{ fontSize: "18px", color: "#E5E2E1", mt: 2 }}>
                <InterestsIcon sx={{ fontSize: "18px", color: "#E5E2E1" }} />{" "}
                Categories
              </Box>

              {data?.response?.data?.map((categorise) => (
                <Box key={categorise.id} sx={{ color: "#D0C5AF" }}>
                  <Checkbox
                    sx={{
                      color: "#d0c5af12",
                      "&.Mui-checked": {
                        color: "#F2CA50",
                      },
                    }}
                  />
                  {categorise.name}
                </Box>
              ))}
            </Box>

            <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
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

              {/* max Price */}

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
            </Box>

            <Button
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                my: 3,
                color: "#E5E2E1",
                fontSize: "14px",
                border: "1px solid #E5E2E1",
              }}
              onClick={() => {
                (setmin(""), setmax(""));
              }}
            >
              Clear All Filters
            </Button>
          </Grid>

          <Grid
            size={{
              xs: 12,
              md: 9,
            }}
          >
            <Box sx={{ width: "100%" }}>
              <Products minPrice={min} maxPrice={max} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Categorise;
