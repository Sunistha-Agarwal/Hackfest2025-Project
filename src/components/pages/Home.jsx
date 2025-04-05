import { NavLink,Link } from 'react-router-dom';
import Footer from "../ui/Footer"


export default function Home() {

    return(
        <>
        <div className='bg-[#05111d]'>
        <nav className="flex justify-between items-center p-5 bg-[#05111d] sticky top-0 z-10 shadow-lg backdrop-blur-md md:px-[5%]">
      <div className="bg-gradient-to-r from-[#EE964B] to-[#F95738] w-12 h-12 rounded-full flex justify-center items-center font-bold text-lg shadow-lg shadow-coral/50">
        HC
      </div>
      
      <ul className="hidden md:flex list-none">
        <li className="mx-5">
          <NavLink to="/" className="text-white no-underline font-medium transition-all duration-300 py-2.5 relative hover:text-[coral] hover:shadow-text-md">
            Home
          </NavLink>
        </li>
        <li className="mx-5">
          <NavLink to="/features" className="text-white no-underline font-medium transition-all duration-300 py-2.5 relative hover:text-[coral] hover:shadow-text-md">
            Features
          </NavLink>
        </li>
        <li className="mx-5">
          <NavLink to="/about" className="text-white no-underline font-medium transition-all duration-300 py-2.5 relative hover:text-[coral] hover:shadow-text-md">
            About
          </NavLink>
        </li>
        <li className="mx-5">
          <NavLink to="/contact" className="text-white no-underline font-medium transition-all duration-300 py-2.5 relative hover:text-[coral] hover:shadow-text-md">
            Contact
          </NavLink>
        </li>
      </ul>
      
      <a href='/Signin'><button 
        className="bg-gradient-to-r from-[#EE964B] to-[coral] text-white border-none py-3 px-7 rounded-md font-bold cursor-pointer transition-all duration-300 text-base shadow-md shadow-coral/30 hover:transform hover:scale-105 hover:-translate-y-1 hover:shadow-lg hover:shadow-coral/50"

      >
        Sign Up
      </button></a>
    </nav>
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
          <button 
            className="bg-gradient-to-r from-[#EE964B] to-[coral] text-white border-none py-4 px-8 rounded-lg font-bold text-xl cursor-pointer transition-all duration-400 inline-flex items-center gap-2.5 shadow-lg shadow-[coral]/40 hover:transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-[coral]/50 active:-translate-y-0.5 active:shadow-lg active:shadow-[coral]/40"

          >
            Join the Community
          </button>
        </div>
      </div>


      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold text-[#EE964B]">Features</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Global Competitions</h3>
            <p className="text-gray-400">Challenge players worldwide.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Advanced Analytics</h3>
            <p className="text-gray-400">Track and improve performance.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Cognitive Enhancement</h3>
            <p className="text-gray-400">Sharpen your mind with rapid math.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-gray-800 text-center">
        <h2 className="text-4xl font-bold text-[#EE964B]">Testimonials</h2>
        <div className="mt-10">
          <p className="text-gray-300 italic">"HectoClash made mental math fun and engaging!"</p>
          <p className="mt-2 text-gray-400">- Alex Johnson</p>
        </div>
      </section>

      <Footer/>
      </div>
      </>
    )
}