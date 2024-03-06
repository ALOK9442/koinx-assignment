"use client"
import React,{useRef} from 'react'
import MiniChart from '../Mini Chart/MiniChart'




const MiniChartCarousel = ({data,id}) => {
  const container = useRef()

  const handleScroll = (e) =>{
    e.preventDefault();
    
    container.current.scrollBy({
      left: e.deltaY < 0 ? -100 : 100,
      
    });
  }
  
   


  
  return (
  
    <div   className="myElement w-full h-[180px]  flex items-center gap-[10px] overflow-x-scroll  scroll-smooth bg-white">
      <svg id={"back"} onClick={(e)=>handleBack(e)} className="absolute  cursor-pointer left-[-25px] z-[4] max-[411px]:left-[0px] " width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_57_41563)">
<g clip-path="url(#clip1_57_41563)">
<g filter="url(#filter0_d_57_41563)">
<path d="M3.97266 17.1431C3.97266 24.8751 10.2407 31.1431 17.9727 31.1431C25.7046 31.1431 31.9727 24.8751 31.9727 17.1431C31.9727 9.41108 25.7046 3.14307 17.9727 3.14307C10.2407 3.14307 3.97266 9.41108 3.97266 17.1431Z" fill="white"/>
<path d="M15.0029 16.7184C15.0029 16.5769 15.0622 16.4413 15.1673 16.3423L20.0111 11.778C20.2272 11.5744 20.574 11.5778 20.7857 11.7855C20.9975 11.9932 20.994 12.3267 20.7779 12.5302L16.3333 16.7184L20.7779 20.9065C20.994 21.1101 20.9975 21.4435 20.7857 21.6513C20.574 21.859 20.2272 21.8624 20.0111 21.6588L15.1673 17.0945C15.0622 16.9955 15.0029 16.8599 15.0029 16.7184Z" fill="#171717"/>
</g>
</g>
</g>
<defs>
<filter id="filter0_d_57_41563" x="-4.02734" y="-4.85693" width="44" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="4"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_57_41563"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_57_41563" result="shape"/>
</filter>
<clipPath id="clip0_57_41563">
<rect width="34" height="34" fill="white" transform="translate(0.972656 0.143066)"/>
</clipPath>
<clipPath id="clip1_57_41563">
<rect width="34" height="34" fill="white" transform="translate(0.972656 0.143066)"/>
</clipPath>
</defs>
</svg>
<svg id={"front"} onClick={(e)=>handleFront(e)} className="absolute cursor-pointer right-[-25px] z-[4] max-[411px]:right-[0px]" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_57_41556)">
<g clip-path="url(#clip1_57_41556)">
<g filter="url(#filter0_d_57_41556)">
<path d="M31.9727 17.1431C31.9727 9.41108 25.7046 3.14307 17.9727 3.14307C10.2407 3.14307 3.97266 9.41108 3.97266 17.1431C3.97266 24.8751 10.2407 31.1431 17.9727 31.1431C25.7046 31.1431 31.9727 24.8751 31.9727 17.1431Z" fill="white"/>
<path d="M20.9424 17.5678C20.9424 17.7093 20.8831 17.8449 20.778 17.9439L15.9342 22.5082C15.7181 22.7118 15.3713 22.7084 15.1596 22.5007C14.9478 22.293 14.9513 21.9595 15.1674 21.756L19.612 17.5678L15.1674 13.3797C14.9513 13.1761 14.9478 12.8427 15.1596 12.6349C15.3713 12.4272 15.7181 12.4238 15.9342 12.6274L20.778 17.1917C20.8831 17.2907 20.9424 17.4263 20.9424 17.5678Z" fill="#171717"/>
</g>
</g>
</g>
<defs>
<filter id="filter0_d_57_41556" x="-4.02734" y="-4.85693" width="44" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="4"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_57_41556"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_57_41556" result="shape"/>
</filter>
<clipPath id="clip0_57_41556">
<rect width="34" height="34" fill="white" transform="translate(0.972656 0.143066)"/>
</clipPath>
<clipPath id="clip1_57_41556">
<rect width="34" height="34" fill="white" transform="translate(0.972656 0.143066)"/>
</clipPath>
</defs>
</svg>

<div id={id} ref={container}  onWheel={(e) => handleScroll(e)} className="myElement whitespace-nowrap w-full h-[180px]  flex items-center gap-[10px] overflow-x-scroll  scroll-smooth">
      {data?.map((i)=>(
         <MiniChart key={i.id} i={i}></MiniChart>
      ))}
     
     </div>
    </div>
    
  )
}

export default MiniChartCarousel