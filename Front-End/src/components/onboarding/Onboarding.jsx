import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const onboardingData = [
  {
    image: 'https://placehold.co/400x400',
    text: 'Bienvenido a nuestra aplicación. Aquí puedes hacer muchas cosas increíbles.',
  },
  {
    image: 'https://placehold.co/400x400',
    text: 'Explora nuestras características y descubre lo que tenemos para ofrecer.',
  },
  {
    image: 'https://placehold.co/400x400',
    text: '¡Comienza ahora y disfruta de la experiencia!',
  },
];

const Onboarding = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < onboardingData.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    onComplete();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 relative px-4">
      <div className="border-2 border-blue-500 rounded-lg p-4 w-full max-w-xs h-64 flex items-center justify-center bg-zinc-200">
        <img
          aria-hidden="true"
          alt="Onboarding"
          src={onboardingData[currentStep].image}
          className="w-full h-full object-cover"
        />
      </div>
      <h2 className="mt-4 text-lg font-semibold text-center">{onboardingData[currentStep].text}</h2>
      <div className="absolute bottom-4 left-4">
        {currentStep > 0 && (
          <button
            onClick={handleBack}
            className="flex items-center text-blue-500 hover:text-blue-700"
          >
            <ChevronLeft className="mr-1" />
          </button>
        )}
      </div>
      <div className="absolute top-4 right-4">
        <button
          onClick={handleSkip}
          className="text-black"
        >
          Omitir
        </button>
      </div>
      <div className="absolute bottom-4 right-4">
        <button
          onClick={handleNext}
          className="flex items-center justify-end text-blue-500 hover:text-blue-700"
        >
          <ChevronRight className="ml-1" />
        </button>
      </div>
    </div>
  );
};

export default Onboarding;
