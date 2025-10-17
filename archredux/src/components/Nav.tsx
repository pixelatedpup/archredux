import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import NavImg from "../assets/NavImg.svg"
const Nav = ({page = ""}) =>{
    const [openNav, setOpenNav] = useState(false);

    useEffect(()=>{
        console.log("OpenNav", openNav);
        console.log("Page: ", page);
    },[openNav, page])

    const handleNav = () =>{
        if(!openNav){
            setOpenNav(true);
        }else{
            setOpenNav(false);
        }
    }
    return(
        <>
            <section className="flex flex-col ">
                <button onClick={handleNav} className="h-[45px] w-[45px] border border-[black] bg-white"><img src={NavImg}/></button>
                {openNav && (
                    <div className={`z-15 absolute mt-[45px] right-[21px] w-[216px] h-[320px] 
                                    ${page=="/"?"bg-[white] text-[black]": "bg-[black] text-[white]"} border border-[black]`}>

<ul className="flex flex-col items-end text-[36px] gap-5 px-[10px] py-[20px] list-none decoration-none no-underline">
  <li onClick = {handleNav} className="flex justify-end w-full  h-full border-b">
    <div className={`transform transition-transform duration-300 delay-[200ms] ease-in-out hover:-translate-x-10 w-full h-full text-right hover:text-[var(--primary)] ${page=="/"?"text-[var(--primary)]":"text-white"}`}>
      <NavLink to="/">
      <h1>
      Home
      </h1>
      </NavLink>
    </div>
  </li>
  <li onClick = {handleNav} className="flex justify-end w-full border-b ">
    <div className={`transform transition-transform duration-300 ease-in-out hover:-translate-x-10 w-full h-full text-right hover:text-[var(--primary)] ${page=="/games"?"text-[var(--primary)]":page=="/"?"text-black ":"text-white"}`}>
      <NavLink to="/games">
      <h1>
      Games
      </h1>
      </NavLink>
    </div>
  </li>
  <li onClick = {handleNav} className="flex justify-end w-full border-b ">
    <div className={`transform transition-transform duration-300 ease-in-out hover:-translate-x-10 w-full h-full text-right hover:text-[var(--primary) ${page=="/events"?"text-[var(--primary)]":page=="/"?"text-black ":"text-white"}`}>
      <NavLink to="/events">
      <h1>
      Events
      </h1>
      </NavLink>
    </div>
  </li>
  <li onClick = {handleNav} className="flex justify-end w-full border-b ">
    <div className={`transform transition-transform duration-300 ease-in-out hover:-translate-x-10 w-full h-full text-right hover:text-[var(--primary)] ${page=="/scores"?"text-[var(--primary)]":page=="/"?"text-black ":"text-white"}`}>
      <NavLink to="/scores">
      <h1>
      Scores
      </h1>
      </NavLink>
    </div>
  </li>
</ul>



                                    </div>
                )}
                
                

            </section>
        </>
    );
}

export default Nav;