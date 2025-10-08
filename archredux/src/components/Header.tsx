import { useEffect, useState } from "react";
import Nav from "./Nav";

interface HeaderProps {
  location?: string;
}

const Header: React.FC<HeaderProps> = ({ location = "" }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 400); // adjust threshold as needed
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={`fixed right-0 w-full h-[100px] z-50 transition-colors duration-500 ${
        scrolled && location=="/" ? "bg-white text-black shadow-md" : "bg-transparent  "
      }`}
    >
      <header className="flex flex-row items-center h-full px-[20px]">
        <article className="flex w-full">
          <div className="flex flex-col">
            <div className="text-[24px] flex justify-center">Arch</div>
            <div className="text-[36px] flex justify-center p-0 mt-[-14px]">
              Arcades
            </div>
          </div>
        </article>
        <article className="flex w-full justify-end">
          <div className="flex flex-col justify-center">
            <Nav page={location} />
          </div>
        </article>
      </header>
    </section>
  );
};

export default Header;
