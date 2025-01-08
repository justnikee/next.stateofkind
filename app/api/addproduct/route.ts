import { NextResponse } from "next/server";
import { prisma } from "@/lib";

export async function POST(req: Request) {
    try {
      const { name, description, price, imageUrls } = await req.json();
  
      if (!name || !price || !imageUrls || !Array.isArray(imageUrls)) {
        return NextResponse.json({ error: "Invalid product data" }, { status: 400 });
      }
  
      const newProduct = await prisma.product.create({
        data: {
          name,
          description,
          price,
          imageUrls,
        },
      });
  
      return NextResponse.json(newProduct, { status: 201 });
    } catch (error) {
      console.error("Error creating product:", error);
      return NextResponse.json({ error: "Failed to create product" }, { status: 500 });
    }
  }
  