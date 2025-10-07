const Home =()=>{
    return(
        <>
            <div className="flex flex-col flex-1 border inset-0 w-full h-[800px] z-[-50]">
                <video className="w-full h-full object-cover"
                                autoPlay
                                loop
                                muted
                                playsInline >
                    <source src="https://res.cloudinary.com/dhlboslsy/video/upload/v1759859771/arcade_8_ayjo91.mp4" type="video/mp4"/>
                </video>
            </div>
        </>
    );
}

export default Home;