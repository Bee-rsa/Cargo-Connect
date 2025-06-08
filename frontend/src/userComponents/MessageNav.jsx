import { Link, useLocation } from 'react-router-dom';
import { FiHome, FiMessageCircle, FiCheckSquare, FiHelpCircle } from 'react-icons/fi';

const MobileBottomNav = () => {
  const location = useLocation();

  // List of nav items with label, path, and icon component
  const navItems = [
    { label: 'Home', path: '/user-home', icon: FiHome },
    { label: 'Messages', path: '/message-chat', icon: FiMessageCircle },
    { label: 'Tasks', path: '/tasks', icon: FiCheckSquare },
    { label: 'Help', path: '/help-center', icon: FiHelpCircle },
  ];

  return (
    <nav className="fixed bottom-0 font-poppins left-0 right-0 bg-white border-t border-gray-300 block sm:hidden z-50">
      <div className="flex justify-between max-w-md mx-auto">
        {navItems.map(({ label, path, icon: Icon }) => {
          const isActive = location.pathname === path;
          return (
            <Link
              key={label}
              to={path}
              className={`flex-1 flex flex-col items-center py-2 text-xs font-medium ${
                isActive ? 'text-blue-600 font-bold' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <Icon className="mb-1 w-6 h-6" />
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileBottomNav;
