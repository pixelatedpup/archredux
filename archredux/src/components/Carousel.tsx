interface CarouselProps{
    img?: string;
}
const Carousel = ({img=""}) =>{ 
    return(
        <div className="flex border border-[#E600FF]
                        w-[674px] h-[440px] bg-[var(--primary)] rounded-2xl">
            <img className="w-full h-full object-cover rounded-2xl" src={img}></img>
        </div>
    );
}

export default Carousel;