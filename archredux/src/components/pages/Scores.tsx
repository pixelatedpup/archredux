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
            <div className="flex flex-row justify-center mt-[120px] 
                                = w-full p-[30px]   gap-5">

                <section className="flex w-full justify-end">
                    <div className=" flex w-[680px] h-[420px] bg-[black] border p-[20px]">
                       <div className="flex w-full "> 
                        <img className="w-[300px] h-[300px]" src={favs[selectedIndex].img}/>
                        </div>
                        <div className="flex flex-col gap-5 text-white  w-full  items-center pt-[40px]">
                            <h2 className="text-[var(--primary)]">Leaderboard</h2>
                            <ul className="text-[24px]  ">

                                    <li>{favs[selectedIndex].scores.first}</li>
                                    <li>{favs[selectedIndex].scores.second}</li>
                                    <li>{favs[selectedIndex].scores.third}</li>
                                    <li>{favs[selectedIndex].scores.fourth}</li>

                            </ul>
                        </div>  
                    </div>
                </section>

                                
                <section className="flex  w-full">
                    <div className="grid grid-cols-6 w-[700px] h-[420px] border p-[20px] border-[var(--darkg)] border-[1px] bg-[var(--lightg)] rounded-xl">
                        {favs.map((fav, index) => (
                                <>
                                    <article key={index} onClick={()=>handleSelect(index)} className={`cursor-pointer h-[100px]`}>
                                        <Card gray={selectedIndex !== index } custom={`w-[100px] h-[100px] ${selectedIndex === index && "border border-[3px] border-[var(--primary)]"} `} img={fav.img}/>
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