import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { CATEGORIES, MOCK_AZKAR } from '../constants';
import { Icon } from '../components/ui/Icon';

const CategoryDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const category = CATEGORIES.find(c => c.id === Number(id));
  const azkar = MOCK_AZKAR.filter(z => z.categoryId === Number(id));

  if (!category) return <div>Category not found</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Custom Header */}
      <div className={`bg-gradient-to-br ${category.gradient} pt-12 pb-8 px-6 rounded-b-[40px] shadow-sm`}>
        <div className="flex items-center justify-between mb-6">
          <button onClick={() => navigate(-1)} className="p-2 bg-white/50 backdrop-blur rounded-xl hover:bg-white/70 transition">
            <ArrowRight className={`${category.color}`} size={24} />
          </button>
          <h1 className={`text-2xl font-bold ${category.color}`}>{category.titleAr}</h1>
          <div className="w-10"></div> {/* Spacer for centering */}
        </div>
        
        <div className="flex justify-center">
            <div className={`p-4 bg-white/60 backdrop-blur-md rounded-full ${category.color}`}>
                <Icon name={category.iconName} size={40} />
            </div>
        </div>
      </div>

      {/* List */}
      <div className="px-5 -mt-6 space-y-4 pb-24">
        {azkar.length === 0 ? (
            <div className="text-center py-10 text-gray-400">لا توجد أذكار في هذا القسم حالياً</div>
        ) : (
            azkar.map((zikr, index) => (
            <div 
                key={zikr.id}
                onClick={() => navigate(`/zikr/${zikr.id}`)}
                className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer flex items-start justify-between gap-4 group"
            >
                <div className="flex-1">
                <p className="font-amiri text-lg text-gray-800 leading-loose line-clamp-2">
                    {zikr.textAr}
                </p>
                <div className="flex items-center gap-2 mt-3 text-xs text-gray-400 font-medium">
                    <span className="bg-gray-100 px-2 py-1 rounded-lg">التكرار: {zikr.targetCount}</span>
                    {zikr.reference && <span>• {zikr.reference}</span>}
                </div>
                </div>
                <div className={`w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 group-hover:${category.color.replace('text', 'bg')}/10 transition-colors`}>
                    <span className={`text-sm font-bold text-gray-400 group-hover:${category.color}`}>{index + 1}</span>
                </div>
            </div>
            ))
        )}
      </div>
    </div>
  );
};

export default CategoryDetails;
