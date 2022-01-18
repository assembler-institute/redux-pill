import addPicture from "../utils/addPictureToHouse";

export async function fetchCondos() {
  try {
    const req = await fetch("http://localhost:3001/properties");
    const properties = await req.json();
    const arrayWithPictures = properties.map((condo) => {
      return addPicture(condo);
    });
    return arrayWithPictures;
  } catch (err) {
    console.log(err);
  }
}

export async function applyFilters(...filters) {
  try {
    const reqBase = "http://localhost:3001/properties";
    const req = await fetch("http://localhost:3001/properties");
    const properties = await req.json();
    const arrayWithPictures = properties.map((condo) => {
      const randomNumber = Math.floor(Math.random() * 5 + 1);
      return { ...condo, picture: `/images/condo${randomNumber}.jpg` };
    });
    return arrayWithPictures;
  } catch (err) {
    console.log(err);
  }
}
