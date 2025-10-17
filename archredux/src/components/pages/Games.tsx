import { useState } from "react";
import { favs } from "../../assets/favs";
import Card from "../Card";
import { useSwipeable } from "react-swipeable";
const Games = () => {
  const [selectedCard, setSelectedCard] = useState(1); // start from 2nd (middle) card

  const handleSelect = (index: number) => {
    setSelectedCard(index);
  };
  const handleNext = () => setSelectedCard((prev) => (prev+1) % favs.length);
  const handlePrev = () => setSelectedCard((prev) => (prev-1+favs.length) % favs.length);

  // Compute indexes for left, center, right cards
  const leftIndex = (selectedCard - 1 + favs.length) % favs.length;
  const rightIndex = (selectedCard + 1) % favs.length;

  const visibleCards = [leftIndex, selectedCard, rightIndex];

  //Using swipeHandlers
  const swipeHandlers = useSwipeable({
        onSwipedLeft: () => handleNext(),
        onSwipedRight: () => handlePrev(),
        preventScrollOnSwipe: true,
        trackMouse:true //allows desktop dragging too
  })
  return (
    <div className="flex flex-col justify-center items-center w-full h-full mt-[150px]">


      {/* Game cards carousel */}
      <section {...swipeHandlers} className="flex w-full h-full justify-center items-center mt-6 cursor-pointer ">
        <article className="flex flex-row gap-10 items-center w-full justify-center ">
          {visibleCards.map((index) => (
            <div
              key={index}
              className={`cursor-pointer transition-transform duration-500 ${
                index === selectedCard
                  ? "flex gap-7 lg:gap-0 flex-row bg-black lg:w-[669px] lg:h-[430px] w-[350.6px]  h-[320px] p-[38px] rounded-2xl justify-center  relative scale-110  "
                  : "opacity-70"
              }`}
              onClick={() => handleSelect(index)}
            >

                <div className=" flex flex-col w-full h-full items-start justify-center ">
                  <div className="expand-sequential">
                    <Card img={favs[index].img} custom={` ${index === selectedCard?"h-[140px] w-[140px]":"h-[70px] w-[70px]"}  lg:h-[250px] lg:w-[250px]`} />
                  </div>
                </div>
                <div className="flex flex-col items-center w-full h-full justify-center">
                    <h3 className="text-[var(--primary)] lg:text-center text-left w-full">{favs[index].title}</h3>
                    
                    {index === selectedCard && 
                    <div className="flex flex-col gap-5 items-center justify-center ">
                    <p className="text-white w-full ">{favs[index].desc}</p> 
                    <p className="flex justify-center items-center text-white bg-[var(--primary)] p-[6px] rounded-2xl  lg:w-[80px] lg:h-[30px] w-[45px] h-[15px] text-center">{favs[index].genre}</p>
                    </div>
                    }
                </div>
            </div>
          ))}
        </article>
      </section>

      {/* Scrollable title list */}
      <section {...swipeHandlers} className="cursor-pointer flex flex-col w-full justify-center items-center h-full overflow-y-auto r">
        <article className="flex flex-col items-center gap-2 h-[300px]">
          {favs.map((fav, index) => (
            <div
              key={index}
              className={`text-[24px] cursor-pointer transition-colors ${
                selectedCard === index
                  ? "text-blue-500 font-bold"
                  : "text-gray-500 hover:text-black"
              }`}
              onClick={() => handleSelect(index)}
            >
              {fav.title}
            </div>
          ))}
        </article>
      </section>
    </div>
  );
};

export default Games;
