"use client"

import PageDirectoryShow from "@/components/page directory/PageDirectoryShow";
import GraphTrendingContain from "@/components/Graph and trending Container/GraphTrendingContain";
import SentimentSection from "@/components/SentimentSection/SentimentSection";
import SectionOptions from "@/components/SectionOptions/SectionOptions";
import PerformanceSection from "@/components/PerformanceSection/PerformanceSection";
import AboutBitcoin from "@/components/AboutBitcoin/AboutBitcoin";
import Tokenomics from "@/components/Tokenomics/Tokenomics";
import TeamDetails from "@/components/TeamDetail/TeamDetail";
import Navbar from "@/components/Navbar/Navbar";
import YouMayAlsoLike from "@/components/YouMayAlsoLike/YouMayAlsoLike";
import TrendingCoins from "@/components/TrendingCoins/TrendingCoins";


export default function Home() {
  return (
    <div className="w-full pr-12 pl-12">
    <PageDirectoryShow />
      <div className="flex space-x-5">
        <div className="md:w-[66%] w-full">
          <GraphTrendingContain />
          <SectionOptions />
          <PerformanceSection />
          <SentimentSection />
          <AboutBitcoin />
          <Tokenomics />
          <TeamDetails />
        </div>
        <div className="max-[768px]:hidden ">
          <TrendingCoins />
        </div>
      </div>
      <YouMayAlsoLike />
      <div className="lg:hidden mt-9 items-center flex justify-center px-4 w-full">
        <TrendingCoins />
      </div>
    </div>
  );
}
