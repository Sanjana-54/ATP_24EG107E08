import { useEffect, useState } from "react";
import axios from "axios";
import {
  loadingClass,
  errorClass,
  emptyStateClass,
  articleCardClass,
} from "../styles/common";
import { toast } from "react-hot-toast";

function UsersList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch all users
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);

      try {
        const res = await axios.get(
          "https://blog-app-jc18.onrender.com/admin-api/users",
          { withCredentials: true }
        );

        setUsers(res.data.payload);
      } catch (err) {
        console.log(err);

        setError(
          err.response?.data?.message || "Failed to fetch users"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Activate / Deactivate user
  const toggleUserStatus = async (user) => {
    try {
      const res = await axios.put(
        "https://blog-app-jc18.onrender.com/admin-api/block",
        {
          email: user.email,
          isUserActive: !user.isUserActive,
        },
        { withCredentials: true }
      );

      if (res.status === 200) {
        toast.success(res.data.message);

        // Update UI instantly
        setUsers((prevUsers) =>
          prevUsers.map((u) =>
            u._id === user._id ? res.data.payload : u
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
    return <p className={loadingClass}>Loading users...</p>;
  }

  // Error
  if (error) {
    return <p className={errorClass}>{error}</p>;
  }

  // Empty
  if (users.length === 0) {
    return (
      <div className={emptyStateClass}>
        No users found.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {users.map((user) => (
        <div
          key={user._id}
          className={`${articleCardClass} relative flex flex-col`}
        >
          {/* User Info */}
          <div className="flex items-center gap-4 mb-4">
            {user.profileImageUrl ? (
              <img
                src={user.profileImageUrl}
                alt="User"
                className="w-12 h-12 rounded-full object-cover"
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center font-bold text-gray-500">
                {user.firstname?.charAt(0).toUpperCase()}
              </div>
            )}

            <div className="overflow-hidden">
              <p className="font-semibold truncate">
                {user.firstname} {user.lastname}
              </p>

              <p className="text-xs text-gray-500 truncate">
                {user.email}
              </p>

              <p className="text-xs text-blue-500 mt-1">
                {user.role}
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
            <span
              className={`text-xs font-bold px-2 py-1 rounded-md ${
                user.isUserActive
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {user.isUserActive ? "ACTIVE" : "INACTIVE"}
            </span>

            <button
              onClick={() => toggleUserStatus(user)}
              className={`text-sm font-medium px-4 py-1.5 rounded-full transition-colors duration-200 ${
                user.isUserActive
                  ? "bg-red-50 text-red-600 hover:bg-red-100"
                  : "bg-green-50 text-green-600 hover:bg-green-100"
              }`}
            >
              {user.isUserActive ? "Deactivate" : "Activate"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UsersList;