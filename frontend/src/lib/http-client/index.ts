import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

export const httpClient = axios.create({
  baseURL: 'http://localhost:3001',
});

interface Params {
  take?: number;
  skip?: number;
  filter?: string;
}

export const useHttpClient = <T = any>(path: string, params?: Params) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const result = await httpClient.get<T>(path, {
        params: {
          take: params?.take,
          skip: params?.skip,
          filter: params?.filter,
        },
      });

      setData(result.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [path, params?.filter, params?.skip, params?.take]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
};
