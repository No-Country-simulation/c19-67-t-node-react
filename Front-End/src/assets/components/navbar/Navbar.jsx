import React, { useState } from 'react';
import { House, Music, Users, Search } from 'lucide-react';

const MobileNavbar = () => {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white shadow-lg md:hidden">
      <div className="flex justify-around p-2">
        <button
          className={`flex flex-col items-center justify-center ${
            activeTab === 'home' ? 'text-blue-500' : 'text-gray-500'
          }`}
          onClick={() => handleTabClick('home')}
        >
          <House size={24} />
          <span className="text-xs">Home</span>
        </button>

        <button
          className={`flex flex-col items-center justify-center ${
            activeTab === 'music' ? 'text-blue-500' : 'text-gray-500'
          }`}
          onClick={() => handleTabClick('music')}
        >
          <Music size={24} />
          <span className="text-xs">Music</span>
        </button>

        <button
          className={`flex flex-col items-center justify-center ${
            activeTab === 'users' ? 'text-blue-500' : 'text-gray-500'
          }`}
          onClick={() => handleTabClick('users')}
        >
          <Users size={24} />
          <span className="text-xs">Users</span>
        </button>

        <button
          className={`flex flex-col items-center justify-center ${
            activeTab === 'search' ? 'text-blue-500' : 'text-gray-500'
          }`}
          onClick={() => handleTabClick('search')}
        >
          <Search size={24} />
          <span className="text-xs">Search</span>
        </button>
      </div>
    </nav>
  );
};

export default MobileNavbar;