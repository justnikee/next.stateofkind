import { NextResponse } from "next/server";
import { prisma } from "@/lib";

export async function POST(req: Request) {
  try {
    const { name, description, price, imageUrls, status, comparedAtPrice, quantity } = await req.json();

    if (!name || !price || !imageUrls || !Array.isArray(imageUrls)) {
      return NextResponse.json({ error: "Invalid product data" }, { status: 400 });
    }

    const newProduct = await prisma.product.create({
      data: {
        name,
        description,
        price,
        imageUrls,
        status,
        comparedAtPrice: comparedAtPrice || 0,
        quantity: quantity ?? 0, // Set quantity to 0 if null or undefined
      },
    });

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json({ error: "Failed to create product" }, { status: 500 });
  }
}
