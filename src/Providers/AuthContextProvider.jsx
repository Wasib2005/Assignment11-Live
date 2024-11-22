import PropTypes from "prop-types";

import { AuthContext } from "../Contexts/AuthContext";
import { useContext, useEffect, useState } from "react";
import { LoadingContext } from "../Contexts/LoadingContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Auth/Auth";
import axios from "axios";

const AuthContextProvider = ({ children }) => {
  const { setIsLoading } = useContext(LoadingContext);
  const [user, setUser] = useState(null);
  const [isUserOwner, setIsUserOwner] = useState(false);
  const userData = { user, setUser, isUserOwner };

  const clearCookie = () => {
    document.cookie =
      "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {

      setIsUserOwner(false);
      clearCookie();
      setUser(currentUser);
      
      axios
        .post(
          `${import.meta.env.VITE_DATABASE_URL}/user_perm`,
          { email: currentUser?.email },
          {
            withCredentials: true,
          }
        )
        .then((res) => setIsUserOwner(res.data.isUserOwner));

      setIsLoading(false);
    });
    return () => unSubscribe();
  }, [setIsLoading]);

  return (
    <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContextProvider;
