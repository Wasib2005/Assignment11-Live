import PropTypes from "prop-types";

import { AuthContext } from "../Contexts/AuthContext";
import { useContext, useEffect, useState } from "react";
import { LoadingContext } from "../Contexts/LoadingContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Auth/Auth";

const AuthContextProvider = ({ children }) => {
  const { setIsLoading } = useContext(LoadingContext);
  const [user, setUser] = useState(null);
  const userData = { user, setUser };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });
    return () => unSubscribe();
  }, [setIsLoading]);

  console.log(user);

  return (
    <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContextProvider;
