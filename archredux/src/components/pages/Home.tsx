import Carousel from "../Carousel";
import { useEffect, useState } from "react";
import Card from "../Card";
import BackgroundVideo from "../BackgroundVideo";
import { favs } from "../../assets/favs";
import { reviews } from "../../assets/reviews";
import { events } from "../../assets/events";
import { bgImages } from "../../assets/bgImgages";
import Nav from "../Nav";
import Header from "../Header";


const Home = () => {
    const[selectedEvent, setSeletedEvent] = useState(0);
    const[resetTrigger, setResetTrigger] = useState(false);
    const[backgroundIndex, setBackgroundIndex] = useState(0);

        useEffect(()=>{
        const interval = setInterval(()=>{
            setSeletedEvent((prev)=>(prev+1)%events.length)
        }, 5000)
        return() => clearInterval(interval);
    },[events.length, resetTrigger])




    useEffect(()=>{
        console.log("Selected event", selectedEvent)
        console.log("Selected background", backgroundIndex);
    },[selectedEvent])
  return (
    <>
    <div className=" flex flex-col w-full ">
            <section className="flex w-full h-[800px]">
                <div className="flex flex-col flex-1  inset-0 absolute w-full h-[800px] z-[-10]">
                        

  {/* Background video */}
                      <video
                        src={`https://res.cloudinary.com/dhlboslsy/video/upload/v1760392647/BANNER-2_idy2bg.mp4`}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000`}
                        autoPlay
                        loop
                        muted
                        playsInline
                    />

                {/* Header inside the same stacking context */}
                {/* <header className="absolute top-0 left-0 w-full h-[100px] flex items-center justify-between px-[20px] mix-blend-difference text-white z-10">
                    <div className="cursor-pointer">
                    <div className="text-[24px] flex justify-center">Arch</div>
                    <div className="text-[36px] flex justify-center p-0 mt-[-14px]">
                        Arcades
                    </div>
                    </div>
                    <Nav />
                </header> */}
                


                </div>
                <Header location="/"/>
            </section>
            <div className="bg-[black]">
            {/* Events section */}
            
            <section className="relative mt-[50px] w-full">
                <div className="flex flex-1   gap-2 p-[50px]">
                    <article className="flex flex-col items-center w-full ">
                        <div className="flex flex-col gap-5">
                            <Carousel img={events[selectedEvent].img}/>
                            <div className="flex gap-3 w-full justify-center">
                                {favs.map((fav, index)=>(
                                    <>
                                    <div key ={index}

                                        onClick={()=>setSeletedEvent(index)}
                                        className={`${index === selectedEvent ? "bg-[var(--primary)]" : "bg-white"} w-[20px] h-[20px] cursor-pointer`}></div>
                                    </>
                                ))}
                                
                            </div>
                        </div>

                    </article>
                    <article className="flex justify-start w-full ">
                        <div className="flex flex-col justify-center rounded-2xl bg-[white] h-[560px] w-[650px]">
                            
                            <div className="bg-[var(--primary)] p-[10px] rounded-t-2xl">
                                <h2 className="text-[white] text-[36px] p-[20px] px-[50px] py-[30px] w-full text-left ">{events[selectedEvent].title}</h2>
                            </div>
                            
                            <div className="h-full p-[10px] w-full">
                                <p className="text-[black] text-[22px] p-[20px] px-[30px] w-[600px] text-left">{events[selectedEvent].desc}</p>
                            </div>

                            <div className="flex  items-center justify-center gap-7 w-full h-full  p-[20px]">
                                <div className="bg-[var(--primary)] text-white p-[10px] rounded-xl h-[40px]">Max: {events[selectedEvent].max}</div>
                                <button className="bg-black text-white p-[10px] rounded-2xl w-[200px] h-[50px] ">Book Now</button>
                            </div>

                        </div>
                    </article>
                </div>
            </section>

            {/* Games section */}
            <section className="relative flex flex-col overflow-hidden mt-[100px] w-full h-[789px] px-10 ">
            <div className="text-[white] text-[48px] mb-8">
                <h1>Play some of our fan favourites</h1>
            </div>

            {/* Scrollable container */}
            <div className="flex h-full animate-scroll-x gap-[125px] p-2 max-w-[100vw] px-[50px]">
                {[...favs,...favs].map((fav, index) => (
                <div key={fav.id} className={`flex h-full ${index % 2 === 1? "justify-start flex-col-reverse" : "flex-col justify-start "} h-full`} >
                    <Card custom="w-[390px] h-[390px] border border-[var(--primary)]"img={fav.img}/>
                    <div className="flex justify-center text-[var(--primary)] text-[36px] w-full "><h2>{fav.title}</h2></div>
                </div>
                ))}
            </div>
            </section>




            {/* Reviews section */}
                        <section className="w-full relative mt-[100px] px-10">
                <div className="text-[white] text-[48px]"><h2>Check out our reviews</h2></div>
                <div className="flex h-full gap-[120px] overflow-x-auto max-w-[100vw] p-[30px]">
                    {reviews.map((review,index)=>(
                        <div key={review.name} className="flex flex-col  w-[318px]">
                            <Card img = {review.img}custom="h-[441px] w-[318px] border border-[var(--primary)]" gray={true}/>
                            <div className="flex w-full justify-center w-full h-full p-[30px]">
                                <div className="absolute relative bottom-[150px] 
                                                flex flex-col items-center justify-center 
                                                p-[35px] w-[250px] h-[250px] 
                                                rounded-full border border-[var(--primary)] bg-[white]
                                                ">
                                    <h2 className="text-[24px] text-[var(--primary)] font-bold">{review.name}</h2>
                                    <p>{review.message}</p>
                                    <h3 className="text-[24px] text-[var(--primary)]">{review.rating}/5</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            {/* Scores section */}
                <section className="w-full relative mt-[100px] px-10">
                    <div className="text-[white] text-[48px]">
                        <h2>Go head to head with some of the best</h2
                    ></div>
                    <div className="h-[600px] w-full border border-[white]"></div>
                </section>
                </div>
        </div>
    </>
  );
};

export default Home;