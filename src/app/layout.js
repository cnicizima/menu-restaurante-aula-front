import "./globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Restaurante do Ciro",
  description: "Aplicativo de cardápio digital",
  icons: {
    icon: '/favicon.ico',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
