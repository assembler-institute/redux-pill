import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Bed,
  Bathtub,
  CropSquare,
  Pets,
  Yard,
  AcUnit,
  Deck,
  Pool,
} from "@mui/icons-material";

export default function HouseCard(props) {
  const { house } = props;

  return (
    <Card sx={{ display: "flex", marginBottom: "1rem" }}>
      <Box sx={{ display: "flex", flexDirection: "column", width: "75%" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5" color="#4caf50">
            {`${house.number} ${house.street}`}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {`${house.city}, ${house.province}. ${house.country}`}
          </Typography>
          <Typography
            variant="subtitle1"
            color="#6fbf73"
            component="div"
          >{`${house.type}, ${house.condition}, ${house.status}`}</Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >{`${house.description}`}</Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >{`${house.price}€`}</Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <Bed sx={{ height: 38, width: 38, margin: "0 0.5rem" }} />
          <Typography>{house.room}</Typography>
          <Bathtub sx={{ height: 38, width: 38, margin: "0 0.5rem" }} />
          <Typography>{house.bath}</Typography>
          <CropSquare sx={{ height: 38, width: 38, margin: "0 0.5rem" }} />
          <Typography>{house.size}</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          {house.pet ? (
            <Pets sx={{ height: 38, width: 38, margin: "0 0.5rem" }} />
          ) : null}
          {house.garden ? (
            <Yard sx={{ height: 38, width: 38, margin: "0 0.5rem" }} />
          ) : null}
          {house.air_conditioning ? (
            <AcUnit sx={{ height: 38, width: 38, margin: "0 0.5rem" }} />
          ) : null}
          {house.terrace ? (
            <Deck sx={{ height: 38, width: 38, margin: "0 0.5rem" }} />
          ) : null}
          {house.swimming_pool ? (
            <Pool sx={{ height: 38, width: 38, margin: "0 0.5rem" }} />
          ) : null}
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 350 }}
        image={house.picture}
        alt="Live from space album cover"
      />
    </Card>
  );
}
