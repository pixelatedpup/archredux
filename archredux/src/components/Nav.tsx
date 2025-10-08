import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
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
            <section className="flex flex-col">
                <button onClick={handleNav} className="h-[45px] w-[45px] border border-[black] bg-white"></button>
                {openNav && (
                    <div className={`absolute mt-[45px] right-[21px] w-[216px] h-[292px] 
                                    ${page=="/"?"bg-[white] text-[black]": "bg-[black] text-[white]"} border border-[black]`}>

<ul className="flex flex-col items-end text-[36px] gap-5 px-[10px] list-none decoration-none no-underline">
  <li onClick = {handleNav} className="flex justify-end w-full border-b transform transition-transform duration-300 ease-in-out hover:-translate-x-3 ">
    <NavLink to="/">
    Home
    </NavLink>
  </li>
  <li onClick = {handleNav} className="flex justify-end w-full border-b transform transition-transform duration-300 ease-in-out hover:-translate-x-3">
    <NavLink to="/games">
    Games
    </NavLink>
  </li>
  <li onClick = {handleNav} className="flex justify-end w-full border-b transform transition-transform duration-300 ease-in-out hover:-translate-x-3">
    <NavLink to="/events">
    Events
    </NavLink>
  </li>
  <li onClick = {handleNav} className="flex justify-end w-full border-b transform transition-transform duration-300 ease-in-out hover:-translate-x-3">
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