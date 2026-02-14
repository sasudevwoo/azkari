import React from 'react';
import { Sun, Moon, CloudMoon, Heart, Star, Shield, HelpCircle, User, Settings, Home, BarChart2, CheckCircle } from 'lucide-react';

export const Icons = {
  Sun, Moon, CloudMoon, Heart, Star, Shield, HelpCircle, User, Settings, Home, BarChart2, CheckCircle
};

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export const Icon: React.FC<IconProps> = ({ name, className, size = 24 }) => {
  const IconComponent = (Icons as any)[name] || HelpCircle;
  return <IconComponent className={className} size={size} />;
};
