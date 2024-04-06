import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./global.css";
import Header from "@/app/_components/layout/Header/Header";
import React from "react";
import Footer from "@/app/_components/layout/Footer/Footer";

const roboto = Roboto({ subsets: ["latin", "cyrillic"], weight: "400" });

export const metadata: Metadata = {
  title: "Chip Change",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className={roboto.className}>
        <main className="min-h-screen">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
