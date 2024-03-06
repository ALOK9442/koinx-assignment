"use client";

import { createContext } from "react";

import { useState, useEffect } from "react";
import axios from "axios";

export const coinContext = createContext({});

export const CoinContextProvider = ({ children }) => {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [priceUSD, setPriceUSD] = useState({});
  const [priceINR, setPriceINR] = useState({});
  const[bitcoinPriceChange, setBitcoinPricechange] = useState(null);
  useEffect(() => {
    try {
      const fetchAll = async () => {
        const res = await axios.get(
          "https://api.coingecko.com/api/v3/search/trending",
          { crossDomain: true }
        );
        setTrendingCoins(res.data);
      };
      fetchAll();
    } catch (error) {
      console.log(error);
    }
  }, [axios]);

  useEffect(() => {
    try {
      const fetchAll = async () => {
        const res = await axios.get(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd",
          { crossDomain: true }
        );
        setPriceUSD(res.data);
      };
      fetchAll();
    } catch (error) {
      console.log(error);
    }
  }, [axios]);
  useEffect(() => {
    try {
      const fetchAll = async () => {
        const res = await axios.get(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr",
          { crossDomain: true }
        );
        setPriceINR(res.data);
      };
      fetchAll();
    } catch (error) {
      console.log(error);
    }
  }, [axios]);
  useEffect(()=>{
    try {
        const fetchAll = async()=>{
            const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&order=market_cap_desc&per_page=100&page=1&sparkline=true&locale=en",{crossDomain : true})
            setBitcoinPricechange(res?.data[0]?.price_change_percentage_24h)
        }
        fetchAll()
    } catch (error) {
        console.log(error);
    }
    
},[axios])


  return <coinContext.Provider value={{priceUSD,priceINR,trendingCoins,bitcoinPriceChange}}>{children}</coinContext.Provider>;
};
