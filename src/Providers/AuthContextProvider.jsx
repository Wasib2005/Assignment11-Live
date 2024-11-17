import PropTypes from "prop-types";

import { AuthContext } from "../Contexts/AuthContext";

const AuthContextProvider = ({ children }) => {

  const userData = {user:1};
  return (
    <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContextProvider;
