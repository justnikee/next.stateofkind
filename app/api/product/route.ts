// get all of the prodocts.

import { prisma } from "@/lib";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest){
try {
    const queryReq = req.nextUrl.searchParams.get('q') || "";
const sortParam = req.nextUrl.searchParams.get('sort') || "name_asc";
const page = parseInt(req.nextUrl.searchParams.get('page') || "1", 10);
const limit = parseInt(req.nextUrl.searchParams.get('limit') || '10', 10);


const skip  = (page - 1) * limit;

const sortingOptions: Record<string, any> = {
    price_asc: {price : "asc"},
    price_desc: {price : "desc"},
    name_asc: {name : "asc"},
    name_desc: {name: "desc"},
    new: {createdAt: "asc"},
    old: {createdAt: "desc"}
};

const orderBy = sortingOptions[sortParam] || {name : "asc"};


const products = await prisma.product.findMany({
    where: {
      OR: [
        { name: { contains: queryReq, mode: "insensitive" } },
        { description: { contains: queryReq, mode: "insensitive" } },
      ],
    },
    orderBy,
    skip,
    take: limit,
  });

  if(products.length === 0){
    return NextResponse.json({ message: "No products found.", status: 404 });
  }

// total count 
const totalProducts = await prisma.product.count({
    where: {
        OR: [
            {name: {contains: queryReq, mode: "insensitive"}},
            {description: {contains: queryReq, mode: "insensitive"}},
        ]
    }
});


return NextResponse.json({
    status: 200,
    totalProducts,
    currentPage: page,
    totalPage: Math.ceil(totalProducts / limit),
    products
})
} catch (error) {
    return NextResponse.json({ message: error instanceof Error ? error.message : "An unknown error occurred", status: 500 }); 
}
}


