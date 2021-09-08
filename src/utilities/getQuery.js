export function getQuery(object) {
  let query = "";
  console.log(object, "object");
  for (const property in object) {
    if (typeof object[property] !== "object" && object[property] !== false) {
      if (object[property] === true) {
        query += `&${property}=${object[property]}`;
      } else if (
        object[property] !== 0 &&
        typeof object["minPrice"] === "number"
      ) {
        query += `&price_gte${object["minPrice"]}`;
      } else if (
        object[property] !== 0 &&
        typeof object["maxPrice"] === "number"
      ) {
        query += `&price_gte${object["maxPrice"]}`;
      }
    }
    console.log(typeof object[property]);
  }
  console.log(query, "Final query");
}
