import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function PopularList() {
  return (
    <ImageList
      sx={{
        width: "100%",
        height: "auto",
        display: "flex",
        justifyContent: "center",
      }}
      cols={5}
      rowHeight={164}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} sx={{ maxHeight: 450 }}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "images/condo1.jpg",
    title: "Condo",
  },
  {
    img: "images/condo2.jpg",
    title: "Condo",
  },
  {
    img: "images/condo3.jpg",
    title: "Condo",
  },
  {
    img: "images/condo4.jpg",
    title: "Condo",
  },
  {
    img: "images/condo5.jpg",
    title: "Condo",
  },
];
