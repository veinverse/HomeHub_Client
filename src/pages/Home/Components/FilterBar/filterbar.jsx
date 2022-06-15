import sb from "../../photos/sb.png";

const FilterBar = ({ locations, properties }) => {
  return (
    <>
      <div className="flex flex-col items-center text-white -mt-11 mb-6 hidden md:flex">
        <div className="w-80 h-11 bg-[#2A4953] rounded-t-lg w-full grid grid-cols-3 content-around bg-opacity-90 cursor-pointer">
          <button className="hy-11 rounded-tl-lg">Sell</button>
          <button className="h-11">Buy</button>
          <button className="h-11 rounded-tr-lg">Rent</button>
        </div>
        <div className="filterbar__children justify-between items-center p-6 px-9 md:gap-2 bg-[#2A4953] lg:w-3/5 rounded-lg bg-opacity-90">
          <div className="filterbar__child">
            <svg
              width="38"
              height="38"
              viewBox="0 0 39 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.5 21.125C22.1924 21.125 24.375 18.9424 24.375 16.25C24.375 13.5576 22.1924 11.375 19.5 11.375C16.8076 11.375 14.625 13.5576 14.625 16.25C14.625 18.9424 16.8076 21.125 19.5 21.125Z"
                stroke="white"
                className="stroke-[2px]"
              />
              <path
                d="M19.5 3.25C16.0522 3.25 12.7456 4.61964 10.3076 7.05761C7.86964 9.49558 6.5 12.8022 6.5 16.25C6.5 19.3245 7.15325 21.3362 8.9375 23.5625L19.5 35.75L30.0625 23.5625C31.8468 21.3362 32.5 19.3245 32.5 16.25C32.5 12.8022 31.1304 9.49558 28.6924 7.05761C26.2544 4.61964 22.9478 3.25 19.5 3.25V3.25Z"
                stroke="white"
                className="stroke-[2px]"
              />
            </svg>
            <div className="pl-2">
              <h2 className="filterbar__child__title">Location</h2>
              {/* Dropdown menu */}
              <select className="filterbar__dropdown">
                {locations &&
                  locations.map((location) => (
                    <option
                      key={location.id}
                      className="filterbar__option"
                    >
                      {" "}
                      {location.place}{" "}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          <div className="filterbar__child">
            <svg
              width="36"
              height="36"
              viewBox="0 0 38 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34.8333 20.0556C34.6944 20.0564 34.5567 20.0298 34.4281 19.9772C34.2995 19.9247 34.1825 19.8473 34.0839 19.7495L19 4.65502L3.9161 19.7495C3.71417 19.9224 3.45442 20.0128 3.18877 20.0025C2.92311 19.9922 2.6711 19.8821 2.48312 19.6941C2.29513 19.5061 2.185 19.2541 2.17474 18.9885C2.16448 18.7228 2.25484 18.4631 2.42777 18.2611L18.2611 2.4278C18.4589 2.2312 18.7264 2.12085 19.0053 2.12085C19.2841 2.12085 19.5517 2.2312 19.7494 2.4278L35.5828 18.2611C35.728 18.4093 35.8264 18.597 35.8655 18.8008C35.9047 19.0046 35.8829 19.2154 35.803 19.4068C35.723 19.5983 35.5884 19.762 35.4159 19.8773C35.2435 19.9927 35.0408 20.0547 34.8333 20.0556Z"
                fill="white"
              />
              <path
                d="M19 8.22278L6.33334 20.9317V33.7778C6.33334 34.3377 6.55576 34.8747 6.95167 35.2706C7.34758 35.6665 7.88455 35.8889 8.44445 35.8889H15.8333V25.3333H22.1667V35.8889H29.5556C30.1155 35.8889 30.6524 35.6665 31.0483 35.2706C31.4443 34.8747 31.6667 34.3377 31.6667 33.7778V20.8578L19 8.22278Z"
                fill="white"
              />
            </svg>
            <div className="pl-2">
              <h2 className="filterbar__child__title">Property Type</h2>
              {/* Dropdown menu */}
              <select className="filterbar__dropdown">
                {properties &&
                  properties.map((property) => (
                    <option
                      key={property.id}
                      className="filterbar__option"
                    >
                      {property.pty}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          <div className="filterbar__child">
            <svg
              width="36"
              height="36"
              viewBox="0 0 37 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35.8678 0.749205C35.7605 0.481901 35.5542 0.266268 35.292 0.147163C35.0297 0.0280573 34.7316 0.0146512 34.4597 0.109733C34.1878 0.204815 33.963 0.401064 33.8321 0.657653C33.7012 0.914243 33.6743 1.21142 33.7569 1.48735C35.4756 6.42685 32.0642 10.1158 29.4631 12.0916L28.4123 10.5857C28.0589 10.0806 27.269 9.66065 26.6548 9.65325L20.757 9.67915C20.0365 9.70091 19.3353 9.91696 18.7275 10.3045L1.34865 22.4904C0.944412 22.7749 0.669362 23.2079 0.583719 23.6947C0.498075 24.1815 0.608817 24.6825 0.891697 25.0878L8.78935 36.3876C9.38135 37.2294 10.3267 37.1276 11.1703 36.5393L28.5492 24.3515C29.0487 23.9982 29.6259 23.236 29.8294 22.6532L31.6757 16.835C31.8792 16.2541 31.7552 15.3679 31.4019 14.8629L30.7618 13.9453C34.2546 11.2683 37.8806 6.53785 35.8678 0.749205ZM27.7814 18.0615C27.4613 18.2856 27.1001 18.4444 26.7185 18.5289C26.337 18.6134 25.9425 18.6218 25.5577 18.5538C25.1728 18.4858 24.8052 18.3426 24.4757 18.1324C24.1462 17.9222 23.8614 17.6492 23.6374 17.3289C23.1841 16.6808 23.0064 15.8792 23.1434 15.1002C23.2804 14.3212 23.7209 13.6284 24.3682 13.1738C24.8757 12.8183 25.4815 12.6302 26.1011 12.6358C26.7207 12.6414 27.3231 12.8405 27.824 13.2053C27.3208 13.5087 26.9748 13.6863 26.9101 13.714C26.6808 13.8233 26.4954 14.0073 26.3843 14.2358C26.2732 14.4643 26.2431 14.7238 26.2988 14.9717C26.3544 15.2196 26.4927 15.4412 26.6908 15.6002C26.8889 15.7593 27.1352 15.8463 27.3892 15.8471C27.5483 15.8471 27.7111 15.8101 27.8647 15.7379C28.2236 15.5677 28.6084 15.3661 29.0098 15.1274C29.1022 15.6825 29.0359 16.2524 28.8186 16.7715C28.6012 17.2906 28.2417 17.7378 27.7814 18.0615Z"
                fill="white"
              />
            </svg>

            <div className="pl-2">
              <h2 className="filterbar__child__title">Max. Price</h2>
              <p className="type">GHC <input type="number" className="rounded-sm bg-transparent border border-white w-[75px]" /></p>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="p-2.5 text-sm font-medium text-white bg-white-700 rounded-lg border border-white-700 hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-white-300 dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800 bg-white"
            >
              <svg
                className="w-5 h-5 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center flex-col py-6">
        <h3 className="text-[28px] font-semibold">SOME PARTNERS</h3>
        <div className="flex flex-row">
          <img src={sb} alt="" className="partners__logo" />
          <img src={sb} alt="" className="partners__logo" />
          <img src={sb} alt="" className="partners__logo" />
          <img src={sb} alt="" className="partners__logo" />
          <img src={sb} alt="" className="partners__logo" />
          <img src={sb} alt="" className="partners__logo" />
        </div>
      </div>
    </>
  );
};

export default FilterBar;
