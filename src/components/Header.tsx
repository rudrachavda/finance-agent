import React from 'react';
import { Menu, Bell, Search, MenuIcon } from 'lucide-react';

interface HeaderProps {
  openSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ openSidebar }) => {
  return (
    <header className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow-sm">
      <div className="flex flex-1 items-center justify-between px-4 md:px-6">
        <div className="flex items-center md:hidden">
          <button
            type="button"
            className="text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            onClick={openSidebar}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>
        
        <div className="flex flex-1 items-center justify-between">
          <div className="relative max-w-xs flex-1">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
              placeholder="Search transactions..."
            />
          </div>
          
          <div className="ml-4 flex items-center space-x-4">
            <button
              type="button"
              className="flex rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              <span className="sr-only">View notifications</span>
              <Bell className="h-6 w-6" />
            </button>
            
            <div className="relative">
              <button
                type="button"
                className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                <span className="sr-only">Open user menu</span>
                <div className="h-8 w-8 rounded-full bg-primary-700 flex items-center justify-center text-white font-medium">
                  JD
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;