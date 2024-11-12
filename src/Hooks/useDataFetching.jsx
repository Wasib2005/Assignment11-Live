import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useDataFetching = (
  _url,
  method = "get",
  body = null,
  main_url = import.meta.env.VITE_DATABASE_URL
) => {
  const url = `${main_url}/${_url}`;

  console.log(url);

  const fetchDataWithAxios = async () => {
    const config = {
        url,
        method,
      };
      if (body) config.data = body
    const res = await axios(config)

    return res.data
  };

  const { data, isLoading, error } = useQuery({
    queryKey: [url],
    queryFn: fetchDataWithAxios, 
  });
  return { data, isLoading, error };
};

export default useDataFetching;
