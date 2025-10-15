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
            <div className="flex lg:flex-row lg:justify-center flex-col  items-center mt-[120px] 
                                = w-full p-[30px]   gap-5">

                <section className="flex w-full lg:justify-end justify-center">
                    <div className=" flex lg:w-[680px] lg:h-[420px] w-[560px] h-[280px] bg-[black] border p-[20px]">
                       <div className="flex w-full "> 
                        <img className="w-[200px] h-[200px]" src={favs[selectedIndex].img}/>
                        </div>
                        <div className="flex flex-col gap-5 text-white  w-full  items-center pt-[40px]">
                            <h2 className="text-[var(--primary)]">Leaderboard</h2>
                            <ul className="flex flex-col w-full items-center ">

                                    <li><h3>1. {favs[selectedIndex].scores.first}</h3></li>
                                    <li><h3>2. {favs[selectedIndex].scores.second}</h3></li>
                                    <li><h3>3. {favs[selectedIndex].scores.third}</h3></li>
                                    <li><h3>4. {favs[selectedIndex].scores.fourth}</h3></li>

                            </ul>
                        </div>  
                    </div>
                </section>

                                
                <section className="flex lg:justify-start justify-center w-full">
                    <div className="grid grid-cols-6 lg:w-[700px] lg:h-[420px] w-[560px] border p-[20px] border-[var(--darkg)] border-[1px] bg-[var(--lightg)] rounded-xl">
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