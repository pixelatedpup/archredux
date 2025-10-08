import { favs } from "../../assets/favs";
import Card from "../Card";

const Games =()=>{
    return(
        <div className="flex flex-col justify-center items-center w-full h-full">
            

            <section className="flex flex-col w-full h-full justify-center items-center border">
                <article className="flex flex-row">
                    {favs.map((fav, index) => (
                        <div className="">
                            <Card img={fav.img}/>
                        </div>
                    ))}
                </article>
            </section>

            <section className="flex flex-col w-full justify-center items-center h-[600px] overflow-y-auto border">
                    <article className="flex flex-col">
                        {favs.map((fav, index) => (
                            <div className="text-[36px]">
                                <div>{fav.title}</div>
                            </div>
                    ))}
                    </article>
            </section>
        </div>
    );
}

export default Games;