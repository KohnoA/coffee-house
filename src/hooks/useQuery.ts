import { useState, useEffect } from 'react';

export function useQuery<T>(url: string) {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);

        const response = await fetch(url);

        setData(await response.json());
      } catch (err) {
        if (err instanceof Error) setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [url]);

  return { data, isLoading, error };
}
