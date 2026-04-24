import { useEffect, useState } from "react";
import axios from "axios";

function AdminProfile() {
  const [users, setUsers] = useState([]);

  // fetch all users
  const getUsers = async () => {
    let res = await axios.get(
      "https://blog-app-jc18.onrender.com/admin-api/users",
      { withCredentials: true }
    );

    if (res.status === 200) {
      setUsers(res.data.payload);
    }
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

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-5">Admin Dashboard</h2>

      {users.map((user) => (
        <div
          key={user._id}
          className="border p-3 mb-3 flex justify-between items-center"
        >
          <div>
            <p><b>Email:</b> {user.email}</p>
            <p><b>Role:</b> {user.role}</p>
          </div>

          <button
            onClick={() => toggleBlock(user)}
            className={`px-4 py-1 text-white ${
              user.isUserActive ? "bg-green-600" : "bg-red-600"
            }`}
          >
            {user.isUserActive ? "Unblock" : "Block"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default AdminProfile;