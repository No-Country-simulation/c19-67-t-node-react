import React, { useState } from 'react';
import { House, Search, Music, UserCircle } from 'lucide-react';

const MobileNavbar = () => {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white shadow-md md:hidden">
      <div className="absolute h-[0.5px] bg-black left-0 right-0 top-0"></div>

      <div className="relative flex justify-around p-2 pt-6">
        <button
          className={`flex flex-col items-center justify-center p-2 rounded-[10px] ${
            activeTab === 'home'
              ? 'bg-green-200 text-green-800'
              : 'text-black hover:bg-green-200 hover:text-green-800'
          }`}
          onClick={() => handleTabClick('home')}
        >
          <House size={24} />
          <span className="text-xs">Home</span>
        </button>

        <button
          className={`flex flex-col items-center justify-center p-2 rounded-[10px] ${
            activeTab === 'search'
              ? 'bg-green-200 text-green-800'
              : 'text-black hover:bg-green-200 hover:text-green-800'
          }`}
          onClick={() => handleTabClick('search')}
        >
          <Search size={24} />
          <span className="text-xs">Explorador</span>
        </button>

        <button
          className={`flex flex-col items-center justify-center p-2 rounded-[10px] ${
            activeTab === 'music'
              ? 'bg-green-200 text-green-800'
              : 'text-black hover:bg-green-200 hover:text-green-800'
          }`}
          onClick={() => handleTabClick('music')}
        >
          <Music size={24} />
          <span className="text-xs">Música</span>
        </button>

        <button
          className={`flex flex-col items-center justify-center p-2 rounded-[10px] ${
            activeTab === 'users'
              ? 'bg-green-200 text-green-800'
              : 'text-black hover:bg-green-200 hover:text-green-800'
          }`}
          onClick={() => handleTabClick('users')}
        >
          <UserCircle size={24} />
          <span className="text-xs">Mi perfil</span>
        </button>
      </div>
    </nav>
  );
};

export default MobileNavbar;