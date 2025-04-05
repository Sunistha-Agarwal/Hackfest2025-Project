import React, { useState } from 'react';
import Navbar from '../ui/Navbar';

const Leaderboard = () => {
  const [activeFilter, setActiveFilter] = useState('Weekly');
  const [activePage, setActivePage] = useState(2);

  // Sample leaderboard data
  const players = [
    {
      rank: 1,
      avatar: 'MK',
      name: 'MathKing94',
      level: 48,
      title: 'Grandmaster',
      score: 9847,
      accuracy: '98.2%',
      speed: '3.2s'
    },
    {
      rank: 2,
      avatar: 'AG',
      name: 'AlphaGenius',
      level: 45,
      title: 'Grandmaster',
      score: 9612,
      accuracy: '97.5%',
      speed: '3.4s'
    },
    {
      rank: 3,
      avatar: 'QM',
      name: 'QuantumMind',
      level: 42,
      title: 'Master',
      score: 9384,
      accuracy: '96.9%',
      speed: '3.6s'
    },
    {
      rank: 4,
      avatar: 'NC',
      name: 'NumberCrunch',
      level: 39,
      title: 'Expert',
      score: 9105,
      accuracy: '95.8%',
      speed: '3.9s'
    },
    {
      rank: 5,
      avatar: 'ML',
      name: 'MathLegend',
      level: 40,
      title: 'Expert',
      score: 8932,
      accuracy: '94.7%',
      speed: '4.0s'
    },
    {
      rank: 6,
      avatar: 'CF',
      name: 'CalcFusion',
      level: 37,
      title: 'Expert',
      score: 8754,
      accuracy: '93.9%',
      speed: '4.2s'
    },
    {
      rank: 7,
      avatar: 'PM',
      name: 'ProbMaster',
      level: 35,
      title: 'Advanced',
      score: 8621,
      accuracy: '93.2%',
      speed: '4.4s'
    },
    {
      rank: 8,
      avatar: 'SW',
      name: 'SpeedWiz',
      level: 36,
      title: 'Advanced',
      score: 8495,
      accuracy: '91.8%',
      speed: '4.1s'
    },
    {
      rank: 9,
      avatar: 'DM',
      name: 'DecimalMind',
      level: 33,
      title: 'Advanced',
      score: 8317,
      accuracy: '92.5%',
      speed: '4.6s'
    },
    {
      rank: 10,
      avatar: 'AC',
      name: 'AlgorithmChamp',
      level: 32,
      title: 'Advanced',
      score: 8204,
      accuracy: '91.4%',
      speed: '4.7s'
    }
  ];

  const filterOptions = ['Weekly', 'Monthly', 'All Time'];
  const pageOptions = [1, 2, 3, 4, 5];

  // Get rank style based on position
  const getRankStyle = (rank) => {
    if (rank === 1) return 'text-yellow-400 text-lg font-bold';
    if (rank === 2) return 'text-gray-300 text-lg font-bold';
    if (rank === 3) return 'text-amber-700 text-lg font-bold';
    return 'font-semibold';
  };

  return (
    <div className="bg-[#05111d] text-white min-h-screen">
      {/* Wave Background */}
      <div className="fixed inset-0 overflow-hidden opacity-15 pointer-events-none">
        <div className="absolute right-[-300px] top-[100px] w-[1100px] h-[1100px] border-2 border-[#F95738] rounded-[45%_47%_43%_42%] animate-[spin_15s_linear_infinite]"></div>
        <div className="absolute right-[-300px] top-[100px] w-[1100px] h-[1100px] border-2 border-[#EE964B] rounded-[47%_43%_51%_45%] animate-[spin_25s_linear_infinite]"></div>
        <div className="absolute right-[-300px] top-[100px] w-[1100px] h-[1100px] border-2 border-[#f8e8ba] rounded-[42%_46%_39%_45%] animate-[spin_35s_linear_infinite]"></div>
      </div>

      {/* Navigation */}
      <Navbar/>

      {/* Main Content */}
      <div className="p-14 md:p-16 bg-[#081c30]/60 relative z-1 flex-1">
        <h2 className="text-center text-4xl md:text-5xl mb-8 text-[#f8e8ba] shadow-md">
          Global <span className="text-[#F95738]">Leaderboard</span>
        </h2>
        
        <div className="max-w-4xl mx-auto bg-white/[0.03] rounded-2xl overflow-hidden shadow-xl border border-white/[0.05]">
          {/* Leaderboard Header */}
          <div className="bg-gradient-to-r from-[#081c30] to-[#05111d] p-5 md:p-6 flex md:flex-row flex-col md:justify-between md:items-center items-start gap-4 border-b border-white/10">
            <div className="text-2xl text-[#f8e8ba] flex items-center gap-2.5">
              <span>🏆</span> Weekly Challenge: Advanced Calculus
            </div>
            
            <div className="flex gap-4">
              {filterOptions.map(filter => (
                <button
                  key={filter}
                  className={`bg-white/[0.05] border border-white/10 text-white py-2 px-4 rounded-md cursor-pointer transition-all duration-300 ${activeFilter === filter ? 'bg-gradient-to-tr from-[#EE964B]/20 to-[#F95738]/20 border-[#F95738] font-medium' : 'hover:bg-[#F95738]/20 hover:border-[#F95738]'}`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          
          {/* Leaderboard Table */}
          <div className="w-full overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#081c30]/80">
                  <th className="p-4 md:p-5 text-left font-semibold text-[#f8e8ba] border-b border-white/10 text-center w-12 md:w-16">Rank</th>
                  <th className="p-4 md:p-5 text-left font-semibold text-[#f8e8ba] border-b border-white/10">Player</th>
                  <th className="p-4 md:p-5 text-left font-semibold text-[#f8e8ba] border-b border-white/10">Score</th>
                  <th className="p-4 md:p-5 text-left font-semibold text-[#f8e8ba] border-b border-white/10">Accuracy</th>
                  <th className="p-4 md:p-5 text-left font-semibold text-[#f8e8ba] border-b border-white/10">Speed</th>
                </tr>
              </thead>
              <tbody>
                {players.map(player => (
                  <tr key={player.rank} className="hover:bg-white/[0.03]">
                    <td className={`p-4 md:p-5 border-b border-white/[0.05] text-center ${getRankStyle(player.rank)}`}>
                      {player.rank}
                    </td>
                    <td className="p-4 md:p-5 border-b border-white/[0.05]">
                      <div className="flex items-center gap-4 md:gap-5">
                        <div className="w-10 h-10 md:w-10 md:h-10 rounded-full bg-gradient-to-tr from-[#081c30] to-[#05111d] flex justify-center items-center font-bold border-2 border-[#EE964B]">
                          {player.avatar}
                        </div>
                        <div className="flex flex-col">
                          <div className="font-semibold text-white">{player.name}</div>
                          <div className="text-sm md:text-base text-white/60">Level {player.level} • {player.title}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 md:p-5 border-b border-white/[0.05] font-semibold text-[#f8e8ba]">
                      {player.score.toLocaleString()}
                    </td>
                    <td className="p-4 md:p-5 border-b border-white/[0.05] font-medium text-[#F95738]">
                      {player.accuracy}
                    </td>
                    <td className="p-4 md:p-5 border-b border-white/[0.05] font-medium text-[#EE964B]">
                      {player.speed}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Pagination */}
        <div className="flex justify-center gap-2.5 mt-8">
          {pageOptions.map(page => (
            <button
              key={page}
              className={`bg-white/[0.05] border border-white/10 text-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer transition-all duration-300 ${activePage === page ? 'bg-gradient-to-tr from-[#EE964B]/30 to-[#F95738]/30 border-[#F95738] font-semibold' : 'hover:bg-[#F95738]/20 hover:border-[#F95738]'}`}
              onClick={() => setActivePage(page)}
            >
              {page}
            </button>
          ))}
        </div>
        
        {/* Join Competition Button */}
        <button className="bg-gradient-to-tr from-[#EE964B] to-[#F95738] text-white border-none py-4 px-8 rounded-lg font-bold text-lg cursor-pointer transition-all duration-300 block mx-auto mt-10 text-center shadow-[0_8px_20px_rgba(249,87,56,0.4)] hover:transform hover:scale-105 hover:-translate-y-1 hover:shadow-[0_12px_25px_rgba(249,87,56,0.5)]">
          Join This Week's Competition
        </button>
      </div>
      
      {/* Footer */}
      <footer className="py-10 px-7 bg-[#05111d] text-center border-t border-white/[0.05]">
        <div className="flex flex-col gap-5 max-w-6xl mx-auto">
          <div className="flex justify-center gap-8 mb-5">
            <a href="#" className="text-white/70 no-underline transition-colors duration-300 hover:text-[#F95738]">Privacy Policy</a>
            <a href="#" className="text-white/70 no-underline transition-colors duration-300 hover:text-[#F95738]">Terms of Service</a>
            <a href="#" className="text-white/70 no-underline transition-colors duration-300 hover:text-[#F95738]">FAQ</a>
            <a href="#" className="text-white/70 no-underline transition-colors duration-300 hover:text-[#F95738]">Support</a>
          </div>
          <p className="text-white/50 text-sm">© 2025 HectoClash - Elevating Mathematical Excellence Worldwide</p>
        </div>
      </footer>
    </div>
  );
};

export default Leaderboard;