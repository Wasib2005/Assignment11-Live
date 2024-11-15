import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useEffect } from "react";
import { LoadingContext } from "../Contexts/LoadingContext";

const useDataFetching = (
  _url,
  setRefetchInterval = null,
  focusRefetch = false,
  method = "get",
  body = null,
  main_url = import.meta.env.VITE_DATABASE_URL
) => {
  const url = `${main_url}/${_url}`;

  const fetchDataWithAxios = async () => {
    const config = {
      url,
      method,
    };
    if (body) config.data = body;
    try {
      const res = await axios(config);
      return res.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "An error occurred while fetching data"
      );
    }
  };

  const { data, isLoading, error } = useQuery({
    queryKey: [url],
    queryFn: fetchDataWithAxios,
    refetchOnWindowFocus: focusRefetch,
    refetchInterval: setRefetchInterval,
  });
  const { setIsLoading, setError } = useContext(LoadingContext);

  useEffect(() => {
    setIsLoading(isLoading);
    setError(error);
  }, [isLoading, error, setIsLoading, setError]);

  return { data, isLoading, error };
};

export default useDataFetching;
