import Carousel from "../Carousel";
import { useEffect, useState } from "react";
import Card from "../Card";


const Home = () => {
    const[selectedEvent, setSeletedEvent] = useState(0);
    const[resetTrigger, setResetTrigger] = useState(false);


    const favs = [{id:0 , title: "Star Wars", genre: ["Action"], desc: "" , img:"https://res.cloudinary.com/dhlboslsy/image/upload/v1759943643/empirearcade-1657477249068.png_wjlpbh.webp"},
                  {id:1 , title: "Doom", genre: ["Action"], desc: "" , img: "https://res.cloudinary.com/dhlboslsy/image/upload/v1759943643/Doom.png_fk0fzv.webp"},
                  {id:2 , title: "Wizard Fire", genre: ["Action"], desc: "", img:"https://res.cloudinary.com/dhlboslsy/image/upload/v1759943643/wizardfire.png_ggz8as.jpg" } ,
                  {id:3 , title: "Gun Force II", genre: ["Action"], desc: "" ,img:"https://res.cloudinary.com/dhlboslsy/image/upload/v1759943646/gunforce_tja2qn.png"}  ];

    const events = [{id:0 , 
                    title:"Bowling Tournament", 
                    desc:"The gloves are off and the pins are set! It's time for the ultimate five-person showdown on the lanes. Forget friendly rivalry; this is about bragging rights and achieving that elusive perfect game. ", 
                    img:"https://res.cloudinary.com/dhlboslsy/image/upload/v1759945635/bowling1_cmydig.jpg"},

                    {id:1 , 
                        title:"Laser Tag", 
                        desc:"The gloves are off and the pins are set! It's time for the ultimate five-person showdown on the lanes. Forget friendly rivalry; this is about bragging rights and achieving that elusive perfect game. ", 
                        img:"https://res.cloudinary.com/dhlboslsy/image/upload/v1759945684/Cinema_Photo_cottonbro_studio_pexels_bdrgxr.jpg"},

                    {id:2 , 
                        title:"Smash Bros Tournament", 
                        desc:"The gloves are off and the pins are set! It's time for the ultimate five-person showdown on the lanes. Forget friendly rivalry; this is about bragging rights and achieving that elusive perfect game. ", 
                        img:""},


                    {id:3 , 
                        title:"Birthday Celebration", 
                        desc:"The gloves are off and the pins are set! It's time for the ultimate five-person showdown on the lanes. Forget friendly rivalry; this is about bragging rights and achieving that elusive perfect game. ", 
                        img:""}
    ]
        useEffect(()=>{
        const interval = setInterval(()=>{
            setSeletedEvent((prev)=>(prev+1)%events.length)
        }, 5000)
        return() => clearInterval(interval);
    },[events.length, resetTrigger])

    useEffect(()=>{
        console.log("Selected event", selectedEvent)
    },[selectedEvent])
  return (
    <>
    <div className=" flex flex-col w-full ">
            <section className="flex w-full h-[800px]">
                <div className="flex flex-col flex-1  inset-0 absolute w-full h-[800px] z-[-10]">
                        
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
            <div className="bg-[black]">
            {/* Events section */}
            
            <section className="relative mt-[50px] w-full">
                <div className="flex flex-1   gap-2 p-[50px]">
                    <article className="flex flex-col items-center w-full ">
                        <div>
                            <Carousel img={events[selectedEvent].img}/>
                        </div>

                    </article>
                    <article className="flex justify-center w-full ">
                        <div className="flex flex-col justify-center rounded-2xl border border-[white] bg-[white] h-[340px] w-[580px]">
                            
                            <div className="bg-[var(--primary)] p-[10px] rounded-t-2xl">
                                <p className="text-[white] text-[36px] w-full text-center">{events[selectedEvent].title}</p>
                            </div>
                            
                            <div className="h-full p-[10px]">
                                <p className="text-[black] text-[22px]">{events[selectedEvent].desc}</p>
                            </div>

                        </div>
                    </article>
                </div>
            </section>

            {/* Games section */}
            <section className="relative mt-[100px] w-full px-4">
            <div className="text-[white] text-[48px] mb-8">
                Play some of our fan favourites
            </div>

            {/* Scrollable container */}
            <div className="flex overflow-x-auto gap-[120px] h-[400px] border border-[blue] p-2 max-w-[100vw] px-[50px]">
                {favs.map((fav) => (
                <div key={fav.id} >
                    <Card custom="w-[390px] h-[390px] border border-[var(--primary)]"img={fav.img}/>
                </div>
                ))}
            </div>
            </section>




            {/* Reviews section */}
                        <section>
                <div className="text-[white] text-[48px]">Check out our reviews</div>
                <div className="flex h-[600px] w-full border border-[white]">
                    {/* <div className="w-[318px] h-[560px] border border-[red] bg-[white]"></div>
                    <div className="w-[318px] h-[560px] border border-[red] bg-[white]"></div>
                    <div className="w-[318px] h-[560px] border border-[red] bg-[white]"></div> */}
                </div>
            </section>
            {/* Scores section */}
                <section>
                    <div className="text-[white] text-[48px]">Go head to head with some of the best</div>
                    <div className="h-[600px] w-full border border-[white]"></div>
                </section>
                </div>
        </div>
    </>
  );
};

export default Home;