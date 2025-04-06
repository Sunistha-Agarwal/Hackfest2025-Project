import React, { useState, useEffect } from 'react';
import Navbar from '../ui/Navbar';
import { usefirebase } from '../../context/firebase';
import { ref, onValue, off } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const Leaderboard = () => {
  const { database } = usefirebase();
  const [players, setPlayers] = useState([]);
  const [currentUserUID, setCurrentUserUID] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUserUID(user?.uid || null);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!database) {
      setLoading(false);
      setError("Database connection not available");
      return;
    }

    setLoading(true);
    const usersRef = ref(database, 'users');

    const handleData = (snapshot) => {
      try {
        const data = snapshot.val();

        if (data) {
          const allPlayers = Object.entries(data)
            .filter(([, player]) => player.rating !== undefined)
            .sort(([, a], [, b]) => b.rating - a.rating)
            .map(([uid, player], index) => ({
              ...player,
              uid,
              rank: index + 1,
              name: `${player.firstName || ''} ${player.lastName || ''}`.trim() || 'Anonymous Player',
              avatar: getPlayerAvatar(player),
              score: player.rating || 0
            }));

          const top50 = allPlayers.slice(0, 50);
          const userInTop50 = top50.find(p => p.uid === currentUserUID);

          if (!userInTop50 && currentUserUID) {
            const currentUserEntry = allPlayers.find(p => p.uid === currentUserUID);
            if (currentUserEntry) {
              top50.push({ ...currentUserEntry, isExtraUser: true });
            }
          }

          setPlayers(top50);
        } else {
          setPlayers([]);
        }

        setLoading(false);
      } catch (err) {
        console.error("Error processing leaderboard data:", err);
        setError("Failed to process leaderboard data");
        setLoading(false);
      }
    };

    const handleError = (err) => {
      console.error("Firebase data error:", err);
      setError("Failed to load leaderboard data");
      setLoading(false);
    };

    onValue(usersRef, handleData, handleError);

    return () => off(usersRef);
  }, [database, currentUserUID]);

  const getPlayerAvatar = (player) => {
    if (player.profilePicture) return null;
    const firstInitial = player.firstName?.[0] || '';
    const lastInitial = player.lastName?.[0] || '';
    return firstInitial + lastInitial || '?';
  };

  const getRankStyle = (rank) => {
    if (rank === 1) return 'text-yellow-400 text-lg font-bold';
    if (rank === 2) return 'text-gray-300 text-lg font-bold';
    if (rank === 3) return 'text-amber-700 text-lg font-bold';
    return 'font-semibold';
  };

  return (
    <div className="bg-[#05111d] text-white min-h-screen">
      <Navbar />
      <div className="p-12 md:p-16">
        <h2 className="text-center text-4xl md:text-5xl mb-10 text-[#f8e8ba]">
          Global <span className="text-[#F95738]">Leaderboard</span>
        </h2>

        <div className="max-w-4xl mx-auto bg-white/[0.03] rounded-2xl shadow-xl border border-white/[0.05] overflow-x-auto">
          {loading && (
            <div className="p-10 text-center">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#f8e8ba] border-r-transparent" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <p className="mt-2">Loading leaderboard data...</p>
            </div>
          )}

          {error && !loading && (
            <div className="p-10 text-center text-red-400">
              <p>{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="mt-4 px-4 py-2 bg-[#F95738] rounded-lg hover:bg-[#d84a30] transition-colors"
              >
                Retry
              </button>
            </div>
          )}

          {!loading && !error && (
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-[#081c30]/80">
                  <th className="p-5 text-left text-[#f8e8ba] border-b border-white/10 w-16">Rank</th>
                  <th className="p-5 text-left text-[#f8e8ba] border-b border-white/10">Player</th>
                  <th className="p-5 text-left text-[#f8e8ba] border-b border-white/10">Score</th>
                </tr>
              </thead>
              <tbody>
                {players.map((player, idx) => {
                  const isCurrentUser = player.uid === currentUserUID;
                  const showDivider = idx > 0 && players[idx - 1].rank < 50 && player.isExtraUser;

                  return (
                    <React.Fragment key={`${player.uid}-${player.rank}`}>
                      {showDivider && (
                        <tr>
                          <td colSpan="3" className="border-t border-white/10"></td>
                        </tr>
                      )}
                      <tr className={`hover:bg-white/[0.03] ${isCurrentUser ? 'bg-[#1c2d44]/50' : ''}`}>
                        <td className={`p-5 text-center border-b border-white/5 ${getRankStyle(player.rank)}`}>
                          {player.rank}
                        </td>
                        <td className="p-5 border-b border-white/5">
                          <div className="flex items-center gap-4">
                            {player.profilePicture ? (
                              <img
                                src={player.profilePicture}
                                alt={player.name}
                                className="w-10 h-10 rounded-full border-2 border-[#EE964B] object-cover"
                              />
                            ) : (
                              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#081c30] to-[#05111d] flex justify-center items-center font-bold border-2 border-[#EE964B]">
                                {player.avatar}
                              </div>
                            )}
                            <div className="font-medium">
                              {player.name}
                              {isCurrentUser && (
                                <span className="ml-2 px-2 py-0.5 text-xs bg-[#F95738] text-white rounded">You</span>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="p-5 border-b border-white/5 font-semibold text-[#f8e8ba]">
                          {player.score.toLocaleString()}
                        </td>
                      </tr>
                    </React.Fragment>
                  );
                })}
                {players.length === 0 && !loading && (
                  <tr>
                    <td colSpan="3" className="p-6 text-center text-white/50">No players found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;