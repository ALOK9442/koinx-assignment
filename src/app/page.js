import GraphTrendingContain from "@/components/Graph and trending Container/GraphTrendingContain";
import YouMayAlsoLike from "@/components/YouMayAlsoLike/YouMayAlsoLike";
import PageDirectory from "@/components/pagedirectory/pagedirectory";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-1099.75 w-332 max-[411px]:px-[5px] px-14 text-black">
      {/* <div className=" max-w-[1440px] whitespace-nowrap h-[1629px]  relative  max-[411px]:h-[1800px]"></div> */}
      <PageDirectory />
      <GraphTrendingContain />
      <YouMayAlsoLike />
    </div>
  );
}
