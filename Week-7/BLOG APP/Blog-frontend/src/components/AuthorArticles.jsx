import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { useAuth } from "../Store/AuthStore";

import {
  articleCardClass,
  articleTitle,
  articleExcerpt,
  articleMeta,
  ghostBtn,
  loadingClass,
  errorClass,
  emptyStateClass,
  articleStatusActive,
  articleStatusDeleted,
} from "../styles/common";

function AuthorArticles() {
  const navigate = useNavigate();
  const user = useAuth((state) => state.currentUser);

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // fetch author's articles
  useEffect(() => {
    if (!user) return;

    const getAuthorArticles = async () => {
      setLoading(true);

      try {
        let res = await axios.get(
          "https://blog-app-jc18.onrender.com/author-api/articles",
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

    getAuthorArticles();
  }, [user]);

  // open article
  const openArticle = (article) => {
    navigate(`/article/${article._id}`, {
      state: article,
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

  // empty
  if (articles.length === 0) {
    return (
      <div className={emptyStateClass}>
        You haven't published any articles yet.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

      {articles.map((article) => (
        <div
          key={article._id}
          className={`${articleCardClass} relative flex flex-col`}
        >

          {/* Status */}
          <span
            className={
              article.isArticleActive
                ? articleStatusActive
                : articleStatusDeleted
            }
          >
            {article.isArticleActive
              ? "ACTIVE"
              : "DELETED"}
          </span>

          {/* Content */}
          <div className="flex flex-col gap-2">

            <p className={articleMeta}>
              {article.category}
            </p>

            <p className={articleTitle}>
              {article.title}
            </p>

            <p className={articleExcerpt}>
              {article.content.slice(0, 60)}...
            </p>

            <p className="text-xs text-[#a1a1a6] mt-1">
              {Math.ceil(
                article.content.split(" ").length / 200
              )} estimated time to read
            </p>

          </div>

          {/* Button */}
          <button
            className={`${ghostBtn} mt-auto pt-4`}
            onClick={() => openArticle(article)}
          >
            Read Article →
          </button>

        </div>
      ))}
    </div>
  );
}

export default AuthorArticles;