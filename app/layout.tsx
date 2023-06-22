import { Inter } from 'next/font/google';
import './globals.css';
import RecoilRootWrapper from '@/lib/recoil-root';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Xatlaicious',
  description: 'Testing Xata with Server Components',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RecoilRootWrapper>{children}</RecoilRootWrapper>
      </body>
    </html>
  );
}
