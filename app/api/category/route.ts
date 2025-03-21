import { prisma } from "@/lib";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const collecion: string = body?.collection;

    if (!collecion || collecion.trim() === "") {
      return NextResponse.json({ message: "Collection cannot be empty", status: 400 });
    }

    const res = await prisma.category.create({
      data: { name: collecion.trim() },
    });

    console.log(res);

    return NextResponse.json({ message: "Category created successfully", res, status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to create category", status: 500 });
  }
}



export async function GET(){
  try{
    const res = await prisma.category.findMany();
    if(res.length === 0){
      return NextResponse.json({message: "No categories found!"});
    }

    return NextResponse.json({res, status: 200});
  }catch(error){
    return NextResponse.json({error, status: 500});
  }
}