import { prisma } from "@/lib";
import { NextResponse } from "next/server";


export async function GET(){
     const products = await prisma.product.findMany();

     if(products){
        return NextResponse.json(products);
     }else{
        return NextResponse.json({message : "No products found"}, {status: 404});
     }
}