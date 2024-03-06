import React, { useState, useEffect } from 'react';
import MiniChartCarousel from '../MiniChartCarousel/MiniChartCarousel';
import axios from 'axios';

const TrendingInner = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const res = await axios.get(
          'https://api.coingecko.com/api/v3/search/trending',
          { crossDomain: true }
        );
        setTrendingCoins(res.data?.coins || []);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTrendingCoins();

    return () => {
      // Cleanup if necessary
    };
  }, []);

  return (
    <div className="flex-1  flex flex-col gap-4">
      <div className="w-full h-[36px] text-[24px] font-[600] flex items-center  max-[411px]:pl-3">
        Trending Coins
      </div>
      <MiniChartCarousel data={trendingCoins} id={'trending'}></MiniChartCarousel>
    </div>
  );
};

export default TrendingInner;
