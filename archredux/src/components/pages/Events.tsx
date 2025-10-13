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
        <>
            <section className="flex flex-col gap-7 items-center mt-[75px] w-full p-[50px]">
                <article className="flex w-full justify-end ">
                    <h1 className="text-[48px]">Our Events</h1>
                </article>
                {events.map((event, index) => (
                    <div key={event.title} onMouseEnter={()=>handleHover(event.title)} onMouseLeave={()=>handleHover(null)} className={`flex w-full bg-black h-[310px] hover:h-[340px] transition-all duration-[300ms] ${index%2 === 1 ? 'flex-row' :'flex-row-reverse'}`}>
                        <div className="flex-1">
                        <Card custom="w-[1087px] h-full transition-all duration-[300ms] " img={event.img} gray={hover && onHover !== event.title}/>
                        </div>
                        <div className="flex flex-col p-[30px] gap-2">
                            <h2 className="text-[24px] font-bold text-[var(--primary)]">{event.title}</h2>
                            <p className="text-[white]">{event.desc}</p>
                            <div className="flex w-full ">
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
            
        </>
    );
}

export default Events;