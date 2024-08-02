import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import progressImage01 from '../../assets/img/Barrasdeprogreso/progreso01.png';
import progressImage02 from '../../assets/img/Barrasdeprogreso/progreso02.png';
import progressImage03 from '../../assets/img/Barrasdeprogreso/progreso03.png';
import progressImage04 from '../../assets/img/Barrasdeprogreso/progreso04.png';

const Questionnaire = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedBenefits, setSelectedBenefits] = useState([]);

  const navigate = useNavigate();

  // Constants for each step's options
  const BENEFITS_OPTIONS = [
    "Reducir el estrés",
    "Dormir mejor",
    "Reducir la ansiedad",
    "Sentir calma y tranquilidad",
    "Vivir más presente y consciente",
    "Aumentar la motivación y el enfoque",
    "Amor propio"
  ];

  const CONTENT_OPTIONS = [
    "Meditaciones para dormir",
    "Sonidos relajantes",
    "Música para dormir",
    "Ejercicios y técnicas de respiración",
    "Meditaciones de consciencia plena",
    "Artículos sobre salud mental",
    "Sonidos para aumentar la concentración"
  ];

  const STRESS_OPTIONS = [
    "Meditaciones para dormir",
    "Pensamientos negativos",
    "Problemas para dormir",
    "Molestias en el cuerpo",
    "En mi alimentación",
    "Otro"
  ];

  const MEDITATION_OPTIONS = [
    "No, nunca",
    "Sí, algunas veces",
    "Sí, medito con frecuencia"
  ];

  const benefitsOptions = [BENEFITS_OPTIONS, CONTENT_OPTIONS, STRESS_OPTIONS, MEDITATION_OPTIONS];

  const handleSelect = (benefit) => {
    if (currentStep === 0) {
      // Limit selection to 3 options in Step 1
      if (selectedBenefits.includes(benefit)) {
        setSelectedBenefits(selectedBenefits.filter(b => b !== benefit));
      } else if (selectedBenefits.length < 2) {
        setSelectedBenefits([...selectedBenefits, benefit]);
      }
    } else if (currentStep === 3) {
      // Allow only one selection in Step 4
      setSelectedBenefits([benefit]);
    } else {
      // Allow multiple selections in Steps 2 and 3
      if (selectedBenefits.includes(benefit)) {
        setSelectedBenefits(selectedBenefits.filter(b => b !== benefit));
      } else {
        setSelectedBenefits([...selectedBenefits, benefit]);
      }
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

    // Determine if continue button should be disabled
    const isContinueDisabled = 
      (currentStep === 0 && (selectedBenefits.length < 1 || selectedBenefits.length > 3)) || 
      (currentStep === 1 && selectedBenefits.length < 1) || 
      (currentStep === 2 && selectedBenefits.length < 1);

    return (
      <div className="flex flex-col items-center justify-center p-4">
        {/* Image Section with Progress Bar */}
        {currentStep === 0 && (
          <div className="flex items-center justify-center mb-4 w-full">
            <img
              src={progressImage01}
              alt="progressImage01"
              className="w-1/2 h-auto"
            />
                          <span className="text-sm font-semibold absolute top-2 right-4"> 
          {currentStep + 1}/4
        </span>
          </div>
        )}
        {currentStep === 1 && (
          <div className="flex items-center justify-center mb-4 w-full">
            <img
              src={progressImage02}
              alt="progressImage02"
              className="w-1/2 h-auto"
            />
                          <span className="text-sm font-semibold absolute top-2 right-4"> 
          {currentStep + 1}/4
        </span>
          </div>
        )}
        {currentStep === 2 && (
          <div className="flex items-center justify-center mb-4 w-full">
            <img
              src={progressImage03}
              alt="progressImage03"
              className="w-1/2 h-auto"
            />
              <span className="text-sm font-semibold absolute top-2 right-4"> 
          {currentStep + 1}/4
        </span>
          </div>
        )}
        {currentStep === 3 && (
          <div className="flex items-center justify-center mb-4 w-full">
            <img
              src={progressImage04}
              alt="progressImage04"
              className="w-1/2 h-auto"
            />
                          <span className="text-sm font-semibold absolute top-2 right-4"> 
          {currentStep + 1}/4
        </span>
          </div>
        )}

        <h2 className="text-lg font-semibold mb-4 text-center">
          {currentStep === 0 && "¿Cuáles son los beneficios que buscas?"}
          {currentStep === 1 && "¿Qué tipo de contenido te gustaría ver?"}
          {currentStep === 2 && "¿Cómo suele manifestarse tu estrés y ansiedad?"}
          {currentStep === 3 && "¿Has probado la meditación antes?"}
        </h2>
        <p className="text-sm text-muted-foreground mb-4 text-center">
          {currentStep === 0 && "Escoge entre 1 y 3. Esto nos ayuda a sugerirte contenido personalizado."}
          {currentStep > 0 && "Elige las opciones que quieras."}
        </p>
        <div className="w-full max-w-md space-y-2">
          {currentBenefits.map((benefit, index) => (
            <div key={index} className="w-full">
              <button
                onClick={() => handleSelect(benefit)}
                className={`w-full p-4 rounded-[10px] text-center transition-colors duration-200 
                  ${selectedBenefits.includes(benefit) ? 'bg-[#3C85B7] text-white' : 'bg-[#E8F1F8] text-black'} 
                  ${currentStep === 3 && selectedBenefits[0] === benefit ? 'border-2 border-[#48B390]' : ''} 
                  mx-0 hover:bg-[#3C85B7] hover:text-white`}
              >
                {benefit}
              </button>
            </div>
          ))}
        </div>
        <button 
          onClick={handleContinue}
          className={`mt-6 w-full ${selectedBenefits.length > 0 ? 'bg-[#48B390]' : 'bg-[#B2E0D1]'} text-white p-4 rounded-[20px] mx-2`}
          disabled={isContinueDisabled}
        >
          {currentStep < benefitsOptions.length - 1 ? "Continuar" : "Finalizar"}
        </button>
      </div>
    );
  };

  return renderStep();
};

export default Questionnaire;