interface CarouselProps{
    img?: string;
    custom?: string;
}
const Carousel = ({img="" , custom=""}:CarouselProps) =>{ 
    return(
        <div className={`${custom == ""? '':{custom}} flex border border-[#E600FF] bg-[var(--primary)] rounded-2xl  lg:w-[674px] lg:h-[440px] w-[518.46px] h-[338.46px]`}>
            <img className="w-full h-full object-cover rounded-2xl" src={img}></img>

        </div>
    );
}

export default Carousel;