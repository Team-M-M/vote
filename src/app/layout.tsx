import './globals.css';
// import { Inter, Noto_Sans_KR } from 'next/font/google';

// const inter = Noto_Sans_KR({ subsets: ['latin'], weight: ['100', '400', '700', '900'] });

export const metadata = {
  title: '투표관리 시스템',
  description: '자동화 투표관리 시스템 vote',
  keywords: 'react,next,vote,투표,시스템,투표관리,자동화,솔루션',
  themeColor: '#000000',
  manifest: '/manifest.json',
  icons: [
    {
      rel: 'icon',
      url: '/favicon.ico',
    },]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <meta charSet="UTF-8" />
        <link rel="stylesheet" href="https://webfontworld.github.io/pretendard/Pretendard.css" />
      </head>
      <body /* className={inter.className} */>{children}</body>
    </html>
  );
}
