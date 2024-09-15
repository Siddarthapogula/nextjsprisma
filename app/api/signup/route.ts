import Prisma from "@/db/prisma";

export async  function POST(req : Request){
    const body : userBody = await req.json();
    const {username, password, email} = body;
    if(!(username && password && email)){
        return Response.json(false);
    }
    console.log(body)
    const res = validateUserBody(username, password, email);
    if(res){
        try{
            await Prisma.user.create({
                data : {
                    username,
                    password,
                    email
                }
            })
            return Response.json(true);
        }
        catch(e){
            return Response.error();
        }
    }
    return Response.json(false);
}
function validateUserBody(userName : string, passWord : string, email : string){
    if(email.includes('@')&& email.includes('.com')&& userName.length >=3 && passWord.length >=6){
        return true;
    }
    return false;
}
interface userBody{
    username : string,
    password : string,
    email : string
}