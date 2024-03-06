"use client";
import React from "react";
import { useEffect, useState, useContext ,useRef, memo } from "react";
import { coinContext } from "../context/coinsContext";

const HeroGraph = () => {
  const {priceUSD, priceINR, bitcoinPriceChange} = useContext(coinContext)
  const [down, setDown] = useState(false);
 
  
  const container = useRef();
  
  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "autosize": true,
          "symbol": "BITSTAMP:BTCUSD",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "3",
          "locale": "en",
          "enable_publishing": false,
          "hide_top_toolbar": true,
          "hide_legend": true,
          "save_image": false,
          "calendar": false,
          "hide_volume": true,
          "move_scale_to_left": true,
          "support_host": "https://www.tradingview.com"
        }`;
      container.current.appendChild(script);
    },
    []
  );
  useEffect(()=>{
    if(bitcoinPriceChange > 0){
      setDown(false);
    }else{
      setDown(true)
    }
  },[bitcoinPriceChange])
 
  return (
    <div className="w-[881px] h-[711px] bg-white flex flex-col items-center gap-8 py-5 rounded-lg  max-[411px]:max-w-[384px]  max-[411px]:gap-6 max-[411px]:h-[445px] max-[411px]:relative max-[411px]:mt-[68px]">
      <div className=" w-[95%] h-[40px] self-start px-10 flex items-center gap-1 max-[411px]:px-6 max-[411px]:absolute max-[411px]:top-[-60px]">
        <img
          src="https://cryptologos.cc/logos/bitcoin-btc-logo.png"
          className="h-[36px] w-[36px] object-cover"
          alt=""
        />
        <div className="font-semibold text-[23px]">Bitcoin</div>
        <div className="h-[55%] flex-col items-start text-[15px]">BTC</div>
        <div className="h-[35px] w-[75px] text-[13px] flex items-center justify-center text-white bg-[#808A9D] rounded-[8px] ml-5 font-[500]">
          Rank #1
        </div>
      </div>
      <div className="w-[568.72px] h-[66px]  self-start mx-10 flex gap-4 ">
        <div className="h-full w-[161px]  flex flex-col justify-between">
          <div className="text-[28px] font-semibold">
            ${priceUSD ? priceUSD.bitcoin?.usd : "coinGecko Server Error"}
          </div>
          <div className="text-[16px] font-medium">₹ {priceINR ? priceINR.bitcoin?.inr : "coinGecko Server Error"}</div>
        </div>
        <div className="w-[375.72px] h-[38.39px]  flex items-center gap-4">
          <div className="w-[84px] h-[28px] bg-[#EBF9F4] flex items-center justify-center gap-2 rounded-[4px]">
            <svg
            className=  {down && `rotate-[180deg]`}
           
              width="11"
              height="8"
              viewBox="0 0 11 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5.5 0L11 8H0L5.5 0Z" fill={down ? "#E96975" : "#14B079"} />
            </svg>
            <div className={`text-[16px] ${down ? "text-[#E96975]" : "text-[#14B079]"}`}>{bitcoinPriceChange?.toFixed(2)}%</div>
          </div>
          <div className="text-[#768396] text-[14px]">(24h)</div>
        </div>
      </div>
      <div className="w-[90%] h-[0.3px] self-center bg-gray-500"></div>
      <div className="w-full px-10 flex items-center justify-between  max-[411px]:flex-col  max-[411px]:items-start max-[411px]:px-9">
        <div className="font-bold text-[16px]">BITCOIN PRICE CHART (USD)</div>
        <div className="flex items-center justify-between text-[#768396] text-[13px] w-[290.34px] font-medium max-[411px]:text-[8.93px] max-[411px]:gap-2 max-[411px]:justify-start">
          <div>1H</div>
          <div>24H</div>
          <div>7D</div>
          <div>1M</div>
          <div>3M</div>
          <div>6M</div>
          <div>1Y</div>
          <div>ALL</div>
        </div>
      </div>
      <div className="w-[95%] h-[410px] z-[2] overflow-hidden max-[411px]:w-[344px] max-[411px]:h-[216px]">
      <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
      <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
      </div>
      </div>
    </div>
  );
};

export default HeroGraph;
