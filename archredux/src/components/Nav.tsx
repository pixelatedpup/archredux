import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
const Nav = () =>{
    const [openNav, setOpenNav] = useState(false);

    useEffect(()=>{
        console.log("OpenNav", openNav);
    },[openNav])

    const handleNav = () =>{
        if(!openNav){
            setOpenNav(true);
        }else{
            setOpenNav(false);
        }
    }
    return(
        <>
            <section className="flex flex-col">
                <button onClick={handleNav} className="h-[45px] w-[45px] border border-[black] "></button>
                {openNav && (
                    <div className="absolute mt-[45px] right-[21px] w-[216px] h-[292px] 
                                    bg-[white] border border-[black]">

<ul className="flex flex-col items-end text-[36px] gap-5 px-[10px] list-none decoration-none no-underline">
  <li className="flex justify-end w-full border-b transform transition-transform duration-300 ease-in-out hover:-translate-x-3 ">
    <NavLink to="/">
    Home
    </NavLink>
  </li>
  <li className="flex justify-end w-full border-b transform transition-transform duration-300 ease-in-out hover:-translate-x-3">
    <NavLink to="/works">
    Works
    </NavLink>
  </li>
  <li className="flex justify-end w-full border-b transform transition-transform duration-300 ease-in-out hover:-translate-x-3">
    <NavLink to="/events">
    Events
    </NavLink>
  </li>
  <li className="flex justify-end w-full border-b transform transition-transform duration-300 ease-in-out hover:-translate-x-3">
    <NavLink to="/scores">
    Scores
    </NavLink>
  </li>
</ul>



                                    </div>
                )}
                
                

            </section>
        </>
    );
}

export default Nav;