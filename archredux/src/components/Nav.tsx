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
            <section className="flex flex-col">
                <button onClick={handleNav} className="h-[45px] w-[45px] border border-[black] bg-white"><img src={NavImg}/></button>
                {openNav && (
                    <div className={`absolute mt-[45px] right-[21px] w-[216px] h-[292px] 
                                    ${page=="/"?"bg-[white] text-[black]": "bg-[black] text-[white]"} border border-[black]`}>

<ul className="flex flex-col items-end text-[36px] gap-5 px-[10px] list-none decoration-none no-underline">
  <li onClick = {handleNav} className="flex justify-end w-full  h-full border-b">
    <div className="transform transition-transform duration-300 ease-in-out hover:-translate-x-10 w-full h-full text-right hover:text-[var(--primary)]">
      <NavLink to="/">
      Home
      </NavLink>
    </div>
  </li>
  <li onClick = {handleNav} className="flex justify-end w-full border-b ">
    <div className="transform transition-transform duration-300 ease-in-out hover:-translate-x-10 w-full h-full text-right hover:text-[var(--primary)]">
      <NavLink to="/games">
      Games
      </NavLink>
    </div>
  </li>
  <li onClick = {handleNav} className="flex justify-end w-full border-b ">
    <div className="transform transition-transform duration-300 ease-in-out hover:-translate-x-10 w-full h-full text-right hover:text-[var(--primary)]">
      <NavLink to="/events">
      Events
      </NavLink>
    </div>
  </li>
  <li onClick = {handleNav} className="flex justify-end w-full border-b ">
    <div className="transform transition-transform duration-300 ease-in-out hover:-translate-x-10 w-full h-full text-right hover:text-[var(--primary)]">
      <NavLink to="/scores">
      Scores
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