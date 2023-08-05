// import { cookies } from "next/headers";
import { NextResponse } from 'next/server';

//test
// ! cookie로 로그인 data 전달을 위한 api입니다.
export async function POST(req: Request) {
  const body = await req.json();

  if (req.method === 'POST') {
    console.log('진입 했음 :::');
    const { name, id, address, dongho, phone }: any = body;
    const response = NextResponse.json({ code: 201, message: 'success' });

    console.log(name, id, address, dongho, phone);

    response.cookies.set({
      name: 'user',
      value: JSON.stringify({ name, id, address, dongho, phone }),
      httpOnly: true,
      expires: new Date().setDate(new Date().getDate() + 1),
      secure: true,
    });
    return response;
  }
  return NextResponse.json({ code: 400, message: 'fail' });
}
