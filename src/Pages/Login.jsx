import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook, AiFillGithub } from "react-icons/ai";

import { UserContext } from "../Context/UserContext";

const Login = () => {
  const {
    loading,
    user,
    signIn,
    signInWithGoogle,
    signInWithFacebook,
    signInWithGithub,
  } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    signIn(email.value, password.value);
    // navigate("/dashboard");
  };

  if (loading) {
    return <p>loading data...</p>;
  }

  return (
    <div className="max-w-md mx-auto flex flex-col space-y-5">
      <h1 className="mb-5 text-2xl text-center font-bold text-black dark:text-white sm:text-3xl">
        Login form
      </h1>
      <div className="border-2 border-gray-400 p-5 rounded-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="name@flowbite.com"
              required=""
              name="email"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required=""
              name="password"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Log in
          </button>
        </form>
      </div>
      <div className="flex flex-wrap gap-4 justify-center items-center">
        <button
          onClick={signInWithGoogle}
          className="flex gap-2 items-center bg-gray-50 text-slate-800 py-2 px-6 font-semibold rounded-lg capitalize"
        >
          <FcGoogle /> Login with google
        </button>
        <button
          onClick={signInWithFacebook}
          className="flex gap-2 items-center bg-blue-700 text-white py-2 px-6 font-semibold rounded-lg capitalize"
        >
          <AiFillFacebook /> Login with Facebook
        </button>
        <button
          onClick={signInWithGithub}
          className="flex gap-2 items-center text-gray-50 bg-slate-800 py-2 px-6 font-semibold rounded-lg capitalize"
        >
          <AiFillGithub /> Login with Github
        </button>
      </div>
      <div>
        <p>
          Don't have account? please{" "}
          <Link to="/signup">
            <span className="text-blue-700">sign up here.</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
