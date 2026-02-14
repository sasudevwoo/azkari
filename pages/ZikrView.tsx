import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { X, RotateCcw, Check, Share2 } from 'lucide-react';
import { MOCK_AZKAR, CATEGORIES } from '../constants';

const ZikrView: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const zikr = MOCK_AZKAR.find(z => z.id === Number(id));
  const category = zikr ? CATEGORIES.find(c => c.id === zikr.categoryId) : null;
  
  const [count, setCount] = useState(0);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (zikr && count >= zikr.targetCount) {
        setCompleted(true);
        // Haptic feedback if available
        if (navigator.vibrate) navigator.vibrate(50);
    }
  }, [count, zikr]);

  if (!zikr || !category) return <div>Zikr not found</div>;

  const handleTap = () => {
    if (count < zikr.targetCount) {
        setCount(c => c + 1);
    }
  };

  const reset = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCount(0);
    setCompleted(false);
  };

  const progress = Math.min((count / zikr.targetCount) * 100, 100);

  return (
    <div className="h-screen flex flex-col bg-white" onClick={handleTap}>
      {/* Top Bar */}
      <div className="px-6 pt-10 pb-4 flex justify-between items-center z-20 bg-white/80 backdrop-blur-sm sticky top-0">
        <button onClick={(e) => { e.stopPropagation(); navigate(-1); }} className="p-2 rounded-full bg-gray-100 text-gray-600">
            <X size={24} />
        </button>
        <span className="font-bold text-gray-500">{category.titleAr}</span>
        <button onClick={(e) => { e.stopPropagation(); }} className="p-2 rounded-full bg-gray-100 text-gray-600">
            <Share2 size={20} />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 pb-10 relative overflow-hidden">
         {/* Background Decoration */}
         <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-gradient-to-b ${category.gradient} rounded-full blur-3xl opacity-30 -z-10`}></div>

         <div className="w-full text-center space-y-6">
            <h2 className={`text-2xl md:text-3xl font-amiri leading-[2.2] text-gray-800 ${completed ? 'text-emerald-600' : ''} transition-colors duration-500`}>
                {zikr.textAr}
            </h2>
            {zikr.textFr && (
                <p className="text-gray-500 text-sm italic">{zikr.textFr}</p>
            )}
            <p className="text-xs text-primary font-bold tracking-wide uppercase">{zikr.reference}</p>
         </div>
      </div>

      {/* Footer / Controls */}
      <div className="pb-12 px-8 flex flex-col items-center gap-6 z-20">
        
        {/* Progress Circle / Counter */}
        <div className="relative w-24 h-24 flex items-center justify-center">
            {/* SVG Ring */}
            <svg className="w-full h-full transform -rotate-90">
                <circle
                    cx="48" cy="48" r="44"
                    stroke="#F3F4F6" strokeWidth="8" fill="none"
                />
                <circle
                    cx="48" cy="48" r="44"
                    stroke={completed ? "#10B981" : "#00BFA5"} strokeWidth="8" fill="none"
                    strokeDasharray="276"
                    strokeDashoffset={276 - (276 * progress) / 100}
                    strokeLinecap="round"
                    className="transition-all duration-300 ease-out"
                />
            </svg>
            
            <div className="absolute inset-0 flex items-center justify-center flex-col">
                {completed ? (
                    <Check className="text-emerald-500 animate-bounce" size={32} />
                ) : (
                    <>
                        <span className="text-3xl font-bold text-gray-800 select-none">{count}</span>
                        <span className="text-[10px] text-gray-400 select-none">/{zikr.targetCount}</span>
                    </>
                )}
            </div>
        </div>

        <div className="flex gap-4">
            <button 
                onClick={reset}
                className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-600 rounded-full font-bold text-sm hover:bg-gray-200 transition"
            >
                <RotateCcw size={16} />
                إعادة
            </button>
        </div>
        
        <p className="text-xs text-gray-400 animate-pulse">اضغط في أي مكان للعد</p>
      </div>
    </div>
  );
};

export default ZikrView;
