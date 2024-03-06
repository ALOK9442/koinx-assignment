'use client'
import React from 'react'
import MiniChartCarousel from '../MiniChartCarousel/MiniChartCarousel'
import { coinContext } from '../context/coinsContext'
import { useContext } from 'react'

const TrendingInner = () => {
  const {trendingCoins} = useContext(coinContext);
 
  const reversedArray = []

for(let i = trendingCoins?.coins?.length - 1; i >=1 ; i--) {
  const valueAtIndex = trendingCoins?.coins[i]
  
  reversedArray.push(valueAtIndex)
}
console.log(reversedArray);
  return (
    <div className="flex-1  flex flex-col gap-4">
        <div className="w-full h-[36px] text-[24px] font-[600] flex items-center  max-[411px]:pl-3">Trending Coins</div>
        <MiniChartCarousel data={reversedArray} id={"trending"}></MiniChartCarousel>
    </div>
  )
}

export default TrendingInner