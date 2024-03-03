import React, { ReactNode } from "react";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });
const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Amdadul Islam - Frontend Developer",
  description: "Best ReactJS/NextJS Developer in the world, in Bangladesh",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${robotoMono.className} bg-gray-900`}>
        <div className="text-blue-100 w-full h-full ">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
