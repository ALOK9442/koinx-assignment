"use client"
import React from 'react'

import { useEffect, useState } from 'react';

const MiniChart = ({ i }) => {

  const [down, setDown] = useState(false)
  useEffect(() => {
    if (i.item.data.price_change_percentage_24h.usd > 0) {
      setDown(false)
    } else {
      setDown(true)
    }
  })

  return (
    <div className="w-[252px] h-[160px] bg-white rounded-md border-[1px]  border-[##E3E3E3] flex flex-col px-2 py-2 cursor-pointer max-[411px]:w-[158.95px] max-[411px]:h-[101.78px]">
      <div className="w-full h-[38px] max-[411px]:h-[23.97px]">
        <div className="w-[116.55px] h-[26px]  flex items-center gap-2">
          <img src={i.item.small} className="w-[26px] h-[26px] object-fill max-[411px]:w-[16.4px] max-[411px]:h-[16.4px]" alt="" />
          <div className="text-[16px] font-[400] leading-[19.36px] max-[411px]:text-[10.09px]">{i.item.symbol}</div>
          <div className="w-[50.55px] h-[20px] bg-[#EBF9F4] flex items-center justify-center rounded-[2px] max-[411px]:w-[27px] max-[411px]:h-[9px]">

            <div className={`text-[12px] ${down ? "text-[#E96975]" : "text-[#14B079] leading-[15.14px]"} max-[411px]:text-[7.57px]`}>{i.item.data.price_change_percentage_24h.usd > 0 && '+'}{i.item.data.price_change_percentage_24h.usd.toFixed(1)}</div>
          </div>

        </div>

      </div>
      <div className="px-1 text-[20px] font-[500] max-[411px]:">{i.item.data.price.substring(0, 5)}</div>
      <div className="w-[200px] h-[60px] self-center flex items-center justify-center max-[411px]:w-[126.15px] max-[411px]:h-[37.85px]">
        <img src={i.item.data.sparkline} className="w-full h-full object-fill" alt="" />
      </div>
    </div>
  )
}

export default MiniChart