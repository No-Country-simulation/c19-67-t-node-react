import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Questionnaire = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedBenefits, setSelectedBenefits] = useState([]);

  const navigate = useNavigate();

  const benefitsOptions = [
    // Step 1 Benefits Selection
    [
      "Reducir el estrés",
      "Dormir mejor",
      "Reducir la ansiedad",
      "Sentir calma y tranquilidad",
      "Vivir más presente y consciente",
      "Aumentar la motivación y el enfoque",
      "Amor propio"
    ],
    // Step 2 Initial Questions
    [
      "Meditaciones para dormir",
      "Sonidos relajantes",
      "Música para dormir",
      "Ejercicios y técnicas de respiración",
      "Meditaciones de consciencia plena",
      "Artículos sobre salud mental",
      "Sonidos para aumentar la concentración"
    ],
    // Step 3 Additional Questions
    [
      "Meditaciones para dormir",
      "Pensamientos negativos",
      "Problemas para dormir",
      "Molestias en el cuerpo",
      "En mi alimentación",
      "Otro"
    ],
    // Step 4 Final Questions
    [
      "No, nunca",
      "Sí, algunas veces",
      "Sí, medito con frecuencia"
    ]
  ];

  const handleSelect = (benefit) => {
    if (selectedBenefits.includes(benefit)) {
      setSelectedBenefits(selectedBenefits.filter(b => b !== benefit));
    } else if (selectedBenefits.length < 3) {
      setSelectedBenefits([...selectedBenefits, benefit]);
    }
  };

  const handleContinue = () => {
    if (currentStep < benefitsOptions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate('/home', { state: { selectedBenefits } });
    }
  };

  const renderStep = () => {
    const currentBenefits = benefitsOptions[currentStep];
    return (
      <div className="flex flex-col items-center justify-center p-4">
        <h2 className="text-lg font-semibold mb-4 text-center">
          {currentStep === 0 && "¿Cuáles son los beneficios que buscas?"}
          {currentStep === 1 && "¿Qué tipo de contenido te gustaría ver?"}
          {currentStep === 2 && "¿Cómo suele manifestarse tu estrés y ansiedad?"}
          {currentStep === 3 && "¿Has probado la meditación antes?"}
        </h2>
        <p className="text-sm text-muted-foreground mb-4 text-center">
          {currentStep === 0 && "Escoge hasta 3. Esto nos ayuda a sugerirte contenido personalizado."}
          {currentStep === 1 && "Elige las opciones que quieras."}
          {currentStep === 2 && "Elige las opciones que quieras."}
          {currentStep === 3 && "Adaptaremos nuestras recomendaciones a tu nivel de experiencia."}
        </p>
        <div className="w-full max-w-md space-y-2">
          {currentBenefits.map((benefit, index) => (
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
        <button 
          onClick={handleContinue}
          className="mt-6 w-full bg-[#48B390] text-white p-4 rounded-[20px] hover:bg-green-600 mx-2"
        >
          {currentStep < benefitsOptions.length - 1 ? "Continuar" : "Finalizar"}
        </button>
      </div>
    );
  };

  return renderStep();
};

export default Questionnaire;