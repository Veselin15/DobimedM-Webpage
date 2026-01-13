import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dobimed M | Сервиз на медицинска и рентгенова апаратура - Добрич",
  description: "Лицензиран сервиз за медицинска техника, рентгенова апаратура и електроника. Партньорство с Швейцария. Над 45 години опит.",
  icons: {
    icon: "/favicon.ico", // Можем да направим и твое лого по-късно
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
