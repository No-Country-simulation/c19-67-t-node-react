import React, { useState } from 'react';
import { House, Search, Music, UserCircle, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

const MobileNavbar = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [iconPosition, setIconPosition] = useState(0);

  const handleTabClick = (tab, index) => {
    setActiveTab(tab);
    setIconPosition(index); // Actualiza la posición del icono
  };

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white shadow-md md:hidden">
      <div className="absolute h-[0.5px]  left-0 right-0 top-0"></div>
      <div
        className={`absolute transition-transform duration-300`} 
        style={{ left: `calc(60px + ${iconPosition * 25}%)`, top: '-10px', transform: 'translateX(-50%)' }} 
      >
        <Minus size={24} className="mr-3 text-green-700" style={{ strokeWidth: 2 }} /> 
      </div>

      <div className="relative flex justify-around p-2 pt-6">
        <button
          className={`flex flex-col items-center justify-center p-2 rounded-[10px] ${
            activeTab === 'home'
              ? 'bg-green-200 text-green-800'
              : 'text-black hover:bg-green-200 hover:text-green-800'
          }`}
          onClick={() => handleTabClick('home', 0)}
        >
          <Link to="/home">
          <House size={24} />
          <span className="text-xs">Home</span>
          </Link>
        </button>

        <button
          className={`flex flex-col items-center justify-center p-2 rounded-[10px] ${
            activeTab === 'search'
              ? 'bg-green-200 text-green-800'
              : 'text-black hover:bg-green-200 hover:text-green-800'
          }`}
          onClick={() => handleTabClick('search', 1)}
        >
          <Search size={24} />
          <span className="text-xs">Search</span>
        </button>

        <button
          className={`flex flex-col items-center justify-center p-2 rounded-[10px] ${
            activeTab === 'music'
              ? 'bg-green-200 text-green-800'
              : 'text-black hover:bg-green-200 hover:text-green-800'
          }`}
          onClick={() => handleTabClick('music', 2)}
        >
          <Music size={24} />
          <span className="text-xs">Music</span>
        </button>

        <button
          className={`flex flex-col items-center justify-center p-2 rounded-[10px] ${
            activeTab === 'users'
              ? 'bg-green-200 text-green-800'
              : 'text-black hover:bg-green-200 hover:text-green-800'
          }`}
          onClick={() => handleTabClick('users', 3)}
        >
          <UserCircle size={24} />
          <span className="text-xs">Users</span>
        </button>
      </div>
    </nav>
  );
};

export default MobileNavbar;