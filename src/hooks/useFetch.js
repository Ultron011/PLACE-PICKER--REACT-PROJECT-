import { useEffect, useState } from "react"

const useFetch = (fetchFn, initialValue ) => {

    const [isFetching, setIsFetching] = useState()
    const [error, setError] = useState();
    const [fetchedData, setFetchedData] = useState(initialValue);

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const data = await fetchFn();
        setFetchedData(data);
      } catch (error) {
        setError({ message: error.message || 'Failed to fetch data.' });
      }

      setIsFetching(false);
    }

    fetchData();
  }, [fetchFn]);

  return {
    isFetching,
    fetchedData, 
    setFetchedData,
    error
  }
}

export default useFetch;
