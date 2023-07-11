import { BackHeader } from "@components/Common/Header/backHead"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body /* className={inter.className} */>
        <BackHeader />
        {children}
      </body>
    </html>
  )
}