export default function addPictureToHouse(house) {
  const randomNumber = Math.floor(Math.random() * 5 + 1);
  return { ...house, picture: `/images/condo${randomNumber}.jpg` };
}
