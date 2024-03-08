'use client'

import React from 'react'
import MayLikeInner from '../MayLikeInner/MayLikeInner'
import TrendingInner from '../TrendingInner/TrendingInner'

const YouMayAlsoLike = () => {
  return (
    <div className="w-full md:h-[492px] flex flex-col px-16 relative max-[411px]:w-[384px] bg-white">
      <MayLikeInner></MayLikeInner>
      <TrendingInner></TrendingInner>
    </div>
  )
}

export default YouMayAlsoLike