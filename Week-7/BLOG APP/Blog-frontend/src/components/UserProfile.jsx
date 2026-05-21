import { useAuth } from "../Store/AuthStore.js";
import { useNavigate } from "react-router";

function UserProfile() {
  const currentUser = useAuth((state) => state.currentUser);

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-6 py-8 md:py-10">

      {/* PROFILE HEADER */}
      <div className="bg-white border border-[#e8e8ed] rounded-3xl p-6 shadow-sm">

        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">

          {/* Avatar */}
          {currentUser?.profileImageUrl ? (
            <img
              src={currentUser.profileImageUrl}
              className="w-16 h-16 rounded-full object-cover border"
              alt="profile"
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-[#0066cc]/10 text-[#0066cc] flex items-center justify-center text-xl font-semibold">
              {currentUser?.firstname?.charAt(0).toUpperCase()}
            </div>
          )}

          {/* Text */}
          <div>
            <h2 className="text-2xl font-semibold text-[#1d1d1f]">
              Welcome back, {currentUser?.firstname}
            </h2>

            <p className="text-sm text-[#6e6e73] mt-1">
              Read articles, explore ideas and join discussions.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}

export default UserProfile;