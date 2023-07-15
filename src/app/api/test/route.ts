
import { cookies } from "next/headers";
import { NextResponse } from "next/server";


export function POST(req: Request) {
  const cookie: any = cookies()
  console.log(req.body, 'data :::')

  if (req.method === 'POST') {

    cookie.set({
      name: 'user',
      value: req.body
    })
    const response = NextResponse.redirect("http://localhost:3000/1", { status: 302 });
    return response;
  }
}