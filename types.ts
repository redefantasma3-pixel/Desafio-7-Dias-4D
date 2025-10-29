
import type React from 'react';

export interface Mission {
  id: number;
  description: string;
}

export interface Day {
  id: number;
  title: string;
  missions: Mission[];
}

export interface Level {
  level: number;
  xpMin: number;
  xpMax: number;
  title: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface UserProgress {
  xp: number;
  completedDays: boolean[];
}
