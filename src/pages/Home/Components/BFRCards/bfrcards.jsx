import buy from "../../photos/buy.jpg";
import finance from "../../photos/finance.jfif";
import rent from "../../photos/rent.jpg";

const BFRCards = () => {
    return ( 
        <>
        <div className="flex justify-center items-center h-full py-24 bg-[#2A4953] text-white relative">
            <div className="container flex flex-wrap w-4/5 justify-around">
                <div className="card mb-10 group cursor-pointer flex flex-col transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-500 bg-gradient-to-b from-gray-200 via-white-900 to-black relative">
                    <img src={buy} alt="" className="w-96 h-[532px] mix-blend-overlay" />
                    <div className="flex justify-between px-4 absolute top-[30rem] lg:w-96 w-full">
                        <h2 className="lg:text-[26px] lg:leading-[42px] text-[20px]">Buy A Home</h2>
                        <button type="button" className="text-white-700 border border-white-700 hover:bg-white-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-white-300 font-thin rounded-full text-sm p-1 lg:p-2.5 text-center inline-flex items-center dark:border-white-500 dark:text-white-500 dark:hover:text-white dark:focus:ring-white-800">
                            <svg className="lg:h-5 w-5 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className="card-info absolute opacity-0 group-hover:opacity-100 p-14 text-center h-[532px] lg:w-96 bg-black bg-opacity-50">
                        <h1>title</h1>
                        <p>some random text about the category chosen</p>
                    </div>
                </div>

                <div className="card mb-10 group cursor-pointer flex flex-col transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-500 bg-gradient-to-b from-gray-200 via-white-900 to-black relative">
                    <img src={finance} alt="" className="w-96 h-[532px] mix-blend-overlay" />
                    <div className="flex justify-between px-4 absolute top-[30rem] lg:w-96 w-full">
                        <h2 className="lg:text-[26px] lg:leading-[42px] text-[20px]">Finance A Home</h2>
                        <button type="button" className="text-white-700 border border-white-700 hover:bg-white-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-white-300 font-thin rounded-full text-sm p-1 lg:p-2.5 text-center inline-flex items-center dark:border-white-500 dark:text-white-500 dark:hover:text-white dark:focus:ring-white-800">
                            <svg className="lg:h-5 w-5 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className="card-info absolute opacity-0 group-hover:opacity-100 p-14 text-center h-[532px] lg:w-96 bg-black bg-opacity-50">
                        <h1>title</h1>
                        <p>some random text about the category chosen</p>
                    </div>
                </div>

                <div className="card md:mb-10 group cursor-pointer flex flex-col transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-500 bg-gradient-to-b from-gray-200 via-white-900 to-black relative">
                    <img src={rent} alt="" className="w-96 h-[532px] text-[20px] mix-blend-overlay" />
                    <div className="flex justify-between px-4 absolute top-[30rem] lg:w-96 w-full">
                        <h2 className="lg:text-[26px] lg:leading-[42px] text-[20px]">Rent A Home</h2>
                        <button type="button" className="text-white-700 border border-white-700 hover:bg-white-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-white-300 font-thin rounded-full text-sm p-1 lg:p-2.5 text-center inline-flex items-center dark:border-white-500 dark:text-white-500 dark:hover:text-white dark:focus:ring-white-800">
                            <svg className="lg:h-5 w-5 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className="card-info absolute opacity-0 group-hover:opacity-100 p-14 text-center h-[532px] lg:w-96 bg-black bg-opacity-50">
                        <h1>title</h1>
                        <p>some random text about the category chosen</p>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default BFRCards;