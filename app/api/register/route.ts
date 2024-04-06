import { NextRequest, NextResponse } from "next/server";
import prismadb from '@/libs/prismadb'
import bcrypt from 'bcrypt'

export async function POST (req: NextRequest) {
    try {
        const body = await req.json();

        const {email, name, password} = body;

        const existingUser = await prismadb.user.findUnique({
            where: {
                email
            }
        });

        if(existingUser){
            return NextResponse.error();
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await prismadb.user.create({
            data: {
                email,
                name,
                hashedPassword,
                image: '',
                emailVerified: new Date()
            }
        })

        return NextResponse.json(user);

    } catch (error) {
        console.log(error);
        return NextResponse.error()
    }
}