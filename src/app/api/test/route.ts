import { NextApiRequest } from "next";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";


export function POST(req: NextApiRequest) {
  const cookie = cookies()
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