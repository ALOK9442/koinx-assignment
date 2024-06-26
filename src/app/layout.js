import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "KoinX Assignment",
  description: "Created by Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <div className=" w-[full] h-[full] flex items-center justify-center bg-[#eff2f5] overflow-x-hidden max-[411px]:px-2"> */}
        <div className="">
            <Navbar />
            {children}
        </div>
      </body>
    </html>
  );
}
