import React from "react";
import MobileNavbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import Music1 from "../../assets/img/Music/Music1.jpg";
import Music2 from "../../assets/img/Music/Music2.jpg";
import Music3 from "../../assets/img/Music/Music3.jpg";
import Music4 from "../../assets/img/Music/Music4.jpg";
import Music5 from "../../assets/img/Music/Music5.jpg";

const Music = () => {
  const music = [
    { title: "Musica para dormir", img: Music1 },
    { title: " Sonidos de la naturaleza", img: Music2 },
    { title: "Sonidos binaurales", img: Music3 },
    { title: "Sonidos instrumentales", img: Music4 },
    { title: "Para el estudio", img: Music5 },
  ];

  return (
    <div className="pb-24">
      <div className="flex items-center mt-4">
        <Link to="/home">
          <ChevronLeft color="#373737" size={32} />
        </Link>
        <h1 className="font-manrope text-2xl font-medium text-[#373737]">
          Musica
        </h1>
      </div>
      <section>
        <div className="flex flex-col items-center mt-8 gap-2">
          {music.map((card, index) => (
            <div key={index} className="relative group">
              <img
                src={card.img}
                alt={card.title}
                className="h-36 w-[365px] rounded-lg object-cover"
              />
              <p className="absolute bottom-3 left-4 font-manrope font-semibold w-full text-[#E8F1F8]">
                {card.title}
              </p>
            </div>
          ))}
        </div>
      </section>
      <MobileNavbar />
    </div>
  );
};

export default Music;
