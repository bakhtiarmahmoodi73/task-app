import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const iranSans = localFont({
  src: "./fonts/IRANSansX-RegularD4.ttf",
  variable: "--font-iran-sans",
  weight: "100 900",
});
const iranSansnumber = localFont({
  src: "./fonts/IRANSansXFaNum-LightD4.ttf",
  variable: "--font-number-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "my project",
  description: "انجام پروژه عملی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${iranSans.variable} ${iranSansnumber.variable} antialiased `}
      >

        <Navbar/>
        
        <main className="">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
