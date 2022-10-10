import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      setIsPending(true);
      try {
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const json = await response.json();
        setError(null);
        setData(json);
        setIsPending(false);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("The fetch was aborted! useFetch.js");
        } else {
          setError(err.message);
          setIsPending(false);
          console.log(err.message);
        }
      }
    };
    fetchData();

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, isPending, error };
};
