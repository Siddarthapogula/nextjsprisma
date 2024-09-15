export async function GET(req, res) {
    const reqObject = req;
    console.log(reqObject);
    return Response.json({ name : "siddarth" })
  }