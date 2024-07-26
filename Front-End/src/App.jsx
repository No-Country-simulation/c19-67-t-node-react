import './App.css';
import MobileNavbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './view/Home/Home';



function App() {
  return (
    <BrowserRouter>
    <MobileNavbar/> 
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
