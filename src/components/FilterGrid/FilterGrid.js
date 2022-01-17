import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

import TypeOfHouseForm from "../TypeOfHouseForm/TypeOfHouseForm";
import BedroomsForm from "../BedroomsForm/BedroomsForm";
import EquipmentSelect from "../EquipmentSelect/EquipmentSelect";
import PriceRangeSlider from "../PriceRangeSlider/PriceRangeSlider";
import PublicationDateSelect from "../PublicationDateSelect/PublicationDateSelect";
import BathroomsForm from "../BathroomsForm/BathroomsForm";
import ConditionForm from "../ConditionForm/ConditionForm";
import MoreFilters from "../MoreFilters/MoreFilters";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function FilterGrid() {
  return (
    <Box
      sx={{
        width: "100%",
        padding: "1rem",
        borderRadius: "0.3rem",
        backgroundColor: "primary.light",
        "&:hover": {
          backgroundColor: "primary.main",
        },
      }}
    >
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={3}>
          <Item>
            <Typography variant="h6" gutterBottom component="div">
              Type of House
            </Typography>
            <TypeOfHouseForm />
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <Typography variant="h6" gutterBottom component="div">
              Bedrooms
            </Typography>
            <BedroomsForm />
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <Typography variant="h6" gutterBottom component="div">
              Bathrooms
            </Typography>
            <BathroomsForm />
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <Typography variant="h6" gutterBottom component="div">
              Equipment
            </Typography>
            <EquipmentSelect />
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <Typography variant="h6" gutterBottom component="div">
              Condition
            </Typography>
            <ConditionForm />
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <Typography variant="h6" gutterBottom component="div">
              Price Range
            </Typography>
            <PriceRangeSlider />
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <Typography variant="h6" gutterBottom component="div">
              Publication Date
            </Typography>
            <PublicationDateSelect />
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <Typography variant="h6" gutterBottom component="div">
              More Filters
            </Typography>
            <MoreFilters />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
