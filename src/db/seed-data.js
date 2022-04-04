export async function fetchCondos(token, searchParams) {
  try {
    const reqBase = "http://localhost:8100/api/properties";
    const req = await fetch(reqBase + searchParams, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const { data } = await req.json();
    for (let condo of data) {
      const randomNumber = Math.floor(Math.random() * 5 + 1);
      condo.picture = `/images/condo${randomNumber}.jpg`;
    }
    return data;
  } catch (err) {
    console.log(err);
  }
}
