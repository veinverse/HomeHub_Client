import about from '../../photos/about.jpg';

const About = () => {
    return ( 
        <>
            <div className="grid lg:grid-cols-2 overflow-hidden place-items-center lg:place-items-stretch mx-auto gap-1 bg-[#2A4953] text-white lg:pb-40 relative">
                <div className="relative flex justify-center lg:justify-start">
                    <div className="hidden lg:block lg:bg-[#C8B691] lg:left-0 lg:w-[426px] lg:h-[408px]"></div>
                    <img src={about} alt="" className="lg:absolute lg:w-4/5 w-[95%] lg:h-[480px] left-14 top-14" />
                </div>
                <div className="px-20 pb-16 lg:p-20 text-center lg:text-left">
                    <h2 className="uppercase font-medium text-[28px] text-[#C8B691] mt-10 lg:m-0">About Us</h2>
                    <h3 className="font-semibold text-[32px] py-2">We Are Providing you with Luxurious Top-Tier Listings</h3>
                    <p className="text-22px font-light">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius cras morbi laoreet sit dictumst. Gravida ultricies mi netus est vulputate pharetra lorem eget ut. Praesent viverra dolor ipsum, mus dignissim nisl mi pulvinar aliquet.
                        Eu nisl arcu, lacus, diam condimentum fermentum venenatis molestie.</p>
                    <br/>
                    <button className="text-18px font-medium border-2 border-[#D3C099] p-3 hover:bg-[#D3C099] hover:text-[#2A4953]">Get Started</button>
                </div>
            </div>
        </>
     );
}
 
export default About;