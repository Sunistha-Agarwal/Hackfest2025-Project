import React from 'react';
import { NavLink,Link } from 'react-router-dom';
import Footer from "../ui/Footer";


const Profile = () => {
  return (
    <div className="bg-[#05111d] text-white min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="flex justify-between items-center sticky top-0 z-10 bg-opacity-95 bg-[#05111d] shadow-lg backdrop-blur-md p-4">
        <div className="bg-gradient-to-br from-[#EE964B] to-[#F95738] w-12 h-12 rounded-full flex justify-center items-center font-bold text-white">HC</div>
        
        <ul className="flex gap-8">
          <li><NavLink to="/" className="text-white font-medium hover:text-[#F95738] transition-colors relative">Home</NavLink></li>
          <li><NavLink to="/leaderboard" className="text-white font-medium hover:text-[#F95738] transition-colors relative">LeaderBoard</NavLink></li>
                  </ul>
        
        <NavLink to="profile.html" className="bg-gradient-to-br from-[#EE964B] to-[#F95738] text-white px-5 py-2 rounded-md font-bold flex items-center gap-2 hover:shadow-lg hover:-translate-y-0.5 transition-all">
          <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center font-bold text-[#081c30]">M</div>
          MathPro92
        </NavLink>
      </nav>
      
      {/* Background Waves */}
      <div className="absolute top-0 right-0 w-full h-full z-0 overflow-hidden opacity-15 pointer-events-none">
        <div className="absolute right-[-20vw] top-[10vh] w-[90vw] h-[90vw] max-w-[1000px] max-h-[1000px] border-2 border-[#F95738] rounded-[45%_47%_43%_42%] animate-[spin_15s_linear_infinite]"></div>
        <div className="absolute right-[-20vw] top-[10vh] w-[90vw] h-[90vw] max-w-[1000px] max-h-[1000px] border-2 border-[#EE964B] rounded-[47%_43%_51%_45%] animate-[spin_25s_linear_infinite]"></div>
      </div>
      
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center py-8 px-4 relative z-1">
        <div className="text-center mb-8 w-full">
          <h1 className="text-4xl mb-2 text-white">
            Player <span className="bg-gradient-to-br from-[#F4D35E] to-[#F95738] bg-clip-text text-transparent">Profile</span>
          </h1>
          <p className="text-[#f8e8ba] opacity-90">View your stats, achievements and recent games</p>
        </div>
        
        <div className="flex w-full max-w-6xl gap-8 mx-auto lg:flex-row flex-col">
          {/* Main Profile Card */}
          <div className="bg-[#081c30] bg-opacity-70 border border-white border-opacity-10 rounded-2xl p-6 flex-3 shadow-xl backdrop-blur-md flex flex-col">
            {/* Profile Details */}
            <div className="flex md:flex-row flex-col gap-8 mb-8 items-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#0d6efd] to-[#5a9eee] flex items-center justify-center text-5xl font-bold text-white shadow-lg border-4 border-white border-opacity-20 flex-shrink-0">M</div>
              
              <div className="flex-grow md:text-left text-center">
                <h2 className="text-3xl font-bold mb-1">MathPro92</h2>
                <div className="inline-block bg-gradient-to-br from-[#EE964B] to-[#F95738] px-3 py-1 rounded-full font-bold mb-2 text-sm">Advanced</div>
                <p>Member since April 2023 • 245 games played</p>
                <div className="flex gap-2 mt-2 flex-wrap md:justify-start justify-center">
                  <div className="bg-white bg-opacity-10 rounded-md px-3 py-1 flex items-center gap-1 text-sm">
                    <span className="text-[#F4D35E] font-bold">★</span> Math Wizard
                  </div>
                  <div className="bg-white bg-opacity-10 rounded-md px-3 py-1 flex items-center gap-1 text-sm">
                    <span className="text-[#F4D35E] font-bold">⚡</span> Quick Solver
                  </div>
                  <div className="bg-white bg-opacity-10 rounded-md px-3 py-1 flex items-center gap-1 text-sm">
                    <span className="text-[#F4D35E] font-bold">🏆</span> Tournament Winner
                  </div>
                </div>
              </div>
            </div>
            
            {/* Stats Overview */}
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 mb-8">
              <div className="bg-white bg-opacity-5 p-4 rounded-lg text-center transition-all hover:-translate-y-1 hover:bg-opacity-10">
                <div className="text-3xl font-bold mb-1 text-[#F4D35E]">75%</div>
                <div className="text-[#f8e8ba] text-sm">Win Rate</div>
              </div>
              <div className="bg-white bg-opacity-5 p-4 rounded-lg text-center transition-all hover:-translate-y-1 hover:bg-opacity-10">
                <div className="text-3xl font-bold mb-1 text-[#F4D35E]">184</div>
                <div className="text-[#f8e8ba] text-sm">Wins</div>
              </div>
              <div className="bg-white bg-opacity-5 p-4 rounded-lg text-center transition-all hover:-translate-y-1 hover:bg-opacity-10">
                <div className="text-3xl font-bold mb-1 text-[#F4D35E]">61</div>
                <div className="text-[#f8e8ba] text-sm">Losses</div>
              </div>
              <div className="bg-white bg-opacity-5 p-4 rounded-lg text-center transition-all hover:-translate-y-1 hover:bg-opacity-10">
                <div className="text-3xl font-bold mb-1 text-[#F4D35E]">38s</div>
                <div className="text-[#f8e8ba] text-sm">Avg. Solution Time</div>
              </div>
            </div>
            
            {/* Charts Grid */}
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mb-8">
              {/* Performance Chart */}
              <div className="bg-white bg-opacity-5 rounded-lg p-5 min-h-[300px] flex flex-col">
                <h3 className="mb-4 text-lg text-[#f8e8ba]">Performance Trend (Last 10 Games)</h3>
                <div className="flex-grow relative">
                  <svg className="w-full h-[220px]" viewBox="0 0 500 250" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="performance-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#F95738" />
                        <stop offset="100%" stopColor="#05111d" />
                      </linearGradient>
                    </defs>
                    
                    {/* Y-axis */}
                    <line stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" x1="50" y1="30" x2="50" y2="220"></line>
                    
                    {/* X-axis */}
                    <line stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" x1="50" y1="220" x2="470" y2="220"></line>
                    
                    {/* Y-axis labels */}
                    <text fill="rgba(255, 255, 255, 0.7)" fontSize="12" textAnchor="middle" x="30" y="30">100%</text>
                    <text fill="rgba(255, 255, 255, 0.7)" fontSize="12" textAnchor="middle" x="30" y="75">75%</text>
                    <text fill="rgba(255, 255, 255, 0.7)" fontSize="12" textAnchor="middle" x="30" y="125">50%</text>
                    <text fill="rgba(255, 255, 255, 0.7)" fontSize="12" textAnchor="middle" x="30" y="175">25%</text>
                    <text fill="rgba(255, 255, 255, 0.7)" fontSize="12" textAnchor="middle" x="30" y="220">0%</text>
                    
                    {/* X-axis labels */}
                    <text fill="rgba(255, 255, 255, 0.7)" fontSize="12" textAnchor="middle" x="50" y="240">1</text>
                    <text fill="rgba(255, 255, 255, 0.7)" fontSize="12" textAnchor="middle" x="93" y="240">2</text>
                    <text fill="rgba(255, 255, 255, 0.7)" fontSize="12" textAnchor="middle" x="136" y="240">3</text>
                    <text fill="rgba(255, 255, 255, 0.7)" fontSize="12" textAnchor="middle" x="179" y="240">4</text>
                    <text fill="rgba(255, 255, 255, 0.7)" fontSize="12" textAnchor="middle" x="222" y="240">5</text>
                    <text fill="rgba(255, 255, 255, 0.7)" fontSize="12" textAnchor="middle" x="265" y="240">6</text>
                    <text fill="rgba(255, 255, 255, 0.7)" fontSize="12" textAnchor="middle" x="308" y="240">7</text>
                    <text fill="rgba(255, 255, 255, 0.7)" fontSize="12" textAnchor="middle" x="351" y="240">8</text>
                    <text fill="rgba(255, 255, 255, 0.7)" fontSize="12" textAnchor="middle" x="394" y="240">9</text>
                    <text fill="rgba(255, 255, 255, 0.7)" fontSize="12" textAnchor="middle" x="437" y="240">10</text>
                    
                    {/* Performance area and line */}
                    <path fill="url(#performance-gradient)" fillOpacity="0.3" d="M50,100 L93,75 L136,50 L179,125 L222,90 L265,60 L308,80 L351,30 L394,70 L437,50 L470,50 L470,220 L50,220 Z"></path>
                    <path stroke="#F95738" strokeWidth="3" fill="none" d="M50,100 L93,75 L136,50 L179,125 L222,90 L265,60 L308,80 L351,30 L394,70 L437,50 L470,50"></path>
                    
                    {/* Data points */}
                    <circle fill="#F95738" cx="50" cy="100" r="5" className="transition-all hover:r-7"></circle>
                    <circle fill="#F95738" cx="93" cy="75" r="5" className="transition-all hover:r-7"></circle>
                    <circle fill="#F95738" cx="136" cy="50" r="5" className="transition-all hover:r-7"></circle>
                    <circle fill="#F95738" cx="179" cy="125" r="5" className="transition-all hover:r-7"></circle>
                    <circle fill="#F95738" cx="222" cy="90" r="5" className="transition-all hover:r-7"></circle>
                    <circle fill="#F95738" cx="265" cy="60" r="5" className="transition-all hover:r-7"></circle>
                    <circle fill="#F95738" cx="308" cy="80" r="5" className="transition-all hover:r-7"></circle>
                    <circle fill="#F95738" cx="351" cy="30" r="5" className="transition-all hover:r-7"></circle>
                    <circle fill="#F95738" cx="394" cy="70" r="5" className="transition-all hover:r-7"></circle>
                    <circle fill="#F95738" cx="437" cy="50" r="5" className="transition-all hover:r-7"></circle>
                    <circle fill="#F95738" cx="470" cy="50" r="5" className="transition-all hover:r-7"></circle>
                  </svg>
                </div>
              </div>
              
              {/* Operations Usage Chart */}
              <div className="bg-white bg-opacity-5 rounded-lg p-5 min-h-[300px] flex flex-col">
                <h3 className="mb-4 text-lg text-[#f8e8ba]">Operation Usage</h3>
                <div className="flex-grow">
                  <div className="w-full">
                    <div className="h-8 mb-4 bg-white bg-opacity-10 rounded relative overflow-hidden">
                      <div className="h-full absolute left-0 top-0 rounded bg-gradient-to-r from-[#0d6efd] to-[#5a9eee] flex items-center px-4 text-white font-bold w-[65%]">+ Addition (65%)</div>
                    </div>
                    
                    <div className="h-8 mb-4 bg-white bg-opacity-10 rounded relative overflow-hidden">
                      <div className="h-full absolute left-0 top-0 rounded bg-gradient-to-r from-[#F95738] to-[#fa7b62] flex items-center px-4 text-white font-bold w-[48%]">- Subtraction (48%)</div>
                    </div>
                    
                    <div className="h-8 mb-4 bg-white bg-opacity-10 rounded relative overflow-hidden">
                      <div className="h-full absolute left-0 top-0 rounded bg-gradient-to-r from-[#28a745] to-[#3dc760] flex items-center px-4 text-white font-bold w-[82%]">× Multiplication (82%)</div>
                    </div>
                    
                    <div className="h-8 mb-4 bg-white bg-opacity-10 rounded relative overflow-hidden">
                      <div className="h-full absolute left-0 top-0 rounded bg-gradient-to-r from-[#F4D35E] to-[#f7e082] flex items-center px-4 text-[#081c30] font-bold w-[35%]">÷ Division (35%)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Recent Games */}
            <div className="mt-5">
              <h3 className="text-xl mb-4 text-[#f8e8ba] border-b border-white border-opacity-10 pb-2">Recent Games</h3>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center bg-white bg-opacity-5 p-4 rounded-lg transition-all hover:bg-opacity-10 hover:translate-x-1">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#dc3545] to-[#ff6b7d] flex items-center justify-center font-bold text-white text-xl">K</div>
                    <div>
                      <h4 className="text-lg">vs. KalkulusKing</h4>
                      <div className="text-sm text-[#f8e8ba] opacity-80">Today at 3:45 PM</div>
                    </div>
                  </div>
                  <div className="bg-[#28a745] bg-opacity-20 text-[#28a745] px-3 py-1 rounded-full font-bold">Win (5-2)</div>
                </div>
                
                <div className="flex justify-between items-center bg-white bg-opacity-5 p-4 rounded-lg transition-all hover:bg-opacity-10 hover:translate-x-1">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#dc3545] to-[#ff6b7d] flex items-center justify-center font-bold text-white text-xl">L</div>
                    <div>
                      <h4 className="text-lg">vs. LogicLord</h4>
                      <div className="text-sm text-[#f8e8ba] opacity-80">Yesterday at 7:32 PM</div>
                    </div>
                  </div>
                  <div className="bg-[#28a745] bg-opacity-20 text-[#28a745] px-3 py-1 rounded-full font-bold">Win (4-3)</div>
                </div>
                
                <div className="flex justify-between items-center bg-white bg-opacity-5 p-4 rounded-lg transition-all hover:bg-opacity-10 hover:translate-x-1">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#dc3545] to-[#ff6b7d] flex items-center justify-center font-bold text-white text-xl">G</div>
                    <div>
                      <h4 className="text-lg">vs. GeoGenius</h4>
                      <div className="text-sm text-[#f8e8ba] opacity-80">2 days ago at 10:15 AM</div>
                    </div>
                  </div>
                  <div className="bg-[#dc3545] bg-opacity-20 text-[#dc3545] px-3 py-1 rounded-full font-bold">Loss (2-5)</div>
                </div>
                
                <div className="flex justify-between items-center bg-white bg-opacity-5 p-4 rounded-lg transition-all hover:bg-opacity-10 hover:translate-x-1">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#dc3545] to-[#ff6b7d] flex items-center justify-center font-bold text-white text-xl">T</div>
                    <div>
                      <h4 className="text-lg">vs. TrigMaster</h4>
                      <div className="text-sm text-[#f8e8ba] opacity-80">3 days ago at 8:45 PM</div>
                    </div>
                  </div>
                  <div className="bg-[#28a745] bg-opacity-20 text-[#28a745] px-3 py-1 rounded-full font-bold">Win (6-1)</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar Card */}
          <div className="lg:order-none order-first bg-[#081c30] bg-opacity-70 border border-white border-opacity-10 rounded-2xl p-6 lg:sticky lg:top-24 lg:max-w-xs w-full flex flex-col gap-5 shadow-xl backdrop-blur-md">
            <div className="flex flex-col items-center gap-2">
              <div className="text-lg text-[#f8e8ba] text-center">Current Rank</div>
              <div className="w-20 h-20 bg-gradient-to-br from-[#EE964B] to-[#F95738] rounded-full flex items-center justify-center text-3xl font-bold shadow-lg text-white">12</div>
              <div className="text-lg font-bold">Grandmaster</div>
              <div className="text-sm text-[#f8e8ba] opacity-90 text-center">Top 2% of players</div>
              <div className="w-full mt-4">
                <div className="h-2 bg-white bg-opacity-10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#EE964B] to-[#F95738] rounded-full w-[85%] transition-all duration-500"></div>
                </div>
                <div className="flex justify-between text-sm mt-1 text-[#f8e8ba] opacity-80">
                  <span>XP to next rank:</span>
                  <span>850/1000</span>
                </div>
              </div>
            </div>
            
            <div className="text-lg text-[#f8e8ba] text-center">Recent Achievements</div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-2 bg-white bg-opacity-5 p-2 rounded-lg hover:bg-opacity-10 transition-all items-center">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#F4D35E] to-[#EE964B] flex items-center justify-center font-bold text-white text-xl flex-shrink-0">🥇</div>
                <div>
                  <div className="text-sm font-bold">Perfect Streak</div>
                  <div className="text-xs text-[#f8e8ba] opacity-80">Win 10 games in a row</div>
                </div>
              </div>
              <div className="flex gap-2 bg-white bg-opacity-5 p-2 rounded-lg hover:bg-opacity-10 transition-all items-center">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#F4D35E] to-[#EE964B] flex items-center justify-center font-bold text-white text-xl flex-shrink-0">⚡</div>
                <div>
                  <div className="text-sm font-bold">Speed Demon</div>
                  <div className="text-xs text-[#f8e8ba] opacity-80">Solve 5 games under 20s</div>
                </div>
              </div>
              <div className="flex gap-2 bg-white bg-opacity-5 p-2 rounded-lg hover:bg-opacity-10 transition-all items-center">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#F4D35E] to-[#EE964B] flex items-center justify-center font-bold text-white text-xl flex-shrink-0">🎯</div>
                <div>
                  <div className="text-sm font-bold">Accuracy Master</div>
                  <div className="text-xs text-[#f8e8ba] opacity-80">95%+ accuracy in 50 games</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer/>
    </div>
  );
};

export default Profile;