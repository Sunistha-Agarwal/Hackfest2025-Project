import React, { useState } from "react";
import { usefirebase } from "../../context/firebase";
import { useNavigate } from "react-router-dom";
import Footer from "../ui/Footer"; 

const Signup = () => {
  const firebase = usefirebase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mathLevel, setMathLevel] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const getInitialRating = (level) => {
    switch (level) {
      case "beginner": return 800;
      case "intermediate": return 1200;
      case "advanced": return 1600;
      case "expert": return 2000;
      default: return 1000;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
      alert("Password must be at least 6 characters long");
      return;
    }
    if ((password !== confirmPassword)) {
      alert("Passwords do not match");
      return;
    }
    if (!email || !password || !firstName || !lastName || !mathLevel) {
      alert("Please fill in all fields");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email address");
      return;
    }
    if (!/^[a-zA-Z]+$/.test(firstName) || !/^[a-zA-Z]+$/.test(lastName)) {
      alert("First and last names can only contain letters");
      return;
    }
    if (!/^[a-zA-Z0-9!@#$%^&*]{6,}$/.test(password)) {
      alert(
        "Password must be at least 6 characters long and can contain letters, numbers, and special characters"
      );
      return;
    } else {
      try {
        setLoading(true);
        await firebase.createUser(email, password, {
          firstName,
          lastName,
          mathLevel,
          rating: getInitialRating(mathLevel),
          createdAt: new Date().toISOString(),
        });
        setLoading(false);
        alert("User Created");
        navigate("/");
      } catch (err) {
        if (err.code === "auth/email-already-in-use") {
          alert("This email is already in use.");
        } else {
          alert("Error: " + err.message);
        }
      }
    }
  };

  return (
    <div className="bg-[#05111d] text-white min-h-screen flex flex-col">
      <div className="absolute top-0 right-0 w-full h-full z-0 overflow-hidden opacity-15">
        <div className="absolute right-[-300px] top-[100px] w-[1100px] h-[1100px] border-2 border-[#F95738] rounded-[45%_47%_43%_42%] animate-[rotate_15s_linear_infinite]"></div>
        <div className="absolute right-[-300px] top-[100px] w-[1100px] h-[1100px] border-2 border-[#EE964B] rounded-[47%_43%_51%_45%] animate-[rotate_25s_linear_infinite]"></div>
        <div className="absolute right-[-300px] top-[100px] w-[1100px] h-[1100px] border-2 border-[#f8e8ba] rounded-[42%_46%_39%_45%] animate-[rotate_35s_linear_infinite]"></div>
      </div>


      <div className="flex-1 flex items-center justify-center p-5 md:p-8 relative z-1">
        <div className="flex max-w-[900px] w-full gap-5 items-start flex-col lg:flex-row">
          <div className="bg-[#081c30]/70 border border-white/10 rounded-xl p-8 flex-1 shadow-xl backdrop-blur-md">
            <div className="text-center mb-6">
              <h1 className="text-4xl mb-2.5 text-white shadow-md">
                Join Hecto
                <span className="bg-gradient-to-br from-[#F4D35E] to-[#F95738] bg-clip-text text-transparent">
                  Clash
                </span>
              </h1>
              <p className="text-[#f8e8ba] text-lg opacity-90">
                Begin your journey to mathematical excellence
              </p>
            </div>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex flex-col gap-1.5 flex-1">
                  <label
                    htmlFor="firstName"
                    className="text-[#f8e8ba] font-medium text-sm"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="bg-white/10 border border-white/20 rounded-lg p-3 text-white text-base transition-all duration-300 focus:outline-none focus:border-[#EE964B] focus:bg-white/15 focus:shadow-[0_0_0_3px_rgba(238,150,75,0.2)]"
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                  />
                </div>
                <div className="flex flex-col gap-1.5 flex-1">
                  <label
                    htmlFor="lastName"
                    className="text-[#f8e8ba] font-medium text-sm"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="bg-white/10 border border-white/20 rounded-lg p-3 text-white text-base transition-all duration-300 focus:outline-none focus:border-[#EE964B] focus:bg-white/15 focus:shadow-[0_0_0_3px_rgba(238,150,75,0.2)]"
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="text-[#f8e8ba] font-medium text-sm"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="bg-white/10 border border-white/20 rounded-lg p-3 text-white text-base transition-all duration-300 focus:outline-none focus:border-[#EE964B] focus:bg-white/15 focus:shadow-[0_0_0_3px_rgba(238,150,75,0.2)]"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="password"
                  className="text-[#f8e8ba] font-medium text-sm"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  className="bg-white/10 border border-white/20 rounded-lg p-3 text-white text-base transition-all duration-300 focus:outline-none focus:border-[#EE964B] focus:bg-white/15 focus:shadow-[0_0_0_3px_rgba(238,150,75,0.2)]"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="confirmPassword"
                  className="text-[#f8e8ba] font-medium text-sm"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  required
                  className="bg-white/10 border border-white/20 rounded-lg p-3 text-white text-base transition-all duration-300 focus:outline-none focus:border-[#EE964B] focus:bg-white/15 focus:shadow-[0_0_0_3px_rgba(238,150,75,0.2)]"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="mathLevel"
                  className="text-[#f8e8ba] font-medium text-sm"
                >
                  Your Math Proficiency Level
                </label>
                <select
                  id="mathLevel"
                  name="mathLevel"
                  required
                  className="bg-white/10 border border-white/20 rounded-lg p-3 text-black text-base transition-all duration-300 focus:outline-none focus:border-[#EE964B] focus:bg-white/15 focus:shadow-[0_0_0_3px_rgba(238,150,75,0.2)] cursor-pointer"
                  value={mathLevel}
                  onChange={(e) => setMathLevel(e.target.value)}
                >
                  <option value="" disabled>
                    Select your level
                  </option>
                  <option value="beginner">
                    Beginner - Looking to build foundations
                  </option>
                  <option value="intermediate">
                    Intermediate - Comfortable with various concepts
                  </option>
                  <option value="advanced">
                    Advanced - Seeking to refine advanced skills
                  </option>
                  <option value="expert">
                    Expert - Ready for the toughest challenges
                  </option>
                </select>
              </div>

              <div className="flex items-start gap-2.5 my-2.5">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  required
                  className="mt-1.5 accent-[#F95738] w-4 h-4"
                />
                <label
                  htmlFor="terms"
                  className="text-sm text-white/80 leading-relaxed"
                >
                  I agree to the{" "}
                  <a
                    href="#"
                    className="text-[#EE964B] no-underline transition-colors duration-300 hover:text-[#F95738] hover:underline"
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="text-[#EE964B] no-underline transition-colors duration-300 hover:text-[#F95738] hover:underline"
                  >
                    Privacy Policy
                  </a>
                  . I understand that my data will be used as described in the
                  Privacy Policy.
                </label>
              </div>

              <button
                type="submit"
                className="bg-gradient-to-br from-[#EE964B] to-[#F95738] text-white border-none py-3.5 rounded-lg font-bold text-lg cursor-pointer transition-all duration-300 mt-2.5 shadow-lg shadow-[#F95738]/30 hover:translate-y-[-3px] hover:shadow-xl hover:shadow-[#F95738]/40"
                disabled={loading}
              >
                {loading ? "Creating Account..." : "Create Account"}
              </button>

              <div className="text-center mt-5 text-white/70 text-sm">
                Already have an account?{" "}
                <a
                  href="/Signin"
                  className="text-[#f8e8ba] no-underline font-medium transition-colors duration-300 hover:text-[#F95738]"
                >
                  Log in
                </a>
              </div>
            </form>
          </div>

         
          <div className="bg-[#081c30]/70 border border-white/10 rounded-xl p-8 w-full lg:w-[280px] shadow-xl backdrop-blur-md lg:sticky lg:top-[100px]">
            <div>
              <div className="flex justify-center mb-4">
                <span className="bg-gradient-to-br from-[#EE964B] to-[#F95738] w-12 h-12 rounded-full flex justify-center items-center font-bold text-2xl shadow-md shadow-[#F95738]/50">
                  🏆
                </span>
              </div>
              <h3 className="text-[#f8e8ba] text-lg mb-3 text-center">
                Benefits of joining HectoClash:
              </h3>
              <ul className="flex flex-col gap-3 list-none">
                <li className="flex items-start gap-2.5 text-sm text-white/80 before:content-['✓'] before:text-[#F95738] before:font-bold">
                  Access to daily mental math challenges
                </li>
                <li className="flex items-start gap-2.5 text-sm text-white/80 before:content-['✓'] before:text-[#F95738] before:font-bold">
                  Track your progress with advanced analytics
                </li>
                <li className="flex items-start gap-2.5 text-sm text-white/80 before:content-['✓'] before:text-[#F95738] before:font-bold">
                  Compete in global tournaments with real prizes
                </li>
                <li className="flex items-start gap-2.5 text-sm text-white/80 before:content-['✓'] before:text-[#F95738] before:font-bold">
                  Connect with a community of math enthusiasts
                </li>
                <li className="flex items-start gap-2.5 text-sm text-white/80 before:content-['✓'] before:text-[#F95738] before:font-bold">
                  Personalized learning path based on your skill level
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>


      <Footer/>
    </div>
  );
};

export default Signup;
