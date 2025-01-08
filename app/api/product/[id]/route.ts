import { prisma } from "@/lib";
import { NextResponse } from "next/server";



export async function GET(request: Request, {params} : {params: {id: string}}){
    const id = params.id;

const product = await prisma.product.findUnique(
 {
    where: {
        id: id as string
    }
 }
)

if (product) {
    return NextResponse.json(product);
  } else {
    return NextResponse.json({ message: 'Product not found' }, { status: 404 });
  }
}

