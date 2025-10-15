const Footer =()=>{
    return(
        <div className="bg-white">
            <article className="flex flex-col w-full justify-center h-[150px]">
                <h2 className="flex w-full justify-center text-[24px]">Arch</h2>
                <h1 className="flex w-full justify-center text-[48px] mt-[-30px]">Redux</h1>
            </article>
            <article className="w-full flex justify-center">
                <ul className="flex flex-row gap-4">
                    <li> <h3>Home</h3></li>
                    <li><h3>Games</h3></li>
                    <li><h3>Events</h3></li>
                    <li><h3>Scores</h3></li>
                </ul>
            </article>
        </div>
    );
}

export default Footer;