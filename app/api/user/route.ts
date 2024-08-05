import { prisma } from "@/lib";
import { NextRequest, NextResponse } from "next/server";


// Function
export async function POST(req: NextRequest, res: NextResponse){
     const {name, email, password } = await req.json();

     try{
        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                password
            }
        })
        return NextResponse.json(newUser , {status: 201})
     }catch(error){
        return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
     }
}

// Function
export async function GET(){
    try {
        let users  = await prisma.user.findMany();
        console.log(users);
        return NextResponse.json(users)
    } catch (error) {
        console.error("error fetching user:", error);
        return NextResponse.error({ message: 'Internal Server Error' });
    }

}