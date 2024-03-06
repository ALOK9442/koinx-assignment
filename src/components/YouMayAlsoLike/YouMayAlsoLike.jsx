import React from 'react'
import MayLikeInner from '../MayLikeInner/MayLikeInner'
import TrendingInner from '../TrendingInner/TrendingInner'

const YouMayAlsoLike = () => {
  return (
    <div className="w-[100vw] h-[628px] bg-white absolute left-[50%] translate-x-[-50%] bottom-0 flex items-center justify-center max-[411px]:w-[384px] max-[411px]:h-[510px] max-[411px]:top-[600px]">
      <div className="w-[1440px] h-[492px]  flex flex-col relative max-[411px]:w-[384px] bg-white">
        <MayLikeInner></MayLikeInner>
        <TrendingInner></TrendingInner>
      </div>
      </div>
  )
}

export default YouMayAlsoLike