import { useAuth } from "../context/useAuth";

const Home = () => {
  const { user, logoutUser } = useAuth();

  const handleLogout = async () => {
    await logoutUser();
  };

  return (
    <div className="flex flex-col items-start p-4">
      <h1 className="text-4xl font-semibold pb-6">
        Welcome {user ? user.username : "Guest"} 👋
      </h1>
      <button
        onClick={handleLogout}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-200"
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
