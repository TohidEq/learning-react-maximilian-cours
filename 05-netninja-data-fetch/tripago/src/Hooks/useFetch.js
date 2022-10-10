import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const json = await response.json();
        setError(null);
        setData(json);
        setIsPending(false);
      } catch (err) {
        setError(err.message);
        setIsPending(false);
        console.log(err.message);
      }
    };
    fetchData();
  }, [url]);

  return { data, isPending, error };
};
