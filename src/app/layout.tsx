import ProgressBar from 'lib/Provider/progress-bar';
import './globals.css';
import SnackbarProvider from 'lib/Provider/snackbar-provider';
import 'react-toastify/dist/ReactToastify.css';
import Script from 'next/script';
import { NavigationEvents } from '@components/Common/navigation-events';

export const metadata = {
  title: '투표24',
  description: '24시간 어디서든 항상 이용 가능한 온라인 무료 전자투표 플랫폼 투표24',
  keywords: 'react next vote 투표24 시스템,투표관리,자동화,솔루션, 투표,전자투표, ',
  author: 'woochang',
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
      url: '/favicon/favicon.ico',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon/favicon-16x16.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon/favicon-32x32.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/favicon/apple-icon.png',
    },
  ],
};

/* text-[10px] lg:text-[20px] -> 반응형 폰트  */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  // const header = headers()
  // console.log(header.get('referer'), 'header')

  return (
    <html lang="ko" className="h-full">
      <head>
        <meta charSet="UTF-8" />
        {/* Google tag (gtag.js) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-JXSHQE9ZM3" strategy="lazyOnload" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-JXSHQE9ZM3', {
            page_path: window.location.pathname,
          });
        `}
        </Script>
        {/* <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'none'" /> */}
        <meta name="referrer" content="no-referrer-when-downgrade" />
      </head>
      <body className="h-full lg:text-[20px]" /* suppressHydrationWarning={true} */>
        <SnackbarProvider />
        <ProgressBar />
        {children}
        <NavigationEvents />
      </body>
    </html>
  );
}
