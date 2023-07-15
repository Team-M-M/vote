import { BackHeader } from '@components/Common/Header/backHead';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <main /* className={inter.className} */>
      <BackHeader />
      {children}
    </main>
  );
}
