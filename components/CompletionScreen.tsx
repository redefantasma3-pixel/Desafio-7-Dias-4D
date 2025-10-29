
import React from 'react';
import { MasterIcon } from './icons/LevelIcons';
import { PartyPopperIcon } from './icons/UtilityIcons';

export const CompletionScreen: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center p-8 max-w-lg mx-auto bg-gray-900/50 backdrop-blur-sm rounded-2xl shadow-2xl shadow-cyan-500/30 border border-cyan-500/30">
      <PartyPopperIcon className="w-16 h-16 text-yellow-400 mb-4" />
      <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 mb-4">
        Parabéns!
      </h1>
      <p className="text-gray-300 text-lg mb-8">
        Você completou os 7 dias e desbloqueou o <span className="font-bold text-cyan-300">Domínio 4D</span>. Sua jornada de transformação está apenas começando.
      </p>
      
      <div className="flex flex-col items-center mb-10">
        <div className="w-32 h-32 p-4 rounded-full bg-gradient-to-br from-purple-600/20 to-cyan-600/20 flex items-center justify-center mb-4 border-2 border-cyan-400">
          <MasterIcon className="w-24 h-24 text-cyan-300" />
        </div>
        <span className="text-xl font-semibold text-cyan-300">Domínio 4D Alcançado</span>
        <span className="text-gray-400">700 XP</span>
      </div>

      <a
        href="#/"
        className="w-full max-w-xs px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold rounded-lg text-xl shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 transform hover:scale-105"
      >
        Continuar para Mentoria 4D
      </a>
    </div>
  );
};
