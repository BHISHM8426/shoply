import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { IoIosNotifications } from "react-icons/io";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body  >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
