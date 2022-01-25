export async function authRequests(type, inputData) {
  try {
    const req = await fetch(`http://localhost:8100/api/${type}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: inputData,
    });
    const { data } = await req.json();
    return {
      success: true,
      data: data,
    };
  } catch (err) {
    return {
      success: false,
      error: err.message,
    };
  }
}
