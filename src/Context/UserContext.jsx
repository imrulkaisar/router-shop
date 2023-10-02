import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext(null);

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const createUser = (email, password) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        console.log(response.user);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const signIn = (email, password) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((resonse) => {
        console.log(resonse.user);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((response) => {
        console.log(response.user);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const signInWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((response) => {
        console.log(response.user);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const signInWithGithub = () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
      .then((response) => {
        console.log(response.user);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const logOut = () => {
    setLoading(true);
    signOut(auth)
      .then((response) => {
        console.log(response.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log("Current user:", currentUser);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const userInfo = {
    loading,
    user,
    createUser,
    signInWithGoogle,
    signInWithFacebook,
    signInWithGithub,
    signIn,
    logOut,
  };

  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
