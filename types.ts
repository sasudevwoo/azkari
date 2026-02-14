export interface Category {
  id: number;
  titleAr: string;
  titleFr?: string;
  iconName: string;
  count: number;
  color: string;
  gradient: string;
}

export interface Zikr {
  id: number;
  categoryId: number;
  textAr: string;
  textFr?: string;
  reference?: string;
  targetCount: number;
  currentCount?: number; // For session tracking
  audioUrl?: string;
}

export interface UserStats {
  dailyGoal: number;
  currentProgress: number;
  weeklyData: { day: string; count: number }[];
  streak: number;
}
