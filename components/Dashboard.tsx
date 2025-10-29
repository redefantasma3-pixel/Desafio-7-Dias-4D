import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from 'recharts';
import { QuoteIcon } from './icons/UtilityIcons';

interface DashboardProps {
  xp: number;
  daysCompleted: number;
  levelTitle: string;
  quote: string;
}

export const Dashboard: React.FC<DashboardProps> = ({ xp, daysCompleted, levelTitle, quote }) => {
  const totalXp = 700;
  const xpPercentage = Math.round((xp / totalXp) * 100);
  const data = [{ name: 'XP', value: xpPercentage, fill: '#22d3ee' }];
  const energyPercentage = Math.round((daysCompleted / 7) * 100);

  return (
    <div className="w-full p-6 bg-gray-900/50 backdrop-blur-sm rounded-2xl shadow-xl shadow-purple-500/10 border border-purple-500/30 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
      <div className="flex flex-col items-center justify-center">
        <div className="w-40 h-40">
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
              innerRadius="70%"
              outerRadius="90%"
              data={data}
              startAngle={90}
              endAngle={-270}
              barSize={15}
            >
              <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
              <RadialBar background={{ fill: 'rgba(255, 255, 255, 0.1)' }} dataKey="value" cornerRadius={10} />
            </RadialBarChart>
          </ResponsiveContainer>
        </div>
        <div className="text-center -mt-28">
            <p className="text-4xl font-bold text-cyan-300">{xpPercentage}%</p>
            <p className="text-gray-400">Concluído</p>
        </div>
      </div>
      <div className="md:col-span-2 space-y-4">
        <div className="text-center md:text-left">
            <p className="text-gray-300 text-lg">Nível Atual</p>
            <p className="text-3xl font-bold text-white">{levelTitle}</p>
        </div>
        <div>
            <p className="text-gray-300 mb-2">Energia 4D</p>
            <div className="w-full bg-gray-700/50 rounded-full h-4">
                <div 
                    className="bg-gradient-to-r from-purple-500 to-cyan-500 h-4 rounded-full transition-all duration-500"
                    style={{ width: `${energyPercentage}%` }}
                ></div>
            </div>
            <p className="text-right text-sm text-gray-400 mt-1">{daysCompleted} de 7 dias</p>
        </div>
        <div className="flex items-start space-x-3 pt-2">
            <QuoteIcon className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
            <p className="text-gray-300 italic">"{quote}"</p>
        </div>
      </div>
    </div>
  );
};