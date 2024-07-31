import './App.css';
import MobileNavbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Onboarding from './components/onboarding/Onboarding';
import Login from './components/login/Login';
import Register from './components/register/Register';
import { useState } from 'react';
import Home from './view/Home/Home';
import Questionnaire from './components/Questionnaire/QuestionNaire';

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
              <Questionnaire />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={
          <>
            <MobileNavbar />
            <Home />
          </>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;