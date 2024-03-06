import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { CoinContextProvider } from "@/components/context/coinsContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "KoinX Assignment",
  description: "Created by Ronie",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <CoinContextProvider>
        <Navbar></Navbar>
        <div className=" w-[full] h-[full] flex items-center justify-center bg-[#eff2f5] overflow-x-hidden max-[411px]:px-2">
        {children}
        </div>
        </CoinContextProvider>
        </body>
    </html>
  );
}
