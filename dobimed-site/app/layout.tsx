import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Или шрифтът, който ползваш
import "./globals.css";
import ScrollEnhancements from "@/components/ScrollEnhancements"; // <--- Импортирай тук

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dobimed M | Сервиз на медицинска техника",
  description: "Лицензиран сервиз за медицинска и рентгенова апаратура в Добрич.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bg">
      <body className={inter.className}>
        <ScrollEnhancements /> {/* <--- Добави компонента тук, най-горе */}
        {children}
      </body>
    </html>
  );
}