// src/App.js
import './App.css';
import MobileNavbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Onboarding from './components/onboarding/Onboarding'; // Asegúrate de importar el componente Onboarding
import { useState } from 'react';

function App() {
  const [isOnboardingComplete, setIsOnboardingComplete] = useState(false);

  const handleOnboardingComplete = () => {
    setIsOnboardingComplete(true);
  };

  return (
    <BrowserRouter>
      {!isOnboardingComplete ? (
        <Onboarding onComplete={handleOnboardingComplete} />
      ) : (
        <>
          <MobileNavbar />
          <Routes>
            <Route path="/" element={<div>Home Page</div>} />
            {/* Puedes agregar más rutas aquí */}
          </Routes>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;