import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [navI, setNavI] = useState(false);
  const handleClick = () => setNavI(!navI);

  return (
    <>
      <nav className="navigation-bar bg-white fixed flex items-center w-full leading-8 place-content-evenly md:relative">
        <ul className="hidden lg:flex p-5 gap-12 text-[20px] font-normal">
          <li>
            <Link to="/">Buy</Link>
          </li>
          <li>
            <Link to="/">Rent</Link>
          </li>
          <li>
            <Link to="/">Mortgage Hub</Link>
          </li>
          <li>
            <Link to="/">Sell</Link>
          </li>
          <li>
            <Link to="/">Agent Finder</Link>
          </li>
          <li>
            <h1 className="font-bold text-center uppercase text-[30px]">
              Logo
            </h1>
          </li>
          <li>
            <Link to="/">Manage Rentals</Link>
          </li>
          <li>
            <Link to="/">Advertise</Link>
          </li>
          <li>
            <Link to="/">Help Desk</Link>
          </li>
          <li>
            <Link to="/">
              <button className="font-semibold px-4 ring-2 ring-[#2A4953] rounded hover:text-white hover:bg-[#2A4953]">
                Login
              </button>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="lg:hidden flex" onClick={handleClick}>
        {!navI ? (
          <div className="flex flex-row justify-between absolute z-10 text-white py-2 px-8 w-full">
            <h1 className="font-bold uppercase text-[30px]">Logo</h1>{" "}
            <MenuIcon className="w-8 ml-auto cursor-pointer" />
          </div>
        ) : (
          <div className="flex flex-row justify-between py-2 px-8 w-full">
            <h1 className="font-bold uppercase text-[30px] text-black">Logo</h1>{" "}
            <XIcon className="w-6 ml-auto cursor-pointer" />
          </div>
        )}
      </div>

      <div className="flex justify-center">
        <ul
          className={
            !navI ? "hidden" : "relative w-[20] px-8 grid place-items-center"
          }
        >
          <li className="py-2">
            <Link to="/">Buy</Link>
          </li>
          <li className="py-2">
            <Link to="/">Rent</Link>
          </li>
          <li className="py-2">
            <Link to="/">Mortgage Hub</Link>
          </li>
          <li className="py-2">
            <Link to="/">Sell</Link>
          </li>
          <li className="py-2">
            <Link to="/">Agent Finder</Link>
          </li>
          <li className="py-2">
            <Link to="/">Manage Rentals</Link>
          </li>
          <li className="py-2">
            <Link to="/">Advertise</Link>
          </li>
          <li className="py-2">
            <Link to="/">Help Desk</Link>
          </li>
          <li className="py-4">
            <Link to="/">
              <button className="font-semibold px-6 py-1 ring-2 ring-[#2A4953] rounded hover:text-white hover:bg-[#2A4953]">
                Login
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
