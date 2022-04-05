export const setPropertiesByCountryOrCity = async (value: string) => {
  const data = await fetch("http://localhost:3000/src/db/properties.json").then(
    (res) => res.json()
  );
  console.log(data);
};
