import React from 'react'

const Navbar = () => {
  return (
    <div className="w-full h-20 bg-white text-black flex items-center justify-between border-b-[1px] border-[#DEDFE2] px-9">
      <div className="">
        <img src="https://www.koinx.com/_next/static/media/Logo.5f2ad8d5.svg" className="w-[6rem]" alt="" />
      </div>
      <svg className="hidden cursor-pointer max-[414px]:inline" width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.01196 9.80626V7.52161H24.5738V9.80626H4.01196ZM4.01196 15.5182H24.5738V13.2335H4.01196V15.5182ZM4.01196 21.23H24.5738V18.9454H4.01196V21.23Z" fill="#0B182F" />
      </svg>
      <div className=" flex items-center font-bold gap-9 max-[411px]:hidden">
        <div className="text-sm">Crypto Taxes</div>
        <div className="text-sm">Free Tools</div>
        <div className="text-sm">Resource Center</div>
        <div className=" py-2 px-4 bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] text-white text-sm rounded-md">Get Started</div>
      </div>
    </div>
  )
}

export default Navbar