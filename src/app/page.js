"use client"

import PageDirectoryShow from "@/components/page directory/PageDirectoryShow";
import GraphTrendingContain from "@/components/Graph and trending Container/GraphTrendingContain";
import SentimentSection from "@/components/SentimentSection/SentimentSection";
import SectionOptions from "@/components/SectionOptions/SectionOptions";
import PerformanceSection from "@/components/PerformanceSection/PerformanceSection";
import AboutBitcoin from "@/components/AboutBitcoin/AboutBitcoin";
import Tokenomics from "@/components/Tokenomics/Tokenomics";
import TeamDetails from "@/components/TeamDetail/TeamDetail";


export default function Home() {
  return (
    <div className="w-[1348px] h-[5215px]">
      <PageDirectoryShow />
      <GraphTrendingContain />
      <SectionOptions />
      <PerformanceSection />
      <SentimentSection />
      <AboutBitcoin />
      <Tokenomics />
      <TeamDetails />
    </div>
  );
}
