import './globals.css';
import SnackbarProvider from 'lib/Provider/snackbar-provider';
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: '투표24',
  description: '전자투표를 활용한 투표 솔루션',
  keywords: 'react,next,vote,투표,시스템,투표관리,자동화,솔루션',
  themeColor: '#F3F4F6',
  // manifest: '/manifest.json',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  icons: [
    {
      rel: 'icon',
      url: '/favicon.ico',
    },],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className="h-full">
      <head>
        <meta charSet="UTF-8" />
        <link rel="stylesheet" href="https://webfontworld.github.io/pretendard/Pretendard.css" />
      </head>
      <body className="h-full">
        <SnackbarProvider />
        {children}
        {/* </SnackbarProvider> */}
      </body>
    </html>
  );
}
