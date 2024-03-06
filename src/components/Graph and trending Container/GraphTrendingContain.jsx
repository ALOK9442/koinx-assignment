import React from 'react'
import HeroGraph from '../HeroGraph/HeroGraph'
import TrendingCoins from '../TrendingCoins/TrendingCoins'
const GraphTrendingContain = () => {
  return (
    <div className="w-full h-[760px]  flex justify-between gap-[20px] max-[411px]:flex-col max-[411px]:h-[1000px]">
        <HeroGraph></HeroGraph>
        <TrendingCoins></TrendingCoins>
    </div>
  )
}

export default GraphTrendingContain