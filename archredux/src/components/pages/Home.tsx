import Carousel from "../Carousel";
import { useEffect, useState } from "react";
import Card from "../Card";
import BackgroundVideo from "../BackgroundVideo";
import { favs } from "../../assets/favs";
import { reviews } from "../../assets/reviews";
import { events } from "../../assets/events";
import { bgImages } from "../../assets/bgImgages";


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
                        
                        <BackgroundVideo videos={bgImages} intervalTime={4000}/>
                        <p className="absolute mix-blend-difference border w-full h-full flex justify-center items-center z-[10]">Hello World</p>
                </div>
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
                    <article className="flex justify-center w-full ">
                        <div className="flex flex-col justify-center rounded-2xl bg-[white] h-[390px] w-[580px]">
                            
                            <div className="bg-[var(--primary)] p-[10px] rounded-t-2xl">
                                <p className="text-[white] text-[36px] w-full text-center">{events[selectedEvent].title}</p>
                            </div>
                            
                            <div className="h-full p-[10px]">
                                <p className="text-[black] text-[22px] p-[20px]">{events[selectedEvent].desc}</p>
                            </div>

                            <div className="flex justify-center gap-7 w-full h-full  p-[20px]">
                                <div className="bg-[var(--primary)] text-white p-[10px] rounded-xl">Max: {events[selectedEvent].max}</div>
                                <button className="bg-black text-white p-[10px] rounded-2xl w-[200px] ">Book Now</button>
                            </div>

                        </div>
                    </article>
                </div>
            </section>

            {/* Games section */}
            <section className="relative flex flex-col overflow-hidden mt-[100px] w-full h-[789px] px-10 ">
            <div className="text-[white] text-[48px] mb-8">
                Play some of our fan favourites
            </div>

            {/* Scrollable container */}
            <div className="flex h-full animate-scroll-x gap-[125px] p-2 max-w-[100vw] px-[50px]">
                {[...favs,...favs].map((fav, index) => (
                <div key={fav.id} className={`flex h-full ${index % 2 === 1? "justify-start flex-col-reverse" : "flex-col justify-start "} h-full`} >
                    <Card custom="w-[390px] h-[390px] border border-[var(--primary)]"img={fav.img}/>
                    <div className="flex justify-center text-[var(--primary)] text-[36px] w-full ">{fav.title}</div>
                </div>
                ))}
            </div>
            </section>




            {/* Reviews section */}
                        <section className="w-full relative mt-[100px] px-10">
                <div className="text-[white] text-[48px]">Check out our reviews</div>
                <div className="flex h-full gap-[120px] overflow-x-auto max-w-[100vw] p-[30px]">
                    {reviews.map((review,index)=>(
                        <div key={review.name} className="flex flex-col  w-[318px]">
                            <Card img = {review.img}custom="h-[441px] w-[318px] border border-[var(--primary)]"/>
                            <div className="flex w-full justify-center w-full h-full p-[30px]">
                                <div className="absolute relative bottom-[150px] 
                                                flex flex-col items-center justify-center 
                                                p-[35px] w-[250px] h-[250px] 
                                                rounded-full border border-[var(--primary)] bg-[var(--primary)]
                                                ">
                                    <h2 className="text-[24px] text-white font-bold">{review.name}</h2>
                                    <p>{review.message}</p>
                                    <h3 className="text-[24px] text-[var(--light)]">{review.rating}/5</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            {/* Scores section */}
                <section className="w-full relative mt-[100px] px-10">
                    <div className="text-[white] text-[48px]">Go head to head with some of the best</div>
                    <div className="h-[600px] w-full border border-[white]"></div>
                </section>
                </div>
        </div>
    </>
  );
};

export default Home;