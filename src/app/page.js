"use client"

import PageDirectoryShow from "@/components/page directory/PageDirectoryShow";
import GraphTrendingContain from "@/components/Graph and trending Container/GraphTrendingContain";
import SentimentSection from "@/components/SentimentSection/SentimentSection";
import SectionOptions from "@/components/SectionOptions/SectionOptions";


export default function Home() {
  return (
    <div className="w-[1348px] h-1100">
      <PageDirectoryShow />
      <GraphTrendingContain />
      <SectionOptions />
      <SentimentSection />
    </div>
  );
}
