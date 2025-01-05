import { prisma } from "@/lib";
import { NextResponse, NextRequest } from "next/server";
import bcrypt from 'bcryptjs';

export async function POST(req: NextRequest) {
  const { name, email, password } = await req.json();

  // Check if the email already exists
  const existingUser = await prisma.user.findUnique({
    where: { email }
  });

  if (existingUser) {
    return NextResponse.json({ error: 'Email already exists' }, { status: 400 });
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
  }
}





export async function GET(req: NextRequest){

const users = await prisma.user.findMany();
return NextResponse.json(users)

}