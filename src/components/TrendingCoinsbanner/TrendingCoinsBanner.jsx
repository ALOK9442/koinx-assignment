"use client"
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const TrendingCoinsBanner = ({ i }) => {
  const [down, setDown] = useState(false)
  useEffect(() => {
    if (i.item.data.price_change_percentage_24h.usd.toFixed(2) < 0) {
      setDown(true)
    }
  }, [i])
  return (
    <div className="w-full h-7  flex items-center justify-between max-[411px]:mb-4 ">
      <div className="h-full flex items-center gap-2">
        <img src={i.item.large} className="w-6 h-6 object-cover" alt="" />
        <div className="text-[16px] font-mono font-[500] leading-6">{i.item.name} ({i.item.symbol})</div>
      </div>
      <div className="w-21 h-7 bg-[#EBF9F4] flex items-center justify-center gap-2 rounded-[4px]">
        <svg className={down && `rotate-[180deg]`} width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.5 0L11 8H0L5.5 0Z" fill={down ? "#E96975" : "#14B079"} />
        </svg>
        <div className={`text-[16px] ${down ? "text-[#E96975]" : "text-[#14B079]"}`}>{i.item.data.price_change_percentage_24h.usd.toFixed(2)}%</div>
      </div>
    </div>
  )
}

export default TrendingCoinsBanner