import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Onboarding from "./components/onboarding/Onboarding";
import Login from "./components/Login/Login";
import Register from "./components/register/Register";
import User from "./view/User/User";
import Questionnaire from "./components/Questionnaire/QuestionNaire";
import { useState } from "react";
import Home from "./view/Home/Home";
import Music from "./view/Music/Music";
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
              <Questionnaire />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
        <Route path="/login" element={<Login onLogin={handleLogin} />}/>
        <Route path="/questions" element={<Questionnaire/>}/>
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />}/>
        <Route path="/explorer" element={<Explorer title="Categorias" items={category}/>}/>
        <Route path="/music" element={<Music/>}/>
        <Route path="/user" element={<User/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
