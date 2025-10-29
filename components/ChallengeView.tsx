
import React from 'react';
import { Header } from './Header';
import { Dashboard } from './Dashboard';
import { DayCard } from './DayCard';
import { DAYS_DATA, MOTIVATIONAL_QUOTES } from '../constants';
import type { UserProgress, Level } from '../types';

interface ChallengeViewProps {
  userProgress: UserProgress;
  currentLevel: Level;
  daysCompleted: number;
  onCompleteDay: (dayIndex: number) => void;
}

export const ChallengeView: React.FC<ChallengeViewProps> = ({ userProgress, currentLevel, daysCompleted, onCompleteDay }) => {
  const currentDay = daysCompleted + 1;

  return (
    <div className="w-full max-w-5xl mx-auto p-2 sm:p-4">
      <Header xp={userProgress.xp} level={currentLevel} />
      <main>
        <Dashboard 
          xp={userProgress.xp}
          daysCompleted={daysCompleted}
          levelTitle={currentLevel.title}
          quote={MOTIVATIONAL_QUOTES[daysCompleted]}
        />
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-200">Suas Missões Diárias</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DAYS_DATA.map((day, index) => (
              <DayCard 
                key={day.id}
                day={day}
                isCompleted={userProgress.completedDays[index]}
                isActive={day.id === currentDay}
                onComplete={() => onCompleteDay(index)}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};
