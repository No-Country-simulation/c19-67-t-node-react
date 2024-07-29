import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import onboardingImage1 from '../../assets/img/Onboarding/onboarding01.png';
import onboardingImage2 from '../../assets/img/Onboarding/onboarding02.png';
import onboardingImage3 from '../../assets/img/Onboarding/onboarding03.png';

const onboardingData = [
  {
    image: onboardingImage1,
    title: 'Te damos la bienvenida a QuietMind',
    text: 'Explora una amplia variedad de meditaciones guiadas diseñadas para ayudarte a relajarte, concentrarte y encontrar la paz interior',
  },
  {
    image: onboardingImage2,
    title: 'Registra y rastrea tu estado de ánimo',
    text: 'Lleva un registro diario de cómo te sientes. Puedes monitorear tus emociones para mejorar tu salud mental y emocional.',
  },
  {
    image: onboardingImage3,
    title: 'Desafíos y música relajante',
    text: 'Participa en desafíos que te motivarán a mantener una práctica constante y disfruta de nuestra selección de música relajante.',
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
    <div className="flex flex-col items-center justify-center h-screen bg-white relative px-4">
      <div className="rounded-lg p-4 w-full max-w-xs h-64 flex items-center justify-center bg-white">
        <img
          aria-hidden="true"
          alt={`Onboarding Step ${currentStep + 1}`}
          src={onboardingData[currentStep].image}
          className="w-full h-full object-cover"
        />
      </div>
      <h2 className="mt-4 text-lg font-semibold text-center">{onboardingData[currentStep].title}</h2>
      <p className="mt-2 text-center" style={{ marginTop: '10px' }}>{onboardingData[currentStep].text}</p>
      <div className="absolute bottom-4 left-4">
        {currentStep > 0 && (
          <button
            onClick={handleBack}
            className="flex items-center text-black hover:text-gray-700"
          >
            <ChevronLeft className="mr-1 text-black" />
          </button>
        )}
      </div>
      <div className="absolute top-4 right-4">
        {currentStep < onboardingData.length - 1 && (
          <button
            onClick={handleSkip}
            className="text-black hover:text-gray-700"
          >
            Omitir
          </button>
        )}
      </div>
      <div className="absolute bottom-4 right-4">
        {currentStep < onboardingData.length - 1 ? (
          <button
            onClick={handleNext}
            className="flex items-center justify-end text-black hover:text-gray-700"
          >
            <ChevronRight className="ml-1 text-black" />
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="bg-[#48B390] text-white px-4 py-2 rounded-[20px] hover:bg-opacity-80"
          >
            Ingresar
          </button>
        )}
      </div>
    </div>
  );
};

export default Onboarding;
