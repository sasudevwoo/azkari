import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES } from '../constants';
import { Icon } from '../components/ui/Icon';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 pt-10 space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">أذكار الصباح والمساء</h1>
          <p className="text-gray-500 text-sm mt-1">تذكر ربك في كل وقت وحين</p>
        </div>
        <img 
            src="https://ui-avatars.com/api/?name=User&background=00BFA5&color=fff&rounded=true" 
            alt="Profile" 
            className="w-10 h-10 rounded-full shadow-sm"
        />
      </div>

      {/* Featured Banner (Optional aesthetic element) */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-secondary text-white p-6 shadow-lg shadow-teal-200">
        <div className="relative z-10">
           <h3 className="font-bold text-lg mb-2">حديث اليوم</h3>
           <p className="text-sm opacity-90 leading-relaxed font-amiri text-base">
             "مَثَلُ الَّذِي يَذْكُرُ رَبَّهُ وَالَّذِي لا يَذْكُرُ رَبَّهُ، مَثَلُ الحَيِّ وَالمَيِّتِ"
           </p>
        </div>
        {/* Background Decoration */}
        <div className="absolute -right-4 -bottom-8 opacity-20">
            <Icon name="Star" size={120} />
        </div>
      </div>

      {/* Categories Grid */}
      <div>
        <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-lg text-teal-800">الأقسام</h2>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => navigate(`/category/${cat.id}`)}
              className={`relative p-5 rounded-3xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group active:scale-95`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-3 bg-gradient-to-br ${cat.gradient} ${cat.color} shadow-sm group-hover:scale-110 transition-transform`}>
                <Icon name={cat.iconName} size={28} />
              </div>
              <h3 className="font-bold text-gray-800 text-base">{cat.titleAr}</h3>
              <span className="text-xs text-gray-400 mt-1">{cat.count} ذكر</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
