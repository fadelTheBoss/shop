import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    (async function () {
      try {
        setLoading(false);
        const res = await fetch(url);
        const response = await res.json();
        setData({ ...response });
      } catch (err) {
        setError(err)
      }
    })();
  }, [url]);

  return {data, loading, error}
};

export default useFetch;
