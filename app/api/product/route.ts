// get all of the prodocts.

import { prisma } from "@/lib";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest){

// Pagination
const page = parseInt(req.nextUrl.searchParams.get('page') || "1", 10)
const limit = parseInt(req.nextUrl.searchParams.get('limit') || '10', 10)

// skip products
const skipProducts = (page - 1) * limit;

try {
    // use skip and take to get the paginated products
const skippedProducts = await prisma.product.findMany({
    skip: skipProducts,
    take: limit
});

if(skippedProducts.length === 0){
    return NextResponse.json({message: "No More Products", status: 404});
}

return NextResponse.json({skippedProducts, status: 200});
} catch (error) {
    if(error instanceof Error){
        return NextResponse.json({message: error.message, status: 404});
    }
}

// Search functionality
const queryReq = req.nextUrl.searchParams.get('q');
// console.log(queryReq);
// console.log(req.nextUrl.href);
if(queryReq){
    
    try {
        const querySearchData = await prisma.product.findMany({
            where: {
                OR: [
                    {
                        name: { contains : queryReq, mode: "insensitive"},
                        description: { contains : queryReq, mode: "insensitive"}
                    }
                ]
            }
        });

        if(querySearchData.length === 0){
            return NextResponse.json({message: "No Products Found", status: 404});
        }

        return NextResponse.json(querySearchData, {status: 200});
    } catch (error) {
        if(error instanceof Error){
            return NextResponse.json({message: error.message, status: 404});
        }
        return NextResponse.json({message: "An unknown error occurred", status: 500});
    }
    
}


try{
    const response = await prisma.product.findMany();
    if(!response){
        return NextResponse.json({message: "No products found.", status: 404})
    }
    return NextResponse.json(response, {status: 200})
}catch(error){
    if(error instanceof Error){
        return NextResponse.json({message: error.message}, {status: 404});
    }
    return NextResponse.json({message: "An unknown error occurred"}, {status: 404});
}
}


