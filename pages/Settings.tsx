import React from 'react';
import { Bell, Info, Mail, Moon, Globe, ChevronLeft } from 'lucide-react';

const Settings: React.FC = () => {
  const SettingItem = ({ icon: Icon, label, hasToggle = false, value = false }: any) => (
    <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between mb-3 hover:bg-gray-50 transition cursor-pointer">
        <div className="flex items-center gap-4">
            <div className="p-2 rounded-xl bg-teal-50 text-teal-600">
                <Icon size={20} />
            </div>
            <span className="font-medium text-gray-700">{label}</span>
        </div>
        {hasToggle ? (
            <div className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors ${value ? 'bg-primary' : 'bg-gray-300'}`}>
                <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${value ? 'translate-x-[-1.25rem]' : 'translate-x-0'}`}></div>
            </div>
        ) : (
             <ChevronLeft size={18} className="text-gray-400" />
        )}
    </div>
  );

  return (
    <div className="p-6 pt-10 pb-24 space-y-8">
      <div className="bg-gradient-to-r from-primary to-secondary p-6 rounded-b-3xl -mx-6 -mt-10 mb-8 pt-10 text-white shadow-lg">
        <h1 className="text-2xl font-bold mb-1">الإعدادات</h1>
        <p className="text-teal-50 text-sm">تحكم في تفضيلات التطبيق</p>
      </div>

      <div className="space-y-6">
        <div>
            <h3 className="text-gray-400 text-sm font-bold mb-3 px-2">عام</h3>
            <SettingItem icon={Bell} label="الإشعارات" hasToggle value={true} />
            <SettingItem icon={Moon} label="الوضع الليلي" hasToggle value={false} />
            <SettingItem icon={Globe} label="اللغة (العربية)" />
        </div>

        <div>
            <h3 className="text-gray-400 text-sm font-bold mb-3 px-2">الدعم</h3>
            <SettingItem icon={Info} label="عن التطبيق" />
            <SettingItem icon={Mail} label="المساعدة والاقتراحات" />
        </div>
      </div>
      
      <div className="flex justify-center mt-10">
        <div className="flex flex-col items-center gap-2 opacity-50">
            <div className="flex -space-x-2 space-x-reverse">
                <div className="w-2 h-2 rounded-full bg-teal-500 animate-bounce" style={{ animationDelay: '0s' }}></div>
                <div className="w-2 h-2 rounded-full bg-orange-500 animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
            <span className="text-xs font-bold text-gray-400">الإصدار 1.0.0</span>
        </div>
      </div>
    </div>
  );
};

export default Settings;
