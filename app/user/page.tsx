'use client'

import { getUser } from "@/actions/user";
import { useState } from "react"

export default function (){
    const [id, setId] = useState<number>(0);
    const [user, setUser] = useState<null| User>(null);
    console.log(user);
    return(
        <div className=" bg-black">
       <div className="rounded-lg flex flex-col w-[10rem] justify-center">
            <input onChange={(e)=>setId(parseInt(e.target.value))} type="text" className=" rounded-lg m-2 p-1 " placeholder="user id" />
            <button onClick={async ()=>{
                await getUser(id).then(setUser);
            }} className=" bg-slate-600 p-1 m-3 rounded-lg text-lg text-white " >find user</button>
            {user && <div className=" text-white">
                <h1>{user.username}</h1><div></div>
                <h1>{user.email}</h1>
            </div> 
            }
            {
                !user && <h1 className=" text-white">no user found</h1>
            }
       </div>
       </div>
    )
}

interface User {
    id : number;
    username : string;
    password : string;
    email : string;
}