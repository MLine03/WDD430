import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next.js Dashboard',
  description: 'Next.js Learn Dashboard App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}