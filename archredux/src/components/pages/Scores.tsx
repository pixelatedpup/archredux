import { useState } from "react";
import { favs } from "../../assets/favs";
import Card from "../Card";

const Scores =()=>{
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleSelect = (index: number) =>{
        setSelectedIndex(index);
    }
    return(
        <>
            <div className="flex lg:flex-row lg:justify-center flex-col  sm:items-centermd:items-center mt-[150px]
                            w-full  gap-5">

                <section className="flex w-full lg:justify-end justify-center">
                    <div className=" flex lg:w-[680px] lg:h-[420px] w-[460px] h-[280px] bg-[black] border p-[20px]">
                       <div className="flex flex-col gap-2 w-full h-full  justify-center items-center"> 
                        <img className="lg:w-[300px] lg:h-[300px] h-[200px] w-[200px]" src={favs[selectedIndex].img}/>
                        <h2 className="text-[var(--light)]">{favs[selectedIndex].title}</h2>
                        </div>
                        <div className="flex flex-col gap-5 text-white  w-full  items-center justify-center ">
                            <h2 className="text-[var(--darkergb)]">Leaderboard</h2>
                            <ul className="flex flex-col w-full items-center text-[var(--primary)] ">

                                    <li><h2>1. {favs[selectedIndex].scores.first}</h2></li>
                                    <li><h2>2. {favs[selectedIndex].scores.second}</h2></li>
                                    <li><h2>3. {favs[selectedIndex].scores.third}</h2></li>
                                    <li><h2>4. {favs[selectedIndex].scores.fourth}</h2></li>

                            </ul>
                        </div>  
                    </div>
                </section>

                                
                <section className="flex lg:justify-start justify-center w-full">
                    <div className="grid lg:grid-cols-6 lg:w-[680px] lg:h-[420px] grid-cols-5 w-[460px] border p-[20px] border-[var(--darkg)] border-[1px] bg-[var(--lightg)] rounded-xl">
                        {favs.map((fav, index) => (
                                <>
                                    <article key={index} onClick={()=>handleSelect(index)} className={`cursor-pointer h-[100px]`}>
                                        <Card gray={selectedIndex !== index } custom={`lg:w-[100px] lg:h-[100px] w-[80px] h-[80px] ${selectedIndex === index && "border border-[3px] border-[var(--primary)]"} `} img={fav.img}/>
                                    </article>
                                </>
                        )
                        )}
                    </div>
                </section>
            </div>
        </>
    );
}

export default Scores;