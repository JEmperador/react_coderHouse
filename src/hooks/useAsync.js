import { useState, useEffect } from "react";

export const useAsync = (asyncFunction, dependencies = []) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    asyncFunction()
      .then((resp) => {
        setData(resp);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(true);
      });
  }, dependencies);

  return { data, error, loading };
};
