import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { useAuth } from "../Store/AuthStore";

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
    if (!isAuthenticated) return;

    const getArticles = async () => {
      setLoading(true);

      try {
        let res = await axios.get(
          "https://blog-app-jc18.onrender.com/user-api/articles",
          { withCredentials: true }
        );

        if (res.status === 200) {
          setArticles(res.data.payload);
        }
      } catch (err) {
        setError(
          err.response?.data?.error || "Failed to fetch articles"
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

  // navigate article
  const openArticle = (article) => {
    navigate(`/article/${article._id}`, {
      state: article,
    });
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
      {!isAuthenticated ? (
        <div className="max-w-4xl pt-10 md:pt-16">

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-800 leading-tight">
            Discover Stories, Ideas & Inspiration
          </h1>

          <p className="mt-6 text-blue-600 text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed">
            Dive into trending articles, insightful blogs, and creative thoughts
            from passionate writers around the world.
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold text-blue-400 mt-12">
            Log In To Find Latest Articles!!
          </h3>

        </div>
      ) : (
        <>
          {/* SEARCH */}
          <div className="mb-8">

            <h2 className="text-3xl font-bold text-[#1d1d1f] mb-2">
              Latest Articles
            </h2>

            <p className="text-[#6e6e73] mb-4">
              Explore ideas from different writers.
            </p>

            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={`${inputClass} w-full`}
            />
            
          </div>

          {/* ARTICLES */}
          {filteredArticles.length === 0 && (
  <p className="text-center text-[#a1a1a6] py-10">
    No matching articles found.
  </p>
)}

          <div className={articleGrid}>

            {filteredArticles.map((article) => (
              <div
                key={article._id}
                className={`${articleCardClass} flex flex-col`}
              >

                <div>
                  <p className="text-xs text-[#0066cc] uppercase font-semibold mb-2">
  {article.category}
</p>

                  <p className={articleTitle}>
                    {article.title}
                  </p>

                  <p className={`${articleExcerpt} mt-2`}>
                    {article.content.slice(0, 80)}...
                  </p>

                  <p className={`${timestampClass} mt-3`}>
                    {formatDate(article.createdAt)}
                  </p>

                  <p className="text-xs text-[#a1a1a6] mt-1">
                    {Math.ceil(
                      article.content.split(" ").length / 200
                    )}{" "}
                    min read
                  </p>

                </div>

                <button
                  className={`${ghostBtn} mt-auto pt-4`}
                  onClick={() => openArticle(article)}
                >
                  Read Article →
                </button>

              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;