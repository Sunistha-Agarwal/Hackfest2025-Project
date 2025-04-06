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
    const fetchUserData = async () => {
      if (currentUser) {
        try {
          const userRef = ref(database, `users/${currentUser.uid}`);
          const snapshot = await get(userRef);
          if (snapshot.exists()) {
            setProfileData(snapshot.val());
          } else {
            console.warn("User data not found in database.");
          }
        } catch (error) {
          console.error("Failed to fetch user profile:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchUserData();
  }, [currentUser, database]);

  if (loading) return <div>Loading profile...</div>;
  if (!profileData) return <div>No profile data found.</div>;

  return (
    <div className='bg-[#05111d] h-screen'>
      <Navbar/>

      <div className="absolute top-0 right-0 w-full h-full z-0 overflow-hidden opacity-15 pointer-events-none">
        <div className="absolute right-[-20vw] top-[10vh] w-[90vw] h-[90vw] max-w-[1000px] max-h-[1000px] border-2 border-[#F95738] rounded-[45%_47%_43%_42%] animate-[spin_15s_linear_infinite]"></div>
        <div className="absolute right-[-20vw] top-[10vh] w-[90vw] h-[90vw] max-w-[1000px] max-h-[1000px] border-2 border-[#EE964B] rounded-[47%_43%_51%_45%] animate-[spin_25s_linear_infinite]"></div>
      </div>
      <div className="max-w-md mx-auto px-6 py-14 bg-[#07192b] shadow-md space-y-4 border border-[#081c30]/40 border-opacity-10 rounded-2xl my-14 h-96">
        <div className="text-center">
          {profileData.profilePicture && (
            <img
              src={profileData.profilePicture}
              alt="Profile"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
          )}
          <h2 className="text-xl font-semibold text-[#f8e8ba]">
            {profileData.firstName} {profileData.lastName}
          </h2>
          <p className="text-gray-600">{profileData.email}</p>
        </div>
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <p className="text-sm text-gray-500">Rating</p>
            <p className="text-lg font-bold text-[#f8e8ba]">{profileData.rating}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Level</p>
            <p className="text-lg font-bold text-[#f8e8ba]">{profileData.levelOfPlay}</p>
          </div>
        </div>
        <p className="text-sm text-gray-400 text-center">
          Joined on {new Date(profileData.createdAt).toLocaleDateString()}
        </p>
      </div>
    <Footer/>
    </div>
  );
};

export default Profile;