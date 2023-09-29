import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../Layouts/Footer";
import Header from "../Layouts/Header";
import { useContext } from "react";
import { useUserContext } from "../Context/UserContext";

const Dashboard = () => {
  const { user, setUser } = useUserContext();
  const navigate = useNavigate();
  const { displayName, photoURL, email } = user;

  const handleLogOut = () => {
    setUser({ isLoggedIn: false });
    navigate("/login");
  };
  return (
    <>
      <h1 className="text-4xl text-center font-bold">Hello, {displayName}</h1>
      <div className="info max-w-sm mx-auto space-y-5 my-8 text-center">
        <img
          className="w-10 h-10 rounded-full inline"
          src={photoURL}
          alt="Rounded avatar"
        />
        <p>
          <b>Name: </b>
          {displayName}
        </p>
        <p>
          <b>Email: </b>
          {email}
        </p>
        <button
          onClick={handleLogOut}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default Dashboard;
