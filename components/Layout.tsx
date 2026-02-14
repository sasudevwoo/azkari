import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Home, BarChart2, Settings } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: 'stats', label: 'إحصائيات', icon: BarChart2, path: '/stats' },
    { id: 'home', label: 'الرئيسية', icon: Home, path: '/' },
    { id: 'settings', label: 'الإعدادات', icon: Settings, path: '/settings' },
  ];

  // Hide bottom nav on Zikr detail view for immersion
  const isZikrView = location.pathname.startsWith('/zikr/');

  return (
    <div className="flex flex-col h-screen bg-gray-50 text-gray-800 font-cairo overflow-hidden max-w-md mx-auto shadow-2xl relative">
      {/* Main Content Area */}
      <main className={`flex-1 overflow-y-auto no-scrollbar pb-20`}>
        {children}
      </main>

      {/* Bottom Navigation */}
      {!isZikrView && (
        <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-3 flex justify-between items-center rounded-t-3xl shadow-lg z-50">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const IconComp = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => navigate(item.path)}
                className={`flex flex-col items-center gap-1 transition-all duration-300 ${
                  isActive ? 'text-primary transform -translate-y-1' : 'text-gray-400'
                }`}
              >
                <div className={`p-2 rounded-full ${isActive ? 'bg-teal-50 shadow-sm' : ''}`}>
                  <IconComp size={isActive ? 24 : 22} strokeWidth={isActive ? 2.5 : 2} />
                </div>
                {/* Optional label if needed, usually cleaner without on mobile or small text */}
                {/* <span className="text-[10px] font-medium">{item.label}</span> */}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Layout;
