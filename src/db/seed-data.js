import addPicture from "../utils/addPictureToHouse";

export async function fetchCondos(searchParams) {
  try {
    const reqBase = "http://localhost:3001/properties";
    const req = await fetch(reqBase + searchParams);
    const properties = await req.json();
    const arrayWithPictures = properties.map((condo) => {
      return addPicture(condo);
    });
    return arrayWithPictures;
  } catch (err) {
    console.log(err);
  }
}
