import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Handcrafted Haven",
  description: "WDD430 Next.js Project",
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
