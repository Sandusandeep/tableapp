import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [state, setState] = useState({
    data: [],
    message: "",
    loading: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();

        setState({
          data: result,
          message: "Successful data fetch!",
          loading: false,
        });
      } catch (error) {
        setState({
          data: [],
          message: error.message,
          loading: false,
        });
      }
    };

    fetchData();
  }, [url]);

  return state;
};

export default useFetch;
