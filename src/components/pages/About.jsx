import { Link } from 'react-router-dom';
import Footer from "../ui/Footer";
import Navbar from '../ui/Navbar';

export default function AboutUs() {
  return (
    <>
      <div className='bg-[#05111d]'>
        <Navbar />

        {/* Background animation (matching home page) */}
        <div className="z-0 w-full h-full overflow-hidden opacity-15 absolute top-0 right-0">
          <div className="absolute right-[-300px] top-[100px] w-[1100px] h-[1100px] border-2 border-[coral] rounded-[45%_47%_43%_42%] animate-rotate-slow"></div>
          <div className="absolute right-[-300px] top-[100px] w-[1100px] h-[1100px] border-2 border-[#EE964B] rounded-[47%_43%_51%_45%] animate-rotate-medium"></div>
          <div className="absolute right-[-300px] top-[100px] w-[1100px] h-[1100px] border-2 border-[#f8e8ba] rounded-[42%_46%_39%_45%] animate-rotate-fast"></div>
        </div>

        {/* Page Header */}
        <div className="py-20 px-[7%] md:px-[5%] relative z-1">
          <h1 className="text-4xl md:text-5xl mb-4 text-center font-bold text-white">
            About <span className="bg-gradient-to-r from-[#F4D35E] to-[coral] bg-clip-text text-transparent">HectoClash</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto mb-12"></div>
        </div>

        {/* Our Mission */}
        <div className="py-10 px-7 relative z-1 bg-[#081c3099] bg-opacity-60">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl mb-6 text-amber-100 font-bold">Our Mission</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              At HectoClash, we're on a mission to revolutionize how people approach mathematical thinking. 
              We believe that mental mathematics isn't just about solving problems—it's about developing 
              a powerful cognitive toolkit that enhances problem-solving abilities across all areas of life.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Through our innovative platform, we aim to make mathematical reasoning accessible, engaging, 
              and fun for everyone—from students looking to improve their skills to professionals seeking 
              to maintain mental sharpness in an increasingly automated world.
            </p>
          </div>
        </div>

        {/* How HectoClash Works */}
        <div className="py-16 px-7 relative z-1">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl mb-10 text-amber-100 font-bold text-center">How HectoClash Works</h2>
            
            <div className="mb-12 bg-slate-800 bg-opacity-40 p-8 rounded-2xl border border-white border-opacity-5 shadow-xl">
              <h3 className="text-2xl mb-6 text-amber-100 font-semibold">The Challenge</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                In HectoClash, you'll be presented with a sequence of six digits (each ranging from 1-9). 
                Your mission: insert mathematical operations between these digits to make the expression equal to 100.
              </p>
              <div className="bg-[#081c30] p-6 rounded-xl mb-6">
                <p className="text-xl text-center text-white font-mono mb-2">Example: 2 5 9 1 7 4</p>
                <p className="text-lg text-center text-amber-100 font-mono">Solution: 2 × 5 × 9 + 1 × 7 + 4 = 100</p>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                The key rule: you must use the digits in the exact order given—no rearrangements allowed! You can use 
                addition, subtraction, multiplication, division, exponentiation, and parentheses to create your solution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-slate-800 bg-opacity-40 p-6 rounded-2xl border border-white border-opacity-5 shadow-xl h-full">
                <div className="bg-gradient-to-r from-amber-500 to-orange-600 w-12 h-12 rounded-xl flex justify-center items-center text-xl mb-4 shadow-lg shadow-orange-500/30">
                  ⏱️
                </div>
                <h3 className="text-xl mb-3 text-amber-100 font-semibold">Timed Challenges</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Race against the clock in timed modes that push your mental calculation speed to new heights.
                  Compete for top spots on our global leaderboards.
                </p>
              </div>

              <div className="bg-slate-800 bg-opacity-40 p-6 rounded-2xl border border-white border-opacity-5 shadow-xl h-full">
                <div className="bg-gradient-to-r from-amber-500 to-orange-600 w-12 h-12 rounded-xl flex justify-center items-center text-xl mb-4 shadow-lg shadow-orange-500/30">
                  🏆
                </div>
                <h3 className="text-xl mb-3 text-amber-100 font-semibold">Daily Tournaments</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Join daily tournaments where you can test your skills against other players with the same set of challenges. 
                  Win prizes and recognition in our vibrant community.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-800 bg-opacity-40 p-6 rounded-2xl border border-white border-opacity-5 shadow-xl h-full">
                <h3 className="text-xl mb-3 text-amber-100 font-semibold">1. Train</h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  Practice with our adaptive difficulty system that grows with your improving skills.
                </p>
              </div>

              <div className="bg-slate-800 bg-opacity-40 p-6 rounded-2xl border border-white border-opacity-5 shadow-xl h-full">
                <h3 className="text-xl mb-3 text-amber-100 font-semibold">2. Compete</h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  Enter tournaments and challenge other players to test your abilities.
                </p>
              </div>

              <div className="bg-slate-800 bg-opacity-40 p-6 rounded-2xl border border-white border-opacity-5 shadow-xl h-full">
                <h3 className="text-xl mb-3 text-amber-100 font-semibold">3. Improve</h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  Track your progress with our analytics and watch your mental math powers grow.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why HectoClash is Different */}
        <div className="py-16 px-7 relative z-1 bg-[#081c3099] bg-opacity-60">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl mb-10 text-amber-100 font-bold text-center">Why HectoClash is Different</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-800 bg-opacity-40 p-6 rounded-2xl border border-white border-opacity-5 shadow-xl h-full">
                <h3 className="text-xl mb-3 text-amber-100 font-semibold">Scientifically Designed</h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  Our challenges are crafted based on cognitive science research to maximize mental development.
                  We focus on building neural pathways that enhance mathematical intuition and speed.
                </p>
              </div>

              <div className="bg-slate-800 bg-opacity-40 p-6 rounded-2xl border border-white border-opacity-5 shadow-xl h-full">
                <h3 className="text-xl mb-3 text-amber-100 font-semibold">Personalized Growth Path</h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  Our AI-powered system identifies your strengths and weaknesses, creating a customized 
                  learning journey that ensures optimal improvement with each session.
                </p>
              </div>

              <div className="bg-slate-800 bg-opacity-40 p-6 rounded-2xl border border-white border-opacity-5 shadow-xl h-full">
                <h3 className="text-xl mb-3 text-amber-100 font-semibold">More Than Just Math</h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  HectoClash develops transferable cognitive skills that improve performance in various fields—from 
                  finance and engineering to programming and decision-making.
                </p>
              </div>

              <div className="bg-slate-800 bg-opacity-40 p-6 rounded-2xl border border-white border-opacity-5 shadow-xl h-full">
                <h3 className="text-xl mb-3 text-amber-100 font-semibold">Vibrant Community</h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  Join thousands of mathematical enthusiasts who share strategies, challenge each other, 
                  and celebrate achievements together.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="py-20 px-7 relative z-1 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl mb-6 text-amber-100 font-bold">Ready to Transform Your Mathematical Mind?</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-10">
              Join thousands of players who are already experiencing the benefits of regular mental math training with HectoClash.
              Whether you're looking to improve your academic performance, boost your career prospects, or simply enjoy the 
              satisfaction of solving challenging puzzles—HectoClash has something for you.
            </p>
            <Link to="/play">
              <button 
                className="bg-gradient-to-r from-[#EE964B] to-[coral] text-white border-none py-4 px-8 rounded-lg font-bold text-xl cursor-pointer transition-all duration-400 inline-flex items-center gap-2.5 shadow-lg shadow-[coral]/40 hover:transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-[coral]/50 active:-translate-y-0.5 active:shadow-lg active:shadow-[coral]/40"
              >
                START PLAYING NOW
              </button>
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}