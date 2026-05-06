import { useEffect, useState } from "react";
import axios from "axios";
import {
  loadingClass,
  errorClass,
  emptyStateClass,
  articleCardClass,
} from "../styles/common";
import { toast } from "react-hot-toast";

function AuthorList() {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch authors
  useEffect(() => {
    const fetchAuthors = async () => {
      setLoading(true);

      try {
        const res = await axios.get(
          "https://blog-app-jc18.onrender.com/admin-api/authors",
          { withCredentials: true }
        );

        setAuthors(res.data.payload);
      } catch (err) {
        console.log(err);

        setError(
          err.response?.data?.message || "Failed to fetch authors"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchAuthors();
  }, []);

  // Activate / Deactivate author
  const toggleAuthorStatus = async (author) => {
    try {
      const res = await axios.put(
        "https://blog-app-jc18.onrender.com/admin-api/block",
        {
          email: author.email,
          isUserActive: !author.isUserActive,
        },
        { withCredentials: true }
      );

      if (res.status === 200) {
        toast.success(res.data.message);

        // Update UI instantly
        setAuthors((prevAuthors) =>
          prevAuthors.map((a) =>
            a._id === author._id ? res.data.payload : a
          )
        );
      }
    } catch (err) {
      console.log(err);

      toast.error(
        err.response?.data?.message || "Operation failed"
      );
    }
  };

  // Loading
  if (loading) {
    return <p className={loadingClass}>Loading authors...</p>;
  }

  // Error
  if (error) {
    return <p className={errorClass}>{error}</p>;
  }

  // Empty
  if (authors.length === 0) {
    return (
      <div className={emptyStateClass}>
        No authors found.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {authors.map((author) => (
        <div
          key={author._id}
          className={`${articleCardClass} relative flex flex-col`}
        >
          {/* Author Info */}
          <div className="flex items-center gap-4 mb-4">
            {author.profileImageUrl ? (
              <img
                src={author.profileImageUrl}
                alt="Author"
                className="w-12 h-12 rounded-full object-cover"
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center font-bold text-gray-500">
                {author.firstname?.charAt(0).toUpperCase()}
              </div>
            )}

            <div className="overflow-hidden">
              <p className="font-semibold truncate">
                {author.firstname} {author.lastname}
              </p>

              <p className="text-xs text-gray-500 truncate">
                {author.email}
              </p>

              <p className="text-xs text-blue-500 mt-1">
                {author.role}
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
            <span
              className={`text-xs font-bold px-2 py-1 rounded-md ${
                author.isUserActive
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {author.isUserActive ? "ACTIVE" : "INACTIVE"}
            </span>

            <button
              onClick={() => toggleAuthorStatus(author)}
              className={`text-sm font-medium px-4 py-1.5 rounded-full transition-colors duration-200 ${
                author.isUserActive
                  ? "bg-red-50 text-red-600 hover:bg-red-100"
                  : "bg-green-50 text-green-600 hover:bg-green-100"
              }`}
            >
              {author.isUserActive ? "Deactivate" : "Activate"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AuthorList;