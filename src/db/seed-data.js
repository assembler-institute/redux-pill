export default async function fetchCondos(dispatch) {
  try {
    const req = await fetch("server.json");
    const { properties } = await req.json();
    const arrayWithPictures = properties.map((condo) => {
      const randomNumber = Math.floor(Math.random() * 5 + 1);
      return { ...condo, picture: `/images/condo${randomNumber}.jpg` };
    });
    return arrayWithPictures;
  } catch (err) {
    console.log(err);
  }
}
