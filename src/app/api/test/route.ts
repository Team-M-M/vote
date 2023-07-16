
// import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const config = {
  api: {
    bodyParser: true,
  },
};

// ! cookie로 로그인 data 전달을 위한 api입니다.
export async function POST(req: Request) {
  const body = await req.json()

  if (req.method === 'POST') {
    const { name, id, detail, dongho }: any = body
    const response = NextResponse.json({ code: 201, message: 'success' });

    response.cookies.set({
      name: 'user',
      value: JSON.stringify({ name, id, detail, dongho }),
    })


    return response;
  }

  return NextResponse.json({ code: 400, message: 'fail' });
}