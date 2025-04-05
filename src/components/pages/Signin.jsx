import { useState } from 'react';
import Navbar from '../ui/Navbar';

export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Simulate API call
      console.log('Sign in attempt with:', { email, password });
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Success handling would go here
      console.log('Sign in successful');
    } catch (error) {
      console.error('Sign in failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const footerLinks = ['Privacy Policy', 'Terms of Service', 'FAQ', 'Support'];

  return (
    <div className="min-h-screen flex flex-col bg-[#05111d] text-white">
      <Navbar/>
      
      {/* Main Content */}
      <main className="flex-1 flex justify-center items-center p-4 md:p-12 relative z-1 max-h-screen">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden opacity-15">
          <div className="absolute right-[-300px] top-[100px] w-[1100px] h-[1100px] border-2 border-red-500 rounded-[45%_47%_43%_42%] animate-[spin_15s_linear_infinite]"></div>
          <div className="absolute right-[-300px] top-[100px] w-[1100px] h-[1100px] border-2 border-orange-400 rounded-[47%_43%_51%_45%] animate-[spin_25s_linear_infinite]"></div>
          <div className="absolute right-[-300px] top-[100px] w-[1100px] h-[1100px] border-2 border-amber-100 rounded-[42%_46%_39%_45%] animate-[spin_35s_linear_infinite]"></div>
        </div>
        
        {/* Sign In Container */}
        <div className="bg-[#081c30] bg-opacity-60 rounded-2xl p-6 md:p-10 w-full max-w-md shadow-2xl border border-[#081c30] border-opacity-5 z-10 backdrop-blur-sm">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl mb-2 text-amber-100 font-bold">
              Hecto<span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">Clash</span>
            </h1>
            <p className="text-white text-opacity-80 text-base md:text-lg">Sign in to continue your mathematical journey</p>
          </div>
          
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-amber-100">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                required
                className="bg-white/10 border border-[#081c30]/20 rounded-lg p-3 text-white text-base transition-all duration-300 focus:outline-none focus:border-[#EE964B] focus:bg-white/15 focus:shadow-[0_0_0_3px_rgba(238,150,75,0.2)]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-amber-100">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                required
                className="bg-white/10 border border-[#081c30]/20 rounded-lg p-3 text-white text-base transition-all duration-300 focus:outline-none focus:border-[#EE964B] focus:bg-white/15 focus:shadow-[0_0_0_3px_rgba(238,150,75,0.2)]"                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            
            <div className="text-right -mt-2">
              <a href="/forgot-password" className="text-orange-400 no-underline text-sm hover:text-red-500 hover:underline transition-colors duration-300">
                Forgot password?
              </a>
            </div>
            
            <button 
              type="submit" 
              disabled={isLoading}
              className="bg-gradient-to-r from-[#EE964B] to-[coral] text-white border-none py-4 rounded-lg font-bold text-lg cursor-pointer transition-all duration-300 shadow-md shadow-red-500/30 hover:-translate-y-1 hover:shadow-lg mt-2 flex justify-center items-center"
            >
              {isLoading ? (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : 'Sign In'}
            </button>
            
            <div className="flex items-center my-6 text-white text-opacity-60">
              <div className="flex-1 h-px bg-white bg-opacity-20"></div>
              <span className="px-4 text-sm">OR</span>
              <div className="flex-1 h-px bg-white bg-opacity-20"></div>
            </div>
            
            <button 
              type="button" 
              className="flex items-center justify-center gap-2 bg-white text-gray-800 border-none py-3.5 rounded-lg font-medium text-base cursor-pointer transition-all duration-300 shadow-md hover:-translate-y-1 hover:shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="20px" height="20px">
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
              </svg>
              Continue with Google
            </button>
          </form>
          
          <div className="mt-8 text-center text-white text-opacity-80 text-sm">
            Don't have an account? <a href="/signup" className="text-orange-400 no-underline font-medium hover:text-red-500 hover:underline transition-colors duration-300">Sign up</a>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="py-8 px-4 md:px-12 bg-[#05111d] text-center border-t border-[#081c30] border-opacity-5">
        <div className="flex flex-col gap-5 max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-5">
            {footerLinks.map((item) => (
              <a 
                key={item}
                href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-white text-opacity-70 no-underline hover:text-red-500 transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
          <p className="text-white text-opacity-50 text-sm">
            © 2025 HectoClash - Elevating Mathematical Excellence Worldwide
          </p>
        </div>
      </footer>
    </div>
  );
}