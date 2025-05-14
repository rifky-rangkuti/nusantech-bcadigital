import { useQuery } from "@tanstack/react-query";
import { encode } from "qss";
import { config } from "~/utils/constants";
import { MovieResType } from "./movies.type";

const apiPaths = {
  default: "/discover/movie",
  "now-playing": "/movie/now_playing",
  popular: "/movie/popular",
  "top-rated": "/movie/top_rated",
  upcoming: "/movie/upcoming",
  search: "/search/movie",
} as Record<string, string>;

export const useMovies = ({
  category = "default",
  page,
  search,
}: {
  category?: string;
  page: number;
  search: string;
}) => {
  const apiPath = search.length ? apiPaths.search : apiPaths[category];
  const qs = encode({ page, query: search || undefined }, "?");
  const token = process.env.NEXT_PUBLIC_TOKEN;
  return useQuery<MovieResType>({
    queryKey: [apiPath, qs],
    queryFn: () =>
      fetch(config.baseApi + apiPath + qs, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((r) => r.json()),
  });
};
