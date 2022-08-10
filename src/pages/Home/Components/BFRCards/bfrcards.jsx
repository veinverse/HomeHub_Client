import buy from "../../photos/buy.jpg";
import finance from "../../photos/finance.jfif";
import rent from "../../photos/rent.jpg";

const BFRCards = () => {
  return (
    <>
      <div className="flex justify-center items-center h-full py-24 bg-[#2A4953] text-white relative">
        <div className="container flex flex-wrap w-full gap-0.5 justify-around">
          <div className="card mb-10 group cursor-pointer flex flex-col transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-500 bg-gradient-to-b from-gray-200 via-white-900 to-black relative">
            <img
              src={buy}
              alt=""
              className="bfr__card__image"
            />
            <div className="bfr__card__text__container">
              <h2 className="bfr__card__title">
                Buy A Home
              </h2>
              <button
                type="button"
                className="text-white-700 border border-white-700 hover:bg-white-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-white-300 font-thin rounded-full text-sm p-1 lg:p-2.5 text-center inline-flex items-center dark:border-white-500 dark:text-white-500 dark:hover:text-white dark:focus:ring-white-800"
              >
                <svg
                  className="bfr__card__svg__size"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="bfr__card__info">
              <h1>title</h1>
              <p>some random text about the category chosen</p>
            </div>
          </div>

          <div className="card mb-10 group cursor-pointer flex flex-col transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-500 bg-gradient-to-b from-gray-200 via-white-900 to-black relative">
            <img
              src={finance}
              alt=""
              className="bfr__card__image"
            />
            <div className="bfr__card__text__container">
              <h2 className="bfr__card__title">
                Finance A Home
              </h2>
              <button
                type="button"
                className="text-white-700 border border-white-700 hover:bg-white-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-white-300 font-thin rounded-full text-sm p-1 lg:p-2.5 text-center inline-flex items-center dark:border-white-500 dark:text-white-500 dark:hover:text-white dark:focus:ring-white-800"
              >
                <svg
                  className="bfr__card__svg__size"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="bfr__card__info">
              <h1>title</h1>
              <p>some random text about the category chosen</p>
            </div>
          </div>

          <div className="card md:mb-10 group cursor-pointer flex flex-col transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-500 bg-gradient-to-b from-gray-200 via-white-900 to-black relative">
            <img
              src={rent}
              alt=""
              className="bfr__card__image text-[20px]"
            />
            <div className="bfr__card__text__container">
              <h2 className="bfr__card__title">
                Rent A Home
              </h2>
              <button
                type="button"
                className="text-white-700 border border-white-700 hover:bg-white-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-white-300 font-thin rounded-full text-sm p-1 lg:p-2.5 text-center inline-flex items-center dark:border-white-500 dark:text-white-500 dark:hover:text-white dark:focus:ring-white-800"
              >
                <svg
                  className="bfr__card__svg__size"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="bfr__card__info">
              <h1>title</h1>
              <p>some random text about the category chosen</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BFRCards;
