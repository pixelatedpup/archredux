import { events } from "../../assets/events";
import Card from "../Card";
import { useEffect, useState } from "react";

type Hover = string | null;
const Events =()=>{
    const [onHover, setOnHover] = useState<Hover>(null);
    const [hover, setHover] = useState(false);

    useEffect(()=> {
        console.log("Hover: ", hover);
        console.log("OnHover: ", onHover);
    },[hover, onHover])

    const handleHover = (index: Hover) =>{
        if(index !== null){
            setHover(true)
        }else{
            setHover(false)
        }
        

        if (index != null){
            setOnHover(index)
        }else{
            setOnHover(null)
        }
    }
    return(
        <div className="flex flex-col">
            <article className="flex w-full px-[50px] justify-start mt-[125px]">
                    <h1>Our Events</h1>
            </article>
            <section className="flex flex-col gap-[95px] items-center w-full p-[50px]">

                {events.map((event, index) => (
                    <div key={event.title} onMouseEnter={()=>handleHover(event.title)} onMouseLeave={()=>handleHover(null)} className={`flex lg:flex-row flex-col w-full bg-black lg:h-[365px] lg:hover:h-[390px] h-auto hover:h-[550px]  transition-all duration-[300ms] ${index%2 === 1 ? 'flex-row' :'flex-row-reverse'}`}>
                        <div className="flex w-full">
                        <Card scrollPan = {true} custom=" h-full transition-all duration-[300ms] " img={event.img} gray={hover && onHover !== event.title}/>
                        </div>
                        <div className="flex flex-col p-[50px] gap-2 w-full">
                            <h2 className=" font-bold text-[var(--primary)]">{event.title}</h2>
                            <h3 className="text-[white] lg:w-[600px]">{event.desc}</h3>
                            <div className="flex w-full mt-[30px] ">
                                <div className="flex w-full items-center justify-start">
                                    <p className=" flex items-center bg-white p-[10px] h-[25px]">Max: {event.max}</p>
                                </div>
                                {onHover === event.title && (
                                <div className="flex w-full justify-end transition-all duration-[300ms]">
                                    <button className="bg-[var(--primary)] p-[10px] rounded-2xl w-[100px] hover:w-[140px] transition-all duration-[300ms]">Book Now</button>
                                </div>)}
                            </div>
                            
                        </div>
                    </div>
                ))}
            </section>
            
        </div>
    );
}

export default Events;