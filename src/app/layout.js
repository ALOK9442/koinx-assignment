import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import YouMayAlsoLike from "@/components/YouMayAlsoLike/YouMayAlsoLike";
import TrendingCoins from "@/components/TrendingCoins/TrendingCoins";

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
        <div className="w-full">
            <Navbar />
            {children}
        </div>
      </body>
    </html>
  );
}
