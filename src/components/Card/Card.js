import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const card = (
  <React.Fragment>
    <CardContent>
      <Typography variant="h3" component="div" sx={{ color: "#4caf50" }}>
        Real Estate for you
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Idealist takes care of what you most depend on
      </Typography>
      <Typography variant="body2">
        Search for the house you always wanted to have with our developed search
        engine.
        <br />
        {
          '"You can filter among many different values and find the house that fits you most"'
        }
      </Typography>
    </CardContent>
    <CardActions>
      <Button
        onClick={() => {
          window.location = "/dashboard";
        }}
        size="small"
      >
        Learn More
      </Button>
    </CardActions>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined" sx={{ backgroundColor: "#d1ff33" }}>
        {card}
      </Card>
    </Box>
  );
}
