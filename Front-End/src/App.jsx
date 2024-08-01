import "./App.css";
import MobileNavbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Onboarding from "./components/onboarding/Onboarding";
import Login from "./components/Login/Login";
import Register from "./components/register/Register";
import { useState } from "react";
import Home from "./view/Home/Home";
import Explorer from "./view/Explorer/Explorer";
import explorer from "./assets/img/Explorer/Explorer.jpg"
import explorer1 from "./assets/img/Explorer/explorer1.jpg"

const category = [
  { title: "Por objetivo", imgSrc: explorer },
  { title: "Por Tiempo", imgSrc: explorer1 },
  { title: "Lectura", imgSrc: explorer1 },
  { title: "Ver mas", imgSrc: explorer1 },
];

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
                <Home />
              </>
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />}/>
        <Route path="explorer" element={<Explorer title="Categorias" items={category}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
