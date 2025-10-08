import Carousel from "../Carousel";

const Home = () => {
  return (
    <>
    <div className="flex flex-col w-full ">
            <section className="flex w-full h-[800px]">
                <div className="flex flex-col flex-1 border inset-0 absolute w-full h-[800px] z-[-10]">
                        
                        <video className="w-full h-full object-cover"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline >
                            <source src="https://res.cloudinary.com/dhlboslsy/video/upload/v1759859771/arcade_8_ayjo91.mp4" type="video/mp4"/>
                        </video>
                        <p className="absolute mix-blend-difference border w-full h-full flex justify-center items-center z-[10]">Hello World</p>
                </div>
            </section>
            {/* Events section */}
            <section className="mt-[50px] w-full">
                <div className="flex justify-center border  w-full">
                    <div className="flex w-full">
                    <Carousel/>
                    </div>
                    <div className="flex flex-1 w-full  border bg-[white]"> 
                        <div className="h-[340px] w-[580px]">Hello</div>
                    </div>
                </div>
            </section>

            {/* Games section */}
            <section>
                <div className="text-[white] text-[48px]">Play some of our fan favourites</div>
                <div className="h-[600px] w-full border border-[white]"></div>
            </section>

            {/* Reviews section */}
                        <section>
                <div className="text-[white] text-[48px]">Check out our reviews</div>
                <div className="h-[600px] w-full border border-[white]"></div>
            </section>
            {/* Scores section */}
                <section>
                    <div className="text-[white] text-[48px]">Go head to head with some of the best</div>
                    <div className="h-[600px] w-full border border-[white]"></div>
                </section>
        </div>
    </>
  );
};

export default Home;