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
    <div className="flex flex-col justify-center items-center w-full h-full mt-[100px]">


      {/* Game cards carousel */}
      <section {...swipeHandlers} className="flex w-full h-full justify-center items-center mt-6 cursor-pointer">
        <article className="flex flex-row gap-10 items-center">
          {visibleCards.map((index) => (
            <div
              key={index}
              className={`cursor-pointer transition-transform duration-500 ${
                index === selectedCard
                  ? "flex flex-row bg-black w-[669px] h-[397px] p-[38px] rounded-2xl justify-center  relative scale-110  "
                  : "opacity-70"
              }`}
              onClick={() => handleSelect(index)}
            >

                <div className="w-full flex flex-col items-start">
                    <Card img={favs[index].img} />
                </div>
                <div className="flex flex-col items-center w-full ">
                    <h2 className="text-[var(--primary)] text-[28px]">{favs[index].title}</h2>
                    <p className="text-white">{favs[index].desc}</p>
                    {index === selectedCard && <p className="text-white bg-[var(--primary)] p-[6px] rounded-2xl text-[12px]">{favs[index].genre}</p>}
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
