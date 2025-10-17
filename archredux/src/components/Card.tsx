import { useRef, useEffect } from "react";

interface CardProps {
  custom?: string;
  rounded?: boolean;
  img?: string;
  gray?: boolean;
  scrollPan?: boolean;
  key?: string;
}

const Card = ({
  custom = "",
  rounded = false,
  img = "",
  gray = false,
  scrollPan = false,
  key = "",
}: CardProps) => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!scrollPan || !imgRef.current || !containerRef.current) return;

    const imgEl = imgRef.current;
    const container = containerRef.current;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // how much of the card is visible
      const start = windowHeight;
      const end = -rect.height;
      const progress = (start - rect.top) / (start - end);

      // clamp between 0 and 1
      const clamped = Math.max(0, Math.min(1, progress));

      // move image only within its overflow range
      const overflow = 0.2; // since image is 120% tall
      imgEl.style.transform = `translateY(-${clamped * overflow * 100}%)`;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPan]);

  return (
    <div
      ref={containerRef}
      className={`
        overflow-hidden relative
        ${custom === "" ? "h-[250px] w-[250px] border border-black bg-white flex items-center justify-center" : custom}
        ${rounded ? "rounded-[16px]" : ""}
      `}
    >
      <img
        key={key}
        ref={imgRef}
        className={`w-full h-[120%] object-cover transition-transform duration-[100ms] ease-out will-change-transform ${
          gray ? "grayscale" : ""
        }`}
        src={img || "https://via.placeholder.com/250"}
        alt=""
      />
    </div>
  );
};

export default Card;
