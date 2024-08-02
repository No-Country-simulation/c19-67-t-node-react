import React from "react";
import { Link } from "react-router-dom";
import user1 from "../../assets/img/User/user1.jpg";
import { Moon, Bell,Earth, NotebookPen, ChartLine, Heart, ChevronLeft, SquarePen } from 'lucide-react';
import MobileNavbar from "../../components/navbar/Navbar";

const User = () => {
  return (
    <div className="pb-24">
      <div className="flex items-center mt-4">
        <Link to="/home">
        <ChevronLeft color="#373737" size={32} />
        </Link>
        <h1 className="ml-2 font-manrope text-2xl font-medium text-[#373737]">
          Mi perfil
        </h1>
      </div>

      <div className="flex mt-7 ml-6">
        <img src={user1} alt="" className="rounded-full w-20 h-20" />
        <div className="mt-4 ml-4">
          <p className="font-manrope font-semibold text-[#373737]">
            Juan Sànchez
          </p>
          <span className="text-xs text-[#8D8D8D] font-manrope">
            Te uniste en Julio 2024
          </span>
        </div>
      </div>
      <section className="mt-8">
        <div>
          <h1 className="ml-4 text-xl font-manrope font-medium text-[#373737]">Ajustes</h1>
          <hr className="border-[#C6C6C6] ml-4 mt-3 mr-4" />
          <ul className="flex flex-col gap-1 mx-4">
            <li className="flex mt-4  items-center">
              <span className="bg-[#EAE8F3] px-1 py-1 rounded-xl">
                <SquarePen color="#6E5BAA" size={30} />
              </span>
              <p className="ml-2 font-manrope font-medium">Editar Perfil</p>
            </li>
            <hr className="border-[#C6C6C6]" />
            <li className="flex items-center">
              <span className="bg-[#EAE8F3] px-1 py-1 rounded-xl">
                <Heart color="#6E5BAA" size={30} />
              </span>
              <p className="ml-2 font-manrope font-medium">Favoritos</p>
            </li>
            <hr className="border-[#C6C6C6]" />
            <li className="flex items-center">
              <span className="bg-[#EAE8F3] px-1 py-1 rounded-xl">
                <ChartLine color="#6E5BAA" size={30} />
              </span>
              <p className="ml-2 font-manrope font-medium">
                Seguimiento de Progreso
              </p>
            </li>
            <hr className="border-[#C6C6C6]" />
            <li className="flex items-center">
              <span className="bg-[#EAE8F3] px-1 py-1 rounded-xl">
                <NotebookPen color="#6E5BAA" size={30} />
              </span>
              <p className="ml-2 font-manrope font-medium">Bloc de Notas</p>
            </li>
            <hr className="border-[#C6C6C6]" />
          </ul>
        </div>

        <div className="mt-8">
          <h1 className="ml-4 text-xl font-manrope font-medium text-[#373737]">Preferencias</h1>
          <hr className="border-[#C6C6C6] ml-4 mt-3 mr-4" />
          <ul className="flex flex-col gap-1 mx-4">
            <li className="flex mt-4  items-center">
              <span className="bg-[#E8F1F8] px-1 py-1 rounded-xl">
                <Bell color="#3C85B7" size={30} />
              </span>
              <p className="ml-2 font-manrope font-medium">Configurar Notificaciones</p>
            </li>
            <hr className="border-[#C6C6C6]" />
            <li className="flex items-center">
              <span className="bg-[#EAE8F3] px-1 py-1 rounded-xl">
                <Moon color="#3C85B7" size={30} />
              </span>
              <p className="ml-2 font-manrope font-medium">Modo Nocturno</p>
            </li>
            <hr className="border-[#C6C6C6]" />
            <li className="flex items-center">
              <span className="bg-[#EAE8F3] px-1 py-1 rounded-xl">
                <Earth color="#3C85B7" size={30} />
              </span>
              <p className="ml-2 font-manrope font-medium">
                Idioma
              </p>
            </li>
          </ul>
        </div>
      </section>
      <MobileNavbar/>
    </div>
  );
};

export default User;
