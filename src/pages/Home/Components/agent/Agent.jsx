import React from 'react'

export default function Agent() {
    return (
        <div className="ml-[6%] mr-[5%] mt-[6%]">
            <div className='bg-agent0 w-[100%] bg-cover bg-no-repeat h-max rounded-[25px]'>
                <div className='flex flex-col bg-agent1 w-[100%] bg-cover bg-no-repeat h-max pb-[10%] rounded-[25px] '>
                    <h1 className='s1:h-[44px] ss:h-[54px] sm:h-[46px]  md:h-[65px] lg:h-[86.6px] leading-[28px] s1:leading-[46px] ss:leading-[75px] text-center text-[19px] ss:text-[20px] sm:text-[30px] md:text-[40px] lg:text-[50px] text-white font-sans font-semibold ml-[2%] sm:ml-[4%] md:ml-[8%] lg:ml-[0%] pt-[0%] sm:pt-[2%] md:pt-[3%] lg:pt-[4.28%]'>Are You An Agent or Individual?</h1>
                    <h2 className='font-sans font-normal text-[13px] ss:text-[16px]  sm:text-[20px] lg:text-[25px] text-white text-center sm:text-left sm:leading-[37.5px] ml-[6%] ss:ml-[0%] sm:ml-[14%] md:ml-[19%] lg:ml-[19.90%] xl:ml-[22.90%] pt-[0%] sm:pt-[4.28%] s0:mb-[8%] s1:mb-[0%] ss:[3%] sm:mb-[2%] md:mb-[1%]'>Kindly enter your email address to get your home listed</h2>
                    <input placeholder='Enter your Email Address' className='font-sans font-normal focus:outline-none self-center md:self-start  md:ml-[10%] h-[30px] ss:h-[40px] sm:h-[50px] md:h-[95.84px] rounded-[8px] w-[90%] sm:w-[80%] px-[2%] bg-secondary mt-[4.78%] text-[12px] sm:text-[22px] placeholder-black' type="text" />
                    <div className='cursor-pointer text-white self-center s1:self-end mt-[10px] s1:mt-[-27px] ss:mt-[-38px] sm:mt-[-45px] md:mt-[-80px] mr-[6%] sm:mr-[11%] md:mr-[12%] bg-black  text-center py-[5%] s1:py-[0.2%] md:py-[16px] px-[10px] sm:px-[0px] w-[70%] s1:w-max sm:w-[120px] md:w-[181px] h-[1%] rounded-[9px] text-[15px] sm:text-[20px] font-sans font-normal ss:leading-[33px]'>Get Listed</div>
                </div>
            </div>
        </div>
    )
}
