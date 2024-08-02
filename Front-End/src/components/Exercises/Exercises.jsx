import React, {useState} from "react";
import {useSwipeable} from "react-swipeable"

const Exercises = ({ title, items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const backgroundColors = ['#E8F1F8', '#EAE8F3', '#E5F5F0', '#ffffdd'];

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <section className="p-3">
      <div className="flex justify-between items-center mb-3">
        <h1 className="text-xl font-manrope text-[#373737] font-semibold">
          {title}
        </h1>
        <a href="#" className="mr-4 hover:underline">
          <p className="font-manrope">Ver Todo</p>
        </a>
      </div>

      <div className="relative overflow-hidden" {...handlers}>
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-none w-full mr-6"
              style={{ flex: "0 0 45%" }}
              
            >
              <div
                className="mt-2 w-full h-32 rounded-lg"
                style={{
                  backgroundColor: backgroundColors[index],
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  className="w-full h-full rounded-lg"
                  src={item.imgSrc}
                  alt={`Imagen ${index + 1}`}
                  style={{ objectFit: 'scale-down' }}
                />
              </div>
              <p className="mt-2 font-manrope font-medium">{item.title}</p>
              <span className="font-manrope">{item.duration}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Exercises;