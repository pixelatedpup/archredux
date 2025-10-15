interface CarouselProps{
    img?: string;
    custom?: string;
}
interface CarouselProps {
  img?: string;
  custom?: string;
}

const Carousel = ({ img = "", custom = "" }: CarouselProps) => {
  return (
    <div
      className={`${custom ? custom : ""} flex border border-[#E600FF] bg-[var(--primary)] rounded-2xl lg:w-[674px] lg:h-[440px] w-[518.46px] h-[338.46px]`}
    >
      {/* key={img} ensures fade-in triggers every time img changes */}
      <img
        key={img}
        className="w-full h-full object-cover rounded-2xl fade-in"
        src={img}
        alt=""
      />
    </div>
  );
};

export default Carousel;
