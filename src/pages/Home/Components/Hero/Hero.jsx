import React from "react";
import home from '../../photos/home.jfif';

const Hero = () => {
  const backgroundImageStyle = {
    backgroundImage: `url("${home}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <>
      <div className="flex justify-center lg:h-[650px] h-[616px] w-full py-24" style={backgroundImageStyle}>
          <div className="flex flex-col items-center text-center p-5 lg:p-8 text-white">
              <h2 className="text-[50px] font-semibold">Embrace True Comfort</h2>
              <p className="text-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat praesent elit et laoreet amet tortor, mauris </p>
              <br/>
              <button className="text-[18px] text-white font-medium bg-gradient-to-r from-[#75A7A5] to-[#607894] py-2 px-4 rounded-md shadow-[1px_4px_10px_rgba(0,0,0,0.25)]">View Properties</button>
          </div>
      </div>
    </>
  );
};

export default Hero;
