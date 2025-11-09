import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'devtime',
  description: '프론트엔드 감 되찾기용 실습 프로젝트',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
