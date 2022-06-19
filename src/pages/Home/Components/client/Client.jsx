import React, {useState} from "react";
import star from "./assets/star.png";
import profile from "./assets/profile.png";
import mic from "./assets/mic.png";
import abed from "./assets/abed.jpg";
const starts = [1, 2, 3, 4, 5];
const clients = [
    {id:1, name:'Sarah Banks', title:'CTO at Eden Heights', profile:profile},
    {id:2, name:'Micheal Jun', title:'CEO at VeinVerse', profile:mic},
    {id:3, name:'Abednego John', title:'Software Engineer', profile:abed},
    {id:4, name:'Leonnette', title:'Senior Software Developer', profile:profile},
    {id:5, name:'Micheal Jun', title:'CEO at VeinVerse', profile:mic},
    {id:6, name:'Abednego John', title:'Software Engineer', profile:abed},
    {id:7, name:'Sarah Banks', title:'CTO at Eden Heights', profile:profile},
]
export default function Client() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [length] = useState(clients.length)
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
        <div className="flex flex-col mt-[91px]">
            <h1 className="text-center text-[28px] mb-[19px] leading-[42px] font-semibold font-sans text-black h-[42px] ">
                CLIENT EXPERIENCES
            </h1>
            <div className="flex sm:ml-[51px] overflow-hidden ">
              {clients.map(c=>(
            c.id>currentIndex?
                <div className="flex flex-col w-[361px] h-[281px] mr-[39px] rounded-[3px] bg-gradient-to-b from-white pl-[19px] pt-[19px] pr-[23px]">
                    <div className="flex">
                        {starts.map((h) => (
                            <img src={star} alt="star" />
                        ))}
                    </div>
                    <p className="font-normal font-sans mt-[13px] w-[319px] h-[127px] text-[16px] leading-[24px] text-justify">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
                        cras morbi laoreet sit dictumst. Gravida ultricies mi netus est
                        vulputate ”
                    </p>
                    <div className="flex">
                            <img className="w-[67px] h-[67px] rounded-full bg-cover" src={c.profile} alt="profile" />
                            <div className="flex flex-col ml-[15px] mt-[11px]">
                                <h1 className="h-[27px] text-[18px] leading-[27px] text-justify font-semibold font-sans">{c.name}</h1>
                                <p className="h-[21px] text-[14px] leading-[21px] text-justify font-sans font-normal ">{c.title}</p>
                            </div>
                    </div>
                    <div className="bg-primary h-[12px] w-[361px] mt-[20px] ml-[-19px]"></div>
                </div>:''))} 
            </div>
            <div className="flex mt-[40px] mb-[55px] justify-center">
  <button onClick={currentIndex>0 && Prev} className={currentIndex>0 ?'rounded-full h-[50px] w-[50px] text-[30px] text-white font-sans font-bold text-center border-2  bg-primary':'cursor-not-allowed rounded-full h-[50px] w-[50px] text-[30px] font-sans font-semibold text-center border-2  border-black'} >&#60;</button>
  <button onClick={currentIndex<length-show && Next} className={currentIndex<length-show?"ml-[19px] rounded-full h-[50px] w-[50px] text-[30px] text-white font-sans font-bold text-center border-2  bg-primary":'cursor-not-allowed ml-[19px] rounded-full h-[50px] w-[50px] text-[30px] font-sans font-semibold text-center border-2  border-black'}>&#62;</button>
      </div>
        </div>
    );
}
