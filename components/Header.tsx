
import React from 'react';
import type { Level } from '../types';

interface HeaderProps {
    xp: number;
    level: Level;
}

export const Header: React.FC<HeaderProps> = ({ xp, level }) => {
    const { Icon, title } = level;

    return (
        <header className="w-full flex justify-between items-center p-4 mb-8 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-purple-500/30">
            <div>
                <h1 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">Desafio 4D</h1>
            </div>
            <div className="flex items-center space-x-4">
                <div className="text-right">
                    <div className="font-bold text-lg text-cyan-300">XP: {xp}</div>
                    <div className="text-sm text-gray-300">{title}</div>
                </div>
                <div className="w-12 h-12 p-1.5 rounded-full bg-gradient-to-br from-purple-600/30 to-cyan-600/30 flex items-center justify-center border border-cyan-400/50">
                    <Icon className="w-8 h-8 text-cyan-300"/>
                </div>
            </div>
        </header>
    );
};
