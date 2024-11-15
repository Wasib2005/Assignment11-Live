import PropTypes from "prop-types";
import { LoadingContext } from "../Contexts/LoadingContext";
import { useState } from "react";

const LoadingContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();
  const loadingStatus = { isLoading, setIsLoading, error, setError };
  return (
    <LoadingContext.Provider value={loadingStatus}>
      {children}
    </LoadingContext.Provider>
  );
};

LoadingContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LoadingContextProvider;
