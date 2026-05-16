import { useAuth } from "../Store/AuthStore.js";
import { useNavigate } from "react-router";

import axios from "axios";
import { useEffect, useState } from "react";

import {
  articleGrid,
  articleCardClass,
  articleTitle,
  ghostBtn,
  loadingClass,
  errorClass,
  timestampClass,
} from "../styles/common.js";

function UserProfile() {
  const currentUser = useAuth((state) => state.currentUser);
  console.log(currentUser)
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      setLoading(true);
      try {
        //read articles of all authors
        let res=await axios.get("https://blog-app-jc18.onrender.com/user-api/articles",{withCredentials:true})
        //update articles state
        if(res.status===200){
          setArticles(res.data.payload)
        }
      } catch (err) {
        setError(err.response?.data?.error || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    getArticles();
  }, []);

  // convert UTC → IST
  const formatDateIST = (date) => {
    return new Date(date).toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  const navigateToArticleByID = (articleObj) => {
    navigate(`/article/${articleObj._id}`, {
      state: articleObj,
    });
  };

  if (loading) {
    return <p className={loadingClass}>Loading articles...</p>;
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      {/* ERROR */}
      {error && <p className={errorClass}>{error}</p>}

      {/* PROFILE HEADER */}
      <div className="bg-white border border-[#e8e8ed] rounded-3xl p-6 mb-8 shadow-sm flex items-center justify-between">
        {/* LEFT */}
        <div className="flex items-center gap-4">
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

          {/* Name */}
          <div>
           <h2 className="text-2xl font-semibold text-[#1d1d1f]">
              Welcome back, {currentUser?.firstname}
          </h2>
          <p className="text-sm text-[#6e6e73] mt-1">
    Explore the latest stories and ideas.
  </p>
</div>
        </div>
      </div>

      {/* ARTICLES SECTION */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-[#1d1d1f] mb-4">Latest Articles</h3>

        {/* EMPTY STATE */}
        {articles.length === 0 ? (
          <p className="text-[#a1a1a6] text-sm text-center py-10">No articles available yet</p>
        ) : (
          <div className={articleGrid}>
            {articles.map((articleObj) => (
              <div className={articleCardClass} key={articleObj._id}>
                <div className="flex flex-col h-full">
                  {/* TOP */}
                  <div>
                    <p className={articleTitle}>{articleObj.title}</p>

                    <p className="text-sm text-[#6e6e73] mt-1">{articleObj.content.slice(0, 80)}...</p>

                    <p className={`${timestampClass} mt-2`}>{formatDateIST(articleObj.createdAt)}</p>
                  </div>

                  {/* ACTION */}
                  <button className={`${ghostBtn} mt-auto pt-4`} onClick={() => navigateToArticleByID(articleObj)}>
                    Read Article →
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default UserProfile;