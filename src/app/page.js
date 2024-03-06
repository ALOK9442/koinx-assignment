"use client"

import PageDirectoryShow from "@/components/page directory/PageDirectoryShow";
import GraphTrendingContain from "@/components/Graph and trending Container/GraphTrendingContain";
import YouMayAlsoLike from "@/components/YouMayAlsoLike/YouMayAlsoLike";
export default function Home() {
  return (
    <div className=" max-w-[1440px] whitespace-nowrap h-[1629px]  relative  max-[411px]:h-[1800px]">
    <PageDirectoryShow></PageDirectoryShow>
    <GraphTrendingContain></GraphTrendingContain>
    <YouMayAlsoLike></YouMayAlsoLike>
   </div>
  );
}
