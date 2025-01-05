import { prisma } from "@/lib";
import { NextResponse, NextRequest } from "next/server";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET as string;

if (!JWT_SECRET) {
  throw new Error("Missing JWT_SECRET in environment variables");
}

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
  }

  try {
    let user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    return NextResponse.json({ message: 'Login successful', token }, { status: 200 });
  } catch (error) {
    console.error("Can not login", error);
    return NextResponse.json({ message: 'Internal Server Error' });
  }
}
