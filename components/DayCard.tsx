
import React, { useState } from 'react';
import type { Day } from '../types';
import { CheckIcon, LockIcon, SparklesIcon } from './icons/UtilityIcons';

interface DayCardProps {
  day: Day;
  isCompleted: boolean;
  isActive: boolean;
  onComplete: () => void;
}

export const DayCard: React.FC<DayCardProps> = ({ day, isCompleted, isActive, onComplete }) => {
  const [tasks, setTasks] = useState<boolean[]>(Array(day.missions.length).fill(false));
  const allTasksCompleted = tasks.every(Boolean);

  const handleTaskToggle = (index: number) => {
    if (isCompleted || !isActive) return;
    const newTasks = [...tasks];
    newTasks[index] = !newTasks[index];
    setTasks(newTasks);
  };

  const cardStateClasses = () => {
    if (isCompleted) return 'bg-green-500/20 border-green-500/50 pointer-events-none';
    if (isActive) return 'bg-purple-600/20 border-purple-500/50 hover:border-cyan-400 cursor-pointer';
    return 'bg-gray-800/30 border-gray-700/50 opacity-60 pointer-events-none';
  };
  
  const icon = () => {
    if(isCompleted) return <CheckIcon className="w-6 h-6 text-green-400" />;
    if(isActive) return <SparklesIcon className="w-6 h-6 text-cyan-400" />;
    return <LockIcon className="w-6 h-6 text-gray-500" />;
  }

  return (
    <div className={`p-6 rounded-2xl border transition-all duration-300 ${cardStateClasses()}`}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-white">Dia {day.id}: {day.title}</h3>
        {icon()}
      </div>

      {isActive && !isCompleted && (
        <div className="space-y-3">
          {day.missions.map((mission, index) => (
            <div
              key={mission.id}
              onClick={() => handleTaskToggle(index)}
              className="flex items-center p-3 bg-gray-800/50 rounded-lg cursor-pointer transition-colors hover:bg-gray-700/50"
            >
              <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center mr-4 flex-shrink-0 ${tasks[index] ? 'bg-cyan-500 border-cyan-500' : 'border-gray-500'}`}>
                {tasks[index] && <CheckIcon className="w-4 h-4 text-white" />}
              </div>
              <span className={`text-gray-300 ${tasks[index] ? 'line-through text-gray-500' : ''}`}>
                {mission.description}
              </span>
            </div>
          ))}
          <button
            onClick={onComplete}
            disabled={!allTasksCompleted}
            className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-cyan-600 to-blue-500 text-white font-bold rounded-lg text-md shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed enabled:hover:shadow-cyan-400/50 enabled:hover:scale-105"
          >
            ✔ Concluir Dia (+100 XP)
          </button>
        </div>
      )}

      {(isCompleted || !isActive) && (
         <div className="space-y-2">
           {day.missions.map(mission => (
             <div key={mission.id} className="flex items-center text-gray-500">
                <CheckIcon className={`w-4 h-4 mr-2 ${isCompleted ? 'text-green-500' : 'text-gray-600'}`} />
                <span>{mission.description}</span>
             </div>
           ))}
        </div>
      )}
    </div>
  );
};
