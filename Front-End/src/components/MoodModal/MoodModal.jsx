import React from "react";
import { ChevronLeft } from "lucide-react";
import feliz from "../../assets/emojis/feliz.svg"
import triste from "../../assets/emojis/triste.svg"
import molesto from "../../assets/emojis/molesto.svg"
import alegre from "../../assets/emojis/alegre.svg"
import pensativo from "../../assets/emojis/pensativo.svg"
import ansioso from "../../assets/emojis/ansioso.svg"
import cansado  from "../../assets/emojis/cansado.svg"
import angustiado  from "../../assets/emojis/angustiado.svg"
import estresado  from "../../assets/emojis/estresado.svg"
import desmotivado  from "../../assets/emojis/desmotivado.svg"
import enojado  from "../../assets/emojis/enojado.svg"
import motivado  from "../../assets/emojis/motivado.svg"
import relajado  from "../../assets/emojis/relajado.svg"
import agradecido  from "../../assets/emojis/agradecido.svg"
import solo from "../../assets/emojis/solo.svg"
import asustado  from "../../assets/emojis/asustado.svg"



const MoodModal = ({ closeModal }) => {
  const moods = [
    { mood: "Feliz", emoji: feliz },
    { mood: "Triste", emoji: triste },
    { mood: "Molesto(a)", emoji: molesto },
    { mood: "Alegre", emoji: alegre },
    { mood: "Pensativo(a)", emoji: pensativo },
    { mood: "Ansioso(a)", emoji: ansioso },
    { mood: "Cansado(a)", emoji: cansado },
    { mood: "Angustiado(a)", emoji: angustiado },
    { mood: "Estresado(a)", emoji: estresado },
    { mood: "Desmotivado(a)", emoji: desmotivado },
    { mood: "Enojado(a)", emoji: enojado },
    { mood: "Motivado(a)", emoji: motivado },
    { mood: "Relajado(a)", emoji: relajado },
    { mood: "Agradecido(a)", emoji: agradecido },
    { mood: "Solo(a)", emoji: solo },
    { mood: "Asustado(a)", emoji: asustado },
  ];

  return (
    <div className="fixed inset-0 flex items-end bg-black bg-opacity-50">
      <div className="bg-white rounded-xl p-4 w-full h-[84%]">
        <div className="flex">
          <ChevronLeft color="#373737" size={32} className=" mr-1" onClick={closeModal} />
          <h2 className="text-center text-2xl font-manrope font-medium mb-4 text-[#373737]">
            ¿Cómo te sientes hoy?
          </h2>
        </div>
        <p className="text-[#707070] font-manrope text-base">
          Registra cómo te sientes y encuentra las mejores herramientas para
          este momento.
        </p>
        <div className="grid grid-cols-4 gap-4 mt-2">
          {moods.map(({ mood, emoji }) => (
            <button
              key={mood}
              className="p-2 border rounded-lg flex flex-col items-center bg-[#E8F1F8] text-xs font-manrope"
            >
              <img src={emoji} alt={mood} className="w-6 h-6 mb-2" />
              {mood}
            </button>
          ))}
        </div>
        <button className="w-full py-2 bg-[#48B390] font-manrope text-white rounded-full mt-12">
            Ver registro
        </button>
      </div>
    </div>
  );
};

export default MoodModal;
