import Nav from "./Nav";

const Header =()=>{
    return(
        <>
        <section className="fixed  right-0 px-[20px] w-full bg-white items-center border-b-[2px]  h-[100px] z-1 bg-[red] mt-0">
                <header className="flex flex-row items-center h-full">
                    <article className="flex w-full">
                        <div className="flex flex-col">
                                    <div className="flex flex-col mix-blend-difference text-[white]"> 
                                        <div className="text-[24px] flex justify-center ">Arch</div>
                                        <div className="text-[36px] flex justify-center  p-0 mt-[-14px]">Arcades</div>
                                    </div>  
                        </div>
                    </article>
                    <article className="flex w-full justify-end">
                        <div className="flex flex-col justify-center">
                            <Nav/>
                        </div>
                    </article>
                </header>
        </section>
        </>
    );
}

export default Header;