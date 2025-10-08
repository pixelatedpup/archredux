import Carousel from "../Carousel";
import { useEffect, useState } from "react";
import Card from "../Card";
import BackgroundVideo from "../BackgroundVideo";


const Home = () => {
    const[selectedEvent, setSeletedEvent] = useState(0);
    const[resetTrigger, setResetTrigger] = useState(false);
    const[backgroundIndex, setBackgroundIndex] = useState(0);


    const favs = [{id:0 , title: "Star Wars", genre: ["Action"], desc: "" , img:"https://res.cloudinary.com/dhlboslsy/image/upload/v1759943643/empirearcade-1657477249068.png_wjlpbh.webp"},
                  {id:1 , title: "Doom", genre: ["Action"], desc: "" , img: "https://res.cloudinary.com/dhlboslsy/image/upload/v1759943643/Doom.png_fk0fzv.webp"},
                  {id:2 , title: "Wizard Fire", genre: ["Action"], desc: "", img:"https://res.cloudinary.com/dhlboslsy/image/upload/v1759943643/wizardfire.png_ggz8as.jpg" } ,
                  {id:3 , title: "Gun Force II", genre: ["Action"], desc: "" ,img:"https://res.cloudinary.com/dhlboslsy/image/upload/v1759943646/gunforce_tja2qn.png"}  ];

    const reviews =[{id:0, name:"James Madden", message:"Lovely time with the fam!", rating:4},
                    {id:1, name:"Kath Maddy", message:"Lovely time with the fam!", rating:5},
                    {id:2, name:"Lauren Hall", message:"Lovely time with the fam!", rating:4.5},
                    {id:3, name:"Jeniffer Sunders", message:"Lovely time with the fam!", rating:5},
                    {id:4, name:"Jaq Maques", message:"Lovely time with the fam!", rating:5}
    ]
    const events = [{id:0 , 
                    title:"Bowling Tournament", 
                    desc:"The gloves are off and the pins are set! It's time for the ultimate five-person showdown on the lanes. Forget friendly rivalry; this is about bragging rights and achieving that elusive perfect game. ", 
                    img:"https://res.cloudinary.com/dhlboslsy/image/upload/v1759945635/bowling1_cmydig.jpg",
                    max: 8},

                    {id:1 , 
                        title:"Laser Tag", 
                        desc:"The gloves are off and the pins are set! It's time for the ultimate five-person showdown on the lanes. Forget friendly rivalry; this is about bragging rights and achieving that elusive perfect game. ", 
                        img:"https://res.cloudinary.com/dhlboslsy/image/upload/v1759945684/Cinema_Photo_cottonbro_studio_pexels_bdrgxr.jpg",
                        max: 5},

                    {id:2 , 
                        title:"Smash Bros Tournament", 
                        desc:"The gloves are off and the pins are set! It's time for the ultimate five-person showdown on the lanes. Forget friendly rivalry; this is about bragging rights and achieving that elusive perfect game. ", 
                        img:"",
                        max: 5},


                    {id:3 , 
                        title:"Birthday Celebration", 
                        desc:"The gloves are off and the pins are set! It's time for the ultimate five-person showdown on the lanes. Forget friendly rivalry; this is about bragging rights and achieving that elusive perfect game. ", 
                        img:"",
                        max:30}
    ]

    const bgImages =[{id:0, title:"Basketball", video:"https://res.cloudinary.com/dhlboslsy/video/upload/v1759859771/arcade_8_ayjo91.mp4", alt:""},
                {id:1, title:"", video:"https://res.cloudinary.com/dhlboslsy/video/upload/v1759956940/arcade6_barnnq.mp4", alt:""},
                {id:2, title:"", video:"https://res.cloudinary.com/dhlboslsy/video/upload/v1759956929/ardae2_apxjsn.mp4", alt:""},
                {id:3, title:"", video:"https://res.cloudinary.com/dhlboslsy/video/upload/v1759956870/arcade_9_pwq5qh.mp4", alt:""},
                {id:4, title:"", video:"https://res.cloudinary.com/dhlboslsy/video/upload/v1759956947/arcade7_iuouwi.mp4", alt:""}
    ]
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
                        <div>
                            <Carousel img={events[selectedEvent].img}/>
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
            <section className="relative flex flex-col overflow-hidden mt-[100px] w-full h-[789px] px-4 ">
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
                        <section className="w-full relative mt-[100px]">
                <div className="text-[white] text-[48px]">Check out our reviews</div>
                <div className="flex h-[600px]  gap-[120px] overflow-x-auto max-w-[100vw]">
                    {reviews.map(()=>(
                        <div className="flex flex-col h-[560px] w-[318px]">
                            <Card custom="h-[441px] w-[318px] border border-[var(--primary)]"/>
                            <div className="w-[240px] h-[240px] rounded-full border border-[var(--primary)]"></div>
                        </div>
                    ))}
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