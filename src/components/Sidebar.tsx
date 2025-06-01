import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  CreditCard, 
  Wallet, 
  LineChart, 
  Settings, 
  PlusCircle,
  X
} from 'lucide-react';

interface SidebarProps {
  closeSidebar?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ closeSidebar }) => {
  const navigation = [
    { name: 'Dashboard', href: '/', icon: LayoutDashboard },
    { name: 'Accounts', href: '/accounts', icon: Wallet },
    { name: 'Transactions', href: '/transactions', icon: CreditCard },
    { name: 'Insights', href: '/insights', icon: LineChart },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  return (
    <div className="flex h-full flex-col border-r border-gray-200 bg-white">
      <div className="flex flex-shrink-0 items-center px-4 py-5">
        {closeSidebar && (
          <button
            type="button"
            className="md:hidden absolute right-4 top-4 text-gray-400 hover:text-gray-500"
            onClick={closeSidebar}
          >
            <X className="h-6 w-6" />
          </button>
        )}
        <div className="flex items-center">
          <div className="bg-primary-700 text-white p-2 rounded-md mr-2">
            <Wallet className="h-6 w-6" />
          </div>
          <span className="text-xl font-bold text-gray-900">FinanceTrack</span>
        </div>
      </div>
      
      <div className="mt-5 flex flex-grow flex-col">
        <nav className="flex-1 space-y-1 px-2">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                `${
                  isActive
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                } group flex items-center rounded-md px-3 py-2 text-sm font-medium`
              }
              end={item.href === '/'}
            >
              <item.icon
                className="mr-3 h-5 w-5 flex-shrink-0"
                aria-hidden="true"
              />
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
      
      <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
        <NavLink
          to="/connect"
          className="group flex w-full items-center justify-center rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700"
        >
          <PlusCircle className="mr-2 h-5 w-5" aria-hidden="true" />
          Connect Account
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;