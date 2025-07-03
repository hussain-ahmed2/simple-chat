import type { Metadata } from "next";
import { Karla, Inter, Poppins, Outfit } from "next/font/google";
import "./globals.css";

export const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const outfit = Outfit({
  subsets: ["latin"],
});

export const inter = Inter({
  subsets: ["latin"],
});

export const karla = Karla({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Simple Chat",
  description: "A simple chat application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
