import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

import { Box, Checkbox } from "@mui/material";
import {
  CurrencyRupee,
  Favorite,
  FavoriteBorder,
  FavoriteBorderOutlined,
} from "@mui/icons-material";
const MainCard = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  gap: "20px",
  // padding:"10px 50px"
}));
export default function Card1({ sliderData }) {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <MainCard>
      <Card
        sx={{
          maxWidth: { md: "20vw", sm: "40vw", xs:"48vw" },
          borderRadius: "0px",
          boxShadow: "none",
          backgroundColor: "#F2F5F9",
          position: "relative",
          height: "auto",
          borderRadius:"10px"
          // "&:hover": {
          //   border: "1px solid #000",
          // },
        }}
      >
        {/* <CardHeader sx={{fontStyle:"italic", "& .MuiCardHeader-title":{fontSize:{xs:"13px"}}}} title={sliderData.shopname} subheader="September 14"  /> */}
        <CardMedia
          component="img"
          image={sliderData.image}
          alt="Paella dish"
          sx={{ height: { md: "80vh", sm: "70vh", xs: "40vh" },"&:hover":{
            display:"zoom-in",
          } }}
        />
      </Card>
    </MainCard>
  );
}
