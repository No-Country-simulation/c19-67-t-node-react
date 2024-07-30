import React, {useState} from "react";
import "./Home.css";
import { Bell, Zap, ChevronDown } from "lucide-react";
import recommendations1 from "../../assets/img/Recomendaciones/Rectangle 39.png"
import recommendations2 from "../../assets/img/Recomendaciones/Rectangle 40.png"
const Home = () => {
  const recommendations = [
    { title: "Relájate", duration: "5 min", imgSrc: recommendations1},
    { title: "Atención plena", duration: "8 min", imgSrc: recommendations2},
    { title: "Meditación", duration: "5 min", imgSrc: "../../assets/img/Recomendaciones/Rectangle 40.png" },
    { title: "Meditación", duration: "5 min", imgSrc: "../../assets/img/Recomendaciones/Rectangle 40.png" },
    { title: "Meditación", duration: "5 min", imgSrc: "../../assets/img/Recomendaciones/Rectangle 40.png" },
  ];

  const exercise = [
    { title: "Ejercicio 1", duration: "5 min", imgSrc: recommendations1},
    { title: "Ejercicio 2", duration: "8 min", imgSrc: recommendations2},
    { title: "Ejercicio 3", duration: "5 min", imgSrc: "../../assets/img/Recomendaciones/Rectangle 40.png" },
    { title: "Ejercicio 4", duration: "5 min", imgSrc: "../../assets/img/Recomendaciones/Rectangle 40.png" },
    { title: "Ejercicio 5", duration: "5 min", imgSrc: "../../assets/img/Recomendaciones/Rectangle 40.png" },
  ];

  const meditation = [
    { title: "meditacion 1", duration: "5 min", imgSrc: recommendations1},
    { title: "meditacion 2", duration: "8 min", imgSrc: recommendations2},
    { title: "meditacion 3", duration: "5 min", imgSrc: "../../assets/img/Recomendaciones/Rectangle 40.png" },
    { title: "meditacion 4", duration: "5 min", imgSrc: "../../assets/img/Recomendaciones/Rectangle 40.png" },
    { title: "meditacion 5", duration: "5 min", imgSrc: "../../assets/img/Recomendaciones/Rectangle 40.png" },
  ];



  return (
    <main>
      <section className="">
        <div className="flex flex-wrap flex-row justify-between items-center m-3">
          <p className=" font-manrope text-xl text-[#373737]">
            Hola, <span className="font-bold text-neutral-800">Nombre</span>
          </p>
          <div className="flex gap-4">
            <span className="bg-[#E8F1F8] px-1 py-1 rounded-xl">
              <Zap color="#3C85B7" />
            </span>
            <span className="bg-[#EAE8F3] px-1 py-1 rounded-xl">
              <Bell color="#6E5BAA" />
            </span>
          </div>
          <div className="relative mt-2 w-full max-w-60">
            <input
              type="text"
              placeholder="¿Cómo te sientes hoy?😀"
              className="border border-gray-400 focus:border-transparent px-3 py-3 rounded-xl w-full pr-10"
            />
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </section>

      <section className="p-3">
        <div className="flex justify-between items-center ">
          <h1 className="text-xl font-manrope text-[#373737] font-semibold">
            Recomendaciones para ti
          </h1>
          <a href="#" className="mr-4 hover:underline">
            Ver Todo
          </a>
        </div>

        <div className="flex gap-4 overflow-x-scroll scrollbar-hide p-3 -mx-3">
          {recommendations.map((rec, index) => (
            <div
              key={index}
              className="flex-none w-60"
              style={{ flex: "0 0 auto" }}
            >
              <img
                className="mt-2 w-52 h-46 rounded-x"
                src={rec.imgSrc}
                alt={`Imagen ${index + 1}`}
              />
              <p className="mt-2 font-manrope font-medium">{rec.title}</p>
              <span className="font-manrope">{rec.duration}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="p-3">
        <div className="flex justify-between items-center ">
          <h1 className="text-xl font-manrope text-[#373737] font-semibold">
          Ejercicios de respiraciòn
          </h1>
          <a href="#" className="mr-4 hover:underline">
            Ver Todo
          </a>
        </div>

        <div className="flex gap-4 overflow-x-scroll scrollbar-hide p-3 -mx-3">
          {exercise.map((exe, index) => (
            <div
              key={index}
              className="flex-none w-60"
              style={{ flex: "0 0 auto" }}
            >
              <img
                className="mt-2 w-52 h-46 rounded-x"
                src={exe.imgSrc}
                alt={`Imagen ${index + 1}`}
              />
              <p className="mt-2 font-manrope font-medium">{exe.title}</p>
              <span className="font-manrope">{exe.duration}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="p-3">
        <div className="flex justify-between items-center ">
          <h1 className="text-xl font-manrope text-[#373737] font-semibold">
          Meditaciones Guiadas
          </h1>
          <a href="#" className="mr-4 hover:underline">
            Ver Todo
          </a>
        </div>

        <div className="flex gap-4 overflow-x-scroll scrollbar-hide p-3 -mx-3">
          {meditation.map((medit, index) => (
            <div
              key={index}
              className="flex-none w-60"
              style={{ flex: "0 0 auto" }}
            >
              <img
                className="mt-2 w-52 h-46 rounded-x"
                src={medit.imgSrc}
                alt={`Imagen ${index + 1}`}
              />
              <p className="mt-2 font-manrope font-medium">{medit.title}</p>
              <span className="font-manrope">{medit.duration}</span>
            </div>
          ))}
        </div>
      </section>


    </main>
  );
};

export default Home;

/*
      <section className="p-3">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-manrope text-[#373737] font-semibold">Ejercicios de respiraciòn</h1>
          <a href="#" className="mr-4 hover:underline">
            Ver Todo
          </a>
        </div>

        <div className="flex gap-4 overflow-x-scroll scrollbar-hide">
          <div className="flex-none w-32">
            <img
              className="mt-2 bg-sky-400 w-32 h-32 rounded-xl"
              src=""
              alt="Imagen 1"
            />
            <p className="mt-2 font-manrope font-medium">Ejercicio 1</p>
            <span className="font-manrope">5 min</span>
          </div>

          <div className="flex-none w-32">
            <img
              className="mt-2 bg-sky-400 w-32 h-32 rounded-xl"
              src=""
              alt="Imagen 2"
            />
            <p className="mt-2 font-manrope font-medium">Ejercicio 2</p>
            <span className="font-manrope">5 min</span>
          </div>

          <div className="flex-none w-32">
            <img
              className="mt-2 bg-sky-400 w-32 h-32 rounded-xl"
              src=""
              alt="Imagen 3"
            />
            <p className="mt-2 font-manrope font-medium">Ejercicio 3</p>
            <span className="font-manrope">5 min</span>
          </div>
          
          <div className="flex-none w-32">
            <img
              className="mt-2 bg-sky-400 w-32 h-32 rounded-xl"
              src=""
              alt="Imagen 3"
            />
            <p className="mt-2">dosfodsaof</p>
            <span>5 min</span>
          </div>
        </div>
      </section>

      <section className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="ml-2 text-xl font-bold">Recomendaciones para ti</h1>
          <a href="#" className="mr-4 text-blue-500 hover:underline">
            Ver Todo
          </a>
        </div>

        <div className="flex gap-4 overflow-x-scroll scrollbar-hide">
          <div className="flex-none w-32">
            <img
              className="mt-2 bg-sky-400 w-32 h-32 rounded-xl"
              src=""
              alt="Imagen 1"
            />
            <p className="mt-2">dosfodsaof</p>
            <span>4</span>
          </div>

          <div className="flex-none w-32">
            <img
              className="mt-2 bg-sky-400 w-32 h-32 rounded-xl"
              src=""
              alt="Imagen 2"
            />
            <p className="mt-2">dosfodsaof</p>
            <span>4</span>
          </div>

          <div className="flex-none w-32">
            <img
              className="mt-2 bg-sky-400 w-32 h-32 rounded-xl"
              src=""
              alt="Imagen 3"
            />
            <p className="mt-2">dosfodsaof</p>
            <span>4</span>
          </div>
          
          <div className="flex-none w-32">
            <img
              className="mt-2 bg-sky-400 w-32 h-32 rounded-xl"
              src=""
              alt="Imagen 3"
            />
            <p className="mt-2">dosfodsaof</p>
            <span>4</span>
          </div>
        </div>
      </section>
*/
