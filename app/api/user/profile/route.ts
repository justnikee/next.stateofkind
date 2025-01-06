import { prisma } from "@/lib";
import  jwt  from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";


const JWT_SECRET = process.env.JWT_SECRET as string

export async function GET(req: NextRequest, res: NextResponse){
    try{
        const authHeader = req.headers.get('Authorization');

        if(!authHeader || !authHeader.startsWith('Bearer ')){
            return NextResponse.json({error: "unauthorized"}, {status: 401});
        }

        const token = authHeader.split(" ")[1];

        const decode = jwt.verify(token, JWT_SECRET) as {userId: string};

        if(!decode || !decode.userId){
            return NextResponse.json({error: "Invalid Token"}, {status: 401});
        }


        const user = await prisma.user.findUnique(
            {where: {id: decode.userId},
            select: {id: true, name: true, email: true}
        });


        if(!user){
            return NextResponse.json({ error: 'user not found!!'}, {status: 401})
        }

        return NextResponse.json({user}, {status: 200});
    }catch(error){
        console.error(error, "Error Retreving User")
return NextResponse.json({error: "Server error"}, {status: 501})
    }
}