import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdditionalQuestions = () => {
  const [selectedBenefits, setSelectedBenefits] = useState([]);
  const navigate = useNavigate();

  const benefits = [
    "Meditaciones para dormir",
    "Pensamientos negativos",
    "Problemas para dormir",
    "Molestias en el cuerpo",
    "En mi alimentación",
    "Otro"
  ];

  const handleSelect = (benefit) => {
    if (selectedBenefits.includes(benefit)) {
      setSelectedBenefits(selectedBenefits.filter(b => b !== benefit));
    } else if (selectedBenefits.length < 3) {
      setSelectedBenefits([...selectedBenefits, benefit]);
    }
  };

  const handleContinue = () => {
    navigate('/new-screen', { state: { selectedBenefits } });
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h2 className="text-lg font-semibold mb-4 text-center">¿Cómo suele manifestarse tu estrés y ansiedad?</h2>
      <p className="text-sm text-muted-foreground mb-4 text-center">Elige las opciones que quieras.</p>
      <div className="w-full max-w-md space-y-2">
        {benefits.map((benefit, index) => (
          <div key={index} className="w-full">
            <button
              onClick={() => handleSelect(benefit)}
              className={`w-full p-4 rounded-[10px] text-center transition-colors duration-200 
                bg-[#E8F1F8] mx-0 
                ${selectedBenefits.includes(benefit) ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`}
            >
              {benefit}
            </button>
          </div>
        ))}
      </div>
      <button className="mt-6 w-full bg-[#48B390] text-white p-4 rounded-[20px] hover:bg-green-600 mx-2" onClick={handleContinue}>
        Continuar
      </button>
    </div>
  );
};

export default AdditionalQuestions;