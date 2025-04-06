import { NavLink,Link } from 'react-router-dom';
import Footer from "../ui/Footer";
import Navbar from '../ui/Navbar';


export default function Home() {

    return(
        <>
        <div className='bg-[#05111d]'>
      
        <Navbar/>
       
        <div className=" z-0 w-full h-full overflow-hidden opacity-15 absolute top-0 right-0">
        <div className="absolute right-[-300px] top-[100px] w-[1100px] h-[1100px] border-2 border-[coral] rounded-[45%_47%_43%_42%] animate-rotate-slow"></div>
        <div className="absolute right-[-300px] top-[100px] w-[1100px] h-[1100px] border-2 border-[#EE964B] rounded-[47%_43%_51%_45%] animate-rotate-medium"></div>
        <div className="absolute right-[-300px] top-[100px] w-[1100px] h-[1100px] border-2 border-[#f8e8ba] rounded-[42%_46%_39%_45%] animate-rotate-fast"></div>
      </div>
      
      <div className="flex flex-col md:flex-row py-20 px-[7%] md:px-[5%] relative z-1 gap-15 md:gap-10">
        <div className="flex-1 max-w-3xl">
          <h1 className="text-5xl md:text-6xl mb-4 leading-tight tracking-tight shadow-text-md font-bold">
            Hecto<span className="bg-gradient-to-r from-[#F4D35E] to-[coral] bg-clip-text text-transparent">Clash</span>
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6 text-[#f8e8ba] shadow-text-md">
            Elevate Your Mathematical Mind
          </h2>
          <p className="mb-10 leading-relaxed text-xl text-white/85 max-w-[90%]">
            Join the elite community of mental mathematicians who are pushing the boundaries of calculation speed and problem-solving. HectoClash offers a revolutionary approach to mathematical training through innovative challenges, competitions, and personalized learning paths.
          </p>
          <NavLink to="/play">
          <button 
            className="bg-gradient-to-r from-[#EE964B] to-[coral] text-white border-none py-4 px-8 rounded-lg font-bold text-xl cursor-pointer transition-all duration-400 inline-flex items-center gap-2.5 shadow-lg shadow-[coral]/40 hover:transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-[coral]/50 active:-translate-y-0.5 active:shadow-lg active:shadow-[coral]/40"

          >
            PLAY
          </button>
          </NavLink>
        </div>
      </div>


      <div className="py-20 px-7 bg-opacity-60 bg-[#081c3099] relative z-1 font-bold">
        <h2 className="text-center text-4xl mb-16 text-amber-100 drop-shadow-md">
          Why Choose <span className="text-[#F95738]">HectoClash</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-slate-800 bg-opacity-3 p-8 rounded-2xl transition-all hover:-translate-y-2 border border-white border-opacity-5 shadow-xl h-full flex flex-col">
          <div className="bg-gradient-to-r from-amber-500 to-orange-600 w-16 h-16 rounded-xl flex justify-center items-center text-2xl mb-5 shadow-lg shadow-orange-500/30">
          🏆 
          </div>
          <h3 className="text-2xl mb-4 text-amber-100">Global Competitions</h3>
          <p className="text-gray-300 text-lg leading-relaxed flex-grow">Test your skills against the world's best mathematical minds in our regularly scheduled tournaments with real prizes and recognition.</p>
          </div>

          <div className="bg-slate-800 bg-opacity-3 p-8 rounded-2xl transition-all hover:-translate-y-2 border border-white border-opacity-5 shadow-xl h-full flex flex-col">
          <div className="bg-gradient-to-r from-amber-500 to-orange-600 w-16 h-16 rounded-xl flex justify-center items-center text-2xl mb-5 shadow-lg shadow-orange-500/30">
          📈 
          </div>
          <h3 className="text-2xl mb-4 text-amber-100">Advanced Analytics</h3>
          <p className="text-gray-300 text-lg leading-relaxed flex-grow">Track your progress with our comprehensive performance metrics, identifying strengths and opportunities for improvement in your mathematical reasoning.</p>
          </div>

          <div className="bg-slate-800 bg-opacity-3 p-8 rounded-2xl transition-all hover:-translate-y-2 border border-white border-opacity-5 shadow-xl h-full flex flex-col">
          <div className="bg-gradient-to-r from-amber-500 to-orange-600 w-16 h-16 rounded-xl flex justify-center items-center text-2xl mb-5 shadow-lg shadow-orange-500/30">
          🧠 
          </div>
          <h3 className="text-2xl mb-4 text-amber-100">Cognitive Enhancement</h3>
          <p className="text-gray-300 text-lg leading-relaxed flex-grow">Our scientifically designed challenges target specific cognitive functions, improving not just math skills but overall mental processing speed.</p>
          </div>

          <div className="bg-slate-800 bg-opacity-3 p-8 rounded-2xl transition-all hover:-translate-y-2 border border-white border-opacity-5 shadow-xl h-full flex flex-col">
          <div className="bg-gradient-to-r from-amber-500 to-orange-600 w-16 h-16 rounded-xl flex justify-center items-center text-2xl mb-5 shadow-lg shadow-orange-500/30">
          🌐 
          </div>
          <h3 className="text-2xl mb-4 text-amber-100">Community Support</h3>
          <p className="text-gray-300 text-lg leading-relaxed flex-grow">Test your skills against the world's best mathematical minds in our regularly scheduled tournaments with real prizes and recognition.</p>
          </div>

          <div className="bg-slate-800 bg-opacity-3 p-8 rounded-2xl transition-all hover:-translate-y-2 border border-white border-opacity-5 shadow-xl h-full flex flex-col">
          <div className="bg-gradient-to-r from-amber-500 to-orange-600 w-16 h-16 rounded-xl flex justify-center items-center text-2xl mb-5 shadow-lg shadow-orange-500/30">
          🚀 
          </div>
          <h3 className="text-2xl mb-4 text-amber-100">Adaptive Learning</h3>
          <p className="text-gray-300 text-lg leading-relaxed flex-grow">Test your skills against the world's best mathematical minds in our regularly scheduled tournaments with real prizes and recognition.</p>
          </div>

          <div className="bg-slate-800 bg-opacity-3 p-8 rounded-2xl transition-all hover:-translate-y-2 border border-white border-opacity-5 shadow-xl h-full flex flex-col">
          <div className="bg-gradient-to-r from-amber-500 to-orange-600 w-16 h-16 rounded-xl flex justify-center items-center text-2xl mb-5 shadow-lg shadow-orange-500/30">
          🔍 
          </div>
          <h3 className="text-2xl mb-4 text-amber-100">Career Advancement</h3>
          <p className="text-gray-300 text-lg leading-relaxed flex-grow">Test your skills against the world's best mathematical minds in our regularly scheduled tournaments with real prizes and recognition.</p>
          </div>
        </div>
        
      </div>
      

      <div className="py-20 px-7 relative bg-[#05111d] z-1" >
        <h2 className="text-center text-4xl mb-16 text-amber-100 drop-shadow-md font-bold">
          What Our <span className="text-orange-500">Members</span> Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-[#081c30] bg-opacity-3 p-8 rounded-2xl border-opacity-5 shadow-xl">
            <p className="italic mb-5 text-gray-300 text-lg leading-relaxed">
              "Since joining HectoClash six months ago, my calculation speed has improved dramatically. I'm now solving complex problems in half the time it used to take me."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-slate-800 flex justify-center items-center mr-4 font-bold text-amber-100 border-2 border-amber-500">
              JD
              </div>
              <div>
                <h4 className="text-lg text-amber-100 mb-1 font-semibold">James Dougla</h4>
                <p className="text-sm text-gray-400">Software Engineer</p>
              </div>
            </div>
          </div>

          <div className="bg-[#081c30] bg-opacity-3 p-8 rounded-2xl border-opacity-5 shadow-xl">
            <p className="italic mb-5 text-gray-300 text-lg leading-relaxed">
            "The community aspect of HectoClash is incredible. I've connected with like-minded people who challenge and inspire me to improve every day."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-slate-800 flex justify-center items-center mr-4 font-bold text-amber-100 border-2 border-amber-500">
              LM              </div>
              <div>
                <h4 className="text-lg text-amber-100 mb-1 font-semibold">Lisa Mathews</h4>
                <p className="text-sm text-gray-400">Mathematics Professor</p>
              </div>
            </div>
          </div>

          <div className="bg-[#081c30] bg-opacity-3 p-8 rounded-2xl border-opacity-5 shadow-xl">
            <p className="italic mb-5 text-gray-300 text-lg leading-relaxed">
            "HectoClash's analytics helped me identify specific areas where I needed improvement. After three months of focused practice, I've seen a 40% boost in my performance."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-slate-800 flex justify-center items-center mr-4 font-bold text-amber-100 border-2 border-amber-500">
                RS
              </div>
              <div>
                <h4 className="text-lg text-amber-100 mb-1 font-semibold">Robert Stein</h4>
                <p className="text-sm text-gray-400">Finance Analyst</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
      </div>
      </>
    )
}