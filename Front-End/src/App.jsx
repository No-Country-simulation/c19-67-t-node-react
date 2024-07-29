// src/App.js
import './App.css';
import MobileNavbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Onboarding from './components/onboarding/Onboarding';
import Login from './components/login/Login';
import Register from './components/registro/Register'; // Importar el componente Register
import { useState } from 'react';

function App() {
  const [isOnboardingComplete, setIsOnboardingComplete] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleOnboardingComplete = () => {
    setIsOnboardingComplete(true);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            !isOnboardingComplete ? (
              <Onboarding onComplete={handleOnboardingComplete} />
            ) : isLoggedIn ? (
              <>
                <MobileNavbar />
                <div>Home Page</div> {/* Aquí puedes agregar el contenido de la página principal */}
              </>
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} /> {/* Ruta para el componente Register */}
        {/* Puedes agregar más rutas aquí */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;