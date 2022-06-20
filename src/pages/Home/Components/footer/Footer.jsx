import React from 'react'
import facebook from "./assets/facebook.png";
import linkedIn from "./assets/linkedIn.png";
import twitter from "./assets/twitter.png";
import p from "./assets/p.png";
import c from "./assets/c.png";
const icons = [facebook, twitter, linkedIn, p]
const links = ['Home', 'About us', 'Property', 'Agent', 'Testimonials', 'Help Center']
export default function Footer() {
    return (
        <div className='mm:h-[533px] pb-[31px] mm:pb-[0px] bg-primary'>
            <div className="flex flex-col mm:flex-row">
                <div className="pt-[21px] mm:pt-[72px] items-center mm:items-start flex flex-col">
                    <h1 className='mm:ml-[70px] lg:ml-[134px] mm:w-[113px] h-[60px] font-sans font-bold text-[40px] leading-[60px] text-white'>LOGO</h1>
                    <p className='mm:ml-[74px] lg:ml-[131px] sm:w-[432px] mm:w-[232px] h-[120px] font-sans font-normal text-center sm:text-justify leading-[24px] text-white text-[16px] mm:mt-[24px] px-[14px] sm:px-[0px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt rhoncus ac est, molestie mattis. Quam eros sed lobortis lectus at.</p>
                    <div className="mm:ml-[74px] lg:ml-[131px] mt-[25px] flex">
                        {icons.map(i => (
                            <img className='cursor-pointer mr-[39px]' src={i} alt="" />
                        ))}
                    </div>
                </div>
                <div className="pt-[72px] mm:ml-[140px] justify-evenly sn:justify-center mm:justify-start  lg:justify-around flex overflow-hidden">

                    <div className='flex flex-col sn:ml-[70px] mm:ml-[0px]'>
                        <h1 className='text-white text-[22px] leading-[33px] ml-[2px] sn:mr-[92px] mb-[20px] font-sans font-semibold'>Quick Access</h1>
                        <div className='flex flex-col w-[133px] sn:mr-[109px]'>
                            {links.map(link => (
                                <p className='cursor-pointer mt-[10px] font-[500] text-[18px] leading-[24px] text-white font-sans'>{link}</p>
                            ))}
                        </div>
                    </div>

                    <div className='flex flex-col'>
                        <h1 className='text-white text-[22px] leading-[33px] ml-[2px] sn:mr-[92px] mb-[20px] font-sans font-semibold'>Quick Access</h1>
                        <div className='flex flex-col w-[133px] sn:mr-[109px]'>
                            {links.map(link => (
                                <p className='cursor-pointer mt-[10px] font-[500] text-[18px] leading-[24px] text-white font-sans'>{link}</p>
                            ))}
                        </div>
                    </div>

                    <div className='hidden xl:flex flex-col'>
                        <h1 className='text-white text-[22px] leading-[33px] ml-[2px] mr-[92px] mb-[20px] font-sans font-semibold'>Quick Access</h1>
                        <div className='flex flex-col w-[133px] mr-[109px]'>
                            {links.map(link => (
                                <p className='cursor-pointer mt-[10px] font-[500] text-[18px] leading-[24px] text-white font-sans'>{link}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="sm:ml-[44px] md:ml-[74px] lg:ml-[131px] sm:mr-[50px] md:mr-[131px] justify-between flex-col flex sm:flex-row mt-[93px] sm:mt-[120px]">
                <h1 className='sm:w-[239px] h-[38px] font-sans font-[500] text-center sm:text-left text-white text-[25px] leading-[37.5px]'>All Rights Reserved</h1>
                <div className='flex justify-center'>
                    <img className='w-[21.88px] h-[21.23px] mt-[5px]' src={c} alt="@c" />
                    <p className='font-sans font-normal text-white text-[20px] leading-[30px] w-[157px] h-[30px]'> HomeHub, 2022</p>
                </div>
            </div>
        </div>
    )
}
