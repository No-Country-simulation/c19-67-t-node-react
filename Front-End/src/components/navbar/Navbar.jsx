import React, { useState, useEffect } from 'react';
import { House, Search, Music, UserCircle, Minus } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const MobileNavbar = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('home');
  const [iconPosition, setIconPosition] = useState(0);

  useEffect(() => {
    switch (location.pathname) {
      case '/home':
        setActiveTab('home');
        setIconPosition(0);
        break;
      case '/explorer':
        setActiveTab('search');
        setIconPosition(1);
        break;
      case '/music':
        setActiveTab('music');
        setIconPosition(2);
        break;
      case '/user':
        setActiveTab('user');
        setIconPosition(3);
        break;
      default:
        setActiveTab('home');
        setIconPosition(0);
        break;
    }
  }, [location]);

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white shadow-md md:hidden">
      <div className="absolute h-[0.5px] left-0 right-0 top-0"></div>

      <div className="relative flex justify-around p-2 pt-6">
        <button
          className={`flex flex-col items-center justify-center p-2 rounded-[10px] ${
            activeTab === 'home'
              ? 'bg-[#E5F5F0] text-[#48B390]'
              : 'text-black hover:bg-[#E5F5F0] hover:text-[#48B390]'
          }`}
        >
          <Link to="/home">
            <House size={24} />
            <span className="text-xs">Inicio</span>
          </Link>
        </button>

        <button
          className={`flex flex-col items-center justify-center p-2 rounded-[10px] ${
            activeTab === 'search'
              ? 'bg-[#E5F5F0] text-[#48B390]'
              : 'text-black hover:bg-[#E5F5F0] hover:text-[#48B390]'
          }`}
        >
          <Link to="/explorer">
            <Search size={24} className='ml-1'/>
            <span className="text-xs">Buscar</span>
          </Link>
        </button>

        <button
          className={`flex flex-col items-center justify-center p-2 rounded-[10px] ${
            activeTab === 'music'
              ? 'bg-[#E5F5F0] text-[#48B390]'
              : 'text-black hover:bg-[#E5F5F0] hover:text-[#48B390]'
          }`}
        >
          <Link to="/music">
            <Music size={24} className='ml-2' />
            <span className="text-xs">Musica</span>
          </Link>
        </button>

        <button
          className={`flex flex-col items-center justify-center p-2 rounded-[10px] ${
            activeTab === 'users'
              ? 'bg-[#E5F5F0] text-[#48B390]'
              : 'text-black hover:bg-[#E5F5F0] hover:text-[#48B390]'
          }`}
        >
          <Link to="/user">
            <UserCircle size={24} className='ml-2' />
            <span className="text-xs">Usuario</span>
          </Link>
        </button>
      </div>
    </nav>
  );
};

export default MobileNavbar;