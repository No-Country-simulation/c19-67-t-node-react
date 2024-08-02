import React, { useState } from "react";
import "./Home.css";
import { Bell, Zap, ChevronDown } from "lucide-react";
import Recommendations from "../../components/Recommendations/Recommendations";
import MobileNavbar from "../../components/navbar/Navbar";
import Meditations from "../../components/Meditations/Meditations";
import Exercises from "../../components/Exercises/Exercises";
import MoodModal from "../../components/MoodModal/MoodModal";
import reco1 from "../../assets/img/Recomendaciones/1.png";
import reco2 from "../../assets/img/Recomendaciones/2.jpeg";
import reco3 from "../../assets/img/Recomendaciones/3.jpg";
import Rectangle from "../../assets/img/Ejercicios/Rectangle.png";
import Vector from "../../assets/img/Ejercicios/Vector.png";
import Vector2 from "../../assets/img/Ejercicios/Vector2.png";
import medit1 from "../../assets/img/Meditations/medit1.jpg";
import medit2 from "../../assets/img/Meditations/medit2.jpg";
import medit3 from "../../assets/img/Meditations/medit3.jpg";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const recommendations = [
    { title: "Relájate", duration: "5 min", imgSrc: reco1 },
    { title: "Atención plena", duration: "8 min", imgSrc: reco2 },
    { title: "Meditación", duration: "5 min", imgSrc: reco3 },
    { title: "Meditación", duration: "5 min", imgSrc: reco2 },
  ];

  const exercise = [
    { title: "Ejercicio 1", duration: "5 min", imgSrc: Rectangle },
    { title: "Ejercicio 2", duration: "8 min", imgSrc: Vector },
    { title: "Ejercicio 3", duration: "5 min", imgSrc: Vector2 },
    { title: "Ejercicio 4", duration: "5 min", imgSrc: Vector2 },
  ];

  const meditation = [
    { title: "meditacion 1", duration: "5 min", imgSrc: medit1 },
    { title: "meditacion 2", duration: "8 min", imgSrc: medit2 },
    { title: "meditacion 3", duration: "5 min", imgSrc: medit3 },
    { title: "meditacion 4", duration: "5 min", imgSrc: medit1 },
  ];

  return (
    <main className="pb-24">
      <section className="">
        <div className="flex flex-wrap flex-row justify-between items-center m-3">
          <h1 className=" font-manrope text-xl text-[#373737]">
            Hola,{" "}
            <span className="font-manrope text-[#373737] font-semibold">
              Juan
            </span>
          </h1>
          <div className="flex gap-4">
            <span className="bg-[#E8F1F8] px-1 py-1 rounded-xl">
              <Zap color="#3C85B7" />
            </span>
            <span className="bg-[#EAE8F3] px-1 py-1 rounded-xl">
              <Bell color="#6E5BAA" />
            </span>
          </div>
          <div className="relative mt-2 w-full max-w-60">
            <button
              type="button"
              className="border border-gray-400 focus:border-transparent px-3 py-4 rounded-xl w-full pr-10 text-left text-sm font-manrope "
              onClick={handleInputClick}
            >
              ¿Cómo te sientes hoy?😀
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
            </button>
          </div>
        </div>
      </section>
      <Recommendations
        title="Recomendaciones para ti"
        items={recommendations}
      />
      <Exercises title="Ejercicios de respiración" items={exercise} />
      <Meditations title="Meditaciones guiadas" items={meditation} />
      {isModalOpen && <MoodModal closeModal={closeModal} />}
      <MobileNavbar />
    </main>
  );
};

export default Home;
