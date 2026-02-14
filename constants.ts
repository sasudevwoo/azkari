import { Category, Zikr, UserStats } from './types';
import { Sun, Moon, CloudMoon, Heart, Star, Shield, Coffee } from 'lucide-react';

export const CATEGORIES: Category[] = [
  {
    id: 1,
    titleAr: 'أذكار الصباح',
    titleFr: 'Azkar du Matin',
    iconName: 'Sun',
    count: 25,
    color: 'text-amber-500',
    gradient: 'from-amber-100 to-amber-50'
  },
  {
    id: 2,
    titleAr: 'أذكار المساء',
    titleFr: 'Azkar du Soir',
    iconName: 'Moon',
    count: 25,
    color: 'text-indigo-600',
    gradient: 'from-indigo-100 to-indigo-50'
  },
  {
    id: 3,
    titleAr: 'أذكار النوم',
    titleFr: 'Avant de dormir',
    iconName: 'CloudMoon',
    count: 12,
    color: 'text-slate-600',
    gradient: 'from-slate-200 to-slate-100'
  },
  {
    id: 4,
    titleAr: 'أذكار الصلاة',
    titleFr: 'Après la prière',
    iconName: 'Star',
    count: 15,
    color: 'text-emerald-600',
    gradient: 'from-emerald-100 to-emerald-50'
  },
  {
    id: 5,
    titleAr: 'الرقية الشرعية',
    titleFr: 'Roqya',
    iconName: 'Shield',
    count: 10,
    color: 'text-teal-600',
    gradient: 'from-teal-100 to-teal-50'
  },
  {
    id: 6,
    titleAr: 'أدعية متنوعة',
    titleFr: 'Invocations',
    iconName: 'Heart',
    count: 30,
    color: 'text-rose-500',
    gradient: 'from-rose-100 to-rose-50'
  }
];

export const MOCK_AZKAR: Zikr[] = [
  {
    id: 1,
    categoryId: 1,
    textAr: "اللّهُـمَّ بِكَ أَصْـبَحْنا وَبِكَ أَمْسَـينا ، وَبِكَ نَحْـيا وَبِكَ نَمُـوتُ وَإِلَـيْكَ النُّـشُور.",
    textFr: "Ô Allah ! C'est par Toi que nous nous retrouvons au matin...",
    reference: "Tirmidhi",
    targetCount: 1
  },
  {
    id: 2,
    categoryId: 1,
    textAr: "أَصْـبَحْنا وَأَصْـبَحَ المُـلْكُ لله وَالحَمدُ لله ، لا إلهَ إلاّ اللّهُ وَحدَهُ لا شَريكَ لهُ...",
    reference: "Muslim",
    targetCount: 1
  },
  {
    id: 3,
    categoryId: 1,
    textAr: "سُبْحَانَ اللهِ وَبِحَمْدِهِ.",
    textFr: "Gloire et louange à Allah.",
    reference: "Bukhari",
    targetCount: 100
  },
  // Adding Evening Azkar
  {
    id: 4,
    categoryId: 2,
    textAr: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ لاَ إِلَهَ إِلاَّ اللَّهُ...",
    targetCount: 1
  },
  {
    id: 5,
    categoryId: 3,
    textAr: "بِاسْمِكَ رَبِّـي وَضَعْـتُ جَنْـبي ، وَبِكَ أَرْفَعُـه...",
    reference: "Bukhari",
    targetCount: 1
  }
];

export const MOCK_STATS: UserStats = {
  dailyGoal: 100,
  currentProgress: 85,
  streak: 5,
  weeklyData: [
    { day: 'السبت', count: 40 },
    { day: 'الأحد', count: 60 },
    { day: 'الاثنين', count: 85 },
    { day: 'الثلاثاء', count: 70 },
    { day: 'الأربعاء', count: 90 },
    { day: 'الخميس', count: 100 },
    { day: 'الجمعة', count: 50 },
  ]
};
