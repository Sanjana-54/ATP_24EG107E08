import { useEffect, useState } from "react";
import axios from "axios";


function AdminProfile() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // fetch all users
  const getUsers = async () => {
     setLoading(true);
    let res = await axios.get(
      "https://blog-app-jc18.onrender.com/admin-api/users",
      { withCredentials: true }
    );

    if (res.status === 200) {
      setUsers(res.data.payload);
    }
    setLoading(false);
  };

  // block / unblock
  const toggleBlock = async (user) => {
    await axios.put(
      "https://blog-app-jc18.onrender.com/admin-api/block",
      {
        email: user.email,
        isUserActive: !user.isUserActive,
      },
      { withCredentials: true }
    );

    // refresh list
    getUsers();
  };

  // load on page open
  useEffect(() => {
    getUsers();
  }, []);
  if (loading) {
  return (
    <p className="text-center mt-10 text-gray-500">
      Loading...
    </p>
  );
}

  return (
  <div className="max-w-5xl mx-auto px-4 py-8">
    
    {/* Heading */}
    <div className="mb-8">
      <h2 className="text-3xl font-bold text-gray-900">
        Admin Dashboard
      </h2>

      <p className="text-gray-500 mt-1">
        Manage users and access
      </p>

      <p className="text-sm text-gray-400 mt-2">
        Total Users: {users.length}
      </p>
    </div>

    {/* Users */}
    <div className="space-y-4">
      {users.map((user) => (
        <div
          key={user._id}
          className="bg-white border rounded-2xl p-5 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4"
        >
          
          {/* User Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {user.username}
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              {user.email}
            </p>

            <div className="flex gap-2 mt-3">
              
              {/* Role */}
              <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">
                {user.role}
              </span>

              {/* Status */}
              <span
                className={`text-xs px-3 py-1 rounded-full ${
                  user.isUserActive
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {user.isUserActive ? "Active" : "Blocked"}
              </span>
            </div>
          </div>

          {/* Button */}
          <button
            onClick={() => toggleBlock(user)}
            className={`px-5 py-2 text-white rounded-xl ${
              user.isUserActive
                ? "bg-red-500 hover:bg-red-600"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {user.isUserActive ? "Block" : "Unblock"}
          </button>
        </div>
      ))}
    </div>
  </div>
);
}
export default AdminProfile;