
import React, { useState, useMemo } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { ChallengeView } from './components/ChallengeView';
import { CompletionScreen } from './components/CompletionScreen';
import type { UserProgress } from './types';
import { LEVELS_CONFIG } from './constants';

type View = 'welcome' | 'challenge' | 'completion';

const App: React.FC = () => {
  const [view, setView] = useState<View>('welcome');
  const [userProgress, setUserProgress] = useState<UserProgress>({
    xp: 0,
    completedDays: Array(7).fill(false),
  });

  const currentLevelIndex = useMemo(() => {
    const level = LEVELS_CONFIG.findIndex(
      (l) => userProgress.xp >= l.xpMin && userProgress.xp <= l.xpMax
    );
    return level === -1 ? LEVELS_CONFIG.length - 1 : level;
  }, [userProgress.xp]);

  const currentLevel = useMemo(() => LEVELS_CONFIG[currentLevelIndex], [currentLevelIndex]);

  const daysCompleted = useMemo(() => {
    return userProgress.completedDays.filter(Boolean).length;
  }, [userProgress.completedDays]);

  const startGame = () => {
    setView('challenge');
  };

  const completeDay = (dayIndex: number) => {
    setUserProgress((prev) => {
      const newCompletedDays = [...prev.completedDays];
      if (!newCompletedDays[dayIndex]) {
        newCompletedDays[dayIndex] = true;
        const newXp = prev.xp + 100;
        const updatedDaysCompleted = newCompletedDays.filter(Boolean).length;
        if (updatedDaysCompleted === 7) {
          setView('completion');
        }
        return {
          xp: newXp,
          completedDays: newCompletedDays,
        };
      }
      return prev;
    });
  };

  const renderContent = () => {
    switch (view) {
      case 'welcome':
        return <WelcomeScreen onStart={startGame} level={LEVELS_CONFIG[0]} />;
      case 'challenge':
        return (
          <ChallengeView
            userProgress={userProgress}
            currentLevel={currentLevel}
            daysCompleted={daysCompleted}
            onCompleteDay={completeDay}
          />
        );
      case 'completion':
        return <CompletionScreen />;
      default:
        return <WelcomeScreen onStart={startGame} level={LEVELS_CONFIG[0]} />;
    }
  };

  return (
    <div className="bg-black min-h-screen text-white font-poppins relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/40 via-transparent to-cyan-900/40 opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
            {renderContent()}
        </div>
    </div>
  );
};

export default App;
