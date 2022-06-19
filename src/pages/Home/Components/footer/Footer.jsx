import React from 'react'
import facebook from "./assets/facebook.png";
import linkedIn from "./assets/linkedIn.png";
import twitter from "./assets/twitter.png";
import p from "./assets/p.png";
import c from "./assets/c.png";
const icons = [facebook, twitter, linkedIn, p]
const quick = [1, 2, 3]
const links = ['Home', 'About us', 'Property', 'Agent', 'Testimonials', 'Help Center']
export default function Footer() {
    return (
        <div className='h-[533px] bg-primary'>
            <div className="flex">
            <div className="pt-[72px] flex flex-col">
                <h1 className='ml-[134px] w-[113px] h-[60px] font-sans font-bold text-[40px] leading-[60px] text-white'>LOGO</h1>
                <p className='ml-[131px] w-[232px] h-[120px] font-sans font-normal text-justify leading-[24px] text-white text-[16px] mt-[24px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt rhoncus ac est, molestie mattis. Quam eros sed lobortis lectus at.</p>
                <div className="ml-[131px] mt-[25px] flex">
                    {icons.map(i => (
                        <img className='cursor-pointer mr-[39px]' src={i} alt="" />
                    ))}
                </div>
            </div>
            <div className="pt-[72px] ml-[140px] flex">
              {quick.map(q=>(
              <div className='flex flex-col'>
              <h1 className='text-white text-[22px] leading-[33px] ml-[2px] mr-[92px] mb-[20px] font-sans font-semibold'>Quick Access</h1>
                <div className='flex flex-col w-[133px] mr-[109px]'>
                    {links.map(link => (
                        <p className='cursor-pointer mt-[10px] font-[500] text-[18px] leading-[24px] text-white font-sans'>{link}</p>
                    ))}
                </div>
                </div>
                ))}
            </div>
            </div>
            <div className="ml-[131px] mr-[131px] justify-between flex mt-[120px]">
                <h1 className='w-[239px] h-[38px] font-sans font-[500] text-white text-[25px] leading-[37.5px]'>All Rights Reserved</h1>
                <div className='flex'>
                <img className='w-[21.88px] h-[21.23px] mt-[5px]' src={c} alt="@c" />
                <p className='font-sans font-normal text-white text-[20px] leading-[30px] w-[157px] h-[30px]'> HomeHub, 2022</p>
                </div>
            </div>
        </div>
    )
}
