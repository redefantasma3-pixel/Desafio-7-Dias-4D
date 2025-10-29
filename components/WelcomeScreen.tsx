
import React from 'react';
import type { Level } from '../types';

interface WelcomeScreenProps {
  onStart: () => void;
  level: Level;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart, level }) => {
  const { Icon, title } = level;

  return (
    <div className="flex flex-col items-center text-center p-8 max-w-lg mx-auto bg-gray-900/50 backdrop-blur-sm rounded-2xl shadow-2xl shadow-purple-500/20 border border-purple-500/30 transition-all duration-500 hover:shadow-cyan-500/20">
      <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 mb-4">
        Desafio 7 Dias 4D
      </h1>
      <p className="text-gray-300 text-lg mb-8">
        Você está pronto para começar sua jornada e desbloquear seu potencial máximo?
      </p>
      
      <div className="flex flex-col items-center mb-10">
        <div className="w-32 h-32 p-4 rounded-full bg-gradient-to-br from-purple-600/20 to-cyan-600/20 flex items-center justify-center mb-4 border-2 border-cyan-400/50">
          <Icon className="w-24 h-24 text-cyan-300" />
        </div>
        <span className="text-xl font-semibold text-cyan-300">{title}</span>
        <span className="text-gray-400">0 XP</span>
      </div>

      <button
        onClick={onStart}
        className="w-full max-w-xs px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold rounded-lg text-xl shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 transform hover:scale-105"
      >
        Começar Agora
      </button>
    </div>
  );
};
