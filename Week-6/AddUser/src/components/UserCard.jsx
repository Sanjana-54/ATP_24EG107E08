function UserCard({user,onAddUser}) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 text-center border">
        {/* User name */}
        <h3 className="font-semibold text-lg">{user.name}</h3>
        {/* user email */}
        <p className="text-sm mt-1">{user.email}</p>
        {/* for user button */}
        <button onClick={onAddUser} className="mt-3 bg-emerald-600 text-white px-4 py-1 "> Add User </button>
    </div>
  );
}

export default UserCard