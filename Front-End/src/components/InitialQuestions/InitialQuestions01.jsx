import React, { useState } from 'react';

const BenefitsSelection = () => {
  const [selectedBenefits, setSelectedBenefits] = useState([]);

  const benefits = [
    "Reducir el estrés",
    "Dormir mejor",
    "Reducir la ansiedad",
    "Sentir calma y tranquilidad",
    "Vivir más presente y consciente",
    "Aumentar la motivación y el enfoque",
    "Amor propio"
  ];

  const handleSelect = (benefit) => {
    if (selectedBenefits.includes(benefit)) {
      setSelectedBenefits(selectedBenefits.filter(b => b !== benefit));
    } else if (selectedBenefits.length < 3) {
      setSelectedBenefits([...selectedBenefits, benefit]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h2 className="text-lg font-semibold mb-4 text-center">¿Cuáles son los beneficios que buscas?</h2>
      <p className="text-sm text-muted-foreground mb-4 text-center">Escoge hasta 3. Esto nos ayuda a sugerirte contenido personalizado.</p>
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
      <button className="mt-6 w-full bg-[#48B390] text-white p-4 rounded-[20px] hover:bg-green-600 mx-2">
        Continuar
      </button>
    </div>
  );
};

export default BenefitsSelection;