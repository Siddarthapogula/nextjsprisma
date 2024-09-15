
export async function GET(req : Request){
    const {pathname, searchParams} = new URL(req.url);
    console.log(pathname, searchParams);
    return Response.json({msg : 'test completed'})
}