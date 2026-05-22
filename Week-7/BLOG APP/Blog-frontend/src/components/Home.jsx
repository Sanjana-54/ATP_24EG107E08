import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { useAuth } from "../Store/AuthStore";
import { toast } from "react-hot-toast";


import {
  articleGrid,
  articleCardClass,
  articleTitle,
  articleExcerpt,
  timestampClass,
  ghostBtn,
  inputClass,
  loadingClass,
  errorClass,
} from "../styles/common";

function Home() {
  const navigate = useNavigate();

  const isAuthenticated = useAuth((state) => state.isAuthenticated);

  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // fetch articles after login
  useEffect(() => {
    //if (!isAuthenticated) return;

    const getArticles = async () => {
      setLoading(true);

      try {
        let res = await axios.get(
          "https://blog-app-jc18.onrender.com/user-api/articles"

        );

        if (res.status === 200) {
          setArticles(res.data.payload);
        }
      } catch (err) {
        setError(
          err.response?.data?.message || "Failed to fetch articles"
        );
      } finally {
        setLoading(false);
      }
    };

    getArticles();
  }, [isAuthenticated]);

  // search filter
  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(search.toLowerCase()) ||
      article.category.toLowerCase().includes(search.toLowerCase())
  );

  // open article
  const openArticle = (article) => {
    navigate(`/article/${article._id}`, {
      state: article,
    });
  };

  // like article
  const likeArticle = async (articleId) => {

  // not logged in
  if (!isAuthenticated) {
    toast.error("Please login to like articles ❤️");
    return;
  }

  try {

    let res = await axios.put(
      `https://blog-app-jc18.onrender.com/user-api/like/${articleId}`,
      {},
      { withCredentials: true }
    );

    if (res.status === 200) {

      // already liked
      if (res.data.message === "Already liked") {

        toast("You already liked this article ❤️");

      } else {

        toast.success("Article liked ❤️");

      }

      setArticles((prev) =>
        prev.map((article) =>
          article._id === articleId
            ? res.data.payload
            : article
        )
      );
    }

  } catch (err) {

    toast.error("Login required to like articles");

  }
};
 
  // date formatter
  const formatDate = (date) => {
    return new Date(date).toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
    });
  };

  // loading
  if (loading) {
    return (
      <p className={loadingClass}>
        Loading articles...
      </p>
    );
  }

  // error
  if (error) {
    return (
      <p className={errorClass}>
        {error}
      </p>
    );
  }

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-10 md:py-14">

      {/* BEFORE LOGIN */}
     

        <div className="max-w-4xl pt-10 md:pt-16">

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-800 leading-tight">
            Discover Stories, Ideas & Inspiration
          </h1>

          <p className="mt-6 text-blue-600 text-base sm:text-lg leading-8 max-w-3xl">
            Dive into trending articles, insightful blogs, and creative thoughts
            from passionate writers around the world.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold text-blue-400 mt-12">
            Log In To Find Latest Articles!!
          </h3>

        </div>

   

          {/* SEARCH */}
          <div className="mb-10">
                 {isAuthenticated && (
            <p className="text-sm text-[#6e6e73] mb-2">
              Welcome back 👋
            </p>
            )}

            <h2 className="text-3xl font-bold text-[#1d1d1f] mb-2">
              Latest Articles
            </h2>

            <p className="text-[#6e6e73] mb-5">
              Explore ideas from different writers.
            </p>

            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={`${inputClass} w-full max-w-xl`}
            />

          </div>

          {/* EMPTY STATE */}
          {filteredArticles.length === 0 ? (

            <div className="bg-[#f5f5f7] rounded-3xl py-14 text-center text-[#a1a1a6]">
              No matching articles found.
            </div>

          ) : (

            <div className={articleGrid}>

              {filteredArticles.map((article) => (

                <div
                  key={article._id}
                  className={`${articleCardClass} flex flex-col rounded-3xl`}
                >

                  <div>

                    {/* Category */}
                    <p className="text-xs text-[#0066cc] uppercase font-semibold mb-2">
                      {article.category}
                    </p>

                    {/* Title */}
                    <p className={articleTitle}>
                      {article.title}
                    </p>

                    {/* Content */}
                    <p className={`${articleExcerpt} mt-3`}>
                      {article.content.slice(0, 80)}...
                    </p>

                    {/* Date */}
                    <p className={`${timestampClass} mt-4`}>
                      {formatDate(article.createdAt)}
                    </p>

                    {/* Read Time */}
                    <p className="text-xs text-[#a1a1a6] mt-1">
                      Estimated read:{" "}
                      {Math.ceil(
                        article.content.split(" ").length / 200
                      )}{" "}
                      min
                    </p>

                    {/* Likes */}
                    <p className="text-sm text-pink-500 mt-3">
                      ❤️ {article.likes?.length || 0} Likes
                    </p>

                  </div>

                  {/* Buttons */}
                  <div className="mt-auto pt-5 flex items-center justify-between">

                    <button
                      className={ghostBtn}
                      onClick={() => openArticle(article)}
                    >
                      Continue Reading →
                    </button>

                    <button
                      onClick={() => likeArticle(article._id)}
                      className="text-sm text-pink-500"
                    >
                      ❤️ Like
                    </button>

                  </div>

                </div>

              ))}
            </div>

            )}
    </div>
  );
}

export default Home;

