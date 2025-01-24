import { prisma } from "@/lib";
import { nextRange } from "effect/Random";
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


export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const id = params.id;

  let data;
  try {
    data = await req.json();
  } catch (error) {
    return NextResponse.json({ message: "Invalid request body", status: 400 });
  }

  try {
    const updatedProduct = await prisma.product.update({
      where: { id: id },
      data: data,
    });

    return NextResponse.json(updatedProduct);
  } catch (error) {
    console.error('Error updating product:', error);
    return NextResponse.json({ message: "Product not updated, something went wrong", status: 500 });
  }
}