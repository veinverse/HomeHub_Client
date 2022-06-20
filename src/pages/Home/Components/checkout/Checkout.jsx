import React, { useState } from "react";
import arrow from './assets/ci_play-arrow.png'
import house from './assets/house.png'
import location from './assets/location.png'
import bed from './assets/bed.png'
import bath from './assets/bath.png'
import ruler from './assets/ruler.png'
import cedi from './assets/cedi.png'

const home = [
  {id:1, name:'WestView Homes', address:'Tema Comm. 18, Accra', bed:'2', bath:'2', ft:'1200', price:'23,000,000'},
  {id:2, name:'South Homes', address:'Wulensi 456, Tamale', bed:'3', bath:'3', ft:'1100', price:'25,000,000'},
  {id:3, name:'North Homes', address:'Legon LG25, East Legon', bed:'6', bath:'2', ft:'1300', price:'30,000,000'},
  {id:4, name:'East Homes', address:'Gbawe A36, Weija', bed:'10', bath:'5', ft:'1200', price:'40,000,000'},
  {id:5, name:'Savana Homes', address:'Wa West 78, North Wa', bed:'4', bath:'2', ft:'1250', price:'10,000,000'},
  {id:6, name:'Micheal Homes', address:'Weija. 17, Ga West', bed:'5', bath:'3', ft:'1200', price:'26,000,000'},
]
let lists = [{ id: '1', name: "Single Home" }, { id: '2', name: "Apartment" }, { id: '3', name: "Single Home" }, { id: '4', name: "Apartment" }]
const Checkout = () => {
  const [active, setActive] = useState("1")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [length] = useState(home.length)
  let show
  let screenWidth = window.innerWidth
const setShow=()=>{
if (screenWidth>1150){
  show=4
}
else if (screenWidth>=758 & screenWidth<= 1150){
  show =3
}
else if (screenWidth>=405 & screenWidth<758){
  show=2
}
else{
  show=1
}
}
setShow()
const Next=()=>{
if(currentIndex<length){
setCurrentIndex(prevState => prevState + 1)
if(currentIndex===length){
  setCurrentIndex(prevState => prevState)
}
}
  
}
const Prev=()=>{
  setCurrentIndex(prevState => prevState -1)
}
  return (
    <div className="bg-checkout bg-cover h-[881px]">
      <h1 className="text-[#563523] text-[25px] sm:text-[40px] font-sans  font-bold pt-[34px] sm:pt-[55px] ml-[11px] sm:ml-[43px] leading-[37.5px] sm:leading-[60px] text-center s1:text-left align-top  h-[38px] sm:w-[423px] sm:h-[120px]">Checkout Our Latest Listings</h1>
      <div className="flex justify-between ml-[10%] s1:ml-[0px]">
        <div className="pt-[70px] ss:pt-[40px] sm:pt-[70px] justify-left s1:ml-[4px] md:ml-[43px] flex flex-wrap">
          {lists.map((list) => (<div className={`${list.id === active ? "mt-[10px] sm:mt-[17px]  sm:text-[18px] font-Poppins font-normal leading-[27px] items-center justify-center px-[10px] sm:px-[0px]  mr-[19px] w-max sm:w-[149px] h-[32px] sm:h-[54px] flex rounded-[24px] cursor-pointer shadow bg-gradient-to-r from-white text-[#000000] bg-brown_l" :
            "mt-[10px] sm:mt-[17px]  sm:text-[18px] font-Poppins font-normal leading-[27px] text-[#FFFFFF] items-center  justify-center px-[10px] sm:px-[0px] mr-[19px] w-max sm:w-[149px] h-[32px] sm:h-[54px] flex rounded-[24px] bg-brown_d cursor-pointer hover:shadow hover:bg-brown_l hover:text-[#000000] hover:bg-gradient-to-r from-white"}`} onClick={() => setActive(list.id)}>{list.name}</div>))}
        </div>
        <div className="hidden text-center pl-[10px] pt-[10px] lg:flex mt-[77px] mr-[20px] w-[145px] h-[51px] border-[3px] rounded-none border-[#563523] border-solid" >
          <h3 className="text-[#563523] text-[18px] font-sans font-bold leading-[27px]">Explore All</h3>
          <img className="pb-[4pt]" src={arrow} alt="" />
        </div>
      </div>
      
      <div className="flex overflow-hidden ">
{home.map(h=>(
     h.id>currentIndex ? <div className="flex self-center ss:self-start mx-[2%] ss:ml-[64px] mt-[44px] px-[22px] flex-col w-[281px] h-[381px] rounded-[15px] shadow bg-secondary">
          <img className="rounded-[15px] ml-[-1px] w-[239px] h-[196px] mt-[20px]" src={house} alt="Home" />
          <h1 className="mt-[8px] w-[151px] h-[26px] font-semibold font-sans text-[17px] leading-[25.5px] text-black">{h.name}</h1>
          <div className="flex">
            <img className="h-[17px] w-[17px] mt-[2px]" src={location} alt="location" />
            <h1 className="w-[181px] h-[24px] font-sans font-light text-[16px] leading-[24px]">{h.address}</h1>
          </div>
          <div className="flex mt-[14px]">
            <div className="flex">
              <img className="w-[22px] h-[18px] " src={bed} alt="bed" />
              <h1 className="ml-[6px] h-[18px] font-sans font-normal text-[12px] leading-[18px] text-black">{h.bed} Bed</h1>
            </div>
            <div className="flex ml-[19.5px]">
              <img className="w-[18px] h-[18px]" src={bath} alt="bath" />
              <h1 className="ml-[8px] h-[18px] font-sans font-normal text-[12px] leading-[18px] text-black ">{h.bath} Bath</h1>
            </div>
            <div className="flex ml-[18px]">
              <img className="w-[18px] h-[18px]" src={ruler} alt="ruler" />
              <h1 className="ml-[5px] h-[18px] font-sans font-normal text-[12px] leading-[18px] text-black">{h.ft} sqft</h1>
            </div>
          </div>
          <div className="flex mt-[32px]">
            <div className="flex">
              <img className="mt-[4px] w-[10px] h-[16px] " src={cedi} alt="cedi" />
              <h1 className="w-[89px] h-[24px] font-sans font-semibold text-[16px] leading-[24px] text-black ">{h.price}</h1>
            </div>
            <button className="ml-[49px] w-[86px] h-[32px] rounded-[10px] bg-[#2A4953] shadow text-center text-white py-[5px]">View</button>
          </div>
        </div>:''))}
      </div>
      <div className="flex mt-[79px] justify-center">
  <button onClick={currentIndex>0 && Prev} className={currentIndex>0 ?'rounded-full h-[50px] w-[50px] text-[30px] text-white font-sans font-bold text-center border-2  bg-brown_d':'cursor-not-allowed rounded-full h-[50px] w-[50px] text-[30px] font-sans font-semibold text-center border-2 border-black'} >&#60;</button>
  <button onClick={currentIndex<length-show && Next} className={currentIndex<length-show?"ml-[19px] rounded-full h-[50px] w-[50px] text-[30px] text-white font-sans font-bold text-center border-2  bg-brown_d":'cursor-not-allowed ml-[19px] rounded-full h-[50px] w-[50px] text-[30px] font-sans font-semibold text-center border-2 border-black'}>&#62;</button>
      </div>
    </div>
  );
};

export default Checkout;