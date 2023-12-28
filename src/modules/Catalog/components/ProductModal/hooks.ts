import { usePathname, useRouter, useSearchParams } from 'next/navigation';

type UseUrlParamsReturnType = [string | null, (value: string) => void];

export function useUrlParams(key: string): UseUrlParamsReturnType {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const value = searchParams.get(key);

  const setParam = (value: string) => {
    const params = new URLSearchParams(searchParams);

    if (!!value.trim().length) params.set(key, value);
    else params.delete(key);

    router.replace(`${pathname}?${params}`, {
      scroll: false,
      shallow: false,
    });
  };

  return [value, setParam];
}
