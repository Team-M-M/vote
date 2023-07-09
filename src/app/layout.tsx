import './globals.css'
import { Inter, Noto_Sans_KR } from 'next/font/google'

const inter = Noto_Sans_KR({ subsets: ["latin"], weight: ["100", "400", "700", "900"], })

export const metadata = {
  title: '투표관리 시스템',
  description: '하남 푸르지오 투표관리 시스템',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="stylesheet" href="https://webfontworld.github.io/pretendard/Pretendard.css" />
      </head>
      <body /* className={inter.className} */>{children}</body>
    </html>
  )
}