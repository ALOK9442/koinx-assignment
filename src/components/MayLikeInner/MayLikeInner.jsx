import React, { useState, useEffect } from 'react';
import MiniChartCarousel from '../MiniChartCarousel/MiniChartCarousel';
import axios from 'axios';

const MayLikeInner = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [bitcoinPriceChange, setBitcoinPriceChange] = useState(null);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const res = await axios.get(
          'https://api.coingecko.com/api/v3/search/trending',
          { crossDomain: true }
        );
        setTrendingCoins(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchBitcoinPriceChange = async () => {
      try {
        const res = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&order=market_cap_desc&per_page=100&page=1&sparkline=true&locale=en',
          { crossDomain: true }
        );
        setBitcoinPriceChange(res?.data[0]?.price_change_percentage_24h);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTrendingCoins();
    fetchBitcoinPriceChange();

  }, []);

  return (
    <div className="flex-1  flex flex-col gap-4">
      <div className="w-full h-[36px] text-[24px] font-[600] flex items-center max-[411px]:pl-3">You May Also Like</div>
      <MiniChartCarousel data={trendingCoins.coins} id={"mayLike"} />
    </div>
  );
};

export default MayLikeInner;
