import { useSearchParams } from "next/navigation";

export function useGetDecodedSearchParam(name: string) {
  const searchParams = useSearchParams();
  const component = searchParams.get(name);
  return component ? decodeURIComponent(component) : "";
}
