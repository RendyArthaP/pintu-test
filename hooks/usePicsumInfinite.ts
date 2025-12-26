import { getPicsumList } from "@/services/picsum/picsum.services";
import { useInfiniteQuery } from "@tanstack/react-query";

const LIMIT = 10;

export const usePicsumInfinite = () => {
  return useInfiniteQuery({
    queryKey: ["picsum"],
    queryFn: ({ pageParam = 1 }) => getPicsumList(pageParam, LIMIT),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length < LIMIT) return undefined;
      return allPages.length + 1;
    },
  });
};
