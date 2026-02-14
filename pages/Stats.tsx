import React from 'react';
import { MOCK_STATS } from '../constants';
import { BarChart, Bar, ResponsiveContainer, XAxis, Cell } from 'recharts';

const Stats: React.FC = () => {
  return (
    <div className="p-6 pt-10 space-y-6 pb-24">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">محصلة اليوم</h1>

      {/* Main Circle Card */}
      <div className="bg-gradient-to-r from-teal-500 to-emerald-500 rounded-3xl p-6 text-white shadow-xl shadow-teal-200/50 flex items-center justify-between relative overflow-hidden">
        <div className="relative z-10 w-2/3">
            <h2 className="text-xl font-bold mb-2">أنت من الذاكرين</h2>
            <p className="text-sm text-teal-50 opacity-90 leading-relaxed">
                لقد استثمرت ساعة من اليوم لذكر الله. بارك الله فيك.
            </p>
        </div>
        <div className="relative z-10">
            <div className="w-20 h-20 rounded-full border-4 border-white/30 flex items-center justify-center">
                <span className="text-2xl font-bold">{MOCK_STATS.currentProgress}%</span>
            </div>
        </div>
        {/* Decorative Circles */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/10 rounded-full"></div>
        <div className="absolute bottom-0 right-10 w-16 h-16 bg-white/10 rounded-full"></div>
      </div>

      {/* Daily Details Grid */}
      <div>
        <h3 className="text-lg font-bold text-gray-800 mb-4">تفاصيل اليوم</h3>
        <div className="grid grid-cols-3 gap-3">
            {[
                { label: 'أذكار الصباح', val: 100, color: 'text-amber-500', stroke: '#F59E0B' },
                { label: 'أذكار المساء', val: 55, color: 'text-indigo-500', stroke: '#6366F1' },
                { label: 'أذكار النوم', val: 20, color: 'text-slate-500', stroke: '#64748B' }
            ].map((stat, i) => (
                <div key={i} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center justify-center gap-2">
                    <div className="relative w-12 h-12 flex items-center justify-center">
                         <svg className="w-full h-full transform -rotate-90">
                            <circle cx="24" cy="24" r="20" stroke="#F1F5F9" strokeWidth="4" fill="none" />
                            <circle cx="24" cy="24" r="20" stroke={stat.stroke} strokeWidth="4" fill="none" strokeDasharray="125" strokeDashoffset={125 - (125 * stat.val) / 100} strokeLinecap="round" />
                        </svg>
                        <span className="absolute text-xs font-bold text-gray-700">{stat.val}%</span>
                    </div>
                    <span className="text-[10px] text-gray-500 font-medium">{stat.label}</span>
                </div>
            ))}
        </div>
      </div>

      {/* Weekly Chart */}
      <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
         <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-gray-800">محصلة الأسبوع</h3>
            <select className="bg-gray-50 border-none text-xs rounded-lg p-2 outline-none text-gray-500">
                <option>اسبوع</option>
                <option>شهر</option>
            </select>
         </div>
         
         <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={MOCK_STATS.weeklyData}>
                    <XAxis 
                        dataKey="day" 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{fill: '#9CA3AF', fontSize: 10}}
                        interval={0}
                    />
                    <Bar dataKey="count" radius={[4, 4, 4, 4]} barSize={8}>
                        {MOCK_STATS.weeklyData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.count > 80 ? '#10B981' : entry.count > 40 ? '#FBBF24' : '#F87171'} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
         </div>
      </div>
    </div>
  );
};

export default Stats;
