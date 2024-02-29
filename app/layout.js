import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Amdadul Islam - Frontend Developer",
  description: "Best ReactJS/NextJS Developer in the world, in Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900`}>
        <div className="text-blue-50 w-full h-full ">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
