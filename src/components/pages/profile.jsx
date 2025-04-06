import React, { useEffect, useState } from "react";
import { usefirebase } from "../../context/firebase";
import { ref, get } from "firebase/database";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";

const Profile = () => {
  const { currentUser, database } = usefirebase();
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!currentUser) return;

    const fetchUserData = async () => {
      try {
        const userRef = ref(database, `users/${currentUser.uid}`);
        const snapshot = await get(userRef);

        if (snapshot.exists()) {
          setProfileData(snapshot.val());
        } else {
          console.warn("No user data found in the database.");
        }
      } catch (err) {
        console.error("Failed to fetch user profile data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [currentUser, database]);

  if (loading)
    return (
      <div className="text-white text-center mt-10">Loading profile...</div>
    );
  if (!profileData)
    return (
      <div className="text-white text-center mt-10">No profile data found.</div>
    );

    const {
        firstName = "User",
        lastName = "",
        email = "Not Provided",
        profilePicture,
        rating = 0,
        levelOfPlay = "Beginner",
        createdAt,
        wins = 0,
        noofmatches = 0,
        avgTime = "0s",
    } = profileData;
      

  return (
    <div className="bg-[#05111d] text-white min-h-screen flex flex-col">
      <Navbar />

      {/* Background Waves */}
      <div className="absolute top-0 right-0 w-full h-full z-0 overflow-hidden opacity-15 pointer-events-none">
        <div className="absolute right-[-20vw] top-[10vh] w-[90vw] h-[90vw] max-w-[1000px] max-h-[1000px] border-2 border-[#F95738] rounded-[45%_47%_43%_42%] animate-[spin_15s_linear_infinite]"></div>
        <div className="absolute right-[-20vw] top-[10vh] w-[90vw] h-[90vw] max-w-[1000px] max-h-[1000px] border-2 border-[#EE964B] rounded-[47%_43%_51%_45%] animate-[spin_25s_linear_infinite]"></div>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center py-8 px-4 relative z-1">
        <div className="text-center mb-8 w-full">
          <h1 className="text-4xl mb-2 font-bold">
            Player{" "}
            <span className="bg-gradient-to-br from-[#F4D35E] to-[#F95738] bg-clip-text text-transparent">
              Profile
            </span>
          </h1>
          <p className="text-[#f8e8ba] opacity-90">
            View your stats, achievements and recent games
          </p>
        </div>

        <div className="flex w-full max-w-6xl gap-8 mx-auto lg:flex-row flex-col">
          {/* Profile Card */}
          <div className="bg-[#07192b] bg-opacity-70 border border-[#081c30]/40 rounded-2xl p-6 flex-3 shadow-xl backdrop-blur-md flex flex-col">
            <div className="flex md:flex-row flex-col gap-8 mb-8 items-center p-5">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#0d6efd] to-[#5a9eee] flex items-center justify-center text-5xl font-bold text-white shadow-lg border-4 border-white border-opacity-20 overflow-hidden">
                {profilePicture ? (
                  <img
                    src={profilePicture}
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                ) : (
                  firstName.charAt(0)
                )}
              </div>
              <div className="flex-grow md:text-left text-center">
                <h2 className="text-3xl font-bold mb-1">
                  {firstName} {lastName}
                </h2>
                <div className="inline-block bg-gradient-to-br from-[#EE964B] to-[#F95738] px-3 py-1 rounded-full font-bold mb-2 text-sm">
                  {levelOfPlay}
                </div>
                <p>{email}</p>
                <p className="text-sm mt-2 text-[#f8e8ba] opacity-70">
                  Joined on {new Date(createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 mb-8">
              <div className="bg-[#142535] bg-opacity-5 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold mb-1 text-[#F4D35E]">
                  {noofmatches}
                </div>
                <div className="text-[#f8e8ba] text-sm">No. of Matches</div>
              </div>
              <div className="bg-[#142535] bg-opacity-5 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold mb-1 text-[#F4D35E]">
                  {wins}
                </div>
                <div className="text-[#f8e8ba] text-sm">Wins</div>
              </div>
              <div className="bg-[#142535] bg-opacity-5 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold mb-1 text-[#F4D35E]">
                 {avgTime}
                </div>
                <div className="text-[#f8e8ba] text-sm">Avg. Solution Time</div>
              </div>
              <div className="bg-[#142535] bg-opacity-5 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold mb-1 text-[#F4D35E]">
                  {rating}
                </div>
                <div className="text-[#f8e8ba] text-sm">Rating</div>
              </div>
            </div>

            {/* Placeholder Charts and Bars (Static for now) */}
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mb-8">
              <div className="bg-[#142535] bg-opacity-5 rounded-lg p-5 min-h-[300px]">
                <h3 className="mb-4 text-lg text-[#f8e8ba]">
                  Performance Trend
                </h3>
                <div className="text-gray-400 text-center">
                  Data Unavailable
                </div>
              </div>
              <div className="bg-[#142535] bg-opacity-5 rounded-lg p-5 min-h-[300px]">
                <h3 className="mb-4 text-lg text-[#f8e8ba]">Operation Usage</h3>
                <div className="text-gray-400 text-center">
                  Data Unavailable
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
