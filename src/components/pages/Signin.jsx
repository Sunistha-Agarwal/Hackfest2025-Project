import { useState } from "react";
import Footer from "../ui/Footer";
import { useNavigate } from "react-router";
import { usefirebase } from "../../context/firebase";

export default function Signin() {
  const navigate = useNavigate();
  const firebase = usefirebase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in both fields");
      return;
    }
  
    setLoading(true);
    setError("");
    
    try {
      // Sign in user with email/password
      await firebase.loginUser(email, password);
      
      setLoading(false);
      navigate("/");
    } catch (err) {
      setLoading(false);
      if (err.code === "auth/user-not-found") {
        setError("No user found with this email.");
      } else if (err.code === "auth/wrong-password") {
        setError("Incorrect password.");
      } else if (err.code === "auth/invalid-credential") {
        setError("Invalid email or password.");
      } else {
        setError(`Error: ${err.message}`);
      }
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError("");
    try {
      await firebase.signInWithGoogle();
      navigate("/");
    } catch (err) {
      setError("Google sign-in failed. Please try again.");
      console.error("Google sign-in error:", err);
    } finally {
      setLoading(false);
    }
  };

  const footerLinks = ["Privacy Policy", "Terms of Service", "FAQ", "Support"];

  return (
    <div className="min-h-screen flex flex-col bg-[#05111d] text-white">

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
              Hecto
              <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
                Clash
              </span>
            </h1>
            <p className="text-white text-opacity-80 text-base md:text-lg">
              Sign in to continue your mathematical journey
            </p>
          </div>

          {error && (
            <div className="bg-red-500/20 border border-red-500/30 text-white p-3 rounded-lg mb-4">
              {error}
            </div>
          )}

          <form className="flex flex-col gap-5" onSubmit={handleLogin}>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-amber-100">
                Email Address
              </label>
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
              <label htmlFor="password" className="text-amber-100">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                required
                className="bg-white/10 border border-[#081c30]/20 rounded-lg p-3 text-white text-base transition-all duration-300 focus:outline-none focus:border-[#EE964B] focus:bg-white/15 focus:shadow-[0_0_0_3px_rgba(238,150,75,0.2)]"
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="text-right -mt-2">
              <a
                href="/forgot-password"
                className="text-orange-400 no-underline text-sm hover:text-red-500 hover:underline transition-colors duration-300"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-orange-400 to-red-500 text-white border-none py-4 rounded-lg font-bold text-lg cursor-pointer transition-all duration-300 shadow-md shadow-red-500/30 hover:-translate-y-1 hover:shadow-lg mt-2 flex justify-center items-center disabled:opacity-70 disabled:hover:translate-y-0"
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          <div className="mt-8 text-center text-white text-opacity-80 text-sm">
            Don't have an account?{" "}
            <a
              href="/signup"
              className="text-orange-400 no-underline font-medium hover:text-red-500 hover:underline transition-colors duration-300"
            >
              Sign up
            </a>
          </div>
        </div>
      </main>

      <Footer/>
    </div>
  );
}
