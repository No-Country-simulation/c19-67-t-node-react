import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { ChevronLeft } from "lucide-react";
import { Search } from "lucide-react";
import explorer2 from "../../assets/img/Explorer/explorer2.jpg"
import explorer3 from "../../assets/img/Explorer/Explorer3.jpg"
import MobileNavbar from "../../components/navbar/Navbar";

const Explorer = ({ title, items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="pb-24">
      <div className="flex items-center mt-4">
        <ChevronLeft color="#373737" size={32} />
        <h1 className="font-manrope text-2xl font-medium text-[#373737]">
          Explorar
        </h1>
      </div>

      <div className="relative ml-[14px] mt-4">
        <Search
          size={30}
          color="#A9A9A9"
          className="absolute left-3 top-[10px] pointer-events-none"
        />
        <input
          type="search"
          className="border border-gray-400 focus:border-transparent px-3 py-3 rounded-lg w-[360px] pr-10"
        />
      </div>

      <section className="mt-4">
        <h1 className="ml-3 text-xl font-manrope text-[#373737] font-semibold">
          {title}
        </h1>
        <div className="relative overflow-hidden" {...handlers}>
          <div
            className="ml-3 flex transition-transform duration-300"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {items.map((item, index) => (
              <div
                key={index}
                className="flex-none w-full mr-6"
                style={{ flex: "0 0 45%" }}
              >
                <img
                  className="mt-2 w-full object-cover h-32 rounded-lg"
                  src={item.imgSrc}
                  alt={`Imagen ${index + 1}`}
                />
                <p className="mt-2 font-manrope font-medium">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-4">
        <h1 className="ml-3 text-xl font-manrope text-[#373737] font-semibold">
          Recomendaciones
        </h1>
        
        <div className="flex flex-col mt-4">
          <div className="ml-3">
            <img src={explorer2} className="w-[370px] rounded-lg" alt="" />
            <p className="font-manrope text-[#373737] font-semibold mt-1 text-lg">Estres laboral</p>
            <p className="font-manrope text-sm">5 min de lectura</p>
          </div>

          <div className="ml-3 mt-5">
            <img src={explorer3} className="w-[370px] rounded-lg" alt="" />
            <p className="font-manrope text-[#373737] font-semibold mt-1 text-lg ">Ansiedad social</p>
            <p className="font-manrope text-sm">5 min de lectura</p>
          </div>
        </div>
      </section>
      <MobileNavbar/>
    </div>
  );
};

export default Explorer;
