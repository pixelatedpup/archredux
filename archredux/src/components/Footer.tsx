import { NavLink } from "react-router-dom";

const Footer =({location=""})=>{
    return(
        <div className={`${location === "/"? 'bg-white text-black':'bg-black text-white'} py-[40px]`}>
            <article className="flex flex-col w-full justify-center h-[150px] ">
                <h2 className="flex w-full justify-center text-[24px]">Arch</h2>
                <h1 className="flex w-full justify-center text-[48px] mt-[-30px]">Redux</h1>
            </article>
            <article className="w-full flex justify-center">
                <ul className="flex flex-row gap-4 text-[var(--darkergb)]">
                    <li><NavLink to={"/"} className={`${location === "/" ? "text-black":"text-[var(--darkergb)]"}`}><h2>Home</h2></NavLink></li>
                    <li><NavLink to={"/games"} className={`${location === "/games" ? "text-white":"text-[var(--darkergb)]"}`}><h2>Games</h2></NavLink></li>
                    <li><NavLink to={"/events"} className={`${location === "/events" ? "text-white":"text-[var(--darkergb)]"}`}><h2>Events</h2></NavLink></li>
                    <li><NavLink to={"/scores"} className={`${location === "/scores" ? "text-white":"text-[var(--darkergb)]"}`}><h2>Scores</h2></NavLink></li>
                </ul>
            </article>
        </div>
    );
}

export default Footer;